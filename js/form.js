const btn = document.getElementById('button');
const form = document.getElementById('form');

// 체크박스 관련
const checkBoxContainer = document.querySelector('.privacy-info-checkbox');
const checkBox = checkBoxContainer.querySelector('.check-box');
const consentInput = checkBoxContainer.querySelector(
  "input[name='privacyConsent']"
);

checkBoxContainer.addEventListener('click', () => {
  checkBox.classList.toggle('checked'); // 체크박스 상태 토글
  consentInput.value = checkBox.classList.contains('checked')
    ? 'true'
    : 'false';
});

// 폼 제출
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // 필수 입력 값 체크
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !phone || !message) {
    alert('모든 필수 입력 필드를 작성해주세요.');
    return;
  }

  if (consentInput.value !== 'true') {
    alert('개인정보 수집 및 이용에 동의해야 이메일 전송이 가능합니다.');
    return;
  }

  // 전송
  btn.value = '전송중...';
  const serviceID = 'default_service';
  const templateID = 'template_pg5d0wq';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = '이메일 전송';
      alert('메일이 성공적으로 전송되었습니다!');
      form.reset(); // 폼 초기화
      checkBox.classList.remove('checked'); // 체크박스 초기화
      consentInput.value = 'false';
    },
    (err) => {
      btn.value = '이메일 전송';
      alert(JSON.stringify(err));
    }
  );
});
