title: CSS Lesson 1 - Cascading Style Sheets basics
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/css-lesson-1.html
theme: ./custom-theme
controls: true

--
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
###Text properties
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


Do you know [additative color mixing](https://en.wikipedia.org/wiki/Additive_color) [?](https://goo.gl/pvhdpY)

--
###Color values in r g b (a)
[Wikipedia web colors](https://en.wikipedia.org/wiki/Web_colors#X11_color_names) or find matching [Coolors](https://coolors.co/app)
<img src="x11colors.jpg" alt="X11 colors"/>

--
###Text properties:
<a class="jsbin-embed" href="http://jsbin.com/woyabo/embed?css,output&height=400px">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.11"></script>

--
###Font properties: `font-family`, `font-size`, `font-weight`
JS Bin here

--
###Background properties: `background` `-color` `-url`
JS Bin here

--
###Other properties 1: the box model `border`, `margin`, `padding`
JS Bin here

--
###Other porperties 2: `float`
JS Bin here

--
### Sources: inline style attribute, internal `<style>` tag, external file
There are 3 ways to add CSS styles to your HTML file.

- inline style attribute
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

You **mix languages**, HTML and CSS, this is confusing.

Inline styles are **not reusable**.

Your text editor might has trouble autocompleting.

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

<span style="color:white; background: #35EE35; display: inline-block; width: 40px; height: 40px; border-radius: 50%; text-align: center; line-height: 40px; margin-right: 20px">⬆</span> Distribute a single file HTML application.<br>

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
<table style="font-size: 0.6em;">
    <tr>
        <td>
            <ul style="list-style: none; padding: 0">
                <li>`font-family` C W M</li>
                <li>`font-size` C W M</li>
                <li>`font-weight` C W M</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>`background-color`</li>
                <li>`background-url`</li>
            </ul>
        </td>
        <td>`border`, `margin`, `padding` `float`</td>
    </tr>
</table>


https://css-tricks.com/almanac/properties/t/text-transform/