# موقع يوسف محمود الشخصي

موقع ثابت (HTML / CSS / JS) بدون أي أدوات بناء.

## الهيكل
```
index.html        الصفحة الرئيسية (المحتوى)
css/style.css     التصميم
js/main.js        الأنيميشن والتفاعل
images/           الصور (hero.jpg, robe.jpg)
favicon.svg       أيقونة الموقع
.nojekyll         لمنع معالجة Jekyll على GitHub Pages
```

## النشر على GitHub Pages
1. أنشئ مستودعًا جديدًا (Public) باسم `yousef-site` أو `USERNAME.github.io`.
2. ارفع كل محتويات هذا المجلد (وليس المجلد نفسه) إلى الفرع `main`.
3. من Settings ثم Pages: اختر Deploy from a branch، ثم `main` و `/ (root)` ثم Save.
4. بعد دقيقة يعمل الموقع على `https://USERNAME.github.io/yousef-site/`.

## التعديل
- النصوص والأقسام: `index.html`
- الألوان: المتغيرات في أول `css/style.css` (`--gold` و `--bg` ...)
- الأرقام (المتابعين وغيرها): الخاصية `data-c` في `index.html`
- الصور: استبدل الملفات في `images/` بنفس الأسماء
