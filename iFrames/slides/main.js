// autosize input
autosize(document.querySelectorAll('textarea'));

// input logic

var nameField = document.getElementById('nameField');
var nameInput = document.getElementById('nameInput');

nameInput.onfocus = function () {
  nameInput.setAttribute('placeholder', 'Название компании')
};

nameInput.onblur = function() {
  this.setAttribute('placeholder', 'Название компании ✎');
}

var siteField = document.getElementById('siteField');
var siteInput = document.getElementById('siteInput');

siteInput.onfocus = function () {
  siteInput.setAttribute('placeholder', 'Адрес сайта')
};

siteInput.onblur = function() {
  this.setAttribute('placeholder', 'Адрес сайта ✎');
}

// fullscreen
document.querySelector('#fullscreen-toggler').onclick = function() {
  if (!document.fullscreenElement) {
    document.querySelector('.container').requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
