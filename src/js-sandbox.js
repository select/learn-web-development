(function() {
  /**
   * ##_loadScript
   * For loading external scripts (local or cross domain with CORS)
   * @param {string} url (see `requireScript`)
   * @param {Function} callback (see `requireScript`)
   */
  function _loadScript(url, callback) {
    var s
    if (/.css$/.test(url)) {
      s = document.createElement('link');
    } else if (/.js$/.test(url)) {
      s = document.createElement('script');
    }
    if (s.readyState) { //IE
      s.onreadystatechange = function() {
        if (s.readyState == 'loaded' || s.readyState == 'complete') {
          s.onreadystatechange = null;
          if (callback) callback();
        }
      };
    } else { //Others
      s.onload = function() {
        if (callback) callback();
      };
    }
    if (/.css$/.test(url)) {
      s.setAttribute('href', url);
      s.setAttribute('rel', 'stylesheet');
    } else if (/.js$/.test(url)) {
      s.setAttribute('src', url);
    }
    document.getElementsByTagName('head')[0].appendChild(s)
  }

  /**
   * ## decodeHTMLentities
   * Decode all HTML entities e.g. `&gt;` ⇨ `>`
   * @param {String} html input with HTML entities
   * @return {String} without HTML entities
   */
  function decodeHTMLentities(html){
    var elem = document.createElement('textarea');
    elem.innerHTML = html;
    return elem.value;
  }

  /**
   * ##_sandboxCssRules
   * Splits all rules into a list of rules and prefixes each rule with the input id
   * @param {String} cssRuleString CSS rules that should be sandboxed
   * @param {Mixed} id CSS id selector that is used as sandbox prefix
   */
  function _sandboxCssRules(cssRuleString, id) {
    cssRuleString = decodeHTMLentities(cssRuleString);

    // Set styles temporary so we can parse them with the browser libs.
    window.jsSandbox.$style.innerHTML = cssRuleString;

    // Find the stylesheet in the docuemet, this cannot be done through the DOM directly.
    // https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript
    var sheet;
    for (var i = 0; i < document.styleSheets.length; i++) {
      sheet = document.styleSheets[i];
      if (sheet.title == 'sandbox') {
        break;
      }
    }
    var rules = sheet.rules || sheet.cssRules;

    // Sandbox the rules by prefixing each selector.
    var newRules = []
    var i, selectors, newSelector;
    for (var i = 0; i < rules.length; i++) {
      newSelector = rules[i].selectorText.split(',').reduce(function(pv, cv) {
        return pv ? pv + ', #' + id + ' .rendered-html ' + cv : '#' + id + ' .rendered-html ' + cv;
      }, '');
      newRules.push({
        selector: newSelector, //'#' + id + ' ' +rules[i].selectorText,
        properties: rules[i].style.cssText
      });
    }

    window.jsSandbox.cssStrings[id] = ''
    for (var i = 0; i < newRules.length; i++) {
      var rule = newRules[i];
      window.jsSandbox.cssStrings[id] += rule.selector + ' {' + rule.properties + '}';
    }
    var s = ''
    for (var key in window.jsSandbox.cssStrings) {
      s += window.jsSandbox.cssStrings[key];
    }
    window.jsSandbox.$style.innerHTML = s;
  }

  /**
   * _fixLineBreak
   * Fix line break problem for content editable.
   * Removed all < IE9 parts, only new browsers are supported.
   * https://codepen.io/hellokatili/pen/dMzZpz
   */
  function _fixLineBreak() {
    var sel, range;
    // IE9 and non-IE
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();

      // Range.createContextualFragment() would be useful here but is
      // only relatively recently standardized and is not supported in
      // some browsers (IE9, for one)
      var el = document.createElement("div");
      el.innerHTML = '<br>';
      var frag = document.createDocumentFragment(),
        node, lastNode;
      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node);
      }
      var firstNode = frag.firstChild;
      range.insertNode(frag);

      // Preserve the selection
      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }

  }

  function _startEditor($wrapper, id) {
    $wrapper.id = 'js-sandbox-'+id;
    var $renderedHtml = $wrapper.querySelector('.rendered-html');
    var $renderedCSS = $wrapper.querySelector('.rendered-css');
    var $editorCss = $wrapper.querySelector('.editor-css');
    var $editorHtml = $wrapper.querySelector('.editor-html');

    if ($wrapper.dataset.height) {
      var h = parseInt($wrapper.dataset.height);
    } else {
      console.warn('missing height option');
      h = 200;
    }

    if(!$renderedHtml){
      $renderedHtml = document.createElement('div');
      $renderedHtml.className = 'rendered-html';
      $wrapper.appendChild($renderedHtml);
    }
    $renderedHtml.style.height = h + 'px';
    if ($editorHtml && $editorCss) {
      h = h / 2;
    }

    var $editHtmlBtn = document.createElement('div');
    $editHtmlBtn.className = 'edit-html-btn';
    $editHtmlBtn.innerHTML = '✎';
    $editHtmlBtn.addEventListener('click', function(){
      if($renderedHtml.isContentEditable){
        $renderedHtml.contentEditable = 'false';
        $editHtmlBtn.className = 'edit-html-btn';
      }else {
        $renderedHtml.contentEditable = 'true';
        $editHtmlBtn.className = 'edit-html-btn btn--active';
      }
    });
    $wrapper.appendChild($editHtmlBtn);
    // fix creation of span when deleting items
    $renderedHtml.addEventListener('DOMNodeInserted', function(event) {
      if (event.target.tagName == 'SPAN') {
        event.target.outerHTML = event.target.innerHTML;
      }
    });

    var options = {}
    if($wrapper.dataset.aceOptions) {
      options = $wrapper.dataset.aceOptions.split(',').reduce(function(op, str){
        var kv = str.split(':');
        op[kv[0]] = JSON.parse(kv[1]);
        return op
      },{});
    }

    options = Object.assign({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: false,
      tabSize: 2,
    }, options);

    if ($editorHtml) {
      $editorHtml.style.height = h + 'px';
      $editorHtml.style.display = 'block';
      $renderedHtml.innerHTML = $editorHtml.innerHTML;
      var aceEditorHtml = ace.edit($editorHtml);
      aceEditorHtml.$blockScrolling = Infinity; // to supress error messag
      aceEditorHtml.setValue($renderedHtml.innerHTML.trim(), -1);
      aceEditorHtml.setTheme('ace/theme/sqlserver');
      aceEditorHtml.session.setMode('ace/mode/html');
      aceEditorHtml.setOptions(options);
      silcentEditorEvents = false
      aceEditorHtml.on('input', function() {
        if (silcentEditorEvents) return
        $renderedHtml.innerHTML = aceEditorHtml.getValue();
      });

      function setEditorSilent(){
        silcentEditorEvents = true;
        aceEditorHtml.setValue($renderedHtml.innerHTML.trim(), -1);
        setTimeout(function(){
          silcentEditorEvents = false;
        },100);
      }
      $renderedHtml.addEventListener('keydown', function(event){
        var key = event.which || event.keyCode;
        if (key == 13){
          _fixLineBreak();
          event.preventDefault();
          setEditorSilent();
        }
      });

      $renderedHtml.addEventListener('input', setEditorSilent);
    }

    if ($renderedCSS) {
      _sandboxCssRules($renderedCSS.innerHTML, $wrapper.id);
      $renderedCSS.remove();
    }
    if ($editorCss) {
      $editorCss.style.height = h + 'px';
      _sandboxCssRules($editorCss.innerHTML, $wrapper.id);
      var decoded = decodeHTMLentities($editorCss.innerHTML).trim();
      var aceEditorCss = ace.edit($editorCss);
      aceEditorCss.$blockScrolling = Infinity; // to supress error messag
      aceEditorCss.setValue(decoded, -1);
      aceEditorCss.setTheme('ace/theme/sqlserver');
      aceEditorCss.session.setMode('ace/mode/css');
      aceEditorCss.setOptions(options);
      aceEditorCss.on('input', function() {
        _sandboxCssRules(aceEditorCss.getValue(), $wrapper.id);
      });
    }
  }

  window.jsSandbox = {};

  _loadScript('js-sandbox.css');
  _loadScript('ace-editor/ace.js', function() {
    _loadScript('ace-editor/ext-language_tools.js', function() {
      window.jsSandbox.cssStrings = {};
      window.jsSandbox.$style = document.createElement('style');
      window.jsSandbox.$style.type = 'text/css';
      window.jsSandbox.$style.title = 'sandbox';
      document.getElementsByTagName('head')[0].appendChild(window.jsSandbox.$style);
      var id = 0;
      [].forEach.call(document.querySelectorAll('.js-sandbox'), function($el) {
        _startEditor($el, id++);
      });
    });
  });
})();