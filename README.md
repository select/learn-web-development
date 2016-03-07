# Web(/App) Dev Course

<!-- MarkdownTOC autolink=true autoanchor=true bracket=round-->

- [Text Editing 1: using the text editor Sublime Text 3 (20 min)](#text-editing-1-using-the-text-editor-sublime-text-3-20-min)
- [HTML](#html)
    - [HTML Lesson 1 (20 min)](#html-lesson-1-20-min)
    - [Text Editing 2: Project Setup (10 min)](#text-editing-2-project-setup-10-min)
    - [HTML Exercise 1 (15 min)](#html-exercise-1-15-min)
    - [HTML Lesson 2 (10 min)](#html-lesson-2-10-min)
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
    - [JS Lesson 2: programming basics functions](#js-lesson-2-programming-basics-functions)
    - [JS Lesson 2: jQuery basics](#js-lesson-2-jquery-basics)
- [RegEx](#regex)
- [JS (server)](#js-server)

<!-- /MarkdownTOC -->


<a name="text-editing-1-using-the-text-editor-sublime-text-3-20-min"></a>
## Text Editing 1: using the text editor Sublime Text 3 (20 min)
use dyslexic plugin
- You will have to write a lot, write only what you really need.
- Don't use your mouse, use your brain
  + Ask audience why the are here, what they want to learn.
  + What you are learning here is supposed to solve your problems faster.
- Learn the 10 finger system
  + http://www.keybr.com/ ★★
  + http://bigbrownbear.co.uk/learntotype/ ★★
  + https://www.typing.com/student/start ★★★
- General keyboard shortcuts that you must know:
  + copy/cut and paste <kbd>Ctrl</kbd><kbd>C</kbd>, <kbd>Ctrl</kbd><kbd>X</kbd>, <kbd>Ctrl</kbd><kbd>V</kbd>
  + new tab <kbd>Ctrl</kbd><kbd>T</kbd>
  + close tab <kbd>Ctrl</kbd><kbd>F4</kbd>
  + close window <kbd>Alt</kbd><kbd>F4</kbd>
  + new file <kbd>Ctrl</kbd><kbd>N</kbd>
  + save <kbd>Ctrl</kbd><kbd>S</kbd>
  + save as <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>S</kbd>
  + multi selection: keep pressing <kbd>Ctrl</kbd> and click with mouse
  + select range <kbd>shift</kbd> click, <kbd>shift</kbd> click
- How to learn keyboard shortcuts: 2 every week

Survey: who knows keyboard shortcut a,b,c ... Introduction game, explain the keyshortcut

or send each participant a keyboard shortcut beforehand that they must learn.

<a name="html"></a>
## HTML
<a name="html-lesson-1-20-min"></a>
### HTML Lesson 1 (20 min)
  - HTML stands for Hyper Text Markup Language
  - similar to XML
  - What is XML
  - What is a tag, property="value", content
  - Tags create a tree structure
  - Well formed / not well formed
  - Escaping charcters, comments
  - HTML - a language to strucure/layout text
  - Tags: html, head, body
  - Tags in head: title, favicon
  - Tags in the body 1: `h1`, `p`, `i`, `b`, `hr`
  - Tags in the body 2: `ul>li`, `table>th,tr>td`

<a name="text-editing-2-project-setup-10-min"></a>
### Text Editing 2: Project Setup (10 min)
- Creating a project


<a name="html-exercise-1-15-min"></a>
### HTML Exercise 1 (15 min)
Create a website containing the elements: `h1`,`h2`,`h3`,`p`,`ul`,`li`,`table`,`th`,`tr`,`td`,`img`

  - h1 - h6 Heading
  - p Paragraph
  - i,b Italic, Bold
  - a Anchor (Hypertext refernece)
  - ul & li Unordered List & List Item
  - blockquote  Blockquote
  - hr  Horizontal Rule
  - img Image
  - div Division

<a name="html-lesson-2-10-min"></a>
### HTML Lesson 2 (10 min)
  - Tags in the body 3: `img`
  - The hyperlink: url, path, anchor

<a name="text-editing-3-working-with-many-files-better-html-editing-15-min"></a>
### Text Editing 3: Working with many files; better HTML editing (15 min)
- Navigating in the project (<kbd>Ctrl</kbd><kbd>P</kbd>)
- Plugins: installing Package Control
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
- Cascading Style Sheets: CSS is a stylesheet language that describes the presentation of an HTML (or XML)
- Syntax: Selector - Declaration (property: value)
- Selectors 1: tag selector
- Text properties: `color`, `text-align`, `text-decoration`, `text-transformation`
- Font properties: `font-family`, `font-size`, `font-weight`
- Background properties: `background` `-color` `-url`
- Other properties 1: the box model `border`, `margin`, `padding`
- Other porperties 2: `float`
- Sources: inline style porperty, internal &lt;style&gt; tag, external file

<a name="text-editing-4-new-source-code-types-5-min"></a>
### Text Editing 4: new source code types (5 min)
- Switching the souce code highlighting, indentation control
- Plugins: Hayaku
- Find and replace in (all) files <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>F</kbd>

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
  - Selectors 2: `nested tags`, `nested>tags`
  - Selectors 3: `.class`, `#id`
  - Selectors 4 pseudo selectors: `:hover` `:nth-child(odd)`
  - Positioning: `absolute`, `relative`, `fixed`

<a name="text-editing-5-type-less-css-litterally-5-min"></a>
### Text Editing 5: type less CSS (litterally) (5 min)
- Plugins: CSScomb, Trailing Spaces

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

<a name="js-lesson-2-programming-basics-functions"></a>
### JS Lesson 2: programming basics functions
- definition
- Scope: global vs local

<a name="js-lesson-2-jquery-basics"></a>
### JS Lesson 2: jQuery basics

<a name="regex"></a>
## RegEx

<a name="js-server"></a>
## JS (server)
