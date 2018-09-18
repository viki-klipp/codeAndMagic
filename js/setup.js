'use strict';

var userDialog = document.querySelector('.setup');

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}; 

var getWizardsData = function() {
    var arr = [];

    for (var i = 0; i < WIZARD_PARAMS.count; i++) {
        var wizardName = WIZARD_PARAMS.names[getRandom(0, WIZARD_PARAMS.names.length)] 
            + ' ' 
            + WIZARD_PARAMS.surnames[getRandom(0, WIZARD_PARAMS.surnames.length)];

        var data = {
            name: wizardName,
            coatColor: WIZARD_PARAMS.coatColors[getRandom(0, WIZARD_PARAMS.coatColors.length)],
            eyesColor: WIZARD_PARAMS.eyesColors[getRandom(0, WIZARD_PARAMS.eyesColors.length)]
        };

        arr.push(data);
    }

    return arr;
}

var renderWizards = function(data, template) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < data.length; i++) {
        var wizard = template.cloneNode(true);

        wizard.querySelector('.setup-similar-label').textContent = data[i].name;
        wizard.querySelector('.wizard-coat').style.fill = data[i].coatColor;
        wizard.querySelector('.wizard-eyes').style.fill = data[i].eyesColor;

        fragment.appendChild(wizard);
    }

    return fragment;
};

var WIZARD_PARAMS = {
    names: ['Иван', 'Хуан Себастьян', 'Мария', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    surnames: ['Иван', 'Хуан Себастьян', 'Мария', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    coatColors: ['rgb(101,137,164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215,210,55)', 'rgb(0,0,0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
    fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    count: 4
};

var setupSimilarList = document.querySelector('.setup-similar-list');
var wizardsData = getWizardsData();
var template = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


setupSimilarList.appendChild(renderWizards(wizardsData, template));

document.querySelector('.setup-similar').classList.remove('hidden');

//events

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var openPopup = function() {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', popupPressHandler);
};

var closePopup = function() {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', popupPressHandler);
};

var popupPressHandler = function (evt) {
    if(evt.keyCode === ESC_KEYCODE) {
        closePopup();
    }
};

var crossIcon = document.querySelector('.setup-close');
var setupIcon = document.querySelector('.setup-open-icon');

setupIcon.addEventListener('click', openPopup);
setupIcon.addEventListener('keydown', function(evt) {
    if(evt.keyCode === ENTER_KEYCODE) {
        openPopup();
    }
});

crossIcon.addEventListener('click', closePopup);
crossIcon.addEventListener('keydown', function(evt) {
    if(evt.keyCode === ENTER_KEYCODE) {
        closePopup();
    }
});

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var changeCoatColor = function() {
    wizardCoat.style.fill = WIZARD_PARAMS.coatColors[getRandom(0, WIZARD_PARAMS.coatColors.length)];
    document.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;
}

var changeWizardEyes = function() {
    wizardEyes.style.fill = WIZARD_PARAMS.eyesColors[getRandom(0, WIZARD_PARAMS.eyesColors.length)];
    document.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;
};

var changeFireballColor = function() {
    wizardFireball.style.backgroundColor = WIZARD_PARAMS.fireballColors[getRandom(0, WIZARD_PARAMS.fireballColors.length)];
    document.querySelector('input[name="fireball-color"]').value = wizardFireball.style.backgroundColor.toString();
};

wizardCoat.addEventListener('click', changeCoatColor);
wizardEyes.addEventListener('click', changeWizardEyes);
wizardFireball.addEventListener('click', changeFireballColor);



