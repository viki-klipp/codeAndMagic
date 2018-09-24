'use strict';

(function() {
    var successHandler = function(data) {
        var setupSimilarList = document.querySelector('.setup-similar-list');
        var template = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < 4; i++) {
            var wizard = template.cloneNode(true);

            wizard.querySelector('.setup-similar-label').textContent = data[i].name;
            wizard.querySelector('.wizard-coat').style.fill = data[i].colorCoat;
            wizard.querySelector('.wizard-eyes').style.fill = data[i].colorEyes;

            fragment.appendChild(wizard);
        }

        setupSimilarList.appendChild(fragment);
    };

    var errorHandler = function(errorMessage) {
        var node = document.createElement('div');
        node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
        node.style.position = 'absolute';
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = '30px';
        
        node.textContent = errorMessage; 
        document.body.insertAdjacentElement('afterbegin', node);
    };

    var wizardsData = window.backend.load(successHandler, errorHandler);
    
    document.querySelector('.setup-similar').classList.remove('hidden');
})();



