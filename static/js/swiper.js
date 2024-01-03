const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 15,
    slidesPerView: 1.5,


    //Use arrow keys to navigate slider
    keyboard: {
        enabled: true
    },
  
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
