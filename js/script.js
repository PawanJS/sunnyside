'use strict';
const menuBtn = document.querySelector('.js-menu-icon');

menuBtn.addEventListener('click', function () {
  document.querySelector('.js-menu-list').classList.toggle('active');
});
