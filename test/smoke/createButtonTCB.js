const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4andClick = require('../../helpers/inputValues4andClick');
const inputValues5andClick = require('../../helpers/inputValues5andClick');
const uploadSmallJPGimage = require('../../helpers/uploadSmallJPGimage');

describe('Checking Create Button', function () {

    it('TCB-001 Create button is present', function () {
        browser.url('');
        const submit = $(sel.button).isDisplayed()
        expect(submit).toEqual(true);
    });

    it('TCB-002 Create button has name Create!', function () {
        browser.url('');
        const text = $(sel.button).getText();
        expect(text).toEqual(exp.buttonPlaceholder);
    });

    it('TCB-003 Button disabled when all fields empty', function () {
        browser.url('');
        const button = $(sel.button).isEnabled()
        expect(button).toEqual(false);
    });

    it('TCB-004 Disabled when only name entered', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-005 Disabled when only age entered', function () {
        browser.url('');
        $(sel.age).setValue(data.age);
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-006 Disabled when only gender entered', function () {
        browser.url('');
        $$(sel.gender)[data.gender.he].click();
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-007 Disabled when only image uploaded', function () {
        browser.url('');
        uploadSmallJPGimage();
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-008 Disabled when 2 fields filled', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        $(sel.age).setValue(data.age);
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-009 Disabled when 2 fields filled and image uploaded', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        $(sel.age).setValue(data.age);
        uploadSmallJPGimage();
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-0010 Disabled when 3 fields filled and image uploaded', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        $(sel.age).setValue(data.age);
        $$(sel.gender)[data.gender.he].click();
        uploadSmallJPGimage();
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-0011 Active when 4 fields filled', function () {
        browser.url('');
        inputValues4andClick(data.name, data.gender.he, data.age, data.storyType.Comedy);
        const tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

    it('TCB-0012 Active when 4 fields filled and image uploaded', function () {
        browser.url('');
        inputValues5andClick(data.name, data.gender.he, data.age, data.storyType.Comedy);
        const tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

});