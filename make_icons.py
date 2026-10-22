# Нишонаи Firuz-Academy аз logo-mark.png. Истифода: python3 make_icons.py [android_res_dir] [web_dir]
import os, sys
from PIL import Image, ImageDraw, ImageChops
here = os.path.dirname(os.path.abspath(__file__))
res = sys.argv[1] if len(sys.argv) > 1 and sys.argv[1] else None
web = sys.argv[2] if len(sys.argv) > 2 else '.'
MARK = Image.open(os.path.join(here, 'logo-mark.png')).convert('RGB')   # логотип дар заминаи сафед
WHITE = (255, 255, 255)

def on_white(size, scale=1.0, circle=False):
    S = 1024
    im = Image.new('RGB', (S, S), WHITE)
    m = MARK.resize((int(S * scale), int(S * scale)), Image.LANCZOS)
    im.paste(m, ((S - m.size[0]) // 2, (S - m.size[1]) // 2))
    im = im.convert('RGBA')
    if circle:
        mask = Image.new('L', (S, S), 0); ImageDraw.Draw(mask).ellipse([0, 0, S, S], fill=255); im.putalpha(mask)
    return im.resize((size, size), Image.LANCZOS)

def foreground(size, scale=0.64):
    S = 1024
    inner = MARK.resize((int(S * scale), int(S * scale)), Image.LANCZOS)
    mn = ImageChops.darker(ImageChops.darker(inner.getchannel('R'), inner.getchannel('G')), inner.getchannel('B'))
    alpha = mn.point(lambda v: max(0, min(255, int((255 - v) * 1.25))))
    fg = inner.convert('RGBA'); fg.putalpha(alpha)
    im = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    im.paste(fg, ((S - fg.size[0]) // 2, (S - fg.size[1]) // 2), fg)
    return im.resize((size, size), Image.LANCZOS)

os.makedirs(web, exist_ok=True)
for n in (192, 512): on_white(n, 0.94).save(os.path.join(web, f'icon-{n}.png'))
if res:
    for name, px in {'mdpi': 48, 'hdpi': 72, 'xhdpi': 96, 'xxhdpi': 144, 'xxxhdpi': 192}.items():
        d = os.path.join(res, 'mipmap-' + name); os.makedirs(d, exist_ok=True)
        on_white(px, 0.92).save(os.path.join(d, 'ic_launcher.png'))
        on_white(px, 0.78, circle=True).save(os.path.join(d, 'ic_launcher_round.png'))
        foreground(int(px * 108 / 48)).save(os.path.join(d, 'ic_launcher_foreground.png'))
    v = os.path.join(res, 'values'); os.makedirs(v, exist_ok=True)
    open(os.path.join(v, 'ic_launcher_background.xml'), 'w').write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#FFFFFF</color>\n</resources>\n')
print('icons ok')
