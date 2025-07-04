const plus = document.querySelector("body > div > div > div.plus > div");
const minus = document.querySelector("body > div > div > div.minus > div");
const numParent = document.querySelector("body > div > div > div.number");
let nowNumSpan = document.querySelector("body > div > div > div.number > span");
let preNumSpan = null;
let number = parseInt(nowNumSpan.innerHTML);

plus.addEventListener('click', () => {
    if (preNumSpan) {
        numParent.removeChild(preNumSpan);
    }
    nowNumSpan.className = '';
    nowNumSpan.classList.add('fadeOutUp');
    preNumSpan = nowNumSpan;
    number++;
    nowNumSpan = document.createElement('span');
    nowNumSpan.innerHTML = number;
    nowNumSpan.classList.add('fadeInUp');
    numParent.appendChild(nowNumSpan);
})

minus.addEventListener('click', () => {
    if (preNumSpan) {
        numParent.removeChild(preNumSpan);
    }
    nowNumSpan.className = '';
    nowNumSpan.classList.add('fadeOutDown');
    preNumSpan = nowNumSpan;
    number--;
    nowNumSpan = document.createElement('span');
    nowNumSpan.innerHTML = number;
    nowNumSpan.classList.add('fadeInDown');
    numParent.appendChild(nowNumSpan);
})
