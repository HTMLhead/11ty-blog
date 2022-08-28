---
title: Hello
layout: "base.njk"
---

Hello world!

{% for post in collections.posts %}

- [{{ post.data.title }}]({{ post.url }})
  {% endfor %}
