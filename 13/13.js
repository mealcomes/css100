
let profiles = document.getElementsByClassName('profile');
let detail = document.querySelector("body > div > div.detail")
for (let pro of profiles) {
    pro.addEventListener('click', () => {
        detail.classList.toggle('active');
    })
}
let detailClose = document.querySelector("body > div > div.detail > div.close");
detailClose.addEventListener('click', () => {
    detail.classList.toggle('active');
});