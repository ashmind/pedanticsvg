// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

/* globals CodeMirror:false */

(function(mod) {
  "use strict";

  if (typeof exports === "object" && typeof module === "object") // CommonJS
    mod(require("codemirror"));
  else if (typeof define === "function" && define.amd) // AMD
    define(["codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  /* jshint quotmark:false, shadow:true, newcap:false  */

  "use strict";

  var Pos = CodeMirror.Pos;

  function getHints(cm, options) {
    /* jshint validthis:true */

    var tags = options && options.schemaInfo;
    var quote = (options && options.quoteChar) || '"';
    if (!tags) return;
    var cur = cm.getCursor(), token = cm.getTokenAt(cur);
    var inner = CodeMirror.innerMode(cm.getMode(), token.state);
    if (inner.mode.name !== "xml") return;
    var result = [], replaceToken = false, prefix;
    var tag = /\btag\b/.test(token.type), tagName = tag && /^[\w:]/.test(token.string), tagStart;
    var tagType;
    var hintType;
    if (tagName) {
      var before = cm.getLine(cur.line).slice(Math.max(0, token.start - 2), token.start);
      tagType = /<\/$/.test(before) ? "close" : /<$/.test(before) ? "open" : null;
      if (tagType) tagStart = token.start - (tagType === "close" ? 2 : 1);
    } else if (tag && token.string === "<") {
      tagType = "open";
    } else if (tag && token.string === "</") {
      tagType = "close";
    }
    if (!tag && !inner.state.tagName || tagType) {
      if (tagName)
        prefix = token.string;
      replaceToken = tagType;
      var cx = inner.state.context;
      var curTagName = cx && cx.tagName.split(/:/);
      var curNs = (cx && curTagName.length > 1 && (curTagName[0] + ':')) || '';
      var curTag = cx && tags[curTagName[1] || curTagName[0]];
      var childList = cx ? curTag && curTag.children : tags["!top"];
      if (childList && tagType !== "close") {
        for (var i = 0; i < childList.length; ++i) {
          var childName = curNs + childList[i];
          if (!prefix || childName.lastIndexOf(prefix, 0) === 0)
            result.push({ displayText: childName, text: "<" + childName });
        }
      } else if (tagType !== "close") {
        for (var name in tags)
          if (tags.hasOwnProperty(name) && name !== "!top" && name !== "!attrs" && (!prefix || name.lastIndexOf(prefix, 0) === 0))
            result.push({ displayText: curNs + name, text: "<" + curNs + name });
      }
      if (cx && (!prefix || tagType === "close" && cx.tagName.lastIndexOf(prefix, 0) === 0))
        result.push("</" + cx.tagName + ">");
      hintType = "tag";
    } else {
      // Attribute completion
      var curTagName = inner.state.tagName.split(/:/);
      var curTag =  tags[curTagName[1] || curTagName[0]], attrs = curTag && curTag.attrs;
      var globalAttrs = tags["!attrs"];
      if (!attrs && !globalAttrs) return;
      if (!attrs) {
        attrs = globalAttrs;
      } else if (globalAttrs) { // Combine tag-local and global attributes
        var set = {};
        for (var nm in globalAttrs) if (globalAttrs.hasOwnProperty(nm)) set[nm] = globalAttrs[nm];
        for (var nm in attrs) if (attrs.hasOwnProperty(nm)) set[nm] = attrs[nm];
        attrs = set;
      }
      if (token.type === "string" || token.string === '"' || token.string === "'") { // A value
        var before = cm.getRange(Pos(cur.line, Math.max(0, cur.ch - 60)),
                                 Pos(cur.line, token.type === "string" ? token.start : token.end));
        var atName = before.match(/([^\s\u00a0=<>\"\']+)=$/), atValues;
        if (!atName || !attrs.hasOwnProperty(atName[1]) || !(atValues = attrs[atName[1]])) return;
        if (typeof atValues === 'function') atValues = atValues.call(this, cm); // Functions can be used to supply values for autocomplete widget
        if (token.type === "string") {
          prefix = token.string;
          var n = 0;
          if (/['"]/.test(token.string.charAt(0))) {
            quote = token.string.charAt(0);
            prefix = token.string.slice(1);
            n++;
          }
          var len = token.string.length;
          if (/['"]/.test(token.string.charAt(len - 1))) {
            quote = token.string.charAt(len - 1);
            prefix = token.string.substr(n, len - 2);
          }
          replaceToken = true;
        }
        for (var i = 0; i < atValues.length; ++i) if (!prefix || atValues[i].lastIndexOf(prefix, 0) === 0)
          result.push({ displayText: atValues[i], text: quote + atValues[i] + quote, className: 'cm-hint-string' });
        hintType = "attribute-value";
      } else if (token.string[token.string.length - 1] === ' ' || token.type === "attribute") { // An attribute name
        if (token.type === "attribute") {
          prefix = token.string;
          replaceToken = true;
        }
        for (var attr in attrs) if (attrs.hasOwnProperty(attr) && (!prefix || attr.lastIndexOf(prefix, 0) === 0))
          result.push({ text: attr, className: 'cm-hint-attribute' });
        hintType = "attribute-name";
      }
    }
    return {
      type: hintType,
      list: result,
      from: replaceToken ? Pos(cur.line, tagStart === undefined ? token.start : tagStart) : cur,
      to: replaceToken ? Pos(cur.line, token.end) : cur
    };
  }

  CodeMirror.registerHelper("hint", "xml", getHints);
});