title: Text Editing 3 - type less CSS (litterally)
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/text-editing-3.html
theme: ./cleaver-select-theme
controls: true

--
# Text Editing 3

## type less CSS (litterally)

--
### Plugins: Hayaku
The Hayaku Plugin allows you to write CSS by only typing abbreviations of the first letters of the CSS properties.

<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd> `install …` `Hayaku`

--
### Hayaku examples
To write
```
display: block
```

type

`db` <kbd>Tab</kbd>

--
### Hayaku examples
To create a back background type

`bg` <kbd>Tab</kbd>

it will complete to 
```
background: 
```

if you now type `0` it will complete the short hex code for black:

```
background: #000
```


--
### Comment your code
It's a good practice to write comments into your code to remember and share your thoughts. Just a quick reminder, this is what comments look like.

```css
/* I'm a CSS comment */
```

```html
<!-- I'm a HTML comment -->
```
… too tedious to write them by hand.
--
### Comment shorcut
Since comments in most languages start with `/` the shortcut is.

<kbd>Ctrl</kbd><kbd>/</kbd>

Sucks to have a German keyboard layout now o_O
--
### The End
Continue with the

<a href="css-exercise-2.html">CSS Exercise 2: building a reusable menu with a button (15 min)</a>

or go back to the <a href="https://github.com/select/learn-web-development">overview</a>.
