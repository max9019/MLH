const sel = require('../data/selectors.json');
const uploadSmallJPGimage = require('./uploadSmallJPGimage');

function inputValues5andClick (name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();
    uploadSmallJPGimage();
    $(sel.button).click();

}

module.exports = inputValues5andClick;