---
title: "Declaring variables"
date: 2020-01-07T16:06:55+01:00
weight: 21
description: >
  How to declare variables?
math: "true"  
---


A variable is an *unknown*, mathematically speaking.
The goal of a resolution is to *assign* a *value* to each variable.
The *domain* of a variable –(super)set of values it may take– must be defined in the model.

Choco-solver includes several types of variables: `BoolVar`, `IntVar`, `SetVar` and `RealVar`.
Variables are created using the `Model` object.
When creating a variable, the user can specify a name to help reading the output.

## Integer variables

An integer variable an unknown whose value should be an integer. Therefore, the domain of an integer variable is a set of integers (representing possible values).
To create an integer variable, the `Model` should be used:

```java
// Create a constant variable equal to 42
IntVar v0 = model.intVar("v0", 42);
// Create a variable taking its value in [1, 3] (the value is 1, 2 or 3)
IntVar v1 = model.intVar("v1", 1, 3);
// Create a variable taking its value in {1, 3} (the value is 1 or 3)
IntVar v2 = model.intVar("v2", new int[]{1, 3});
```

It is then possible to build directly arrays and matrices of variables having the same initial domain with:

```java
// Create an array of 5 variables taking their value in [-1, 1]
IntVar[] vs = model.intVarArray("vs", 5, -1, 1);
// Create a matrix of 5x6 variables taking their value in [-1, 1]
IntVar[][] vs = model.intVarMatrix("vs", 5, 6, -1, 1);
```

There exists different ways to encode the domain of an integer variable.

### Bounded domain

When the domain of an integer variable is said to be *bounded*, it is represented through
an interval of the form $[\\![a,b]\\!]$ where $a$ and $b$ are integers such that $a \leq b$.
This representation is pretty light in memory (it requires only two integers) but it cannot represent *holes* in the domain.
For instance, if we have a variable whose domain is $[\\![0,10]\\!]$ and a constraint enables to detect that
values 2, 3, 7 and 8 are infeasible, then this learning will be lost as it cannot be encoded in the domain (which remains the same).

To specify you want to use bounded domains, set the `boundedDomain` argument to `true` when creating variables:

```java
IntVar v = model.intVar("v", 1, 12, true);
```

{{% alert title="Info" color="primary" %}}
When using bounded domains, branching decisions must either be domain splits or bound assignments/removals.
Indeed, assigning a bounded variable to a value strictly comprised between its bounds may results in infinite loop
because such branching decisions will not be refutable.
{{% /alert %}}

### Enumerated domains

When the domain of an integer variable is said to be *enumerated*, it is represented through
the set of possible values, in the form:
- $[\\![a,b]\\!]$ where $a$ and $b$ are integers such that $a \leq b$
- $\{a,b,c,..,z\}$, where $a < b < c ... < z$.
Enumerated domains provide more information than bounded domains but are heavier in memory (the domain usually requires a bitset).

To specify you want to use enumerated domains, either set the `boundedDomain` argument to `false` when creating variables by specifying two bounds
or use the signature that specifies the array of possible values:

```java
IntVar v = model.intVar("v", 1, 4, false);
IntVar v = model.intVar("v", new int[]{1,2,3,4});
```

## Boolean variable

Boolean variables, `BoolVar`, are specific `IntVar` that take their value in $[\\![0,1]\\!]$.
The avantage of `BoolVar` is twofold:
- They can be used to say whether or not constraint should be satisfied (reification)
- Their domain, and some filtering algorithms, are optimized

To create a new boolean variable:

```java
BoolVar b = model.boolVar("b");
```

## Set variables

A set variable, `SetVar`, represents a set of integers, i.e. its value is a set of integers.
Its domain is defined by a set interval $[\\![m,o]\\!]$ where:


* the lower bound, $m$, is an `ISet` object which contains integers that figure in every solution.


* the upper bound, $o$, is an `ISet` object which contains integers that potentially figure in at least one solution,

Initial values for both $m$ and $o$ should be such that $m \subseteq o$.
Then, decisions and filtering algorithms will remove integers from $o$ and add some others to $m$.
A set variable is instantiated if and only if $m = o$.

A set variable can be created as follows:

```java
// Constant SetVar equal to {2,3,12}
SetVar x = model.setVar("x", new int[]{2,3,12});

// SetVar representing a subset of {1,2,3,5,12}
SetVar y = model.setVar("y", new int[]{}, new int[]{1,2,3,5,12});
// possible values: {}, {2}, {1,3,5} ...

// SetVar representing a superset of {2,3} and a subset of {1,2,3,5,12}
SetVar z = model.setVar("z", new int[]{2,3}, new int[]{1,2,3,5,12});
// possible values: {2,3}, {2,3,5}, {1,2,3,5} ...
```

## Real variables

The domain of a real variable is an interval of doubles. Conceptually, the value of a real variable is a double.
However, it uses a precision parameter for floating number computation,
so its actual value is generally an interval of doubles, whose size is constrained by the precision parameter.
Real variables have a specific status in Choco 4, which uses [Ibex solver](http://www.ibex-lib.org/) to define constraints.

A real variable is declared with three doubles defining its bound and a precision:

```java
RealVar x = model.realVar("x", 0.2d, 3.4d, 0.001d);
```

## Views: Creating variables from constraints

When a variable is defined as a function of another variable, views can be
used to make the model shorter. In some cases, the view has a specific (optimized) domain representation.
Otherwise, it is simply a modeling shortcut to create a variable and post a constraint at the same time.

### Arithmetical views

An arithmetical view requires an integer variable. 

#### $x = y + 2$ :

```java
IntVar x = model.intOffsetView(y, 2);
```

#### $x = -y$ :

```java
IntVar x = model.intMinusView(y);
```

#### $x = 3\times y$ :

```java
IntVar x = model.intScaleView(y, 3);
```

### Logical views

A logical view is based on an integer variable, a basic arithmetical relation ($=,\neq,\leq,\geq$) and a constant. The resulting view states wether or not the relation holds.

#### $b \Leftrightarrow (x = 4)$ :

```java
BoolVar x = model.intEqView(x, 4);
```

#### $b \Leftrightarrow (x \neq 4)$ :

```java
BoolVar x = model.intNeView(x, 4);
```


#### $b \Leftrightarrow (x \leq 4)$ :

```java
BoolVar x = model.intLeView(x, 4);
```

#### $b \Leftrightarrow (x \geq 4)$ :

```java
BoolVar x = model.intGeView(x, 4);
```

#### $d \Leftrightarrow \neg b$
This is a specific case, related to the negation of a `BoolVar`.
No additional variable is needed, a view based on the variable to refute is enough. 

```java
BoolVar d = model.boolNotView(b);
```

{{% alert title="Info" color="primary" %}}
The same result can be obtained in shorted version:

```java
BoolVar d = b.not();
```


{{% /alert %}}



### Composition 

Views can be combined together, e.g. $x = 2\times y + 5$ is:

```java
IntVar x = model.intOffsetView(model.intScaleView(y,2),5);
```

### View over real variable  
We can also use a view mecanism to link an integer variable with a real variable.

```java
IntVar ivar = model.intVar("i", 0, 4);
double precision = 0.001d;
RealVar rvar = model.realIntView(ivar, precision);
```

This code enables to embed an integer variable in a constraint that is defined over real variables.
