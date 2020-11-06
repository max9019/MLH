const path = require('path');

function uploadTXTFile() {
    const inputDiv = $('.ant-upload input');
    const filePath = path.join(__dirname, '../data/TestTXT.txt');
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    });
    inputDiv.waitForDisplayed();
    inputDiv.setValue(remoteFilePath);
}

module.exports = uploadTXTFile;