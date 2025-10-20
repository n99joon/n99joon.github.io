---
title : Summary of Topics
nav_order : 0
parent : Math435 Intro Diff Geo
date: 2025-02-04
modified: 2025-02-07
---
# Lecture 1  
### Metric Space
### Vector Space
### Norm 
### $$d(x,y) := \| x-y \|$$ is a metric
### Examples of Norms

# Lecture 2
### Inner Product 
### Using inner product $$<z, \cdot>$$ to find perpendicular plane to $z$
### $<z,  \cdot>$ is a linear map 
### Define Norm from Inner Prod
The triangle inequality of the inner prod induced norm is proved using Cauchy Schwartz
### Proof of Cauchy Schwartz  
Write $$f(t) := \| x + ty \| ^2$$ as a function of how norm squared changes as one of the vector scales up, complete the squares and find the minimum point. (Based on the fact that norm is convex function and there exists a global minimum)
### Convergence of Sequences 
### $$x_n \to x \ \& \  x_n \to y \implies x = y$$
### Continuous (Sequence Definition)

# Lecture 3 
### Continuous (Epsilon Delta Def) 
### Prove Eps-Delta Cts <=> Seq. Cts 
### Prove for any linear map T:V -> W of normed vector spaces
1) $T$ is cts  
2) $T$ is cts at 0  
3) $$\exists M > 0$$, s.t. $$ \| Tx\| \le M \| x \|, \forall x \in V$$ 
### A continuous function 
Continuous at every point in its domain

# Lecture 4
### Any linear map of Euclidean spaces is continuous 
prove by showing Bounded 
### Open sets 
### Closed sets
$C$ is closed if $C^c$ is open 

# Lecture 5 
### Union of Open sets is open 
### (Finite) Intersection of Open sets is open
If infinite, $\bigcap_n (-1/n,1/n) = {0}$ which is not open
### $X$ and $\emptyset$ are open and closed 
### Intersection of closed is closed
### Union of Closed is Closed
### Def of cts (cts $\iff f^{-1}(U)$ open $\forall U$ open in $Y$)
Topological definition which can be used in arbitrary topological spaces without metric

# Lecture 6
### Closed <=> Sequentially Closed
Sequentially Closed: For every sequence in $X$ converging to some value $\tilde{x}$, $\tilde{x} \in X$.
### Bounded 
### Sup Inf 
### Compact 
Any sequence in $X$ has a convergent subsequence converging to $x 
\in X$ 
### Bolzano - Weirstrass Theorem 
Every bounded sequence in $\mathbb{R}^n$ has a convergent subsequence.
### Heine-Borel 
$$S \subseteq \mathbb{R}^n \text{ is compact} \iff \text{it is closed and bounded.}$$
### $f:X \to Y$ and $A \in X$ is compact $\implies f(A)$ is compact
f is cts func. 

# Lecture 7
### Def: A set is bounded 
For a specific point $x_0 \in X$, there is a ball centered at $x_0$ that contains $X$
### Compact => Closed and Bounded 
Not bounded $\implies $ for all $x \in X$ we can find a sequence starting from that point not in the ball of any size.  
Fix a starting point and we can find a sequence in $X$ always not in the ball.  
But by compact, there exists a subsequece of that converging to a point in $X$.  
Contradiction. 
### HW: $d(a,\cdot) : X \to R$ is cts.  
### Compact $\implies$ bounded
If not bounded, we can find a sequence diverging to infinity.  
Then every subsequence will also converge to infinity.  
Contradict compactness' "has a converging subsequence" part. 
### Compact $\implies$ Closed 
Use sequentially closed definition.  
For every converging sequence, its subsequence converges to same value.  
By compactness, the converging value is in $X$.  
So, every converging sequence converges to a value in $X$.  
### Ex) Bdd, Closed but not Compact
$d_X(a,b) =$ 1 if $a!=b$ 0 o/w  
X = Natural Numbers  
Bounded : Every point is within distance 1  
Closed: Complement is open interval of R 
Compact: $x_{n+1} = x_n + 1$ has no converging subsequence. (The distance can never be below 1, so no convergence)  
### $X$ compact $\implies f : X \to R$ bounded and has bounds [f(min),f(max)]

### $f$ cts and $X$ compact, $\implies sup(f(X)) \in f(X)$  
=> $f(X)$ compact  
=> $f(X)$ closed and bdd  (by Bdd, sup exists)  
=> The sequence $sup(f(X)) - 1/n$ converges to $sup(f(X))$ and by compact, it is $\in X$. 

### HW: A $\subset$ R closed => sup A $\in$ A  
### HW: [a,b] is compact  
By Boltzano Weirstrass Theorem  
### Equivalent Norms
$$f = id: (\mathbb{R}^n, \| \|_1) \to (\mathbb{R}^n, \| \|_2)$$  
Want continuous in both direction ($f(x)$ and $f^-1(x)$)  
equivalent if  
$\exists m, M$ s.t. $$m \| w \|_1 \ge \| w \|_2 \ge M \| w \|_1, \forall w \in \mathbb{R}^n$$

Prove: Any norm is equivalent to Euclidean Norm  

# Lecture 8 
### Inverse image of Closed is closed  
### Prove there exists a minimum of norm of unit length vector circle S
### Differentiation 
### Linear Maps are Differentiable 
### If differentiable at a, gets unique A (Jacobian Matrix)

# Lecture 9 
### Chain Rule 
### Coordinate Functions  
### Composition of cts functions is cts 
### Composition of Diff func is Diff 
### Prop: $f$ cts at a $\iff$ each $f_i$ is cts at a 
Proof: 
=>  
composite of cts funcs.  
<=  
Use any norm (Equiv. in Euclidean Space) and show addition of distances of each coordinate can sum up to below epsilon.
### If each $f_i$ is diff $\implies$ f is diff 
$$Df|_a = (Df_1|_a, ..., Df_m|_a)$$  
Inverse is also true.  
### Ex) $f(x,y) = x \cdot y$ is diff ($f: \mathbb{R}^2 \to \mathbb{R}$)

# Lecture 10
### Curves in $\mathbb{R}^n$ 
Differentiable curve  
* $$D\gamma \mid _0: \mathbb{R} \to \mathbb{R}^n$$ Linear Map.  
- Means it is a tangent curve to the line at 0  
* $$\gamma'(0) := D\gamma |_0(1)$$  
- The $D\gamma$  gives a direction vector and $(1)$ gives us a specific vector like a unit vector  
* $$\gamma$$ centered at $$p$$ if $$\gamma(0) = p$$  
* $$\gamma$$ tangent to $v$ at $p$ if $\gamma$ based at $p$ and $\gamma'(0) = v$  

### Curves to Evaluate $Df_a(v)$  
$Df \mid _a(v)$ = Tangent plane at $a$ in direction of $v$  
$$Df \mid _a(v) = d/dt \mid_{t=0} f(\gamma _v (t))$$ (rate of change of f along the gamam line at t=0)  
Proof  

### Partial derivative written as differentiating a curve  
### Partial derivatives Commutes for $C^2$
$df/dx_i dx_j = df/dx_j dx_i$

# Lecture 11 
### $$Df\mid _0 (e_1)$$
$$Df\mid _0 (e_1) = \frac{d}{dt} \mid _{t=0} (f(\gamma(t)))$$
The rate change of f in direction of e1 = rate of change of f along the gamma line that is moving in e1

### How to calculate $$Df \mid _0 (e_1 + 2e_2)$$? 
**Method 1.**  
Fix $\gamma$ at 0, make it tangent to $e_1 + 2e_2$ , i.e. (t,2t)   
**Method 2.**   
Linearity of Df + <$e_1, ..., e_n$> = basis of $\mathbb{R}^n$  
$Df(e_1) + 2Df(e_2)$

### Total Derivative & Partial Derivative
Thm: f diff at a => partials exist  
Proof: m=1 case  
Thm: if partial diffs exist at a and cts in the open set, then $Df \mid _a$ exists.  
Proof: Mean Value Theorem Based  
Want to show $$Df{\mid} _a = [\frac{\partial f}{\partial x_1}{\mid} _a, ..., \frac{\partial f}{\partial x_n}{\mid} _a]$$  
$$f(a+h) - f(a) = f(a_1 + h_1, ..., ) - f(a_1, a_2, ..., a_n)$$  
Fix a small h  
Write in telescopic sum  
$$g_1(t) := f(a_1 + t ,..., a_n)$$  
$$g_1(h_1) - g_2(0) = g_1'(c_1) * h_1$$ <- First row of telescopic sum (MVT)  
Triangle Ineq & Cauchy Schwartz

Next class = When does it fail without "cts in the open set" condition

# Lecture 12
### Dimension of $$D^i f$$?
#### $$Hom_{lin}(\mathbb{R}^n,\mathbb{R}^n)$$
Set of all linear maps from Rn to Rm
### smooth function
### smooth functions from subsets of $\mathbb{R}^n$
### Induced Metric
### Equal?  
* Isomorphism of vector spaces  
* Homeomorphism of metric spaces  
* Diffeomorphism  

Let $M$ and $N$ be smooth manifolds. A map $f : M \to N$ is called a diffeomorphism if:

$1)\quad f$ is a bijection,$

$2)\quad f$ is smooth (i.e., $C^\infty$),$

$3)\quad f^{-1}$ is also smooth.$

If such an $f$ exists, we say that $M$ and $N$ are diffeomorphic.

### Manifold
$X \subset \mathbb{R}^N$ is a $k$-dim manifold if $x \in X$, $x \in V$, open in $X$, has $\Phi : U \to V$, $U \subset \mathbb{R}^k$ and its inverse mapping both diffeomorphism. 

# Lecture 13 
### Parametrization & Coordinate Chart
### HW: $g \circ \Phi = id \implies \Phi$ is inj. 
### Inverse Function Theorem 
$f : O_1 \to O_2$ where $O_1, O_2 \subset \mathbb{R}^n$ (Open) be continuously diff ($C^1$). and $a \in O_1$ such that $det(Df \mid _a) \neq 0$ (Or invertible/Full rank).  
Then there exists $V$ nbd of $a$,  
$f: V \to W$ is a diffeomorphism.  
i.e. $f^{-1} : W \to V$ is diff, and $D(f^{-1}) \mid _y = [Df \mid _{f^{-1}(y)}]^{-1}$

If locally slope is not 0, there is an inverse locally (Or injection). (e.g. projection onto y-axis)

# Lecture 14
### Rectangle $A$ / Interior $A^o$ / Boundary $2A$
### Lemma : Bounded by $\mid f(x) - f(y) \mid < n^2 M \mid x - y \mid$
### Inverse Function Theorem
Vibe: $Df \mid _a $ is 'the best linear' Approximate.  
If $Df \mid _a : \mathbb{R}^n \to \mathbb{R}^n$ is a bijection  
then $f: V \to W$ is a bijection.  
### Steps of Inv. Func. Theorem. 
Proof: Assume $Df \mid _a = id$ If not prove for $g = (Df \mid _a) ^{-1} \circ f$ then $Dg \mid _a = id$.  
### HW: 
* $Df : O_1 \to$ Matrices $(\mathbb{R}^{n^2})$ is cts.
* $det : (\mathbb{R}^{n^2}) \to \mathbb{R}$ is cts.  

### $ \mid x_1 - x_2 \mid \le 2 \mid f(x_1) - f(x_2) \mid \forall x_1, x_2 \in U_2$  
$\implies f: U_2 \to Y$ is injective. $f(x_1) = f(x_2) \implies x_1 = x_2$