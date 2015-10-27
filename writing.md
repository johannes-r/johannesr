---
layout: page
title: Writing
permalink: /writing/
---

<div class="home">

  <ul class="post-list list-bare">
    {% for post in site.posts %}
      <li class="post-item">
        <span class="post-meta  txt--small">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link  link--secret" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

</div>
