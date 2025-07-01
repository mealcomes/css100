let marker = document.querySelector("body > div > div.marker");
let card = document.querySelector("body > div > div.card");

marker.addEventListener('click', (e) => {
    marker.classList.toggle('inactive');

    card.classList.toggle('active');
});

card.addEventListener('click', () => {
    marker.classList.toggle('inactive');

    card.classList.toggle('active');
})