

const searchCircle = document.querySelector(".search-circle");
const searchInput = document.querySelector(".search-input");
const menu_icon = document.querySelector('.menu-icon');
const container = document.querySelector('.container');
const menu = document.querySelector('.menu');

searchCircle.addEventListener("click", (e) => {
    searchInput.classList.toggle("active");
});

menu_icon.addEventListener('click', (e) => {
    console.log(container, menu);
    console.log(container.classList.toggle('show-menu'));
    menu.classList.toggle('active');
})