const pics = document.querySelectorAll("body > div > div.pic");
let isFirst = true;

pics.forEach(pic => {
    pic.addEventListener('click', () => {
        toggleInactive(pic);
        pic.classList.toggle('active');
    })
})

const toggleInactive = (pic) => {
    if (pic.classList.contains('active')) {
        pic.classList.add('inactive');
    } else {
        pic.classList.remove('inactive');
    }
}

