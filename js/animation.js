document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.scroll_fadeIn');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Creation 이미지 한개씩 나타나기

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.grid-item img');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.5 }
  ); // 50% 보일 때 작동

  images.forEach((img) => {
    observer.observe(img);
  });
});
