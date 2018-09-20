'use strict';

(function() {
    var GAP = 10;
    var BAR_X = 170;
    var BAR_Y = 230;
    var BAR_HEIGHT = 130;
    var BAR_GAP = 80;

    var cloud = {
        width: 420,
        height: 270,
        x: 100,
        y: 10,

        renderCloud: function(ctx, color, gap = 0) {
            ctx.fillStyle = color;
            ctx.fillRect(this.x + gap, this.y + gap, this.width, this.height);
        }
    };

    var renderCloud = function(ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
    };

    var renderBar = function(ctx, name, time, height, x, y) {
        if (name === 'Вы') {
            ctx.fillStyle = 'blue';
        } else {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        }

        ctx.fillRect(x, y, 40, -height);
        ctx.fillText(name, x, y + 30);
        ctx.fillText(Math.round(time), x, 90);
    };

    var renderHistogram = function(ctx, names, times) {
        var maxTime = getMaxElement(times);

        for (var i = 0, x = BAR_X; i < names.length; i++, x += BAR_GAP) {
            renderBar(ctx, names[i], times[i], (BAR_HEIGHT * times[i]) / maxTime, x, BAR_Y);
        }
    };

    var getMaxElement = function(arr) {
        var max = arr[0];

        for (var i = 1; i < arr.length; i++) {
            if(max < arr[i]) {
                max = arr[i]
            }
        }

        return max;
    };

    window.renderStatistics = function(ctx, names, times) {
        cloud.renderCloud(ctx, 'rgba(0, 0, 0, 0.5)', GAP);
        cloud.renderCloud(ctx, 'white');

        ctx.fillStyle = 'black';
        ctx.font = '16px PT Mono';
        ctx.fillText('Ура вы победили!', 240, 30);
        ctx.fillText('Список результатов:', 230, 50);

        renderHistogram(ctx, names, times);
    };
})();