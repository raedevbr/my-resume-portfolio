const header = document.querySelector('header');
var pdfFileName = "raularaujo.pdf";

document.querySelector(".btn-download-pdf").addEventListener("click", () => {
    const element = document.querySelector('main');

    const options = {
        margin: 5,
        filename: `${pdfFileName}`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
});

