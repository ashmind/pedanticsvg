/* globals module:true */

(function (root, factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["codemirror"], factory);
    } else if (typeof exports === "object") {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require("codemirror"));
    } else {
        // Browser globals (root is window)
        factory(window.CodeMirror);
    }
})(this, function(CodeMirror) {
    "use strict";
    CodeMirror.defineMIME("image/svg+xml", "xml");
});