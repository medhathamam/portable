// Portable-V2 - ملف JavaScript الرئيسي

// متغيرات الفلترة الحالية
let currentCategory = 'all';
let currentStatus = 'all';

// وظيفة البحث في المشاريع
function searchProjects(query) {
    const cards = document.querySelectorAll('.project-card');
    const searchTerm = query.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('.project-title').textContent.toLowerCase();
        const description = card.querySelector('.project-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// وظيفة الفلترة حسب التصنيف
function filterByCategory(category) {
    currentCategory = category;
    const cards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // تحديث حالة الأزرار
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    applyFilters(cards);
}

// وظيفة الفلترة حسب الحالة
function filterByStatus(status) {
    currentStatus = status;
    const cards = document.querySelectorAll('.project-card');
    const statusButtons = document.querySelectorAll('.status-btn');
    
    // تحديث حالة الأزرار
    statusButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    applyFilters(cards);
}

// تطبيق الفلترة المشتركة
function applyFilters(cards) {
    cards.forEach(card => {
        const cardCategory = card.querySelector('.project-category').textContent.toLowerCase();
        const statusElement = card.querySelector('.project-status');
        
        let cardStatus = 'soon';
        if (statusElement.classList.contains('status-ready')) {
            cardStatus = 'ready';
        } else if (statusElement.classList.contains('status-soon')) {
            cardStatus = 'soon';
        } else if (statusElement.classList.contains('status-experimental')) {
            cardStatus = 'experimental';
        }
        
        const categoryMatch = currentCategory === 'all' || cardCategory === currentCategory;
        const statusMatch = currentStatus === 'all' || cardStatus === currentStatus;
        
        if (categoryMatch && statusMatch) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// إعادة تعيين الفلترة
function resetFilters() {
    currentCategory = 'all';
    currentStatus = 'all';
    
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => card.style.display = 'flex');
    
    // إعادة تعيين الأزرار
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.status-btn').forEach(btn => btn.classList.remove('active'));
    
    // تفعيل زر "الكل"
    document.querySelector('.filter-btn').classList.add('active');
}

// تحميل المشاريع المشابهة
async function loadSimilarProjects(currentProjectId, currentSubcategory, currentCategory) {
    try {
        const response = await fetch('../assets/js/projects.json');
        const data = await response.json();
        
        // البحث عن مشاريع بنفس subcategory
        let similar = data.projects.filter(p => 
            p.id !== currentProjectId && 
            p.subcategory === currentSubcategory
        );
        
        // إذا لم توجد نتائج كافية، استخدم category كبديل
        if (similar.length < 3) {
            similar = data.projects.filter(p => 
                p.id !== currentProjectId && 
                p.category === currentCategory
            );
        }
        
        // ترتيب: featured أولاً ثم updated
        similar.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return new Date(b.updated) - new Date(a.updated);
        });
        
        // عرض 4 مشاريع كحد أقصى
        similar = similar.slice(0, 4);
        
        const container = document.getElementById('similarProjects');
        if (container && similar.length > 0) {
            container.innerHTML = similar.map(project => `
                <div class="card project-card similar-card">
                    <div class="project-card-header">
                        <div class="project-icon">${project.icon}</div>
                        <div>
                            <div class="project-title">${project.name}</div>
                            <span class="project-category">${project.category === 'audio' ? 'الصوت' : 'الذكاء الاصطناعي'}</span>
                        </div>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <span class="project-status status-${project.status}">
                        ${project.status === 'ready' ? 'جاهز للتحميل' : project.status === 'experimental' ? 'تجريبي' : 'قريبًا'}
                    </span>
                    <div class="project-actions">
                        <a href="../${project.slug}/index.html" class="btn btn-primary">التفاصيل</a>
                    </div>
                </div>
            `).join('');
        } else if (container) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">لا توجد مشاريع مشابهة حاليًا</p>';
        }
    } catch (error) {
        console.error('خطأ في تحميل المشاريع المشابهة:', error);
    }
}

// تحميل التنقل السابق/التالي
async function loadNavigation(currentProjectId) {
    try {
        const response = await fetch('../assets/js/projects.json');
        const data = await response.json();
        
        // ترتيب المشاريع حسب order
        const sortedProjects = data.projects.sort((a, b) => a.order - b.order);
        
        // البحث عن المشروع الحالي
        const currentIndex = sortedProjects.findIndex(p => p.id === currentProjectId);
        
        const container = document.getElementById('projectNavigation');
        if (container) {
            let html = '<div class="project-navigation">';
            
            // السابق
            if (currentIndex > 0) {
                const prevProject = sortedProjects[currentIndex - 1];
                html += `
                    <a href="../${prevProject.slug}/index.html" class="nav-link nav-prev">
                        <span class="nav-icon">→</span>
                        <div class="nav-content">
                            <span class="nav-label">السابق</span>
                            <span class="nav-title">${prevProject.name}</span>
                        </div>
                    </a>
                `;
            }
            
            // التالي
            if (currentIndex < sortedProjects.length - 1) {
                const nextProject = sortedProjects[currentIndex + 1];
                html += `
                    <a href="../${nextProject.slug}/index.html" class="nav-link nav-next">
                        <div class="nav-content">
                            <span class="nav-label">التالي</span>
                            <span class="nav-title">${nextProject.name}</span>
                        </div>
                        <span class="nav-icon">←</span>
                    </a>
                `;
            }
            
            html += '</div>';
            container.innerHTML = html;
        }
    } catch (error) {
        console.error('خطأ في تحميل التنقل:', error);
    }
}
