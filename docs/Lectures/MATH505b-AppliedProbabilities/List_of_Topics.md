---
title : Summary of Topics
nav_order : 0
parent : Math505b Applied Probability
date: 2025-02-07
modified: 2025-02-07
---
# Lecture 11
### Stationary Distribution
Def.  
(i) Sum up to 1  
(ii) one more step still the same  
### Lemma: If started from $\pi$ then it is $\pi$ for all next iterations  
### Question: Existence? Uniqueness? Convergence?  
Conv: Can do Monte Carlo (Define domain of possible inputs / Generate random inputs over distr. / Perform deterministic algorithm on inputs / Aggregate the results) starting from random distribution and test  

### The transient states:
Recall: $S = T \sqcup C_1 \sqcup C_2 \sqcup ...$    
Where $T$ = set of transient nodes  
$C_i$ = set of closed(never go out) and irreducible(Communicates with all other nodes in same group) recurrent nodes  
Any transient k will only be visited finitely many times,  
$\implies \mathbb{1}_{X_n=k} = 0$ for n large  
So $P(X_n = k) \to 0$ as $n \to \infty$  
That is, $\pi_k = 0, \forall k \in T$  

**Which part is not obvious in Real Analysis?**
The non-obvious step (to someone without measure-theoretic background) is that pointwise (almost sure) convergence of random variables to 0 implies convergence of their expectations to 0—provided the sequence is dominated by an integrable bound (or uniformly bounded, which is a special case).  

#### Almost surely = happens with prob=1 (Except on a set of zero probability) in infinity 
e.g.) getting a head in infinite coin toss / getting an irrational number from sampling from [0,1]  

### Lemma: Existance of pi of Rec Nodes.
Rec. nodes have a stationary distribution.  
Wrong Proof:  
Saying P has eigenvalue of 1, so $P^T$ should also have a vector of eigenvalue 1.  
True but eigenvector can be negative. 
(Why can't be complex?)  
if $\pi = \pi^1 + i \pi^2$, then the real part itself is an eigenvector.

### 4. Uniqueness  
No, if two disconnect nodes  

### Thm
$$ supp(\pi) := { k \in S : \pi_k > 0}
Let $S = T \sqcup C_1 \sqcup C_2 \sqcup ...$    
Then $\pi$ is stationary $\iff \pi = \sum_l \lambda_l \pi_l$, where 
$l = C_i$,  
(i) Sum of lambda = 1 & >=0,  
(ii) Each $\pi_l$ is stationary with $supp(\pi_l) = C_l$