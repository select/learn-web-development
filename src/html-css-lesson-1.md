title: HTML & CSS Lesson 1 - Blocks and visibility

author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/html-css-lesson-1.html
theme: ./cleaver-select-theme
controls: true

--
# HTML & CSS <br> Lesson 1

## Blocks and visibility
<script src="js-sandbox.js" type="text/javascript" charset="utf-8"></script>

--
### Semantic HTML elements

All elements we have seen so far have a **semantic meaning** for the content they enclose

```
h1, h2, p, table, tr, td, ul, ol, li, head, body
```

In a later lesson you will learn more how semantic tags and other metadata can enhance your content to become a programmable data resource.

--
### Non semantic elements

Design and user interface logic need containers that *should not* give a semantic meaning to their content.

The division `div` and `span` tag are semantic free.


--
### What `div` and `span` tag are used for

The division `<div>` and `<span>` tags are

- used as generalized containers,
- styled with reusable styles,
- used for animations (show/hide, slide, fade, …),
- dynamically loaded and replaced (JavaScript).

Note that this is a convetion not a rule.

--
### Why two elements?

Because the division `<div>` is a `block` element, and it creates line breaks.

And the `<span>` element can be used within a text without breaking the line - `inline`.

--
### `block` and `inline` example
<div class="js-sandbox" data-height="400">
<script type="text/plain" class="editor-html" ><div>
    Hello <span>World!</span> I am
    a <span>sentence</span>.
</div>
<div>
    Oh man these divs <div>alway
    break the line</div>
</div></script>
</div>

--
### `block` and `inline` more visual example
<div class="js-sandbox" data-height="400">
<script type="text/plain" class="editor-html" ><div>
    Hello <span>World!</span> I am
    a <span>sentence</span>.
</div>
<div>
    Oh man these divs <div>alway
    break the line</div>
</div></script>
<style class="editor-css">span, div{
  border: 1px solid #666;
  margin: 4px;
  padding: 4px;
}</style>
</div>

--
### Which elements are `block` which `inline`
The semantic elements you have seen are `block`
```
p, h1, table, ul
```

and `inline` elements too.
```
b, i, u
```
--
### Setting `block` and `inline` with CSS

CSS allows you to change `block` and `inline` rendering

<div class="js-sandbox" data-height="340">
<script type="text/plain" class="editor-html" ><span>
    Hello <div>World!</div> I am
    a <div>sentence</div>.
</span>
<span>
    Oh man these divs <span>alway
    break the line</span>
</span></script>
<style class="editor-css">
span { display: block;  }

div  { display: inline; }


span, div{
  border: 1px solid #666;
  margin: 4px;
  padding: 4px;
}
</style>
</div>

for any element!

--
### Show and hide with `display: none`
The `display` property also allows us to show and hide elements
<div class="js-sandbox" data-height="340">
<script type="text/plain" class="editor-html" ><div>
    You can see me
    <span>but I am hidden</span>.
</div></script>
<style class="editor-css">
span { display: none;  }

div  { display: block; }

</style>
</div>

--
### Beyond `block` and `inline`
inline-block, flex, table-cell

--
### The End
Continue with

<a href="css-lesson-2.html">CSS Lesson 2: more selectors (15 min)</a>

or go back to the <a href="https://github.com/select/learn-web-development">overview</a>.
