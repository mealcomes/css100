const words = document.querySelector('body > div > div.keyboard > div.word');
words.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('word')) {
        return;
    }
    const word = target.innerHTML;
    const spanClassName = `.item-${word}`;
    const span = document.querySelector(spanClassName);
    if (!span) {
        return;
    }

    if (span.classList.contains('active-1')) {
        span.classList.add('active-2');
        span.classList.remove('active-1');
    } else {
        span.classList.remove('active-2');
        span.classList.add('active-1');
    }
});

const nums = document.querySelector('body > div > div.keyboard > div.num');
nums.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('num')) {
        return;
    }
    const word = target.innerHTML;
    const spanClassName = `.item-${word}`;
    const span = document.querySelector(spanClassName);
    if (!span) {
        return;
    }

    if (span.classList.contains('active-1')) {
        span.classList.add('active-2');
        span.classList.remove('active-1');
    } else {
        span.classList.remove('active-2');
        span.classList.add('active-1');
    }
});
