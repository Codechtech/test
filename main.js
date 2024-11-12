/* Toggle button */
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})

/*Product cards*/
function toggleCard(card) {

    const details = card.querySelector('div:last-child');

    const allCards = document.querySelectorAll('.bg-white');

    allCards.forEach(c => {

        const detail = c.querySelector('div:last-child');

        if (c !== card) {

            detail.classList.add('hidden'); // Collapse other cards

            c.classList.remove('expanded'); // Reset width of other cards

        }

    });

    details.classList.toggle('hidden'); // Toggle the clicked card

    card.classList.toggle('expanded'); // Toggle full width for the clicked card

}

/*swiper testimonials*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
   speed: 400,
   spaceBetween: 30,
   autoplay: {
    delay: 3000,
    disableOnInteraction: false
   },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
    }
  });

  /*scroll up*/
  const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")
    if(this.scrollY >=250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    } else {
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
  }
  window.addEventListener("scroll", scrollUp)
  