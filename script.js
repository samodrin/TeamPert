document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-img');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');

        if (!images.length || !prevBtn || !nextBtn) {
            console.warn('Slider missing required elements:', slider);
            return;
        }

        let currentIndex = 0;

        // Скрыть все изображения, показать первое
        const showImage = (index) => {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
            currentIndex = index;
        };

        // Инициализация
        showImage(0);

        // Обработчики
        prevBtn.addEventListener('click', () => {
            const newIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(newIndex);
        });

        nextBtn.addEventListener('click', () => {
            const newIndex = (currentIndex + 1) % images.length;
            showImage(newIndex);
        });
    });
});