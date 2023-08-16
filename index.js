const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

let index = 0;

prevButton.addEventListener('click', () => {
  if (index === 0) return;
  index -= 1;
  
  carousel.style.transform = `translate3d(-${600 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
  if (index === 3) return;
  index += 1;
  
  carousel.style.transform = `translate3d(-${600 * index}px, 0, 0)`;
});


var emblaNode = document.querySelector(".embla");
var options = { loop: false };
var embla = EmblaCarousel(emblaNode, options);

function setDisplayAppreance(self){
  var body = document.querySelector('body'); 
  var btn = document.getElementById('btnDisplayMode'); 
  if(self.value === '다크모드로 전환'){  //다크모드로 전환 버튼을 누른 경우
    body.style.backgroundColor = 'rgb(8, 8, 59)';  //배경색 변경
    body.style.color = '#5383e8'; //css가 적용되지 않은 기본 텍스트 색상 변경
    btn.style.backgroundColor = "yellow"; //버튼의 배경색 변경
    btn.style.color = "rgb(8, 8, 59)"; //버튼의 텍스트 색상 변경
    self.value = '라이트모드로 전환';
  } else { //라이트모드로 전환 버튼을 누른 경우
    body.style.backgroundColor = '#5383e8';
    body.style.color = 'darkblue';
    btn.style.backgroundColor = "rgb(8, 8, 59)";
    btn.style.color = "#5383e8";
    self.value = '다크모드로 전환';
  }
}