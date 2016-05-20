title: Getting Started - Opinionated first steps in learning web development
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/getting-started.html
theme: ./cleaver-select-theme
controls: true

--
#Getting Started

##Opinionated first steps in learning web development

<!-- use dyslexic plugin -->

--
### Elements on the slides
<script src="js-sandbox.js" type="text/javascript" charset="utf-8"></script>
<div style="position: absolute; top: 19px; right: 0; font-size: 0.6em; background-color: white; border: 2px dashed #eee;" id="dirs-current" hidden>
Sometimes there is an additional <br>hint hidden here.</div>
<span style="font-size: 0.5em; position: absolute; top: 0; right: 0; cursor: pointer; color: red; font-weight: bold;" onclick="document.querySelector('#dirs-current').hidden = !document.querySelector('#dirs-current').hidden;"> click me </span>

Code Sandbox
<div class="editor-wrapper" id="code-example-1">

<div class="editor-container">
<script type="text/plain" class="editor-html" >Hello World!
Try changing this.</script>
</div>
<div class="rendered-html"></div>
<style type="text/css" class="rendered-css">
  .rendered-html table td, .rendered-html table th{
    border: 1px solid;
  }
  </style>
</div>

<script>
(function() {
    sandbox('#code-example-1',{height: 60});
})();
</script>

Source Code
```css
ul > li { padding: 0 }
```
Keyboard Shortcut
<kbd>Ctrl</kbd><kbd>C</kbd>

Application Menu Path
`File ▸ Open`


--
### Text editor for these lessons: <br>Sublime Text 3
Download and install it from here:

https://www.sublimetext.com/3

**Why?** Fast, plugin ecosystem … I know it.

**Alternatives?** [Atom](https://atom.io/) (beginner), [Vim](http://www.vim.org/) (pro)
--
### Write less, but lots of it
Write only what you really need, but learn through repetition.

In the *text editing lessons* you will learn many tricks how type less while avoiding errors and working faster.
<div></div>
--
### Learn the 10 finger system
- https://www.typing.com/student/start ★★★
- http://www.keybr.com/ ★★
- http://bigbrownbear.co.uk/learntotype/ ★★

You can learn blind typing in less than 2 month with 5 minutes of practice a day!

--
### Don't use your mouse, use your brain
The keyboard is much faster than the mouse.

<!-- 
  + Ask audience why the are here, what they want to learn.
  + What you are learning here is supposed to solve your problems faster.
 -->

--
### Universal keyboard shortcuts that you must know 1

<table>
    <tr>
        <td>copy and paste</td><td><kbd>Ctrl</kbd><kbd>C</kbd>, <kbd>Ctrl</kbd><kbd>V</kbd></td>
    </tr><tr>
        <td>cut</td><td><kbd>Ctrl</kbd><kbd>X</kbd></td>
    </tr><tr>
        <td>save</td><td><kbd>Ctrl</kbd><kbd>S</kbd></td>
    </tr><tr>
        <td>save as</td><td><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>S</kbd></td>
    </tr><tr>
      <td>search</td><td><kbd>Ctrl</kbd><kbd>F</kbd></td>
    </tr><tr>
      <td>end of line/document,<br>start of line/document </td><td><kbd>End</kbd>, <kbd>Home</kbd></td>
    </tr>
</table>

--
### Introduce Yourself
It's your turn
- stand up
- say your name (first name / nick name)
- what is your native tounge
- tell and explain your keyboard shortcut

--
### Universal keyboard shortcuts that you must know 2
<style type="text/css" media="screen">
  .kbdshrt3 td {
    padding-right: 80px;
  }
</style>
<table class="kbdshrt3">
    <tr>
      <td>multi selection </td><td><kbd>Ctrl</kbd> click</td>
    </tr><tr>
      <td>select range</td><td>click + <kbd>shift</kbd> click</td>
    </tr><tr>
      <td>select all</td><td><kbd>Ctrl</kbd><kbd>A</kbd></td>
    </tr><tr>
        <td>new file</td><td><kbd>Ctrl</kbd><kbd>N</kbd></td>
    </tr><tr>
        <td>close window</td><td><kbd>Alt</kbd><kbd>F4</kbd> / <kbd>Ctrl</kbd><kbd>W</kbd></td>
    </tr><tr>
        <td>new tab</td><td><kbd>Ctrl</kbd><kbd>T</kbd></td>
    </tr><tr>
        <td>close tab</td><td><kbd>Ctrl</kbd><kbd>F4</kbd></td>
    </tr><tr>
      <td>Restore closed tab</td><td><kbd>Ctrl</kbd><kbd>Shit</kbd><kbd>T</kbd></td>
    </tr>
</table>


--
### Universal keyboard shortcuts that you must know 3
<style type="text/css" media="screen">
  .kbdshrt2 td {
    padding-right: 10px;
  }
</style>
<table class="kbdshrt2">
    <tr>
      <td>undo, redo</td><td style="white-space: nowrap;"><kbd>Ctrl</kbd><kbd>Z</kbd>, <br><kbd>Ctrl</kbd><kbd>Y</kbd> / <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>Z</kbd></td>
    </tr><tr>
      <td>cycle between windows</td><td><kbd>Alt</kbd><kbd>Tab</kbd></td>
    </tr><tr>
      <td>cycle between tabs</td><td><kbd>Ctrl</kbd><kbd>Tab</kbd></td>
    </tr><tr>
      <td>rename selected item</td><td><kbd>F2</kbd></td>
    </tr><tr>
      <td>paste special (e.g. paset in place, or paste plain text)</td><td><kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>V</kbd></td>
    </tr>
</table>
--
### Universal keyboard shortcuts that you must know 4
<style type="text/css" media="screen">
  .kbdshrt2 td {
    padding-right: 10px;
  }
</style>
<table class="kbdshrt2">
    <tr>
      <td>next word, <br>previous word</td><td><kbd>Ctrl</kbd><kbd>→</kbd>, <br><kbd>Ctrl</kbd><kbd>←</kbd></td>
    </tr><tr>
      <td>bold, italic, <br>underline</td><td><kbd>Ctrl</kbd><kbd>B</kbd>, <kbd>Ctrl</kbd><kbd>I</kbd>, <br><kbd>Ctrl</kbd><kbd>U</kbd></td>
    </tr><tr>
      <td>open application</td><td><kbd>Super</kbd> `…software name`</td>
    </tr><tr>
      <td>show desktop</td><td><kbd>Super</kbd><kbd>D</kbd></td>
    </tr><tr>
      <td>lock screen</td><td><kbd>Super</kbd><kbd>L</kbd></td>
    </tr>
</table>

--
### Pro-Tip™
Learn 2 new keyboard shortcuts every week

--
### The End
Continue with the 

<a href="html-lesson-1.html">HTML Lesson 1: basics (20 min)</a>

or go back to the <a href="https://github.com/select/learn-web-development">overview</a>.