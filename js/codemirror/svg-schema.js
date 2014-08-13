/* globals define:false, module:false */

(function (root, factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === "object") {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root._modules = root._modules || {};
        root._modules["svg-schema"] = factory();
    }
}(this, function() {
    "use strict";

    var _ = null;
    var yesNo = ["yes", "no"];

    var stylesheet = {
        attrs: {
            version: ["1.0"],
            "extension-element-prefixes": null,
            "exclude-result-prefixes": null,
            "xmlns:xsl": ["http://www.w3.org/1999/XSL/Transform"]
        },
        children: [
            "xsl:output",
            "xsl:import",
            "xsl:include",
            "xsl:strip-space",
            "xsl:preserve-space",
            "xsl:key",
            "xsl:param",
            "xsl:attribute-set",
            "xsl:variable",
            "xsl:template",
            "xsl:decimal-format",
            "xsl:namespace-alias"
        ]
    };

    var output = {
        attrs: {
            method: ["xml", "html", "text"],
            version: _,
            encoding: _,
            "omit-xml-declaration": yesNo,
            standalone: yesNo,
            "doctype-public": _,
            "doctype-system": _,
            "cdata-section-elements": _,
            indent: yesNo,
            "media-type": _
        }
    };

    var childrenOfTemplate = [
        "xsl:variable",
        "xsl:apply-templates",
        "xsl:call-template",
        "xsl:apply-imports",
        "xsl:for-each",
        "xsl:value-of",
        "xsl:copy-of",
        "xsl:copy",
        "xsl:if",
        "xsl:choose",
        "xsl:text",
        "xsl:variable",
        "xsl:message",
        "xsl:number",
        "xsl:fallback",
        "xsl:processing-instruction",
        "xsl:comment",
        "xsl:element",
        "xsl:attribute"
    ];

    var variable = {
        attrs: { name: _, select: _ },
        children: childrenOfTemplate
    };

    var ifWhen = {
        attrs: { test: _ },
        children: childrenOfTemplate
    };

    var sort = {
        attrs: {
            select: _,
            lang: _,
            "data-type": ["text", "number"],
            order: ["ascending", "descending"],
            "case-order": ["upper-first", "lower-first"]
        }
    };

    var number = {
        attrs: {
            level: ["single", "multiple", "any"],
            count: _,
            from: _,
            value: _,
            format: _,
            lang: _,
            "letter-value": ["alphabetic", "traditional"],
            "grouping-separator": _,
            "grouping-size": _
        }
    };

    var decimalFormat = {
        attrs: {
            name: _,
            "decimal-separator": _,
            "grouping-separator": _,
            infinity: _,
            "minus-sign": _,
            NaN: _,
            percent: _,
            "per-mille": _,
            "zero-digit": _,
            digit: _,
            "pattern-separator": _
        }
    };

    return {
        "!top": ["xsl:stylesheet"],
        "xsl:stylesheet": stylesheet,
        "xsl:output": output,
        "xsl:include": { attrs: {href:_} },
        "xsl:import":  { attrs: {href:_} },
        "xsl:strip-space":    { attrs: {elements:_} },
        "xsl:preserve-space": { attrs: {elements:_} },
        "xsl:key": { attrs: { name: _, match: _, use: _, } },
        "xsl:attribute-set": {
            attrs: { name: _, "use-attribute-sets": _, },
            children: [ "xsl:attribute" ]
        },
        "xsl:variable": variable,
        "xsl:param": variable,
        "xsl:decimal-format": decimalFormat,
        "xsl:namespace-alias": {
            attrs: { "stylesheet-prefix": _, "result-prefix": _ }
        },
        "xsl:template": {
            attrs: { match: _, name: _, priority: _, mode: _ },
            children: ["xsl:param"].concat(childrenOfTemplate)
        },
        "xsl:apply-templates": {
            attrs: { select: _, mode: _ },
            children: [ "xsl:sort", "xsl:with-param" ]
        },
        "xsl:call-template": {
            attrs: { name: _ },
            children: [ "xsl:with-param" ]
        },
        "xsl:with-param": variable,
        "xsl:for-each": {
            attrs: { select: _ },
            chidlren: ["xsl:sort"].concat(childrenOfTemplate)
        },
        "xsl:sort": sort,
        "xsl:value-of": { attrs: { select: _, "disable-output-escaping": yesNo } },
        "xsl:copy-of": { attrs: {select:_} },
        "xsl:copy": {
            attrs: { "use-attribute-sets":_ },
            children: childrenOfTemplate
        },
        "xsl:if": ifWhen,
        "xsl:choose": { chidlren: ["xsl:when", "xsl:otherwise"] },
        "xsl:when": ifWhen,
        "xsl:otherwise": { children: childrenOfTemplate },
        "xsl:text": { attrs: { "disable-output-escaping": yesNo } },
        "xsl:message": {
            attrs: { terminate: _ },
            children: childrenOfTemplate
        },
        "xsl:number": number,
        "xsl:fallback": { children: childrenOfTemplate },
        "xsl:processing-instruction": {
            attrs: { name: _ },
            children: childrenOfTemplate
        },
        "xsl:comment": { children: childrenOfTemplate },
        "xsl:attribute": {
            attrs: { name: _, namespace: _ },
            children: childrenOfTemplate
        },
        "xsl:element": {
            attrs: { name: _, namespace: _, "use-attribute-sets": _ },
            children: childrenOfTemplate
        }
    };
}));