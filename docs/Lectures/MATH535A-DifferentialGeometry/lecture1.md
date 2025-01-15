---
title : Lec1
nav_order : 1
parent : Math535a Diff Geo
date: 2025-01-14
modified: 2025-01-14
---
# Lecture 1  
## Summary 
Motivation : Do calculus on Nice Toplogical Spaces  
### Example
- Sufaces / Curves in $$\mathbb{R}^3$$ (Integration / Differentiation)

- $$ S^n = \{(x_1, ... , x_{n+1}) | \sum_{i=1}^{n+1} x_i^2 = 1 \} \in \mathbb{R}^{n+1} $$

- Some quotient spaces. $$ S^1 = [0,1] / \{0 \sim 1 \} = \mathbb{R}/\{x \sim x+1\} = \mathbb{R}/ \mathbb{Z} $$  
(Three ways of describing the construction of the circle S1 as a quotient space)  
(1: closed interval [0,1] with 0 glued to 1)  
(2: Any real line with two points equivalent if their difference is integer)  
(3: Same as 2)  

#### quotient space
Let $X$ be a topological space and $\sim$ an equivalence relation on $X$. The quotient space $X / \sim$ is the set of equivalence classes 
$$
[x] = \{ y \in X \mid y \sim x \},
$$
equipped with the quotient topology. The quotient topology is the finest topology that makes the natural projection map 
$$
\pi: X \to X / \sim,
$$
defined by $\pi(x) = [x]$, continuous.

#### Equivalence Relation on a Set
A mathematical way to group elements of the set into classes based on a specific relationship. Formally, an equivalence relation is a binary relation $\sim$ on a set $X$ that satisfies the following three properties:

1. **Reflexivity**: Every element is related to itself.
   $$
   \forall x \in X, \, x \sim x.
   $$

2. **Symmetry**: If one element is related to another, the second is related to the first.
   $$
   \forall x, y \in X, \, x \sim y \implies y \sim x.
   $$

3. **Transitivity**: If one element is related to a second, and the second is related to a third, then the first is related to the third.
   $$
   \forall x, y, z \in X, \, x \sim y \text{ and } y \sim z \implies x \sim z.
   $$

The equivalence relation partitions the set $X$ into equivalence classes, where each class contains elements that are equivalent to each other.


#### Equivalent Class
An equivalence class is a subset of a set $X$ where all elements in the subset are related to each other by an equivalence relation $\sim$. 

Formally, for an element $x \in X$, the equivalence class of $x$ is defined as:

$$
[x] = \{ y \in X \mid y \sim x \}.
$$

**Example: Congruence Modulo 3**  
Let $X = \mathbb{Z}$ (the set of integers) and define the equivalence relation $\sim$ by:

$$
x \sim y \iff x - y \text{ is divisible by } 3.
$$

This is the congruence modulo $3$ relation, often written as:

$$
x \equiv y \pmod{3}.
$$

The class of $0 \pmod{3}$:

$$
[0] = \{ \dots, -6, -3, 0, 3, 6, 9, \dots \}.
$$

### Example Continued
- Spaces coming from patching Euclidean Spaces  
$$ f(z) = z^{1/n} $$ (n-th root of z)  
Above is not well defined as there can be many solutions.

Can be well defined on new modified domain $$ \tilde{\mathbb{C}}_n = \{ (z,k) \mid z \in \mathbb{C}, 1 \le k \le n \} $$

$$
f: \tilde{\mathbb{C}}_n \rightarrow \mathbb{C}, \quad (r e^{i\theta}, k) \mapsto r^{1/n} \cdot e^{i \frac{\theta + 2k\pi}{n}}, \quad \theta \in [0, 2\pi)
$$

### Def: Locally Euclidean Spaces
Let $\mathcal{M}$ be a topolgical space if  
1) It is Hausdorff  
2) For each point $p \in \mathcal{M}$, $\exists$ neighborhood $U$ of $p$ homeomorphic to an open subset in $\mathbb{R}^d$. We say dim $\mathcal{M} = d$. 

#### Hausdorff
A topology space $X$ is Hausdorff if $\forall x \ne y, \exists U_x, U_y$  of $x, y$ s.t. $U_x \cap U_y = \emptyset $  
In other words, it is a type of topological space that distinct points in the space can be "seperated" by disjoint neighborhoods.

#### Homeomorphic 
Two topological spaces are homeomorphic if they are "topologically equivalent". 
Formally, Two topological spaces $X$ and $Y$ are homeomorphic if there exists a homeomorphism between them. A homeomorphism is a function:  
$$ f : X \rightarrow Y $$  
such that: 
1. $f$ is continuous
2. $f$ is a bijection
3. The inverse $f^{-1} : Y \rightarrow X$ is also continuous.  
If such a function $f$ exists, we write:  

$$ X \cong Y $$

Ex) circle and square / coffee cup and doughnut / open interval and a real line $\mathbb{R}$  
Non-Ex) real line $\mathbb{R}$ and circle $S^1$  
Circle is compact while real line is not. 

#### Compact
A topological space $X$ is compact if every open cover of $X$ has a finite subcover. 

### Example of Locally Euclidean Spaces
1. Any open subset in $\mathbb{R}^d$
2. The circle S1 (Globally not euclidean because S1 is closed and compact but locally every arc can be stretched to an open and non-compact set)
3. $S^d \subseteq \mathbb{R}^{d+1}$ is locally Euclidean  
Proof is using Stereographic Projection to show Homeomorphic Neighborhood
4. $$C_+^2 = \{ (x_1, x_2, x_3) \mid x_3^2 = x_1^2 + x_2^2, x_3 \ge 0 \}$$  
It is a cone, we can porject onto x1 X x2 plane. 

### Not Locally Euclidean Examples
1. $$C_{\pm}^2 = \{ (x_1, x_2, x_3) \mid x_3^2 = x_1^2 + x_2^2 \}$$  
There is no homeomorphic projection.  
proof: at the (0,0,0) the neighborhood is not homeomorphic (no bijective linear map) 
2. $$S^1 V S^1 := $$ Two circles joined together  
The origin is not isomorphic  
3. $$ \mathbb{R}_{\text{fat}} = \mathbb{R} \sqcup \mathbb{R} / \{x_{1st} \sim x_{2nd} \mid x \ne 0 \} $$  
The union of neighborhood of 0 of first set and 0 of second set is not emptyset. (So this is not Hausdorff) 

