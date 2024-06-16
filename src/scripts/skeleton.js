let sliderDestaques = document.querySelectorAll(".slider__destaques-loading");
let swiperMovies = document.querySelectorAll(".swiperPosterMovies");
let cardsMovies = document.querySelectorAll(".cardsMoviePoster");

window.addEventListener('load', () => {
    sliderDestaques.forEach(item => {
        item.classList.remove("slider__destaques-loading")
    })
    swiperMovies.forEach(item => {
        item.classList.remove("swiperPosterMovies")
    })
    cardsMovies.forEach(item => {
        item.classList.remove("cardsMoviePoster")
    })
});