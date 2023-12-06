document.querySelectorAll('#language-selector').forEach(selector => {
    selector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;

        const currentUrl = window.location.pathname;
        const newUrl = currentUrl.replace(/(_en|_pt)?\.html/, `_${selectedLanguage}.html`);
        window.location.href = newUrl;
    });
});