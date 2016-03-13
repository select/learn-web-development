title: CSS Lesson 1 - Cascading Style Sheets basics
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/cleaver-select-theme
output: dist/cleaver-select-theme.html
theme: select/cleaver-select-theme
controls: true

--
# Cleaver <br> Select Theme
##Press <kbd>ESC</kbd> and select a slide

--
### Usage

At the beginning of your presentation add

```
 theme: select/cleaver-select-theme
 title: My Title
 …

 --
 # Title slide
 ## Sub header

 --
 ### My first slide
 Some content
```

--
### <kbd>ESC</kbd> overview

Try pressing the <kbd>ESC</kbd> button to get and overview of all slides.

Click on a slide to select it.

Press <kbd>ESC</kbd> again to exit the overview.

--
### Background image

Put `background-image.jpg` in the same directory as the HTML output.

The CSS style is set to one large image.
```
background: url('background-image.jpg') center center no-repeat;
```

--
### Fonts

Open `style.css` and change

```
@import url(https://fonts.googleapis.com/css?family=Hind:400,500,600,700,300);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);
@import url(https://fonts.googleapis.com/css?family=Fira+Mono:400,700);
body {
  font-family: 'Open Sans', sans-serif;
  …
```
to fit your needs. Use http://fontpair.co/ to find matching fonts.