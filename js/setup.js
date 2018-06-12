'use strict';
// показываем окно настроек
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// записываем массивы
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// получаем случайный элемент из каждого массива
var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// мага получаем
var createRandomWizard = function () {
  return {
    getRandomWizardName: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    getRandomWizardCoatColor: getRandomElement(COAT_COLORS),
    getRandomWizardEyesColor: getRandomElement(EYES_COLORS)
  };
};

// Получить случайных магов
var getRandomWizards = function (num) {
  var randomWizards = [];
  for (var i = 0; i < num; i++) {
    randomWizards.push(createRandomWizard());
  }
  return randomWizards;
};

// Отрисовать одного мага
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.getRandomWizardName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.getRandomWizardCoatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.getRandomWizardEyesColor;
  return wizardElement;
};

// добавляем магов
var addWizards = function (parent, fragment, wizards) {
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  parent.appendChild(fragment);
};

var wizards = getRandomWizards(4);
var fragment = document.createDocumentFragment();
addWizards(similarListElement, fragment, wizards);
