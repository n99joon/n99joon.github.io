---
title : Lec2
nav_order : 3
parent : Math535a Diff Geo
date: 2025-01-23
modified: 2025-01-23
---
# Lecture 2 
#### Locally Euclidean
Hausdorff & Each point is locally homeomorphic.  

#### Quotient Topology
Coarsest topology (The topology with the fewest open sets that still ensures the continuity of the projection map) such that the map $X \to \tilde{X}$ is continuous.  

#### Coordinate Map 
If $X: u \to \mathbb{R}^d$ is a homeomorphism that maps neighborhood $u$ of $p \in M$ to open (sub)set of $\mathbb{R}^d$ then $X$ is called coordinate map.  

#### Coordinate Function
$x_i = \pi_i \circ x : u \to \mathbb{R}$  (i-th entry of coordinate map)

#### Coordinate Chart 
$(u,X)$ The mapping 

#### Coordinate System
The coordinates assigned to points in $u$ via the map $X$ (or the book calls the chart as the coordinate system)

**Remarks:** These are defined "Locally".  

$S^1$ locally Euclidean to $\mathbb{R}$ but no one chart works.
(I think talking about stereographic projection from north/south poles i.e. two charts) 

#### Differentiable structure $\mathcal{F}$ of class $C^k$ on a locally Euclideans space $M$  
Collection of coordinate systems satisfying three conditions.
Find in the Lec2-4 book notes  
(2)  
$\forall (u,X), (u',X')$  
$X \circ X^{-1}$ is $C^k$ differenciable  
**To be rigorous:** $$X \big|_{U \cap U'} \circ X'^{-1} \big|_{X'(U \cap U')}$$. (only the intersections and the image of it)  

#### Whitney's Approximation Theorem  
:= Any $C^1$ differentiable structure on a manifold can be approximated by a $C^k$ or $C^{\infty}$ structure.  

(Meaning the topology and differentiable structure of the $C^1$ manifold can be "upgraded/smmoothed" to a smoother structure.)

**Why it works:** 
The $C^1$ differentiability ensures that the manifold already has well-defined tangent spaces and a coherent differentiable structure.

While every $C^1$ manifold can be made $C^k$, this is not necessarily true for $C^0$ (topological) manifolds, which might not even admit a $C^1$ structure.

#### Compatible
$F$ and $F'$ are compatible (meaning $\forall (U, X) \in F, (U, Y) \in F'$,  
if $X \circ Y^{-1}$ and $Y \circ X^{-1}$ are smooth, then $(U, Y) \in F$ and $(U, X) \in F'$, so $F = F'$). 

### Is compatibility an equivalance relation?  
Yes. (Satisfies all Reflexivity / Symmetry / Transitivity)  
**Reflexivity:**  
$F$ is compatible with itself because the transition maps between charts within $F$ are smooth by definition of a differentiable structure.

**Symmetry:**  
If $F$ is compatible with $F'$, then $F'$ is compatible with $F$, because the smoothness of $X \circ Y^{-1}$ implies the smoothness of $Y \circ X^{-1}$.

**Transitivity:**  
If $F$ is compatible with $F'$, and $F'$ is compatible with $F''$, then $F$ is compatible with $F''$. The composition of smooth maps is smooth, ensuring smooth transition maps between $F$ and $F''$.

