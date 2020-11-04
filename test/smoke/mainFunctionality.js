const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-024 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue(data.name);
            const inputAge = $(sel.age).setValue(data.age);
            const inputGender = $$(sel.gender)[data.gender.she].click();
            const storyClick = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[6].click();
            const submit = $(sel.button).isEnabled();
            expect(submit).toEqual(true);
        });

        it('TC-025 Create button is clickable after 1-4 are filled in with function', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const submit = $(sel.button).isEnabled();
            expect(submit).toEqual(true);
        });

    });

    describe('Other Paths', function () {

        it('TC-026 gender he is working', function () {
            browser.url('');
            inputValues4andClick(data.name, data.gender.he, data.age, data.storyType);
            const tryAgainBtn = $(sel.tryAgain).isDisplayed();
            expect(tryAgainBtn).toEqual(true);
        });

    });

});