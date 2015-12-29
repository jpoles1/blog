---
layout: post
title: Pebble Time - Quiet Time API Needed
tags: pebble, pebble time, smartwatch, problems, review
---
Taking a break from some of my hardware problems with the Pebble Time, I want to take a minute to focus in on a software feature that I'd like to see in the next firmware update. In the last update, the Pebble dev team introduced a handy quiet mode feature, which allows the user to mute the vibrations that occur when a new notification is sent to the watch. This is nice for when a wearer is sleeping, or in class/meetings which they don't want to be distracted from. The feature can be enabled by holding down the back button, or can be scheduled to days of the week or calendar events. I love the concept, but there is one thing which was missing from this software update: an API interface.

![Pebble Time Quiet Mode](/blog/public/img/2015-12-29-Pebble-Quiet-Mode/quiet.png "Pebble Time Quiet Mode")
_The cute quiet time animation. Courtesy of [u/santigaray](https://www.reddit.com/r/pebble/comments/3nvmbm/anyone_else_wish_this_mouse_was_the_animation/)_

###Is It Quiet Time?

Here's the big problem with the quiet mode: I can't tell if the watch is set to be quiet! The Pebble team have neglected to add a variable or event to the API which would allow developers to add a quiet mode indicator to their watchfaces. As such, the best way to tell if the watch is in quiet mode is to check the settings or to simply try toggling quiet mode by holding down the back button.

This isn't a new problem either, a [forum posting](https://forums.getpebble.com/discussion/28707/feature-request-3-4-0-expose-quiet-time-status-through-api-and-other-statuses-as-well) dating back several months has several other developers discussing and requesting this feature. [Another thread](https://forums.getpebble.com/discussion/29713/feature-request-quiet-mode-detection) from November discusses the same issue.

I submitted a request to the developer team, as suggested by one of the forum posters, and got a rather unsatisfying response: "We've received this request a number of times and the firmware team are aware of it... Hopefully it will be included in a future update." One would think the Pebble team would be eager to incorporate such a simple feature, which would so greatly improve their user experience. Instead, the Pebble team doesn't seem to have any clear plan to include this feature. If they are, they certainly aren't telling us, the developers who supply most of the content for their platform free of charge.
