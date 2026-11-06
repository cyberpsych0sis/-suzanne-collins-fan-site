import pathlib, shutil
src = pathlib.Path('src')
pages = src / 'pages'
pages.mkdir(exist_ok=True)
for p in src.glob('*.html'):
    shutil.copy2(p, pages / p.name)
    print('copied', p.name)
pub = pathlib.Path('public/assets')
if pub.exists():
    shutil.rmtree(pub)
shutil.copytree(src / 'assets', pub)
print('assets copied to public/assets')
