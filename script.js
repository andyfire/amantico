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
            const translation = el.getAttribute(`data-${lang}`);
            if (translation) {
                el.innerText = translation;
            }
        });

        document.querySelectorAll('[data-it-placeholder], [data-en-placeholder]').forEach(el => {
            const placeholder = el.getAttribute(`data-${lang}-placeholder`);
            if (placeholder) {
                el.placeholder = placeholder;
            }
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
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID'; // Sostituisci con il tuo ID Google Analytics
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'YOUR_GA_ID'); // Sostituisci con il tuo ID Google Analytics
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
    switchLanguage(initialLang);
});

