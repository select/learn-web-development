title: Semantic enrichment and accessibility of HTML
author:
  name: Falko Krause
  github: select
  twitter: rockdapus
  url: https://github.com/select/learn-web-development
output: dist/advanced-semantic-html.html
theme: ./cleaver-select-theme
<!-- theme: ./custom-theme -->
controls: true

--
# Semantic enrichment of HTML
## What I know

--
### Semantic HTML elements
A lot of tags in the HTML language impose a **semantic meaning** on the content they enclose.

```
<title> <h1> <p> <table> <ul> <ol>
```

--
### Non semantic elements

Design and user interface logic need containers that *should not* give a semantic meaning to their content.

The division `div` and `span` tag are semantic free.

--
### Why two elements?

Because the division `<div>` is a `block` element, and it creates line breaks.

And the `<span>` element can be used within a text without breaking the line - `inline`.

--
### Semantic usecase: Information retrieval

What is the document is talking about?


<img src="chinese-newspaper.jpg" alt="a chinese newspaper">

--
### Semantic usecase: Information retrieval
Use semantic elements to infer the **importantce of words**.

`<title>` > `<h1>` > `<h2>` > … `<p>`

Or what **another docuement** is about by learing from the enclose content of all `<a>` tags that point to the docuement.

--
### Semantic usecase: dictionary
Building the ultimate dictionary - spidering the web for

`<dl>` definition lists and reading

each `<dt>` term and its `<dd>` description.

<div class="fragment">ProTip™: Someone had [the idea](https://www.google.de/search?q=define:definition) already.</div>

<img src="dictionary.jpg" alt="a dictionary">

--
### Meta Tags in the head

meta
description
--
### canonical pages
Mark your own pages with dublicate conent.

If not you're a bad boy, goole will rank you down.


--
### Facebook: Open Graph protocol


--
### More elements - better automatic information retrieval

Since **no** one is even close to building an **strong AI** we need to slave away for the machine and wrap our content with these new tags.

```
<article> <aside> <details> <figcaption> <figure> <footer> 
<header> <main> <mark> <nav> <section> <summary> <time>
```
--
### Schema.org

--
### HTML Microdata

http://microformats.org/wiki/microdata

vCard
vEvent
 hCard 
  Established microformats such as hCard are published on the web more than alternatives like schema (microdata) and RDFa
--
### vCard and hCard

In February 2011, Facebook began to use the hCalendar microformat to mark up events, and the hCard for the events

--
### Using rel-license for licensing information

--
### RDF
RDFa and RDFa Lite (a W3C standard alternative to Microformat)

--
### SPARQL


--
### Different types of inputs
text, number, ...

--
### Accessible Rich Internet Applications (ARIA) 

https://www.smashingmagazine.com/2016/03/dirty-tricks-dark-corners-front-end-slides-pdf/

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
http://heydonworks.com/practical_aria_examples/


--
### Bonus: Inlining other languages

MathML
SVG

--
### Literature
http://meiert.com/en/indices/html-elements/


- Semantic HTML: http://www.w3schools.com/html/html5_semantic_elements.asp

