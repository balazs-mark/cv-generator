
import ReactDOM from 'react-dom';
import {QRCodeSVG} from 'qrcode.react';
import html2pdf from "html2pdf.js";


function generateQRcode () {
    var qrCodeColor = "red"
    ReactDOM.render(
        <QRCodeSVG value={ window.location.href } size={90} fgColor={ qrCodeColor } />,
        document.getElementById('QRcodeContainer')
      );
};


function generatePDF () {
    // See https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
    var configs = {
        margin: [20, 0, 24, 0],
        pagebreak: { mode: 'avoid-all'},
        filename: "mark_balazs_cv.pdf",
        html2canvas:  { scale: 1 },
        jsPDF: {orientation: "portrait", unit: "mm", format: "letter"}
    }
    const element = document.getElementById("cvContent");
    // See example usage from repo: https://github.com/MrRio/jsPDF/blob/b9f932cd2e22c82db0a39f0225521945a2568809/examples/basic.html#L357
    html2pdf().set(configs).from(element).save();
    return ("OK")
};


function generatePDFwithQRcode () {
    generateQRcode()
    generatePDF()
    // window.open(window.location.href, "_self")
};


export default generatePDFwithQRcode;