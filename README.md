# Web(/App) Dev Course

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->
- [Web(/App) Dev Course](#webapp-dev-course)
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
		- [Reading: HTML CSS](#reading-html-css)
	- [JS (client)](#js-client)
		- [JS Lesson 1: programming basics datatypes](#js-lesson-1-programming-basics-datatypes)
		- [JS Exercise 1: playing with variables](#js-exercise-1-playing-with-variables)
		- [JS Lesson 2: programming basics control flow](#js-lesson-2-programming-basics-control-flow)
		- [JS Exercise 2: solve large problems with control flow](#js-exercise-2-solve-large-problems-with-control-flow)
		- [JS Lesson 3: programming basics functions](#js-lesson-3-programming-basics-functions)
		- [JS Lesson 4: DOM manipulation basics](#js-lesson-4-dom-manipulation-basics)
		- [JS Lesson 5: ajax](#js-lesson-5-ajax)
		- [JS Lesson 6: Debugging](#js-lesson-6-debugging)
		- [CSS Lesson 3: responsive design](#css-lesson-3-responsive-design)
		- [Build Tools: webpack](#build-tools-webpack)
		- [CSS Lesson 4: CSS preprocessors](#css-lesson-4-css-preprocessors)
	- [RegEx](#regex)
	- [JS (server)](#js-server)
	- [JS (client framewoks/libs)](#js-client-framewokslibs)
	- [Text Editing: VIM](#text-editing-vim)
	- [Inspirations](#inspirations)
<!-- /TOC -->

<a name="text-editing-1-using-the-text-editor-sublime-text-3-20-min"></a>
## Text Editing 1: using a text editor (20 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/text-editing-1.html).
- Text editor for these lessons: Sublime Text 3
- Write less, but lots of it
- Learn the 10 finger system
- Don't use your mouse, use your brain
- Universal keyboard shortcuts that you must know
- How to learn keyboard shortcuts: 2 every week
<!--
Introduction game, explain the keyshortcut:
send each participant a keyboard shortcut beforehand that they must learn.

1) Ctrl+F | search
2) Ctrl+Z, Ctrl+Y / Ctrl+Shift+Z | undo, redo
3) Ctrl+A | select all
4) End / Home | end of the line/document, start of the line/document
5) Alt+Tab | cycle between windows
5) Ctrl+Tab | cycle between tabs
6) Super+D | hide all windows and show the desktop
7) F2 | when item ist selected, rename it
8) Super and start typinig (Linux, Windows)
9) Ctrl+Alt+V | paste special (e.g. paste in place or )
10) Ctrl+←, Ctrl+→ | next word previous word
11) Ctrl+B, Ctrl+I, Ctrl+U | bold, italic, underline
12) Ctrl+Shift+T | reopen closed tab
13) click on item; shift+ click on next item | select range

On intro round everybody must say: Name, Native Languge, explain keyshort
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
- CSS selector game: https://flukeout.github.io/
- `background-color`
- `text-shadow`
- selector for links with `.button` and `button`
- insert a "home" button into the text adventure
- button ttu

<a name="reading-html-css"></a>
### Reading: HTML CSS
- Coding style: https://mdo.github.io/code-guide/
- Semantic HTML: http://www.w3schools.com/html/html5_semantic_elements.asp

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

<a name="js-lesson-4-dom-manipulation-basics"></a>
### JS Lesson 4: DOM manipulation basics
- Finding one element with `queryselector`
- Finding a list of elemets with `queryselectorAll`
- `$` alias `queryselector`
- showing/hiding elements
- add/remove a class of and element
- moving elements in the DOM

<a name="js-lesson-5-ajax"></a>
### JS Lesson 5: ajax
- Async Javascript ... XML
- loading a text file
- loading a partial HTML and replacing an element
- loading JSON
- sending data, GET/POST

<a name="js-lesson-6-debugging"></a>
### JS Lesson 6: Debugging
- Developer Tools
- Console
- `console.log`, `console.warn`
- Interactive Debugger
- Beautify/Foramt: Libraries and Minified Code
- AJAX Requests
- Performance: Profiling function calls
- Mobile
<!--
http://juliepagano.com/blog/2014/05/18/javascript-debugging-for-beginners/
 -->

<a name="css-lesson-3-responsive-design"></a>
### CSS Lesson 3: responsive design
- only some elements need changes
- font sizes

<a name="build-tools-webpack"></a>
### Build Tools: webpack
- Comparision: Make, Grunt, Gulp, Webpack
- minify, uglify
- loading multiple files
- compile to one file
- watch jobs
- CSS preprocessing
- CSS autoprefix
- JS transpiling: ES6, CoffeScript, TypeScript, React JSX
- file syncronization (local/remote)
- live reloading/hot swapping

<a name="css-lesson-4-css-preprocessors"></a>
### CSS Lesson 4: CSS preprocessors
- Comparision: SASS / SCSS, Stylus, LESS
- Installation SASS (webpack, grunt, gulp)
- SASS syntax: nesting
- SASS syntax: &
- SASS syntax: variables
- SASS syntax: partial files

<a name="regex"></a>
## RegEx
- Numbers `\d`, letters `\w`, space `\s` any `.`
- Begining `^` and end `$` of line/text
- Negaging: not Numbers `\D`
- Escaping: `\`
- Repitition: `0,∞`; `1,∞`, `n`, `a,n`, `n,∞`
- Groups `(…)`
- Alphabet `[ab]`, not in alphabete `[^ab]`
- Flags multiple/global `/…/g`, ignore case `/…/i`
- Exercise
  + http://regex.alf.nu/
  + https://regexcrossword.com/ ★★
  + http://regexone.com/ ★★★ (maybe copy structure)
  + http://regexr.com/ ★★★
  + http://www.txt2re.com/ ★

<a name="js-server"></a>
## JS (server)
- Install nodejs
- Create a new project `npm init`
- Install packages `npm install` `npm i -S`
- Use packages `require()`
- Start server
- MVC vs REST vs Websocket
- Universal Code (client and server)

<a name="js-client-framewokslibs"></a>
## JS (client framewoks/libs)
- Views: templating languages
- Views: templating languages, mustache
- Views: templating languages, meteor
- Views: templating languages, Angular
- Views: templating languages, Angular2
- Views: templating languages, React

<a name="text-editing-vim"></a>
## Text Editing: VIM
- Exercise: http://www.openvim.com/


Here is a link to a [test presentation](https://rawgit.com/select/learn-web-development/master/dist/test-presentation.html)

## Advanced topics

### Securing your SSH login
- Command line required - <br>get one for Windows
- Get a cheap V-server
- Login as root
- Simiplify the login with an alias
- Always logging in as root is a bad idea
- Set up a new user that can `sudo`
- Disable login as `root` user
- Edit the SSH config to use your new user
- Don't type passwords - use a SSH key
- Use a password on your SSH key
- Now we have a private and a public key
- Upload the key file
- What happens on login
- Disable login with passwords
- SSH password only once per session
- Use a password manager
- KeePass works on all systems
- Sync over your own OwnCloud
- Add aditional users
- Advanced topics not coverd, but interesting
- (Not so) stupid things to avoid
- All commands
- Literature


<a name="inspirations"></a>
## Resources and inspirations

https://docs.python.org/2/tutorial/index.html

https://github.com/select/i-learn-python a python course that i taught for a copule of years

http://www.teaching-materials.org/javascript/

http://htmldog.com/guides/

https://www.freecodecamp.com/ ★★★ awesome interactive tutorial

https://bento.io/ ★★ links to nice tutorials and videos

https://developer.mozilla.org/en-US/Learn

http://learn.shayhowe.com/html-css/ ★★★ very well written with good examples

[JavaScript: The Good Parts](http://it-ebooks.info/book/274/#)

https://learnxinyminutes.com/docs/javascript/ very dense, compressed knowledge

https://www.flexboxgame.com/
