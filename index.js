const $html = document.querySelector('html');
const $i = document.querySelector('i');

function darkMode() {
  $i.classList.toggle('fa-sun');
  $html.classList.toggle('dark-mode');
}