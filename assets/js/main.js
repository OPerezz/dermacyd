let menuHandleOpen = document.getElementById('menu-handle-open')
let menuHandleClose = document.getElementById('menu-handle-close')
let backdropMenu = document.getElementById('backdrop-menu')
let selectorLine1 = document.getElementById('flexRadioDefault1')
let selectorLine2 = document.getElementById('flexRadioDefault2')
let carouselAdult = document.getElementById('carousel-adult')
let carouselChild = document.getElementById('carousel-child')

menuHandleOpen.addEventListener('click', menuOpen)
menuHandleClose.addEventListener('click', menuClose)
selectorLine1.addEventListener('change', lineProducts)
selectorLine2.addEventListener('change', lineProducts)

function menuOpen() {
     backdropMenu.classList.add('active')
}

function menuClose() {
     backdropMenu.classList.remove('active')
}

function lineProducts() {
     if (selectorLine1.checked == true) {
          selectorLine1.parentElement.classList.add("active-selector")
          selectorLine2.parentElement.classList.remove("active-selector")
          carouselAdult.style.display = "block"
          carouselChild.style.display = "none"

     } else {
          selectorLine1.parentElement.classList.remove("active-selector")
          selectorLine2.parentElement.classList.add("active-selector")
          carouselAdult.style.display = "none"
          carouselChild.style.display = "block"


     }
     $('.slick-carousel-products').slick('refresh')
}

$('.slick-carousel-products').slick({
     infinite: false,
     slidesToShow: 3,
     responsive: [
          {
               breakpoint: 1200,
               settings: {
                    arrows: true,
                    slidesToShow: 2
               }
          },
          {
               breakpoint: 768,
               settings: {
                    arrows: true,
                    slidesToShow: 1
               }
          }
     ]
});



