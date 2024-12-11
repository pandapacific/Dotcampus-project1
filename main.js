// faq interactivity

document.addEventListener('DOMContentLoaded', ( ) => {

    const items = document.querySelectorAll('li');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle("active");
            item.querySelector('img').classList.toggle("rotate");
            item.querySelector('.question').classList.toggle("active");
            item.querySelector('.answer').classList.toggle("active");

        })
    })
})

