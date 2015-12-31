---
layout: post
title: Modeling Epidemics - A Shiny New SIRD Model
tags: modeling, mathematical, epidemic, disease, R, Python
---

In my [last post](http://jpoles1.github.io/blog/2015/12/30/First-Model/) I presented the formulas which I will use to mathematically model SIRD epidemic dynamics. I also presented some preliminary R and Python code which could be used to simulate these equations over time and plot the results.

Overall I thought that this was a neat exercise, but was altogether a bit boring for you, my readers. I wanted to get you involved, and allow you to play around with the parameters being entered into these equations. I've also been really interested in the development of interactive graphics for displaying data of late: I think that it's one thing for a statistician to tell a reader what they should think about a dataset, and another for the reader to actually examine the data, and draw their own conclusions. This is valuable because, in reality, it's very easy for a savvy statistician to manipulate a graphic to tell the story that they want to tell; allowing the user to examine the data in depth, and play with the axis can mitigate this issue to some extent.

###Interactive Plotting Technologies

I've been doing some research into interactive technologies for plotting (particularly [Bokeh](http://bokeh.pydata.org/en/latest/), [pure d3.js](http://d3js.org/), and [mpld3](http://mpld3.github.io/)). I actually won't be using any of these technologies in this post, but I hope to use them sometime in the near future. Instead, I've fallen back on an old friend, Shiny, which I have used in the past to create interactive analysis platforms. In particular, I've used Shiny for an organization where I served as Director of Research. Our volunteers would fill out a reflection at the end of each of their shifts; this data was then organized and presented to shift-leaders using a dashboard I designed and developed in Shiny, which would automatically pull the latest data. This technology allowed shift-leaders to track their shift's progress and efficacy, and was also used to guide our quality improvement (QI) initiative.

For those who are not familiar with Shiny, it is a platform built on top of the R programming language, which allows for the generation of user interfaces (displayed in the web browser). These interfaces interact with a server-side R script which receives parameter updates and produces outputs (tables, plots, etc.) which are then sent back to the user. Notably, unlike some of the technologies I mentioned in the last paragraph, Shiny requires a back-end (a Shiny server); this allows for the creation and updating of information on the client-side. If this explanation is not particularly clear to you, perhaps this project will serve as a good example of what Shiny can do.

<!-- more -->

###My Shiny New SIRD Model

I based the server-side of my Shiny script on the R code I discussed in my [last post](http://jpoles1.github.io/blog/2015/12/30/First-Model/), though I have cleaned the code up considerably. You can find all the code for the Shiny app in [this respository](https://github.com/jpoles1/shinySIRD), and you can try out a hosted version of this app [here](https://jpoles1.shinyapps.io/shinySIRD). The hosting for this app is provided courtesy of [shinyapps.io](http://shinyapps.io) and the RStudio/Shiny team. You can also run this app on your own version of R (assuming you have the Shiny library installed) using the command _runGitHub("shinySIRD", "jpoles1")_.

[![Shiny Model](/blog/public/img/2015-12-29-First-Model/shiny.png "R Model")](https://jpoles1.shinyapps.io/shinySIRD)
_A screenshot of the client-side/user interface created by Shiny. Give it a try!_

I noticed that there was actually a flaw in my original R model (when playing around in Shiny), which allowed for the infected count to overshoot the total population size when using certain values for beta. I have fixed this issue in this new code: I never allow the number of infected individuals in a give step exceed the number of susceptibles (using the min function).

Anyway, hope you have fun playing around with the Shiny app. Feel free to leave a comment if you find any errors in your tinkering (it's certainly possible I've missed something), thanks for reading!
