import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

const GenericPdfDownloader = ({ rootElementId, downloadFileName }) => {
  const downloadPdfDocument = () => {
    // const input = document.getElementById(rootElementId);
    // const input = rootElementId;
    // html2canvas(input).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF();
    //   pdf.addImage(imgData, "PNG", 10, 10, -50, -50);
    //   pdf.save(`${downloadFileName}.pdf`);
    // });

    htmlToImage
      .toPng(document.getElementById("experience"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        console.log(pdfWidth, pdfHeight, imgProps);

        pdf.addImage(dataUrl, "PNG", 0, 0, 500, 100);
        pdf.save("download.pdf");
      });
  };

  return <button onClick={downloadPdfDocument}>Download Pdf</button>;
};

export default GenericPdfDownloader;
