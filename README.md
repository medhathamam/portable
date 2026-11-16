# Portable Projects Library

مكتبة البرامج المحمولة - مجموعة من أفضل البرامج المجانية ومفتوحة المصدر في نسخ محمولة جاهزة للاستخدام.

## 🌐 الموقع

[https://medhathamam.github.io/portable](https://medhathamam.github.io/portable)

## 📚 المشاريع المتاحة

### الصوت (Audio)

| المشروع | الحالة | الإصدار | التفاصيل |
|---------|--------|---------|----------|
| **Spleeter Portable** | ✅ جاهز | v1.0.0 | [التفاصيل](https://medhathamam.github.io/portable/projects/spleeter/) |
| **Demucs Portable** | ✅ جاهز | v4.0 | [التفاصيل](https://medhathamam.github.io/portable/projects/demucs/) |
| **Open-Unmix Portable** | 🚧 قريبًا | v1.0 | [التفاصيل](https://medhathamam.github.io/portable/projects/open-unmix/) |
| **Audio Separator Portable** | 🚧 قريبًا | v1.0 | [التفاصيل](https://medhathamam.github.io/portable/projects/audio-separator/) |

### الذكاء الاصطناعي (AI)

| المشروع | الحالة | الإصدار | التفاصيل |
|---------|--------|---------|----------|
| **Silero VAD Portable** | 🚧 قريبًا | v1.0 | [التفاصيل](https://medhathamam.github.io/portable/projects/silero-vad/) |
| **SpeechBrain VAD Portable** | 🚧 قريبًا | v1.0 | [التفاصيل](https://medhathamam.github.io/portable/projects/speechbrain-vad/) |
| **XTTS-v2 Portable** | 🚧 قريبًا | v2.0 | [التفاصيل](https://medhathamam.github.io/portable/projects/xtts-v2/) |
| **DeOldify Portable** | 🧪 تجريبي | v1.0 | [التفاصيل](https://medhathamam.github.io/portable/projects/deoldify/) |

## 📥 كيفية التنزيل والتشغيل

### المتطلبات المشتركة
- **نظام التشغيل**: Windows 10 أو أحدث
- **المساحة**: تختلف حسب المشروع (من 500MB إلى 5GB)
- **الذاكرة**: 4GB RAM كحد أدنى (8GB موصى بها للمشاريع الثقيلة)

### خطوات التنزيل

1. اذهب إلى [صفحة الإصدارات](https://medhathamam.github.io/portable/releases/)
2. اختر المشروع المطلوب
3. انقر على زر "تحميل"
4. فك ضغط الملف المُنزّل
5. شغّل الملف التنفيذي

### ملاحظات هامة

- ⚠️ بعض المشاريع تتطلب نماذج AI كبيرة (حتى 2GB) يتم تنزيلها عند أول تشغيل
- ⚠️ تأكد من توفر مساحة كافية على القرص الصلب
- ⚠️ المشاريع التجريبية قد تحتوي على أخطاء أو عدم استقرار
- ✅ جميع المشاريع مجانية ومفتوحة المصدر
- ✅ لا تحتاج إلى تثبيت (Portable)

## 📁 بنية المشروع

```
Portable-V2/
│
├── index.html              # الصفحة الرئيسية
├── projects/
│   ├── index.html          # مكتبة جميع المشاريع
│   ├── demucs/
│   │   └── index.html      # صفحة تفاصيل Demucs
│   └── xtts-v2/
│       └── index.html      # صفحة تفاصيل XTTS-v2
│
├── categories/
│   ├── audio.html          # تصنيف الصوت
│   ├── ai.html             # تصنيف الذكاء الاصطناعي
│   └── media.html          # تصنيف الصور والفيديو
│
├── assets/
│   ├── css/
│   │   └── style.css       # ملف التصميم الرئيسي
│   ├── js/
│   │   └── main.js         # ملف JavaScript للوظائف المشتركة
│   └── images/             # الصور والأيقونات
│
└── README.md               # هذا الملف
```

## 🚀 كيفية التشغيل محليًا

1. افتح المجلد `Portable-V2` في متصفح (Edge أو Chrome)
2. انقر نقرًا مزدوجًا على `index.html`
3. استكشف الموقع وتجربة جميع الصفحات

أو استخدم خادم محلي:
```bash
# باستخدام Python
python -m http.server 8000

# باستخدام Node.js
npx serve
```

## 🎨 المميزات

- **تصميم عصري**: واجهة مستخدم نظيفة وسهلة الاستخدام
- **دعم RTL**: تصميم متكامل للغة العربية
- **تجاوب كامل**: يعمل على جميع الأجهزة (هاتف، تابلت، سطح مكتب)
- **بحث وفلترة**: إمكانية البحث والفلترة في المشاريع
- **صفحات تفصيلية**: لكل مشروع صفحة مستقلة بالمميزات والتنزيل
- **تصنيفات**: تقسيم المشاريع حسب النوع (صوت، ذكاء اصطناعي، صور وفيديو)

## 📝 التعديل على الموقع

### إضافة مشروع جديد

1. أنشئ مجلد جديد في `projects/`
2. انسخ `projects/demucs/index.html` كنموذج
3. عدل المحتوى حسب المشروع الجديد
4. أضف البطاقة في `projects/index.html`
5. أضف المشروع في صفحة التصنيف المناسبة

### تعديل التصميم

- جميع الأنماط في `assets/css/style.css`
- المتغيرات في `:root` لتسهيل تغيير الألوان

### تعديل الوظائف

- الوظائف المشتركة في `assets/js/main.js`
- البحث والفلترة مدمجة في الملف

## 🌐 النشر على GitHub Pages

1. ارفع المشروع إلى مستودع GitHub
2. اذهب إلى Settings > Pages
3. اختر الفرع (عادة `main` أو `gh-pages`)
4. المجلد: `/` (الجذر)
5. احفظ وانتظر النشر

## 🔍 Google Search Console

بعد النشر، اتبع هذه الخطوات لفهرسة الموقع:

1. اذهب إلى [Google Search Console](https://search.google.com/search-console)
2. أضف الموقع: `https://medhathamam.github.io/portable`
3. تحقق من الملكية (اختر طريقة HTML tag أو DNS)
4. أضف sitemap.xml:
   - اذهب إلى Sitemaps
   - أضف: `sitemap.xml`
   - انقر Submit
5. راقب حالة الفهرسة في قسم Coverage

## 🔗 توحيد GitHub Releases

لضمان اتساق البيانات، يجب أن تتطابق العناصر التالية:

```
projects.json ← صفحة المشروع ← GitHub Release
```

### القواعد

1. **رقم الإصدار**: يجب أن يكون متطابقًا في الأماكن الثلاثة
2. **تاريخ النشر**: `releaseDate` في projects.json = تاريخ GitHub Release
3. **رابط التنزيل**: `downloadUrl` في projects.json = رابط GitHub Release Asset
4. **الحالة**: `released: true` فقط إذا كان هناك GitHub Release فعلي

### مثال

```json
// projects.json
{
  "version": "v1.0.0",
  "releaseDate": "2026-11-16",
  "released": true,
  "downloadUrl": "https://github.com/medhathamam/portable/releases/download/Project-v1.0.0/project.zip"
}
```

GitHub Release:
- Tag: `v1.0.0`
- Title: `Project Portable v1.0.0`
- Asset: `project.zip`

## 📦 التصنيفات

- **الصوت**: برامج تحرير ومعالجة الصوت (Spleeter, Demucs, Audacity)
- **الذكاء الاصطناعي**: أدوات AI (XTTS-v2, RVC, Stable Diffusion, Whisper)
- **الصور والفيديو**: برامج الوسائط (FFmpeg, GIMP, Krita)

## 🔧 التقنيات المستخدمة

- HTML5
- CSS3 (مع متغيرات CSS)
- JavaScript (Vanilla)
- تصميم متجاوب (Responsive Design)
- دعم RTL للعربية

## 📄 الترخيص

هذا المشروع مفتوح المصدر ومتاح للاستخدام الحر.

## 🤝 المساهمة

المساهمات مرحب بها! يمكنك:
- إضافة مشاريع جديدة
- تحسين التصميم
- إصلاح الأخطاء
- تحسين التوثيق

---

**ملاحظة**: هذا المشروع لا يزال قيد التطوير. بعض المشاريع قد تكون في حالة "قريبًا" حتى إعداد النسخ المحمولة.
