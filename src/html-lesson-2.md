title: HTML Lesson 2 - Image and hyperlink
author:
  name: select @ github
  twitter: rockdapus
  url: https://github.com/select/learn-web-development
output: dist/html-lesson-2.html
theme: ./custom-theme
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
### Moving down
All paths in GNU/Linux (and OS X) start from one root
```
/
```
Access all your files by adding `/` between folders
```
/media/MyUSBstick/secret-stash/rainbow-dash.jpg
```

--
### An example folder structure
Lets say we have to following folder structure
```
o
├─o home
│ └─o Desktop
│ └─o Documents
│
├─o media
│ └─o MyUSBstick
…
```

--
### From the current directory
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
### Moving one level up
Go one level up from `/home/Desktop` with
```
..
```
to access your documents you could write
```
../Documents/my-poem-about-love.txt
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
With a link you can refernece another document and <br>
let your reader access it **INSTANTLY**

Yaay no more going to the library.

--
### References: local, external
The `href` attribute can take absolute paths
```html
<a href="/starts/with/slash.html">absulte root</a>
```
or relative paths, where you *can* leave away the `./`
```html
<a href="with/slash.html">I'm relative</a>
```
or URL that link to external files
```html
<a href="https://xkcd.com/1144/">Re: Re: fun</a>
```

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