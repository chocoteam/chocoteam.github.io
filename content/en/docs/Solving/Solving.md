---
title: "Looking for solutions"
date: 2020-01-07T16:06:55+01:00
weight: 31
description: >
  How to look for solutions?
---

Up to here, we have seen how to model a problem with the `Model` object. To solve it, we need to use
the `Solver` object that is obtained from the model as follows:

```
Solver solver = model.getSolver();
```

The `Solver` is in charge of alternating constraint-propagation with search, and possibly learning,
in order to compute solutions. This object may be configured in various ways.