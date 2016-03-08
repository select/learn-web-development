title: CSS Lesson 1 - Cascading Style Sheets basics
author:
  name: select @ github
  twitter: rockdapus
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
--
###Background properties: `background` `-color` `-url`
--
###Other properties 1: the box model `border`, `margin`, `padding`
--
###Other porperties 2: `float`
--
###Sources: inline style porperty, internal &lt;style&gt; tag, external file