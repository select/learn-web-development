title: CSS Lesson 1 - Cascading Style Sheets basics
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/css-lesson-1.html
<!-- theme: ./revealjs-theme -->
theme: ./cleaver-select-theme
controls: true

--
<script src="js-sandbox.js" type="text/javascript" charset="utf-8"></script>
# CSS Lesson 1
##**C**ascading **S**tyle **S**heets basics

--
###Cascading Style Sheets
CSS is a language that describes the presentation of an HTML (or XML).

It allows you to manipulate shapes, colors, places and even some dynamic properites of elements.
--
###Syntax: selector, declaration <br>property: value
```css
selector {
    property: value
}
```
The basic syntax is quite simple. The selector syntax however is more complicated.

Don't worry we will learn it piece by piece.
--
###Selectors 1: tag selector
If we want to e.g. change the color of a heading `<h1>Hello</h1>` we must first find it.

```css
h1 {
    /* comment, change the color*/
}
```
It's as easy as specifing the tag name.
--
### Text properties
`color`, `text-align`, `text-decoration`, `text-transformation`
```css
h1 {
    color: red;
    text-align: center;
    text-decoration: underline;
}
p {
    color: #001122;
    text-transform: uppercase;
}
```
… one more thing about colors

--
###Color values in r g b (a)
The three basic colors
<span style="color: red">red</span> <span style="color: rgb( 0, 255, 0)">green</span> <span style="color: blue">blue</span>
combined, are used to define all web colors.
Each with different intensity between 0 and 255.

<table>
    <thead>
        <tr>
            <th>rgb</th>
            <th>hex</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <span style="color: rgb( 255, 0, 0)">rgb( 255, 0, 0)</span><br>
                <span style="color: rgb( 0, 255, 0)">rgb( 0, 255, 0)</span><br>
                <span style="color: rgb( 0, 0, 255)">rgb( 0, 0, 255)</span><br>
            </td>
            <td>
                <span style="color: #ff0000">#ff0000</span><br>
                <span style="color: #00ff00">#00ff00</span><br>
                <span style="color: #0000ff">#0000ff</span><br>
            </td>
        </tr>
    </tbody>
</table>

Hex: `0-9` `a-f` ⇨ `16`; `16² = 256`

Do you know [additative color mixing](https://en.wikipedia.org/wiki/Additive_color) [?](https://goo.gl/pvhdpY)

--
###Color values in r g b (a)
[Wikipedia web colors](https://en.wikipedia.org/wiki/Web_colors#X11_color_names) or find matching [Coolors](https://coolors.co/app)
<img src="x11colors.jpg" alt="X11 colors"/>

--
###Text properties

<div class="editor-wrapper" id="code-example-1">

<div class="editor-css">h1 {
  color: red;
  text-align: center;
  text-decoration: underline;
}
p {
  color: #000000;
}
a {
  text-transform: uppercase;
  text-decoration: none;
}</div>

<div class="rendered-html"><h1>Hello</h1>
<p>
  Here are some links
  <a href="http://www.w3schools.com/cssref/pr_text_text-align.asp">text-align</a><br>
  <a href="http://www.w3schools.com/cssref/pr_text_text-decoration.asp">text-decoration</a><br>
  <a href="http://www.w3schools.com/cssref/pr_text_text-transform.asp">text-transform</a>
</p>
</div>
</div>

<script>
(function() {
    sandbox('#code-example-1',{height: 400, enableLiveAutocompletion: true});
})();
</script>

--
###Font properties: `font-family`, `font-size`, `font-weight`
```css
h1 {
    font-size: 21px;
    font-weight: bold;
}
p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
}
```

--
### Web save fonts

<div style="font-size: .7em; margin-top: 40px">
    <div class="left">
        <span style="text-decoration: underline;">Serif Fonts</span>

        <ul style="list-style: none; padding: 0; line-height: 40px">
        <li>Georgia, serif</li>
        <li>"Palatino Linotype", "Book Antiqua", Palatino, serif</li>
        <li>"Times New Roman", Times, serif</li>
        </ul>

        <span style="text-decoration: underline;">Monospace Fonts</span>

        <ul style="list-style: none; padding: 0; line-height: 40px">
        <li>"Courier New", Courier, monospace</li>
        <li>"Lucida Console", Monaco, monospace</li>
        </ul>

    </div>
    <div class="right">

        <span style="text-decoration: underline;">Sans-Serif Fonts</span>

        <ul style="list-style: none; padding: 0; line-height: 40px">
        <li>Arial, Helvetica, sans-serif    </li>
        <li>"Arial Black", Gadget, sans-serif   </li>
        <li>"Comic Sans MS", cursive, sans-serif    </li>
        <li>Impact, Charcoal, sans-serif    </li>
        <li>"Lucida Sans Unicode", "Lucida Grande", sans-serif  </li>
        <li>Tahoma, Geneva, sans-serif  </li>
        <li>"Trebuchet MS", Helvetica, sans-serif   </li>
        <li>Verdana, Geneva, sans-serif</li>
        </ul>
    </div>
</div>

--
### External resources for custom fonts

Web save fonts are boring and overused, <br>
use custom fonts.

https://www.google.com/fonts (easiest, hosts for you)

http://www.fontsquirrel.com/

http://www.dafont.com/

But which fonts go well toghether? http://fontpair.co/

--
### Using a custom font from Google
<img src="google-font-quick-use.png" alt="Google font quick use">
Click on **quick use**. Extend your `styles.css`

```css
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
/* @import always at the beginning of the file! */

body {
    font-family: 'Open Sans', sans-serif;
}
```

--
### Background properties: `background-color` `background-image`

```css
body {
    background-color: #f00;
    background-image: url('img/wood.png');
    background-position: 50% 20px;
    background-repeat: no-repeat; /*repeat, repeat-x, repeat-y*/
}
```

--
### Background properties sandbox: `background-color` `background-image`
<div class="editor-wrapper" id="code-example-2">

<div class="editor-css">p {
    color: white;
    background-image: url('wood.png');
    background-position: 1% 2px;
    background-repeat: no-repeat;
    background-color: #f00;
}</div>

<div class="rendered-html"><p>Hello World</p>
</div>
</div>

<script>
(function() {
    sandbox('#code-example-2',{height: 400, enableLiveAutocompletion: true});
})();
</script>


--
### The box model: `margin`, `border`, `padding`

<div style="background-color: #FFD800; padding: 50px; text-align: center; position: relative; margin-top: 40px">
    <div style="position: absolute; margin: 0 auto; top: 0;  left: 50%; transform: translate(-50%, 0);">Margin</div>
    <div style="background-color: #1DA5D0; padding: 40px; position: relative;">
        <div style="position: absolute; margin: 0 auto; top: 0;  left: 50%; transform: translate(-50%, 0); color: white;">Border</div>
        <div style="background-color: #FFD800; padding: 50px; position: relative;"><div style="position: absolute; margin: 0 auto; top: 0;  left: 50%; transform: translate(-50%, 0);">Padding</div>
        <div style="background-color: white; padding: 30px">Your content here</div>
        </div>
    </div>
</div>

--
### The box model sandbox: `margin`, `border`, `padding`

<div class="editor-wrapper" id="code-example-3">

<div class="editor-css">p {
   border: 1px solid #333;
   margin-top: 10px;
   margin-left: 20px;
   padding: 20px;
   padding-left: 5px;
   border-radius: 10px
}</div>

<div class="rendered-html"><p>Hello World</p>
</div>
</div>

<script>
(function() {
    sandbox('#code-example-3',{height: 400, enableLiveAutocompletion: true});
})();
</script>

--
<div style="height: 400px; line-height: 400px">
<span style="display: inline-block; width: 100%;line-height: 40px; text-align:center;">
You just learned about the middle "S" in C**S**S: **S**tyle
<br>
… lets go to the last "S" in CS**S**: **S**heet

</span>

--
### Sources: inline style attribute, internal `<style>` tag, external file
There are 3 ways to add CSS styles to your HTML file.

- inline `style="…"` attribute
- internal `<style>` tag
- external `.css` file

--
### Inline style attribute
Write CSS code in a style attribute of a HTML element.
```html
<h3 style="color: red; font-weight: normal;">
    I'm a subheader
</h3>
```
You don't even need a selector for this one.

--
### Reasoning against inline styles
It is not reccomended to use inline CSS styling.

<span style="color:white; background: red; display: inline-block; width: 40px; height: 40px; border-radius: 50%; text-align: center; line-height: 40px; margin-right: 20px">⬇</span>**Mixing languages**, HTML and CSS, is confusing.

<span style="color:white; background: red; display: inline-block; width: 40px; height: 40px; border-radius: 50%; text-align: center; line-height: 40px; margin-right: 20px">⬇</span>Inline styles are **not reusable**.

<span style="color:white; background: red; display: inline-block; width: 40px; height: 40px; border-radius: 50%; text-align: center; line-height: 40px; margin-right: 20px">⬇</span>Your text editor might have trouble autocompleting.

--
### Internal `<style>` tag
Write a style tag into the `head` of your HTML.
```html
<html>
    <head>
        <style type="text/css" media="screen">
           p {
            line-height: 20px;
           }
        </style>
    </head>
    <body>…</body>
</html>
```
Or anywhere else, but the `head` is the best place.

--
### Reasoning for and against internal `<style>` tags
It's is not reccomended but there is a case for internal styles.

<span style="color:white; background: red; display: inline-block; width: 40px; height: 40px; border-radius: 50%; text-align: center; line-height: 40px; margin-right: 20px">⬇</span>Mixing HTML and CSS.<br>
<span style="color:white; background: red; display: inline-block; width: 40px; height: 40px; border-radius: 50%; text-align: center; line-height: 40px; margin-right: 20px">⬇</span>Can't reuse in different HTML files.

<span style="color:white; background: #35EE35; display: inline-block; width: 40px; height: 40px; border-radius: 50%; text-align: center; line-height: 40px; margin-right: 20px">⬆</span>Distribute a single file HTML application.<br>

… we will learn this much later. For now **don't use** internal CSS.

--
### External `.css` file
Link an external CSS file in the `head` of your HTML.
```html
<html>
    <head>
        <link rel="stylesheet" href="./styles.css">
    </head>
    <body>…</body>
</html>
```
Then write pure CSS in `styles.css`
```css
body {
    font-size: 16px;
}
```
--
### Documentation resources

- **css-tricks**- simple, short, to the point
- **w3schools** - simple
- **developer.mozilla** - technical

https://css-tricks.com/almanac/properties/f/font/
http://www.w3schools.com/css/css_font.asp
https://developer.mozilla.org/en/docs/Web/CSS/font

Use the one you like best.

--
### The End
Continue with

<a href="text-editing-2.html">Text Editing 2: code types; indentation; find and replace; multiselection (15min)</a>

or go back to the <a href="https://github.com/select/learn-web-development">overview</a>.
