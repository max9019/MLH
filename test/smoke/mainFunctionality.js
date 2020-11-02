const sel = require ('../../data/selectors.json');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

    });

});