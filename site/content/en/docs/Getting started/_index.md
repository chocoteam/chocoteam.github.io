---
author: "Charles Prud'homme"
title: "Getting Started"
linkTitle: "Getting Started"
weight: 1
description: >
  Get started with Choco-solver.
---
## Quick start

Interested in using Choco in your project?
There are different ways to do this: either your project is based on a build automation tool or not.
The only prerequisite for running Choco solver is to have Java (Oracle JRE 11 or OpenJDK 11) installed on your machine. 

### Maven 3+

Copy-paste the artifact description to your `pom.xml`:

{{< highlight xml >}}
<dependency>
   <groupId>org.choco-solver</groupId>
   <artifactId>choco-solver</artifactId>
   <version>{{< param "choco_version" >}}</version>
</dependency>
{{< /highlight >}}

To test snapshot release, you should update your `pom.xml` with :

{{< highlight xml >}}
<repository>
    <id>sonatype</id>
    <url>https://oss.sonatype.org/content/repositories/snapshots/</url>
    <snapshots>
        <enabled>true</enabled>
    </snapshots>
</repository>
{{< /highlight >}}

### Gradle 6+

Copy-paste the dependency declaration in your `build.gradle`:

{{< highlight groovy >}}
repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.choco-solver:choco-solver:{{< param "choco_version" >}}'
}
{{< /highlight >}}

### As a stand-alone application

First, download the last jar file from [GitHub Release page](https://github.com/chocoteam/choco-solver/releases/latest).
This jar file contains all required dependencies, unlike the one hosted in [Maven Central Repository](https://maven-badges.herokuapp.com/maven-central/org.choco-solver/choco-solver).
The next step is simply to add the jar file to the classpath of your application.
In the case your program depends on dependencies used by Choco solver too, you should consider using a build automation tool.


## Community

Stay up to date on the development of Choco solver and reach out to the community with these helpful resources.

- Join [the official Gitter room](https://gitter.im/chocoteam/choco-solver#).
- Get help on the [google group](https://groups.google.com/forum/#!forum/choco-solver)
- Implementation help may be found at Stack Overflow (tagged [`choco`](https://stackoverflow.com/questions/tagged/choco)).
- Use the [issue tracker](https://github.com/chocoteam/choco-solver/issues) here on GitHub to report issues. As far as possible, provide a [Minimal Working Example](https://en.wikipedia.org/wiki/Minimal_Working_Example).


Feel free to meet cho-coders : [@cprudhom](https://github.com/cprudhom) (Charles Prud'homme) and [@jgFages](https://github.com/jgFages) (Jean-Guillaume Fages) 

