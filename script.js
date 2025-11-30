document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');

    const translations = {
        it: {
            'hero-title': 'Il tuo ponte per lo sviluppo software tra Italia e India.',
            'hero-subtitle': 'Alta qualità, project manager italiani in loco, zero rischi.',
            'hero-cta': 'Parla con noi',
            'service-1-title': 'Sviluppo Web, Software e App Mobile',
            'service-1-desc': "Copriamo tutte le tue esigenze di sviluppo, dal sito vetrina all'e-commerce, dal gestionale su misura all'app nativa.",
            'service-2-title': 'Partnership Controllata',
            'service-2-desc': 'Collaboriamo con aziende indiane selezionate, ma la gestione del progetto è 100% italiana e in loco.',
            'service-3-title': 'Qualità e Sicurezza Garantite',
            'service-3-desc': 'Il nostro team di PM italiani in India assicura standard qualitativi elevati, sicurezza dei dati e trasparenza totale.',
            'why-us-title': 'Perché Noi',
            'why-us-p1': "Siamo l'anello di congiunzione tra le aziende italiane e l'outsourcing indiano di qualità. Gestiamo i tuoi progetti di sviluppo con project manager italiani presenti fisicamente in India.",
            'why-us-p2': "Questo significa che avrai la convenienza dell'outsourcing senza i rischi: niente incomprensioni culturali, nessuna barriera linguistica, e la garanzia che i tuoi dati e il tuo progetto siano sempre al sicuro.",
            'why-us-p3': 'La nostra formula è semplice: supervisione italiana, sviluppo indiano. Il risultato è un prodotto di alta qualità, consegnato nei tempi previsti e a un costo competitivo.',
            'contact-title': 'Contattaci',
            'contact-subtitle': 'Siamo pronti a discutere del tuo prossimo progetto.',
        },
        en: {
            'hero-title': 'Your software development bridge between Italy and India.',
            'hero-subtitle': 'High quality, Italian project managers on site, zero risks.',
            'hero-cta': 'Talk to us',
            'service-1-title': 'Web, Software and Mobile App Development',
            'service-1-desc': 'We cover all your development needs, from showcase sites to e-commerce, from custom management software to native apps.',
            'service-2-title': 'Controlled Partnership',
            'service-2-desc': 'We collaborate with selected Indian companies, but project management is 100% Italian and on-site.',
            'service-3-title': 'Guaranteed Quality and Security',
            'service-3-desc': 'Our team of Italian PMs in India ensures high quality standards, data security, and total transparency.',
            'why-us-title': 'Why Us',
            'why-us-p1': 'We are the link between Italian companies and quality Indian outsourcing. We manage your development projects with Italian project managers physically present in India.',
            'why-us-p2': 'This means you will have the convenience of outsourcing without the risks: no cultural misunderstandings, no language barriers, and the guarantee that your data and your project are always safe.',
            'why-us-p3': 'Our formula is simple: Italian supervision, Indian development. The result is a high-quality product, delivered on time and at a competitive cost.',
            'contact-title': 'Contact Us',
            'contact-subtitle': 'We are ready to discuss your next project.',
        }
    };

    const setLanguage = (language) => {
        document.documentElement.lang = language;
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    };

    languageSelector.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    // Set initial language to Italian
    const initialLang = 'it';
    languageSelector.value = initialLang;
    setLanguage(initialLang);
});
