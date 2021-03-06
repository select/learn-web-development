title: Test presentation
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/test-presentation.html
controls: true
theme: ./cleaver-select-theme

--
<script src="js-sandbox.js" type="text/javascript" charset="utf-8"></script>

#Header 1

##Header 2 [Sublime Text 3](https://www.sublimetext.com/3)

Normal text
<!-- use dyslexic plugin -->

--
## source code highlighting HTML
```html
<tag bla="test">
```

--
## source code highlighting JS
```javascript
var a = 'test';
for (var i = things.length - 1; i >= 0; i--) {
    things[i];
}
```

--
## Codepen embed test
<iframe height='268' scrolling='no' src='//codepen.io/select/embed/dMGmOz/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/select/pen/dMGmOz/'>dMGmOz</a> by select (<a href='http://codepen.io/select'>@select</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

--
## JS bin test
<a class="jsbin-embed" href="http://jsbin.com/zepica/embed?html,output&height=150px">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.11"></script>

--
## CSS Deck test
<pre class="_cssdeck_embed" data-pane="html,output" data-user="" data-href="ulfavgdi" data-version="0"></pre><script async src="http://cssdeck.com/assets/js/embed.js"></script>

--
## Ace HTML test
<div class="editor-wrapper" id="ace-2">

<div class="editor-css">a { color: red;}</div>
<div class="editor-container">
<script type="text/plain" style="display: block;" class="editor-html"><a href="test.html"> hello world </a>
<ul>
    <li>bla</li>
    <li>bla</li>
    <li>bla</li>
</ul></script>
</div>
<div class="rendered-html"></div>
<style type="text/css" class="rendered-css"></style>
</div>

<script>
(function() {
    sandbox('#ace-2');
})();
</script>

some text below

--
## Keyboard shortcuts
- copy/cut and paste <kbd>Ctrl</kbd><kbd>C</kbd>, <kbd>Ctrl</kbd><kbd>X</kbd>, <kbd>Ctrl</kbd><kbd>V</kbd>
must fix the styling here!