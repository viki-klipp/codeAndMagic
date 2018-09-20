'use strict';

(function () {
    var dialogHandler = document.querySelector('.upload');
    var dialog = document.querySelector('.setup');
    var dragged = false;

    var onMouseDown = function(evt) {
        var coords = {
            x: evt.clientX,
            y: evt.clientY
        };

        var onMouseMove = function(evt) {
            dragged = true;
            var shift = {
                x: coords.x - evt.clientX,
                y: coords.y - evt.clientY
            };

            coords = {
                x: evt.clientX,
                y: evt.clientY
            };

            dialog.style.top = (dialog.offsetTop - shift.y) + 'px';
            dialog.style.left = (dialog.offsetLeft - shift.x) + 'px';
        };

        var onMouseUp = function(evt) {
            evt.preventDefault();
    
            document.removeEventListener('mousemove', onMouseMove);
            dialog.removeEventListener('mouseup', onMouseUp);

            if (dragged) {
                var onClickPreventDefault = function(evt) {
                    evt.preventDefault();
                    dialog.removeEventListener('click', onClickPreventDefault);
                };
    
                dialog.addEventListener('click', onClickPreventDefault);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        dialogHandler.addEventListener('mouseup', onMouseUp);
    };

    dialogHandler.addEventListener('mousedown', onMouseDown);
})();
