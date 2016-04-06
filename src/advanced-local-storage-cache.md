title: CSS Lesson 1 - Cascading Style Sheets basics
author:
  name: Falko Krause
  github: select
  twitter: rockdapus
  url: https://github.com/webpgr/cached-webpgr.js
output: dist/advanced-local-storage-cache.html
<!-- theme: select/cleaver-select-theme -->
theme: ./custom-theme
controls: true

--
# Local Storage as Cache
## A super fast caching technique

--
### Making websites load faster

Let's go though the common toolset

--
### Minimize number of HTTP requests

Concat / bundle all of your CSS and JS into one file

Think about a strategy when to load what

--
### Minification, Uglification
common techniques
- minify
- uglify

The clear winner ist google closure copiler:
Best uglification rules, tree pruning.

--
### Advanced minification: tree-shaking

--
### Uglification chaining

Webpack ist cool but \
google closure creates smaller files.

Why not use both in a chain.

Is this a good idea?

--
### Zip and browser cache
zipping JS code and CSS files

teach your server to offer ziped files

Lossless compression
<table border="1">
  <tbody><tr>
    <td width="50%" align="center">Before</td>
    <td width="50%" align="center">After</td>
  </tr>
  <tr>
    <td width="50%">aaaaabbbbbcccddddeeeeffffaaaaabb</td>
    <td width="50%">a5b4c2d4e4f4a5bb</td>
  </tr>
</tbody></table>

Lossy compression
<table border="1">
  <tbody><tr>
    <td width="50%" align="center">Before</td>
    <td width="50%" align="center">After</td>
  </tr>
  <tr>
    <td width="50%">0.123, 1.2345, 21.2165, 21.999, 12.123</td>
    <td width="50%">0,0,20,20,10</td>
  </tr>
</tbody></table>

<!-- http://www.html5rocks.com/en/tutorials/speed/txt-compression/?redirect_from_locale=de
 -->

--
### Browser cache and CDN
Content delivery networks can imporve cache

single location

--
### What is the local storage
Browser internal storage, similar to cookie

can store up to 5 MB

--
### Using local storage as cache
The original HTML contains the version of your JS file

If we don't have the file / wrong version: load it from a CDN

If we have the right version no further request

--
### _loadScript: requesting files with ajax

```js
function _cacheScript(name, version, url) {
    var xmlhttp = new XMLHttpRequest(); // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          localStorage.setItem(name, JSON.stringify({
            content: xmlhttp.responseText,
            version: version
          }));
        } else {
          console.warn('error loading '+url);
        }
      }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
```

--
### _injectScript: writing the script into the DOM
```js
function _loadScript(url, name, version, callback) {
  var s = document.createElement('script');

  if (s.readyState) { //IE
    s.onreadystatechange = function() {
      if (s.readyState == "loaded" || s.readyState == "complete") {
        s.onreadystatechange = null;
        _cacheScript(name, version, url);
        if (callback) callback();
      }
    };
  } else { //Others
    s.onload = function() {
      _cacheScript(name, version, url);
      if (callback) callback();
    };
  }

  s.setAttribute("src", url);
  document.getElementsByTagName("head")[0].appendChild(s)
}
```
--
### _cacheScript: caching the script in the local Storage

```js
function _injectScript(content, name, version, callback) {
  var s = document.createElement('script');
  s.type = "text/javascript";
  var c = JSON.parse(content);
  var scriptContent = document.createTextNode(c.content);
  s.appendChild(scriptContent);
  document.getElementsByTagName("head")[0].appendChild(s)

  // cached version is not the request version, clear the cache, this will trigger a reload next time
  if (c.version != version) {
    localStorage.removeItem(name);
  }

  if (callback) callback();
}
```
--
### It is fast

My test showed
<table><thead>
<tr>
<th></th>
<th>Chrome</th>
<th>FireFox</th>
</tr>
</thead><tbody>
<tr>
<td>Loading jQuery from CDN</td>
<td><strong>268ms</strong></td>
<td><strong>200ms</strong></td>
</tr>
<tr>
<td>Loading jQuery from localStorage</td>
<td><strong>47ms</strong></td>
<td><strong>14ms</strong></td>
</tr>
</tbody></table>

--
### Downsides
Local storage only has 5 MB storage \
(you can request more ... but don't)

Service Worker ... we come to this later

--
### What's wrong why is/was this not popular?

Please tell me why this was not a good idea.

--
### Next technology: service workers

How to they work?

How much overhead code to you have to load?

Not ready yet, need to load polyfil overhead


