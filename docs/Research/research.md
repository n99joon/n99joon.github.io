---
title : Research
nav_order : 2
---

I am currently working on (1) observing interesting structures or pattern in high-dimensional biology data, (2) devising clustering/visualization algorithms to exploit them, and (3) theoretically formulating the model and performance guarantee. Below are main results: 

<hr style="margin: 2rem 0;">

<!-- ======================== Project 1: CoreSPECT ======================== -->
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; margin-top: 2rem;">
  <div style="flex: 1 1 300px; text-align: center;">
    <img src="/assets/images/corespect.png" alt="CoreSPECT Overview"
         style="max-width: 100%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>

  <div style="flex: 1 1 400px; max-width: 550px; text-align: justify; hyphens: auto; text-justify: inter-word;">
    <h2 style="margin-top: 0;">
      <a href="https://arxiv.org/pdf/2507.08243" target="_blank" rel="noopener noreferrer" style="color: black;">
        <b>CoreSPECT: Enhancing Clustering Algorithms via an Interplay of Density and Geometry</b>
      </a>
    </h2>

    <p style="margin-top: 0.8rem; margin-bottom: 1rem; font-style: italic; color: #555;">
      <b>Chandra Sekhar Mukherjee*</b>, <b>Joonyoung Bae*</b>, and <b>Jiapeng Zhang</b> (* Equal Contribution)
    </p>

    <p>
      <b>CoreSPECT</b> (Core Space Projection-based Enhancement of Clustering Techniques) introduces a unified framework integrating
      <i>density estimation, stable core extraction, and label propagation</i> to robustly identify multi-scale structures in complex data.
      By leveraging <b>relative centrality</b>, it achieves interpretable and geometry-aware clustering performance
      across both biological and image datasets, with initial theoretical guarantees.
    </p>
  </div>
</div>

<hr style="margin: 2rem 0;">

<!-- ======================== Project 2: CoreMAP ======================== -->
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; margin-top: 2rem;">
  <div style="flex: 1 1 300px; text-align: center;">
    <video
      src="/assets/images/coremap.mp4"
      autoplay
      loop
      muted
      playsinline
      style="max-width: 100%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    </video>
  </div>

  <div style="flex: 1 1 400px; max-width: 550px; text-align: justify; hyphens: auto; text-justify: inter-word;">
    <h2 style="margin-top: 0;">
      <b>CoreMAP: Visualization Algorithm for Non-Linear Manifold Data with Core-Periphery Structure</b>
    </h2>

    <p style="margin-top: 0.8rem; margin-bottom: 1rem; font-style: italic; color: #555;">
      <b>Chandra Sekhar Mukherjee</b>, <b>Joonyoung Bae</b>, and <b>Jiapeng Zhang</b>
    </p>

    <p>
      <b>CoreMAP</b> (Core-based Manifold Approximation and Projection) is a new visualization tool that enables hierarchical display of most-to-least separable points by incorporating
      a novel anchoring idea and clustering results on the core nodes into the attraction–repulsion dynamics of UMAP.
    </p>

    <p>
      It is currently under development, but the prototype can be found in the
      <a href="https://pypi.org/project/cplearn/" target="_blank" rel="noopener noreferrer" style="color: black;">
      cplearn</a> Python package.
    </p>
  </div>
</div>

<hr style="margin: 2rem 0;">

<!-- ======================== Project 3: CoreFlow (dummy example) ======================== -->
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; margin-top: 2rem;">
  <div style="flex: 1 1 300px; text-align: center;">
    <img src="/assets/images/social.jpg" alt="Social Overview"
         style="max-width: 100%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>

  <div style="flex: 1 1 400px; max-width: 550px; text-align: justify; hyphens: auto; text-justify: inter-word;">
    <h2 style="margin-top: 0;">
    <a href="/assets/files/social_choice_clustering.pdf" target="_blank" rel="noopener noreferrer" style="color: black;">
        <b>Justified Representation based Graph Centrality and Clustering</b>
      </a>
      
    </h2>

    <p style="margin-top: 0.8rem; margin-bottom: 1rem; font-style: italic; color: #555;">
      <b>Joonyoung Bae</b>, <b>Anish Jayant</b>, and <b>Chandra Sekhar Mukherjee</b> (in alphabetical order)
    </p>

    <p>
      By viewing nodes on the graph as voters/candidates and the edges as approval ballots, we devised a new graph centrality measure that guarantees balancedness of various size clusters by applying committee selection algorithms that guarantees justified representation. Mainly <b>Method of Equal Shares (MES)</b> algorithm was used as it was the only algorithm with reasonable run-time. The performance was empirically tested and it showed promising outcome compared to other existing centrality measures such as Pagerank.  
    </p>

    <p>
      It was submitted as a final project for <a href="https://david-kempe.com/CS673/index.html" target="_blank" rel="noopener noreferrer">
        CSCI673:Structure and Dynamics of Networked Information
      </a> by Prof. David Kempe and later it appeared on paper <a href="https://arxiv.org/pdf/2502.03545" target="_blank" rel="noopener noreferrer">Papasotiropoulos et. al., 2025</a> with some initial theoretical guarantees. 
    </p>
  </div>
</div>

<hr style="margin: 2rem 0;">
