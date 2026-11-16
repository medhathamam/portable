// سكربت لتوليد sitemap.xml من projects.json
// تشغيل: node assets/js/generate-sitemap.js

const fs = require('fs');
const path = require('path');

// قراءة projects.json
const projectsPath = path.join(__dirname, 'projects.json');
const projectsData = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));

// إعدادات الموقع
const baseUrl = 'https://medhathamam.github.io/portable';

// الصفحات الثابتة
const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: 'projects/', priority: '0.9', changefreq: 'weekly' },
    { url: 'releases/', priority: '0.8', changefreq: 'weekly' },
    { url: 'categories/audio.html', priority: '0.7', changefreq: 'weekly' },
    { url: 'categories/ai.html', priority: '0.7', changefreq: 'weekly' }
];

// توليد XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// إضافة الصفحات الثابتة
staticPages.forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/${page.url}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
});

// إضافة صفحات المشاريع
projectsData.projects.forEach(project => {
    if (project.page) {
        xml += `  <url>\n`;
        xml += `    <loc>${baseUrl}${project.page}</loc>\n`;
        xml += `    <lastmod>${project.updated || new Date().toISOString().split('T')[0]}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>0.8</priority>\n`;
        xml += `  </url>\n`;
    }
});

xml += `</urlset>`;

// حفظ sitemap.xml
const outputPath = path.join(__dirname, '../../sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

console.log('تم توليد sitemap.xml بنجاح!');
console.log(`المسار: ${outputPath}`);
