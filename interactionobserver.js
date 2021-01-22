let links = document.querySelectorAll('nav a');
let secties = document.querySelectorAll('section');

const opties = {
    treshold: 1
};

const verwijderActief = () => {
    links.forEach((link) => {
        if( link.classList = 'actief') {
            link.classList.remove('actief');
        }
    });
}

const verwerkDoorsnijding = (entries, observer) => {
    entries.forEach( entry => {
        if ( entry.isIntersecting ) {
           let link = zoekBijpassendeLink('#' + entry.target.id);
           maakActief(link);
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


const zoekBijpassendeLink = (id) => {
    let link = document.querySelector('nav a[href="' + id + '"]');
    return link;
}