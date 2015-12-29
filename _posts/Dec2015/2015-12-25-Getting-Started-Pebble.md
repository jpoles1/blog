---
layout: post
title: Getting Started with the Pebble Time
tags: pebble, C, javascript, bluetooth, smartwatch
---
This year for the holidays my wonderful girlfriend got me an awesome new piece of tech to add to my arsenal: the [Pebble Time](https://www.pebble.com/pebble-time-smartwatch-features)! This neat little device is an Android and IOS compatible smart-watch which uses a bluetooth connection in order to send information back and forth between it and your smartphone. The watch itself is unable to connect to the internet in order to retrieve information, but instead uses your phone to do so! I'm the kinda guy who like to wear a watch all the time, so the lightweight and 30M waterproof Pebble Time was a great option for me. In addition, Pebble boasts one of the longest battery lives on the smartwatch market; this was particularly appealing, as I prefer to take my watch off as infrequently as possible. With a maximum battery life of 7 days, I hope that the Pebble Time will allow me to do just that. I've only had the watch for a few days now, but I may write a review of the device sometime in the near future.

![Pebble Time](/blog/public/img/2015-12-25-Getting-Started-Pebble/watch.jpg "Pebble Time")
My Pebble Time featuring a watchface of my own design.

###Developing for the Pebble Time
Though the Pebble Time is a real pretty piece of technology, and I love the way it looks on my wrist, this is only part of the appeal for me. You see, I love to build things, and Pebble is an open and well documented platform, which supports the programming of software for the watch using C, Javascript, or a combination of the two. There are two different kinds of software which can be written for the Pebble: watchfaces and watchapps. At this time, I have only begun to explore the possibilities of the Pebble platform. I decided that my first project would have to be a watchface; after all, what good is a watch if it doesn't tell ya the time? I wanted to go back to basics.

<!-- more -->

The primary difference between watchfaces and watchapps is as follows. Watchfaces are used to present information to the user: typically such things as time and date, but the watchfaces can also connect to the internet through a bluetooth paired smartphone in order to retreive a variety of data. Many watchfaces will present basic weather information, but the possibilities are endless; any information that can be fetched using your phone can be presented on a watchface. For instance, I'm interested in implementing features like unread message counts for Gmail or Facebook. One major limitation to watchfaces is the paucity of user interactivity. Watchfaces do not have access to user input through any of the four buttons present on the sides of the watch, and can only read data from the watch's sensors (accelerometer, and light sensor). Watchapps on the other hand can read user input from the watch's 3 side buttons, but must be loaded from the apps menu, rather than always being open on the watch when it is not in use.

###An Initial Foray into C Programming for Pebble
One of the first things I did when I got my Pebble Time was, of course, trying to find some pretty watchfaces! I spent a good few hours looking through the Pebble app store, assessing and admiring various watchfaces and apps. I was rather struck by the design of one [watchface](https://apps.getpebble.com/en_US/application/5616a3d3c902b64981000090) offered by Kiezel, and though I really liked the basis of the design, I saw a lot that I wanted to improve. So, I set off to create my own watchface!

The first thing I did was delve into Pebble's wealth of developer resources. The Pebble team have done a great job of [documenting](https://developer.getpebble.com/docs/) their software platform, and have published some great [tutorials](https://developer.getpebble.com/tutorials/) for getting started. Now, I'm no C expert, but I have been learning a lot about the language recently - particularly through the excellent book, [Learn C The Hard Way](http://c.learncodethehardway.org/book/) - and I was able to get off the ground with my new watchface rather quickly. Over the course of the past day, I was able to get a fully functional (and in my opinion, quite nice looking) watchface working. I have written a means of encoding a numeric time into a series of words which will fit on the Pebble Time screen - though the code is a bit messy right now - and I also have a date and battery indicator. I had programmed in a script to fetch the weather and display it, however I did not love the look of it, and figured it would just reduce my battery life with periodic bluetooth calls (plus if I really wanna know the weather I can just wander outside).

![My Watchface](/blog/public/img/2015-12-25-Getting-Started-Pebble/watchface.png "Elegant Text Watchface")
The watchface I have been designing, as seen from Pebble's emulator. I use the emulator frequently to test my design before pushing it to my watch. Anti-aliasing is not enabled on the emulator, so the edges of the graphics are a bit rough.

Now, the C code I have written isn't the cleanest, nor is it necessarily optimized, but I had a lot of fun writing it and experimenting with my new tech. This was a great opportunity to have some fun while also improving my programming skills and knowledge!

###Next Steps
All of the code I have used so far is available in this [Github repository](https://github.com/jpoles1/ElegantText) and I hope to have a fully functional version up and running on the Pebble Appstore soon! I will have to do a good bit more testing and fine-tuning before I feel comfortable publishing my software, but I will post again once I have uploaded it for the world to use!