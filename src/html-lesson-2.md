title: HTML Lesson 2 - Image and hyperlink
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
  continue: bla.html
output: dist/html-lesson-2.html
theme: ./cleaver-select-theme
controls: true

--
#HTML Lesson 2

##Image and Hyperlink

--
### The `img` tag
```html
<img src="dir/path/hot-chicks.jpg"
  alt="Natures beauty captured in an image.">
```
What? No closing or empty tag.

Relax HTML is "almost" XML but more relaxed, everybody forgot to close them anyway.

`dir/path/image.jpg` Is you Windows broken? Paths go like `C:\windowse\system32\virus.dll`

--
### An example folder structure
All paths in GNU/Linux (and OS X) start from one root
```
/
```
Lets say we have the following folder structure
```
o
├─o home
│ ├─o Desktop
│ └─o Documents
│
├─o media
│ └─o MyUSBstick
…
```

--
### Moving down
```
o
├ …
├─o media
… └─o MyUSBstick
    └─o secret-stash
      └─o rainbow-dash.jpg

```

Access all your files by adding `/` between folders
```
/media/MyUSBstick/secret-stash/rainbow-dash.jpg
```

--
### From the current directory
<div style="position: absolute; top: 0; right: 0; font-size: 0.6em; background-color: white; border: 2px dashed #eee;" id="dirs-current" hidden>
```
o
├─o home
│ ├─★ Desktop
│ │ └─o web-dev-course
│ │   └─o presentation.md
│ └─o Documents
│
├─o media
│ └─o MyUSBstick
    …
```
</div>
<span style="font-size: 0.3em; position: absolute; top: 0; right: 0; cursor: pointer;" onclick="document.querySelector('#dirs-current').hidden = !document.querySelector('#dirs-current').hidden;"> ? show tree </span>
if you are in e.g. `/home/Desktop` you can start with
```
.
```
from the **current location** and go to a subfolder
```
./web-dev-course/presentation.md
```
which is the same as writing
```
/home/Desktop/web-dev-course/presentation.md
```

--
### From the current directory
But since this is so common we can just leave away the
```
.
```
and write
```
web-dev-course/presentation.md
```
which is still the same as writing
```
/home/Desktop/web-dev-course/presentation.md
```


--
### Moving one level up
<div style="position: absolute; top: 0; right: 0; font-size: 0.6em; background-color: white; border: 2px dashed #eee;" id="dirs-up" hidden>
```
o
├─o home
│ ├─★ Desktop
│ └─o Documents
│   └─o my-love-poem.txt
│
├─o media
│ └─o MyUSBstick
…
```
</div>
<span style="font-size: 0.3em; position: absolute; top: 0; right: 0; cursor: pointer;" onclick="document.querySelector('#dirs-up').hidden = !document.querySelector('#dirs-up').hidden;"> ? show tree </span>
Go one level up from `/home/Desktop` with
```
..
```
to access your documents you could write
```
../Documents/my-love-poem.txt
```
which is the same as writing
```
/home/Documents/my-love-poem.txt
```

--
### Did you get it already?
How do I go two levels up?

Don't worry we will partice it in the exercise.

Now lets move to **H** in HTML.

--
### The hyperlink/anchor tag `a`
The hyperlink is one of *the* inventions of the 20th centry
```html
<a href="path/to/other-document.html">
  I'm a link. Nice to meet you.
</a>
```
With a link you can reference another document and <br>
let your reader access it **INSTANTLY**

Yaay no more going to the library.

--
### References: within, local, external
The `href` attribute can reference within a file
```html
<a href="#chapert1">go to chapter 1</a>
```
or to another local file
```html
<a href="with/slash.html">I'm relative</a>
```
or to an external file.
```html
<a href="https://xkcd.com/1144/">Re: Re: fun</a>
```

--
### Reference within: anchor
To reference a within a document use an anchor
```html
<a name="chapter4"></a> <!-- this is invisible -->
```
then create a link that points to that anchor
```html
Click <a href="#chapter4">here</a> to read chapter 4.
```


--
### Reference local: absolute, relative
The `href` attribute can take absolute paths
```html
<a href="/starts/with/slash.html">absolute root</a>
```
or relative paths, where you *can* leave away the `./`.
```html
<a href="with/slash.html">I'm relative</a>
```
Do you remember moving one level up?
```html
<a href="../its/possible.html">sacré bleu</a>
```


--
### Reference external
To reference external files use a URL
```html
<a href="https://xkcd.com/1144/">Re: Re: fun</a>
```
Yeay computer gibberish, let's see what it means<a href="https://xkcd.com/1144/">.</a>

--
### The **U**niform **R**esource **L**ocator
<span style="background-color:#F6AE2D;">http://</span><span style="background-color: #66D9EF;">www.example.com</span><span style="background-color: #F26419;">/patH/index.html</span>

<span style="color:#F6AE2D;">The Protocol</span> <br>
Tells how the data will be transported.

<span style="color:#66D9EF;">The Host</span> <br>
Maps (with some detours) to a computer.

<span style="color:#F26419;">The Path</span> <br>
Is used to find the requested data on the host computer.

--
### The **U**niform **R**esource **L**ocator
<span style="background-color:#F6AE2D;">http://</span><span style="background-color: #66D9EF;">www.example.com</span><span style="background-color: #F26419;">/patH/index.html</span>

<span style="color:#F6AE2D;">The Protocol</span> <br>
Your browser knows `http`, `https`, `ftp`, `file`.

<span style="color:#66D9EF;">The Host</span> <br>
Is not case sensitve. `wWw.gOoGlE.CoM`

<span style="color:#F26419;">The Path</span> <br>
Is (almost always) case sensitve, just like the file system<br>
... on GUN/Linux.