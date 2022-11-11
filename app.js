const background = document.querySelector(".carousel-background");
const slidesContainer = document.querySelector(".carousel-slides");
let slides = document.querySelectorAll(".carousel-slide");
let buttons = document.querySelectorAll(".carousel-button");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".previous-btn");
// const dotsNav = document.querySelector(".carousel-dots");
// const dots = Array.from(dotsNav.children);

slides = Array.from(slides);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`
    
})

const moveToSlide = (slideContainer, currentSlide, targetSlide) => {
    slidesContainer.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove("current-slide")
    targetSlide.classList.add("current-slide") 
}

//move slides to the left when I click left

prevBtn.addEventListener("click", e => {
    const currentSlide = slidesContainer.querySelector(".current-slide")
    const prevSlide = currentSlide.previousElementSibling

    moveToSlide(slidesContainer, currentSlide, prevSlide)
})

//move slides to the right when I click right

nextBtn.addEventListener("click", e => {
    const currentSlide = slidesContainer.querySelector(".current-slide")
    const nextSlide = currentSlide.nextElementSibling
    
    moveToSlide(slidesContainer, currentSlide, nextSlide)
})

// Show arrows when hovered
background.addEventListener("mouseover", () => {
    buttons = Array.from(buttons)
    buttons.map((button) => {
        button.style.display = "block"
    })
})

// Hide arrows when not hovered
background.addEventListener("mouseout", () => {
    buttons = Array.from(buttons)
    buttons.map((button) => {
        button.style.display = "none"
    })
})



