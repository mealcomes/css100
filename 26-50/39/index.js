const lineButton = document.querySelector("body > div > div > div.line-button");
const barsDiv = document.querySelector("body > div > div > div.bars");
const bars = document.querySelectorAll("body > div > div > div.bars > span")
let isFirst = true;

lineButton.addEventListener('click', () => {
    toggleActive();
    if (!isFirst) {
        toggleInactive();
    }
    isFirst = false;
});

bars.forEach(bar => {
    bar.addEventListener('click', () => {
        toggleActive();
        toggleInactive();
    });
})

const toggleActive = () => {
    lineButton.classList.toggle('active');
    barsDiv.classList.toggle('active');
}

const toggleInactive = () => {
    lineButton.classList.toggle('inactive');
}