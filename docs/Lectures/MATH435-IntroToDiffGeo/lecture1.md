---
title : Lec1:Metric Space, Vector Space and Norms
nav_order : 1
parent : Math435 Intro Diff Geo
date: 2025-01-19
modified: 2025-01-19
---
# Lecture 1  
## Metric Space
$(X, d)$, $X$ is non-empty. 
$d$ is a metric function. $d: X \times X \to \mathbb{R}$  
$d(a,b) = $ distance between $a$ and $b$.  
### Properties of Metric Space
1) Symmetry  
$d(x,y) = d(y,x)$  
2) Itself  
$d(x,x) = 0$  
3) Positivity  
If $x \ne y$, $d(x,y) >0$  
4) Triangle Inequality  
$d(x,y) + d(y,z) \ge d(x,z)$  

#### Example
* $$(\mathbb{R}, d(x,y) = |x-y|)$$  
* $$(\mathbb{R}^2, d_1(u,v) = (|u_1 - v_1| + |u_2 - v_2|))$$  

## Vector Space  
* $$ V - $$(non-empty vector set, $+$, scalar mutliplication)  

### Axioms
[Vector Space Wikipedia](https://en.wikipedia.org/wiki/Vector_space)

## Norm and Inner products 
A norm on $V$ is a map $$\| \cdot \|: V \to \mathbb{R}$$

### Metric Induced from Norm
$$ d_{\| \cdot \|}(x,y) := \| x-y \|$$  

**HW** check this is a metric  
**HW** Define vector subtraction rigorously as a function $$ V \times V \to V $$ using the inverse and addition
* Subtraction $-(a,b) := a + (-b)$

### Observation 
* $$d_{\| \|_2}= d_2$$
* $$d_{\| \|_1}= d_1$$