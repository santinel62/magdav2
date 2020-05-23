const rightArrow = document.getElementById('arrow-right')
const leftArrow = document.getElementById('arrow-left')
const carousel = document.getElementsByClassName('testimonials')[0]

const rightClick = () => {
    const maxScrollMove = carousel.scrollWidth - carousel.clientWidth
    
    if (carousel.scrollLeft + 50 < maxScrollMove) {
        carousel.scrollLeft = carousel.scrollLeft + 50
    }
}

rightArrow.addEventListener('click', rightClick)


