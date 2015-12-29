---
layout: post
title: Big Problems with the Pebble Time
tags: pebble, pebble time, smartwatch, problems, review
---
It's been around a week since my Pebble Time arrived in the mail, so I figure it's time to write up some of my preliminary experience with the device. I wish I could say I was in love, I truly do: the watch's design is so nice, and programming for the Pebble has been a lot of fun. Unfortunately, my device is already broken, and I'm a sad customer. This was my only gift for the holidays this year, and it's already non-functional.

###Inital Troubles:
Shortly after I received the Pebble Time, I noticed that something was not quite right with the device. Once my battery had dropped to a low enough level - surprising in itself, given that Pebble advertises a 7 day battery life - I plugged the watch in to charge. Oddly enough, the battery instantly jumped to 100%. I thought that this was a bit strange, but chocked it up to a minor glitch. I left the device to charge for several hours, and when I returned, the battery seemed full, so I put it back on my wrist. That night I went to the theater to see the new Star Wars film (in IMAX 3D, it was real pretty) and on the ride back home, my watch began to vibrate. First it told me that my battery had dropped to 20%, then within minutes it had dropped to 10%. By the time I got home shortly thereafter, the watch was out of battery (it wasn't completely dead, as the Pebble Time will actually still display the time for a while after the battery reaches 0%). This got me really worried: was my brand new device broken already? Would I need to send it in for a replacement?

<!-- more -->

###The Issues Mount:
I had this same issue occur twice more, I was really dismayed. Around the same time, I had been doing more research into the Pebble's software. The charging indicator I had built for my watchface was not working properly, and I was curious as to why the Pebble could only determine the battery's state of charge to 10%. I learned that most electronic devices cannot actually precisely determine their battery charge percentage with a great degree of accuracy, and instead must use software to interpolate the battery percentage. The Pebble Time simply does not have this feature built in, so users must instead use an app like Battery+. This is not a death-knell for the Pebble Time, however it is a bit inconvenient.

The bigger problem with the Pebble Time comes, not with the watch's inability to determine its battery percentage precisely, but rather with the inability to determine the progress of the charging process. My research revealed that the Pebble Time has a major flaw which prevents it from determining it's percentage during charging; particularly, [forums](https://www.reddit.com/r/pebble/comments/3bodnk/full_charge_at_70/csob4u6) have noted that the Pebble Time cannot determine the level of charge when it is between 70 and 100%!

I was taken aback! Instead of figuring out a better way to inform the user of their watch's charge state, the Pebble developers have simply suggested that you wait for an indicator which apparently appears saying that the device has been fully charged. If this is the case, I feel that Pebble at least has an obligation to notify new owners of the watch, rather than leaving them to figure it out on their own.

###Other Complaints
At this point, I feel it's worth addressing a few more issues I've had with my Pebble Time. For one, the charging cable isn't great. If you're not careful you can plug the device in, but it won't charge: the connector has to be positioned just right, and can sometimes shift causing the watch to become disconnected.

Another tip for new Pebble Time owners: while the watch has a nice Gorilla Glass screen, which should be rather scratch resistant, the bezel of the watch is quite easily scratched. I don't have experience myself, but plenty of folk on the internet warn of this problem. In order to prevent scratching, I bought myself a protector. I think mine actually makes the watch look nicer than it did originally. Unfortunately, I may have to go and replace the watch and lose my wrap. We'll have to see how Pebble will handle this issue.

###The Death of a Pebble Time
In the course of writing this review, I was visited by an even greater Pebble Time problem. My watch has died altogether. It began with the watching running out of batteries like it had previously, but now it won't turn back on when I charge it. Instead, it enters a boot loop: it displays the Pebble logo, starts the watch operating system, then powers off only to restart the cycle anew. I let it go to do this for a bit (even let the battery fully discharge), and when I saw nothing had changed, I tried to put the watch into recovery mode. Now the watch is still stuck in a bootloop, but boots into the recovery screen, instead of the operating system. This makes me a sad Pebble Time owner.

![Pebble Time Recovery Screen](/blog/public/img/2015-12-28-Pebble-Troubles/recovery.png "Pebble Time Recovery Screen")
_The recovery screen, which I am now rather sick of seeing._
###Future steps
I've contacted Pebble and told them about all of my issues with my device. I've read on several sources that the company provides high quality customer support and care, so we'll see how that goes. I've yet to receive a helpful response, though they have acknowledged the receipt of my complaint. I'll write another post once I hear back.

The ball is in your court now, Pebble team!
