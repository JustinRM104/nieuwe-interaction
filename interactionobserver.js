let links = document.querySelectorAll('nav a');
let secties = document.querySelectorAll('section');

const opties = {
    //rootMargin: '-150px',
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
           let link = zoekBijpassendeLink('#' + entry.target.parentNode.id);
           maakActief(link);
        }
    });
}

let observer = new IntersectionObserver(verwerkDoorsnijding, opties);
secties.forEach( sectie => {
    observer.observe(sectie.getElementsByTagName('p')[0]);
});

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