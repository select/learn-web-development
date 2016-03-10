# Web(/App) Dev Course

<!-- MarkdownTOC autolink=true autoanchor=true bracket=round-->

- [Text Editing 1: using the text editor Sublime Text 3 (20 min)](#text-editing-1-using-the-text-editor-sublime-text-3-20-min)
- [HTML](#html)
  - [HTML Lesson 1: basics (20 min)](#html-lesson-1-basics-20-min)
  - [Text Editing 2: Project Setup (10 min)](#text-editing-2-project-setup-10-min)
  - [HTML Exercise 1: My first HTML page (15 min)](#html-exercise-1-my-first-html-page-15-min)
  - [HTML Lesson 2: image and hyperlink (20 min)](#html-lesson-2-image-and-hyperlink-20-min)
  - [Text Editing 3: Working with many files; better HTML editing (15 min)](#text-editing-3-working-with-many-files-better-html-editing-15-min)
  - [HTML Exercise 2: create a text adventure (20 min)](#html-exercise-2-create-a-text-adventure-20-min)
- [CSS](#css)
  - [CSS Lesson 1: basics (20 min)](#css-lesson-1-basics-20-min)
  - [Text Editing 4: new source code types (5 min)](#text-editing-4-new-source-code-types-5-min)
  - [CSS Exercise 1: styling the text adventure (20 min)](#css-exercise-1-styling-the-text-adventure-20-min)
  - [CSS Lesson 2: more selectors (15 min)](#css-lesson-2-more-selectors-15-min)
  - [Text Editing 5: type less CSS (litterally) (5 min)](#text-editing-5-type-less-css-litterally-5-min)
  - [CSS Exercise 2: building a reusable menu with a button (15 min)](#css-exercise-2-building-a-reusable-menu-with-a-button-15-min)
- [JS (client)](#js-client)
  - [JS Lesson 1: programming basics datatypes](#js-lesson-1-programming-basics-datatypes)
  - [JS Exercise 1: playing with variables](#js-exercise-1-playing-with-variables)
  - [JS Lesson 2: programming basics control flow](#js-lesson-2-programming-basics-control-flow)
  - [JS Exercise 2: solve large problems with control flow](#js-exercise-2-solve-large-problems-with-control-flow)
  - [JS Lesson 3: programming basics functions](#js-lesson-3-programming-basics-functions)
  - [JS Lesson 4: jQuery basics](#js-lesson-4-jquery-basics)
  - [JS Lesson 5: ajax](#js-lesson-5-ajax)
- [RegEx](#regex)
- [JS (server)](#js-server)
- [Inspirations](#inspirations)

<!-- /MarkdownTOC -->


<a name="text-editing-1-using-the-text-editor-sublime-text-3-20-min"></a>
## Text Editing 1: using the text editor Sublime Text 3 (20 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/text-editing-1.html).
- Write less, but lots of it
- Learn the 10 finger system
- Don't use your mouse, use your brain
- Universal keyboard shortcuts that you must know
- How to learn keyboard shortcuts: 2 every week
<!-- 
Survey: who knows keyboard shortcut a,b,c ... Introduction game, explain the keyshortcut

or send each participant a keyboard shortcut beforehand that they must learn.
 -->
<a name="html"></a>
## HTML
<a name="html-lesson-1-basics-20-min"></a>
### HTML Lesson 1: basics (20 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/html-lesson-1.html).
- HTML stands for Hyper Text Markup Language
- HTML is similar to XML
- What is XML
- The element: tag, attribute="value", content
- Tags create a tree structure
- Well-formed / not well-formed
- Escaping charcters, comments
- HTML - a language to strucure and layout text and images
- Tags: `html`, `head`, `body`
- Tags in `head`: `title`, `favicon`
- Tags in the `body` 1: `h1`, `p`, `i`, `b`, `br`, `hr`
- Tags in the `body` 2: `table>tr>th,td`, `ul>li`

<a name="text-editing-2-project-setup-10-min"></a>
### Text Editing 2: Project Setup (10 min)
- Creating a project


<a name="html-exercise-1-my-first-html-page-15-min"></a>
### HTML Exercise 1: My first HTML page (15 min)
Create a website containing the elements: `h1`,`h2`,`h3`,`p`,`ul`,`li`,`table`,`th`,`tr`,`td`,`img`
<!-- 
  - h1 - h6 Heading
  - p Paragraph
  - i,b Italic, Bold
  - a Anchor (Hypertext refernece)
  - ul & li Unordered List & List Item
  - blockquote  Blockquote
  - hr  Horizontal Rule
  - img Image
  - div Division
 -->
<a name="html-lesson-2-image-and-hyperlink-20-min"></a>
### HTML Lesson 2: image and hyperlink (20 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/html-lesson-2.html).
- The `img` tag
- Moving down
- An example folder structure
- From the current directory
- Moving one level up
- Did you get it already?
- The hyperlink/anchor tag `a`
- References: within, local, external
- References within: anchor
- References local: absolute, relative
- Reference external
- The **U**niform **R**esource **L**ocator

<a name="text-editing-3-working-with-many-files-better-html-editing-15-min"></a>
### Text Editing 3: Working with many files; better HTML editing (15 min)
- Navigating in the project (<kbd>Ctrl</kbd><kbd>P</kbd>)
- Installing plugins with Package Control
- Plugins: Emmet, All Autocomplete
- Finding commands and using commands without specific shortcut <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd>
- multi selection <kbd>Ctrl</kbd><kbd>D</kbd>

<a name="html-exercise-2-create-a-text-adventure-20-min"></a>
### HTML Exercise 2: create a text adventure (20 min)
Createing a text adventure with HTML pages

What needs to be done:
- Micha create structure.
- Artist create some character images.

<a name="css"></a>
## CSS
<a name="css-lesson-1-basics-20-min"></a>
### CSS Lesson 1: basics (20 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/css-lesson-1.html).
- Cascading Style Sheets: CSS is a stylesheet language that describes the presentation of an HTML (or XML)
- Syntax: Selector - Declaration (property: value)
- Selectors 1: tag selector
- Text properties: `color`, `text-align`, `text-decoration`, `text-transformation`
- Color values in r g b (a)
- Font properties: `font-family`, `font-size`, `font-weight`
- Background properties: `background` `-color` `-url`
- Other properties 1: the box model `border`, `margin`, `padding`
- Other porperties 2: `float`
- Sources: inline style attribute, internal `<style>` tag, external file
- Inline style attribute
- Reasoning against inline styles
- Internal `<style>` tag
- Reasoning for and against internal `<style>` tags
- External `.css` file
- Css property cheat sheet

<a name="text-editing-4-new-source-code-types-5-min"></a>
### Text Editing 4: new source code types (5 min)
- Switching the souce code highlighting, indentation control
- Find and replace in (all) files <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>F</kbd>
- Plugins: Trailing Spaces

<a name="css-exercise-1-styling-the-text-adventure-20-min"></a>
### CSS Exercise 1: styling the text adventure (20 min)
Basic styling of the text adventure
- External CSS file
- background black
- nice font from http://google.com/fonts
- line-height for better readability
- margin for `h1`


<a name="css-lesson-2-more-selectors-15-min"></a>
### CSS Lesson 2: more selectors (15 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/css-lesson-2.html).
- Selectors 2: `nested tags`, `nested>tags`
- Selectors 3: `.class`, `#id`
- Selectors 4 pseudo selectors: `:hover` `:nth-child(odd)`
- Positioning: `absolute`, `relative`, `fixed`

<a name="text-editing-5-type-less-css-litterally-5-min"></a>
### Text Editing 5: type less CSS (litterally) (5 min)
- Plugins: Hayaku
- Plugins: CSScomb

<a name="css-exercise-2-building-a-reusable-menu-with-a-button-15-min"></a>
### CSS Exercise 2: building a reusable menu with a button (15 min)
- bg color
- text-shadow
- selector for links with .button and button and div
- insert a "home" button into the text adventure
- button ttu

---

**LUNCH BREAK**

---

<a name="js-client"></a>
## JS (client)
<a name="js-lesson-1-programming-basics-datatypes"></a>
### JS Lesson 1: programming basics datatypes
- Dynamic typing (duck typing)
- Interactive Shell, REPL, nesh, browser console
- Assigning a value to a variable
- Datatypes
  + Number: Integer, Float, `+`,`-`,`*`,`/`
  + String
    * Concatenation
  + Array (List)
    * length, `[]` operator: access to children
  + Object
    * `[]` operator
  + Boolean
    * relation to other types
  + undefined/null
- Assigning an expression to a variable
- Variable names
- Comments

<a name="js-exercise-1-playing-with-variables"></a>
### JS Exercise 1: playing with variables
Interactive game in the browser in the debugger command line.
- create a string store in var `a`
- create another string `b` and concat them
- multiply two large numbers
- 3 satz??
- create an array
- access the first element
- access the fist and the last elmenent (length) and concat
- create a phonebook (object)
- concat a string and a number

<a name="js-lesson-2-programming-basics-control-flow"></a>
### JS Lesson 2: programming basics control flow
- `if`, `else`
- `for`
- `while`
- `continue`, `break`

<a name="js-exercise-2-solve-large-problems-with-control-flow"></a>
### JS Exercise 2: solve large problems with control flow
Interactive game in the browser in the debugger command line.
- add array of numbers

<a name="js-lesson-3-programming-basics-functions"></a>
### JS Lesson 3: programming basics functions
- definition
- arguments
- return value
- Variable scope: global vs local
- Code style: brackets, spaces, names
- jsFiddle examples to get help

<a name="js-lesson-4-jquery-basics"></a>
### JS Lesson 4: jQuery basics

<a name="js-lesson-5-ajax"></a>
### JS Lesson 5: ajax

<a name="regex"></a>
## RegEx

<a name="js-server"></a>
## JS (server)

Here is a link to a [test presentation](https://rawgit.com/select/learn-web-development/master/dist/test-presentation.html)

<a name="inspirations"></a>
## Inspirations

https://docs.python.org/2/tutorial/index.html

https://github.com/select/i-learn-python

http://www.teaching-materials.org/javascript/
