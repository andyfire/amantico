document.addEventListener('DOMContentLoaded', () => {
    const langIt = document.querySelector('.lang-it');
    const langEn = document.querySelector('.lang-en');

    const cookieConsentPopup = document.getElementById('cookie-consent-popup');
    const acceptCookies = document.getElementById('accept-cookies');
    const declineCookies = document.getElementById('decline-cookies');

    const openBtn = document.getElementById('open-cookie-details');
    const modal = document.getElementById('cookie-details-modal');
    const closeBtn = modal.querySelector('.close-button');

    // Funzione per aprire il popup
    openBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Funzione per chiudere il popup cliccando sulla 'X'
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Funzione per chiudere il popup cliccando fuori dal contenuto
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function switchLanguage(lang) {
        document.querySelectorAll('[data-it], [data-en]').forEach(el => {
            el.innerText = el.getAttribute(`data-${lang}`);
        });

        document.querySelectorAll('[data-it-placeholder], [data-en-placeholder]').forEach(el => {
            el.placeholder = el.getAttribute(`data-${lang}-placeholder`);
        });

        if (lang === 'it') {
            langIt.classList.add('active');
            langEn.classList.remove('active');
            document.documentElement.lang = 'it';
        } else {
            langEn.classList.add('active');
            langIt.classList.remove('active');
            document.documentElement.lang = 'en';
        }
    }

    function loadGoogleAnalytics() {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-61QECESWLV'; // Sostituisci con il tuo ID Google Analytics
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-61QECESWLV'); // Sostituisci con il tuo ID Google Analytics
    }

    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'true') {
        loadGoogleAnalytics();
    } else if (consent === null) {
        cookieConsentPopup.style.display = 'block';
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'true');
        cookieConsentPopup.style.display = 'none';
        loadGoogleAnalytics();
    });

    declineCookies.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'false');
        cookieConsentPopup.style.display = 'none';
    });

    langIt.addEventListener('click', (e) => {
        e.preventDefault();
        switchLanguage('it');
    });

    langEn.addEventListener('click', (e) => {
        e.preventDefault();
        switchLanguage('en');
    });

    // Set initial language based on browser or default to Italian
    const userLang = navigator.language || navigator.userLanguage;
    const initialLang = userLang.startsWith('en') ? 'en' : 'it';
    switchLanguage('it');

    const hamburgerButton  = document.getElementById('hamburgerButton');
    const menu = document.getElementById('mainMenu');
    const menuLinks = document.querySelectorAll("#mainMenu a");

    hamburgerButton .addEventListener('click', function() {
        // Alterna la classe 'menu-open' sul menu e sul pulsante
        menu.classList.toggle('menu-open');
        hamburgerButton .classList.toggle('is-active'); // Puoi usare questa classe per animare l'hamburger in X
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            menu.classList.remove("menu-open");
            hamburgerButton.classList.remove("is-active");
        });
    });
});
