//показываем окно настроек
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

//записываем массивы
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

//получаем случайный элемент из каждого массива
var getRandomElement = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

//мага получаем
var createRandomWizard = function() {
    return {
        'name': getRandomElement(wizardNames) +' ' getRandomElement(wizardSurnames);
        'coatColor': getRandomElement(coatColors);
        'eyesColor': getRandomElement(eyesColors);
    };
}

//Получить случайных магов
var getRandomWizards = function(num) {
    var randomWizards = [];
    for (i = 0; i < num; i++ ) {
        randomWizards.push(createRandomWizard());
    }   return randomWizards;
};

//Отрисовать одного мага
var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
};

// добавляем магов
var addWizards = function(parent, fragment, wizards) {
    for (i = 0; i < wizards.length; i++) {
        fragment.appendChild(renderWizard(wizards[i]));
        parent.appendChild(fragment);
    }
};

var wizards = getRandomWizards(5);
var fragment = document.createDocumentFragment();
addWizards(similarListElement, fragment, wizards);
