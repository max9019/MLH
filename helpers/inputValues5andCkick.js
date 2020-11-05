const sel = require('../data/selectors.json');
const uploadSmallJPGpicture = require('../helpers/uploadSmallJPGpicture');

function inputValues5andClick (name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();
    uploadSmallJPGpicture();
    $(sel.button).click();

}

module.exports = inputValues5andClick;