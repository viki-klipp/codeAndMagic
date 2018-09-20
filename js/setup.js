'use strict';

(function() {
    var getWizardsData = function() {
        var arr = [];

        for (var i = 0; i < window.util.wizard_params.count; i++) {
            var wizardName =  window.util.wizard_params.names[window.util.getRandom(0,  window.util.wizard_params.names.length)] 
                + ' ' 
                +  window.util.wizard_params.surnames[window.util.getRandom(0,  window.util.wizard_params.surnames.length)];

            var data = {
                name: wizardName,
                coatColor:  window.util.wizard_params.coatColors[window.util.getRandom(0,  window.util.wizard_params.coatColors.length)],
                eyesColor:  window.util.wizard_params.eyesColors[window.util.getRandom(0,  window.util.wizard_params.eyesColors.length)]
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

    var setupSimilarList = document.querySelector('.setup-similar-list');
    var wizardsData = getWizardsData();
    var template = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');


    setupSimilarList.appendChild(renderWizards(wizardsData, template));

    document.querySelector('.setup-similar').classList.remove('hidden');
})();



