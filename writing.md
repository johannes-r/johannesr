---
layout: page
title: Writing
page-class: page--writing
permalink: /writing/
---

<div class="home">

  <ul class="post-list list-bare">
    {% for post in site.posts %}
      <li class="post-item">
        <span class="post-meta  txt--secondary  txt--small  txt--up">{{ post.date | date: "%b %Y" }}</span>
        <a class="heading-5  post-link  link--secret" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>

</div>
