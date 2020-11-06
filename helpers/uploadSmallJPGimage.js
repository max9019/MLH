const path = require('path');

function uploadSmallJPGimage() {
    const inputDiv = $('.ant-upload input');
    const filePath = path.join(__dirname, '../data/Test_JPG_152_KB.jpg');
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    });
    inputDiv.waitForDisplayed();
    inputDiv.setValue(remoteFilePath);
}

module.exports = uploadSmallJPGimage;