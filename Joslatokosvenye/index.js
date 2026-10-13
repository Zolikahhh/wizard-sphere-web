const starBtn = document.getElementById('star-btn');
const heartBtn = document.getElementById('heart-btn');
const skullBtn = document.getElementById('skull-btn');
const quoteDisplay = document.getElementById('quote-display');

let activeInterval = null;


const starQuotes = [
    "A holnap kapuja már nyitva áll — csak a bátorságod hiányzik hozzá.",
    "Amit ma nem értesz, holnap út lesz a lábad alatt.",
    "Fény közeledik, csendben és biztosan.",
    "Egy új kezdet leng körülötted, mint a pirkadat első fénye.",
    "A következő döntésed megnyit valamit, amit régóta keresel.",
    "A csillagok türelmesek — te is légy az.",
    "A jövőd tisztább, mint ahogy most látod.",
    "A változás nem ellened érkezik, hanem érted.",
    "A következő napokban egy apró jel mutatja meg a helyes irányt.",
    "A fény, ami közeledik, nem kívülről jön — benned fog megszületni."
];

const heartQuotes = [
    "A szíved már tudja a választ — engedd, hogy megszólaljon.",
    "A szerelem ott születik meg, ahol őszinték a tekintetek.",
    "Valaki közelebb van, mint gondolod.",
    "Egy régi érzelem új fényben tér vissza.",
    "A szeretet akkor talál rád, amikor leteszed a védekezést.",
    "A szívedben ringó nyugalmat valaki meg fogja érinteni.",
    "A közeljövőben egy mosoly többet mond majd minden szónál.",
    "A kapcsolat, amit keresel, türelmet és bizalmat kér.",
    "Valaki már gondol rád — csak még fél megmutatni.",
    "A szerelem útja lassú, de biztos — és te már rajta jársz."
];

const skullQuotes = [
    "A félelem csak addig követ, amíg hátrafelé nézel.",
    "A sötétség, amit érzel, nem valódi — csak gondolat.",
    "Az erő, amit keresel, már ott van benned.",
    "A következő napokban valami könnyebbé válik, mint gondoltad.",
    "A nyugtalanság egy múló árnyék — a fény már úton van.",
    "A legnagyobb félelmed valójában a legnagyobb tanítód.",
    "Engedd el azt, ami nem a tiéd — és fellélegzel.",
    "A szíved erősebb, mint a kételyeid.",
    "A csend nem üresség — védelem.",
    "A fény már megtalált téged — csak hagyd, hogy elérjen."
];

function displayRandomQuote(list) {
    
    quoteDisplay.classList.remove('show');

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * list.length);
        quoteDisplay.innerText = list[randomIndex];
        quoteDisplay.classList.add('show');
    }, 200); 
}

starBtn.addEventListener('click', () => {
    if(activeInterval) clearInterval(activeInterval);
    document.body.style.backgroundColor = '#0b0b45'; 
    activeInterval = setInterval(createFallingStar, 100);
    
    displayRandomQuote(starQuotes);
});

heartBtn.addEventListener('click', () => {
    if(activeInterval) clearInterval(activeInterval);
    document.body.style.backgroundColor = '#FFC0CB'; 
    activeInterval = setInterval(createFloatingHeart, 150);

    displayRandomQuote(heartQuotes);
});

skullBtn.addEventListener('click', () => {
    if(activeInterval) clearInterval(activeInterval);
    document.body.style.backgroundColor = '#1a1a1a'; 
    activeInterval = setInterval(createChaosSkull, 200);

    displayRandomQuote(skullQuotes);
});


function createFallingStar() {
    const star = document.createElement('div');
    star.innerText = '⭐';
    star.classList.add('falling-star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    star.style.fontSize = (Math.random() * 1.5 + 0.5) + 'rem';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 5000);
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerText = '❤️';
    heart.classList.add('floating-heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 4 + 3) + 's';
    heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}

function createChaosSkull() {
    const skull = document.createElement('div');
    skull.innerText = '☠️';
    skull.classList.add('skull-item');

    const isLeft = Math.random() > 0.5;
    if (isLeft) {
        skull.style.left = (Math.random() * 15) + 'vw';
    } else {
        skull.style.left = (Math.random() * 15 + 85) + 'vw';
    }

    const isGoingUp = Math.random() > 0.5;
    if (isGoingUp) {
        skull.style.bottom = '-10%';
        skull.style.animationName = 'floatUp';
    } else {
        skull.style.top = '-10%';
        skull.style.animationName = 'fallDown';
    }

    skull.style.fontSize = (Math.random() * 2 + 1) + 'rem';
    const duration = Math.random() * 3 + 3;
    skull.style.animationDuration = duration + 's';

    document.body.appendChild(skull);
    setTimeout(() => skull.remove(), duration * 1000);
}