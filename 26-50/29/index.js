const button = document.querySelector("body > div > button");
const input = document.querySelector("body > div > input");
const suggestion = document.querySelector("body > div > ul");

const debounce = (fn, delay, immediate = false) => {
    let timeId;
    return function (...args) {
        const callNow = immediate && !timeId;
        if (timeId) {
            clearTimeout(timeId);
        }
        timeId = setTimeout(() => {
            timeId = null;
            return fn.apply(this, args);
        }, delay);
        if (callNow) {
            fn.apply(this, args);
        }
    }
}

let isLiAppeared = false;
input.addEventListener('keyup',
    debounce(() => {
        if (input.value) {
            suggestion.classList.add('active');
            clearUl();
            suggest(input.value);
            isLiAppeared = true;
        } else {
            suggestion.classList.remove('active');
            isLiAppeared = false;
            clearUl();
        }
    }, 200)
);

const suggest = (value) => {
    suggestion.append(createLi(`<b>${value}</b>`));
    suggestion.append(createLi(`Veritatis et <b>${value}</b>`));
    suggestion.append(createLi(`ut aliquid ex <b>${value}</b> vero eos`));
}

const clearUl = () => {
    for (let child of suggestion.querySelectorAll('li')) {
        suggestion.removeChild(child);
    }
}

const createLi = (text) => {
    const li = document.createElement('li')
    li.innerHTML = text;
    if (!isLiAppeared) {
        li.classList.add('active');
    }
    return li;
}
