---
title : Lec2-4 From Book
nav_order : 2
parent : Math535a Diff Geo
date: 2025-01-23
modified: 2025-01-23
---
# Lecture 2-4  
#### Coordinate map and functions  
If $\varphi$ is a homeomorphism of a connected open set $U \subset M$ onto an open subset of $\mathbb{R}^d$, 
$\varphi$ is called a coordinate map, the functions $x_i = r_i \circ \varphi$ (ith entry) are called the coordinate functions, 
and the pair $(U, \varphi)$ (sometimes denoted by $(U, x_1, \ldots, x_d)$) is called a coordinate system. 

A coordinate system $(U, \varphi)$ is called a cubic coordinate system if $\varphi(U)$ is an open cube about the origin in $\mathbb{R}^d$. 

If $m \in U$ and $\varphi(m) = 0$, then the coordinate system is said to be centered at $m$.

### Differentiable structure $F$ of class $C^k (1 \le k \le \infty)$  
Differentiable structure $F$ of class $C^k (1 \le k \le \infty)$ on a locally Euclidean space $M$ is a collection of coordinate systems $$ \{ U_{\alpha}, \phi_{\alpha}: \alpha \in A \}$$ satisfying three properties:  
(a) $\bigcup_{\alpha \in A} U_\alpha = M$.

(b) $\varphi_\beta \circ \varphi_\alpha^{-1}$ is $C^k$ for all $\alpha, \beta \in A$.

(c) The collection $\mathcal{F}$ is maximal with respect to (b); that is, if $(U, \varphi)$ is a coordinate system such that 
$\varphi \circ \varphi_\alpha^{-1}$ and $\varphi_\alpha \circ \varphi^{-1}$ are $C^k$ for all $\alpha \in A$, then $(U, \varphi) \in \mathcal{F}$.



#### Second-Countable  
In topology, a topological space is said to be second countable if its topology has a countable base. A base for a topology is a collection of open sets such that every open set in the topology can be written as a union of elements of the base.  

Stronger than first-countable, because we need a single countable basis for the entire topology. (e.g. a discrete uncountable space, which is not second-countable because the collection of singletons (open sets consisting of individual points) is uncountable. However, it is first-countable because each point can have a countable neighborhood basis, such as the singleton set containing the point itself.)

#### Countable Base  
The space has a collection of open sets $$\{B_n\}_{n=1}^\infty$$ that is countable (finite or countably infinite).  
For every open set $U$ in the topology, $U$ can be expressed as a union of sets from this collection.

#### First-Countable  
A topological space is said to be first-countable if each point in the space has a countable neighborhood basis (or countable local base). This means that for every point $x$ in the space, there exists a countable collection of open sets $$\{U_n\}_{n=1}^\infty$$ such that:

1. Each $U_n$ is an open set containing $x$.
2. For any open set $V$ containing $x$, there exists some $U_n$ in the collection such that $U_n \subseteq V$.

### d-dimensional differentiable manifold of class $C^k$  
A $d$-dimensional differentiable manifold of class $C^k$ (similarly $C^\infty$ or complex analytic) is a pair $(M, \mathcal{F})$ consisting of a $d$-dimensional, second countable, locally Euclidean space $M$ together with a differentiable structure $\mathcal{F}$ of class $C^k$. We shall usually denote the differentiable manifold $(M, \mathcal{F})$ simply by $M$, with the understanding that when we speak of the "differentiable manifold $M$", we are considering the locally Euclidean space $M$ with some given differentiable structure $\mathcal{F}$.

* A manifold can be viewed as a triple consisting of an underlying point set, a second countable locally Euclidean topology for this set, and a differentiable structure $\mathcal{F}$.  

* If X is a set, by a manifold structure on X, we shall mean a choice
of both a second countable locally Euclidean topology for X and a differentiable structure.  

#### dual basis  
To perform operations with a vector, we must have a straightforward method of calculating its components. In a Cartesian frame, the necessary operation is the dot product of the vector and the base vector. For example,

$$
\mathbf{x} = x^{1}\mathbf{i}_{1} + x^{2}\mathbf{i}_{2} + x^{3}\mathbf{i}_{3},
$$

where $$\{\mathbf{i}_{1}, \mathbf{i}_{2}, \mathbf{i}_{3}\}$$ is the basis in a Cartesian frame. The components of $\mathbf{x}$ can be found by:

$$
x^{k} = \mathbf{x} \cdot \mathbf{i}_{k}.
$$

However, in a non-Cartesian frame, we do not necessarily have $$\mathbf{e}_{i} \cdot \mathbf{e}_{j} = 0$$ for all $$i \neq j$$. However, it is always possible to find vectors $\mathbf{e}^{i}$ in the dual space such that:

$$
x^{i} = \mathbf{e}^{i}(\mathbf{x}) \qquad (i = 1, 2, 3).
$$

The equality holds when the $\mathbf{e}^{i}$'s are the dual basis of the $\mathbf{e}_{i}$'s. Notice the difference in the position of the index $i$.
  
### Submanifold