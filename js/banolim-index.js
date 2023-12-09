let swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});


// function modal(selector, selector2, display){
//   document.querySelector(selector).style.display = display
//   document.querySelector(selector2).style.display = display
// }

// E쿠폰 팝업
//  document.querySelector('.popup_open_btn').addEventListener('click', function(){
//   modal(".modal-wrap", ".back-bg", "block");
//  });
//  document.querySelector('.modal-close').addEventListener('click', function(){
//   modal(".modal-wrap", ".back-bg", "none")
//  });
// 로그인팝업
// document.querySelector('.popup_btn').addEventListener('click', function(){
//   modal(".lmodal-wrap", ".back-BG", "block");
//  });
//  document.querySelector('.modalClose').addEventListener('click', function(){
//   modal(".lmodal-wrap", ".back-BG", "none")
//  });
function modalOpen() {
  document.querySelector('.lmodal-wrap').style.display = 'block';
  document.querySelector('.back-BG').style.display = 'block';
}

function modalclose(){
  document.querySelector('.lmodal-wrap').style.display = 'none';
  document.querySelector('.back-BG').style.display = 'none';
}

  document.querySelector('.popup_btn').addEventListener('click', modalOpen);
  document.querySelector('.modalClose').addEventListener('click',modalclose);





const $Navbar = document.querySelector(".suvbtn")
const $Subbar = document.querySelector(".submenu")

$Navbar.addEventListener("click",()=>{
  $Subbar.classList.toggle("on")
})

const $mber = document.querySelector(".m-ber")
const $nber = document.querySelector("n-ber")
const $mbtn = document.querySelector(".m-btn")
const $nmbtn = document.querySelector(".nm-btn")
function toggleVisibility(event) {
  if (event.target === $mbtn) {
      $mber.style.display = 'block';
      $nber.style.display = 'none';
  } else if (event.target === $nmbtn) {
      $mber.style.display = 'none';
      $nber.style.display = 'block';
  }
}

$mbtn.addEventListener('click', toggleVisibility);
$nmbtn.addEventListener('click', toggleVisibility);