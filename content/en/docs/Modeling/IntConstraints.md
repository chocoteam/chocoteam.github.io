---
title: "Constraints over integer variables"
date: 2020-01-07T16:07:15+01:00
weight: 23
description: >
  Overview of constraints based on boolean and integer variables.
---

## Arithmetical constraints



## Cardinality constraints


## Scheduling constraints

## Table constraints


## SAT constraints

A SAT solver is embedded in Choco-solver. It is not  designed to be accessed directly.
The SAT solver is internally managed as a constraint (and a propagator), that’s why it is referred to as SAT constraint in the following.

Clauses can be added with the `Model` thanks to methods whose name begins with `addClause*`.
There exists two type of clauses declaration: pre-defined ones (such as `addClausesBoolLt` or `addClausesAtMostNMinusOne`) or more free ones by specifying a `LogOp` that represents a clause expression:

```java
model.addClauses(LogOp.and(LogOp.nand(LogOp.nor(a, b), LogOp.or(c, d)), e));
// with static import of LogOp
model.addClauses(and(nand(nor(a, b), or(c, d)), e));
```

## Automaton-based Constraints

`regular`, `costRegular` and `multiCostRegular` rely on an automaton, declared either implicitly or explicitly.
There are two kinds of `IAutomaton` :
- `FiniteAutomaton`, needed for `regular`,
- `CostAutomaton`, required for `costRegular` and `multiCostRegular`.

`FiniteAutomaton` embeds an `Automaton` object provided by the `dk.brics.automaton` library.
Such an automaton accepts fixed-size words made of multiple `char`, but the regular constraints rely on `IntVar`,
so a mapping between `char` (needed by the underlying library) and `int` (declared in `IntVar`) has been made.
The mapping enables declaring regular expressions where a symbol is not only a digit between 0 and 9 but any **positive** number.
Then to distinct, in the word 101, the symbols 0, 1, 10 and 101, two additional `char` are allowed in a regexp: < and > which delimits numbers.

In summary, a valid regexp for the automaton-based constraints is a combination of **digits** and Java Regexp special characters.

`CostAutomaton` is an extension of `FiniteAutomaton` where costs can be declared for each transition.

