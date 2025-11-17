---
title: Miscellaneous
layout: mathjax
nav_order: 2
---

Besides academics, I enjoy doing music! I am an aspiring Jazz musician as well since it is the musical language to freely express what's in my mind. 

## Choir
HKU St. John’s College Choir — **Conductor (2018)** and **Bass (2017–20)**  
USC Concert Choir — **Bass (2024)**

<div class="gallery">
  <img src="/assets/images/hku_choir2.jpeg" alt="Conducting at HKU Interhall Choir Competition (2018)" data-caption="Conducting at HKU Interhall Choir Competition (2018)">
  <img src="/assets/images/hku_choir1.jpeg" alt="After the Competition (2018)" data-caption="After the Competition (2018)">
  <img src="/assets/images/usc_choir3.png" alt="USC Concert Choir Recital (2024)" data-caption="USC Concert Choir Recital (2024)">
  <img src="/assets/images/usc_choir2.jpeg" alt="Before the Concert in Tijuana, Mexico (2024)" data-caption="Before the Concert in Tijuana, Mexico (2024)">
  <img src="/assets/images/usc_choir1.jpeg" alt="Before the Concert in Tijuana, Mexico (2024)" data-caption="Before the Concert in Tijuana, Mexico (2024)">
</div>

## Band
HKU St. John’s College Band (2017–2020)

<div class="gallery">
  <img src="/assets/images/band1.jpeg" alt="Bass" data-caption="Playing Bass">
  <img src="/assets/images/band2.png" alt="Keyboard" data-caption="Playing Keyboard">
</div>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
}
.gallery img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0,0,0,0.15);
  transition: transform 0.25s ease;
}
.gallery img:hover {
  transform: scale(1.05);
}

/* ===== Modal Lightbox ===== */
.img-modal {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.8);
  z-index: 9999;
}

.img-modal.open { display: flex; }

.img-modal__content {
  position: relative;
  max-width: min(90vw, 900px);
  max-height: 90vh;
  text-align: center;
}

.img-modal__img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.35);
}

.img-modal__caption {
  margin-top: 0.75rem;
  color: #eee;
  font-size: 0.95rem;
}

/* Navigation arrows */
.img-modal__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.2rem;
  color: white;
  cursor: pointer;
  user-select: none;
  background: rgba(0,0,0,0.3);
  border-radius: 50%;
  padding: 0.3rem 0.7rem;
  transition: background 0.2s;
}
.img-modal__nav:hover { background: rgba(0,0,0,0.6); }
#prevBtn { left: -3rem; }
#nextBtn { right: -3rem; }

.img-modal__close {
  position: absolute;
  top: -12px;
  right: -12px;
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 999px;
  cursor: pointer;
  background: #fff;
  box-shadow: 0 3px 10px rgba(0,0,0,0.25);
  font-size: 1.1rem;
  line-height: 1;
}
.img-modal__close:focus { outline: 2px solid #4a90e2; }

@media (max-width: 768px) {
  #prevBtn, #nextBtn { display: none; }
}
</style>

<!-- ===== Modal Lightbox HTML ===== -->
<div id="imgModal" class="img-modal" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="img-modal__content">
    <button class="img-modal__close" aria-label="Close (Esc)" id="imgModalClose">×</button>
    <span id="prevBtn" class="img-modal__nav">❮</span>
    <span id="nextBtn" class="img-modal__nav">❯</span>
    <img class="img-modal__img" id="imgModalImg" alt="">
    <div class="img-modal__caption" id="imgModalCaption"></div>
  </div>
</div>

<script>
(function () {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('imgModalImg');
  const modalCaption = document.getElementById('imgModalCaption');
  const btnClose = document.getElementById('imgModalClose');
  const btnPrev = document.getElementById('prevBtn');
  const btnNext = document.getElementById('nextBtn');
  const images = Array.from(document.querySelectorAll('.gallery img'));
  let currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    const img = images[currentIndex];
    modalImg.src = img.src;
    modalImg.alt = img.alt || '';
    modalCaption.textContent = img.dataset.caption || img.alt || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    openModal(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openModal(currentIndex);
  }

  images.forEach((img, i) => {
    img.addEventListener('click', () => openModal(i));
  });

  btnClose.addEventListener('click', closeModal);
  btnNext.addEventListener('click', showNext);
  btnPrev.addEventListener('click', showPrev);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowRight') showNext();
    else if (e.key === 'ArrowLeft') showPrev();
  });
})();
</script>
