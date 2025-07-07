const closeButton = document.querySelector("body > div > div > div.button");
const errorDialog = document.querySelector("body > div > div");

closeButton.addEventListener('click', () => {
    errorDialog.classList.add('closed');
});
