// 네비게이션 드롭다운 메뉴 자바스크립트
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav_li > li');

    navItems.forEach(item => {
        const submenu = item.querySelector('.submenu');
        
        if (!submenu) return;

        // hover 이벤트
        item.addEventListener('mouseenter', function () {
            submenu.style.maxHeight = '500px';
            submenu.style.opacity = '1';
        });

        item.addEventListener('mouseleave', function () {
            submenu.style.maxHeight = '0';
            submenu.style.opacity = '0';
        });
    });
});
