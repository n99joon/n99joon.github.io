---
title : Summary of Topics
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

# Lecture 6
### Communities as Partitions (Clusters) 
* Every node ends up in exactly one Comm.
* Many edges inside communities, few across
* Many measures are possible (conductance, etc.)  
* If one node connects to every other node, where should it belong? 
### Modularity 
* Metric but also used as obj func itselt
* Idea: How much a partition of nodes says about edges in clusters compared to what node degrees tell us about edges in clusters  
* Compare how many edges are inside clusters - how many # of edges will be inside clusters if the graph were "uniquely random"
* Hard to keep degrees and generate random graph 
* So, we use multigraphs with self loops 
* Xinyu : Each node x connects to each nodes with (# of hands of x / # of nodes) (Degree is kept in expectation but not in reality) 
* Each node has $d(v)$ stubs/hands 
* $2m$ = total # of stubs/hands ($m$ = # of edges) 
#### E[# of edges between u and v] 
$$d(u) \cdot \frac{d(v)}{2m-1}$$
#### E[(# of edges)x2 between u and u] 
$$d(u) \cdot \frac{d(u)-1}{2m-1}$$
#### E[# of edges in S]
* Actually the # of edges between u and v will be double counted (u,v) (v,u) so it will match with (u,u) case.  
$$ = \sum_{u,v \in S} \frac{d(u)d(v)}{2m} $$  
$$ = \frac{1}{2m} \sum_{u\in S} d(u) \sum_{v \in S} d(v)$$  
$$ = \frac{1}{2m} $$ vol$$(S)^2$$ 1/4m if we want # of edges (not double counted)

#### Final Modularity Formula
$$ \frac{1}{m} (\sum_i e(S_i) - \frac{1}{4m} vol(S_i)^2)$$
* 1/m for scaling so that the modualrity value is within [-1, 1] for any size graph  

*We don't need to know # of clusters 

# Lecture 7 
### Modularity 
* Lower bound on 0 = Singleton sets  
* Hard to get approximation guarantee with negative obj func value 
* Heuristic by Newman (partition into two comms)
#### If $(u,v) \in E$ in different Comm
contributes 0
#### If $(u,v) \in E$ in same Comm
Contributes 1 - d(u)*d(v)/2m
#### If $(u,v) \notin E$ in same Comm
Contributes - d(u)*d(v)/2m
* We can write this into xTAx format and solve using semidefinite program

### Correlation Clustering 
### Two Obj funcs (Max Agree vs Min Disagree)
It is NP-Hard for any degree approx. for Independent set  
We can do 2-Approx for Vertex Cover.  
### Recap: 2-Approx for VC
Greedily select uncovered edge and include both ends to VC, remove all connected nodes. 
Proof: For every edge, the OPT selects at least one end, ours get at most both ends.  
### 2-Approx for Max Agree 
Get Max(singleton, WholeGraph) we get at least half of edges satisfied
### 4-Approx for Min Disagree (Using LP Rounding) 
Solving ILP gives minDisagree  
Relax ILP to LP by 0<= x <= 1 (fractional x)
#### Why Fraction(rational x)? 
* We can make LP in Ax <= b format into Ax = b by using slack variables (Standard form LP) 
* We know if there exists an optimal feasible solution, there exists optimal basic feasible solution
* Then with every combination of rank(A) columns, we solve System of Linear Equations (A*x =b & A* is full rank square matrix) 
* by Cramer's rule the denominator is bounded by the determinant. (of the largest among all basic solutions) 
* So the solution x is rational. 

### Min obj LP <= ILP
Because every solution in ILP is possible in LP  
Cost(our Sol) <= 4*cost (LP sol) <= 4*cost (ILP sol) = 4 cost (OPT) 
Say this x_{u,v} is like a metric satisfying triangle inequality. 
### Algorithm
* Randomly selecting a node and choosing all nearby nodes as one community and removing  
* ^ Doesn't work because can have many far-away(- edges) among included nodes
* Alg: Choose a node u, get all nodes in a radius ball of 1/2, if avg dis >1/4 make {u} a singleton cluster, otherwise get all the nodes in ball with u as one cluster, remove them, and continue. 

# Lecture 8
### Proof of 4-Approx of Min Disagree (Correlation Clustering) 
ILP - LP Relaxation  
### Classification with Pairwise Information 
ILP formulation 
