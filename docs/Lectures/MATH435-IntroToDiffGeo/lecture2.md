---
title : Lec2:Inner Prod, Convergence, and Continuity
nav_order : 2
parent : Math435 Intro Diff Geo
date: 2025-01-19
modified: 2025-01-19
---
# Lecture 2 
## Inner Product 
A map $$ <\cdot  , \cdot>: V \times V \to \mathbb{R} $$

### Intuition 
Inner product lets us define perpendicular spaces.  
**i.e.)** Fix $$ z \in V$$, $$<z,\cdot>: \mathbb{R}^n \to \mathbb{R}$$  is a function.  
$$<z, \cdot>(w) = <z,w>$$  
It is a linear map, because $$<\cdot, \cdot>$$ is bilinear.  
So, $$z^{\perp} = ker(<z,\cdot>)$$ and it is defined by the $$z$$.  ($$dim(ker) = n-1$$)  

### Inner prod gives norm
$$<\cdot, \cdot>:V \times V \to \mathbb{R}$$  
$$ \to \| \|_{<\cdot, \cdot>} : V \to \mathbb{R} $$ same as $$ z \mapsto <z,z>^{1/2} $$  

## Cauchy Schwartz Inequality 
$$ |<x,y>| \le \|x\|*\|y\| $$  

### Proof: 
Solve $$ f(t) := \| x - ty \| \ge 0 $$  
1) Either make it into square form  
or  
2) Show derivative = 0 at minimum  

### Proof that self inner product is a norm  
Prove triangle inequality $$ \| x+y \| \le \|x\| + \|y\|$$ using Cauchy-Schwartz

## Convergence of Sequences 
$$(X,d)$$ - metric space  
$$\{x_n\}_{n=1}^{\infty} (f:\mathbb{N} \to X) $$  
Sequence of points in a metric space.  
**Def:** $$x_n \to \tilde{x} $$  
if $$\forall \epsilon > 0, \exists N>0 $$ s.t. $$\forall n \ge N, d(x_n, \tilde{x}) < \epsilon $$

## Proposition: $$x_n \to x $$ & $$ x_n \to y \implies x=y$$
**Proof:** Assume $$x \ne y$$  
set $$ \epsilon = d(x,y) / 10 $$  
Then $$\exists N_{\epsilon}, $$ s.t. $$x_n \in B_{\epsilon}(x)$$ $$\forall n \ge N_{\epsilon}$$  ($$B_{\epsilon}(x)$$ is ball of radius of epsilon centered at x)  
After $$max(N_x, N_y)$$, $$d(x_n, x) \le d(x,y) /10 $$ and $$ d(y_n, y) \le d(x,y) / 10 $$  
Using triangle inequality,  
$$ \therefore d(x,y) \le d(x_n,x) + d(x_n, y) = 1/5 d(x,y) $$, which is a contradiction. $$\blacksquare$$

## Continuous  
$$ (x, d_x) \xrightarrow{\text{f}} (y, d_y) $$  
$$f$$ is continuous at the point $$a$$ if for any sequence $$a_n \to a$$, we have that $$f(a_n) \to f(a)$$
