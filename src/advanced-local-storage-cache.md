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
common techniques
- minify
- uglify

--
### Zip and browser cache
zip JS and CSS files

teach your server to offer ziped files

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
### What's wrong why is this not popular?

Please tell me why this is not a good idea.
