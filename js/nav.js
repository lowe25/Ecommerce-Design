const toggleButton = document.getElementsByClassName('nav-burger')[0]
const navbarLinks = document.getElementsByClassName('nav-list')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})