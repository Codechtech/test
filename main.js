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