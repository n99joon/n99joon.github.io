---
title : Lec3:Continuous and Convergence
nav_order : 3
parent : Math435 Intro Diff Geo
date: 2025-01-19
modified: 2025-01-19
---
# Lecture 3
## Continuous at a point
1) Sequence definition  
$$f : X \to Y $$ function between metric spaces. $$a\in X$$.  
$$f$$ is cts at $$a$$ if for any sequence,  
$$\{a_n\}_{n=1}^{\infty} \to a, f(a_n) $$ converges to $$f(a)$$.  

2) $$\epsilon - \delta$$ definition  
for any $$\epsilon > 0, \exists \delta$$ s.t. for all $$x \in B_{\delta}(a), f(x) \in B_{\epsilon}(a)$$     $$[<=>f(B_{\delta}(a)) \subset B_{\epsilon}(f_\epsilon)]$$ (The image of domain is inside the ball of epsilon)

### Proposition (1) <=> (2)  
1) Prove 1) => 2)  
Say $$f$$ is "sequence cts" at $$a$$. Assume 2) does not hold. (Proof by contradiction)  
Then, it means $$\exists \epsilon$$ s.t. $$ \forall \delta > 0, \exists x_\delta \in B_{\delta}(a)$$ and $$f(x_\delta) \notin B_{\epsilon}(f(a))$$  
Let $$\epsilon_0$$ be that epsilon and define some sequence $$(x_n)$$ that satisfies $$|x_n - a| < 1/n$$ and $$|f(x_n) - f(a)| \ge \epsilon_0$$.  
This $${x_n}$$ converges as $$|x_n - a|$$ converges to 0.  
By sequence cts, $$f(x_n) \to f(a)$$ because $$x_n \to a$$ but it contradicts. So contradiction. 

2) Prove 2) => 1)  
* Sequence $${x_n}$$ converges to $$a$$ (for any delta, there exists $$N$$, s.t. $$\forall n \ge N$$, $$\mid x_n - a \mid < \delta$$)  
* By 2), for any epsilon, $$\exists \delta$$ s.t. $$\mid x_n - a \mid < \delta \implies \mid f(x_n) - f(a) \mid < \epsilon$$. 
* Combined shows if $${x_n} \to a$$, then $$f(x_n) \to f(a)$$. 

## Normed Vector Space  
$$(V | l_v), (W | l_w)$$ are normed vector spaces  
$$T:V \to W$$, is a linear map.  
Then the following are equivalent  
1) $T$ is cts.  
2) $T$ is cts at 0.  
3) $$\exists m>0$$, s.t. $$\|Tx\| \le m\|x\|, \forall x \in V$$. 

* Function is cts. := It is cts at every point in its domain.  

#### Proof 
(1) <=> (2) is easy (Do translation(shift/move) to 0)
(2) <=> (3):  
1. (2) => (3)  
If continuous, $$\exists \delta$$ s.t. $\mid x - 0 \mid < \delta \implies \mid T(x) - T(0) \mid < \epsilon = 1$ (for specific epsilon = 1)  
$$\therefore \forall x \in B_\delta (0), \| Tx \| < 1$$  
set $$\tilde{x} = \delta/2 * x/{\| x \|}$$ (rescale the vector x with length $\delta/2$, so it is inside the ball)  
$$\| T \tilde(x) \| < 1$$  
$$ \implies \| T (\delta/2 * x/{\| x \|}) \| < 1$$  
$$ \implies \| Tx \| < 2*{\| x \|} / \delta $$  
set $$m = 2/\delta$$ and this delta changes for every function.  
2. (2) <= (3)  
Assume $$\| T(x) \| \le m \| x \| $$.  
Let $$ \epsilon > 0$$. Set $\delta = \epsilon / m >0$.  
Then for $$\| x \| < \delta $$,  
$$\| T(x) \| \le m \| x \| < m \delta = \epsilon$$  
