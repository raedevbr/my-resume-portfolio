const header = document.querySelector('header');

document.querySelector(".btn-download-pdf").addEventListener("click", () => {
    const element = document.querySelector('main');

    const options = {
        margin: 10,
        filename: 'raularaujo-resume.pdf',
        image: { type: 'jpeg', quality: 0.98},
        html2canvas: { scale: 1},
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait'}
    };
    
    html2pdf().from(element).set(options).save();
});