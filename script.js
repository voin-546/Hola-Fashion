$(".single-item").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  let burger = document.querySelector(".burger");
function show() {
    let header = document.querySelector("header");
    header.classList.toggle("show");
  }