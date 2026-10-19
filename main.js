// Қабати пайвасткунӣ: Firebase (вуруд + пойгоҳи додаҳо) ва имкониятҳои Android/браузер.
import { initializeApp, deleteApp } from 'firebase/app';
import {
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,
  onAuthStateChanged, updatePassword, reauthenticateWithCredential, EmailAuthProvider
} from 'firebase/auth';
import {
  initializeFirestore, persistentLocalCache, persistentSingleTabManager,
  collection, collectionGroup, doc, getDoc, setDoc, deleteDoc, onSnapshot, query, where
} from 'firebase/firestore';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { firebaseConfig } from './firebase-config.js';

const configured = !String(firebaseConfig.apiKey || '').includes('PASTE') && !!firebaseConfig.projectId && !String(firebaseConfig.projectId).includes('PASTE');
const native = Capacitor.isNativePlatform();

let app = null, auth = null, fs = null;
if (configured) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  fs = initializeFirestore(app, {
    ignoreUndefinedProperties: true,
    localCache: persistentLocalCache({ tabManager: persistentSingleTabManager() })
  });
}

// Навиштан ба навбати маҳаллӣ меравад. Хатои иҷозат одатан дар 1.5 сония меояд.
function fast(p, ms = 1500) {
  p.catch(() => {});
  return Promise.race([p, new Promise(res => setTimeout(res, ms))]);
}

// col: роҳи коллексия (масалан 'courses' ё 'students/ID/access'). 'group:orders' = гурӯҳи ҳамаи зерколлексияҳо.
// Барои гурӯҳҳо id = роҳи пурраи ҳуҷҷат (то ҳамаи хонандагон ҷудо бошанд).
const db = {
  collection: (c, w) => ({
    onSnapshot: (cb, eb) => {
      const isGroup = c.startsWith('group:');
      const base = isGroup ? collectionGroup(fs, c.slice(6)) : collection(fs, c);
      const q = w ? query(base, where(w[0], w[1], w[2])) : base;
      return onSnapshot(q,
        snap => cb({ docs: snap.docs.map(d => ({ id: isGroup ? d.ref.path : d.id, data: () => d.data() })) }),
        e => { if (eb) eb(e); });
    },
    doc: id => ({
      set: d => fast(setDoc(doc(fs, c, id), d)),
      update: d => fast(setDoc(doc(fs, c, id), d, { merge: true })),
      delete: () => fast(deleteDoc(doc(fs, c, id)))
    })
  })
};

async function getD(c, id) {
  const s = await getDoc(doc(fs, c, id));
  return s.exists() ? s.data() : null;
}

async function signIn(key, pw) {
  let l;
  try { l = await getD('logins', key); } catch (e) { throw { code: 'network' }; }
  if (!l) throw { code: 'bad' };
  try { await signInWithEmailAndPassword(auth, l.email, pw); }
  catch (e) { throw { code: (e && e.code === 'auth/network-request-failed') ? 'network' : 'bad' }; }
}
async function signInEmail(email, pw) { return (await signInWithEmailAndPassword(auth, email, pw)).user; }
async function signUp(email, pw) { return (await createUserWithEmailAndPassword(auth, email, pw)).user; }

// Ҳисоби нав бидуни баромадани маъмур аз барнома (барномаи дуюм)
async function createAccount(email, pw) {
  const sec = initializeApp(firebaseConfig, 'sec' + Date.now());
  try {
    const a = getAuth(sec);
    const cred = await createUserWithEmailAndPassword(a, email, pw);
    const u = cred.user.uid;
    await signOut(a);
    return u;
  } finally { try { await deleteApp(sec); } catch (e) {} }
}

async function changePassword(cur, nw) {
  const u = auth.currentUser;
  await reauthenticateWithCredential(u, EmailAuthProvider.credential(u.email, cur));
  await updatePassword(u, nw);
}

function toBase64(bytes) {
  let s = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) s += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  return btoa(s);
}

async function saveFile(name, data) {
  let bytes;
  if (typeof data === 'string') bytes = new TextEncoder().encode(data);
  else if (data instanceof Blob) bytes = new Uint8Array(await data.arrayBuffer());
  else if (data instanceof Uint8Array) bytes = data;
  else bytes = new Uint8Array(data);
  if (!native) {
    const url = URL.createObjectURL(new Blob([bytes]));
    const a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    return true;
  }
  const res = await Filesystem.writeFile({ path: name, data: toBase64(bytes), directory: Directory.Cache });
  try { await Share.share({ title: name, dialogTitle: name, url: res.uri }); } catch (e) { return false; }
  return true;
}

window.FSX = {
  configured, native, db,
  getDoc: getD,
  signIn, signInEmail, signUp, createAccount, changePassword,
  signOut: () => signOut(auth),
  onAuth: cb => onAuthStateChanged(auth, cb),
  saveFile,
  onBack: cb => { if (native) App.addListener('backButton', cb); },
  exitApp: () => { if (native) App.exitApp(); }
};
