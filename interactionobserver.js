let links = document.querySelectorAll('nav a');

const verwijderActief = () => {
    links.forEach((link) => {
        if( link.classList = 'actief') {
            link.classList.remove('actief');
        }
    });
}

const maakActief = (elem) => {
    verwijderActief();
    elem.classList.add('actief');
}

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        maakActief(e.target);
        window.location = e.target.href;
    })
});