const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json')

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-020 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-021 Gender - He', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-022 Gender - She', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-023 Gender - It', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-024 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-025 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-026 Create', function () {
            const label = $(sel.button).isDisplayed();
            expect(label).toEqual(true);
        });

    });

});


