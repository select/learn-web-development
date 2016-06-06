title: CSS Lesson 2 - Understanding Selectors
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/css-lesson-2.html
<!-- theme: ./revealjs-theme -->
theme: ./cleaver-select-theme
controls: true

--
# CSS Lesson 2
## Understanding Selectors
<script src="js-sandbox.js" type="text/javascript" charset="utf-8"></script>

--
### The `tag` selector
We have seen the tag selector before
<div class="js-sandbox" data-height="400" data-ace-options="enableLiveAutocompletion: true">
<style class="editor-css">h1 {
  text-align: center;
  text-decoration: underline;
  margin: 0;
}
p {
  margin: 0;
}
a {
  text-transform: uppercase;
  text-decoration: none;
}</style>
<script type="text/plain" class="editor-html"><h1>Hello</h1>
<p>
  Here are some links
  <a href="http://www.w3schools.com/cssref/pr_text_text-align.asp">text-align</a><br>
  <a href="http://www.w3schools.com/cssref/pr_text_text-decoration.asp">text-decoration</a><br>
  <a href="http://www.w3schools.com/cssref/pr_text_text-transform.asp">text-transform</a>
</p>
</script>
</div>

--
### Optimize common styles
You can write **comma separated** list of selectors `tag1, tag2 { …` that share styles properties.
<div class="js-sandbox" data-height="375" data-ace-options="enableLiveAutocompletion: true">
<style class="editor-css">h1, p {
  margin: 0;
}
h1 {
  text-align: center;
  text-decoration: underline;
}
a {
  text-transform: uppercase;
  text-decoration: none;
}</style>
<script type="text/plain" style="display: block;" class="editor-html"><h1>Hello</h1>
<p>
  Here are some links
  <a href="http://www.w3schools.com/cssref/pr_text_text-align.asp">text-align</a><br>
  <a href="http://www.w3schools.com/cssref/pr_text_text-decoration.asp">text-decoration</a><br>
  <a href="http://www.w3schools.com/cssref/pr_text_text-transform.asp">text-transform</a>
</p>
</script>
</div>

--
### Selecting `nested tags`
Use the '` `' (space) combinator to select nested tags
<div class="js-sandbox" data-height="425" data-ace-options="enableLiveAutocompletion: true">
<style class="editor-css">p b {
    color: green;
}
h1 b {
    font-weight: bold;
}
</style><script type="text/plain" style="display: block;" class="editor-html"><h1>
Learning with <b>Select</b>
</h1>
<p>
  We were sitting here listening 
  to <b>selects</b> talk. So far
  everything was easy peasy but
  <b>select</b> continued and our
  heads started to meld.
</p></script>
</div>

--
### Selecting `nested tags` alternative example
<div class="left">
<pre>
  <script type="text/plain" style="display: block;">
o <html>
├─o <body>
│ ├─o  <h1>
│ │ └o    <b>
│ └─o  <p>
│   └o    <b>
│    └o      <a>
…
  </script>
</pre>
</div>
<div class="right">
  <pre>
    <code>
/\* Select bold in heading1 \*/
h1 b {
  …
}
/\* Select links in paragraps\*/
p a {
  …
}
    </code>
  </pre>
</div>

--
### Selecting direct children `tag > child`
With the `>` combinator you can select direct children.
<div class="js-sandbox" data-height="425" data-ace-options="enableLiveAutocompletion: true">
<style class="editor-css">
span { background-color: yellow; }
p > span {
  background-color: lightblue;
}
</style>
<script type="text/plain" style="display: block;" class="editor-html">
<p>
  <span>Span 1. In the paragraph.
    <span>Span 2. In the span.</span>
  </span>
  Regular text
  <span>Another child.</span>
</p>
<span>Span 3. Not in paragraph.</span>
</script>
</div>

--
### Other combinators

There are more combinators that are less commonly used. Here is the full overview:

- ` ` (space) descendant selector 
- `>` child selector 
- `+` adjacent sibling selector 
- `~`general sibling selector 

You can learn more about them later.

--
### Selectors: `.class`, `#id`
With `class` and `id` selector you will now experience the full power of CSS.

With these you can set a searchable label on HTML elements that you can easily find with CSS selectors.


--
### `.class` vs `#id` difference

The `id` must only be used **once** on a page.
```html
<div id="header"> Logo | About | Imprint</div>
```
```css
#header { background-color: black; }
```

A `class` can be used many times.
```html
<div class="animals"> Pony </div>
<div> Raspberry </div>
<div class="animals"> Duck </div>
```
```css
.animals { color: red; }
```

--
### `.class` and `#id` example

<div class="js-sandbox" data-height="400">
<script type="text/plain" class="editor-html">
<div id="myheader"> Logo | About | Imprint</div>
<div class="animals"> Pony </div>
<div> Raspberry </div>
<div class="animals"> Duck </div>
</script>
<style class="editor-css">
#myheader {
  background-color: black;
  color: white;
  padding: 0 10px;
}
.animals {
  color: red;
}
</style>
</div>

--
### Only use `.class`

As a guideline it is the best if you only use

```
.class
```

This avoids mistakes and is considered best practice for styling with CSS.


--
### Styling with `.class` example

<div class="js-sandbox" data-height="400">
<script type="text/plain" class="editor-html"><div class="header">
  Logo |
  <span class="animals">Ponies</span> |
  Imprint
</div>
<div class="animals"> Platapus </div>
<div> Raspberry </div>
<div class="animals"> Duck </div>
</script>
<style class="editor-css">
.header {
  background-color: black;
  color: white;
  padding: 0 10px;
}
.animals {
  color: red;
}
</style>
</div>

--
### Using `.class` multiple times
Use multiple classes to modify a base style <br>
`class="base modifier"` selector `.base.modifier { …`
<div class="js-sandbox" data-height="300">
<script type="text/plain" class="editor-html">
<h4>My favorite things</h4>
<ul>
  <li class="animal best">Cat</li>
  <li class="animal">Horse</li>
  <li> Banana </li>
  <li class="animal">Duck</li>
</ul></script>
<style class="editor-css">
.animal {
  color: green;
  font-style: italic;
}
.animal.best {
  color: orange;
}
</style>
</div>

--
### Attention operator confusion

Same style for a list of selectors
```
element1, element2, element3 { … }
```

Selecting children
```
element child { … }
element > direct-child { … }
```

Refining classes
```
.base-class.modifier-class { … }
```

--
### Combining operators
You are able to combine the different operators
```
h1,
div > a,
p .myclass,
div .myclass.modifier {
  … 
}
```

Too abstract? you will see real life examples soon.

--
### Pseudo selectors
There are several pseudo selectors in CSS. They

- start with a `:` colon,
- need another selector.

You will now learn about two of them. More will follow later.

--
### Pseudo selectors `:nth-child(odd)`
Select every other element with `even` and `odd`
<div class="js-sandbox" data-height="300">
<script type="text/plain" class="editor-html">
<h4>My favorite things</h4>
<ul class="striped">
  <li>Cat</li>
  <li>Horse</li>
  <li>Banana</li>
  <li>Duck</li>
  <li>Skateboard</li>
  <li>Star Trek</li>
</ul></script>
<style class="editor-css">
.striped li:nth-child(odd) {
  background-color: #eee;
}
.striped {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
</div>
--
### Many possibilities with `:nth-child(…)`
There are many patterns you can use with `nth-child`
- `even` and `odd`
- An number e.g. `:nth-child( 2 )` to select the second element
- `:nth-child( 3n + 2 )` to select every 3rd element with an offset of 2

But for now `even` and `odd` is what you should remember and use.

--
### Pseudo selectors `:hover`

The `:hover` selector is triggerd when the mouse moves over and element.

The element will gives you the first tool to create dynamic content.

--
### `:hover` example
Here is the first example where the user interaction changes the look and feel of a page.
<div class="js-sandbox" data-height="300">
<script type="text/plain" class="editor-html">
<h4>My favorite things</h4>
<ul class="striped">
  <li>Cat</li>
  <li>Horse</li>
  <li>Banana</li>
  <li>Duck</li>
  <li>Skateboard</li>
  <li>Star Trek</li>
</ul></script>
<style class="editor-css">
.striped li:nth-child(odd) {
  background-color: #eee;
}
.striped li:hover {
  background-color: #999;
}

.striped {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
</div>

--
### Exercise

https://flukeout.github.io/