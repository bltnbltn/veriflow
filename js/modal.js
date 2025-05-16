// Get the modal For Branding Design
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var modalImg = document.getElementById('img01');
// var captionText = document.getElementById('caption');

// // Function to handle image click event
// function handleImageClick(evt) {
//   modal.style.display = 'flex';
//   document.body.style.overflow = 'hidden'; // 스크롤 금지
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
//   // Change background color when modal is active
//   modal.style.backgroundColor = 'rgba(26, 27, 28, 0.848)';
// }

// // Assign click event listener to each image
// var images = document.getElementsByClassName('myLogos');
// for (var i = 0; i < images.length; i++) {
//   images[i].addEventListener('click', handleImageClick);
// }

// // Get the <span> element that closes the modal
// modal.addEventListener('click', function () {
//   modal.style.display = 'none';
//   document.body.style.overflow = 'auto'; // 스크롤 허용
//   document.body.style.backgroundColor = 'initial';
// });

// 이미지 hover시에 alt 텍스트 보이기
document.addEventListener('DOMContentLoaded', function () {
  const logos = document.querySelectorAll('.myLogos');

  logos.forEach(function (logo) {
    logo.addEventListener('mouseenter', function () {
      const altText = this.getAttribute('alt');
      const altCaption = document.createElement('div');
      altCaption.classList.add('altCaption');
      altCaption.textContent = altText;
      this.parentNode.appendChild(altCaption);
    });

    logo.addEventListener('mouseleave', function () {
      const altCaption = this.parentNode.querySelector('.altCaption');
      if (altCaption) {
        altCaption.remove();
      }
    });
  });
});
