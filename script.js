document.addEventListener('DOMContentLoaded', () => {
    const langIt = document.querySelector('.lang-it');
    const langEn = document.querySelector('.lang-en');

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

    langIt.addEventListener('click', (e) => {
        e.preventDefault();
        switchLanguage('it');
    });

    langEn.addEventListener('click', (e) => {
        e.preventDefault();
        switchLanguage('en');
    });

    // Set initial language
    switchLanguage('it');
});
