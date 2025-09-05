const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
const mainContainer = document.getElementById('main-container');
const body = document.body;
const html = document.documentElement;

upButton.addEventListener('click', () => {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    html.classList.remove('dark-theme');
    html.classList.add('light-theme');
});

downButton.addEventListener('click', () => {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    html.classList.remove('light-theme');
    html.classList.add('dark-theme');
});
