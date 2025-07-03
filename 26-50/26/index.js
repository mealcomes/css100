const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll(".button");
let index = 0;
const isFirst = {
    0: false,
    1: true,
    2: true,
}

const toggle = (i) => {
    if (!isFirst[i]) {
        cards[i].classList.toggle('inactive');
    }
    isFirst[i] = false;
    cards[i].classList.toggle('active')
}

for (let b of buttons) {
    b.addEventListener('click', () => {
        toggle(index)
        index = (index + 1) % 3;
        toggle(index);
    })
}
