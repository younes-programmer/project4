let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = function (){
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};
let loginForm = document.querySelector(".login-form");

document.querySelector("#user-btn").onclick = function (){
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = function (){
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
};

window.onscroll = function (){
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
};


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autopaly:{
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });



var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autopaly:{
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
