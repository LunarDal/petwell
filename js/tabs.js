document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.icon_nav_btn [data-tab]');
    const tabPanels = document.querySelectorAll('[data-tab-panel]');

    if (!tabButtons.length || !tabPanels.length) return;

    function activateTab(tabName) {
        tabButtons.forEach(button => {
            const isActive = button.dataset.tab === tabName;
            button.classList.toggle('on', isActive);
            button.setAttribute('aria-selected', String(isActive));
        });

        tabPanels.forEach(panel => {
            panel.classList.toggle('active', panel.dataset.tabPanel === tabName);
        });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            activateTab(button.dataset.tab);
        });
    });
});
