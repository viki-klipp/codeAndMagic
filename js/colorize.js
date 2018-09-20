'use strict';

(function() {
    var wizardCoat = document.querySelector('.wizard-coat');
    var wizardEyes = document.querySelector('.wizard-eyes');
    var wizardFireball = document.querySelector('.setup-fireball-wrap');

    var changeCoatColor = function() {
        wizardCoat.style.fill =  window.util.wizard_params.coatColors[window.util.getRandom(0,  window.util.wizard_params.coatColors.length)];
        document.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;
    }

    var changeWizardEyes = function() {
        wizardEyes.style.fill =  window.util.wizard_params.eyesColors[window.util.getRandom(0,  window.util.wizard_params.eyesColors.length)];
        document.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;
    };

    var changeFireballColor = function() {
        wizardFireball.style.backgroundColor =  window.util.wizard_params.fireballColors[window.util.getRandom(0, window.util.wizard_params.fireballColors.length)];
        document.querySelector('input[name="fireball-color"]').value = wizardFireball.style.backgroundColor.toString();
    };

    wizardCoat.addEventListener('click', changeCoatColor);
    wizardEyes.addEventListener('click', changeWizardEyes);
    wizardFireball.addEventListener('click', changeFireballColor);
})();