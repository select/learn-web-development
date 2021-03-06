title: JS Lesson 1 - Programming-basics datatypes
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/js-lesson-1.html
theme: ./cleaver-select-theme
controls: true

--
# JS Lesson 1

##Programming-basics datatypes

--
### Dynamic typing (duck typing)
<br>
<div class="hljs-quote">
    “If it walks like a duck and quacks like a duck, <br>I would
    call it a duck.”
</div>

--
### Dynamic typing (duck typing)
```javascript
mynumber = 1;
mystring = 'Free beer for everybody!';
```
Variable types are **automatically assigned** by the JavaScript interpreter.

That means `mynumber` is now of type `Number` and `mystring` of type `String`.

--
### Interactive Shell (REPL): browser console, nesh
JavaScript is a **dynamically interpreted language**. <br>
That means you can try out your code in real time.

You can programm JavaScript **directly in your browser** or in your OS console with e.g. *[nesh](https://github.com/danielgtaylor/nesh)*. 

Since you most likely are looking at this presentation in your browser let's try it there.

--
### JavaScript in the browser console

Use the shortcut <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>I</kbd> to open up the developer tools.

Click on the *Console* in Chome

<img src="Chrome-dev-shell.png" alt="Chrome developper shell">

--
### JavaScript in the browser console FireFox

For FireFox click here
<img src="FireFox-dev-shell.png" alt="Chrome developper shell">

I use Chrome/Chromium more often so Chrome will be the browser for these lessons.

Everything I will show you is also available in other browser too.
--
### Assigning a value to a variable
```javascript
var myvar = 'Hello World';
```

You can store a value in a variable by using the `=` operator. <br>
This can be confusing at first 
- `=` does not mean equality as in a comparison
- the assignment is from right to left

```javascript
var myvar ⬅ 'Hello World';
```

--
### Datatypes

No you will learn **all the types of data** you can store in variables

... well at least all types you will need in your first few years of programming anyways.

--
### `Number`: Your browser, your calculator
Open the debug tools <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>I</kbd> and switch to the console, here is your calculator

```
› 2+2
4
› (50-5*6)/4
5
```
--
### `Number`: Your browser, your calculator
Right on! Lets store some numbers
```
› width = 20
› height = 5*9
› width * height
900
```
<div class="fragment">
    Whoa you forgot the `var` before your variable!
</div>

<div class="fragment">
    It's ok we just created **global variables**, something we want to **avoid later** but for learning it's ok.
</div>
--
### `Number`: Your browser, your calculator
Right on! Lets store some numbers
```
› width = 20
› height = 5*9
› width * height
900
```
<div class="fragment">
    But what about the semicolons `;`?
</div>

<div class="fragment">
    We actually don't need them. However later we will see that we can run into **trouble** if we don't use it with more **complex code**.
</div>


--
### `Number`: Integer, Float, `+`,`-`,`*`,`/`
So far we have seen full numbers (Integers) only, <br>
but there are floating point numbers too
```
› 3 * 3.75 / 1.5
7.5
```
<div class="fragment">
    We mixed ints and floats and we got floats.
</div>

--
### `String`
Strings are **lists** of characters
```
› 'Hello World!'
"Hello World!"
```

--
### `String`: single quotes, double quotes
In JS it does not matter what you use.

... TODO is that true?????
```
› 'Hello World!'
"Hello World!"
› "Hello World!"
"Hello World!"
```

--
### `String`: special charcters
There are some special caracters <br>
<table>
    <tr>
        <td>\n</td>
        <td>new line</td>
    </tr>
    <tr>
        <td>\t</td>
        <td>tab</td>
    </tr>
</table>
We need them because e.g. a `String` **can not span several lines**.
```
› 'Hello 
World'
```
[]This will generate an Error

--
### `String`: special charcters
Special characters start with a `\` backslash followed by a letter. <br>
These special chacters get **interpreted**
or you could also say converted to their actual character.
```
› 'Hello \nWorld'
Hello
World
```

--
### `String`: special charcters
But how do you write a backslash then?
... you must **escape it**.
```
› 'Hello \\nWorld'
Hello \nWorld
```
<div class="fragment">
    This is the same priciple that we saw in the HTML lesson. <br>
    `&lt;` -> `<` where the escape charcter was `&`
</div>

--
### String Concatenation
Strings can be glued together, this is called string concatenation
```
'hello '+'world'
```

--
### Type Casting
Numbers and Strings can be converted into each other
```
› String(42)
"42"
› Number("13")
13
```
But of course this can fail
```
› Number("Ham and eggs")
NaN
```


--
### Array (List)

--
### Array length, `[]` operator: access to children

--
### Object

--
### Object `[]` operator

--
### Boolean

--
### Other datatypes as Booleans

--
### undefined/null

--
### Assigning an expression to a variable

--
### Variable names

--
### Comments

