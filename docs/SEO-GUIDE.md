# دليل SEO و Google Search Console

هذا الدليل يشرح كيفية إعداد الموقع للفهرسة في محركات البحث.

## الملفات المطلوبة

### 1. sitemap.xml

تم توليده تلقائيًا من `projects.json` باستخدام:

```bash
node assets/js/generate-sitemap.js
```

يحتوي على:
- الصفحات الثابتة (الرئيسية، المشاريع، الإصدارات، التصنيفات)
- صفحات جميع المشاريع
- تاريخ آخر تحديث لكل صفحة
- أولوية وتكرار التحديث

### 2. robots.txt

يسمح لمحركات البحث بالزحف للموقع:

```
User-agent: *
Allow: /

Sitemap: https://medhathamam.github.io/portable/sitemap.xml
```

### 3. JSON-LD Structured Data

كل صفحة مشروع تحتوي على:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Project Name",
  "description": "...",
  "applicationCategory": "AudioApplication",
  "operatingSystem": "Windows",
  "version": "v1.0.0",
  "author": {...},
  "license": "..."
}
```

### 4. Open Graph Meta Tags

كل صفحة مشروع تحتوي على:

```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:type" content="website">
<meta property="og:url" content="...">
<meta property="og:locale" content="ar_AR">
```

## إعداد Google Search Console

### الخطوة 1: إضافة الموقع

1. اذهب إلى [Google Search Console](https://search.google.com/search-console)
2. انقر على "Add a property"
3. اختر "URL prefix"
4. أدخل: `https://medhathamam.github.io/portable`
5. انقر "Continue"

### الخطوة 2: التحقق من الملكية

#### الخيار A: HTML tag

1. انسخ meta tag المقدم
2. أضفه إلى `<head>` في `index.html`
3. ارفع التغييرات
4. انقر "Verify"

#### الخيار B: HTML file

1. حمّل ملف التحقق المقدم
2. ارفعه إلى الجذر في GitHub
3. انقر "Verify"

#### الخيار C: Google Analytics

إذا كان الموقع يستخدم Google Analytics، استخدمه للتحقق.

### الخطوة 3: إضافة Sitemap

1. بعد التحقق، اذهب إلى "Sitemaps" في القائمة الجانبية
2. في حقل "Add a new sitemap"، أدخل: `sitemap.xml`
3. انقر "Submit"
4. انتظر المعالجة (قد يستغرق بضع دقائق)

### الخطوة 4: مراقبة الفهرسة

اذهب إلى:
- **Coverage**: لرؤية الصفحات المفهرسة والأخطاء
- **Sitemaps**: لرؤية حالة sitemap.xml
- **URL Inspection**: لفحص صفحة معينة

## تحسينات SEO الإضافية

### 1. الصور

- استخدم أبعاد 1200×630 لـ Open Graph
- استخدم تنسيق WebP أو PNG
- ضغط الصور لتقليل الحجم
- أضف alt text لجميع الصور

### 2. العناوين

- استخدم عناوين واضحة ومحددة
- كل صفحة لها عنوان فريد
- استخدم الكلمات المفتاحية بشكل طبيعي

### 3. الوصف

- وصف meta tag فريد لكل صفحة
- طول مناسب (150-160 حرف)
- يصف المحتوى بدقة

### 4. الروابط

- هيكل روابط واضح
- استخدام breadcrumb navigation
- روابط داخلية بين الصفحات

## التحقق من SEO

استخدم هذه الأدوات:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)

## الصيانة المستمرة

### عند إضافة مشروع جديد

1. أضف المشروع إلى `projects.json`
2. شغّل `node assets/js/generate-sitemap.js`
3. أرفع التغييرات
4. راقب Coverage في Search Console

### عند تحديث مشروع

1. حدّث `updated` في `projects.json`
2. شغّل `node assets/js/generate-sitemap.js`
3. أرفع التغييرات
4. استخدم URL Inspection لطلب إعادة الفهرسة

## ملاحظات هامة

- الفهرسة قد تستغرق من أيام إلى أسابيع
- استمر في إضافة محتوى عالي الجودة
- راقب الأداء والتحسينات المقترحة
- استجيب لأي أخطاء أو تحذيرات
