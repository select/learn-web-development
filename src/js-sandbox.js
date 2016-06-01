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

  function _sandboxCssRules(cssRuleString, id) {
    // Decode all HTML entities.
    var elem = document.createElement('textarea');
    elem.innerHTML = cssRuleString;
    cssRuleString = elem.value;
    // cssRuleString = $('<div/>').html(cssRuleString).text();

    // Set styles temporary so we can parse them with the browser libs.
    window.sandboxData.$style.innerHTML = cssRuleString;

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


    window.sandboxData.cssStrings[id] = ''
    for (var i = 0; i < newRules.length; i++) {
      var rule = newRules[i];
      window.sandboxData.cssStrings[id] += rule.selector + ' {' + rule.properties + '}';
    }
    var s = ''
    for (var key in window.sandboxData.cssStrings) {
      s += window.sandboxData.cssStrings[key];
    }
    window.sandboxData.$style.innerHTML = s;

  }

  function _startEditor(selector, options) {
    options = Object.assign({}, options);
    var $wrapper = document.querySelector(selector);
    var $renderedHtml = $wrapper.querySelector('.rendered-html');
    var $editorCss = $wrapper.querySelector('.editor-css');
    var $editorHtml = $wrapper.querySelector('.editor-html');

    if (options.height) {
      var h = options.height;
      delete options.height;
      $renderedHtml.style.height = h + 'px';
      if ($editorHtml && $editorCss) {
        h = h / 2;
      }
    } else {
      console.warn('missing height option');
    }
    var options = Object.assign({
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
      aceEditorHtml.setTheme('ace/theme/sqlserver');
      aceEditorHtml.session.setMode('ace/mode/html');
      aceEditorHtml.setOptions(options);
      aceEditorHtml.on('input', function() {
        $renderedHtml.innerHTML = aceEditorHtml.getValue();
      });
    }

    if ($editorCss) {
      $editorCss.style.height = h + 'px';
      _sandboxCssRules($editorCss.innerHTML, $wrapper.id);
      var aceEditorCss = ace.edit($editorCss);
      aceEditorCss.setTheme('ace/theme/sqlserver');
      aceEditorCss.session.setMode('ace/mode/css');
      aceEditorCss.setOptions(options);
      aceEditorCss.on('input', function() {
        _sandboxCssRules(aceEditorCss.getValue(), $wrapper.id);
      });
    }

  }
  window.sandboxData = {};
  window.sandbox = function(selector, options) {
    this.bla = 'hello';
    if (window.sandboxData.sandboxLoading) {
      setTimeout(function() {
        _startEditor(selector, options);
      }, 1000);
    } else if (window.sandboxData.sandboxReady) {
      _startEditor(selector, options);
    } else {
      window.sandboxData.sandboxLoading = true;
      _loadScript('js-sandbox.css');

      _loadScript('ace-editor/ace.js', function() {
        _loadScript('ace-editor/ext-language_tools.js', function() {
          window.sandboxData.sandboxReady = true;
          window.sandboxData.cssStrings = {};
          window.sandboxData.$style = document.createElement('style');
          window.sandboxData.$style.type = 'text/css';
          window.sandboxData.$style.title = 'sandbox';
          document.getElementsByTagName('head')[0].appendChild(window.sandboxData.$style);
          _startEditor(selector, options);

        });
      });

    }
  }