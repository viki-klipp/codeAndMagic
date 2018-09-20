'use strict';

(function() {
    const ESC_KEYCODE = 27;
    const ENTER_KEYCODE = 13;

    var dialog = document.querySelector('.setup');

    window.util = {
        wizard_params:  {
            names: ['Иван', 'Хуан Себастьян', 'Мария', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
            surnames: ['Иван', 'Хуан Себастьян', 'Мария', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
            coatColors: ['rgb(101,137,164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215,210,55)', 'rgb(0,0,0)'],
            eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
            fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
            count: 4
        },
        getRandom: function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        isEscKeyCode: function(evt, action) {
            if(evt.keyCode === ESC_KEYCODE) {
                action();
            }
        },
        isEnterKeyCode: function(evt, action) {
            if(evt.keyCode === ENTER_KEYCODE) {
                action();
            }
        }
    };

})();