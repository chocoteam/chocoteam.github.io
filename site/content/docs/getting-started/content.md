---
author: "Charles Prud'homme"
date: 2019-11-14T16:59:48+01:00
title: "Contents"
Description: "Discover what's included in Choco solver."
slug: ""
toc: true
draft: true
---

{{< highlight text >}}


{{< /highlight >}}


### Technical overview

Choco solver {{< param "choco_version" >}} is a Java library for Constraint Programming which includes:

* Various type of variables: integer, boolean, set and real,
* State-of-the-art constraints: alldifferent, count, nvalues, and many more,
* Configurable resolution strategies: custom search, activity-based search, large neighborhood search, etc.),
* conflict explanations (conflict-based back jumping, dynamic backtracking, path repair, etc.).

It also includes facilities to interact with the search process, factories to help modeling, many samples, an interface to Ibex, etc.
Choco Solver has also many [extensions](http://choco-solver.org/?q=extensions),
including a FlatZinc parser to solve minizinc instances and a graph module to better solve graph problems such as the TSP.
An overview of the features of Choco 4 may also be found in the presentation made in the
[“CP Solvers: Modeling, Applications, Integration, and Standardization”](http://www.choco-solver.org/sites/materials/cpsol2013_talk.pdf) workshop of CP2013.
The source code of choco-solver-4 is hosted on [GitHub](https://github.com/chocoteam/choco-solver).

### History

The first version of Choco dates from the early 2000s.
A few years later, Choco 2 has encountered a great success in both the academic and the industrial world.
For maintenance issue, Choco has been completely rewritten in 2011, leading to Choco 3.
The first beta version of Choco 3 has been released in 2012 and it has shown significant performance improvement.
Choco 4 comes with a simpler modeling API.
The latest version is Choco 4.10.2.
