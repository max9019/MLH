const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json')

describe('Placeholders', function () {

    describe('Placeholders are displayed', function () {

        it('TC-010 Name Placeholder - Hero\'s name', function () {
            browser.url('');
            const text = $('.ant-input').getAttribute('placeholder');
            expect(text).toEqual(exp.namePlaceholder);
        });

        it('TC-011 Gender - he', function () {
            const text = $$(sel.genderPlaceholder)[0].getText();
            expect(text).toEqual(exp.genderPlaceholder1);
        });

        it('TC-012 Gender - she', function () {
            const text = $$(sel.genderPlaceholder)[1].getText();
            expect(text).toEqual(exp.genderPlaceholder2);
        });

        it('TC-013 Gender - it', function () {
            const text = $$(sel.genderPlaceholder)[2].getText();
            expect(text).toEqual(exp.genderPlaceholder3);
        });

        it('TC-014 Age Placeholder - Hero\'s age', function () {
            const text = $(sel.age).getAttribute('Placeholder');
            expect(text).toEqual(exp.agePlaceholder);
        });

        it('TC-015 Story Placeholder - Type of the story', function () {
            const text = $('.ant-select-selection-placeholder').getText();
            expect(text).toEqual(exp.storyPlaceholder);
        });

        it('TC-016 Button - Create!', function () {
            const text = $(sel.button).getText();
            expect(text).toEqual(exp.buttonPlaceholder);
        });

    });

});