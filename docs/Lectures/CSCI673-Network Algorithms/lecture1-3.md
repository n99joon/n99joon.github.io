---
title : Lec1-3:Pagerank, Hits, Community Detection
nav_order : 1
parent : CSCI673 Network Algorithms
date: 2025-01-25
modified: 2025-01-25
---
# Lecture 1-3
## Main Topics
### HITS
Hub score ($h_i$), Authority score ($a_i$) of node $i$:  
update formula=  
$h_i' = \sum_{i \to j} a_j'$  
$a_i' = \sum_{j \to i} h_j'$  

$a' = X^T h'$  
$h' = Xa'$ 

$a' = (X^T X) a$  
$h' = (X X^T) h$ 

We have  
$$(X^T X)_{(i,j)} =$$ how many co-citation did i and j get $$(v \to i) \& (v \to j)$$  
$$(X X^T)_{(i,j)} =$$ how many co-citation did i and j do $$(i \to v) \& (j \to v)$$

So the update function can be interpreted as:  
$$a_i' = \sum_{j \in V} (X^TX)_{(i,j)} \cdot a_j$$  
where  
$$a_i'=$$ new authority score of node $i$  
$(X^TX)_{(i,j)} =$ how many co-citation did $i$ get with $j$  
$a_j=$ authority score of $j$  

So the update on $i$ is based on (or sum of)   
1)how authoritative is the node $j$ co-citing with  
times  
2)how many co-citation did I get with $j$  
Very easy to manipulate by adding fake co-citation node pointing to me and high-value authority nodes (like New York Times).

Similar idea applies to hub score with change to "co-citation to".  

The stationary update vector becomes the eigenvector with scalar(for normalization)  
$$a' = \beta \cdot (X^T X) a'$$ 

When does convergence happen? 
-Perron-Frobenius Theorem
### Perron-Frobenius Theorem
### Pagerank


### 