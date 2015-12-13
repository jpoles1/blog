---
layout: post
title: Jekyll - Read more links.
---
I just implemented a new feature on the blog: [read more links](https://github.com/jpoles1/blog/commit/f94a710f631ace1950b820e571ec5642fca99837)! After writing my first post, I realized that it was rather long and took up a lot of space in the post timeline (home page). I needed some way to cut-off part of the material in the preview and only include it in the whole article. After some searching I came upon [Trần Trường's article](https://truongtx.me/2013/05/01/jekyll-read-more-feature-without-any-plugin/), which detailed the code for something similar to what I desired.

<!-- more -->

###The implementation
I can now add a "read more" link using a simple tag <!-- more --> in any of my post markdown files!

Previously, content was simply displayed using {% raw %}{{post.content}}{% endraw %}. Now I check to see if the <!-- more --> tag is included in the content, and add a link after the split. I did this by adding the following to my index.html file.

{% highlight html %}
{% raw %}
<div class="post-content-truncate">
  {% if post.content contains "<!-- more -->" %}
    {{ post.content | split:"<!-- more -->" | first % }}
    <a href="{{ site.baseurl }}{{ post.url }}">
      Read more...
    </a>
  {% else %}
    {{post.content}}
  {% endif %}
</div>
{% endraw %}
{% endhighlight %}

Hope this can help someone else who's trying to get their github.io blog up and running on Jekyll!
