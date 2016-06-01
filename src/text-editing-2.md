title: Text Editing 2 - code types; indentation; find and replace; multiselection (15min)
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/text-editing-2.html
theme: ./cleaver-select-theme
controls: true

--
# Text Editing 2

## code types; indentation; find and replace; multiselection

--
### Switching the souce code highlighting
<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd> `Set Syntax …`
or bottom right 

--
### Indentation control
Bottom right to set the number of spaces

<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd> `Reindent …`<br>
To automatically indet your code

<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd> `Convert to Space`<br>
<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd> `Convert to Tabs`

--
### Configure indentation with editorconfig 
Create the file `.editorconfig` in the root folder
```
# http://editorconfig.org
root = true

[*]
indent_style = tab
# indent_size = 2 #not used since this should be up to everybody
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

--
### Find and replace in (all) files 
Find <br>
<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>F</kbd>

Find in project <br>
<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>F</kbd><br>

Options: case sensitve, regex <br>
Where: file patterns e.g. `*.html` `src/*.css`

--
### Plugins: Trailing Spaces
The Trailing Spaces plugin will delete all spaces at the end of a line.

Trailing space do not cause problems but we want to keep our code clean.

<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd> `install …`

`Trailing Spaces`

--
### Multi selection 
Select a string that you want to change, multiple times press

<kbd>Ctrl</kbd><kbd>D</kbd>

or use the mouse and <kbd>Ctrl</kbd> to create a multi-selection

--
### The End
Continue with the

<a href="css-exercise-1.html">CSS Exercise 1: styling the text adventure</a>

or go back to the <a href="https://github.com/select/learn-web-development">overview</a>.
