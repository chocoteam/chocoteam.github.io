---
title: "Modeling"
linkTitle: "Modeling"
weight: 2
description: >
  What does your user need to know to express a problem?
---

## The Model

The object `Model` is the key component. It is built as follows:

```java
Model model = new Model();
```

or:

```java
Model model = new Model("my problem");
```

`Model` is the top-level objects that stores declared variables, posted constraints and gives access to the `Solver`. 

{{% pageinfo %}}
This should be the first instruction, prior to any other modeling instructions, as it is needed to declare variables and constraints.
{{% /pageinfo %}}




Once the model is created, variables and constraints can be defined.
