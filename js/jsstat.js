'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var INDENT = 90;
var INITIAL_X = 140;
var INITIAL_Y = 240;
var HISTOGRAM_HEIGTH = -150;
var TEXT_INDENT = 20;


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
  var step = HISTOGRAM_HEIGTH / maxTime;
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(INITIAL_X + INDENT * i, INITIAL_Y, BAR_WIDTH, times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], INITIAL_X + INDENT * i, INITIAL_Y + TEXT_INDENT);
    ctx.fillText(times[i].toFixed(0), INITIAL_X + INDENT * i, INITIAL_Y + times[i] * step - TEXT_INDENT / 2);
  }
};
