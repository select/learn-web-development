/**
 * jQuery like DOM class
 * @class
 */
class DOM {
  /**
   * create a new array like object of elements
   * @constructor
   */
  constructor(mixed, parentNode) {
    if (mixed instanceof HTMLElement) this.elements = [mixed];
    else if (parentNode !== undefined) this.elements = parentNode.querySelectorAll(selector);
    else this.elements = document.querySelectorAll(mixed);
    this.length = this.elements.length;
  }
  /**
   * ### append
   * @param {String} html String with HTML content
   */
  append(html){
    let $tmp = document.createElement('div');
    $tmp.innerHTML = html;
    while ($tmp.firstChild) {
      this.elements[0].appendChild($tmp.firstChild);
    }
    return this.elements[0].lastChild;
  }
  /**
   * @param {Function} callback A callback to call on each element
   */
  each(callback) {
    // convert this to Array to use for...of
    for (let el of Array.from(this.elements)) {
      callback.call(el);
    }

    // return this for chaining
    return this;
  }

  /**
   * Add a class to selected elements
   * @param {String} className The class name to add
   */
  addClass(className) {
    return this.each(function() {
      this.classList.add(className);
    });
  }

  /**
   * Remove a class from selected elements
   * @param {String} className The class name to remove
   */
  removeClass(className) {
    return this.each(function() {
      this.classList.remove(className);
    });
  }

  /**
   * Check to see if the element has a class
   * (Note: Only checks the first elements if more than one is selected)
   * @param {String} className The class name to check
   */
  hasClass(className) {
    return this[0].classList.contains(className);
  }

  /**
   * Attach an event listener with a callback to the selected elements
   * @param {String} event Name of event, eg. "click", "mouseover", etc...
   * @param {Function} callback The function to call when the event is triggered
   */
  on(event, callback, capture) {
    return this.each(function() {
      this.addEventListener(event, callback, capture);
    });
  }

  off(event, callback, capture) {
    return this.each(function() {
      this.removeEventListener(event, callback, capture);
    });
  }

  val(value) {
    if (value !== undefined) {
      this.each(function() {
        this.value = value;
      });
    } else {
      var list = [];
      this.each(function() {
        list.push(this.value);
      });
      if (list.length === 1) {
        return list[0];
      } else {
        return list;
      }
    }
  }
}
window.$ = (selector) => new DOM(selector);


(function() {

  class BoundingBox {
    constructor() {
      this.node = $('body').append('<div class="bounding-box" hidden></div>');

      this.metaInfo = $(this.node).append('<div class="bounding-box-meta"></div>');
      this.metaInfo.addEventListener('click', (event) => {
        if(event.target.nodeName === 'SPAN'){
          let selector = event.target.innerHTML;
          window.jsSandbox.aceEditorCss.find(selector);
        }
      }, true);
    }

    setPos(pos) {
      Object.keys(pos).map( (key) => pos[key] = pos[key]+ 'px');
      Object.assign(this.node.style, pos);
    }
    showClasses(node) {
      this.metaInfo.innerHTML = node.tagName.toLowerCase();
      if ( node.className ) this.metaInfo.innerHTML += node.className.split(' ').reduce((cssString, c) => '.' + c, '');
      let rules = window.jsSandbox.allRules.filter((rule)=> node.matches(rule.selector)).map((rule) => `<span>${rule.selector}</span>`);
      if ( rules.length )  this.metaInfo.innerHTML += ' | '+rules.join(', ');
    }
    showMatchingRules(node) {
      let rules = window.jsSandbox.allRules.filter((rule)=> node.matches(rule.selector))
      rules.map((rule)=> console.log(rule.selector))
    }
  }
   /**
   * ##customDebounce
   * Debounce Immediatly (custom made) - Fire once immediately and then when
   * the last change was done once again but take care that we do not fire
   * twice on the first time we fired
   * http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
   * @param {function} func founction to debounce
   * @param {number} wait number of milliseconds to wait
   * @return {function}      debounced function
   */
  function _debounce(func, wait) {
    // we need to save these in the closure
    var timeout, args, context, timestamp, call_count = 0;
    return function() {
      // save details of latest call
      context = this;
      args = [].slice.call(arguments, 0);
      timestamp = new Date();
      // // immediately fire on the first call
      // if (call_count == 0) {
      //   func.apply(context, args);
      // }
      ++call_count;
      // this is where the magic happens
      var later = function() {
        // how long ago was the last call
        var last = (new Date()) - timestamp;
        // if the latest call was less that the wait period ago
        // then we reset the timeout to wait for the difference
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
          // or if not we can null out the timer and run the latest
        } else {
          timeout = null;
          if (call_count > 1) { // only fire if this was not the first call, first call aready fired
            func.apply(context, args);
          }
          call_count = 0; // time is over reset the counter
        }
      };
      // we only need to set the timer now if one isn't already running
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    }
  };

  // https://remysharp.com/2010/07/21/throttling-function-calls
  function _throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
      deferTimer;
    return function() {
      var context = scope || this;

      var now = +new Date,
        args = arguments;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function() {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

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
      if (callback) s.onload = () => { callback() };
      s.setAttribute('href', url);
      s.setAttribute('rel', 'stylesheet');
    } else if (/.js$/.test(url)) {
      s = document.createElement('script');
      if (callback) s.onload = () => { callback() };
      s.setAttribute('src', url);
    } else if (/.html$/.test(url)){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function() {
          if (this.readyState!==4 || this.status!==200) console.warn(`_loadScript failed for ${url}`);
          else callback(this.responseText);
      };
      return xhr.send();
    }
    document.querySelector('head').appendChild(s)
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

  function _toArray(inList){
    var outList = [];
    Array.prototype.forEach.call(inList, ( curItem ) => {outList.push(curItem)});
    return outList;
  }

  function _allDescendants(node) {
    return _toArray(node.childNodes).reduce((list, curNode) => {
      list.push(curNode)
      return list.concat(_allDescendants(curNode));
    }, [])
  }

  function _getTags(node){
    return _allDescendants(node).reduce((list, curNode) => {
      curNode.tagName && list.indexOf(curNode.tagName.toLowerCase()) == -1? list.push(curNode.tagName.toLowerCase()): null;
      return list;
    }, []);
  }

  function _getClasses(node) {
    return _toArray(node.querySelectorAll('[class]')).reduce((list, curNode) =>
      list.concat(curNode.getAttribute('class').split(' ')), [])
  }


  function _getRules(cssRuleString, selector){
    cssRuleString = selector ? document.querySelector(selector).innerHTML: decodeHTMLentities(cssRuleString);

    var $style = document.createElement('style');
    $style.type = 'text/css';
    $style.title = 'sandbox-rulestmp';

    $head = document.querySelector('head');
    $head.insertBefore( $style, $head.firstChild );

    // Set styles temporary so we can parse them with the browser libs.
    $style.innerHTML = cssRuleString;

    // Find the stylesheet in the docuemet, this cannot be done through the DOM directly.
    // https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript
    var sheet = _toArray(document.styleSheets).find( (el) => {
      return el.title === 'sandbox-rulestmp'
    })
    var rules = sheet.rules || sheet.cssRules;

    var newRules = _toArray(rules).reduce((list, curRule) => {
      return list.concat([{
        selector: curRule.selectorText.split(','),
        properties: curRule.style.cssText
      }])
    }, [])
    $style.parentNode.removeChild($style);

    return newRules;
  }

  /**
   * ##_sandboxCssRules
   * Splits all rules into a list of rules and prefixes each rule with the input id
   * @param {String} cssRuleString CSS rules that should be sandboxed
   * @param {Mixed} id CSS id selector that is used as sandbox prefix
   */
  function _sandboxCssRules(cssRuleString, id) {
    cssRuleString = decodeHTMLentities(cssRuleString);
    let rules = _getRules(cssRuleString);
    window.jsSandbox.allRules = rules;
    window.jsSandbox.cssStrings[id] = rules.map(
      (rule) =>
        rule.selector.map((selector) => `#js-sandbox-${id} .rendered-html ${selector}`).join(',') + ` { ${rule.properties}}`
      ).join(' ');
    var s = window.jsSandbox.cssStrings.join(' ');
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
  /**
   * findPos
   * https://stackoverflow.com/a/14273079/1436151
   * Find the `top` `left` `width` and `height` of any element to get its "fixed" position.
   * @param {DOMnode} node
   * @return {Object} `{top: Number, left: Number, width: Number, height: Number}`
   */
  function findPos(node) {
    var wh = { width: node.offsetWidth, height: node.offsetHeight };
    var curleft = curtop = 0;
    if (node.offsetParent)
      do {
        curleft += node.offsetLeft;
        curtop += node.offsetTop;
      } while (node = node.offsetParent); // what is this doing??

    return Object.assign({left: curleft, top: curtop}, wh);
  }

  function _mouseenterBoundingBox(event){
    window.jsSandbox.boundingBox.node.hidden = false;
    window.jsSandbox.boundingBox.setPos(findPos(event.target));
    window.jsSandbox.boundingBox.showClasses(event.target);
  }
  function _bindHover(node, undbind){
    if( undbind ){
      window.jsSandbox.boundingBox.node.hidden = true;
      return $(node).off('mouseenter', _mouseenterBoundingBox, true);
    }
    $(node).on('mouseenter', _mouseenterBoundingBox, true); // Use Capturing
    // node.addEventListener('mouseleave', _throttle((event) => {
    //   window.boundingBox.node.hidden = true;
    //   console.log('O:', event.target.tagName, event.target.getAttribute('class'));
    // }, 400), true); // Use Capturing

  }

  function _startEditor($wrapper, id) {
    $wrapper.id = 'js-sandbox-'+id;
    $wrapper.dataset.id = id;

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
    $wrapper.style.height = h + 'px';

    if(!$renderedHtml) $renderedHtml = $($wrapper).append('<div class="rendered-html"></div>');
    $renderedHtml.style.height = h + 'px';
    if ($editorHtml && $editorCss) {
      h = h / 2;
    }
    // fix creation of span when deleting items
    $($renderedHtml).on('DOMNodeInserted', (event) => {
      if (event.target.tagName == 'SPAN') event.target.outerHTML = event.target.innerHTML;
    });

    var options = {}
    if($wrapper.dataset.aceOptions) {
      options = $wrapper.dataset.aceOptions.split(',').reduce((op, str) => {
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

      /**
       * ### setEditorSilent
       * The ace editor sends a `input` event when `setValue` is called,
       * we need to stop this event since the `$renderedHtml` should not
       * be updated on `contenteditable=ture`.
       */
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
      _sandboxCssRules($renderedCSS.innerHTML, $wrapper.dataset.id);
      $renderedCSS.remove();
    }
    if ($editorCss) {
      $editorCss.style.height = h + 'px';
      _sandboxCssRules($editorCss.innerHTML, $wrapper.dataset.id);
      var decoded = decodeHTMLentities($editorCss.innerHTML).trim();
      var aceEditorCss = ace.edit($editorCss);
      aceEditorCss.$blockScrolling = Infinity; // to supress error messag
      aceEditorCss.setValue(decoded, -1);
      aceEditorCss.setTheme('ace/theme/sqlserver');
      aceEditorCss.session.setMode('ace/mode/css');
      aceEditorCss.setOptions(options);
      aceEditorCss.on('input', function() {
        _sandboxCssRules(aceEditorCss.getValue(), $wrapper.dataset.id);
      });
      this.jsSandbox.aceEditorCss = aceEditorCss;
    }

    // Inspect and contenteditable buttons bottom right
    $($wrapper).append(`
      <div class="js-sandbox__inspect-html-btn">🔍</div>
      <div class="js-sandbox__contentedit-html-btn">✎</div>`)
    $wrapper.querySelector('.js-sandbox__inspect-html-btn').addEventListener('click', (event) => {
      let state = /btn--active/.test(event.target.className)
      event.target.classList.toggle('btn--active', !state);
      _bindHover($renderedHtml, state);
    });
    $wrapper.querySelector('.js-sandbox__contentedit-html-btn').addEventListener('click', function(event){
      let state = $renderedHtml.isContentEditable;
      event.target.classList.toggle('btn--active', !state);
      $renderedHtml.contentEditable = ''+!state;
    });

    $($wrapper).append(`
      <div class="js-sandbox__editors-btns">
        <span class="js-sandbox__editor-btn-html">HTML</span>
        <span class="js-sandbox__editor-btn-css">CSS</span>
      </div>`);

  }

  window.jsSandbox = {};

  document.addEventListener('DOMContentLoaded', () => {
    _loadScript('js-sandbox.css');
    _loadScript('ace-editor/ace.js', function() {
      _loadScript('ace-editor/ext-language_tools.js', function() {
        window.jsSandbox.cssStrings = [];
        window.jsSandbox.$style = $('head').append('<style type="text/css" title="sandbox"></style>');
        window.jsSandbox.boundingBox = new BoundingBox();
        var id = 0;
        [].forEach.call(document.querySelectorAll('.js-sandbox'), function($el) {
          _startEditor($el, id++);
        });
      });
    });
  });
})();