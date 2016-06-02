# Web(/App) Dev Course

<!-- MarkdownTOC -->

- [Getting Started - Opinionated first steps in learning web development \(20 min\)](#getting-started---opinionated-first-steps-in-learning-web-development-20-min)
- [HTML](#html)
  - [HTML Lesson 1: basics \(20 min\)](#html-lesson-1-basics-20-min)
  - [HTML Exercise 1: Hello world! \(15 min\)](#html-exercise-1-hello-world-15-min)
  - [HTML Lesson 2: image and hyperlink \(20 min\)](#html-lesson-2-image-and-hyperlink-20-min)
  - [Text Editing 1: Working with many files; better HTML editing \(15 min\)](#text-editing-1-working-with-many-files-better-html-editing-15-min)
  - [HTML Exercise 2: create a text adventure \(20 min\)](#html-exercise-2-create-a-text-adventure-20-min)
- [CSS](#css)
  - [CSS Lesson 1: basics \(20 min\)](#css-lesson-1-basics-20-min)
  - [Text Editing 2: code types; indentation; find and replace; multiselection \(15min\)](#text-editing-2-code-types-indentation-find-and-replace-multiselection-15min)
  - [CSS Exercise 1: styling the text adventure \(15 min\)](#css-exercise-1-styling-the-text-adventure-15-min)
  - [HTML & CSS Lesson 1 - Blocks and visibility \(10 min\)](#html--css-lesson-1---blocks-and-visibility-10-min)
  - [CSS Lesson 2: more selectors \(15 min\)](#css-lesson-2-more-selectors-15-min)
  - [Text Editing 3: type less CSS \(litterally\) \(5 min\)](#text-editing-3-type-less-css-litterally-5-min)
  - [CSS Exercise 2: building a reusable menu with a button \(15 min\)](#css-exercise-2-building-a-reusable-menu-with-a-button-15-min)
  - [Reading: HTML CSS](#reading-html-css)
- [JS \(client\)](#js-client)
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
- [JS \(server\)](#js-server)
- [JS \(client framewoks/libs\)](#js-client-framewokslibs)
- [Text Editing: VIM](#text-editing-vim)
- [Advanced topics](#advanced-topics)
  - [Securing your SSH login](#securing-your-ssh-login)
- [Resources and inspirations](#resources-and-inspirations)

<!-- /MarkdownTOC -->


## Getting Started - Opinionated first steps in learning web development (20 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/getting-started.html).
- Elements on the slides
- Text editor for these lessons: Sublime Text 3
- Write less, but lots of it
- Learn the 10 finger system
- Don't use your mouse, use your brain
- Universal keyboard shortcuts that you must know 1
- Introduce Yourself
- Universal keyboard shortcuts that you must know 2
- Universal keyboard shortcuts that you must know 3
- How to learn keyboard shortcuts: 2 every week


## HTML

### HTML Lesson 1: basics (20 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/224e104e4a29438472965b94efd920d130dd8106/dist/html-lesson-1.html).
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


### HTML Exercise 1: Hello world! (15 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/html-exercise-1.html).
- Create your first website
- Tags overview

### HTML Lesson 2: image and hyperlink (20 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/224e104e4a29438472965b94efd920d130dd8106/dist/html-lesson-2.html).
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

### Text Editing 1: Working with many files; better HTML editing (15 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/text-editing-1.html).
- Creating a project in Sublime Text 3
- Navigating in the project
- Installing plugins with Package Control
- Plugins: Emmet, All Autocomplete
- Finding editor commands with a keyboard shortcut

### HTML Exercise 2: create a text adventure (20 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/text-editing-2.html).

What needs to be done:
- Micha create structure.
- Artist create some character images.

## CSS
### CSS Lesson 1: basics (20 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/224e104e4a29438472965b94efd920d130dd8106/dist/css-lesson-1.html).
- Cascading Style Sheets: CSS is a stylesheet language that describes the presentation of an HTML (or XML)
- Syntax: Selector - Declaration (property: value)
- Selectors 1: tag selector
- Text properties: `color`, `text-align`, `text-decoration`, `text-transformation`
- Color values in r g b (a)
- Font properties: `font-family`, `font-size`, `font-weight`
- Background properties: `background` `-color` `-url`
- The box model `border`, `margin`, `padding`
- Sources: inline style attribute, internal `<style>` tag, external file
- Inline style attribute
- Reasoning against inline styles
- Internal `<style>` tag
- Reasoning for and against internal `<style>` tags
- External `.css` file
- Css property cheat sheet

### Text Editing 2: code types; indentation; find and replace; multiselection (15min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/text-editing-2.html).
- Switching the souce code highlighting
- Indentation control
- Configure indentation with editorconfig
- Find and replace in (all) files
- Plugins: Trailing Spaces
- Multi selection

### CSS Exercise 1: styling the text adventure (15 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/css-exercise-1.html).
- Creat an external CSS file
- Add styling
- Custom fonts

### HTML & CSS Lesson 1 - Blocks and visibility (10 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/master/dist/html-css-lesson-1.html).
- Semantic HTML elements
- Non semantic elements
- What `div` and `span` tag are used for
- Why two elements?
- `block` and `inline` example
- `block` and `inline` more visual example
- Which elements are `block` which `inline`
- Setting `block` and `inline` with CSS
- Show and hide with `display: none`
- Beyond `block` and `inline`

### CSS Lesson 2: more selectors (15 min)
Visit [the presentation](https://rawgit.com/select/learn-web-development/224e104e4a29438472965b94efd920d130dd8106/dist/css-lesson-2.html).
- Selectors 2: `tag`
- Selectors 2: `nested tags`, `nested>tags`
- Selectors 3: `.class`, `#id`
- Selectors 4 pseudo selectors: `:hover` `:nth-child(odd)`
- Positioning: `absolute`, `relative`, `fixed`

### Text Editing 3: type less CSS (litterally) (5 min)
- Plugins: Hayaku
- Plugins: CSScomb

### CSS Exercise 2: building a reusable menu with a button (15 min)
- CSS selector game: https://flukeout.github.io/
- `background-color`
- `text-shadow`
- selector for links with `.button` and `button`
- insert a "home" button into the text adventure
- button ttu

### Reading: HTML CSS
- Coding style: https://mdo.github.io/code-guide/
- Semantic HTML: http://www.w3schools.com/html/html5_semantic_elements.asp

---

**LUNCH BREAK**

---

## JS (client)
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

### JS Lesson 2: programming basics control flow
- `if`, `else`
- `for`
- `while`
- `continue`, `break`

### JS Exercise 2: solve large problems with control flow
Interactive game in the browser in the debugger command line.
- add array of numbers

### JS Lesson 3: programming basics functions
- definition
- arguments
- return value
- Variable scope: global vs local
- Code style: brackets, spaces, names
- jsFiddle examples to get help

### JS Lesson 4: DOM manipulation basics
- Finding one element with `queryselector`
- Finding a list of elemets with `queryselectorAll`
- `$` alias `queryselector`
- showing/hiding elements
- add/remove a class of and element
- moving elements in the DOM

### JS Lesson 5: ajax
- Async Javascript ... XML
- loading a text file
- loading a partial HTML and replacing an element
- loading JSON
- sending data, GET/POST

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

### CSS Lesson 3: responsive design
- only some elements need changes
- block and inline-block depending on width
- font sizes

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

### CSS Lesson 4: CSS preprocessors
- Comparision: SASS / SCSS, Stylus, LESS
- Installation SASS (webpack, grunt, gulp)
- SASS syntax: nesting
- SASS syntax: &
- SASS syntax: variables
- SASS syntax: partial files

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

## JS (server)
- Install nodejs
- Create a new project `npm init`
- Install packages `npm install` `npm i -S`
- Use packages `require()`
- Start server
- MVC vs REST vs Websocket
- Universal Code (client and server)

## JS (client framewoks/libs)
- Views: templating languages
- Views: templating languages, mustache
- Views: templating languages, meteor
- Views: templating languages, Angular
- Views: templating languages, Angular2
- Views: templating languages, React

## Text Editing: VIM
- Exercise: http://www.openvim.com/


Here is a link to a [test presentation](https://rawgit.com/select/learn-web-development/224e104e4a29438472965b94efd920d130dd8106/dist/test-presentation.html)

## Advanced topics

### Securing your SSH login
Visit [the presentation](https://rawgit.com/select/learn-web-development/224e104e4a29438472965b94efd920d130dd8106/dist/advanced-secure-login.html).

- Command line required - get one for Windows
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
