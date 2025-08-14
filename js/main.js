// Hamburger Menu Toggle
const toggleBtn = document.querySelector('.navbar_toggleBtn'); // 메뉴 토글 버튼 선택
const menu = document.querySelector('.nav_menu'); // 네비게이션 메뉴 선택
const navbar = document.querySelector('.navbar'); // 네비게이션 바 선택

// 메뉴 토글 버튼 클릭 시 클래스 추가
toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('active');
  toggleBtn.classList.toggle('active');

  // 햄버거 메뉴 활성화 시 스크롤 비활성화
  if (menu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
    navbar.style.backgroundColor = '#fff';
  } else {
    document.body.style.overflow = '';
  }
});

// 모바일 버전 스크롤 할 때 Navbar 배경색 지정
window.addEventListener('scroll', function () {
  // 스크롤 위치에 따라 배경색 변경
  navbar.style.backgroundColor =
    window.scrollY > 0 ? 'rgba(255, 255, 255, 0.95)' : 'transparent';
});

// 버튼 클릭 시 이동하는 스크롤
// document.addEventListener('DOMContentLoaded', function () {
//   var buttonLink = document.querySelector('.button_move');
//   if (buttonLink) {
//     buttonLink.addEventListener('click', function (e) {
//       e.preventDefault(); // 기본 동작인 페이지 이동 방지

//       var target = document.querySelector('#project'); // 목표 div

//       var isMobile = window.innerWidth <= 768; // 화면 크기가 768px 이하이면 모바일로 간주
//       var navbarHeight = document.querySelector('.navbar')
//         ? document.querySelector('.navbar').offsetHeight
//         : 0; // 네비게이션 바 높이 가져오기

//       var offset = isMobile ? navbarHeight - 10 : 0; // 모바일에서만 상단 조정

//       var targetTop = target.getBoundingClientRect().top + window.pageYOffset; // #project의 실제 화면 위치

//       // 부드럽게 스크롤 이동
//       window.scrollTo({
//         top: targetTop - offset,
//         behavior: 'smooth',
//       });
//     });
//   }
// });

// Footer text effect
document.getElementById('copyEmail').addEventListener('click', function () {
  const emailToCopy = 'yuralee3333@gmail.com'; // 복사할 이메일 주소 설정

  // 복사할 텍스트를 임시 textarea에 넣어 클립보드에 복사
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = emailToCopy;
  tempTextarea.style.position = 'fixed';
  tempTextarea.style.opacity = '0';
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextarea);

  // 클립보드 복사가 완료되면 텍스트 변경
  this.textContent = '복사 완료!';

  // 일정 시간 후에 다시 원래의 이메일 주소로 복원 (예: 3초 후)
  setTimeout(() => {
    this.textContent = emailToCopy;
  }, 3000);
});

// Hover 이벤트 처리
const copyEmailElement = document.getElementById('copyEmail');

copyEmailElement.addEventListener('mouseenter', function () {
  if (this.textContent !== '복사 완료!') {
    smoothTextChange(this, '클릭하면 복사가 돼요', 0.2); // 천천히 나타남
  }
});

copyEmailElement.addEventListener('mouseleave', function () {
  if (this.textContent !== '복사 완료!') {
    smoothTextChange(this, 'yuralee3333@gmail.com', 0.2); // 빠르게 사라짐
  }
});

// 텍스트 변경을 부드럽게 하는 함수 (천천히 나타나고 빠르게 사라지게)
function smoothTextChange(element, newText, speed) {
  const currentText = element.textContent; // 기존 텍스트를 저장

  // 텍스트를 변경하기 전에 일시적으로 투명하게 만들기
  element.style.transition = `opacity ${speed}s ease`; // speed에 맞게 transition 속도 조정
  element.style.opacity = 0; // 텍스트가 서서히 사라짐

  // 텍스트가 사라진 후 변경
  setTimeout(() => {
    element.textContent = newText; // 새로운 텍스트로 변경
    element.style.opacity = 1; // 텍스트를 다시 나타나게 함
  }, speed * 1000); // speed에 맞게 시간 설정 (초 단위)
}

// Pinterest Grid image
document.addEventListener('DOMContentLoaded', function () {
  var grid = document.querySelector('.drawing_grid');

  imagesLoaded(grid, function () {
    new Masonry(grid, {
      itemSelector: '.grid-item',
      percentPosition: true, //
      gutter: 16,
    });
  });
});

function setVh() {
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight * 0.01}px`
  );
}
setVh();
window.addEventListener('resize', setVh);
