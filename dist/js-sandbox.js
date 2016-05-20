  /**
   * ##_loadScript
   * For loading external scripts (local or cross domain with CORS)
   * @param {string} url (see `requireScript`)
   * @param {Function} callback (see `requireScript`)
   */
function _loadScript(url, callback) {
    var s
    if(/.css$/.test(url)){
        s = document.createElement('link');
    }else if(/.js$/.test(url)){
        s = document.createElement('script');
    }
    if (s.readyState) { //IE
        s.onreadystatechange = function() {
            if (s.readyState == "loaded" || s.readyState == "complete") {
                s.onreadystatechange = null;
                if (callback) callback();
            }
        };
    } else { //Others
        s.onload = function() {
            if (callback) callback();
        };
    }
    if(/.css$/.test(url)){
        s.setAttribute("href", url);
        s.setAttribute("rel", "stylesheet");
    }else if(/.js$/.test(url)){
        s.setAttribute("src", url);
    }
    document.getElementsByTagName("head")[0].appendChild(s)
}

function _startEditor(selector, options){
    options = Object.assign({}, options);
    var $wrapper = document.querySelector(selector);
    var $renderedHtml = $wrapper.querySelector('.rendered-html');
    var $renderedCSS = $wrapper.querySelector('.rendered-css');
    var $editorCss = $wrapper.querySelector('.editor-css');
    var $editorHtml = $wrapper.querySelector('.editor-html');
    if(options.height){
        var h = options.height;
        delete options.height;
        $renderedHtml.style.height = h+'px';
    }
    var options = Object.assign({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false,
        tabSize: 2,
    }, options);

    if($editorHtml){
        $editorHtml.style.height = h+'px';
        $editorHtml.style.display = 'block';
        $renderedHtml.innerHTML = $editorHtml.innerHTML;
        var aceEditorHtml = ace.edit($editorHtml);
        aceEditorHtml.setTheme("ace/theme/sqlserver");
        aceEditorHtml.session.setMode("ace/mode/html");
        aceEditorHtml.setOptions(options);
        aceEditorHtml.on("input", function() {
            $renderedHtml.innerHTML = aceEditorHtml.getValue();
        });
    }

    if($editorCss){
        $editorCss.style.height = h+'px';
        $renderedCSS.innerHTML = $editorCss.innerHTML;
        var aceEditorCss = ace.edit($editorCss);
        aceEditorCss.setTheme("ace/theme/sqlserver");
        aceEditorCss.session.setMode("ace/mode/css");
        aceEditorCss.setOptions(options);
        aceEditorCss.on("input", function() {
            $renderedCSS.innerHTML = aceEditorCss.getValue();
        });
    }

}

window.sandbox = function(selector, options) {
    if(window.sandboxReady){
        _startEditor(selector, options);
    }else {
        _loadScript('js-sandbox.css');

        _loadScript('ace-editor/ace.js', function(){
            _loadScript('ace-editor/ext-language_tools.js', function(){
                window.sandboxReady = true;
                _startEditor(selector, options);
            });
        });

    }
}