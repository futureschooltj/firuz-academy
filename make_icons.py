# Нишонаи Firuz-Academy (атом). Истифода: python3 make_icons.py [android_res_dir] [web_dir]
import os, sys, math
from PIL import Image, ImageDraw
res = sys.argv[1] if len(sys.argv) > 1 and sys.argv[1] else None
web = sys.argv[2] if len(sys.argv) > 2 else '.'
BLUE = (21, 70, 201, 255); WHITE = (255, 255, 255, 255); ORG = (255, 138, 31, 255)

def logo(size, bg, scale=1.0, circle=False):
    S = 1024
    im = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    if bg: d.rectangle([0, 0, S, S], fill=BLUE)
    c = S / 2
    for ang in (0, 60, 120):
        pts = []
        for k in range(0, 361, 3):
            t = math.radians(k); a = math.radians(ang)
            x = S * 0.34 * scale * math.cos(t); y = S * 0.13 * scale * math.sin(t)
            pts.append((c + x * math.cos(a) - y * math.sin(a), c + x * math.sin(a) + y * math.cos(a)))
        d.line(pts + [pts[0]], fill=WHITE, width=int(S * 0.028))
    r = S * 0.07 * scale
    d.ellipse([c - r, c - r, c + r, c + r], fill=ORG)
    if circle:
        m = Image.new('L', (S, S), 0); ImageDraw.Draw(m).ellipse([0, 0, S, S], fill=255); im.putalpha(m)
    return im.resize((size, size), Image.LANCZOS)

os.makedirs(web, exist_ok=True)
for n in (192, 512): logo(n, True).save(os.path.join(web, f'icon-{n}.png'))
if res:
    for name, px in {'mdpi': 48, 'hdpi': 72, 'xhdpi': 96, 'xxhdpi': 144, 'xxxhdpi': 192}.items():
        d = os.path.join(res, 'mipmap-' + name); os.makedirs(d, exist_ok=True)
        logo(px, True).save(os.path.join(d, 'ic_launcher.png'))
        logo(px, True, circle=True).save(os.path.join(d, 'ic_launcher_round.png'))
        logo(int(px * 108 / 48), False, 0.6).save(os.path.join(d, 'ic_launcher_foreground.png'))
    v = os.path.join(res, 'values'); os.makedirs(v, exist_ok=True)
    open(os.path.join(v, 'ic_launcher_background.xml'), 'w').write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#1546C9</color>\n</resources>\n')
print('icons ok')
