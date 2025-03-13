const $html = document.querySelector('html');
const $i = document.querySelector('i');

function darkMode() {
$html.addEventListener('click', () => {
  $i.classList.toggle('fa-moon');
  $i.classList.toggle('fa-sun');
});
$i.addEventListener('change', function() {
    $html.classList.toggle('dark-mode');
  });
}