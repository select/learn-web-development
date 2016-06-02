title: Text Editing 1 - using the text editor Sublime Text 3
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/html-lesson-1.html
theme: ./cleaver-select-theme
controls: true

--
<script src="js-sandbox.js" type="text/javascript" charset="utf-8"></script>
#HTML Lesson 1

##The basiscs of the **H**yper **T**ext **M**arkup **L**anguage

--
### HTML stands for <br>**H**yper **T**ext **M**arkup **L**anguage

HTML helps to render and layout text and images.

Writing HTML is not programming since it only creates static files that you can view but not execute under different contexts.

--
### HTML is similar to XML

The E**x**tensible **M**arkup **L**anguage<br>
is a flexible, machine-readable data representation format.

Understanding XML will help you to understand HTML in a wider context.
--
### What is XML
<img src="einkaufsliste-digital-schreiben.jpg" alt="https://nubon.de/funktionen/einkaufslisten.html replace with similar image if no rights">
XML was created to organize any **text-based** information in a **machine-readable** way.

The format can be **user defined**.
--
### The element: tag, attribute="value", content
This is an element.
```xml
<mytagname myattr="some value">
  The element content
</mytagname>
```
This is an empty element.
```xml
<othertag myattr="some value" />
```

--
### Tags create a tree structure
```xml
<bookshelf location="hallway" >
  <material>wood</material>
  <book title="Momo" author="Michael E" >
    <p>In old, old times, when the ...</p>
  </book>
  <book title="Pippi Longst" author="Astrid L" >
    At the end of a little ...
  </book>
</bookshelf>
```

--
### Tags create a tree structure
```xml
o     <bookshelf location="hallway" >
├─o     <material>wood</material>
├─o     <book title="Momo" author="Michael E" >
│ └─o     <p>In old, old times, when the ...</p>
│       </book>
└─o     <book title="Pippi Longst" author="Astrid L">
          At the end of a little ...
        </book>
      </bookshelf>
```

--
### Well-formed / not well-formed
Well-formed
```xml
<bookshelf>
  <material>wood</material>
</bookshelf>
```
⚠ Not well-formed
```xml
<bookshelf>
  <material>wood
</bookshelf>
  </material>

```
--
### Escaping charcters, comments
Some character have special meanings, use them by escaping them.

<table style="background-color: rgba(255, 255, 255, 0.7); width: 100%; border-radius: 3px">
  <tr>
    <td>`< >`</td>
    <td>➜</td>
    <td>**&amp;**lt**;** **&amp;**gt**;**</td>
  </tr>
    <td>`' “`</td>
    <td>➜</td>
    <td>**&amp;**apos**;** **&amp;**quot**;**</td>
  </tr>
  <tr>
    <td>&amp;</td>
    <td>➜</td>
    <td>**&amp;**amp**;** </td>
  </tr>
</table>

Comments to your work are ignore and stay hidden.
```xml
<!-- this is a comment -->
```

   
--
### HTML - a language to strucure and layout text and images
No more bookshelf examples. On the basis of what you just seen we will now learn to speak HTML.

We want to organise text and image, but first we need some strucure.
--
### Tags: `html`, `head`, `body`
```html
<!DOCTYPE html> <!-- this is what we speak -->
<html>          <!-- the root element -->

  <head>        <!-- things you do not see -->
  </head>       <!-- on the page -->

  <body>        <!-- things you see on your page -->
  </body>

</html>
```
--
### Tags in the `head`: `title`, `favicon`
```html
<head>
  
  <meta charset="utf-8"> <!--so you can write Äéϊ…-->
  
  <title>
    Title - you see me in the browser tab 
    and in the Google search
  </title>
  
  <link rel="icon" 
      type="image/png" 
      href="http://example.com/myicon.png">

</head>
```
--

### Tags in the `body` 1: `h1`, `p`, `i`, `b`, `br`, `hr`
<div class="js-sandbox" data-height="400">
<script type="text/plain" class="editor-html" ><h1>Heading 1</h1>

<p>
  I am a paragraph. 
  Here are <i>some</i> text 
  <b>formatting</b> tags.

  <br>
  
  There was a line break and a 
  horzontal ruler is below.
  
  <hr>
  
  You can play with the code 
  yourself now.

</p></script>
</div>

--
### Tags in the `body` 2: `table>tr>th,td`, `ul>li`
<div class="js-sandbox" data-height="400">
<script type="text/plain" class="editor-html" ><h1>Table</h1>
<table>
  <tr>
    <th>Name</th>
    <th>Desciption</th>
  </tr>
  <tr>
    <td>tr</td>
    <td>a table row</td>
  </tr>
  <tr>
    <td>td</td>
    <td>a table column</td>
  </tr>
</table>

<h1>List</h1>
<ul>
  <li>this</li>
  <li>is</li>
  <li>a list</li>
</ul>
</script>
</div>
<style type="text/css" class="rendered-css">
  .rendered-html table td, .rendered-html table th{
    border: 1px solid;
  }
  </style>
</div>

--
### The End
Continue with the 

<a href="html-exercise-1.html">HTML Exercise 1: My first HTML page (15 min)</a>

or go back to the <a href="https://github.com/select/learn-web-development">overview</a>.
