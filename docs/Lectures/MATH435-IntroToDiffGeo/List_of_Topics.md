---
title : _List_of_Topics
nav_order : 0
parent : Math435 Intro Diff Geo
date: 2025-02-04
modified: 2025-02-04
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
Write $$f(t) := \| x + ty \| ^2$$ as a function of how norm squared changes changes as one of the vector scales up, complete the squares and find the minimum point. (Based on the fact that norm is convex function and there exists a global minimum)
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
