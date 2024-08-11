let menuHandleOpen = document.getElementById('menu-handle-open')
let menuHandleClose = document.getElementById('menu-handle-close')
let backdropMenu = document.getElementById('backdrop-menu')

menuHandleOpen.addEventListener('click', menuOpen)
menuHandleClose.addEventListener('click', menuClose)

function menuOpen() {
     backdropMenu.classList.add('active')
}

function menuClose() {
     backdropMenu.classList.remove('active')
}