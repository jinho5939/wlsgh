let index = 0;

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const carousel = document.querySelector('.carousel2');

leftButton.addEventListener('click', () => {
  if (index === 0) return;
  index -= 1;
  
  carousel.style.transform = `translate3d(-${600 * index}px, 0, 0)`;
});

rightButton.addEventListener('click', () => {
  if (index === 3) return;
  index += 1;
  
  carousel.style.transform = `translate3d(-${600 * index}px, 0, 0)`;
});


let value = 0;

var emblaNode = document.querySelector(".embla");
var options = { loop: false };
var embla = EmblaCarousel(emblaNode, options);

function setDisplayAppreance(){
  var body = document.querySelector('body'); 

  if(value === 0){  //다크모드로 전환 버튼을 누른 경우
    body.style.backgroundColor = 'rgb(8, 8, 59)';  //배경색 변경
    // <i id="icon" class="fa-regular fa-sun"></i></i>
    value = 1;
  } else { //라이트모드로 전환 버튼을 누른 경우
    body.style.backgroundColor = '#5383e8';
    body.style.color = 'darkblue';
    value = 0;
    
  }
}