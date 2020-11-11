const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const uploadSmallJPGimage = require('../../helpers/uploadSmallJPGimage');
const uploadSmallPNGimage = require('../../helpers/uploadSmallPNGimage');
const uploadPDFFile = require('../../helpers/uploadPDFFile');
const uploadTXTFile = require('../../helpers/uploadTXTFile');
const uploadWordFile = require('../../helpers/uploadWordFile');
const inputValues4 = require('../../helpers/inputValues4');

describe('Testing Image Uploading Field', function () {

    it('TCI-001 Image Upload Area is present', function () {
        browser.url('');
        const upload = $(sel.picture).isDisplayed()
        expect(upload).toEqual(true);
    });

    it('TCI-002 Image Upload Area Placeholder is present', function () {
        const text = $(sel.picture).getText();
        expect(text).toEqual(exp.picturePlaceholder);
    });

    it('TCI-003 Label for picture', function () {
        const label = $$(sel.label)[4].getText();
        expect(label).toEqual(exp.labelPicture);
    });

    it('TCI-004-1 Does not accept PDF', function () {
        browser.url('');
        uploadPDFFile();
        const isExisting = $(sel.imagePreview).isExisting();
        expect(isExisting).toEqual(false);
    });

    it('TCI-004-2 Does not accept TXT files', function () {
        browser.url('');
        uploadTXTFile();
        const isExisting = $(sel.imagePreview).isExisting();
        expect(isExisting).toEqual(false);
    });

    it('TCI-004-3 Does not accept DOC files', function () {
        browser.url('');
        uploadWordFile();
        const isExisting = $(sel.imagePreview).isExisting();
        expect(isExisting).toEqual(false);
    });

    it('TCI-005-1 Does not accept PDF files ALONG with JPEG', function () {
        browser.url('');
        uploadPDFFile();
        uploadSmallJPGimage();
        const elem = $$(sel.imagePreview);
        expect(elem.length).toEqual(1);
    });

    it('TCI-005-2 Does not accept TXT files ALONG with JPEG', function () {
        browser.url('');
        uploadTXTFile()
        uploadSmallJPGimage();
        const elem = $$(sel.imagePreview);
        expect(elem.length).toEqual(1);
    });

    it('TCI-005-3 Does not accept DOC files ALONG with JPEG', function () {
        browser.url('');
        uploadWordFile();
        uploadSmallJPGimage();
        const elem = $$(sel.imagePreview);
        expect(elem.length).toEqual(1);
    });

    it('TCI-006 Image Upload accepts JPG and displays preview', function () {
       browser.url('');
       uploadSmallJPGimage();
       const preview = $(sel.imagePreviewName).getAttribute('title');
       expect(preview).toEqual(exp.jpgPreview);
    });

    it('TCI-007 Image Upload accepts PNG and displays preview', function () {
        browser.url('');
        uploadSmallPNGimage();
        const preview = $(sel.imagePreviewName).getAttribute('title');
        expect(preview).toEqual(exp.pngPreview);
    });

    it('TCI-008 User can delete JPG preview', function () {
        browser.url('');
        uploadSmallJPGimage();
        $(sel.imagePreviewDelete).moveTo();
        browser.pause(1000);
        const deletePreview = $(sel.imagePreviewDelete).isClickable();
        expect(deletePreview).toEqual(true);
    });

    it('TCI-009 User can delete PNG preview', function () {
        browser.url('');
        uploadSmallPNGimage();
        $(sel.imagePreviewDelete).moveTo();
        browser.pause(1000);
        const deletePreview = $(sel.imagePreviewDelete).isClickable();
        expect(deletePreview).toEqual(true);
    });

    it('TCI-010 JPG appears in the final story', function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        uploadSmallJPGimage();
        $(sel.button).click();
        const finalImage = $(sel.uploadedPicture).getAttribute('src');
        expect(finalImage === exp.imageError).toEqual(false);
    });

    it('TCI-011 JPG in the final story is 500px max', function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        uploadSmallJPGimage();
        $(sel.button).click();
        const finalImageSize = $(sel.uploadedPicture).getSize('width');
        expect(finalImageSize <= 500).toEqual(true);
    });

    it('TCI-012 PNG appears in the final story', function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        uploadSmallPNGimage();
        $(sel.button).click();
        const finalImage = $(sel.uploadedPicture).getAttribute('src');
        expect(finalImage === exp.imageError).toEqual(false);
    });

    it('TCI-013 PNG in the final story is 500px max', function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        uploadSmallPNGimage()
        $(sel.button).click();
        const finalImageSize = $(sel.uploadedPicture).getSize('width');
        expect(finalImageSize <= 500).toEqual(true);
    });

});

