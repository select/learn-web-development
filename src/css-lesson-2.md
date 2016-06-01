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
<div class="editor-wrapper" id="code-example-1">

<div class="editor-css">h1 {
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
}</div>

<script type="text/plain" style="display: block;" class="editor-html"><h1>Hello</h1>
<p>
  Here are some links
  <a href="http://www.w3schools.com/cssref/pr_text_text-align.asp">text-align</a><br>
  <a href="http://www.w3schools.com/cssref/pr_text_text-decoration.asp">text-decoration</a><br>
  <a href="http://www.w3schools.com/cssref/pr_text_text-transform.asp">text-transform</a>
</p>
</script>
<div class="rendered-html"></div>
</div>

<script>
(function() {
    sandbox('#code-example-1',{height: 400, enableLiveAutocompletion: true});
})();
</script>

--
### Optimize common styles
You can write **comma separated** list of selectors `tag1, tag2 { …` that share styles properties.s
<div class="editor-wrapper" id="code-example-2">

<div class="editor-css">h1, p {
  margin: 0;
}
h1 {
  text-align: center;
  text-decoration: underline;
}
a {
  text-transform: uppercase;
  text-decoration: none;
}</div>
<script type="text/plain" style="display: block;" class="editor-html"><h1>Hello</h1>
<p>
  Here are some links
  <a href="http://www.w3schools.com/cssref/pr_text_text-align.asp">text-align</a><br>
  <a href="http://www.w3schools.com/cssref/pr_text_text-decoration.asp">text-decoration</a><br>
  <a href="http://www.w3schools.com/cssref/pr_text_text-transform.asp">text-transform</a>
</p>
</script>
<div class="rendered-html"></div>
</div>

<script>
(function() {
    sandbox('#code-example-2',{height: 400, enableLiveAutocompletion: true});
})();
</script>

--
### Selecting `nested tags`
Use the HTML tree structure to select nested tags
<div class="editor-wrapper" id="code-example-3">
<div class="editor-css">p b {
    color: green;
}
h1 b {
    font-weight: bold;
}
</div><script type="text/plain" style="display: block;" class="editor-html"><h1>
Learning with <b>Select</b>
</h1>
<p>
  We were sitting here listening 
  to <b>selects</b> talk. So far
  everything was easy peasy but
  <b>select</b> continued and our
  heads started to meld.
</p></script>
<div class="rendered-html"></div>
</div>
<script>
(function() {
    sandbox('#code-example-3',{height: 425, enableLiveAutocompletion: true});
})();
</script>

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
/\* select bold in heading 1 \*/
h1 b {
  …
}
/\* select links in paragraps \*/
p a {
  …
}
    </code>
  </pre>
</div>
--
### Selecting direct children `tag>child`

--
### Selectors 3: `.class`, `#id`

--
### Selectors 4 pseudo selectors: `:hover` `:nth-child(odd)`

--
### Positioning: `absolute`, `relative`, `fixed`


--
### Exercise

https://flukeout.github.io/