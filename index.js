const $html = document.querySelector('html');
const $i = document.querySelector('i');

function lightMode() {
  $i.classList.toggle('fa-sun');
  $html.classList.toggle('light-mode');
}