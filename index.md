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
  flex-wrap: wrap;          /* makes it responsive */
  gap: 2rem;                /* spacing between photo and text */
  margin-top: 2rem;
}

.profile-photo {
  flex: 1 1 250px;          /* grow/shrink, min width */
  max-width: 250px;         /* optional */
  text-align: center;
}

.profile-photo img {
  width: 100%;
  border-radius: 50%;       /* makes it circular */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.profile-email {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #555;
}

.profile-bio {
  flex: 2 1 400px;          /* take more space for text */
  font-size: 1.05rem;
  line-height: 1.6;
  text-align: justify;      /* ✅ makes text edges align neatly */
  hyphens: auto;            /* ✅ allows natural word breaks */
  text-justify: inter-word; /* ✅ evenly distributes spacing */
}
</style>

<div class="profile-container">
  <div class="profile-photo">
    <img src="/assets/images/profile.jpg" alt="Joonyoung (Aaron) Bae">
    <div class="profile-email">
      Email: joonyoungbae.aaron [at] gmail [dot] com
    </div>
  </div>

  <div class="profile-bio">
    <p>
      Hello! I am <strong>Joonyoung (Aaron) Bae</strong>, a final year Master student at the
      University of Southern California (USC)
      studying Computer Science and member of the
      <a href="https://viterbi-web.usc.edu/~cstheory/" target="_blank" rel="noopener noreferrer">USC CS Theory Group</a>.
      I am very fortunate to be working with
      <a href="https://csmukherjee.github.io/home/" target="_blank" rel="noopener noreferrer">Chandra Sekhar Mukherjee</a>
      and be advised by
      <a href="https://sites.google.com/site/jiapeng0708/home" target="_blank" rel="noopener noreferrer">Prof. Jiapeng Zhang</a>
      on the topics of clustering and visualization of high-dimensional biological data.
    </p>

    <p>
      I received my bachelor's degree from The University of Hong Kong (HKU), with major in Computer Engineering and minor in Mathematics.
    </p>

    <p>
      My research interest lies in capturing/explaining structure/phenomena observed in real world processes. I have approached analysis of high dimensional biological data and image data from this perspective using mathematical tools from differential geometry, statistical machine learning, and spectral graph theory. In beyond, I am also interested in domains of computer science such as algorithmic game theory and optimization which are of similar taste. 
    </p>
  </div>
</div>
