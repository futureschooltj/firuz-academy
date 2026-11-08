(()=>{var S_=Object.defineProperty;var Hr=(n,e)=>()=>(n&&(e=n(n=0)),e);var Ua=(n,e)=>{for(var t in e)S_(n,t,{get:e[t],enumerable:!0})};var FE,UE,Fg,rA,iA,Nr,$i,BE,qE,jE,Or,en,sA,dt,Lg,Mg,gh,oA,zE,GE,$E,yh,_h,aA,tn=Hr(()=>{FE=n=>{let e=new Map;e.set("web",{name:"web"});let t=n.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},r=(s,o)=>{t.platforms.set(s,o)},i=s=>{t.platforms.has(s)&&(t.currentPlatform=t.platforms.get(s))};return t.addPlatform=r,t.setPlatform=i,t},UE=n=>n.CapacitorPlatforms=FE(n),Fg=UE(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),rA=Fg.addPlatform,iA=Fg.setPlatform;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Nr||(Nr={}));$i=class extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}},BE=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},qE=n=>{var e,t,r,i,s;let o=n.CapacitorCustomPlatform||null,c=n.Capacitor||{},u=c.Plugins=c.Plugins||{},h=n.CapacitorPlatforms,f=()=>o!==null?o.name:BE(n),m=((e=h?.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||f,v=()=>m()!=="web",A=((t=h?.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||v,C=w=>{let g=K.get(w);return!!(g?.platforms.has(m())||B(w))},k=((r=h?.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||C,D=w=>{var g;return(g=c.PluginHeaders)===null||g===void 0?void 0:g.find(_=>_.name===w)},B=((i=h?.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||D,q=w=>n.console.error(w),M=(w,g,_)=>Promise.reject(`${_} does not have an implementation of "${g}".`),K=new Map,J=(w,g={})=>{let _=K.get(w);if(_)return console.warn(`Capacitor plugin "${w}" already registered. Cannot register plugins twice.`),_.proxy;let I=m(),E=B(w),b,y=async()=>(!b&&I in g?b=typeof g[I]=="function"?b=await g[I]():b=g[I]:o!==null&&!b&&"web"in g&&(b=typeof g.web=="function"?b=await g.web():b=g.web),b),Ke=(fe,be)=>{var pe,re;if(E){let et=E?.methods.find(ve=>be===ve.name);if(et)return et.rtype==="promise"?ve=>c.nativePromise(w,be.toString(),ve):(ve,Bn)=>c.nativeCallback(w,be.toString(),ve,Bn);if(fe)return(pe=fe[be])===null||pe===void 0?void 0:pe.bind(fe)}else{if(fe)return(re=fe[be])===null||re===void 0?void 0:re.bind(fe);throw new $i(`"${w}" plugin is not implemented on ${I}`,Nr.Unimplemented)}},ft=fe=>{let be,pe=(...re)=>{let et=y().then(ve=>{let Bn=Ke(ve,fe);if(Bn){let tt=Bn(...re);return be=tt?.remove,tt}else throw new $i(`"${w}.${fe}()" is not implemented on ${I}`,Nr.Unimplemented)});return fe==="addListener"&&(et.remove=async()=>be()),et};return pe.toString=()=>`${fe.toString()}() { [capacitor code] }`,Object.defineProperty(pe,"name",{value:fe,writable:!1,configurable:!1}),pe},Ki=ft("addListener"),St=ft("removeListener"),nn=(fe,be)=>{let pe=Ki({eventName:fe},be),re=async()=>{let ve=await pe;St({eventName:fe,callbackId:ve},be)},et=new Promise(ve=>pe.then(()=>ve({remove:re})));return et.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await re()},et},rn=new Proxy({},{get(fe,be){switch(be){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return E?nn:Ki;case"removeListener":return St;default:return ft(be)}}});return u[w]=rn,K.set(w,{name:w,proxy:rn,platforms:new Set([...Object.keys(g),...E?[I]:[]])}),rn},z=((s=h?.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||J;return c.convertFileSrc||(c.convertFileSrc=w=>w),c.getPlatform=m,c.handleError=q,c.isNativePlatform=A,c.isPluginAvailable=k,c.pluginMethodNoop=M,c.registerPlugin=z,c.Exception=$i,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c},jE=n=>n.Capacitor=qE(n),Or=jE(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),en=Or.registerPlugin,sA=Or.Plugins,dt=class{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);let s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);let o=async()=>this.removeListener(e,t);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){let i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(t),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new Or.Exception(e,Nr.Unimplemented)}unavailable(e="not available"){return new Or.Exception(e,Nr.Unavailable)}async removeListener(e,t){let r=this.listeners[e];if(!r)return;let i=r.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}},Lg=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Mg=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),gh=class extends dt{async getCookies(){let e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Mg(i).trim(),s=Mg(s).trim(),t[i]=s}),t}async setCookie(e){try{let t=Lg(e.key),r=Lg(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${i}; path=${s}; ${o};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{let e=document.cookie.split(";")||[];for(let t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}},oA=en("CapacitorCookies",{web:()=>new gh}),zE=async n=>new Promise((e,t)=>{let r=new FileReader;r.onload=()=>{let i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>t(i),r.readAsDataURL(n)}),GE=(n={})=>{let e=Object.keys(n);return Object.keys(n).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=n[e[o]],i),{})},$E=(n,e=!0)=>n?Object.entries(n).reduce((r,i)=>{let[s,o]=i,c,u;return Array.isArray(o)?(u="",o.forEach(h=>{c=e?encodeURIComponent(h):h,u+=`${s}=${c}&`}),u.slice(0,-1)):(c=e?encodeURIComponent(o):o,u=`${s}=${c}`),`${r}&${u}`},"").substr(1):null,yh=(n,e={})=>{let t=Object.assign({method:n.method||"GET",headers:n.headers},e),i=GE(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(i.includes("application/x-www-form-urlencoded")){let s=new URLSearchParams;for(let[o,c]of Object.entries(n.data||{}))s.set(o,c);t.body=s.toString()}else if(i.includes("multipart/form-data")||n.data instanceof FormData){let s=new FormData;if(n.data instanceof FormData)n.data.forEach((c,u)=>{s.append(u,c)});else for(let c of Object.keys(n.data))s.append(c,n.data[c]);t.body=s;let o=new Headers(t.headers);o.delete("content-type"),t.headers=o}else(i.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t},_h=class extends dt{async request(e){let t=yh(e,e.webFetchExtra),r=$E(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,t),o=s.headers.get("content-type")||"",{responseType:c="text"}=s.ok?e:{};o.includes("application/json")&&(c="json");let u,h;switch(c){case"arraybuffer":case"blob":h=await s.blob(),u=await zE(h);break;case"json":u=await s.json();break;case"document":case"text":default:u=await s.text()}let f={};return s.headers.forEach((m,v)=>{f[v]=m}),{data:u,headers:f,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}},aA=en("CapacitorHttp",{web:()=>new _h})});var Ug={};Ua(Ug,{AppWeb:()=>vh});var vh,Bg=Hr(()=>{tn();vh=class extends dt{constructor(){super(),this.handleVisibilityChange=()=>{let e={isActive:document.hidden!==!0};this.notifyListeners("appStateChange",e),document.hidden?this.notifyListeners("pause",null):this.notifyListeners("resume",null)},document.addEventListener("visibilitychange",this.handleVisibilityChange,!1)}exitApp(){throw this.unimplemented("Not implemented on web.")}async getInfo(){throw this.unimplemented("Not implemented on web.")}async getLaunchUrl(){return{url:""}}async getState(){return{isActive:document.hidden!==!0}}async minimizeApp(){throw this.unimplemented("Not implemented on web.")}}});var ha,da,Ih=Hr(()=>{(function(n){n.Documents="DOCUMENTS",n.Data="DATA",n.Library="LIBRARY",n.Cache="CACHE",n.External="EXTERNAL",n.ExternalStorage="EXTERNAL_STORAGE"})(ha||(ha={}));(function(n){n.UTF8="utf8",n.ASCII="ascii",n.UTF16="utf16"})(da||(da={}))});var jg={};Ua(jg,{FilesystemWeb:()=>fa});function qg(n){let e=n.split("/").filter(r=>r!=="."),t=[];return e.forEach(r=>{r===".."&&t.length>0&&t[t.length-1]!==".."?t.pop():t.push(r)}),t.join("/")}function KE(n,e){n=qg(n),e=qg(e);let t=n.split("/"),r=e.split("/");return n!==e&&t.every((i,s)=>i===r[s])}var fa,zg=Hr(()=>{tn();Ih();fa=class n extends dt{constructor(){super(...arguments),this.DB_VERSION=1,this.DB_NAME="Disc",this._writeCmds=["add","put","delete"],this.downloadFile=async e=>{var t,r;let i=yh(e,e.webFetchExtra),s=await fetch(e.url,i),o;if(!e.progress)o=await s.blob();else if(!s?.body)o=new Blob;else{let u=s.body.getReader(),h=0,f=[],m=s.headers.get("content-type"),v=parseInt(s.headers.get("content-length")||"0",10);for(;;){let{done:k,value:D}=await u.read();if(k)break;f.push(D),h+=D?.length||0;let B={url:e.url,bytes:h,contentLength:v};this.notifyListeners("progress",B)}let A=new Uint8Array(h),C=0;for(let k of f)typeof k>"u"||(A.set(k,C),C+=k.length);o=new Blob([A.buffer],{type:m||void 0})}return{path:(await this.writeFile({path:e.path,directory:(t=e.directory)!==null&&t!==void 0?t:void 0,recursive:(r=e.recursive)!==null&&r!==void 0?r:!1,data:o})).uri,blob:o}}}async initDb(){if(this._db!==void 0)return this._db;if(!("indexedDB"in window))throw this.unavailable("This browser doesn't support IndexedDB");return new Promise((e,t)=>{let r=indexedDB.open(this.DB_NAME,this.DB_VERSION);r.onupgradeneeded=n.doUpgrade,r.onsuccess=()=>{this._db=r.result,e(r.result)},r.onerror=()=>t(r.error),r.onblocked=()=>{console.warn("db blocked")}})}static doUpgrade(e){let r=e.target.result;switch(e.oldVersion){case 0:case 1:default:r.objectStoreNames.contains("FileStorage")&&r.deleteObjectStore("FileStorage"),r.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}}async dbRequest(e,t){let r=this._writeCmds.indexOf(e)!==-1?"readwrite":"readonly";return this.initDb().then(i=>new Promise((s,o)=>{let h=i.transaction(["FileStorage"],r).objectStore("FileStorage")[e](...t);h.onsuccess=()=>s(h.result),h.onerror=()=>o(h.error)}))}async dbIndexRequest(e,t,r){let i=this._writeCmds.indexOf(t)!==-1?"readwrite":"readonly";return this.initDb().then(s=>new Promise((o,c)=>{let m=s.transaction(["FileStorage"],i).objectStore("FileStorage").index(e)[t](...r);m.onsuccess=()=>o(m.result),m.onerror=()=>c(m.error)}))}getPath(e,t){let r=t!==void 0?t.replace(/^[/]+|[/]+$/g,""):"",i="";return e!==void 0&&(i+="/"+e),t!==""&&(i+="/"+r),i}async clear(){(await this.initDb()).transaction(["FileStorage"],"readwrite").objectStore("FileStorage").clear()}async readFile(e){let t=this.getPath(e.directory,e.path),r=await this.dbRequest("get",[t]);if(r===void 0)throw Error("File does not exist.");return{data:r.content?r.content:""}}async writeFile(e){let t=this.getPath(e.directory,e.path),r=e.data,i=e.encoding,s=e.recursive,o=await this.dbRequest("get",[t]);if(o&&o.type==="directory")throw Error("The supplied path is a directory.");let c=t.substr(0,t.lastIndexOf("/"));if(await this.dbRequest("get",[c])===void 0){let m=c.indexOf("/",1);if(m!==-1){let v=c.substr(m);await this.mkdir({path:v,directory:e.directory,recursive:s})}}if(!i&&!(r instanceof Blob)&&(r=r.indexOf(",")>=0?r.split(",")[1]:r,!this.isBase64String(r)))throw Error("The supplied data is not valid base64 content.");let h=Date.now(),f={path:t,folder:c,type:"file",size:r instanceof Blob?r.size:r.length,ctime:h,mtime:h,content:r};return await this.dbRequest("put",[f]),{uri:f.path}}async appendFile(e){let t=this.getPath(e.directory,e.path),r=e.data,i=e.encoding,s=t.substr(0,t.lastIndexOf("/")),o=Date.now(),c=o,u=await this.dbRequest("get",[t]);if(u&&u.type==="directory")throw Error("The supplied path is a directory.");if(await this.dbRequest("get",[s])===void 0){let m=s.indexOf("/",1);if(m!==-1){let v=s.substr(m);await this.mkdir({path:v,directory:e.directory,recursive:!0})}}if(!i&&!this.isBase64String(r))throw Error("The supplied data is not valid base64 content.");if(u!==void 0){if(u.content instanceof Blob)throw Error("The occupied entry contains a Blob object which cannot be appended to.");u.content!==void 0&&!i?r=btoa(atob(u.content)+atob(r)):r=u.content+r,c=u.ctime}let f={path:t,folder:s,type:"file",size:r.length,ctime:c,mtime:o,content:r};await this.dbRequest("put",[f])}async deleteFile(e){let t=this.getPath(e.directory,e.path);if(await this.dbRequest("get",[t])===void 0)throw Error("File does not exist.");if((await this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)])).length!==0)throw Error("Folder is not empty.");await this.dbRequest("delete",[t])}async mkdir(e){let t=this.getPath(e.directory,e.path),r=e.recursive,i=t.substr(0,t.lastIndexOf("/")),s=(t.match(/\//g)||[]).length,o=await this.dbRequest("get",[i]),c=await this.dbRequest("get",[t]);if(s===1)throw Error("Cannot create Root directory");if(c!==void 0)throw Error("Current directory does already exist.");if(!r&&s!==2&&o===void 0)throw Error("Parent directory must exist");if(r&&s!==2&&o===void 0){let f=i.substr(i.indexOf("/",1));await this.mkdir({path:f,directory:e.directory,recursive:r})}let u=Date.now(),h={path:t,folder:i,type:"directory",size:0,ctime:u,mtime:u};await this.dbRequest("put",[h])}async rmdir(e){let{path:t,directory:r,recursive:i}=e,s=this.getPath(r,t),o=await this.dbRequest("get",[s]);if(o===void 0)throw Error("Folder does not exist.");if(o.type!=="directory")throw Error("Requested path is not a directory");let c=await this.readdir({path:t,directory:r});if(c.files.length!==0&&!i)throw Error("Folder is not empty");for(let u of c.files){let h=`${t}/${u.name}`;(await this.stat({path:h,directory:r})).type==="file"?await this.deleteFile({path:h,directory:r}):await this.rmdir({path:h,directory:r,recursive:i})}await this.dbRequest("delete",[s])}async readdir(e){let t=this.getPath(e.directory,e.path),r=await this.dbRequest("get",[t]);if(e.path!==""&&r===void 0)throw Error("Folder does not exist.");let i=await this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)]);return{files:await Promise.all(i.map(async o=>{let c=await this.dbRequest("get",[o]);return c===void 0&&(c=await this.dbRequest("get",[o+"/"])),{name:o.substring(t.length+1),type:c.type,size:c.size,ctime:c.ctime,mtime:c.mtime,uri:c.path}}))}}async getUri(e){let t=this.getPath(e.directory,e.path),r=await this.dbRequest("get",[t]);return r===void 0&&(r=await this.dbRequest("get",[t+"/"])),{uri:r?.path||t}}async stat(e){let t=this.getPath(e.directory,e.path),r=await this.dbRequest("get",[t]);if(r===void 0&&(r=await this.dbRequest("get",[t+"/"])),r===void 0)throw Error("Entry does not exist.");return{type:r.type,size:r.size,ctime:r.ctime,mtime:r.mtime,uri:r.path}}async rename(e){await this._copy(e,!0)}async copy(e){return this._copy(e,!1)}async requestPermissions(){return{publicStorage:"granted"}}async checkPermissions(){return{publicStorage:"granted"}}async _copy(e,t=!1){let{toDirectory:r}=e,{to:i,from:s,directory:o}=e;if(!i||!s)throw Error("Both to and from must be provided");r||(r=o);let c=this.getPath(o,s),u=this.getPath(r,i);if(c===u)return{uri:u};if(KE(c,u))throw Error("To path cannot contain the from path");let h;try{h=await this.stat({path:i,directory:r})}catch{let C=i.split("/");C.pop();let k=C.join("/");if(C.length>0&&(await this.stat({path:k,directory:r})).type!=="directory")throw new Error("Parent directory of the to path is a file")}if(h&&h.type==="directory")throw new Error("Cannot overwrite a directory with a file");let f=await this.stat({path:s,directory:o}),m=async(A,C,k)=>{let D=this.getPath(r,A),B=await this.dbRequest("get",[D]);B.ctime=C,B.mtime=k,await this.dbRequest("put",[B])},v=f.ctime?f.ctime:Date.now();switch(f.type){case"file":{let A=await this.readFile({path:s,directory:o});t&&await this.deleteFile({path:s,directory:o});let C;!(A.data instanceof Blob)&&!this.isBase64String(A.data)&&(C=da.UTF8);let k=await this.writeFile({path:i,directory:r,data:A.data,encoding:C});return t&&await m(i,v,f.mtime),k}case"directory":{if(h)throw Error("Cannot move a directory over an existing object");try{await this.mkdir({path:i,directory:r,recursive:!1}),t&&await m(i,v,f.mtime)}catch{}let A=(await this.readdir({path:s,directory:o})).files;for(let C of A)await this._copy({from:`${s}/${C.name}`,to:`${i}/${C.name}`,directory:o,toDirectory:r},t);t&&await this.rmdir({path:s,directory:o})}}return{uri:u}}isBase64String(e){try{return btoa(atob(e))==e}catch{return!1}}};fa._debug=!0});var $g={};Ua($g,{ShareWeb:()=>Eh});var Eh,Kg=Hr(()=>{tn();Eh=class extends dt{async canShare(){return typeof navigator>"u"||!navigator.share?{value:!1}:{value:!0}}async share(e){if(typeof navigator>"u"||!navigator.share)throw this.unavailable("Share API not available in this browser");return await navigator.share({title:e.title,text:e.text,url:e.url}),{}}}});var Sd=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},R_=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{let s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4,v=(c&15)<<2|h>>6,A=h&63;u||(A=64,o||(v=64)),r.push(t[f],t[m],t[v],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Sd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):R_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let h=i<n.length?t[n.charAt(i)]:64;++i;let m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new qa;let v=s<<2|c>>4;if(r.push(v),h!==64){let A=c<<4&240|h>>2;if(r.push(A),m!==64){let C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},qa=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},P_=function(n){let e=Sd(n);return Rd.encodeByteArray(e,!0)},za=function(n){return P_(n).replace(/\./g,"")},Ga=function(n){try{return Rd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function C_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var D_=()=>C_().__FIREBASE_DEFAULTS__,k_=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},N_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Ga(n[1]);return e&&JSON.parse(e)},hs=()=>{try{return D_()||k_()||N_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pd=n=>{var e,t;return(t=(e=hs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]};var $a=()=>{var n;return(n=hs())===null||n===void 0?void 0:n.config},Ka=n=>{var e;return(e=hs())===null||e===void 0?void 0:e[`_${n}`]};var ls=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function O_(){var n;let e=(n=hs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kd(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Od(){let n=ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Wa(){return!O_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ds(){try{return typeof indexedDB=="object"}catch{return!1}}function xd(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var x_="FirebaseError",Ue=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=x_,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gt.prototype.create)}},gt=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?V_(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Ue(i,c,r)}};function V_(n,e){return n.replace(L_,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var L_=/\{\$([^}]+)}/g;function Vd(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Dt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],o=e[i];if(Ad(s)&&Ad(o)){if(!Dt(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Ad(n){return n!==null&&typeof n=="object"}function $n(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Kn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Wn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ld(n,e){let t=new ja(n,e);return t.subscribe.bind(t)}var ja=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");M_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ba),i.error===void 0&&(i.error=Ba),i.complete===void 0&&(i.complete=Ba);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function M_(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ba(){}var rT=4*60*60*1e3;function se(n){return n&&n._delegate?n._delegate:n}var je=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var un="[DEFAULT]";var Ha=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new ls;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U_(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,o]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:F_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function F_(n){return n===un?void 0:n}function U_(n){return n.instantiationMode==="EAGER"}var fs=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Ha(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var B_=[],H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));var q_={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},j_=H.INFO,z_={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},G_=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=z_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},kt=class{constructor(e){this.name=e,this._logLevel=j_,this._logHandler=G_,this._userLogHandler=null,B_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?q_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}};var $_=(n,e)=>e.some(t=>n instanceof t),Md,Fd;function K_(){return Md||(Md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W_(){return Fd||(Fd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Ud=new WeakMap,Ja=new WeakMap,Bd=new WeakMap,Qa=new WeakMap,Xa=new WeakMap;function H_(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(nt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ud.set(t,n)}).catch(()=>{}),Xa.set(e,n),e}function Q_(n){if(Ja.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ja.set(n,e)}var Ya={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ja.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qd(n){Ya=n(Ya)}function J_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(ps(this),e,...t);return Bd.set(r,e.sort?e.sort():[e]),nt(r)}:W_().includes(n)?function(...e){return n.apply(ps(this),e),nt(Ud.get(this))}:function(...e){return nt(n.apply(ps(this),e))}}function Y_(n){return typeof n=="function"?J_(n):(n instanceof IDBTransaction&&Q_(n),$_(n,K_())?new Proxy(n,Ya):n)}function nt(n){if(n instanceof IDBRequest)return H_(n);if(Qa.has(n))return Qa.get(n);let e=Y_(n);return e!==n&&(Qa.set(n,e),Xa.set(e,n)),e}var ps=n=>Xa.get(n);function zd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(n,e),c=nt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(nt(o.result),u.oldVersion,u.newVersion,nt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}var X_=["get","getKey","getAll","getAllKeys","count"],Z_=["put","add","delete","clear"],Za=new Map;function jd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Za.get(e))return Za.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Z_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||X_.includes(t)))return;let s=async function(o,...c){let u=this.transaction(o,i?"readwrite":"readonly"),h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return Za.set(e,s),s}qd(n=>({...n,get:(e,t,r)=>jd(e,t)||n.get(e,t,r),has:(e,t)=>!!jd(e,t)||n.has(e,t)}));var tc=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ey(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function ey(n){let e=n.getComponent();return e?.type==="VERSION"}var nc="@firebase/app",Gd="0.10.13";var _t=new kt("@firebase/app"),ty="@firebase/app-compat",ny="@firebase/analytics-compat",ry="@firebase/analytics",iy="@firebase/app-check-compat",sy="@firebase/app-check",oy="@firebase/auth",ay="@firebase/auth-compat",cy="@firebase/database",uy="@firebase/data-connect",ly="@firebase/database-compat",hy="@firebase/functions",dy="@firebase/functions-compat",fy="@firebase/installations",py="@firebase/installations-compat",my="@firebase/messaging",gy="@firebase/messaging-compat",_y="@firebase/performance",yy="@firebase/performance-compat",vy="@firebase/remote-config",wy="@firebase/remote-config-compat",Iy="@firebase/storage",Ey="@firebase/storage-compat",Ty="@firebase/firestore",by="@firebase/vertexai-preview",Ay="@firebase/firestore-compat",Sy="firebase",Ry="10.14.1";var rc="[DEFAULT]",Py={[nc]:"fire-core",[ty]:"fire-core-compat",[ry]:"fire-analytics",[ny]:"fire-analytics-compat",[sy]:"fire-app-check",[iy]:"fire-app-check-compat",[oy]:"fire-auth",[ay]:"fire-auth-compat",[cy]:"fire-rtdb",[uy]:"fire-data-connect",[ly]:"fire-rtdb-compat",[hy]:"fire-fn",[dy]:"fire-fn-compat",[fy]:"fire-iid",[py]:"fire-iid-compat",[my]:"fire-fcm",[gy]:"fire-fcm-compat",[_y]:"fire-perf",[yy]:"fire-perf-compat",[vy]:"fire-rc",[wy]:"fire-rc-compat",[Iy]:"fire-gcs",[Ey]:"fire-gcs-compat",[Ty]:"fire-fst",[Ay]:"fire-fst-compat",[by]:"fire-vertex","fire-js":"fire-js",[Sy]:"fire-js-all"};var Hn=new Map,ic=new Map,sc=new Map;function $d(n,e){try{n.container.addComponent(e)}catch(t){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ot(n){let e=n.name;if(sc.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,n);for(let t of Hn.values())$d(t,n);for(let t of ic.values())$d(t,n);return!0}function Jr(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qe(n){return n.settings!==void 0}var Cy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new gt("app","Firebase",Cy);var oc=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}};var xt=Ry;function Qn(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:rc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(t||(t=$a()),!t)throw Nt.create("no-options");let s=Hn.get(i);if(s){if(Dt(t,s.options)&&Dt(r,s.config))return s;throw Nt.create("duplicate-app",{appName:i})}let o=new fs(i);for(let u of sc.values())o.addComponent(u);let c=new oc(t,r,o);return Hn.set(i,c),c}function uc(n=rc){let e=Hn.get(n);if(!e&&n===rc&&$a())return Qn();if(!e)throw Nt.create("no-app",{appName:n});return e}async function Qd(n){let e=!1,t=n.name;Hn.has(t)?(e=!0,Hn.delete(t)):ic.has(t)&&n.decRefCount()<=0&&(ic.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function He(n,e,t){var r;let i=(r=Py[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(c.join(" "));return}Ot(new je(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var Dy="firebase-heartbeat-database",ky=1,Qr="firebase-heartbeat-store",ec=null;function Jd(){return ec||(ec=zd(Dy,ky,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nt.create("idb-open",{originalErrorMessage:n.message})})),ec}async function Ny(n){try{let t=(await Jd()).transaction(Qr),r=await t.objectStore(Qr).get(Yd(n));return await t.done,r}catch(e){if(e instanceof Ue)_t.warn(e.message);else{let t=Nt.create("idb-get",{originalErrorMessage:e?.message});_t.warn(t.message)}}}async function Kd(n,e){try{let r=(await Jd()).transaction(Qr,"readwrite");await r.objectStore(Qr).put(e,Yd(n)),await r.done}catch(t){if(t instanceof Ue)_t.warn(t.message);else{let r=Nt.create("idb-set",{originalErrorMessage:t?.message});_t.warn(r.message)}}}function Yd(n){return`${n.name}!${n.options.appId}`}var Oy=1024,xy=30*24*60*60*1e3,ac=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new cc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{let c=new Date(o.date).valueOf();return Date.now()-c<=xy}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Wd(),{heartbeatsToSend:r,unsentEntries:i}=Vy(this._heartbeatsCache.heartbeats),s=za(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return _t.warn(t),""}}};function Wd(){return new Date().toISOString().substring(0,10)}function Vy(n,e=Oy){let t=[],r=n.slice();for(let i of n){let s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Hd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var cc=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ds()?xd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await Ny(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Hd(n){return za(JSON.stringify({version:2,heartbeats:n})).length}function Ly(n){Ot(new je("platform-logger",e=>new tc(e),"PRIVATE")),Ot(new je("heartbeat",e=>new ac(e),"PRIVATE")),He(nc,Gd,n),He(nc,Gd,"esm2017"),He("fire-js","")}Ly("");var My="firebase",Fy="10.14.1";He(My,Fy,"app");function ms(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function mf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var gf=mf,_f=new gt("auth","Firebase",mf());var Is=new kt("@firebase/auth");function Uy(n,...e){Is.logLevel<=H.WARN&&Is.warn(`Auth (${xt}): ${n}`,...e)}function _s(n,...e){Is.logLevel<=H.ERROR&&Is.error(`Auth (${xt}): ${n}`,...e)}function Je(n,...e){throw kc(n,...e)}function it(n,...e){return kc(n,...e)}function yf(n,e,t){let r=Object.assign(Object.assign({},gf()),{[e]:t});return new gt("auth","Firebase",r).create(e,{appName:n.name})}function vt(n){return yf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kc(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return _f.create(n,...e)}function U(n,e,...t){if(!n)throw kc(e,...t)}function rt(n){let e="INTERNAL ASSERTION FAILED: "+n;throw _s(e),new Error(e)}function wt(n,e){n||rt(e)}function dc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function By(){return Xd()==="http:"||Xd()==="https:"}function Xd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function qy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(By()||kd()||"connection"in navigator)?navigator.onLine:!0}function jy(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var ln=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=Cd()||Nd()}get(){return qy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Nc(n,e){wt(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Es=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var zy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Gy=new ln(3e4,6e4);function me(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ie(n,e,t,r,i={}){return vf(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});let c=$n(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);let h=Object.assign({method:e,headers:u},s);return Dd()||(h.referrerPolicy="no-referrer"),Es.fetch()(wf(n,n.config.apiHost,t,c),h)})}async function vf(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},zy),e);try{let i=new fc(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw Yr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yr(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Yr(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Yr(n,"user-disabled",o);let f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw yf(n,f,h);Je(n,f)}}catch(i){if(i instanceof Ue)throw i;Je(n,"network-request-failed",{message:String(i)})}}async function Lt(n,e,t,r,i={}){let s=await Ie(n,e,t,r,i);return"mfaPendingCredential"in s&&Je(n,"multi-factor-auth-required",{_serverResponse:s}),s}function wf(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?Nc(n.config,i):`${n.config.apiScheme}://${i}`}function $y(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var fc=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),Gy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Yr(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=it(n,e,r);return i.customData._tokenResponse=t,i}function Zd(n){return n!==void 0&&n.enterprise!==void 0}var pc=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $y(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function Ky(n,e){return Ie(n,"GET","/v2/recaptchaConfig",me(n,e))}async function Wy(n,e){return Ie(n,"POST","/v1/accounts:delete",e)}async function If(n,e){return Ie(n,"POST","/v1/accounts:lookup",e)}function Xr(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ef(n,e=!1){let t=se(n),r=await t.getIdToken(e),i=Oc(r);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Xr(lc(i.auth_time)),issuedAtTime:Xr(lc(i.iat)),expirationTime:Xr(lc(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function lc(n){return Number(n)*1e3}function Oc(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _s("JWT malformed, contained fewer than 3 sections"),null;try{let i=Ga(t);return i?JSON.parse(i):(_s("Failed to decode base64 JWT payload"),null)}catch(i){return _s("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ef(n){let e=Oc(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function Yn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ue&&Hy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Hy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var mc=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var ei=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xr(this.lastLoginAt),this.creationTime=Xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Ts(n){var e;let t=n.auth,r=await n.getIdToken(),i=await Yn(n,If(t,{idToken:r}));U(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bf(s.providerUserInfo):[],c=Qy(n.providerData,o),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!c?.length,f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ei(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Tf(n){let e=se(n);await Ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qy(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bf(n){return n.map(e=>{var{providerId:t}=e,r=ms(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Jy(n,e){let t=await vf(n,{},async()=>{let r=$n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=wf(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Es.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Yy(n,e){return Ie(n,"POST","/v2/accounts:revokeToken",me(n,e))}var Zr=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ef(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");let t=ef(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await Jy(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new n;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return rt("not implemented")}};function Vt(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var Xn=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ms(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ei(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ef(this,e)}reload(){return Tf(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ts(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(vt(this.auth));let e=await this.getIdToken();return await Yn(this,Wy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,u,h,f;let m=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,B=(h=t.createdAt)!==null&&h!==void 0?h:void 0,q=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:K,isAnonymous:J,providerData:z,stsTokenManager:w}=t;U(M&&w,e,"internal-error");let g=Zr.fromJSON(this.name,w);U(typeof M=="string",e,"internal-error"),Vt(m,e.name),Vt(v,e.name),U(typeof K=="boolean",e,"internal-error"),U(typeof J=="boolean",e,"internal-error"),Vt(A,e.name),Vt(C,e.name),Vt(k,e.name),Vt(D,e.name),Vt(B,e.name),Vt(q,e.name);let _=new n({uid:M,auth:e,email:v,emailVerified:K,displayName:m,isAnonymous:J,photoURL:C,phoneNumber:A,tenantId:k,stsTokenManager:g,createdAt:B,lastLoginAt:q});return z&&Array.isArray(z)&&(_.providerData=z.map(I=>Object.assign({},I))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,t,r=!1){let i=new Zr;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ts(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];U(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?bf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,c=new Zr;c.updateFromIdToken(r);let u=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ei(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}};var tf=new Map;function yt(n){wt(n instanceof Function,"Expected a class definition");let e=tf.get(n);return e?(wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,tf.set(n,e),e)}var bs=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};bs.type="NONE";var gc=bs;function ys(n,e,t){return`firebase:${n}:${e}:${t}`}var As=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=ys(this.userKey,i.apiKey,s),this.fullPersistenceKey=ys("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(yt(gc),e,r);let i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h),s=i[0]||yt(gc),o=ys(r,e.config.apiKey,e.name),c=null;for(let h of t)try{let f=await h._get(o);if(f){let m=Xn._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}let u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new n(s,e,r):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new n(s,e,r))}};function nf(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Af(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Df(e))return"Blackberry";if(kf(e))return"Webos";if(Sf(e))return"Safari";if((e.includes("chrome/")||Rf(e))&&!e.includes("edge/"))return"Chrome";if(Cf(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Af(n=ue()){return/firefox\//i.test(n)}function Sf(n=ue()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rf(n=ue()){return/crios\//i.test(n)}function Pf(n=ue()){return/iemobile/i.test(n)}function Cf(n=ue()){return/android/i.test(n)}function Df(n=ue()){return/blackberry/i.test(n)}function kf(n=ue()){return/webos/i.test(n)}function xc(n=ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Xy(n=ue()){var e;return xc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zy(){return Od()&&document.documentMode===10}function Nf(n=ue()){return xc(n)||Cf(n)||kf(n)||Df(n)||/windows phone/i.test(n)||Pf(n)}function Of(n,e=[]){let t;switch(n){case"Browser":t=nf(ue());break;case"Worker":t=`${nf(ue())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xt}/${r}`}var _c=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((o,c)=>{try{let u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function ev(n,e={}){return Ie(n,"GET","/v2/passwordPolicy",me(n,e))}var tv=6,yc=class{constructor(e){var t,r,i,s;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:tv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;let u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var vc=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ss(this),this.idTokenSubscription=new Ss(this),this.beforeStateQueue=new _c(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await If(this,{idToken:e}),r=await Xn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qe(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ts(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(vt(this));let t=e?se(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await ev(this),t=new yc(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&yt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[yt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),o=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){let u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{let u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Of(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Uy(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Mt(n){return se(n)}var Ss=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ld(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var zs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nv(n){zs=n}function xf(n){return zs.loadJS(n)}function rv(){return zs.recaptchaEnterpriseScript}function iv(){return zs.gapiScript}function Vf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var sv="recaptcha-enterprise",ov="NO_RECAPTCHA",wc=class{constructor(e){this.type=sv,this.auth=Mt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{Ky(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let h=new pc(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){let u=window.grecaptcha;Zd(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(ov)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&Zd(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=rv();u.length!==0&&(u+=c),xf(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}};async function rf(n,e,t,r=!1){let i=new wc(n),s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}let o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ic(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await rf(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await rf(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function Lf(n,e){let t=Jr(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(Dt(s,e??{}))return i;Je(i,"already-initialized")}return t.initialize({options:e})}function av(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(yt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Mf(n,e,t){let r=Mt(n);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=Ff(e),{host:o,port:c}=cv(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uv()}function Ff(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function cv(n){let e=Ff(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:sf(r.substr(s.length+1))}}else{let[s,o]=r.split(":");return{host:s,port:sf(o)}}}function sf(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function uv(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var hn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,t){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}};async function lv(n,e){return Ie(n,"POST","/v1/accounts:update",e)}async function hv(n,e){return Ie(n,"POST","/v1/accounts:signUp",e)}async function dv(n,e){return Lt(n,"POST","/v1/accounts:signInWithPassword",me(n,e))}async function fv(n,e){return Lt(n,"POST","/v1/accounts:signInWithEmailLink",me(n,e))}async function pv(n,e){return Lt(n,"POST","/v1/accounts:signInWithEmailLink",me(n,e))}var ti=class n extends hn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,t,"signInWithPassword",dv);case"emailLink":return fv(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,r,"signUpPassword",hv);case"emailLink":return pv(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Jn(n,e){return Lt(n,"POST","/v1/accounts:signInWithIdp",me(n,e))}var mv="http://localhost",dn=class n extends hn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ms(t,["providerId","signInMethod"]);if(!r||!i)return null;let o=new n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return Jn(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,Jn(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Jn(e,t)}buildRequest(){let e={requestUri:mv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$n(t)}return e}};async function gv(n,e){return Ie(n,"POST","/v1/accounts:sendVerificationCode",me(n,e))}async function _v(n,e){return Lt(n,"POST","/v1/accounts:signInWithPhoneNumber",me(n,e))}async function yv(n,e){let t=await Lt(n,"POST","/v1/accounts:signInWithPhoneNumber",me(n,e));if(t.temporaryProof)throw Yr(n,"account-exists-with-different-credential",t);return t}var vv={USER_NOT_FOUND:"user-not-found"};async function wv(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Lt(n,"POST","/v1/accounts:signInWithPhoneNumber",me(n,t),vv)}var ni=class n extends hn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return _v(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return yv(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return wv(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function Iv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ev(n){let e=Kn(Wn(n)).link,t=e?Kn(Wn(e)).deep_link_id:null,r=Kn(Wn(n)).deep_link_id;return(r?Kn(Wn(r)).link:null)||r||t||e||n}var Rs=class n{constructor(e){var t,r,i,s,o,c;let u=Kn(Wn(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=Iv((i=u.mode)!==null&&i!==void 0?i:null);U(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=Ev(e);try{return new n(t)}catch{return null}}};var It=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return ti._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Rs.parseLink(t);return U(r,"argument-error"),ti._fromEmailAndCode(e,r.code,r.tenantId)}};It.PROVIDER_ID="password";It.EMAIL_PASSWORD_SIGN_IN_METHOD="password";It.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Ps=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var fn=class extends Ps{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var ri=class n extends fn{constructor(){super("facebook.com")}static credential(e){return dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";var ii=class n extends fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";var si=class n extends fn{constructor(){super("github.com")}static credential(e){return dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";var oi=class n extends fn{constructor(){super("twitter.com")}static credential(e,t){return dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";async function Tv(n,e){return Lt(n,"POST","/v1/accounts:signUp",me(n,e))}var Zn=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await Xn._fromIdTokenResponse(e,r,i),o=of(r);return new n({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=of(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function of(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var Ec=class n extends Ue{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Uf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ec._fromErrorAndOperation(n,s,e,r):s})}async function bv(n,e,t=!1){let r=await Yn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Zn._forOperation(n,"link",r)}async function Bf(n,e,t=!1){let{auth:r}=n;if(Qe(r.app))return Promise.reject(vt(r));let i="reauthenticate";try{let s=await Yn(n,Uf(r,i,e,n),t);U(s.idToken,r,"internal-error");let o=Oc(s.idToken);U(o,r,"internal-error");let{sub:c}=o;return U(n.uid===c,r,"user-mismatch"),Zn._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Je(r,"user-mismatch"),s}}async function qf(n,e,t=!1){if(Qe(n.app))return Promise.reject(vt(n));let r="signIn",i=await Uf(n,r,e),s=await Zn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function jf(n,e){return qf(Mt(n),e)}async function Vc(n,e){return Bf(se(n),e)}async function zf(n){let e=Mt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Gs(n,e,t){if(Qe(n.app))return Promise.reject(vt(n));let r=Mt(n),o=await Ic(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Tv).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&zf(n),u}),c=await Zn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function $s(n,e,t){return Qe(n.app)?Promise.reject(vt(n)):jf(se(n),It.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zf(n),r})}function Lc(n,e){return Av(se(n),null,e)}async function Av(n,e,t){let{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);let o=await Yn(n,lv(r,s));await n._updateTokensIfNecessary(o,!0)}function Gf(n,e,t,r){return se(n).onIdTokenChanged(e,t,r)}function $f(n,e,t){return se(n).beforeAuthStateChanged(e,t)}function Mc(n,e,t,r){return se(n).onAuthStateChanged(e,t,r)}function Ks(n){return se(n).signOut()}function Sv(n,e){return Ie(n,"POST","/v2/accounts/mfaEnrollment:start",me(n,e))}function Rv(n,e){return Ie(n,"POST","/v2/accounts/mfaEnrollment:finalize",me(n,e))}function Pv(n,e){return Ie(n,"POST","/v2/accounts/mfaEnrollment:start",me(n,e))}function Cv(n,e){return Ie(n,"POST","/v2/accounts/mfaEnrollment:finalize",me(n,e))}var Cs="__sak";var Ds=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Dv=1e3,kv=10,ks=class extends Ds{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Zy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kv):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Dv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};ks.type="LOCAL";var Kf=ks;var Ns=class extends Ds{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Ns.type="SESSION";var Fc=Ns;function Nv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Os=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(o).map(async h=>h(t.origin,s)),u=await Nv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Os.receivers=[];function Uc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Tc=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{let h=Uc("",20);i.port1.start();let f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){let v=m;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function st(){return window}function Ov(n){st().location.href=n}function Wf(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function xv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vv(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Lv(){return Wf()?self:null}var Hf="firebaseLocalStorageDb",Mv=1,xs="firebaseLocalStorage",Qf="fbase_key",pn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Ws(n,e){return n.transaction([xs],e?"readwrite":"readonly").objectStore(xs)}function Fv(){let n=indexedDB.deleteDatabase(Hf);return new pn(n).toPromise()}function bc(){let n=indexedDB.open(Hf,Mv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(xs,{keyPath:Qf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(xs)?e(r):(r.close(),await Fv(),e(await bc()))})})}async function af(n,e,t){let r=Ws(n,!0).put({[Qf]:e,value:t});return new pn(r).toPromise()}async function Uv(n,e){let t=Ws(n,!1).get(e),r=await new pn(t).toPromise();return r===void 0?null:r.value}function cf(n,e){let t=Ws(n,!0).delete(e);return new pn(t).toPromise()}var Bv=800,qv=3,Vs=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>qv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Os._getInstance(Lv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xv(),!this.activeServiceWorker)return;this.sender=new Tc(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await bc();return await af(e,Cs,"1"),await cf(e,Cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>af(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>Uv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=Ws(i,!1).getAll();return new pn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Vs.type="LOCAL";var Jf=Vs;function jv(n,e){return Ie(n,"POST","/v2/accounts/mfaSignIn:start",me(n,e))}function zv(n,e){return Ie(n,"POST","/v2/accounts/mfaSignIn:finalize",me(n,e))}function Gv(n,e){return Ie(n,"POST","/v2/accounts/mfaSignIn:finalize",me(n,e))}var kT=Vf("rcb"),NT=new ln(3e4,6e4);var $v="recaptcha";async function Kv(n,e,t){var r;let i=await t.verify();try{U(typeof i=="string",n,"argument-error"),U(t.type===$v,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){let o=s.session;if("phoneNumber"in s)return U(o.type==="enroll",n,"internal-error"),(await Sv(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{U(o.type==="signin",n,"internal-error");let c=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return U(c,n,"missing-multi-factor-info"),(await jv(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:o}=await gv(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}var ai=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Mt(e)}verifyPhoneNumber(e,t){return Kv(this.auth,e,se(t))}static credential(e,t){return ni._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?ni._fromTokenResponse(t,r):null}};ai.PROVIDER_ID="phone";ai.PHONE_SIGN_IN_METHOD="phone";function Wv(n,e){return e?yt(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var ci=class extends hn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Hv(n){return qf(n.auth,new ci(n),n.bypassAuthState)}function Qv(n){let{auth:e,user:t}=n;return U(t,e,"internal-error"),Bf(t,new ci(n),n.bypassAuthState)}async function Jv(n){let{auth:e,user:t}=n;return U(t,e,"internal-error"),bv(t,new ci(n),n.bypassAuthState)}var Ls=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}let u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hv;case"linkViaPopup":case"linkViaRedirect":return Jv;case"reauthViaPopup":case"reauthViaRedirect":return Qv;default:Je(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Yv=new ln(2e3,1e4);var Ac=class n extends Ls{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");let e=Uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yv.get())};e()}};Ac.currentPopupAction=null;var Xv="pendingRedirect",vs=new Map,Sc=class extends Ls{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=vs.get(this.auth._key());if(!e){try{let r=await Zv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}vs.set(this.auth._key(),e)}return this.bypassAuthState||vs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Zv(n,e){let t=nw(e),r=tw(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function ew(n,e){vs.set(n._key(),e)}function tw(n){return yt(n._redirectPersistence)}function nw(n){return ys(Xv,n.config.apiKey,n.name)}async function rw(n,e,t=!1){if(Qe(n.app))return Promise.reject(vt(n));let r=Mt(n),i=Wv(r,e),o=await new Sc(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}var iw=10*60*1e3,Rc=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Yf(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(it(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iw&&this.cachedEventUids.clear(),this.cachedEventUids.has(uf(e))}saveEventToCache(e){this.cachedEventUids.add(uf(e)),this.lastProcessedEventTime=Date.now()}};function uf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function sw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yf(n);default:return!1}}async function ow(n,e={}){return Ie(n,"GET","/v1/projects",e)}var aw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cw=/^https?/;async function uw(n){if(n.config.emulator)return;let{authorizedDomains:e}=await ow(n);for(let t of e)try{if(lw(t))return}catch{}Je(n,"unauthorized-domain")}function lw(n){let e=dc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!cw.test(t))return!1;if(aw.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var hw=new ln(3e4,6e4);function lf(){let n=st().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dw(n){return new Promise((e,t)=>{var r,i,s;function o(){lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lf(),t(it(n,"network-request-failed"))},timeout:hw.get()})}if(!((i=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=st().gapi)===null||s===void 0)&&s.load)o();else{let c=Vf("iframefcb");return st()[c]=()=>{gapi.load?o():t(it(n,"network-request-failed"))},xf(`${iv()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw ws=null,e})}var ws=null;function fw(n){return ws=ws||dw(n),ws}var pw=new ln(5e3,15e3),mw="__/auth/iframe",gw="emulator/auth/iframe",_w={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vw(n){let e=n.config;U(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Nc(e,gw):`https://${n.config.authDomain}/${mw}`,r={apiKey:e.apiKey,appName:n.name,v:xt},i=yw.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${$n(r).slice(1)}`}async function ww(n){let e=await fw(n),t=st().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:vw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_w,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let o=it(n,"network-request-failed"),c=st().setTimeout(()=>{s(o)},pw.get());function u(){st().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})}))}var Iw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ew=500,Tw=600,bw="_blank",Aw="http://localhost",Ms=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Sw(n,e,t,r=Ew,i=Tw){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),c="",u=Object.assign(Object.assign({},Iw),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ue().toLowerCase();t&&(c=Rf(h)?bw:t),Af(h)&&(e=e||Aw,u.scrollbars="yes");let f=Object.entries(u).reduce((v,[A,C])=>`${v}${A}=${C},`,"");if(Xy(h)&&c!=="_self")return Rw(e||"",c),new Ms(null);let m=window.open(e||"",c,f);U(m,n,"popup-blocked");try{m.focus()}catch{}return new Ms(m)}function Rw(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var Pw="__/auth/handler",Cw="emulator/auth/handler",Dw=encodeURIComponent("fac");async function hf(n,e,t,r,i,s){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");let o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:xt,eventId:i};if(e instanceof Ps){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Vd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof fn){let f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);let c=o;for(let f of Object.keys(c))c[f]===void 0&&delete c[f];let u=await n._getAppCheckToken(),h=u?`#${Dw}=${encodeURIComponent(u)}`:"";return`${kw(n)}?${$n(c).slice(1)}${h}`}function kw({config:n}){return n.emulator?Nc(n,Cw):`https://${n.authDomain}/${Pw}`}var hc="webStorageSupport",Pc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fc,this._completeRedirectFn=rw,this._overrideRedirectResult=ew}async _openPopup(e,t,r,i){var s;wt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let o=await hf(e,t,r,dc(),i);return Sw(e,o,Uc())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await hf(e,t,r,dc(),i);return Ov(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(wt(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await ww(e),r=new Rc(e);return t.register("authEvent",i=>(U(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hc,{type:hc},i=>{var s;let o=(s=i?.[0])===null||s===void 0?void 0:s[hc];o!==void 0&&t(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nf()||Sf()||xc()}},Xf=Pc,Fs=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return rt("unexpected MultiFactorSessionType")}}},Cc=class n extends Fs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return Rv(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return zv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Us=class{constructor(){}static assertion(e){return Cc._fromCredential(e)}};Us.FACTOR_ID="phone";var Bs=class{static assertionForEnrollment(e,t){return qs._fromSecret(e,t)}static assertionForSignIn(e,t){return qs._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;U(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await Pv(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return js._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Bs.FACTOR_ID="totp";var qs=class n extends Fs{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return U(typeof this.secret<"u",e,"argument-error"),Cv(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){U(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Gv(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},js=class n{constructor(e,t,r,i,s,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(gs(e)||gs(t))&&(i=!0),i&&(gs(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),gs(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function gs(n){return typeof n>"u"||n?.length===0}var df="@firebase/auth",ff="1.7.9";var Dc=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Nw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ow(n){Ot(new je("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Of(n)},h=new vc(r,i,s,u);return av(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ot(new je("auth-internal",e=>{let t=Mt(e.getProvider("auth").getImmediate());return(r=>new Dc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(df,ff,Nw(n)),He(df,ff,"esm2017")}var xw=5*60,Vw=Ka("authIdTokenMaxAge")||xw,pf=null,Lw=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Vw)return;let i=t?.token;pf!==i&&(pf=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Hs(n=uc()){let e=Jr(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Lf(n,{popupRedirectResolver:Xf,persistence:[Jf,Kf,Fc]}),r=Ka("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let o=Lw(s.toString());$f(t,o,()=>o(t.currentUser)),Gf(t,c=>o(c))}}let i=Pd("auth");return i&&Mf(t,`http://${i}`),t}function Mw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}nv({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=it("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Mw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ow("Browser");var Zf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ep={};var Ft,Bc;(function(){var n;function e(w,g){function _(){}_.prototype=g.prototype,w.D=g.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(I,E,b){for(var y=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)y[Ke-2]=arguments[Ke];return g.prototype[E].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,_){_||(_=0);var I=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)I[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;16>E;++E)I[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=w.g[0],_=w.g[1],E=w.g[2];var b=w.g[3],y=g+(b^_&(E^b))+I[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+I[1]+3905402710&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+I[2]+606105819&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+I[3]+3250441966&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+I[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+I[5]+1200080426&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+I[6]+2821735955&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+I[7]+4249261313&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+I[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+I[9]+2336552879&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+I[10]+4294925233&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+I[11]+2304563134&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+I[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+I[13]+4254626195&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+I[14]+2792965006&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+I[15]+1236535329&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(E^b&(_^E))+I[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+I[6]+3225465664&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+I[11]+643717713&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+I[0]+3921069994&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+I[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+I[10]+38016083&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+I[15]+3634488961&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+I[4]+3889429448&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+I[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+I[14]+3275163606&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+I[3]+4107603335&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+I[8]+1163531501&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+I[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+I[2]+4243563512&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+I[7]+1735328473&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+I[12]+2368359562&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(_^E^b)+I[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+I[8]+2272392833&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+I[11]+1839030562&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+I[14]+4259657740&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+I[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+I[4]+1272893353&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+I[7]+4139469664&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+I[10]+3200236656&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+I[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+I[0]+3936430074&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+I[3]+3572445317&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+I[6]+76029189&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+I[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+I[12]+3873151461&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+I[15]+530742520&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+I[2]+3299628645&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(E^(_|~b))+I[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+I[7]+1126891415&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+I[14]+2878612391&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+I[5]+4237533241&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+I[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+I[3]+2399980690&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+I[10]+4293915773&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+I[1]+2240044497&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+I[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+I[15]+4264355552&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+I[6]+2734768916&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+I[13]+1309151649&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+I[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+I[11]+3174756917&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+I[2]+718787259&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var _=g-this.blockSize,I=this.B,E=this.h,b=0;b<g;){if(E==0)for(;b<=_;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<g;)if(I[E++]=w.charCodeAt(b++),E==this.blockSize){i(this,I),E=0;break}}else for(;b<g;)if(I[E++]=w[b++],E==this.blockSize){i(this,I),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var _=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=_&255,_/=256;for(this.u(w),w=Array(16),g=_=0;4>g;++g)for(var I=0;32>I;I+=8)w[_++]=this.g[g]>>>I&255;return w};function s(w,g){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=g(w)}function o(w,g){this.h=g;for(var _=[],I=!0,E=w.length-1;0<=E;E--){var b=w[E]|0;I&&b==g||(_[E]=b,I=!1)}this.g=_}var c={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return D(h(-w));for(var g=[],_=1,I=0;w>=_;I++)g[I]=w/_|0,_*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return D(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),I=m,E=0;E<w.length;E+=8){var b=Math.min(8,w.length-E),y=parseInt(w.substring(E,E+b),g);8>b?(b=h(Math.pow(g,b)),I=I.j(b).add(h(y))):(I=I.j(_),I=I.add(h(y)))}return I}var m=u(0),v=u(1),A=u(16777216);n=o.prototype,n.m=function(){if(k(this))return-D(this).m();for(var w=0,g=1,_=0;_<this.g.length;_++){var I=this.i(_);w+=(0<=I?I:4294967296+I)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(k(this))return"-"+D(this).toString(w);for(var g=h(Math.pow(w,6)),_=this,I="";;){var E=K(_,g).g;_=B(_,E.j(g));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=E,C(_))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function k(w){return w.h==-1}n.l=function(w){return w=B(this,w),k(w)?-1:C(w)?0:1};function D(w){for(var g=w.g.length,_=[],I=0;I<g;I++)_[I]=~w.g[I];return new o(_,~w.h).add(v)}n.abs=function(){return k(this)?D(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],I=0,E=0;E<=g;E++){var b=I+(this.i(E)&65535)+(w.i(E)&65535),y=(b>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);I=y>>>16,b&=65535,y&=65535,_[E]=y<<16|b}return new o(_,_[_.length-1]&-2147483648?-1:0)};function B(w,g){return w.add(D(g))}n.j=function(w){if(C(this)||C(w))return m;if(k(this))return k(w)?D(this).j(D(w)):D(D(this).j(w));if(k(w))return D(this.j(D(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,_=[],I=0;I<2*g;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var E=0;E<w.g.length;E++){var b=this.i(I)>>>16,y=this.i(I)&65535,Ke=w.i(E)>>>16,ft=w.i(E)&65535;_[2*I+2*E]+=y*ft,q(_,2*I+2*E),_[2*I+2*E+1]+=b*ft,q(_,2*I+2*E+1),_[2*I+2*E+1]+=y*Ke,q(_,2*I+2*E+1),_[2*I+2*E+2]+=b*Ke,q(_,2*I+2*E+2)}for(I=0;I<g;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=g;I<2*g;I++)_[I]=0;return new o(_,0)};function q(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function M(w,g){this.g=w,this.h=g}function K(w,g){if(C(g))throw Error("division by zero");if(C(w))return new M(m,m);if(k(w))return g=K(D(w),g),new M(D(g.g),D(g.h));if(k(g))return g=K(w,D(g)),new M(D(g.g),g.h);if(30<w.g.length){if(k(w)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var _=v,I=g;0>=I.l(w);)_=J(_),I=J(I);var E=z(_,1),b=z(I,1);for(I=z(I,2),_=z(_,2);!C(I);){var y=b.add(I);0>=y.l(w)&&(E=E.add(_),b=y),I=z(I,1),_=z(_,1)}return g=B(w,E.j(g)),new M(E,g)}for(E=m;0<=w.l(g);){for(_=Math.max(1,Math.floor(w.m()/g.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=h(_),y=b.j(g);k(y)||0<y.l(w);)_-=I,b=h(_),y=b.j(g);C(b)&&(b=v),E=E.add(b),w=B(w,y)}return new M(E,w)}n.A=function(w){return K(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)&w.i(I);return new o(_,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)|w.i(I);return new o(_,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)^w.i(I);return new o(_,this.h^w.h)};function J(w){for(var g=w.g.length+1,_=[],I=0;I<g;I++)_[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(_,w.h)}function z(w,g){var _=g>>5;g%=32;for(var I=w.g.length-_,E=[],b=0;b<I;b++)E[b]=0<g?w.i(b+_)>>>g|w.i(b+_+1)<<32-g:w.i(b+_);return new o(E,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Bc=ep.Md5=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Ft=ep.Integer=o}).apply(typeof Zf<"u"?Zf:typeof self<"u"?self:typeof window<"u"?window:{});var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Et={};var qc,Fw,er,jc,ui,Js,zc,Gc,$c;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qs=="object"&&Qs];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(a,l){if(l)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var T=a[p];if(!(T in d))break e;d=d[T]}a=a[a.length-1],p=d[a],l=l(p),l!=p&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function s(a,l){a instanceof String&&(a+="");var d=0,p=!1,T={next:function(){if(!p&&d<a.length){var R=d++;return{value:l(R,a[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(a){return a||function(){return s(this,function(l,d){return d})}});var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function m(a,l,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),a.apply(l,T)}}return function(){return a.apply(l,arguments)}}function v(a,l,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,v.apply(null,arguments)}function A(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,T,R){for(var O=Array(arguments.length-2),te=2;te<arguments.length;te++)O[te-2]=arguments[te];return l.prototype[T].apply(p,O)}}function k(a){let l=a.length;if(0<l){let d=Array(l);for(let p=0;p<l;p++)d[p]=a[p];return d}return[]}function D(a,l){for(let d=1;d<arguments.length;d++){let p=arguments[d];if(u(p)){let T=a.length||0,R=p.length||0;a.length=T+R;for(let O=0;O<R;O++)a[T+O]=p[O]}else a.push(p)}}class B{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function q(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function K(a){return K[" "](a),a}K[" "]=function(){};var J=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function z(a,l,d){for(let p in a)l.call(d,a[p],p,a)}function w(a,l){for(let d in a)l.call(void 0,a[d],d,a)}function g(a){let l={};for(let d in a)l[d]=a[d];return l}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,l){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)a[d]=p[d];for(let R=0;R<_.length;R++)d=_[R],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function E(a){var l=1;a=a.split(":");let d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function b(a){c.setTimeout(()=>{throw a},0)}function y(){var a=rn;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class Ke{constructor(){this.h=this.g=null}add(l,d){let p=ft.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ft=new B(()=>new Ki,a=>a.reset());class Ki{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let St,nn=!1,rn=new Ke,fe=()=>{let a=c.Promise.resolve(void 0);St=()=>{a.then(be)}};var be=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){b(d)}var l=ft;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}nn=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var et=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{let d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a}();function ve(a,l){if(re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(J){e:{try{K(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Bn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ve.aa.h.call(this)}}C(ve,re);var Bn={2:"touch",3:"pen",4:"mouse"};ve.prototype.h=function(){ve.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tt="closure_listenable_"+(1e6*Math.random()|0),Jg=0;function Yg(a,l,d,p,T){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=T,this.key=++Jg,this.da=this.fa=!1}function Wi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Hi(a){this.src=a,this.g={},this.h=0}Hi.prototype.add=function(a,l,d,p,T){var R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);var O=ga(a,l,p,T);return-1<O?(l=a[O],d||(l.fa=!1)):(l=new Yg(l,this.src,R,!!p,T),l.fa=d,a.push(l)),l};function ma(a,l){var d=l.type;if(d in a.g){var p=a.g[d],T=Array.prototype.indexOf.call(p,l,void 0),R;(R=0<=T)&&Array.prototype.splice.call(p,T,1),R&&(Wi(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ga(a,l,d,p){for(var T=0;T<a.length;++T){var R=a[T];if(!R.da&&R.listener==l&&R.capture==!!d&&R.ha==p)return T}return-1}var _a="closure_lm_"+(1e6*Math.random()|0),ya={};function Ah(a,l,d,p,T){if(p&&p.once)return Rh(a,l,d,p,T);if(Array.isArray(l)){for(var R=0;R<l.length;R++)Ah(a,l[R],d,p,T);return null}return d=Ea(d),a&&a[tt]?a.K(l,d,h(p)?!!p.capture:!!p,T):Sh(a,l,d,!1,p,T)}function Sh(a,l,d,p,T,R){if(!l)throw Error("Invalid event type");var O=h(T)?!!T.capture:!!T,te=wa(a);if(te||(a[_a]=te=new Hi(a)),d=te.add(l,d,p,O,R),d.proxy)return d;if(p=Xg(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)et||(T=O),T===void 0&&(T=!1),a.addEventListener(l.toString(),p,T);else if(a.attachEvent)a.attachEvent(Ch(l.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Xg(){function a(d){return l.call(a.src,a.listener,d)}let l=Zg;return a}function Rh(a,l,d,p,T){if(Array.isArray(l)){for(var R=0;R<l.length;R++)Rh(a,l[R],d,p,T);return null}return d=Ea(d),a&&a[tt]?a.L(l,d,h(p)?!!p.capture:!!p,T):Sh(a,l,d,!0,p,T)}function Ph(a,l,d,p,T){if(Array.isArray(l))for(var R=0;R<l.length;R++)Ph(a,l[R],d,p,T);else p=h(p)?!!p.capture:!!p,d=Ea(d),a&&a[tt]?(a=a.i,l=String(l).toString(),l in a.g&&(R=a.g[l],d=ga(R,d,p,T),-1<d&&(Wi(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete a.g[l],a.h--)))):a&&(a=wa(a))&&(l=a.g[l.toString()],a=-1,l&&(a=ga(l,d,p,T)),(d=-1<a?l[a]:null)&&va(d))}function va(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[tt])ma(l.i,a);else{var d=a.type,p=a.proxy;l.removeEventListener?l.removeEventListener(d,p,a.capture):l.detachEvent?l.detachEvent(Ch(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=wa(l))?(ma(d,a),d.h==0&&(d.src=null,l[_a]=null)):Wi(a)}}}function Ch(a){return a in ya?ya[a]:ya[a]="on"+a}function Zg(a,l){if(a.da)a=!0;else{l=new ve(l,this);var d=a.listener,p=a.ha||a.src;a.fa&&va(a),a=d.call(p,l)}return a}function wa(a){return a=a[_a],a instanceof Hi?a:null}var Ia="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ea(a){return typeof a=="function"?a:(a[Ia]||(a[Ia]=function(l){return a.handleEvent(l)}),a[Ia])}function Ae(){pe.call(this),this.i=new Hi(this),this.M=this,this.F=null}C(Ae,pe),Ae.prototype[tt]=!0,Ae.prototype.removeEventListener=function(a,l,d,p){Ph(this,a,l,d,p)};function Ce(a,l){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=l.type||l,typeof l=="string")l=new re(l,a);else if(l instanceof re)l.target=l.target||a;else{var T=l;l=new re(p,a),I(l,T)}if(T=!0,d)for(var R=d.length-1;0<=R;R--){var O=l.g=d[R];T=Qi(O,p,!0,l)&&T}if(O=l.g=a,T=Qi(O,p,!0,l)&&T,T=Qi(O,p,!1,l)&&T,d)for(R=0;R<d.length;R++)O=l.g=d[R],T=Qi(O,p,!1,l)&&T}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],p=0;p<d.length;p++)Wi(d[p]);delete a.g[l],a.h--}}this.F=null},Ae.prototype.K=function(a,l,d,p){return this.i.add(String(a),l,!1,d,p)},Ae.prototype.L=function(a,l,d,p){return this.i.add(String(a),l,!0,d,p)};function Qi(a,l,d,p){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,R=0;R<l.length;++R){var O=l[R];if(O&&!O.da&&O.capture==d){var te=O.listener,we=O.ha||O.src;O.fa&&ma(a.i,O),T=te.call(we,p)!==!1&&T}}return T&&!p.defaultPrevented}function Dh(a,l,d){if(typeof a=="function")d&&(a=v(a,d));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function kh(a){a.g=Dh(()=>{a.g=null,a.i&&(a.i=!1,kh(a))},a.l);let l=a.h;a.h=null,a.m.apply(null,l)}class e_ extends pe{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:kh(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xr(a){pe.call(this),this.h=a,this.g={}}C(xr,pe);var Nh=[];function Oh(a){z(a.g,function(l,d){this.g.hasOwnProperty(d)&&va(l)},a),a.g={}}xr.prototype.N=function(){xr.aa.N.call(this),Oh(this)},xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ta=c.JSON.stringify,t_=c.JSON.parse,n_=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ba(){}ba.prototype.h=null;function xh(a){return a.h||(a.h=a.i())}function Vh(){}var Vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Aa(){re.call(this,"d")}C(Aa,re);function Sa(){re.call(this,"c")}C(Sa,re);var sn={},Lh=null;function Ji(){return Lh=Lh||new Ae}sn.La="serverreachability";function Mh(a){re.call(this,sn.La,a)}C(Mh,re);function Lr(a){let l=Ji();Ce(l,new Mh(l))}sn.STAT_EVENT="statevent";function Fh(a,l){re.call(this,sn.STAT_EVENT,a),this.stat=l}C(Fh,re);function De(a){let l=Ji();Ce(l,new Fh(l,a))}sn.Ma="timingevent";function Uh(a,l){re.call(this,sn.Ma,a),this.size=l}C(Uh,re);function Mr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function Fr(){this.g=!0}Fr.prototype.xa=function(){this.g=!1};function r_(a,l,d,p,T,R){a.info(function(){if(a.g)if(R)for(var O="",te=R.split("&"),we=0;we<te.length;we++){var X=te[we].split("=");if(1<X.length){var Se=X[0];X=X[1];var Re=Se.split("_");O=2<=Re.length&&Re[1]=="type"?O+(Se+"="+X+"&"):O+(Se+"=redacted&")}}else O=null;else O=R;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+l+`
`+d+`
`+O})}function i_(a,l,d,p,T,R,O){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+l+`
`+d+`
`+R+" "+O})}function qn(a,l,d,p){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+o_(a,d)+(p?" "+p:"")})}function s_(a,l){a.info(function(){return"TIMEOUT: "+l})}Fr.prototype.info=function(){};function o_(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var O=1;O<T.length;O++)T[O]=""}}}}return Ta(d)}catch{return l}}var Yi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ra;function Xi(){}C(Xi,ba),Xi.prototype.g=function(){return new XMLHttpRequest},Xi.prototype.i=function(){return{}},Ra=new Xi;function Rt(a,l,d,p){this.j=a,this.i=l,this.l=d,this.R=p||1,this.U=new xr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qh}function qh(){this.i=null,this.g="",this.h=!1}var jh={},Pa={};function Ca(a,l,d){a.L=1,a.v=ns(pt(l)),a.m=d,a.P=!0,zh(a,null)}function zh(a,l){a.F=Date.now(),Zi(a),a.A=pt(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),rd(d.i,"t",p),a.C=0,d=a.j.J,a.h=new qh,a.g=Id(a.j,d?l:null,!a.m),0<a.O&&(a.M=new e_(v(a.Y,a,a.g),a.O)),l=a.U,d=a.g,p=a.ca;var T="readystatechange";Array.isArray(T)||(T&&(Nh[0]=T.toString()),T=Nh);for(var R=0;R<T.length;R++){var O=Ah(d,T[R],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),Lr(),r_(a.i,a.u,a.A,a.l,a.R,a.m)}Rt.prototype.ca=function(a){a=a.target;let l=this.M;l&&mt(a)==3?l.j():this.Y(a)},Rt.prototype.Y=function(a){try{if(a==this.g)e:{let Re=mt(this.g);var l=this.g.Ba();let Gn=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||ld(this.g)))){this.J||Re!=4||l==7||(l==8||0>=Gn?Lr(3):Lr(2)),Da(this);var d=this.g.Z();this.X=d;t:if(Gh(this)){var p=ld(this.g);a="";var T=p.length,R=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),Ur(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,a+=this.h.i.decode(p[l],{stream:!(R&&l==T-1)});p.length=0,this.h.g+=a,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,i_(this.i,this.u,this.A,this.l,this.R,Re,d),this.o){if(this.T&&!this.K){t:{if(this.g){var te,we=this.g;if((te=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(te)){var X=te;break t}}X=null}if(d=X)qn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ka(this,d);else{this.o=!1,this.s=3,De(12),on(this),Ur(this);break e}}if(this.P){d=!0;let We;for(;!this.J&&this.C<O.length;)if(We=a_(this,O),We==Pa){Re==4&&(this.s=4,De(14),d=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(We==jh){this.s=4,De(15),qn(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else qn(this.i,this.l,We,null),ka(this,We);if(Gh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||O.length!=0||this.h.h||(this.s=1,De(16),d=!1),this.o=this.o&&d,!d)qn(this.i,this.l,O,"[Invalid Chunked Response]"),on(this),Ur(this);else if(0<O.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Ma(Se),Se.M=!0,De(11))}}else qn(this.i,this.l,O,null),ka(this,O);Re==4&&on(this),this.o&&!this.J&&(Re==4?_d(this.j,this):(this.o=!1,Zi(this)))}else b_(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),on(this),Ur(this)}}}catch{}finally{}};function Gh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function a_(a,l){var d=a.C,p=l.indexOf(`
`,d);return p==-1?Pa:(d=Number(l.substring(d,p)),isNaN(d)?jh:(p+=1,p+d>l.length?Pa:(l=l.slice(p,p+d),a.C=p+d,l)))}Rt.prototype.cancel=function(){this.J=!0,on(this)};function Zi(a){a.S=Date.now()+a.I,$h(a,a.I)}function $h(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Mr(v(a.ba,a),l)}function Da(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Rt.prototype.ba=function(){this.B=null;let a=Date.now();0<=a-this.S?(s_(this.i,this.A),this.L!=2&&(Lr(),De(17)),on(this),this.s=2,Ur(this)):$h(this,this.S-a)};function Ur(a){a.j.G==0||a.J||_d(a.j,a)}function on(a){Da(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,Oh(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function ka(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||Na(d.h,a))){if(!a.K&&Na(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)as(d),ss(d);else break e;La(d),De(18)}}else d.za=T[1],0<d.za-d.T&&37500>T[2]&&d.F&&d.v==0&&!d.C&&(d.C=Mr(v(d.Za,d),6e3));if(1>=Hh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else cn(d,11)}else if((a.K||d.g==a)&&as(d),!q(l))for(T=d.Da.g.parse(l),l=0;l<T.length;l++){let X=T[l];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];let Se=X[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));let Re=X[4];Re!=null&&(d.Aa=Re,d.j.info("SVER="+d.Aa));let Gn=X[5];Gn!=null&&typeof Gn=="number"&&0<Gn&&(p=1.5*Gn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;let We=a.g;if(We){let us=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(us){var R=p.h;R.g||us.indexOf("spdy")==-1&&us.indexOf("quic")==-1&&us.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Oa(R,R.h),R.h=null))}if(p.D){let Fa=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;Fa&&(p.ya=Fa,ie(p.I,p.D,Fa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=a;if(p.qa=wd(p,p.J?p.ia:null,p.W),O.K){Qh(p.h,O);var te=O,we=p.L;we&&(te.I=we),te.B&&(Da(te),Zi(te)),p.g=O}else md(p);0<d.i.length&&os(d)}else X[0]!="stop"&&X[0]!="close"||cn(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?cn(d,7):Va(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}Lr(4)}catch{}}var c_=class{constructor(a,l){this.g=a,this.map=l}};function Kh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Hh(a){return a.h?1:a.g?a.g.size:0}function Na(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Oa(a,l){a.g?a.g.add(l):a.h=l}function Qh(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Kh.prototype.cancel=function(){if(this.i=Jh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let a of this.g.values())a.cancel();this.g.clear()}};function Jh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(let d of a.g.values())l=l.concat(d.D);return l}return k(a.i)}function u_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,p=0;p<d;p++)l.push(a[p]);return l}l=[],d=0;for(p in a)l[d++]=a[p];return l}function l_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(let p in a)l[d++]=p;return l}}}function Yh(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=l_(a),p=u_(a),T=p.length,R=0;R<T;R++)l.call(void 0,p[R],d&&d[R],a)}var Xh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function h_(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),T=null;if(0<=p){var R=a[d].substring(0,p);T=a[d].substring(p+1)}else R=a[d];l(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function an(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof an){this.h=a.h,es(this,a.j),this.o=a.o,this.g=a.g,ts(this,a.s),this.l=a.l;var l=a.i,d=new jr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Zh(this,d),this.m=a.m}else a&&(l=String(a).match(Xh))?(this.h=!1,es(this,l[1]||"",!0),this.o=Br(l[2]||""),this.g=Br(l[3]||"",!0),ts(this,l[4]),this.l=Br(l[5]||"",!0),Zh(this,l[6]||"",!0),this.m=Br(l[7]||"")):(this.h=!1,this.i=new jr(null,this.h))}an.prototype.toString=function(){var a=[],l=this.j;l&&a.push(qr(l,ed,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(qr(l,ed,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(qr(d,d.charAt(0)=="/"?p_:f_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",qr(d,g_)),a.join("")};function pt(a){return new an(a)}function es(a,l,d){a.j=d?Br(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function ts(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function Zh(a,l,d){l instanceof jr?(a.i=l,__(a.i,a.h)):(d||(l=qr(l,m_)),a.i=new jr(l,a.h))}function ie(a,l,d){a.i.set(l,d)}function ns(a){return ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Br(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function qr(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,d_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function d_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ed=/[#\/\?@]/g,f_=/[#\?:]/g,p_=/[#\?]/g,m_=/[#\?@]/g,g_=/#/g;function jr(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Pt(a){a.g||(a.g=new Map,a.h=0,a.i&&h_(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=jr.prototype,n.add=function(a,l){Pt(this),this.i=null,a=jn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function td(a,l){Pt(a),l=jn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function nd(a,l){return Pt(a),l=jn(a,l),a.g.has(l)}n.forEach=function(a,l){Pt(this),this.g.forEach(function(d,p){d.forEach(function(T){a.call(l,T,p,this)},this)},this)},n.na=function(){Pt(this);let a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){let T=a[p];for(let R=0;R<T.length;R++)d.push(l[p])}return d},n.V=function(a){Pt(this);let l=[];if(typeof a=="string")nd(this,a)&&(l=l.concat(this.g.get(jn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},n.set=function(a,l){return Pt(this),this.i=null,a=jn(this,a),nd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function rd(a,l,d){td(a,l),0<d.length&&(a.i=null,a.g.set(jn(a,l),k(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];let R=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var T=R;O[p]!==""&&(T+="="+encodeURIComponent(String(O[p]))),a.push(T)}}return this.i=a.join("&")};function jn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function __(a,l){l&&!a.j&&(Pt(a),a.i=null,a.g.forEach(function(d,p){var T=p.toLowerCase();p!=T&&(td(this,p),rd(this,T,d))},a)),a.j=l}function y_(a,l){let d=new Fr;if(c.Image){let p=new Image;p.onload=A(Ct,d,"TestLoadImage: loaded",!0,l,p),p.onerror=A(Ct,d,"TestLoadImage: error",!1,l,p),p.onabort=A(Ct,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=A(Ct,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else l(!1)}function v_(a,l){let d=new Fr,p=new AbortController,T=setTimeout(()=>{p.abort(),Ct(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:p.signal}).then(R=>{clearTimeout(T),R.ok?Ct(d,"TestPingServer: ok",!0,l):Ct(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),Ct(d,"TestPingServer: error",!1,l)})}function Ct(a,l,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function w_(){this.g=new n_}function I_(a,l,d){let p=d||"";try{Yh(a,function(T,R){let O=T;h(T)&&(O=Ta(T)),l.push(p+R+"="+encodeURIComponent(O))})}catch(T){throw l.push(p+"type="+encodeURIComponent("_badmap")),T}}function zr(a){this.l=a.Ub||null,this.j=a.eb||!1}C(zr,ba),zr.prototype.g=function(){return new rs(this.l,this.j)},zr.prototype.i=function(a){return function(){return a}}({});function rs(a,l){Ae.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(rs,Ae),n=rs.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,$r(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$r(this)),this.g&&(this.readyState=3,$r(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;id(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function id(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Gr(this):$r(this),this.readyState==3&&id(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Gr(this))},n.Qa=function(a){this.g&&(this.response=a,Gr(this))},n.ga=function(){this.g&&Gr(this)};function Gr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$r(a)}n.setRequestHeader=function(a,l){this.u.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function $r(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sd(a){let l="";return z(a,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function xa(a,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=sd(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ie(a,l,d))}function ce(a){Ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ce,Ae);var E_=/^https?$/i,T_=["POST","PUT"];n=ce.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ra.g(),this.v=this.o?xh(this.o):xh(Ra),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(R){od(this,R);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(let R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),T=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(T_,l,void 0))||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[R,O]of d)this.g.setRequestHeader(R,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ud(this),this.u=!0,this.g.send(a),this.u=!1}catch(R){od(this,R)}};function od(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,ad(a),is(a)}function ad(a){a.A||(a.A=!0,Ce(a,"complete"),Ce(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ce(this,"complete"),Ce(this,"abort"),is(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),is(this,!0)),ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?cd(this):this.bb())},n.bb=function(){cd(this)};function cd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mt(a)!=4||a.Z()!=2)){if(a.u&&mt(a)==4)Dh(a.Ea,0,a);else if(Ce(a,"readystatechange"),mt(a)==4){a.h=!1;try{let O=a.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=O===0){var T=String(a.D).match(Xh)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),p=!E_.test(T?T.toLowerCase():"")}d=p}if(d)Ce(a,"complete"),Ce(a,"success");else{a.m=6;try{var R=2<mt(a)?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.Z()+"]",ad(a)}}finally{is(a)}}}}function is(a,l){if(a.g){ud(a);let d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||Ce(a,"ready");try{d.onreadystatechange=p}catch{}}}function ud(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function mt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),t_(l)}};function ld(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function b_(a){let l={};a=(a.g&&2<=mt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(q(a[p]))continue;var d=E(a[p]);let T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();let R=l[T]||[];l[T]=R,R.push(d)}w(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kr(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function hd(a){this.Aa=0,this.i=[],this.j=new Fr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kr("baseRetryDelayMs",5e3,a),this.cb=Kr("retryDelaySeedMs",1e4,a),this.Wa=Kr("forwardChannelMaxRetries",2,a),this.wa=Kr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Kh(a&&a.concurrentRequestLimit),this.Da=new w_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hd.prototype,n.la=8,n.G=1,n.connect=function(a,l,d,p){De(0),this.W=a,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=wd(this,null,this.W),os(this)};function Va(a){if(dd(a),a.G==3){var l=a.U++,d=pt(a.I);if(ie(d,"SID",a.K),ie(d,"RID",l),ie(d,"TYPE","terminate"),Wr(a,d),l=new Rt(a,a.j,l),l.L=2,l.v=ns(pt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Id(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Zi(l)}vd(a)}function ss(a){a.g&&(Ma(a),a.g.cancel(),a.g=null)}function dd(a){ss(a),a.u&&(c.clearTimeout(a.u),a.u=null),as(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function os(a){if(!Wh(a.h)&&!a.s){a.s=!0;var l=a.Ga;St||fe(),nn||(St(),nn=!0),rn.add(l,a),a.B=0}}function A_(a,l){return Hh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Mr(v(a.Ga,a,l),yd(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;let T=new Rt(this,this.j,a),R=this.o;if(this.S&&(R?(R=g(R),I(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=pd(this,T,l),d=pt(this.I),ie(d,"RID",a),ie(d,"CVER",22),this.D&&ie(d,"X-HTTP-Session-Id",this.D),Wr(this,d),R&&(this.O?l="headers="+encodeURIComponent(String(sd(R)))+"&"+l:this.m&&xa(d,this.m,R)),Oa(this.h,T),this.Ua&&ie(d,"TYPE","init"),this.P?(ie(d,"$req",l),ie(d,"SID","null"),T.T=!0,Ca(T,d,null)):Ca(T,d,l),this.G=2}}else this.G==3&&(a?fd(this,a):this.i.length==0||Wh(this.h)||fd(this))};function fd(a,l){var d;l?d=l.l:d=a.U++;let p=pt(a.I);ie(p,"SID",a.K),ie(p,"RID",d),ie(p,"AID",a.T),Wr(a,p),a.m&&a.o&&xa(p,a.m,a.o),d=new Rt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=pd(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Oa(a.h,d),Ca(d,p,l)}function Wr(a,l){a.H&&z(a.H,function(d,p){ie(l,p,d)}),a.l&&Yh({},function(d,p){ie(l,p,d)})}function pd(a,l,d){d=Math.min(a.i.length,d);var p=a.l?v(a.l.Na,a.l,a):null;e:{var T=a.i;let R=-1;for(;;){let O=["count="+d];R==-1?0<d?(R=T[0].g,O.push("ofs="+R)):R=0:O.push("ofs="+R);let te=!0;for(let we=0;we<d;we++){let X=T[we].g,Se=T[we].map;if(X-=R,0>X)R=Math.max(0,T[we].g-100),te=!1;else try{I_(Se,O,"req"+X+"_")}catch{p&&p(Se)}}if(te){p=O.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,p}function md(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;St||fe(),nn||(St(),nn=!0),rn.add(l,a),a.v=0}}function La(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Mr(v(a.Fa,a),yd(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,gd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Mr(v(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),ss(this),gd(this))};function Ma(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function gd(a){a.g=new Rt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=pt(a.qa);ie(l,"RID","rpc"),ie(l,"SID",a.K),ie(l,"AID",a.T),ie(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&ie(l,"TO",a.ja),ie(l,"TYPE","xmlhttp"),Wr(a,l),a.m&&a.o&&xa(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ns(pt(l)),d.m=null,d.P=!0,zh(d,a)}n.Za=function(){this.C!=null&&(this.C=null,ss(this),La(this),De(19))};function as(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function _d(a,l){var d=null;if(a.g==l){as(a),Ma(a),a.g=null;var p=2}else if(Na(a.h,l))d=l.D,Qh(a.h,l),p=1;else return;if(a.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var T=a.B;p=Ji(),Ce(p,new Uh(p,d)),os(a)}else md(a);else if(T=l.s,T==3||T==0&&0<l.X||!(p==1&&A_(a,l)||p==2&&La(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),T){case 1:cn(a,5);break;case 4:cn(a,10);break;case 3:cn(a,6);break;default:cn(a,2)}}}function yd(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function cn(a,l){if(a.j.info("Error code "+l),l==2){var d=v(a.fb,a),p=a.Xa;let T=!p;p=new an(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||es(p,"https"),ns(p),T?y_(p.toString(),d):v_(p.toString(),d)}else De(2);a.G=0,a.l&&a.l.sa(l),vd(a),dd(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function vd(a){if(a.G=0,a.ka=[],a.l){let l=Jh(a.h);(l.length!=0||a.i.length!=0)&&(D(a.ka,l),D(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function wd(a,l,d){var p=d instanceof an?pt(d):new an(d);if(p.g!="")l&&(p.g=l+"."+p.g),ts(p,p.s);else{var T=c.location;p=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var R=new an(null);p&&es(R,p),l&&(R.g=l),T&&ts(R,T),d&&(R.l=d),p=R}return d=a.D,l=a.ya,d&&l&&ie(p,d,l),ie(p,"VER",a.la),Wr(a,p),p}function Id(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new ce(new zr({eb:d})):new ce(a.pa),l.Ha(a.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ed(){}n=Ed.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function cs(){}cs.prototype.g=function(a,l){return new Fe(a,l)};function Fe(a,l){Ae.call(this),this.g=new hd(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!q(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!q(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new zn(this)}C(Fe,Ae),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){Va(this.g)},Fe.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ta(a),a=d);l.i.push(new c_(l.Ya++,a)),l.G==3&&os(l)},Fe.prototype.N=function(){this.g.l=null,delete this.j,Va(this.g),delete this.g,Fe.aa.N.call(this)};function Td(a){Aa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(let d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}C(Td,Aa);function bd(){Sa.call(this),this.status=1}C(bd,Sa);function zn(a){this.g=a}C(zn,Ed),zn.prototype.ua=function(){Ce(this.g,"a")},zn.prototype.ta=function(a){Ce(this.g,new Td(a))},zn.prototype.sa=function(a){Ce(this.g,new bd)},zn.prototype.ra=function(){Ce(this.g,"b")},cs.prototype.createWebChannel=cs.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,$c=Et.createWebChannelTransport=function(){return new cs},Gc=Et.getStatEventTarget=function(){return Ji()},zc=Et.Event=sn,Js=Et.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yi.NO_ERROR=0,Yi.TIMEOUT=8,Yi.HTTP_ERROR=6,ui=Et.ErrorCode=Yi,Bh.COMPLETE="complete",jc=Et.EventType=Bh,Vh.EventType=Vr,Vr.OPEN="a",Vr.CLOSE="b",Vr.ERROR="c",Vr.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,er=Et.WebChannel=Vh,Fw=Et.FetchXmlHttpFactory=zr,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,qc=Et.XhrIo=ce}).apply(typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{});var tp="@firebase/firestore";var Ee=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");var Dr="10.14.0";var An=new kt("@firebase/firestore");function sr(){return An.logLevel}function N(n,...e){if(An.logLevel<=H.DEBUG){let t=e.map($l);An.debug(`Firestore (${Dr}): ${n}`,...t)}}function ke(n,...e){if(An.logLevel<=H.ERROR){let t=e.map($l);An.error(`Firestore (${Dr}): ${n}`,...t)}}function wi(n,...e){if(An.logLevel<=H.WARN){let t=e.map($l);An.warn(`Firestore (${Dr}): ${n}`,...t)}}function $l(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function L(n="Unexpected state"){let e=`FIRESTORE (${Dr}) INTERNAL ASSERTION FAILED: `+n;throw ke(e),new Error(e)}function F(n,e){n||L()}function G(n,e){return n}var P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},x=class extends Ue{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Ye=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Yc=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Xc=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}};var Zc=class{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){F(this.o===void 0);let r=this.i,i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve(),s=new Ye;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ye,e.enqueueRetryable(()=>i(this.currentUser))};let o=()=>{let u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){let u=this.t.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ye)}},0),o()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new Yc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new Ee(e)}},eu=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},tu=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new eu(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}},nu=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},ru=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){F(this.o===void 0);let r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let o=s.token!==this.R;return this.R=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(F(typeof t.token=="string"),this.R=t.token,new nu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Uw(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var oo=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=Uw(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}};function $(n,e){return n<e?-1:n>e?1:0}function pr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function rm(n){return n+"\0"}var le=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var j=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new le(0,0))}static max(){return new n(new le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var ao=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&L(),r===void 0?r=e.length-t:r>e.length-t&&L(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},Z=class n extends ao{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},Bw=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ge=class n extends ao{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return Bw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},o=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new x(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new x(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new x(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var V=class n{constructor(e){this.path=e}static fromPath(e){return new n(Z.fromString(e))}static fromName(e){return new n(Z.fromString(e).popFirst(5))}static empty(){return new n(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new Z(e.slice()))}};var mr=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};function iu(n){return n.fields.find(e=>e.kind===2)}function gn(n){return n.fields.filter(e=>e.kind!==2)}mr.UNKNOWN_ID=-1;var hr=class{constructor(e,t){this.fieldPath=e,this.kind=t}};var Ii=class n{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new n(0,$e.min())}};function qw(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new le(t+1,0):new le(t,r));return new $e(i,V.empty(),e)}function im(n){return new $e(n.readTime,n.key,-1)}var $e=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(j.min(),V.empty(),-1)}static max(){return new n(j.max(),V.empty(),-1)}};function Kl(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=V.comparator(n.documentKey,e.documentKey),t!==0?t:$(n.largestBatchId,e.largestBatchId))}var sm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",co=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Vn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==sm)throw n;N("LocalStore","Unexpectedly lost primary lease")}var S=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,o=new Array(s),c=0;for(let u=0;u<s;u++){let h=u;t(e[h]).next(f=>{o[h]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};var uo=class n{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Ye,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Tn(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{let i=Wl(r.target.error);this.V.reject(new Tn(e,i))}}static open(e,t,r,i){try{return new n(t,e.transaction(i,r))}catch(s){throw new Tn(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let t=this.transaction.objectStore(e);return new ou(t)}},gr=class n{constructor(e,t,r){this.name=e,this.version=t,this.p=r,n.S(ue())===12.2&&ke("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),_n(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ds())return!1;if(n.v())return!0;let e=ue(),t=n.S(e),r=0<t&&t<10,i=om(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{let o=s.target.result;t(o)},i.onblocked=()=>{r(new Tn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{let o=s.target.error;o.name==="VersionError"?r(new x(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new x(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Tn(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);let o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){let s=t==="readonly",o=0;for(;;){++o;try{this.db=await this.M(e);let c=uo.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),S.reject(h))).toPromise();return u.catch(()=>{}),await c.m,u}catch(c){let u=c,h=u.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}};function om(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}var su=class{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return _n(this.B.delete())}},Tn=class extends x{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}};function Xt(n){return n.name==="IndexedDbTransactionError"}var ou=class{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(N("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),_n(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),_n(this.store.add(e))}get(e){return _n(this.store.get(e)).next(t=>(t===void 0&&(t=null),N("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),_n(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),_n(this.store.count())}U(e,t){let r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){let s=i.getAll(r.range);return new S((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{let s=this.cursor(r),o=[];return this.W(s,(c,u)=>{o.push(u)}).next(()=>o)}}G(e,t){let r=this.store.getAll(e,t===null?void 0:t);return new S((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){N("SimpleDb","DELETE ALL",this.store.name);let r=this.options(e,t);r.H=!1;let i=this.cursor(r);return this.W(i,(s,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);let i=this.cursor(r);return this.W(i,t)}Y(e){let t=this.cursor({});return new S((r,i)=>{t.onerror=s=>{let o=Wl(s.target.error);i(o)},t.onsuccess=s=>{let o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){let r=[];return new S((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{let c=o.target.result;if(!c)return void i();let u=new su(c),h=t(c.primaryKey,c.value,u);if(h instanceof S){let f=h.catch(m=>(u.done(),S.reject(m)));r.push(f)}u.isDone?i():u.K===null?c.continue():c.continue(u.K)}}).next(()=>S.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}};function _n(n){return new S((e,t)=>{n.onsuccess=r=>{let i=r.target.result;e(i)},n.onerror=r=>{let i=Wl(r.target.error);t(i)}})}var np=!1;function Wl(n){let e=gr.S(ue());if(e>=12.2&&e<13){let t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){let r=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return np||(np=!0,setTimeout(()=>{throw r},0)),r}}return n}var au=class{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){N("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Xt(t)?N("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Vn(t)}await this.X(6e4)})}},cu=class{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){let r=new Set,i=t,s=!0;return S.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return N("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(c=>{i-=c,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{let o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(c=>(N("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{let o=im(s);Kl(o,r)>0&&(r=o)}),new $e(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}};var Me=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};Me.oe=-1;function ra(n){return n==null}function Ei(n){return n===0&&1/n==-1/0}function jw(n){return typeof n=="number"&&Number.isInteger(n)&&!Ei(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function xe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=rp(e)),e=zw(n.get(t),e);return rp(e)}function zw(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function rp(n){return n+""}function ot(n){let e=n.length;if(F(e>=2),e===2)return F(n.charAt(0)===""&&n.charAt(1)===""),Z.emptyPath();let t=e-2,r=[],i="";for(let s=0;s<e;){let o=n.indexOf("",s);switch((o<0||o>t)&&L(),n.charAt(o+1)){case"":let c=n.substring(s,o),u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:L()}s=o+2}return new Z(r)}var ip=["userId","batchId"];function to(n,e){return[n,xe(e)]}function am(n,e,t){return[n,xe(e),t]}var Gw={},$w=["prefixPath","collectionGroup","readTime","documentId"],Kw=["prefixPath","collectionGroup","documentId"],Ww=["collectionGroup","readTime","prefixPath","documentId"],Hw=["canonicalId","targetId"],Qw=["targetId","path"],Jw=["path","targetId"],Yw=["collectionId","parent"],Xw=["indexId","uid"],Zw=["uid","sequenceNumber"],eI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],tI=["indexId","uid","orderedDocumentKey"],nI=["userId","collectionPath","documentId"],rI=["userId","collectionPath","largestBatchId"],iI=["userId","collectionGroup","largestBatchId"],cm=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],sI=[...cm,"documentOverlays"],um=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lm=um,Hl=[...lm,"indexConfiguration","indexState","indexEntries"],oI=Hl,aI=[...Hl,"globals"];var Ti=class extends co{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}};function ye(n,e){let t=G(n);return gr.F(t._e,e)}function sp(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ln(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hm(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var ae=class n{constructor(e,t){this.comparator=e,this.root=t||ct.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lr(this.root,e,this.comparator,!1)}getReverseIterator(){return new lr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lr(this.root,e,this.comparator,!0)}},lr=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ct=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();let e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}};ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var ne=class n{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lo(this.data.getIterator())}getIteratorFrom(e){return new lo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},lo=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function tr(n){return n.hasNext()?n.getNext():void 0}var Be=class n{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new n([])}unionWith(e){let t=new ne(ge.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pr(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var ho=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var _e=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ho("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};_e.EMPTY_BYTE_STRING=new _e("");var cI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(n){if(F(!!n),typeof n=="string"){let e=0,t=cI.exec(n);if(F(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gt(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}function Ql(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Jl(n){let e=n.mapValue.fields.__previous_value__;return Ql(e)?Jl(e):e}function bi(n){let e=bt(n.mapValue.fields.__local_write_time__.timestampValue);return new le(e.seconds,e.nanos)}var uu=class{constructor(e,t,r,i,s,o,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}},_r=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var jt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},no={nullValue:"NULL_VALUE"};function Sn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ql(n)?4:dm(n)?9007199254740991:ia(n)?10:11:L()}function lt(n,e){if(n===e)return!0;let t=Sn(n);if(t!==Sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return bi(n).isEqual(bi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let o=bt(i.timestampValue),c=bt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Gt(i.bytesValue).isEqual(Gt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return oe(i.geoPointValue.latitude)===oe(s.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return oe(i.integerValue)===oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let o=oe(i.doubleValue),c=oe(s.doubleValue);return o===c?Ei(o)===Ei(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return pr(n.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:case 11:return function(i,s){let o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(sp(o)!==sp(c))return!1;for(let u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!lt(o[u],c[u])))return!1;return!0}(n,e);default:return L()}}function Ai(n,e){return(n.values||[]).find(t=>lt(t,e))!==void 0}function $t(n,e){if(n===e)return 0;let t=Sn(n),r=Sn(e);if(t!==r)return $(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return function(s,o){let c=oe(s.integerValue||s.doubleValue),u=oe(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return op(n.timestampValue,e.timestampValue);case 4:return op(bi(n),bi(e));case 5:return $(n.stringValue,e.stringValue);case 6:return function(s,o){let c=Gt(s),u=Gt(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){let c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){let f=$(c[h],u[h]);if(f!==0)return f}return $(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){let c=$(oe(s.latitude),oe(o.latitude));return c!==0?c:$(oe(s.longitude),oe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ap(n.arrayValue,e.arrayValue);case 10:return function(s,o){var c,u,h,f;let m=s.fields||{},v=o.fields||{},A=(c=m.value)===null||c===void 0?void 0:c.arrayValue,C=(u=v.value)===null||u===void 0?void 0:u.arrayValue,k=$(((h=A?.values)===null||h===void 0?void 0:h.length)||0,((f=C?.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:ap(A,C)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===jt.mapValue&&o===jt.mapValue)return 0;if(s===jt.mapValue)return 1;if(o===jt.mapValue)return-1;let c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){let v=$(u[m],f[m]);if(v!==0)return v;let A=$t(c[u[m]],h[f[m]]);if(A!==0)return A}return $(u.length,f.length)}(n.mapValue,e.mapValue);default:throw L()}}function op(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);let t=bt(n),r=bt(e),i=$(t.seconds,r.seconds);return i!==0?i:$(t.nanos,r.nanos)}function ap(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=$t(t[i],r[i]);if(s)return s}return $(t.length,r.length)}function yr(n){return lu(n)}function lu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=bt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Gt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return V.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=lu(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let o of r)s?s=!1:i+=",",i+=`${o}:${lu(t.fields[o])}`;return i+"}"}(n.mapValue):L()}function Si(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function hu(n){return!!n&&"integerValue"in n}function Ri(n){return!!n&&"arrayValue"in n}function cp(n){return!!n&&"nullValue"in n}function up(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ro(n){return!!n&&"mapValue"in n}function ia(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function gi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Ln(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=gi(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function dm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var fm={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function uI(n){return"nullValue"in n?no:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Si(_r.empty(),V.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?ia(n)?fm:{mapValue:{}}:L()}function lI(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Si(_r.empty(),V.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?fm:"mapValue"in n?ia(n)?{mapValue:{}}:jt:L()}function lp(n,e){let t=$t(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function hp(n,e){let t=$t(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}var Ne=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ro(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(t)}setAll(e){let t=ge.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){let u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=gi(o):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());ro(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ro(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Ln(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(gi(this.value))}};function pm(n){let e=[];return Ln(n.fields,(t,r)=>{let i=new ge([t]);if(ro(r)){let s=pm(r.mapValue).fields;if(s.length===0)e.push(i);else for(let o of s)e.push(i.child(o))}else e.push(i)}),new Be(e)}var Te=class n{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new n(e,0,j.min(),j.min(),j.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,j.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,j.min(),j.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,j.min(),j.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Kt=class{constructor(e,t){this.position=e,this.inclusive=t}};function dp(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],o=n.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),t.key):r=$t(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fp(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lt(n.position[t],e.position[t]))return!1;return!0}var vr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function hI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var fo=class{},Q=class n extends fo{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new pu(e,t,r):t==="array-contains"?new _u(e,r):t==="in"?new po(e,r):t==="not-in"?new yu(e,r):t==="array-contains-any"?new vu(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new mu(e,r):new gu(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison($t(t,this.value)):t!==null&&Sn(this.value)===Sn(t)&&this.matchesComparison($t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},ee=class n extends fo{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return wr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function wr(n){return n.op==="and"}function du(n){return n.op==="or"}function Yl(n){return mm(n)&&wr(n)}function mm(n){for(let e of n.filters)if(e instanceof ee)return!1;return!0}function fu(n){if(n instanceof Q)return n.field.canonicalString()+n.op.toString()+yr(n.value);if(Yl(n))return n.filters.map(e=>fu(e)).join(",");{let e=n.filters.map(t=>fu(t)).join(",");return`${n.op}(${e})`}}function gm(n,e){return n instanceof Q?function(r,i){return i instanceof Q&&r.op===i.op&&r.field.isEqual(i.field)&&lt(r.value,i.value)}(n,e):n instanceof ee?function(r,i){return i instanceof ee&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&gm(o,i.filters[c]),!0):!1}(n,e):void L()}function _m(n,e){let t=n.filters.concat(e);return ee.create(t,n.op)}function ym(n){return n instanceof Q?function(t){return`${t.field.canonicalString()} ${t.op} ${yr(t.value)}`}(n):n instanceof ee?function(t){return t.op.toString()+" {"+t.getFilters().map(ym).join(" ,")+"}"}(n):"Filter"}var pu=class extends Q{constructor(e,t,r){super(e,t,r),this.key=V.fromName(r.referenceValue)}matches(e){let t=V.comparator(e.key,this.key);return this.matchesComparison(t)}},mu=class extends Q{constructor(e,t){super(e,"in",t),this.keys=vm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},gu=class extends Q{constructor(e,t){super(e,"not-in",t),this.keys=vm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function vm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>V.fromName(r.referenceValue))}var _u=class extends Q{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Ri(t)&&Ai(t.arrayValue,this.value)}},po=class extends Q{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Ai(this.value.arrayValue,t)}},yu=class extends Q{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Ai(this.value.arrayValue,t)}},vu=class extends Q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Ri(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ai(this.value.arrayValue,r))}};var wu=class{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.ue=null}};function Iu(n,e=null,t=[],r=[],i=null,s=null,o=null){return new wu(n,e,t,r,i,s,o)}function Rn(n){let e=G(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>fu(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ra(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>yr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>yr(r)).join(",")),e.ue=t}return e.ue}function Fi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!hI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!fp(n.startAt,e.startAt)&&fp(n.endAt,e.endAt)}function mo(n){return V.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function go(n,e){return n.filters.filter(t=>t instanceof Q&&t.field.isEqual(e))}function pp(n,e,t){let r=no,i=!0;for(let s of go(n,e)){let o=no,c=!0;switch(s.op){case"<":case"<=":o=uI(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=no}lp({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let o=t.position[s];lp({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function mp(n,e,t){let r=jt,i=!0;for(let s of go(n,e)){let o=jt,c=!0;switch(s.op){case">=":case">":o=lI(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=jt}hp({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let o=t.position[s];hp({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}var Wt=class{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function dI(n,e,t,r,i,s,o,c){return new Wt(n,e,t,r,i,s,o,c)}function Ui(n){return new Wt(n)}function gp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wm(n){return n.collectionGroup!==null}function _i(n){let e=G(n);if(e.ce===null){e.ce=[];let t=new Set;for(let s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ne(ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new vr(s,r))}),t.has(ge.keyField().canonicalString())||e.ce.push(new vr(ge.keyField(),r))}return e.ce}function Ge(n){let e=G(n);return e.le||(e.le=fI(e,_i(n))),e.le}function fI(n,e){if(n.limitType==="F")return Iu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new vr(i.field,s)});let t=n.endAt?new Kt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Kt(n.startAt.position,n.startAt.inclusive):null;return Iu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Eu(n,e){let t=n.filters.concat([e]);return new Wt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Tu(n,e,t){return new Wt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function sa(n,e){return Fi(Ge(n),Ge(e))&&n.limitType===e.limitType}function Im(n){return`${Rn(Ge(n))}|lt:${n.limitType}`}function or(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>ym(i)).join(", ")}]`),ra(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>yr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>yr(i)).join(",")),`Target(${r})`}(Ge(n))}; limitType=${n.limitType})`}function Bi(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of _i(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,u){let h=dp(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,_i(r),i)||r.endAt&&!function(o,c,u){let h=dp(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,_i(r),i))}(n,e)}function pI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Em(n){return(e,t)=>{let r=!1;for(let i of _i(n)){let s=mI(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function mI(n,e,t){let r=n.field.isKeyField()?V.comparator(e.key,t.key):function(s,o,c){let u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?$t(u,h):L()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}var ht=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ln(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return hm(this.inner)}size(){return this.innerSize}};var gI=new ae(V.comparator);function qe(){return gI}var Tm=new ae(V.comparator);function pi(...n){let e=Tm;for(let t of n)e=e.insert(t.key,t);return e}function bm(n){let e=Tm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function at(){return yi()}function Am(){return yi()}function yi(){return new ht(n=>n.toString(),(n,e)=>n.isEqual(e))}var _I=new ae(V.comparator),yI=new ne(V.comparator);function W(...n){let e=yI;for(let t of n)e=e.add(t);return e}var vI=new ne($);function wI(){return vI}function Xl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ei(e)?"-0":e}}function Sm(n){return{integerValue:""+n}}function II(n,e){return jw(e)?Sm(e):Xl(n,e)}var Ir=class{constructor(){this._=void 0}};function EI(n,e,t){return n instanceof Pn?function(i,s){let o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ql(s)&&(s=Jl(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Ht?Pm(n,e):n instanceof Qt?Cm(n,e):function(i,s){let o=Rm(i,s),c=_p(o)+_p(i.Pe);return hu(o)&&hu(i.Pe)?Sm(c):Xl(i.serializer,c)}(n,e)}function TI(n,e,t){return n instanceof Ht?Pm(n,e):n instanceof Qt?Cm(n,e):t}function Rm(n,e){return n instanceof Cn?function(r){return hu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var Pn=class extends Ir{},Ht=class extends Ir{constructor(e){super(),this.elements=e}};function Pm(n,e){let t=Dm(e);for(let r of n.elements)t.some(i=>lt(i,r))||t.push(r);return{arrayValue:{values:t}}}var Qt=class extends Ir{constructor(e){super(),this.elements=e}};function Cm(n,e){let t=Dm(e);for(let r of n.elements)t=t.filter(i=>!lt(i,r));return{arrayValue:{values:t}}}var Cn=class extends Ir{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function _p(n){return oe(n.integerValue||n.doubleValue)}function Dm(n){return Ri(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var bu=class{constructor(e,t){this.field=e,this.transform=t}};function bI(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ht&&i instanceof Ht||r instanceof Qt&&i instanceof Qt?pr(r.elements,i.elements,lt):r instanceof Cn&&i instanceof Cn?lt(r.Pe,i.Pe):r instanceof Pn&&i instanceof Pn}(n.transform,e.transform)}var Au=class{constructor(e,t){this.version=e,this.transformResults=t}},Oe=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function io(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Er=class{};function km(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dn(n.key,Oe.none()):new Jt(n.key,n.data,Oe.none());{let t=n.data,r=Ne.empty(),i=new ne(ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xe(n.key,r,new Be(i.toArray()),Oe.none())}}function AI(n,e,t){n instanceof Jt?function(i,s,o){let c=i.value.clone(),u=vp(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Xe?function(i,s,o){if(!io(i.precondition,s))return void s.convertToUnknownDocument(o.version);let c=vp(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Nm(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function vi(n,e,t,r){return n instanceof Jt?function(s,o,c,u){if(!io(s.precondition,o))return c;let h=s.value.clone(),f=wp(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Xe?function(s,o,c,u){if(!io(s.precondition,o))return c;let h=wp(s.fieldTransforms,u,o),f=o.data;return f.setAll(Nm(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,c){return io(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function SI(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=Rm(r.transform,i||null);s!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,s))}return t||null}function yp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pr(r,i,(s,o)=>bI(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Jt=class extends Er{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Xe=class extends Er{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function Nm(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function vp(n,e,t){let r=new Map;F(n.length===t.length);for(let i=0;i<t.length;i++){let s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,TI(o,c,t[i]))}return r}function wp(n,e,t){let r=new Map;for(let i of n){let s=i.transform,o=t.data.field(i.field);r.set(i.field,EI(s,o,e))}return r}var Dn=class extends Er{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},_o=class extends Er{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Pi=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&AI(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=vi(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=vi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Am();return this.mutations.forEach(i=>{let s=e.get(i.key),o=s.overlayedDocument,c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;let u=km(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&pr(this.mutations,e.mutations,(t,r)=>yp(t,r))&&pr(this.baseMutations,e.baseMutations,(t,r)=>yp(t,r))}},Su=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){F(e.mutations.length===r.length);let i=function(){return _I}(),s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new n(e,t,r,i)}};var Ci=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Ru=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var he,Y;function RI(n){switch(n){default:return L();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Om(n){if(n===void 0)return ke("GRPC error has no .code"),P.UNKNOWN;switch(n){case he.OK:return P.OK;case he.CANCELLED:return P.CANCELLED;case he.UNKNOWN:return P.UNKNOWN;case he.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case he.INTERNAL:return P.INTERNAL;case he.UNAVAILABLE:return P.UNAVAILABLE;case he.UNAUTHENTICATED:return P.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case he.NOT_FOUND:return P.NOT_FOUND;case he.ALREADY_EXISTS:return P.ALREADY_EXISTS;case he.PERMISSION_DENIED:return P.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case he.ABORTED:return P.ABORTED;case he.OUT_OF_RANGE:return P.OUT_OF_RANGE;case he.UNIMPLEMENTED:return P.UNIMPLEMENTED;case he.DATA_LOSS:return P.DATA_LOSS;default:return L()}}(Y=he||(he={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";var Ip=null;function PI(){return new TextEncoder}var CI=new Ft([4294967295,4294967295],0);function Ep(n){let e=PI().encode(n),t=new Bc;return t.update(e),new Uint8Array(t.digest())}function Tp(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ft([t,r],0),new Ft([i,s],0)]}var Pu=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new In(`Invalid padding: ${t}`);if(r<0)throw new In(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new In(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new In(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ft.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Ft.fromNumber(r)));return i.compare(CI)===1&&(i=new Ft([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;let t=Ep(e),[r,i]=Tp(t);for(let s=0;s<this.hashCount;s++){let o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new n(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;let t=Ep(e),[r,i]=Tp(t);for(let s=0;s<this.hashCount;s++){let o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},In=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var yo=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Di.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(j.min(),i,new ae($),qe(),W())}},Di=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,W(),W(),W())}};var dr=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},vo=class{constructor(e,t){this.targetId=e,this.me=t}},wo=class{constructor(e,t,r=_e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Io=class{constructor(){this.fe=0,this.ge=Ap(),this.pe=_e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=W(),t=W(),r=W();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:L()}}),new Di(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Ap()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,F(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},Cu=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=qe(),this.qe=bp(),this.Qe=new ae($)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:L()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){let t=e.targetId,r=e.me.count,i=this.Je(t);if(i){let s=i.target;if(mo(s))if(r===0){let o=new V(s.path);this.Ue(t,o,Te.newNoDocument(o,j.min()))}else F(r===1);else{let o=this.Ye(t);if(o!==r){let c=this.Ze(e),u=c?this.Xe(c,e,o):1;if(u!==0){this.je(t);let h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}Ip?.et(function(f,m,v,A,C){var k,D,B,q,M,K;let J={localCacheCount:f,existenceFilterCount:m.count,databaseId:v.database,projectId:v.projectId},z=m.unchangedNames;return z&&(J.bloomFilter={applied:C===0,hashCount:(k=z?.hashCount)!==null&&k!==void 0?k:0,bitmapLength:(q=(B=(D=z?.bits)===null||D===void 0?void 0:D.bitmap)===null||B===void 0?void 0:B.length)!==null&&q!==void 0?q:0,padding:(K=(M=z?.bits)===null||M===void 0?void 0:M.padding)!==null&&K!==void 0?K:0,mightContain:w=>{var g;return(g=A?.mightContain(w))!==null&&g!==void 0&&g}}),J}(o,e.me,this.Le.tt(),c,u))}}}}Ze(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,o,c;try{o=Gt(r).toUint8Array()}catch(u){if(u instanceof ho)return wi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Pu(o,i,s)}catch(u){return wi(u instanceof In?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((s,o)=>{let c=this.Je(o);if(c){if(s.current&&mo(c.target)){let u=new V(c.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Te.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=W();this.qe.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{let h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));let i=new yo(e,t,this.Qe,this.ke,r);return this.ke=qe(),this.qe=bp(),this.Qe=new ae($),i}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Io,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ne($),this.qe=this.qe.insert(e,t)),t}ze(e){let t=this.Je(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Io),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function bp(){return new ae(V.comparator)}function Ap(){return new ae(V.comparator)}var DI={asc:"ASCENDING",desc:"DESCENDING"},kI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NI={and:"AND",or:"OR"},Du=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function ku(n,e){return n.useProto3Json||ra(e)?e:{value:e}}function Tr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function OI(n,e){return Tr(n,e.toTimestamp())}function Ve(n){return F(!!n),j.fromTimestamp(function(t){let r=bt(t);return new le(r.seconds,r.nanos)}(n))}function Zl(n,e){return Nu(n,e).canonicalString()}function Nu(n,e){let t=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Vm(n){let e=Z.fromString(n);return F(Gm(e)),e}function Eo(n,e){return Zl(n.databaseId,e.path)}function bn(n,e){let t=Vm(e);if(t.get(1)!==n.databaseId.projectId)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new V(Fm(t))}function Lm(n,e){return Zl(n.databaseId,e)}function Mm(n){let e=Vm(n);return e.length===4?Z.emptyPath():Fm(e)}function Ou(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fm(n){return F(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Sp(n,e,t){return{name:Eo(n,e),fields:t.value.mapValue.fields}}function xI(n,e,t){let r=bn(n,e.name),i=Ve(e.updateTime),s=e.createTime?Ve(e.createTime):j.min(),o=new Ne({mapValue:{fields:e.fields}}),c=Te.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function VI(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(F(f===void 0||typeof f=="string"),_e.fromBase64String(f||"")):(F(f===void 0||f instanceof Buffer||f instanceof Uint8Array),_e.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){let f=h.code===void 0?P.UNKNOWN:Om(h.code);return new x(f,h.message||"")}(o);t=new wo(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=bn(n,r.document.name),s=Ve(r.document.updateTime),o=r.document.createTime?Ve(r.document.createTime):j.min(),c=new Ne({mapValue:{fields:r.document.fields}}),u=Te.newFoundDocument(i,s,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new dr(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=bn(n,r.document),s=r.readTime?Ve(r.readTime):j.min(),o=Te.newNoDocument(i,s),c=r.removedTargetIds||[];t=new dr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=bn(n,r.document),s=r.removedTargetIds||[];t=new dr([],s,i,null)}else{if(!("filter"in e))return L();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,o=new Ru(i,s),c=r.targetId;t=new vo(c,o)}}return t}function To(n,e){let t;if(e instanceof Jt)t={update:Sp(n,e.key,e.value)};else if(e instanceof Dn)t={delete:Eo(n,e.key)};else if(e instanceof Xe)t={update:Sp(n,e.key,e.data),updateMask:qI(e.fieldMask)};else{if(!(e instanceof _o))return L();t={verify:Eo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){let c=o.transform;if(c instanceof Pn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ht)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Qt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Cn)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw L()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:OI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L()}(n,e.precondition)),t}function xu(n,e){let t=e.currentDocument?function(s){return s.updateTime!==void 0?Oe.updateTime(Ve(s.updateTime)):s.exists!==void 0?Oe.exists(s.exists):Oe.none()}(e.currentDocument):Oe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)F(c.setToServerValue==="REQUEST_TIME"),u=new Pn;else if("appendMissingElements"in c){let f=c.appendMissingElements.values||[];u=new Ht(f)}else if("removeAllFromArray"in c){let f=c.removeAllFromArray.values||[];u=new Qt(f)}else"increment"in c?u=new Cn(o,c.increment):L();let h=ge.fromServerFormat(c.fieldPath);return new bu(h,u)}(n,i)):[];if(e.update){e.update.name;let i=bn(n,e.update.name),s=new Ne({mapValue:{fields:e.update.fields}});if(e.updateMask){let o=function(u){let h=u.fieldPaths||[];return new Be(h.map(f=>ge.fromServerFormat(f)))}(e.updateMask);return new Xe(i,s,o,t,r)}return new Jt(i,s,t,r)}if(e.delete){let i=bn(n,e.delete);return new Dn(i,t)}if(e.verify){let i=bn(n,e.verify);return new _o(i,t)}return L()}function LI(n,e){return n&&n.length>0?(F(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Ve(i.updateTime):Ve(s);return o.isEqual(j.min())&&(o=Ve(s)),new Au(o,i.transformResults||[])}(t,e))):[]}function Um(n,e){return{documents:[Lm(n,e.path)]}}function Bm(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Lm(n,i);let s=function(h){if(h.length!==0)return zm(ee.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let o=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:ar(v.field),direction:FI(v.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);let c=ku(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function qm(n){let e=Mm(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){F(r===1);let f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){let v=jm(m);return v instanceof ee&&Yl(v)?v.getFilters():[v]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(v=>function(C){return new vr(cr(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(m){let v;return v=typeof m=="object"?m.value:m,ra(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(m){let v=!!m.before,A=m.values||[];return new Kt(A,v)}(t.startAt));let h=null;return t.endAt&&(h=function(m){let v=!m.before,A=m.values||[];return new Kt(A,v)}(t.endAt)),dI(e,i,o,s,c,"F",u,h)}function MI(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=cr(t.unaryFilter.field);return Q.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=cr(t.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=cr(t.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=cr(t.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(t){return Q.create(cr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ee.create(t.compositeFilter.filters.map(r=>jm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(t.compositeFilter.op))}(n):L()}function FI(n){return DI[n]}function UI(n){return kI[n]}function BI(n){return NI[n]}function ar(n){return{fieldPath:n.canonicalString()}}function cr(n){return ge.fromServerFormat(n.fieldPath)}function zm(n){return n instanceof Q?function(t){if(t.op==="=="){if(up(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NAN"}};if(cp(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(up(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NAN"}};if(cp(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ar(t.field),op:UI(t.op),value:t.value}}}(n):n instanceof ee?function(t){let r=t.getFilters().map(i=>zm(i));return r.length===1?r[0]:{compositeFilter:{op:BI(t.op),filters:r}}}(n):L()}function qI(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var br=class n{constructor(e,t,r,i,s=j.min(),o=j.min(),c=_e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var bo=class{constructor(e){this.ct=e}};function jI(n,e){let t;if(e.document)t=xI(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){let r=V.fromSegments(e.noDocument.path),i=Nn(e.noDocument.readTime);t=Te.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return L();{let r=V.fromSegments(e.unknownDocument.path),i=Nn(e.unknownDocument.version);t=Te.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){let s=new le(i[0],i[1]);return j.fromTimestamp(s)}(e.readTime)),t}function Rp(n,e){let t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ao(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Eo(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Tr(s,o.version.toTimestamp()),createTime:Tr(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:kn(e.version)};else{if(!e.isUnknownDocument())return L();r.unknownDocument={path:t.path.toArray(),version:kn(e.version)}}return r}function Ao(n){let e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function kn(n){let e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Nn(n){let e=new le(n.seconds,n.nanoseconds);return j.fromTimestamp(e)}function yn(n,e){let t=(e.baseMutations||[]).map(s=>xu(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){let o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){let c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}let r=e.mutations.map(s=>xu(n.ct,s)),i=le.fromMillis(e.localWriteTimeMs);return new Pi(e.batchId,i,t,r)}function mi(n){let e=Nn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Nn(n.lastLimboFreeSnapshotVersion):j.min(),r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return F(s.documents.length===1),Ge(Ui(Mm(s.documents[0])))}(n.query):function(s){return Ge(qm(s))}(n.query),new br(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,_e.fromBase64String(n.resumeToken))}function $m(n,e){let t=kn(e.snapshotVersion),r=kn(e.lastLimboFreeSnapshotVersion),i;i=mo(e.target)?Um(n.ct,e.target):Bm(n.ct,e.target)._t;let s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Rn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Km(n){let e=qm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Tu(e,e.limit,"L"):e}function Kc(n,e){return new Ci(e.largestBatchId,xu(n.ct,e.overlayMutation))}function Pp(n,e){let t=e.path.lastSegment();return[n,xe(e.path.popLast()),t]}function Cp(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:kn(r.readTime),documentKey:xe(r.documentKey.path),largestBatchId:r.largestBatchId}}var Vu=class{getBundleMetadata(e,t){return Dp(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Nn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Dp(e).put(function(i){return{bundleId:i.id,createTime:kn(Ve(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return kp(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Km(s.bundledQuery),readTime:Nn(s.readTime)}}(r)})}saveNamedQuery(e,t){return kp(e).put(function(i){return{name:i.name,readTime:kn(Ve(i.readTime)),bundledQuery:i.bundledQuery}}(t))}};function Dp(n){return ye(n,"bundles")}function kp(n){return ye(n,"namedQueries")}var So=class n{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){let r=t.uid||"";return new n(e,r)}getOverlay(e,t){return li(e).get(Pp(this.userId,t)).next(r=>r?Kc(this.serializer,r):null)}getOverlays(e,t){let r=at();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){let i=[];return r.forEach((s,o)=>{let c=new Ci(t,o);i.push(this.ht(e,c))}),S.waitFor(i)}removeOverlaysForBatchId(e,t,r){let i=new Set;t.forEach(o=>i.add(xe(o.getCollectionPath())));let s=[];return i.forEach(o=>{let c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(li(e).j("collectionPathOverlayIndex",c))}),S.waitFor(s)}getOverlaysForCollection(e,t,r){let i=at(),s=xe(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return li(e).U("collectionPathOverlayIndex",o).next(c=>{for(let u of c){let h=Kc(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,r,i){let s=at(),o,c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return li(e).J({index:"collectionGroupOverlayIndex",range:c},(u,h,f)=>{let m=Kc(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return li(e).put(function(i,s,o){let[c,u,h]=Pp(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:To(i.ct,o.mutation)}}(this.serializer,this.userId,t))}};function li(n){return ye(n,"documentOverlays")}var Lu=class{Pt(e){return ye(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{let r=t?.value;return r?_e.fromUint8Array(r):_e.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}};var Tt=class{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(oe(e.integerValue));else if("doubleValue"in e){let r=oe(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Ei(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=bt(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Gt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?dm(e)?this.dt(t,Number.MAX_SAFE_INTEGER):ia(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):L()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){let r=e.fields||{};this.dt(t,55);for(let i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;let s=e.fields||{};this.dt(t,53);let o="value",c=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(oe(c)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){let r=e.values||[];this.dt(t,50);for(let i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),V.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}};Tt.vt=new Tt;function zI(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Np(n){let e=64-function(r){let i=0;for(let s=0;s<8;++s){let o=zI(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}var Mu=class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{let i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{let i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){let t=this.qt(e),r=Np(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){let t=this.qt(e),r=Np(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){let t=function(s){let o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){let t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){let t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){let t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);let i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}},Fu=class{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}},Uu=class{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}},vn=class{constructor(){this.jt=new Mu,this.Ht=new Fu(this.jt),this.Jt=new Uu(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}};var wn=class n{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){let e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new n(this.indexId,this.documentKey,this.arrayValue,r)}};function Ut(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Op(n.arrayValue,e.arrayValue),t!==0?t:(t=Op(n.directionalValue,e.directionalValue),t!==0?t:V.comparator(n.documentKey,e.documentKey)))}function Op(n,e){for(let t=0;t<n.length&&t<e.length;++t){let r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}var Ro=class{constructor(e){this.Xt=new ne((t,r)=>ge.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(let t of e.filters){let r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(F(e.collectionGroup===this.collectionId),this.nn)return!1;let t=iu(e);if(t!==void 0&&!this.sn(t))return!1;let r=gn(e),i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){let c=this.Xt.getIterator().getNext();if(!i.has(c.field.canonicalString())){let u=r[s];if(!this.on(c,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){let c=r[s];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ne(ge.comparator),t=[];for(let r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new hr(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new hr(r.field,0))}for(let r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new hr(r.field,r.dir==="asc"?0:1)));return new mr(mr.UNKNOWN_ID,this.collectionId,t,Ii.empty())}sn(e){for(let t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;let r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}};function Wm(n){var e,t;if(F(n instanceof Q||n instanceof ee),n instanceof Q){if(n instanceof po){let i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Q.create(n.field,"==",s)))||[];return ee.create(i,"or")}return n}let r=n.filters.map(i=>Wm(i));return ee.create(r,n.op)}function GI(n){if(n.getFilters().length===0)return[];let e=ju(Wm(n));return F(Hm(e)),Bu(e)||qu(e)?[e]:e.getFilters()}function Bu(n){return n instanceof Q}function qu(n){return n instanceof ee&&Yl(n)}function Hm(n){return Bu(n)||qu(n)||function(t){if(t instanceof ee&&du(t)){for(let r of t.getFilters())if(!Bu(r)&&!qu(r))return!1;return!0}return!1}(n)}function ju(n){if(F(n instanceof Q||n instanceof ee),n instanceof Q)return n;if(n.filters.length===1)return ju(n.filters[0]);let e=n.filters.map(r=>ju(r)),t=ee.create(e,n.op);return t=Po(t),Hm(t)?t:(F(t instanceof ee),F(wr(t)),F(t.filters.length>1),t.filters.reduce((r,i)=>eh(r,i)))}function eh(n,e){let t;return F(n instanceof Q||n instanceof ee),F(e instanceof Q||e instanceof ee),t=n instanceof Q?e instanceof Q?function(i,s){return ee.create([i,s],"and")}(n,e):xp(n,e):e instanceof Q?xp(e,n):function(i,s){if(F(i.filters.length>0&&s.filters.length>0),wr(i)&&wr(s))return _m(i,s.getFilters());let o=du(i)?i:s,c=du(i)?s:i,u=o.filters.map(h=>eh(h,c));return ee.create(u,"or")}(n,e),Po(t)}function xp(n,e){if(wr(e))return _m(e,n.getFilters());{let t=e.filters.map(r=>eh(n,r));return ee.create(t,"or")}}function Po(n){if(F(n instanceof Q||n instanceof ee),n instanceof Q)return n;let e=n.getFilters();if(e.length===1)return Po(e[0]);if(mm(n))return n;let t=e.map(i=>Po(i)),r=[];return t.forEach(i=>{i instanceof Q?r.push(i):i instanceof ee&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ee.create(r,n.op)}var zu=class{constructor(){this.un=new ki}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve($e.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve($e.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}},ki=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ne(Z.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ne(Z.comparator)).toArray()}};var Ys=new Uint8Array(0),Gu=class{constructor(e,t){this.databaseId=t,this.cn=new ki,this.ln=new ht(r=>Rn(r),(r,i)=>Fi(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){let r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});let s={collectionId:r,parent:xe(i)};return Vp(e).put(s)}return S.resolve()}getCollectionParents(e,t){let r=[],i=IDBKeyRange.bound([t,""],[rm(t),""],!1,!0);return Vp(e).U(i).next(s=>{for(let o of s){if(o.collectionId!==t)break;r.push(ot(o.parent))}return r})}addFieldIndex(e,t){let r=hi(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;let s=r.add(i);if(t.indexState){let o=rr(e);return s.next(c=>{o.put(Cp(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){let r=hi(e),i=rr(e),s=nr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=hi(e),r=nr(e),i=rr(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return S.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){let s=new Ro(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){let r=nr(e),i=!0,s=new Map;return S.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=W(),c=[];return S.forEach(s,(u,h)=>{N("IndexedDbIndexManager",`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(K=>`${K.fieldPath}:${K.kind}`).join(",")}`}(u)} to execute ${Rn(t)}`);let f=function(M,K){let J=iu(K);if(J===void 0)return null;for(let z of go(M,J.fieldPath))switch(z.op){case"array-contains-any":return z.value.arrayValue.values||[];case"array-contains":return[z.value]}return null}(h,u),m=function(M,K){let J=new Map;for(let z of gn(K))for(let w of go(M,z.fieldPath))switch(w.op){case"==":case"in":J.set(z.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return J.set(z.fieldPath.canonicalString(),w.value),Array.from(J.values())}return null}(h,u),v=function(M,K){let J=[],z=!0;for(let w of gn(K)){let g=w.kind===0?pp(M,w.fieldPath,M.startAt):mp(M,w.fieldPath,M.startAt);J.push(g.value),z&&(z=g.inclusive)}return new Kt(J,z)}(h,u),A=function(M,K){let J=[],z=!0;for(let w of gn(K)){let g=w.kind===0?mp(M,w.fieldPath,M.endAt):pp(M,w.fieldPath,M.endAt);J.push(g.value),z&&(z=g.inclusive)}return new Kt(J,z)}(h,u),C=this.In(u,h,v),k=this.In(u,h,A),D=this.Tn(u,h,m),B=this.En(u.indexId,f,C,v.inclusive,k,A.inclusive,D);return S.forEach(B,q=>r.G(q,t.limit).next(M=>{M.forEach(K=>{let J=V.fromSegments(K.documentKey);o.has(J)||(o=o.add(J),c.push(J))})}))}).next(()=>c)}return S.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=GI(ee.create(e.filters,"and")).map(r=>Iu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,c){let u=(t!=null?t.length:1)*Math.max(r.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){let v=t?this.dn(t[m/h]):Ys,A=this.An(e,v,r[m%h],i),C=this.Rn(e,v,s[m%h],o),k=c.map(D=>this.An(e,v,D,!0));f.push(...this.createRange(A,C,k))}return f}An(e,t,r,i){let s=new wn(e,V.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){let s=new wn(e,V.empty(),t,r);return i?s.Zt():s}Pn(e,t){let r=new Ro(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(let c of s)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2,i=this.hn(t);return S.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let h=new ne(ge.comparator),f=!1;for(let m of u.filters)for(let v of m.getFlattenedFilters())v.field.isKeyField()||(v.op==="array-contains"||v.op==="array-contains-any"?f=!0:h=h.add(v.field));for(let m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){let r=new vn;for(let i of gn(e)){let s=t.data.field(i.fieldPath);if(s==null)return null;let o=r.Yt(i.kind);Tt.vt.It(s,o)}return r.zt()}dn(e){let t=new vn;return Tt.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){let r=new vn;return Tt.vt.It(Si(this.databaseId,t),r.Yt(function(s){let o=gn(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new vn);let s=0;for(let o of gn(e)){let c=r[s++];for(let u of i)if(this.fn(t,o.fieldPath)&&Ri(c))i=this.gn(i,o,c);else{let h=u.Yt(o.kind);Tt.vt.It(c,h)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){let t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){let i=[...e],s=[];for(let o of r.arrayValue.values||[])for(let c of i){let u=new vn;u.seed(c.zt()),Tt.vt.It(o,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof Q&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){let r=hi(e),i=rr(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{let o=[];return S.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,m){let v=m?new Ii(m.sequenceNumber,new $e(Nn(m.readTime),new V(ot(m.documentKey)),m.largestBatchId)):Ii.empty(),A=f.fields.map(([C,k])=>new hr(ge.fromServerFormat(C),k));return new mr(f.indexId,f.collectionGroup,A,v)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{let s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:$(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){let i=hi(e),s=rr(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>S.forEach(c,u=>s.put(Cp(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){let r=new Map;return S.forEach(t,(i,s)=>{let o=r.get(i.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),S.forEach(c,u=>this.wn(e,i,u).next(h=>{let f=this.Sn(s,u);return h.isEqual(f)?S.resolve():this.bn(e,s,u,h,f)}))))})}Dn(e,t,r,i){return nr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return nr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){let i=nr(e),s=new ne(Ut);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{s=s.add(new wn(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}Sn(e,t){let r=new ne(Ut),i=this.Vn(t,e);if(i==null)return r;let s=iu(t);if(s!=null){let o=e.data.field(s.fieldPath);if(Ri(o))for(let c of o.arrayValue.values||[])r=r.add(new wn(t.indexId,e.key,this.dn(c),i))}else r=r.add(new wn(t.indexId,e.key,Ys,i));return r}bn(e,t,r,i,s){N("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let o=[];return function(u,h,f,m,v){let A=u.getIterator(),C=h.getIterator(),k=tr(A),D=tr(C);for(;k||D;){let B=!1,q=!1;if(k&&D){let M=f(k,D);M<0?q=!0:M>0&&(B=!0)}else k!=null?q=!0:B=!0;B?(m(D),D=tr(C)):q?(v(k),k=tr(A)):(k=tr(A),D=tr(C))}}(i,s,Ut,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),S.waitFor(o)}yn(e){let t=1;return rr(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>Ut(o,c)).filter((o,c,u)=>!c||Ut(o,u[c-1])!==0);let i=[];i.push(e);for(let o of r){let c=Ut(o,e),u=Ut(o,t);if(c===0)i[0]=e.Zt();else if(c>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(t);let s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];let c=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ys,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ys,[]];s.push(IDBKeyRange.bound(c,u))}return s}Cn(e,t){return Ut(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Lp)}getMinOffset(e,t){return S.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||L())).next(Lp)}};function Vp(n){return ye(n,"collectionParents")}function nr(n){return ye(n,"indexEntries")}function hi(n){return ye(n,"indexConfiguration")}function rr(n){return ye(n,"indexState")}function Lp(n){F(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){let i=n[r].indexState.offset;Kl(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new $e(e.readTime,e.documentKey,t)}var Mp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ze=class n{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};function Qm(n,e,t){let r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId),c=0,u=r.J({range:o},(f,m,v)=>(c++,v.delete()));s.push(u.next(()=>{F(c===1)}));let h=[];for(let f of t.mutations){let m=am(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return S.waitFor(s).next(()=>h)}function Co(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw L();e=n.noDocument}return JSON.stringify(e).length}ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(41943040,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);var Do=class n{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){F(e.uid!=="");let s=e.isAuthenticated()?e.uid:"";return new n(s,t,r,i)}checkEmpty(e){let t=!0,r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Bt(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){let s=ur(e),o=Bt(e);return o.add({}).next(c=>{F(typeof c=="number");let u=new Pi(c,t,r,i),h=function(A,C,k){let D=k.baseMutations.map(q=>To(A.ct,q)),B=k.mutations.map(q=>To(A.ct,q));return{userId:C,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:D,mutations:B}}(this.serializer,this.userId,u),f=[],m=new ne((v,A)=>$(v.canonicalString(),A.canonicalString()));for(let v of i){let A=am(this.userId,v.key.path,c);m=m.add(v.key.path.popLast()),f.push(o.put(h)),f.push(s.put(A,Gw))}return m.forEach(v=>{f.push(this.indexManager.addToCollectionParentIndex(e,v))}),e.addOnCommittedListener(()=>{this.Fn[c]=u.keys()}),S.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return Bt(e).get(t).next(r=>r?(F(r.userId===this.userId),yn(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?S.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){let i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]),s=null;return Bt(e).J({index:"userMutationsIndex",range:i},(o,c,u)=>{c.userId===this.userId&&(F(c.batchId>=r),s=yn(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=-1;return Bt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Bt(e).U("userMutationsIndex",t).next(r=>r.map(i=>yn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){let r=to(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return ur(e).J({range:i},(o,c,u)=>{let[h,f,m]=o,v=ot(f);if(h===this.userId&&t.path.isEqual(v))return Bt(e).get(m).next(A=>{if(!A)throw L();F(A.userId===this.userId),s.push(yn(this.serializer,A))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ne($),i=[];return t.forEach(s=>{let o=to(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=ur(e).J({range:c},(h,f,m)=>{let[v,A,C]=h,k=ot(A);v===this.userId&&s.path.isEqual(k)?r=r.add(C):m.done()});i.push(u)}),S.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=to(this.userId,r),o=IDBKeyRange.lowerBound(s),c=new ne($);return ur(e).J({range:o},(u,h,f)=>{let[m,v,A]=u,C=ot(v);m===this.userId&&r.isPrefixOf(C)?C.length===i&&(c=c.add(A)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){let r=[],i=[];return t.forEach(s=>{i.push(Bt(e).get(s).next(o=>{if(o===null)throw L();F(o.userId===this.userId),r.push(yn(this.serializer,o))}))}),S.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Qm(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),S.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();let r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ur(e).J({range:r},(s,o,c)=>{if(s[0]===this.userId){let u=ot(s[1]);i.push(u)}else c.done()}).next(()=>{F(i.length===0)})})}containsKey(e,t){return Jm(e,this.userId,t)}Nn(e){return Ym(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}};function Jm(n,e,t){let r=to(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r),o=!1;return ur(n).J({range:s,H:!0},(c,u,h)=>{let[f,m,v]=c;f===e&&m===i&&(o=!0),h.done()}).next(()=>o)}function Bt(n){return ye(n,"mutations")}function ur(n){return ye(n,"documentMutations")}function Ym(n){return ye(n,"mutationQueues")}var Ar=class n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new n(0)}static kn(){return new n(-1)}};var $u=class{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{let r=new Ar(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>j.fromTimestamp(new le(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ir(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0,s=[];return ir(e).J((o,c)=>{let u=mi(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>S.waitFor(s)).next(()=>i)}forEachTarget(e,t){return ir(e).J((r,i)=>{let s=mi(i);t(s)})}qn(e){return Fp(e).get("targetGlobalKey").next(t=>(F(t!==null),t))}Qn(e,t){return Fp(e).put("targetGlobalKey",t)}Kn(e,t){return ir(e).put($m(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){let r=Rn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),s=null;return ir(e).J({range:i,index:"queryTargetsIndex"},(o,c,u)=>{let h=mi(c);Fi(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){let i=[],s=qt(e);return t.forEach(o=>{let c=xe(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))}),S.waitFor(i)}removeMatchingKeys(e,t,r){let i=qt(e);return S.forEach(t,s=>{let o=xe(s.path);return S.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){let r=qt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){let r=IDBKeyRange.bound([t],[t+1],!1,!0),i=qt(e),s=W();return i.J({range:r,H:!0},(o,c,u)=>{let h=ot(o[1]),f=new V(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){let r=xe(t.path),i=IDBKeyRange.bound([r],[rm(r)],!1,!0),s=0;return qt(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,c],u,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,t){return ir(e).get(t).next(r=>r?mi(r):null)}};function ir(n){return ye(n,"targets")}function Fp(n){return ye(n,"targetGlobal")}function qt(n){return ye(n,"targetDocuments")}function Up([n,e],[t,r]){let i=$(n,t);return i===0?$(e,r):i}var Ku=class{constructor(e){this.Un=e,this.buffer=new ne(Up),this.Wn=0}Gn(){return++this.Wn}zn(e){let t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();Up(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Wu=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xt(t)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Vn(t)}await this.Hn(3e5)})}},Hu=class{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Me.oe);let r=new Ku(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Mp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mp):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,c,u,h,f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),sr()<=H.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}};function $I(n,e){return new Hu(n,e)}var Qu=class{constructor(e,t){this.db=e,this.garbageCollector=$I(this,t)}Yn(e){let t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return Xs(e,r)}removeReference(e,t,r){return Xs(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Xs(e,t)}nr(e,t){return function(i,s){let o=!1;return Ym(i).Y(c=>Jm(i,c,s).next(u=>(u&&(o=!0),S.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){let r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[],s=0;return this.tr(e,(o,c)=>{if(c<=t){let u=this.nr(e,o).next(h=>{if(!h)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,j.min()),qt(e).delete(function(m){return[0,xe(m.path)]}(o))))});i.push(u)}}).next(()=>S.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Xs(e,t)}tr(e,t){let r=qt(e),i,s=Me.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==Me.oe&&t(new V(ot(i)),s),s=h,i=u):s=Me.oe}).next(()=>{s!==Me.oe&&t(new V(ot(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}};function Xs(n,e){return qt(n).put(function(r,i){return{targetId:0,path:xe(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}var ko=class{constructor(){this.changes=new ht(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Ju=class{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return mn(e).put(r)}removeEntry(e,t,r){return mn(e).delete(function(s,o){let c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Ao(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Te.newInvalidDocument(t);return mn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(di(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:Te.newInvalidDocument(t)};return mn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(di(t))},(i,s)=>{r={document:this.ir(t,s),size:Co(s)}}).next(()=>r)}getEntries(e,t){let r=qe();return this._r(e,t,(i,s)=>{let o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=qe(),i=new ae(V.comparator);return this._r(e,t,(s,o)=>{let c=this.ir(s,o);r=r.insert(s,c),i=i.insert(s,Co(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return S.resolve();let i=new ne(jp);t.forEach(u=>i=i.add(u));let s=IDBKeyRange.bound(di(i.first()),di(i.last())),o=i.getIterator(),c=o.getNext();return mn(e).J({index:"documentKeyIndex",range:s},(u,h,f)=>{let m=V.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&jp(c,m)<0;)r(c,null),c=o.getNext();c&&c.isEqual(m)&&(r(c,h),c=o.hasNext()?o.getNext():null),c?f.$(di(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){let o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Ao(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return mn(e).U(IDBKeyRange.bound(c,u,!0)).next(h=>{s?.incrementDocumentReadCount(h.length);let f=qe();for(let m of h){let v=this.ir(V.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);v.isFoundDocument()&&(Bi(t,v)||i.has(v.key))&&(f=f.insert(v.key,v))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=qe(),o=qp(t,r),c=qp(t,$e.max());return mn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{let m=this.ir(V.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new Yu(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Bp(e).get("remoteDocumentGlobalKey").next(t=>(F(!!t),t))}rr(e,t){return Bp(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){let r=jI(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return Te.newInvalidDocument(e)}};function Xm(n){return new Ju(n)}var Yu=class extends ko{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new ht(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){let t=[],r=0,i=new ne((s,o)=>$(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{let c=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,c.readTime)),o.isValidDocument()){let u=Rp(this.cr.serializer,o);i=i.add(s.path.popLast());let h=Co(u);r+=h-c.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){let u=Rp(this.cr.serializer,o.convertToNoDocument(j.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),S.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}};function Bp(n){return ye(n,"remoteDocumentGlobal")}function mn(n){return ye(n,"remoteDocumentsV14")}function di(n){let e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function qp(n,e){let t=e.documentKey.path.toArray();return[n,Ao(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function jp(n,e){let t=n.path.toArray(),r=e.path.toArray(),i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=$(t[s],r[s]),i)return i;return i=$(t.length,r.length),i||(i=$(t[t.length-2],r[r.length-2]),i||$(t[t.length-1],r[r.length-1]))}var Xu=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var No=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&vi(r.mutation,i,Be.empty(),le.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){let i=at();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=pi();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){let r=at();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=qe(),o=yi(),c=function(){return yi()}();return t.forEach((u,h)=>{let f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Xe)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),vi(f.mutation,h,f.mutation.getFieldMask(),le.now())):o.set(h.key,Be.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new Xu(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){let r=yi(),i=new ae((o,c)=>o-c),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(let c of o)c.keys().forEach(u=>{let h=t.get(u);if(h===null)return;let f=r.get(u)||Be.empty();f=c.applyToLocalView(h,f),r.set(u,f);let m=(i.get(c.batchId)||W()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{let o=[],c=i.getReverseIterator();for(;c.hasNext();){let u=c.getNext(),h=u.key,f=u.value,m=Am();f.forEach(v=>{if(!s.has(v)){let A=km(t.get(v),r.get(v));A!==null&&m.set(v,A),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):S.resolve(at()),c=-1,u=s;return o.next(h=>S.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,W())).next(f=>({batchId:c,changes:bm(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new V(t)).next(r=>{let i=pi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,o=pi();return this.indexManager.getCollectionParents(e,s).next(c=>S.forEach(c,u=>{let h=function(m,v){return new Wt(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,v)=>{o=o.insert(m,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,h)=>{let f=h.getKey();o.get(f)===null&&(o=o.insert(f,Te.newInvalidDocument(f)))});let c=pi();return o.forEach((u,h)=>{let f=s.get(u);f!==void 0&&vi(f.mutation,h,Be.empty(),le.now()),Bi(t,h)&&(c=c.insert(u,h))}),c})}};var Zu=class{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ve(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Km(i.bundledQuery),readTime:Ve(i.readTime)}}(t)),S.resolve()}};var el=class{constructor(){this.overlays=new ae(V.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){let r=at();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),S.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){let i=at(),s=t.length+1,o=new V(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){let u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ae((h,f)=>h-f),o=this.overlays.getIterator();for(;o.hasNext();){let h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=at(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}let c=at(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return S.resolve(c)}ht(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ci(t,r));let s=this.Ir.get(t);s===void 0&&(s=W(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}};var tl=class{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}};var Ni=class{constructor(){this.Tr=new ne(de.Er),this.dr=new ne(de.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){let r=new de(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new de(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){let t=new V(new Z([])),r=new de(t,e),i=new de(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){let t=new V(new Z([])),r=new de(t,e),i=new de(t,e+1),s=W();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){let t=new de(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},de=class{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return V.comparator(e.key,t.key)||$(e.wr,t.wr)}static Ar(e,t){return $(e.wr,t.wr)||V.comparator(e.key,t.key)}};var nl=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ne(de.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new Pi(s,t,r,i);this.mutationQueue.push(o);for(let c of i)this.br=this.br.add(new de(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.vr(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new de(t,0),i=new de(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{let c=this.Dr(o.wr);s.push(c)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ne($);return t.forEach(i=>{let s=new de(i,0),o=new de(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],c=>{r=r.add(c.wr)})}),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;V.isDocumentKey(s)||(s=s.child(""));let o=new de(new V(s),0),c=new ne($);return this.br.forEachWhile(u=>{let h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.wr)),!0)},o),S.resolve(this.Cr(c))}Cr(e){let t=[];return e.forEach(r=>{let i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){F(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return S.forEach(t.mutations,i=>{let s=new de(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){let r=new de(t,0),i=this.br.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){let t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var rl=class{constructor(e){this.Mr=e,this.docs=function(){return new ae(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let r=qe();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Te.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=qe(),o=t.path,c=new V(o.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){let{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Kl(im(f),r)<=0||(i.has(f.key)||Bi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,t,r,i){L()}Or(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new il(this)}getSize(e){return S.resolve(this.size)}},il=class extends ko{constructor(e){super(),this.cr=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}};var sl=class{constructor(e){this.persistence=e,this.Nr=new ht(t=>Rn(t),Fi),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ni,this.targetCount=0,this.kr=Ar.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.kr=new Ar(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){let r=this.Nr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Br.yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}};var Oo=class{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Me(0),this.Kr=!1,this.Kr=!0,this.$r=new tl,this.referenceDelegate=e(this),this.Ur=new sl(this),this.indexManager=new zu,this.remoteDocumentCache=function(i){return new rl(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new bo(t),this.Gr=new Zu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new el,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new nl(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);let i=new ol(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return S.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}},ol=class extends co{constructor(e){super(),this.currentSequenceNumber=e}},xo=class n{constructor(e){this.persistence=e,this.Jr=new Ni,this.Yr=null}static Zr(e){return new n(e)}get Xr(){if(this.Yr)return this.Yr;throw L()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,r=>{let i=V.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,j.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}};var al=class{constructor(e){this.serializer=e}O(e,t,r,i){let s=new uo("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ip,{unique:!0}),u.createObjectStore("documentMutations")}(e),zp(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=S.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),zp(e)),o=o.next(()=>function(u){let h=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,h){return h.store("mutations").U().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ip,{unique:!0});let m=h.store("mutations"),v=f.map(A=>m.put(A));return S.waitFor(v)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){let h=u.createObjectStore("documentOverlays",{keyPath:nI});h.createIndex("collectionPathOverlayIndex",rI,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",iI,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){let h=u.createObjectStore("remoteDocumentsV14",{keyPath:$w});h.createIndex("documentKeyIndex",Kw),h.createIndex("collectionGroupIndex",Ww)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:Xw}).createIndex("sequenceNumberIndex",Zw,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:eI}).createIndex("documentKeyIndex",tI,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=Co(i)}).next(()=>{let r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){let t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>S.forEach(i,s=>{let o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>S.forEach(c,u=>{F(u.userId===s.userId);let h=yn(this.serializer,u);return Qm(e,s.userId,h).next(()=>{})}))}))}ii(e){let t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{let s=[];return r.J((o,c)=>{let u=new Z(o),h=function(m){return[0,xe(m)]}(u);s.push(t.get(h).next(f=>f?S.resolve():(m=>t.put({targetId:0,path:xe(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>S.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:Yw});let r=t.store("collectionParents"),i=new ki,s=o=>{if(i.add(o)){let c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:xe(u)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{let u=new Z(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,u],h)=>{let f=ot(c);return s(f.popLast())}))}oi(e){let t=e.store("targets");return t.J((r,i)=>{let s=mi(i),o=$m(this.serializer,s);return t.put(o)})}_i(e,t){let r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{let c=t.store("remoteDocumentsV14"),u=function(m){return m.document?new V(Z.fromString(m.document.name).popFirst(5)):m.noDocument?V.fromSegments(m.noDocument.path):m.unknownDocument?V.fromSegments(m.unknownDocument.path):L()}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>S.waitFor(i))}ai(e,t){let r=t.store("mutations"),i=Xm(this.serializer),s=new Oo(xo.Zr,this.serializer.ct);return r.U().next(o=>{let c=new Map;return o.forEach(u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:W();yn(this.serializer,u).keys().forEach(m=>f=f.add(m)),c.set(u.userId,f)}),S.forEach(c,(u,h)=>{let f=new Ee(h),m=So.lt(this.serializer,f),v=s.getIndexManager(f),A=Do.lt(f,this.serializer,v,s.referenceDelegate);return new No(i,A,m,v).recalculateAndSaveOverlaysForDocumentKeys(new Ti(t,Me.oe),u).next()})})}};function zp(n){n.createObjectStore("targetDocuments",{keyPath:Qw}).createIndex("documentTargetsIndex",Jw,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Hw,{unique:!0}),n.createObjectStore("targetGlobal")}var Wc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",cl=class n{constructor(e,t,r,i,s,o,c,u,h,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=m,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=v=>Promise.resolve(),!n.D())throw new x(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Qu(this,i),this.Ai=t+"main",this.serializer=new bo(u),this.Ri=new gr(this.Ai,this.hi,new al(this.serializer)),this.$r=new Lu,this.Ur=new $u(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Xm(this.serializer),this.Gr=new Vu,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&ke("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(P.FAILED_PRECONDITION,Wc);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Me(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Zs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Xt(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return fi(e).get("owner").next(t=>S.resolve(this.vi(t)))}Ci(e){return Zs(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{let r=ye(t,"clientMetadata");return r.U().next(i=>{let s=this.xi(i,18e5),o=i.filter(c=>s.indexOf(c)===-1);return S.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(let t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?S.resolve(!0):fi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new x(P.FAILED_PRECONDITION,Wc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Zs(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){let s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&N("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new Ti(e,Me.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Zs(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Do.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Gu(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return So.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){N("IndexedDbPersistence","Starting transaction:",e);let i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?aI:u===16?oI:u===15?Hl:u===14?lm:u===13?um:u===12?sI:u===11?cm:void L()}(this.hi),o;return this.Ri.runTransaction(e,i,s,c=>(o=new Ti(c,this.Qr?this.Qr.next():Me.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw ke(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new x(P.FAILED_PRECONDITION,sm);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return fi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new x(P.FAILED_PRECONDITION,Wc)})}Di(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return fi(e).put("owner",t)}static D(){return gr.D()}bi(e){let t=fi(e);return t.get("owner").next(r=>this.vi(r)?(N("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):S.resolve())}Mi(e,t){let r=Date.now();return!(e<r-t)&&(!(e>r)||(ke(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();let t=/(?:Version|Mobile)\/1[456]/;Wa()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{let r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ke("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){ke("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}};function fi(n){return ye(n,"owner")}function Zs(n){return ye(n,"clientMetadata")}function KI(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}var ul=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=W(),i=W();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var ll=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Vo=class{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Wa()?8:om(ue())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;let o=new ll;return this.Xi(e,t,o).next(c=>{if(s.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(sr()<=H.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(sr()<=H.DEBUG&&N("QueryEngine","Query:",or(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(sr()<=H.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):S.resolve())}Yi(e,t){if(gp(t))return S.resolve(null);let r=Ge(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Tu(t,null,"F"),r=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let o=W(...s);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{let h=this.ts(t,c);return this.ns(t,h,o,u.readTime)?this.Yi(e,Tu(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,i){return gp(t)||i.isEqual(j.min())?S.resolve(null):this.Ji.getDocuments(e,r).next(s=>{let o=this.ts(t,s);return this.ns(t,o,r,i)?S.resolve(null):(sr()<=H.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),or(t)),this.rs(e,o,t,qw(i,-1)).next(c=>c))})}ts(e,t){let r=new ne(Em(e));return t.forEach((i,s)=>{Bi(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return sr()<=H.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",or(t)),this.Ji.getDocumentsMatchingQuery(e,t,$e.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}};var hl=class{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new ae($),this._s=new ht(s=>Rn(s),Fi),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new No(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}};function Zm(n,e,t,r){return new hl(n,e,t,r)}async function eg(n,e){let t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let o=[],c=[],u=W();for(let h of i){o.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}for(let h of s){c.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function WI(n,e){let t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){let m=h.batch,v=m.keys(),A=S.resolve();return v.forEach(C=>{A=A.next(()=>f.getEntry(u,C)).next(k=>{let D=h.docVersions.get(C);F(D!==null),k.version.compareTo(D)<0&&(m.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=W();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function tg(n){let e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function HI(n,e){let t=G(n),r=e.snapshotVersion,i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;let c=[];e.targetChanges.forEach((f,m)=>{let v=i.get(m);if(!v)return;c.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,m)));let A=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(_e.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(k,D,B){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(v,A,f)&&c.push(t.Ur.updateTargetData(s,A))});let u=qe(),h=W();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(QI(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(j.min())){let f=t.Ur.getLastRemoteSnapshotVersion(s).next(m=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return S.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.os=i,s))}function QI(n,e,t){let r=W(),i=W();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=qe();return t.forEach((c,u)=>{let h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function JI(n,e){let t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function YI(n,e){let t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function dl(n,e,t){let r=G(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xt(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Gp(n,e,t){let r=G(n),i=j.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){let m=G(u),v=m._s.get(f);return v!==void 0?S.resolve(m.os.get(v)):m.Ur.getTargetData(h,f)}(r,o,Ge(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:j.min(),t?s:W())).next(c=>(XI(r,pI(e),c),{documents:c,Ts:s})))}function XI(n,e,t){let r=n.us.get(e)||j.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}var Lo=class{constructor(){this.activeTargetIds=wI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var Mo=class{constructor(){this.so=new Lo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Lo,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var fl=class{_o(e){}shutdown(){}};var Fo=class{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.ho)e(0)}lo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var eo=null;function Hc(){return eo===null?eo=function(){return 268435456+Math.round(2147483648*Math.random())}():eo++,"0x"+eo.toString(16)}var ZI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var pl=class{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}};var Pe="WebChannelConnection",ml=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){let c=Hc(),u=this.xo(t,r.toUriEncodedString());N("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);let h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(t,u,h,i).then(f=>(N("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw wi("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,o,c){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Dr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){let i=ZI[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){let s=Hc();return new Promise((o,c)=>{let u=new qc;u.setWithCredentials(!0),u.listenOnce(jc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ui.NO_ERROR:let f=u.getResponseJson();N(Pe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case ui.TIMEOUT:N(Pe,`RPC '${e}' ${s} timed out`),c(new x(P.DEADLINE_EXCEEDED,"Request time out"));break;case ui.HTTP_ERROR:let m=u.getStatus();if(N(Pe,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);let A=v?.error;if(A&&A.status&&A.message){let C=function(D){let B=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN}(A.status);c(new x(C,A.message))}else c(new x(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new x(P.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{N(Pe,`RPC '${e}' ${s} completed.`)}});let h=JSON.stringify(i);N(Pe,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}Bo(e,t,r){let i=Hc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$c(),c=Gc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;let f=s.join("");N(Pe,`Creating RPC '${e}' stream ${i}: ${f}`,u);let m=o.createWebChannel(f,u),v=!1,A=!1,C=new pl({Io:D=>{A?N(Pe,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(v||(N(Pe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),v=!0),N(Pe,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},To:()=>m.close()}),k=(D,B,q)=>{D.listen(B,M=>{try{q(M)}catch(K){setTimeout(()=>{throw K},0)}})};return k(m,er.EventType.OPEN,()=>{A||(N(Pe,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),k(m,er.EventType.CLOSE,()=>{A||(A=!0,N(Pe,`RPC '${e}' stream ${i} transport closed`),C.So())}),k(m,er.EventType.ERROR,D=>{A||(A=!0,wi(Pe,`RPC '${e}' stream ${i} transport errored:`,D),C.So(new x(P.UNAVAILABLE,"The operation could not be completed")))}),k(m,er.EventType.MESSAGE,D=>{var B;if(!A){let q=D.data[0];F(!!q);let M=q,K=M.error||((B=M[0])===null||B===void 0?void 0:B.error);if(K){N(Pe,`RPC '${e}' stream ${i} received error:`,K);let J=K.status,z=function(_){let I=he[_];if(I!==void 0)return Om(I)}(J),w=K.message;z===void 0&&(z=P.INTERNAL,w="Unknown error status: "+J+" with message "+K.message),A=!0,C.So(new x(z,w)),m.close()}else N(Pe,`RPC '${e}' stream ${i} received:`,q),C.bo(q)}}),k(c,zc.STAT_EVENT,D=>{D.stat===Js.PROXY?N(Pe,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Js.NOPROXY&&N(Pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}};function eE(){return typeof window<"u"?window:null}function so(){return typeof document<"u"?document:null}function oa(n){return new Du(n,!0)}var Uo=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();let t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}};var Bo=class{constructor(e,t,r,i,s,o,c,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Uo(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(ke(t.toString()),ke("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;let e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{let i=new x(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){let r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},gl=class extends Bo{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();let t=VI(this.serializer,e),r=function(s){if(!("targetChange"in s))return j.min();let o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Ve(o.readTime):j.min()}(e);return this.listener.d_(t,r)}A_(e){let t={};t.database=Ou(this.serializer),t.addTarget=function(s,o){let c,u=o.target;if(c=mo(u)?{documents:Um(s,u)}:{query:Bm(s,u)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=xm(s,o.resumeToken);let h=ku(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(j.min())>0){c.readTime=Tr(s,o.snapshotVersion.toTimestamp());let h=ku(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);let r=MI(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){let t={};t.database=Ou(this.serializer),t.removeTarget=e,this.a_(t)}},_l=class extends Bo{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return F(!!e.streamToken),this.lastStreamToken=e.streamToken,F(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();let t=LI(e.writeResults,e.commitTime),r=Ve(e.commitTime);return this.listener.g_(r,t)}p_(){let e={};e.database=Ou(this.serializer),this.a_(e)}m_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>To(this.serializer,r))};this.a_(t)}};var yl=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Nu(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(P.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Nu(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(P.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}},vl=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ke(t),this.D_=!1):N("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}};var wl=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Mn(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(u){let h=G(u);h.L_.add(4),await qi(h),h.q_.set("Unknown"),h.L_.delete(4),await aa(h)}(this))})}),this.q_=new vl(r,i)}};async function aa(n){if(Mn(n))for(let e of n.B_)await e(!0)}async function qi(n){for(let e of n.B_)await e(!1)}function ng(n,e){let t=G(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ih(t)?rh(t):kr(t).r_()&&nh(t,e))}function th(n,e){let t=G(n),r=kr(t);t.N_.delete(e),r.r_()&&rg(t,e),t.N_.size===0&&(r.r_()?r.o_():Mn(t)&&t.q_.set("Unknown"))}function nh(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}kr(n).A_(e)}function rg(n,e){n.Q_.xe(e),kr(n).R_(e)}function rh(n){n.Q_=new Cu({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),kr(n).start(),n.q_.v_()}function ih(n){return Mn(n)&&!kr(n).n_()&&n.N_.size>0}function Mn(n){return G(n).L_.size===0}function ig(n){n.Q_=void 0}async function tE(n){n.q_.set("Online")}async function nE(n){n.N_.forEach((e,t)=>{nh(n,e)})}async function rE(n,e){ig(n),ih(n)?(n.q_.M_(e),rh(n)):n.q_.set("Unknown")}async function iE(n,e,t){if(n.q_.set("Online"),e instanceof wo&&e.state===2&&e.cause)try{await async function(i,s){let o=s.cause;for(let c of s.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.N_.delete(c),i.Q_.removeTarget(c))}(n,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qo(n,r)}else if(e instanceof dr?n.Q_.Ke(e):e instanceof vo?n.Q_.He(e):n.Q_.We(e),!t.isEqual(j.min()))try{let r=await tg(n.localStore);t.compareTo(r)>=0&&await function(s,o){let c=s.Q_.rt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){let f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{let f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(_e.EMPTY_BYTE_STRING,f.snapshotVersion)),rg(s,u);let m=new br(f.target,u,h,f.sequenceNumber);nh(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await qo(n,r)}}async function qo(n,e,t){if(!Xt(e))throw e;n.L_.add(1),await qi(n),n.q_.set("Offline"),t||(t=()=>tg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await aa(n)})}function sg(n,e){return e().catch(t=>qo(n,t,e))}async function ji(n){let e=G(n),t=Yt(e),r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;sE(e);)try{let i=await JI(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,oE(e,i)}catch(i){await qo(e,i)}og(e)&&ag(e)}function sE(n){return Mn(n)&&n.O_.length<10}function oE(n,e){n.O_.push(e);let t=Yt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function og(n){return Mn(n)&&!Yt(n).n_()&&n.O_.length>0}function ag(n){Yt(n).start()}async function aE(n){Yt(n).p_()}async function cE(n){let e=Yt(n);for(let t of n.O_)e.m_(t.mutations)}async function uE(n,e,t){let r=n.O_.shift(),i=Su.from(r,e,t);await sg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ji(n)}async function lE(n,e){e&&Yt(n).V_&&await async function(r,i){if(function(o){return RI(o)&&o!==P.ABORTED}(i.code)){let s=r.O_.shift();Yt(r).s_(),await sg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ji(r)}}(n,e),og(n)&&ag(n)}async function $p(n,e){let t=G(n);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");let r=Mn(t);t.L_.add(3),await qi(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await aa(t)}async function hE(n,e){let t=G(n);e?(t.L_.delete(2),await aa(t)):e||(t.L_.add(2),await qi(t),t.q_.set("Unknown"))}function kr(n){return n.K_||(n.K_=function(t,r,i){let s=G(t);return s.w_(),new gl(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:tE.bind(null,n),Ro:nE.bind(null,n),mo:rE.bind(null,n),d_:iE.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),ih(n)?rh(n):n.q_.set("Unknown")):(await n.K_.stop(),ig(n))})),n.K_}function Yt(n){return n.U_||(n.U_=function(t,r,i){let s=G(t);return s.w_(),new _l(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:aE.bind(null,n),mo:lE.bind(null,n),f_:cE.bind(null,n),g_:uE.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await ji(n)):(await n.U_.stop(),n.O_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}var Il=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ye,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let o=Date.now()+r,c=new n(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function sh(n,e){if(ke("AsyncQueue",`${e}: ${n}`),Xt(n))return new x(P.UNAVAILABLE,`${e}: ${n}`);throw n}var jo=class n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||V.comparator(t.key,r.key):(t,r)=>V.comparator(t.key,r.key),this.keyedMap=pi(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var zo=class{constructor(){this.W_=new ae(V.comparator)}track(e){let t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):L():this.W_=this.W_.insert(t,e)}G_(){let e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}},Sr=class n{constructor(e,t,r,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){let o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new n(e,t,jo.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var El=class{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}},Tl=class{constructor(){this.queries=Kp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){let i=G(t),s=i.queries;i.queries=Kp(),s.forEach((o,c)=>{for(let u of c.j_)u.onError(r)})})(this,new x(P.ABORTED,"Firestore shutting down"))}};function Kp(){return new ht(n=>Im(n),sa)}async function cg(n,e){let t=G(n),r=3,i=e.query,s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new El,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){let c=sh(o,`Initialization of query '${or(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&oh(t)}async function ug(n,e){let t=G(n),r=e.query,i=3,s=t.queries.get(r);if(s){let o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function dE(n,e){let t=G(n),r=!1;for(let i of e){let s=i.query,o=t.queries.get(s);if(o){for(let c of o.j_)c.X_(i)&&(r=!0);o.z_=i}}r&&oh(t)}function fE(n,e,t){let r=G(n),i=r.queries.get(e);if(i)for(let s of i.j_)s.onError(t);r.queries.delete(e)}function oh(n){n.Y_.forEach(e=>{e.next()})}var bl,Wp;(Wp=bl||(bl={})).ea="default",Wp.Cache="cache";var Go=class{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Sr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;let r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;let t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bl.Cache}};var $o=class{constructor(e){this.key=e}},Ko=class{constructor(e){this.key=e}},Al=class{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=Em(e),this.Ra=new jo(this.Aa)}get Va(){return this.Ta}ma(e,t){let r=t?t.fa:new zo,i=t?t.Ra:this.Ra,s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1,u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{let v=i.get(f),A=Bi(this.query,m)?m:null,C=!!v&&this.mutatedKeys.has(v.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations),D=!1;v&&A?v.data.isEqual(A.data)?C!==k&&(r.track({type:3,doc:A}),D=!0):this.ga(v,A)||(r.track({type:2,doc:A}),D=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(c=!0)):!v&&A?(r.track({type:0,doc:A}),D=!0):v&&!A&&(r.track({type:1,doc:v}),D=!0,(u||h)&&(c=!0)),D&&(A?(o=o.add(A),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;let o=e.fa.G_();o.sort((f,m)=>function(A,C){let k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return k(A)-k(C)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;let c=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Sr(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new zo,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];let e=this.da;this.da=W(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});let t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Ko(r))}),this.da.forEach(r=>{e.has(r)||t.push(new $o(r))}),t}ba(e){this.Ta=e.Ts,this.da=W();let t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Sr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}},Sl=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Rl=class{constructor(e){this.key=e,this.va=!1}},Pl=class{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ht(c=>Im(c),sa),this.Ma=new Map,this.xa=new Set,this.Oa=new ae(V.comparator),this.Na=new Map,this.La=new Ni,this.Ba={},this.ka=new Map,this.qa=Ar.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}};async function pE(n,e,t=!0){let r=mg(n),i,s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await lg(r,e,t,!0),i}async function mE(n,e){let t=mg(n);await lg(t,e,!0,!1)}async function lg(n,e,t,r){let i=await YI(n.localStore,Ge(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t),c;return r&&(c=await gE(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&ng(n.remoteStore,i),c}async function gE(n,e,t,r,i){n.Ka=(m,v,A)=>async function(k,D,B,q){let M=D.view.ma(B);M.ns&&(M=await Gp(k.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,M)));let K=q&&q.targetChanges.get(D.targetId),J=q&&q.targetMismatches.get(D.targetId)!=null,z=D.view.applyChanges(M,k.isPrimaryClient,K,J);return Qp(k,D.targetId,z.wa),z.snapshot}(n,m,v,A);let s=await Gp(n.localStore,e,!0),o=new Al(e,s.Ts),c=o.ma(s.documents),u=Di.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=o.applyChanges(c,n.isPrimaryClient,u);Qp(n,t,h.wa);let f=new Sl(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function _E(n,e,t){let r=G(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!sa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await dl(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&th(r.remoteStore,i.targetId),Cl(r,i.targetId)}).catch(Vn)):(Cl(r,i.targetId),await dl(r.localStore,i.targetId,!0))}async function yE(n,e){let t=G(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),th(t.remoteStore,r.targetId))}async function vE(n,e,t){let r=gg(n);try{let i=await function(o,c){let u=G(o),h=le.now(),f=c.reduce((A,C)=>A.add(C.key),W()),m,v;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=qe(),k=W();return u.cs.getEntries(A,f).next(D=>{C=D,C.forEach((B,q)=>{q.isValidDocument()||(k=k.add(B))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,C)).next(D=>{m=D;let B=[];for(let q of c){let M=SI(q,m.get(q.key).overlayedDocument);M!=null&&B.push(new Xe(q.key,M,pm(M.value.mapValue),Oe.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,B,c)}).next(D=>{v=D;let B=D.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(A,D.batchId,B)})}).then(()=>({batchId:v.batchId,changes:bm(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new ae($)),h=h.insert(c,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,t),await zi(r,i.changes),await ji(r.remoteStore)}catch(i){let s=sh(i,"Failed to persist write");t.reject(s)}}async function hg(n,e){let t=G(n);try{let r=await HI(t.localStore,e);e.targetChanges.forEach((i,s)=>{let o=t.Na.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?F(o.va):i.removedDocuments.size>0&&(F(o.va),o.va=!1))}),await zi(t,r,e)}catch(r){await Vn(r)}}function Hp(n,e,t){let r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Fa.forEach((s,o)=>{let c=o.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){let u=G(o);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(let v of m.j_)v.Z_(c)&&(h=!0)}),h&&oh(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wE(n,e,t){let r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Na.get(e),s=i&&i.key;if(s){let o=new ae(V.comparator);o=o.insert(s,Te.newNoDocument(s,j.min()));let c=W().add(s),u=new yo(j.min(),new Map,new ae($),o,c);await hg(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),ah(r)}else await dl(r.localStore,e,!1).then(()=>Cl(r,e,t)).catch(Vn)}async function IE(n,e){let t=G(n),r=e.batch.batchId;try{let i=await WI(t.localStore,e);fg(t,r,null),dg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await zi(t,i)}catch(i){await Vn(i)}}async function EE(n,e,t){let r=G(n);try{let i=await function(o,c){let u=G(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(F(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);fg(r,e,t),dg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await zi(r,i)}catch(i){await Vn(i)}}function dg(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function fg(n,e,t){let r=G(n),i=r.Ba[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Cl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||pg(n,r)})}function pg(n,e){n.xa.delete(e.path.canonicalString());let t=n.Oa.get(e);t!==null&&(th(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ah(n))}function Qp(n,e,t){for(let r of t)r instanceof $o?(n.La.addReference(r.key,e),TE(n,r)):r instanceof Ko?(N("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||pg(n,r.key)):L()}function TE(n,e){let t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(N("SyncEngine","New document in limbo: "+t),n.xa.add(r),ah(n))}function ah(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){let e=n.xa.values().next().value;n.xa.delete(e);let t=new V(Z.fromString(e)),r=n.qa.next();n.Na.set(r,new Rl(t)),n.Oa=n.Oa.insert(t,r),ng(n.remoteStore,new br(Ge(Ui(t.path)),r,"TargetPurposeLimboResolution",Me.oe))}}async function zi(n,e,t){let r=G(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{o.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){let m=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);let m=ul.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){let f=G(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>S.forEach(h,v=>S.forEach(v.$i,A=>f.persistence.referenceDelegate.addReference(m,v.targetId,A)).next(()=>S.forEach(v.Ui,A=>f.persistence.referenceDelegate.removeReference(m,v.targetId,A)))))}catch(m){if(!Xt(m))throw m;N("LocalStore","Failed to update sequence numbers: "+m)}for(let m of h){let v=m.targetId;if(!m.fromCache){let A=f.os.get(v),C=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(v,k)}}}(r.localStore,s))}async function bE(n,e){let t=G(n);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());let r=await eg(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(c=>{c.forEach(u=>{u.reject(new x(P.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zi(t,r.hs)}}function AE(n,e){let t=G(n),r=t.Na.get(e);if(r&&r.va)return W().add(r.key);{let i=W(),s=t.Ma.get(e);if(!s)return i;for(let o of s){let c=t.Fa.get(o);i=i.unionWith(c.view.Va)}return i}}function mg(n){let e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wE.bind(null,e),e.Ca.d_=dE.bind(null,e.eventManager),e.Ca.$a=fE.bind(null,e.eventManager),e}function gg(n){let e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EE.bind(null,e),e}var On=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Zm(this.persistence,new Vo,e.initialUser,this.serializer)}Ga(e){return new Oo(xo.Zr,this.serializer)}Wa(e){return new Mo}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};On.provider={build:()=>new On};var Dl=class extends On{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await gg(this.Ja.syncEngine),await ji(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Zm(this.persistence,new Vo,e.initialUser,this.serializer)}ja(e,t){let r=this.persistence.referenceDelegate.garbageCollector;return new Wu(r,e.asyncQueue,t)}Ha(e,t){let r=new cu(t,this.persistence);return new au(e.asyncQueue,r)}Ga(e){let t=KI(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new cl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,eE(),so(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Mo}};var Rr=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bE.bind(null,this.syncEngine),await hE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tl}()}createDatastore(e){let t=oa(e.databaseInfo.databaseId),r=function(s){return new ml(s)}(e.databaseInfo);return function(s,o,c,u){return new yl(s,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new wl(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Hp(this.syncEngine,t,0),function(){return Fo.D()?new Fo:new fl}())}createSyncEngine(e,t){return function(i,s,o,c,u,h,f){let m=new Pl(i,s,o,c,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=G(i);N("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await qi(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Rr.provider={build:()=>new Rr};var Wo=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ke("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var kl=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ee.UNAUTHENTICATED,this.clientId=oo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{N("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(N("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Ye;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=sh(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Qc(n,e){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Jp(n,e){n.asyncQueue.verifyOperationInProgress();let t=await SE(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>$p(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>$p(e.remoteStore,i)),n._onlineComponents=e}async function SE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qc(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;wi("Error using user provided cache. Falling back to memory cache: "+t),await Qc(n,new On)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Qc(n,new On);return n._offlineComponents}async function _g(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Jp(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Jp(n,new Rr))),n._onlineComponents}function RE(n){return _g(n).then(e=>e.syncEngine)}async function Nl(n){let e=await _g(n),t=e.eventManager;return t.onListen=pE.bind(null,e.syncEngine),t.onUnlisten=_E.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yE.bind(null,e.syncEngine),t}function PE(n,e,t={}){let r=new Ye;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,h){let f=new Wo({next:v=>{f.Za(),o.enqueueAndForget(()=>ug(s,m));let A=v.docs.has(c);!A&&v.fromCache?h.reject(new x(P.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&v.fromCache&&u&&u.source==="server"?h.reject(new x(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),m=new Go(Ui(c.path),f,{includeMetadataChanges:!0,_a:!0});return cg(s,m)}(await Nl(n),n.asyncQueue,e,t,r)),r.promise}function yg(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Yp=new Map;function ch(n,e,t){if(!t)throw new x(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function CE(n,e,t,r){if(e===!0&&r===!0)throw new x(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Xp(n){if(!V.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Zp(n){if(V.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ca(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":L()}function ut(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=ca(n);throw new x(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var Ho=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Pr=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ho({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ho(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xc;switch(r.type){case"firstParty":return new tu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Yp.get(t);r&&(N("ComponentProvider","Removing Datastore"),Yp.delete(t),r.terminate())}(this),Promise.resolve()}};var xn=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Le=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},zt=class n extends xn{constructor(e,t,r){super(e,t,Ui(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new V(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function vg(n,e,...t){if(n=se(n),ch("collection","path",e),n instanceof Pr){let r=Z.fromString(e,...t);return Zp(r),new zt(n,null,r)}{if(!(n instanceof Le||n instanceof zt))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(Z.fromString(e,...t));return Zp(r),new zt(n.firestore,null,r)}}function wg(n,e){if(n=ut(n,Pr),ch("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new xn(n,null,function(r){return new Wt(Z.emptyPath(),r)}(e))}function Zt(n,e,...t){if(n=se(n),arguments.length===1&&(e=oo.newId()),ch("doc","path",e),n instanceof Pr){let r=Z.fromString(e,...t);return Xp(r),new Le(n,null,new V(r))}{if(!(n instanceof Le||n instanceof zt))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(Z.fromString(e,...t));return Xp(r),new Le(n.firestore,n instanceof zt?n.converter:null,new V(r))}}var Qo=class{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Uo(this,"async_queue_retry"),this.Vu=()=>{let r=so();r&&N("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;let t=so();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;let t=so();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});let t=new Ye;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xt(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){let t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;let i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw ke("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);let i=Il.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&L()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(let t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){let t=this.Tu.indexOf(e);this.Tu.splice(t,1)}};function em(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var At=class extends Pr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Qo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Qo(e),this._firestoreClient=void 0,await e}}};function Ig(n,e,t){t||(t="(default)");let r=Jr(n,"firestore");if(r.isInitialized(t)){let i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Dt(s,e))return i;throw new x(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new x(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function ua(n){if(n._terminated)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||DE(n),n._firestoreClient}function DE(n){var e,t,r;let i=n._freezeSettings(),s=function(c,u,h,f){return new uu(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,yg(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new kl(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){let u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}var Oi=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(_e.fromBase64String(e))}catch(t){throw new x(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var Cr=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var xi=class{constructor(e){this._methodName=e}};var Vi=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}};var Li=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}};var kE=/^__.*__$/,Ol=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Xe(e,this.data,this.fieldMask,t,this.fieldTransforms):new Jt(e,this.data,t,this.fieldTransforms)}},Jo=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Xe(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function Eg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}var xl=class n{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Xo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Eg(this.Cu)&&kE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}},Vl=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oa(e)}Qu(e,t,r,i=!1){return new xl({Cu:e,methodName:t,qu:r,path:ge.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function uh(n){let e=n._freezeSettings(),t=oa(n._databaseId);return new Vl(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Tg(n,e,t,r,i,s={}){let o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);lh("Data must be an object, but it was:",o,r);let c=bg(r,o),u,h;if(s.merge)u=new Be(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){let f=[];for(let m of s.mergeFields){let v=Ll(e,m,t);if(!o.contains(v))throw new x(P.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Sg(f,v)||f.push(v)}u=new Be(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new Ol(new Ne(c),u,h)}var Yo=class n extends xi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function NE(n,e,t,r){let i=n.Qu(1,e,t);lh("Data must be an object, but it was:",i,r);let s=[],o=Ne.empty();Ln(r,(u,h)=>{let f=hh(e,u,t);h=se(h);let m=i.Nu(f);if(h instanceof Yo)s.push(f);else{let v=Gi(h,m);v!=null&&(s.push(f),o.set(f,v))}});let c=new Be(s);return new Jo(o,c,i.fieldTransforms)}function OE(n,e,t,r,i,s){let o=n.Qu(1,e,t),c=[Ll(e,r,t)],u=[i];if(s.length%2!=0)throw new x(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)c.push(Ll(e,s[v])),u.push(s[v+1]);let h=[],f=Ne.empty();for(let v=c.length-1;v>=0;--v)if(!Sg(h,c[v])){let A=c[v],C=u[v];C=se(C);let k=o.Nu(A);if(C instanceof Yo)h.push(A);else{let D=Gi(C,k);D!=null&&(h.push(A),f.set(A,D))}}let m=new Be(h);return new Jo(f,m,o.fieldTransforms)}function xE(n,e,t,r=!1){return Gi(t,n.Qu(r?4:3,e))}function Gi(n,e){if(Ag(n=se(n)))return lh("Unsupported field value:",e,n),bg(n,e);if(n instanceof xi)return function(r,i){if(!Eg(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){let s=[],o=0;for(let c of r){let u=Gi(c,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return II(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=le.fromDate(r);return{timestampValue:Tr(i.serializer,s)}}if(r instanceof le){let s=new le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tr(i.serializer,s)}}if(r instanceof Vi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Oi)return{bytesValue:xm(i.serializer,r._byteString)};if(r instanceof Le){let s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Li)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return Xl(c.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ca(r)}`)}(n,e)}function bg(n,e){let t={};return hm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ln(n,(r,i)=>{let s=Gi(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Ag(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof Vi||n instanceof Oi||n instanceof Le||n instanceof xi||n instanceof Li)}function lh(n,e,t){if(!Ag(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=ca(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Ll(n,e,t){if((e=se(e))instanceof Cr)return e._internalPath;if(typeof e=="string")return hh(n,e);throw Xo("Field path arguments must be of type string or ",n,!1,void 0,t)}var VE=new RegExp("[~\\*/\\[\\]]");function hh(n,e,t){if(e.search(VE)>=0)throw Xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Cr(...e.split("."))._internalPath}catch{throw Xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xo(n,e,t,r,i){let s=r&&!r.isEmpty(),o=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new x(P.INVALID_ARGUMENT,c+n+u)}function Sg(n,e){return n.some(t=>t.isEqual(e))}var Zo=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Ml(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(dh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Ml=class extends Zo{data(){return super.data()}};function dh(n,e){return typeof e=="string"?hh(n,e):e instanceof Cr?e._internalPath:e._delegate._internalPath}function LE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Mi=class{},Fl=class extends Mi{};function Rg(n,e,...t){let r=[];e instanceof Mi&&r.push(e),r=r.concat(t),function(s){let o=s.filter(u=>u instanceof Ul).length,c=s.filter(u=>u instanceof ea).length;if(o>1||o>0&&c>0)throw new x(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(let i of r)n=i._apply(n);return n}var ea=class n extends Fl{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new n(e,t,r)}_apply(e){let t=this._parse(e);return Cg(e._query,t),new xn(e.firestore,e.converter,Eu(e._query,t))}_parse(e){let t=uh(e.firestore);return function(s,o,c,u,h,f,m){let v;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){nm(m,f);let A=[];for(let C of m)A.push(tm(u,s,C));v={arrayValue:{values:A}}}else v=tm(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||nm(m,f),v=xE(c,o,m,f==="in"||f==="not-in");return Q.create(h,f,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}};function Pg(n,e,t){let r=e,i=dh("where",n);return ea._create(i,r,t)}var Ul=class n extends Mi{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new n(e,t)}_parse(e){let t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ee.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i,c=s.getFlattenedFilters();for(let u of c)Cg(o,u),o=Eu(o,u)}(e._query,t),new xn(e.firestore,e.converter,Eu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};function tm(n,e,t){if(typeof(t=se(t))=="string"){if(t==="")throw new x(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wm(e)&&t.indexOf("/")!==-1)throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);let r=e.path.child(Z.fromString(t));if(!V.isDocumentKey(r))throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Si(n,new V(r))}if(t instanceof Le)return Si(n,t._key);throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ca(t)}.`)}function nm(n,e){if(!Array.isArray(n)||n.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Cg(n,e){let t=function(i,s){for(let o of i)for(let c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}var Bl=class{convertValue(e,t="none"){switch(Sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Ln(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>oe(o.doubleValue));return new Li(s)}convertGeoPoint(e){return new Vi(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Jl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(bi(e));default:return null}}convertTimestamp(e){let t=bt(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=Z.fromString(e);F(Gm(r));let i=new _r(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(t)||ke(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function Dg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var En=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},ta=class extends Zo{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new fr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(dh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},fr=class extends ta{data(e={}){return super.data(e)}},ql=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new En(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new fr(this._firestore,this._userDataWriter,r.key,r,new En(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{let u=new fr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new En(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let u=new fr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new En(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:ME(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function ME(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}function fh(n){n=ut(n,Le);let e=ut(n.firestore,At);return PE(ua(e),n._key).then(t=>Og(e,n,t))}var na=class extends Bl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oi(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}};function la(n,e,t){n=ut(n,Le);let r=ut(n.firestore,At),i=Dg(n.converter,e,t);return ph(r,[Tg(uh(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Oe.none())])}function kg(n){return ph(ut(n.firestore,At),[new Dn(n._key,Oe.none())])}function Ng(n,...e){var t,r,i;n=se(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||em(e[o])||(s=e[o],o++);let c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(em(e[o])){let m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(n instanceof Le)h=ut(n.firestore,At),f=Ui(n._key.path),u={next:m=>{e[o]&&e[o](Og(h,n,m))},error:e[o+1],complete:e[o+2]};else{let m=ut(n,xn);h=ut(m.firestore,At),f=m._query;let v=new na(h);u={next:A=>{e[o]&&e[o](new ql(h,v,m,A))},error:e[o+1],complete:e[o+2]},LE(n._query)}return function(v,A,C,k){let D=new Wo(k),B=new Go(A,D,C);return v.asyncQueue.enqueueAndForget(async()=>cg(await Nl(v),B)),()=>{D.Za(),v.asyncQueue.enqueueAndForget(async()=>ug(await Nl(v),B))}}(ua(h),f,c,u)}function ph(n,e){return function(r,i){let s=new Ye;return r.asyncQueue.enqueueAndForget(async()=>vE(await RE(r),i,s)),s.promise}(ua(n),e)}function Og(n,e,t){let r=t.docs.get(e._key),i=new na(n);return new ta(n,i,e._key,r,new En(t.hasPendingWrites,t.fromCache),e.converter)}var jl=class{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=mh(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}};function xg(n){return new jl(n)}var zl=class{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Rr.provider,this._offlineComponentProvider={build:t=>new Dl(t,e?.cacheSizeBytes,this.forceOwnership)}}};function mh(n){return new zl(n?.forceOwnership)}var Gl=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=uh(e)}set(e,t,r){this._verifyNotCommitted();let i=Jc(e,this._firestore),s=Dg(i.converter,t,r),o=Tg(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Oe.none())),this}update(e,t,r,...i){this._verifyNotCommitted();let s=Jc(e,this._firestore),o;return o=typeof(t=se(t))=="string"||t instanceof Cr?OE(this._dataReader,"WriteBatch.update",s._key,t,r,i):NE(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Oe.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Jc(e,this._firestore);return this._mutations=this._mutations.concat(new Dn(t._key,Oe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Jc(n,e){if((n=se(n)).firestore!==e)throw new x(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Vg(n){return ua(n=ut(n,At)),new Gl(n,e=>ph(n,e))}(function(e,t=!0){(function(i){Dr=i})(xt),Ot(new je("firestore",(r,{instanceIdentifier:i,options:s})=>{let o=r.getProvider("app").getImmediate(),c=new At(new Zc(r.getProvider("auth-internal")),new ru(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new x(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _r(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),He(tp,"4.7.3",e),He(tp,"4.7.3","esm2017")})();tn();tn();var wh=en("App",{web:()=>Promise.resolve().then(()=>(Bg(),Ug)).then(n=>new n.AppWeb)});tn();Ih();var Gg=en("Filesystem",{web:()=>Promise.resolve().then(()=>(zg(),jg)).then(n=>new n.FilesystemWeb)});tn();var Wg=en("Share",{web:()=>Promise.resolve().then(()=>(Kg(),$g)).then(n=>new n.ShareWeb)});var Fn={apiKey:"AIzaSyCwR4Egx68H3EDcOuxi-CLDkGtLx2nOkfo",authDomain:"firuz-academy.firebaseapp.com",projectId:"firuz-academy",storageBucket:"firuz-academy.firebasestorage.app",messagingSenderId:"160620629580",appId:"1:160620629580:web:167c3ebf664a342d632ee9"},bA=Qn(Fn);var Hg=!String(Fn.apiKey||"").includes("PASTE")&&!!Fn.projectId&&!String(Fn.projectId).includes("PASTE"),pa=Or.isNativePlatform(),Th=null,Un=null,Ze=null;Hg&&(Th=Qn(Fn),Un=Hs(Th),Ze=Ig(Th,{ignoreUndefinedProperties:!0,localCache:xg({tabManager:mh()})}));function bh(n,e=1500){return n.catch(()=>{}),Promise.race([n,new Promise(t=>setTimeout(t,e))])}var WE={collection:(n,e)=>({onSnapshot:(t,r)=>{let i=n.startsWith("group:"),s=i?wg(Ze,n.slice(6)):vg(Ze,n),o=e?Rg(s,Pg(e[0],e[1],e[2])):s;return Ng(o,c=>t({docs:c.docs.map(u=>({id:i?u.ref.path:u.id,data:()=>u.data()}))}),c=>{r&&r(c)})},doc:t=>({set:r=>bh(la(Zt(Ze,n,t),r)),setWait:r=>la(Zt(Ze,n,t),r),update:r=>bh(la(Zt(Ze,n,t),r,{merge:!0})),delete:()=>bh(kg(Zt(Ze,n,t)))})})};async function HE(n,e,t){if(!navigator.onLine)throw{code:"network"};let r=Zt(Ze,"codes",n),i;try{i=await fh(r)}catch(h){throw{code:h&&h.code==="unavailable"?"network":"bad"}}if(!i.exists())throw{code:"bad"};let s=i.data();if(s.used)throw{code:"used"};let o=Date.now(),c=o+(+s.days||365)*864e5,u=Vg(Ze);u.update(r,{used:!0,usedBy:e,usedTs:o,usedName:String(t||"")}),(s.courseIds||[]).forEach(h=>u.set(Zt(Ze,"students",e,"access",h),{sid:e,courseId:h,active:!0,ts:o,by:"code",code:n,expires:c}));try{await u.commit()}catch(h){throw{code:h&&h.code==="unavailable"?"network":"bad"}}return s.courseIds||[]}async function Qg(n,e){let t=await fh(Zt(Ze,n,e));return t.exists()?t.data():null}async function QE(n,e){let t;try{t=await Qg("logins",n)}catch{throw{code:"network"}}if(!t)throw{code:"bad"};try{await $s(Un,t.email,e)}catch(r){throw{code:r&&r.code==="auth/network-request-failed"?"network":"bad"}}}async function JE(n,e){return(await $s(Un,n,e)).user}async function YE(n,e){return(await Gs(Un,n,e)).user}async function XE(n,e){let t=Qn(Fn,"sec"+Date.now());try{let r=Hs(t),s=(await Gs(r,n,e)).user.uid;return await Ks(r),s}finally{try{await Qd(t)}catch{}}}async function ZE(n,e){let t=Un.currentUser;await Vc(t,It.credential(t.email,n)),await Lc(t,e)}function eT(n){let e="";for(let r=0;r<n.length;r+=32768)e+=String.fromCharCode.apply(null,n.subarray(r,r+32768));return btoa(e)}async function tT(n,e){let t;if(typeof e=="string"?t=new TextEncoder().encode(e):e instanceof Blob?t=new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?t=e:t=new Uint8Array(e),!pa){let i=URL.createObjectURL(new Blob([t])),s=document.createElement("a");return s.href=i,s.download=n,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(i),4e3),!0}let r=await Gg.writeFile({path:n,data:eT(t),directory:ha.Cache});try{await Wg.share({title:n,dialogTitle:n,url:r.uri})}catch{return!1}return!0}window.FSX={configured:Hg,native:pa,db:WE,getDoc:Qg,redeem:HE,signIn:QE,signInEmail:JE,signUp:YE,createAccount:XE,changePassword:ZE,signOut:()=>Ks(Un),onAuth:n=>Mc(Un,n),saveFile:tT,onBack:n=>{pa&&wh.addListener("backButton",n)},exitApp:()=>{pa&&wh.exitApp()}};})();
/*! Bundled license information:

@capacitor/core/dist/index.js:
  (*! Capacitor: https://capacitorjs.com/ - MIT License *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
