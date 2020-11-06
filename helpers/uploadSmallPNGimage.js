const path = require('path');

function uploadSmallPNGimage() {
    const inputDiv = $('.ant-upload input');
    const filePath = path.join(__dirname, '../data/Test_PNG_94_KB.png');
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    });
    inputDiv.waitForDisplayed();
    inputDiv.setValue(remoteFilePath);
}

module.exports = uploadSmallPNGimage;