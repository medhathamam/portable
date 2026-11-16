# دليل توحيد GitHub Releases

هذا الدليل يشرح كيفية توحيد الإصدارات بين `projects.json` و GitHub Releases.

## المبدأ الأساسي

يجب أن تتطابق ثلاثة مصادر للمعلومات:

```
projects.json ← صفحة المشروع ← GitHub Release
```

## القواعد

### 1. رقم الإصدار

يجب أن يكون متطابقًا في الأماكن الثلاثة:

- `projects.json`: `"version": "v1.0.0"`
- صفحة المشروع: عرض الإصدار في HTML
- GitHub Release: Tag و Title

### 2. تاريخ النشر

- `projects.json`: `"releaseDate": "2026-11-16"`
- GitHub Release: تاريخ إنشاء Release

### 3. رابط التنزيل

- `projects.json`: `"downloadUrl": "https://github.com/.../releases/download/..."`
- GitHub Release: رابط Asset المرفق

### 4. حالة الإصدار

- `projects.json`: `"released": true` فقط إذا كان هناك GitHub Release فعلي
- صفحة الإصدارات: تعرض المشاريع التي تحقق `released === true`

## سير العمل الموصى به

### عند إصدار مشروع جديد

1. **جهز الملفات**
   - أنشئ ملف ZIP للمشروع المحمول
   - تأكد من عمله بشكل صحيح

2. **أنشئ GitHub Release**
   - اذهب إلى Releases > Create new release
   - Tag: `v1.0.0` (مثال)
   - Title: `Project Portable v1.0.0`
   - ارفع ملف ZIP كـ Asset
   - انشر

3. **حدّث projects.json**
   ```json
   {
     "version": "v1.0.0",
     "releaseDate": "2026-11-16",
     "released": true,
     "downloadUrl": "https://github.com/medhathamam/portable/releases/download/Project-v1.0.0/project.zip"
   }
   ```

4. **حدّث صفحة المشروع**
   - تأكد من عرض الإصدار الصحيح
   - تأكد من رابط التنزيل الصحيح

5. **حدّث sitemap.xml**
   ```bash
   node assets/js/generate-sitemap.js
   ```

6. **ارفع التغييرات**
   ```bash
   git add .
   git commit -m "Release Project v1.0.0"
   git push
   ```

## التحقق من الاتساق

بعد كل إصدار، تأكد من:

- [ ] رقم الإصدار متطابق في projects.json و GitHub Release
- [ ] تاريخ النشر متطابق
- [ ] رابط التنزيل يعمل
- [ ] `released: true` فقط إذا كان هناك Release فعلي
- [ ] صفحة الإصدارات تعرض المشروع بشكل صحيح

## مثال كامل

### projects.json

```json
{
  "id": "spleeter",
  "name": "Spleeter Portable",
  "version": "v1.0.0",
  "releaseDate": "2026-11-16",
  "released": true,
  "downloadUrl": "https://github.com/medhathamam/portable/releases/download/SpleeterPortable-v1.0.0/SpleeterPortable.zip"
}
```

### GitHub Release

- **Tag**: `SpleeterPortable-v1.0.0`
- **Title**: `Spleeter Portable v1.0.0`
- **Description**: أول إصدار من Spleeter Portable
- **Asset**: `SpleeterPortable.zip`

### صفحة المشروع

- عرض: `v1.0.0`
- رابط: نفس `downloadUrl` في projects.json

## ملاحظات هامة

- لا تعرض مشروعًا في صفحة الإصدارات إذا لم يكن له GitHub Release
- استخدم تنسيق متسق لأرقام الإصدارات (مثال: `v1.0.0`, `v1.1.0`, `v2.0.0`)
- احتفظ بسجل للإصدارات السابقة في GitHub Releases
- عند تحديث مشروع، أنشئ Release جديد ولا تعدل القديم
