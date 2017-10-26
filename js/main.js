var consulta = window.matchMedia('(max-width: 500px)')
consulta.addListener(mediaQuery)

var $burgerButton = document.getElementById('burger-button')
var $menu = document.getElementById('menu')

function toggleMenu () {
  $menu.classList.toggle('active')
  $burgerButton.classList.toggle('icon-close')
}

function mediaQuery () {
  if (consulta.matches) {
    console.log('si')
    $burgerButton.addEventListener('touchstart', toggleMenu)
    console.log(window.devicePixelRatio)
  } else {
    console.log('no')
    $burgerButton.removeEventListener('touchstart', toggleMenu)
    console.log(window.devicePixelRatio)
  }
}
mediaQuery()
