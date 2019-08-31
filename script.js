const navbarToggle = document.querySelector('.navbar__toggle')
const navbarDropdown = document.querySelector('.navbar__dropdown')

navbarToggle.addEventListener('click', e => {
  navbarDropdown.classList.toggle('show')
})

