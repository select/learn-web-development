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