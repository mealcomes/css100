const bg = document.querySelector("body > div");
const whiteLogo = document.querySelector("body > div > div.logo.white.normal");
const purpleLogo = document.querySelector("body > div > div.logo.purple.small");

bg.addEventListener('click', () => {
    whiteLogo.classList.toggle('normal');
    whiteLogo.classList.toggle('big');
    purpleLogo.classList.toggle('small');
    purpleLogo.classList.toggle('normal');
});
