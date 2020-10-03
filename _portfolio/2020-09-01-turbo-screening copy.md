---
title: "Turbo screening"
excerpt: "New screening tests to improve most of solving methods dealing with the LASSO problem."
collection: portfolio
date: 2020-09-01
---

During a little over a year, I worked with Cedric Herzet and Clement Elvira from [INRIA Rennes](https://www.inria.fr/fr/centre-inria-rennes-bretagne-atlantique) as part of my Research project in 4th year at [INSA Rennes](https://www.insa-rennes.fr). The aim was to first study the bibliography about [Screening tests](https://arxiv.org/pdf/1009.4219) developed since 2011 by Laurent El Ghaoui at Berkley. These tests aim to reduce the solving time of methods dealing with LASSO-type problems. For the first six months, I read many articles about this problem, about sparse representation and about optimization methods. I wrote a first [report](http://theoguyard.github.io/files/turbo-screening-s1.pdf) in which I explain state of art methods using these new screening tests.

After having made this bibliography, we worked on new screening tests aiming to improve solving methods for the LASSO in setups which are usually hard. Already existing screening tests use geometrical considerations in the dual LASSO problem. We designed new screening tests using geometrical considerations directly in the primal LASSO problem. We created an algorithm using these two types of screening tests. We called this approach "Turbo screening". This method can be applied to most of existing solving methods and significatively improve their performances. Our approach may be aking to an Active set method. I wrote a second [report](http://theoguyard.github.io/files/turbo-screening-s2.pdf) in which I explain how we have proceeded.

We wrote a paper with the aim to publish at [ICASSP 2021](https://2021.ieeeicassp.org). It can be found in the [Publications](https://theoguyard.github.io/publications/) section.