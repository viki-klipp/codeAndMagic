'use strict';

(function() {
    var userDialog = document.querySelector('.setup');
    
    var openPopup = function() {
        userDialog.classList.remove('hidden');
        document.addEventListener('keydown', popupPressHandler);
    };

    var closePopup = function() {
        userDialog.classList.add('hidden');
        document.removeEventListener('keydown', popupPressHandler);
    };

    var popupPressHandler = function (evt) {
        window.util.isEscKeyCode(evt, closePopup);
    };

    var crossIcon = document.querySelector('.setup-close');
    var setupIcon = document.querySelector('.setup-open-icon');

    setupIcon.addEventListener('click', openPopup);
    setupIcon.addEventListener('keydown', function(evt) {
        window.util.isEnterKeyCode(evt, openPopup);
    });

    crossIcon.addEventListener('click', closePopup);
    crossIcon.addEventListener('keydown', function(evt) {
        window.util.isEnterKeyCode(evt, closePopup);
    });
})();