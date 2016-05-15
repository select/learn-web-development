title: Test presentation
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/test-presentation.html
controls: true
theme: ./custom-theme

--
<style type="text/css" media="screen">
body {
    overflow: hidden;
}
.editor-wrapper, .preview {
    position: relative;
    height: 200px;
    width: 50%;
    display: inline-block;
}
.preview {
    background-color: #FFF;
    font-size: 1em;
}
.editor {
    margin: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 16px;
}
</style>
<script src="ace-editor/ace.js" type="text/javascript" charset="utf-8"></script>
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
## Ace editor test
<div class="editor-wrapper">
<pre class="editor" id="ace-1">function foo(items) {
    var i;
    for (i = 0; i &lt; items.length; i++) {
        alert("Ace Rocks " + items[i]);
    }
}</pre>
</div>
<script>
    var editor = ace.edit(document.querySelector('#ace-1'));
    // editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/javascript");
</script>

--
## Ace HTML test
<div class="editor-wrapper">
<div class="edit-container">
    
<script type="text/plain" style="display: block;" class="editor" id="ace-2"><a href="test.html">hello world</a>
bla</script>
</div>

</div>
<div class="preview" id="ace-2-preview"></div>
<script>
    var el = document.querySelector('#ace-2');
    var pr = document.querySelector('#ace-2-preview');
    pr.innerHTML = el.innerHTML
    var editor2 = ace.edit(el);

    // editor.setTheme("ace/theme/twilight");
    editor2.session.setMode("ace/mode/html");
    editor2.on("input", function() {
        pr.innerHTML = editor2.getValue();
    });


</script>

--
## Keyboard shortcuts
- copy/cut and paste <kbd>Ctrl</kbd><kbd>C</kbd>, <kbd>Ctrl</kbd><kbd>X</kbd>, <kbd>Ctrl</kbd><kbd>V</kbd>
must fix the styling here!