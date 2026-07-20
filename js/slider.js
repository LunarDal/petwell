document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('mainSlider');
    if (!slider) return;

    const slidesWrap = slider.querySelector('.slides');
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const prevBtn = slider.querySelector('.slider-btn.prev');
    const nextBtn = slider.querySelector('.slider-btn.next');
    const dotsContainer = slider.querySelector('.dots');
    let current = 0;
    let intervalId = null;
    const delay = 4000;

    // dots
    slides.forEach((_, i) => {
        const d = document.createElement('div');
        d.className = 'dot' + (i === 0 ? ' active' : '');
        d.dataset.index = i;
        dotsContainer.appendChild(d);
    });

    const dots = Array.from(dotsContainer.children);

    function update() {
        slidesWrap.style.transform = `translateX(-${current * 100}%)`;
        slides.forEach((s, i) => s.classList.toggle('active', i === current));
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function next() {
        current = (current + 1) % slides.length;
        update();
    }

    function prev() {
        current = (current - 1 + slides.length) % slides.length;
        update();
    }

    nextBtn.addEventListener('click', () => {
        next();
        restartInterval();
    });
    prevBtn.addEventListener('click', () => {
        prev();
        restartInterval();
    });

    dots.forEach(d => d.addEventListener('click', (e) => {
        current = Number(e.currentTarget.dataset.index);
        update();
        restartInterval();
    }));

    function startInterval() {
        intervalId = setInterval(next, delay);
    }

    function stopInterval() {
        if (intervalId) { clearInterval(intervalId); intervalId = null; }
    }

    function restartInterval() { stopInterval(); startInterval(); }

    slider.addEventListener('mouseenter', stopInterval);
    slider.addEventListener('mouseleave', startInterval);

    // init
    update();
    startInterval();
});
