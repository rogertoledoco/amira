// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Carrusel
const track = document.getElementById('carouselTrack');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dotsWrap = document.getElementById('dots');

const slides = Array.from(track.children);
const total = slides.length;
let index = 0;

// Crear dots
slides.forEach((_, i) => {
  const b = document.createElement('button');
  if (i === 0) b.classList.add('active');
  b.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(b);
});

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dotsWrap.querySelectorAll('button').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}

function goTo(i) {
  index = (i + total) % total;
  update();
}

prev.addEventListener('click', () => goTo(index - 1));
next.addEventListener('click', () => goTo(index + 1));

// Auto-play
setInterval(() => goTo(index + 1), 4500);
document.querySelectorAll('.card').forEach(card => {
  const url = card.dataset.img; // toma data-img del <article>
  const thumb = card.querySelector('.thumb');
  if (url && thumb) {
    thumb.style.backgroundImage = `url("${url}")`;
    thumb.classList.add('loaded');
  }
});
