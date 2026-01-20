window.addEventListener('load', () => {
    const element = document.querySelector('.hero__title');
    if (!element) return;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            element.classList.add('is-visible');
        });
    });
});

window.addEventListener('load', () => {
    const element = document.querySelector('.hero__pic');
    if (!element) return;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            element.classList.add('is-visible');
        });
    });
});

//main-hero-end
//main-partners

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.partners__title');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.partners__card');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});

//main-partners-end
//scroll animations for all section wrappers

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.benefits__wrapper, .transform__wrapper, .special__wrapper, .article__wrapper, .maps__wrapper, .picture__wrapper, .contact__wrapper, .footer__wrapper');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    elements.forEach(el => observer.observe(el));
});

//general scroll animation for all animate-on-scroll elements

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, index * 100); // small delay for sequence
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    elements.forEach(el => observer.observe(el));
});