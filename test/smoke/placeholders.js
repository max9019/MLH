const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json')

describe('Placeholders', function () {

    describe('Placeholders are displayed', function () {

        it('TC-012 Name Placeholder - Hero\'s name', function () {
            browser.url('');
            const text = $('.ant-input').getAttribute('placeholder');
            expect(text).toEqual(exp.namePlaceholder);
        });

        it('TC-013 Gender - he', function () {
            const text = $$(sel.genderPlaceholder)[0].getText();
            expect(text).toEqual(exp.genderPlaceholder1);
        });

        it('TC-014 Gender - she', function () {
            const text = $$(sel.genderPlaceholder)[1].getText();
            expect(text).toEqual(exp.genderPlaceholder2);
        });

        it('TC-015 Gender - it', function () {
            const text = $$(sel.genderPlaceholder)[2].getText();
            expect(text).toEqual(exp.genderPlaceholder3);
        });

        it('TC-016 Age Placeholder - Hero\'s age', function () {
            const text = $(sel.age).getAttribute('Placeholder');
            expect(text).toEqual(exp.agePlaceholder);
        });

        it('TC-017 Story Placeholder - Type of the story', function () {
            const text = $('.ant-select-selection-placeholder').getText();
            expect(text).toEqual(exp.storyPlaceholder);
        });

        it('TC-018 Picture - Click or drag and drop', function () {
            const text = $(sel.picture).getText();
            expect(text).toEqual(exp.picturePlaceholder);
        });

        it('TC-019 Button - Create!', function () {
            const text = $(sel.button).getText();
            expect(text).toEqual(exp.buttonPlaceholder);
        });


    });

});