const hoverDiv = document.querySelector('body > div > div.hover');
const frameDiv = document.querySelector('body > div');

frameDiv.addEventListener('mousemove', e => {
    const rec = frameDiv.getBoundingClientRect();
    const offsetY = e.offsetY;
    hoverDiv.style.transition = 'none';
    hoverDiv.style.transform = `translateY(-${rec.height - offsetY}px)`;
});

frameDiv.addEventListener('mouseleave', e => {
    hoverDiv.style.transform = `translateY(-50%)`;
});
