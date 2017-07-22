const trigger = document.querySelector('.c-searchbar__trigger')
const searchbar = document.querySelector('.c-searchbar')

trigger.addEventListener('click', function(event) {
  searchbar.classList.toggle('is-open')
  trigger.classList.toggle('is-open')
})
// Remove State on Keypress ESC
document.onkeydown = function(event) {
  if (event.keyCode === 27) {
    searchbar.classList.remove('is-open')
    trigger.classList.remove('is-open')
  }
}
