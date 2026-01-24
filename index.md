---
title: Home
layout: mathjax
nav_order: 1
date: 2024-11-28
---

<style>
.profile-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}

.profile-photo {
  flex: 1 1 250px;
  max-width: 250px;
  text-align: center;
}

.profile-figure img {
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  cursor: zoom-in;
}

.profile-email {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #555;
}

.profile-bio {
  flex: 2 1 400px;
  font-size: 1.05rem;
  line-height: 1.6;
  text-align: justify;
  hyphens: auto;
  text-justify: inter-word;
}

/* ===== Updates ===== */
.updates-section {
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.02rem;
}

.updates-section h2 {
  margin-bottom: 0.5rem;
}

.updates-section ul {
  padding-left: 1.2rem;
}

.updates-section li {
  line-height: 1.6;
}

/* ===== Lightbox modal ===== */
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

.sr-only {
  position: absolute !important;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 1px, 1px);
  white-space: nowrap;
  border: 0;
}
</style>

<div class="profile-container">
  <div class="profile-photo">
    <figure class="profile-figure">
      <img
        id="profileImg"
        src="/assets/images/profile_photo.jpg"
        alt="Joonyoung (Aaron) Bae"
        data-caption="At USC Ginsburg Hall - Photo by Xinyu Mao"
      />
      <figcaption class="sr-only">
        Joonyoung (Aaron) Bae
      </figcaption>
    </figure>
    <div class="profile-email">
      Email: joonyoungbae.aaron [at] gmail [dot] com
    </div>
  </div>

  <div class="profile-bio">
    <p>
      Hello! I am <strong>Joonyoung (Aaron) Bae</strong>, a final year Master student at the
      University of Southern California (USC)
      studying Computer Science and a member of the
      <a href="https://viterbi-web.usc.edu/~cstheory/" target="_blank" rel="noopener noreferrer">
        USC CS Theory Group.
      </a>
      I am very fortunate to be working with
      <a href="https://csmukherjee.github.io/home/" target="_blank" rel="noopener noreferrer">
        Chandra Sekhar Mukherjee
      </a>
      and be advised by
      <a href="https://sites.google.com/site/jiapeng0708/home" target="_blank" rel="noopener noreferrer">
        Prof. Jiapeng Zhang
      </a>
      on the topics of clustering and visualization of high-dimensional biological data.
    </p>

    <p>
      I received my bachelor's degree from The University of Hong Kong (HKU),
      with major in Computer Engineering and minor in Mathematics.
    </p>

    <p>
      My research interest lies in capturing and explaining the structure and phenomena
      underlying real-world processes. From this perspective, I have analyzed
      high-dimensional biological and image data using mathematical tools from
      differential geometry, statistical machine learning, and spectral graph theory.
      More broadly, I am also interested in the areas of algorithmic game theory and
      optimization.
    </p>
  </div>
</div>

<hr style="margin: 3rem 0;">

<section class="updates-section">
  <h2>Updates</h2>
  <ul>
    <li>
      Our paper “<em>CoreSPECT: Enhancing Clustering Algorithms via an Interplay of Density and Geometry</em>” will be presented at <strong>AISTATS 2026</strong>!
    </li>
  </ul>
</section>

<!-- ===== Modal Lightbox HTML ===== -->
<div id="imgModal" class="img-modal" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="img-modal__content">
    <button class="img-modal__close" aria-label="Close (Esc)" id="imgModalClose">×</button>
    <img class="img-modal__img" id="imgModalImg" alt="">
    <div class="img-modal__caption" id="imgModalCaption"></div>
  </div>
</div>

<script>
(function () {
  const thumb = document.getElementById('profileImg');
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('imgModalImg');
  const modalCaption = document.getElementById('imgModalCaption');
  const btnClose = document.getElementById('imgModalClose');

  function openModal() {
    modalImg.src = thumb.src;
    modalImg.alt = thumb.alt || '';
    modalCaption.textContent = thumb.dataset.caption || thumb.alt || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    btnClose.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    thumb.focus && thumb.focus();
  }

  thumb.addEventListener('click', openModal);
  btnClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();
</script>
