'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var barWidth = 40;
var indent = 90;
var initialX = 140;
var initialY = 240;
var histogramHeigth = -150;
var textIndent = 20;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};


var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  ctx.fillStyle = '#000';
  var maxTime = getMaxElement(times);
  var step = histogramHeigth / maxTime;
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], initialX + indent * i, initialY + textIndent);
    ctx.fillText(times[i].toFixed(0), initialX + indent * i, initialY + times[i] * step - textIndent / 2);
  }
};
