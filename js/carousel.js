function changeSlide(direction, projectId) {
  const projectCard = document.querySelector(`#${projectId}`);
  const images = projectCard.querySelectorAll('.carousel-inner img');
  let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  images[activeIndex].classList.remove('active');
  activeIndex = (activeIndex + direction + images.length) % images.length;
  images[activeIndex].classList.add('active');
  updateDots(activeIndex, projectId);
}

function currentSlide(index, projectId) {
  const projectCard = document.querySelector(`#${projectId}`);
  const images = projectCard.querySelectorAll('.carousel-inner img');
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
  updateDots(index, projectId);
}

function updateDots(activeIndex, projectId) {
  const projectCard = document.querySelector(`#${projectId}`);
  const dots = projectCard.querySelectorAll('.dot');
  dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
}