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
    /* comment: TODO change the color*/
}
```
It's as easy as specifing the tag name.
--
###Text properties:
`color`, `text-align`, `text-decoration`, `text-transformation`

Lety play with some text properties and see that they do

--
###Color values in r g b (a)

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