const path = require('path');

function uploadPDFFile() {
    const inputDiv = $('.ant-upload input');
    const filePath = path.join(__dirname, '../data/TestPDF.pdf');
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    });
    inputDiv.waitForDisplayed();
    inputDiv.setValue(remoteFilePath);
}

module.exports = uploadPDFFile;