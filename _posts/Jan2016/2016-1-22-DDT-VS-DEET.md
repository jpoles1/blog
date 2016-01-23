---
layout: center-post
title: DDT vs. DEET - A Closer Look at Pesticides
tags: ddt, deet, intereactive, data
postimg: Jan2016/pesticidemap.png
---
One molecule is banned in the US and other locations around the world due to its toxicity; the other is commonly used as a spray to prevent bug bites. Do you know which is which?

<!-- more -->

<style>
  #imgbox{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .halfimg{
    float: left;
    border: 2px solid black;
    border-radius: 25px;
  }
  .imgcap{
    border-top: 2px solid #333;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .halfimg a{
    color: #222;
  }
  .halfimg a b{
    text-decoration: underline;
  }
</style>
<div id="imgbox">
  <div class="halfimg">
    <a href="https://en.wikipedia.org/wiki/DEET">
      <img src="/blog/public/img/Jan2016/StructDEET.png" height="240">
      <div class="imgcap">
        <b>DEET</b>
        <br>
        Diethyltoluamide
      </div>
    </a>
  </div>
  <div class="halfimg">
    <a href="https://en.wikipedia.org/wiki/DDT">
      <img src="/blog/public/img/Jan2016/StructDDT.png" height="240">
      <div class="imgcap">
        <b>DDT</b>
        <br>
        Dichlorodiphenyltrichloroethane
      </div>
    </a>
  </div>
</div>
I was recently hanging out with my friends, when one of them asked what the difference between DEET and DDT was. I explained it to my friend, and remembered that when I was young, there was a while when I was confused about these two different chemicals.

To clarify this quickly and easily: <b>DEET</b> is commonly used in insect repellent sprays applied to skin or clothing, while <b>DDT</b> was used in agriculture and mosquito elimination efforts until it was [banned](https://en.wikipedia.org/wiki/DDT#U.S._ban) do to its toxic effects and build-up in the global food-chain. It is helpful to note that DDT belongs to a group of chemicals called the <b>Chlorinated Hydrocarbons</b> when examining the plot shown below.

<br>
##Looking at Pesticide Data
This whole thing got me pretty interested in pesticide usage around the world. My first instinct was to look for some data (I had been thinking about interactive data visualization a lot at that time). I found it! The United Nations (UN) Food and Agriculture Organization (FAO) collects data on a variety of agriculture metrics, including usage of a variety of different pesticides. I wanted to explore this data, and create a plot, so I turned to my handy d3.js and got started.

Here's the result! I think it looks really nice. I encourage you to click on the image below to go to the site, and play around with the map: click on countries to explore their usage of a specific pesticide over time, or scroll through the selector in the title to pick a different pesticide. This is just a work in progress, but I think it's pretty nifty.
<br>
<br>
<br>
<a href="http://jpoles1.github.io/pesticide/" target="_blank">![Example Small World Graph](/blog/public/img/Jan2016/pesticidemap.png)</a>
_An image of the interactive map of pesticide data I prepared. Note: this map is still in beta!_
<br>
<br>
<br>
###Final thoughts
Hope ya liked the plot! I know there's a lot that can be improved here, so you can take a look at the repo for this graphic [here](https://github.com/jpoles1/pesticide) if you want to make changes. Thanks for reading!
