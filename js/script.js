const toggleButton = document.querySelector('.menu-toggle');
const topBar = document.querySelector('#top-bar');

toggleButton.addEventListener('click', () => {
    topBar.classList.toggle("open");
});

topBar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        topBar.classList.remove("open");

    });
});

document.addEventListener('click', (event) => {
    if(!topBar.contains(event.target) && !toggleButton.contains(event.target)){
        topBar.classList.remove('open');
    }
});