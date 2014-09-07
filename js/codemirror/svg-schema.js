/* globals define:false, module:false */

(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root._modules = root._modules || {};
        root._modules['svg-schema'] = factory();
    }
}(this, function() {
    'use strict';
    return {
        "!top": [
            "svg"
        ],
        "svg": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "baseProfile": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "contentScriptType": null,
                "contentStyleType": null,
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "height": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onabort": null,
                "onactivate": null,
                "onclick": null,
                "onerror": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "onresize": null,
                "onscroll": null,
                "onunload": null,
                "onzoom": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "preserveAspectRatio": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "version": [
                    "1.1"
                ],
                "viewBox": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "width": null,
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ],
                "x": null,
                "y": null,
                "zoomAndPan": [
                    "disable",
                    "magnify"
                ]
            },
            "children": [
                "a",
                "altGlyphDef",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "clipPath",
                "color-profile",
                "cursor",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "font-face",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "metadata",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "script",
                "set",
                "style",
                "svg",
                "switch",
                "symbol",
                "text",
                "title",
                "use",
                "view"
            ]
        },
        "g": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ]
            },
            "children": [
                "a",
                "altGlyphDef",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "clipPath",
                "color-profile",
                "cursor",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "font-face",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "metadata",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "script",
                "set",
                "style",
                "svg",
                "switch",
                "symbol",
                "text",
                "title",
                "use",
                "view"
            ]
        },
        "defs": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ]
            },
            "children": [
                "a",
                "altGlyphDef",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "clipPath",
                "color-profile",
                "cursor",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "font-face",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "metadata",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "script",
                "set",
                "style",
                "svg",
                "switch",
                "symbol",
                "text",
                "title",
                "use",
                "view"
            ]
        },
        "desc": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "id": null,
                "style": null
            }
        },
        "title": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "id": null,
                "style": null
            }
        },
        "metadata": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "id": null
            }
        },
        "symbol": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "preserveAspectRatio": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "viewBox": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ]
            },
            "children": [
                "a",
                "altGlyphDef",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "clipPath",
                "color-profile",
                "cursor",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "font-face",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "metadata",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "script",
                "set",
                "style",
                "svg",
                "switch",
                "symbol",
                "text",
                "title",
                "use",
                "view"
            ]
        },
        "use": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "height": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "width": null,
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ],
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "title"
            ]
        },
        "switch": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ]
            },
            "children": [
                "a",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "desc",
                "ellipse",
                "foreignObject",
                "g",
                "image",
                "line",
                "metadata",
                "path",
                "polygon",
                "polyline",
                "rect",
                "set",
                "svg",
                "switch",
                "text",
                "title",
                "use"
            ]
        },
        "image": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill-opacity": null,
                "filter": null,
                "height": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "preserveAspectRatio": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke-opacity": null,
                "style": null,
                "systemLanguage": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "title"
            ]
        },
        "style": {
            "attrs": {
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xml:base": null,
                "xml:lang": null,
                "id": null,
                "media": null,
                "title": null,
                "type": null
            }
        },
        "path": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "d": null,
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pathLength": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ]
            },
            "children": [
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "title"
            ]
        },
        "rect": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "height": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "rx": null,
                "ry": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "title"
            ]
        },
        "circle": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "cx": null,
                "cy": null,
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "r": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ]
            },
            "children": [
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "title"
            ]
        },
        "line": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "x1": null,
                "x2": null,
                "y1": null,
                "y2": null
            },
            "children": [
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "title"
            ]
        },
        "ellipse": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "cx": null,
                "cy": null,
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "rx": null,
                "ry": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ]
            },
            "children": [
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "title"
            ]
        },
        "polyline": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "points": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ]
            },
            "children": [
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "title"
            ]
        },
        "polygon": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "points": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ]
            },
            "children": [
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "title"
            ]
        },
        "text": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "dx": null,
                "dy": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "lengthAdjust": [
                    "spacing",
                    "spacingAndGlyphs"
                ],
                "letter-spacing": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "rotate": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "textLength": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ],
                "x": null,
                "y": null
            },
            "children": [
                "a",
                "altGlyph",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "textPath",
                "title",
                "tref",
                "tspan"
            ]
        },
        "tspan": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "dx": null,
                "dy": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "lengthAdjust": [
                    "spacing",
                    "spacingAndGlyphs"
                ],
                "letter-spacing": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "rotate": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "textLength": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "x": null,
                "y": null
            },
            "children": [
                "a",
                "altGlyph",
                "animate",
                "animateColor",
                "desc",
                "metadata",
                "set",
                "title",
                "tref",
                "tspan"
            ]
        },
        "tref": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "dx": null,
                "dy": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "lengthAdjust": [
                    "spacing",
                    "spacingAndGlyphs"
                ],
                "letter-spacing": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "rotate": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "textLength": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "animateColor",
                "desc",
                "metadata",
                "set",
                "title"
            ]
        },
        "textPath": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "lengthAdjust": [
                    "spacing",
                    "spacingAndGlyphs"
                ],
                "letter-spacing": null,
                "mask": null,
                "method": [
                    "align",
                    "stretch"
                ],
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "spacing": [
                    "auto",
                    "exact"
                ],
                "startOffset": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "textLength": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null
            },
            "children": [
                "a",
                "altGlyph",
                "animate",
                "animateColor",
                "desc",
                "metadata",
                "set",
                "title",
                "tref",
                "tspan"
            ]
        },
        "altGlyph": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "dx": null,
                "dy": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "format": null,
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "glyphRef": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "rotate": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "x": null,
                "y": null
            }
        },
        "altGlyphDef": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "id": null
            },
            "children": [
                "altGlyphItem",
                "glyphRef"
            ]
        },
        "altGlyphItem": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "id": null
            },
            "children": [
                "glyphRef"
            ]
        },
        "glyphRef": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "class": null,
                "dx": null,
                "dy": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "format": null,
                "glyphRef": null,
                "id": null,
                "style": null,
                "x": null,
                "y": null
            }
        },
        "marker": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "markerHeight": null,
                "marker-mid": null,
                "marker-start": null,
                "markerUnits": [
                    "strokeWidth",
                    "userSpaceOnUse"
                ],
                "markerWidth": null,
                "mask": null,
                "opacity": null,
                "orient": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "preserveAspectRatio": null,
                "refX": null,
                "refY": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "viewBox": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ]
            },
            "children": [
                "a",
                "altGlyphDef",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "clipPath",
                "color-profile",
                "cursor",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "font-face",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "metadata",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "script",
                "set",
                "style",
                "svg",
                "switch",
                "symbol",
                "text",
                "title",
                "use",
                "view"
            ]
        },
        "color-profile": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "id": null,
                "local": null,
                "name": null,
                "rendering-intent": [
                    "auto",
                    "perceptual",
                    "relative-colorimetric",
                    "saturation",
                    "absolute-colorimetric"
                ]
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "linearGradient": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "class": null,
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "gradientTransform": null,
                "gradientUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "id": null,
                "spreadMethod": [
                    "pad",
                    "reflect",
                    "repeat"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "style": null,
                "x1": null,
                "x2": null,
                "y1": null,
                "y2": null
            },
            "children": [
                "animate",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "stop",
                "title"
            ]
        },
        "radialGradient": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "class": null,
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cx": null,
                "cy": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fx": null,
                "fy": null,
                "gradientTransform": null,
                "gradientUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "id": null,
                "r": null,
                "spreadMethod": [
                    "pad",
                    "reflect",
                    "repeat"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "style": null
            },
            "children": [
                "animate",
                "animateTransform",
                "desc",
                "metadata",
                "set",
                "stop",
                "title"
            ]
        },
        "stop": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "id": null,
                "offset": null,
                "stop-color": null,
                "stop-opacity": null,
                "style": null
            },
            "children": [
                "animate",
                "animateColor",
                "set"
            ]
        },
        "pattern": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "height": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "patternContentUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "patternTransform": null,
                "patternUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "preserveAspectRatio": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "viewBox": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "width": null,
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ],
                "x": null,
                "y": null
            },
            "children": [
                "a",
                "altGlyphDef",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "clipPath",
                "color-profile",
                "cursor",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "font-face",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "metadata",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "script",
                "set",
                "style",
                "svg",
                "switch",
                "symbol",
                "text",
                "title",
                "use",
                "view"
            ]
        },
        "clipPath": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip-path": null,
                "clipPathUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "mask": null,
                "opacity": null,
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ]
            },
            "children": [
                "altGlyphDef",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "desc",
                "ellipse",
                "line",
                "metadata",
                "path",
                "polygon",
                "polyline",
                "rect",
                "set",
                "text",
                "title",
                "use"
            ]
        },
        "mask": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "height": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "maskContentUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "maskUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "width": null,
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ],
                "x": null,
                "y": null
            },
            "children": [
                "a",
                "altGlyphDef",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "clipPath",
                "color-profile",
                "cursor",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "font-face",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "metadata",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "script",
                "set",
                "style",
                "svg",
                "switch",
                "symbol",
                "text",
                "title",
                "use",
                "view"
            ]
        },
        "filter": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "filterRes": null,
                "filterUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "height": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "primitiveUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "width": null,
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ],
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "desc",
                "feBlend",
                "feColorMatrix",
                "feComponentTransfer",
                "feComposite",
                "feConvolveMatrix",
                "feDiffuseLighting",
                "feDisplacementMap",
                "feFlood",
                "feGaussianBlur",
                "feImage",
                "feMerge",
                "feMorphology",
                "feOffset",
                "feSpecularLighting",
                "feTile",
                "feTurbulence",
                "metadata",
                "set",
                "title"
            ]
        },
        "feBlend": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "height": null,
                "id": null,
                "in": null,
                "in2": null,
                "mode": [
                    "normal",
                    "multiply",
                    "screen",
                    "darken",
                    "lighten"
                ],
                "result": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feColorMatrix": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "height": null,
                "id": null,
                "in": null,
                "result": null,
                "type": [
                    "matrix",
                    "saturate",
                    "hueRotate",
                    "luminanceToAlpha"
                ],
                "values": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feComponentTransfer": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "height": null,
                "id": null,
                "in": null,
                "result": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "feFuncA",
                "feFuncB",
                "feFuncG",
                "feFuncR"
            ]
        },
        "feComposite": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "height": null,
                "id": null,
                "in": null,
                "in2": null,
                "k1": null,
                "k2": null,
                "k3": null,
                "k4": null,
                "operator": [
                    "over",
                    "in",
                    "out",
                    "atop",
                    "xor",
                    "arithmetic"
                ],
                "result": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feConvolveMatrix": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "bias": null,
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "divisor": null,
                "edgeMode": [
                    "duplicate",
                    "wrap",
                    "none"
                ],
                "height": null,
                "id": null,
                "in": null,
                "kernelMatrix": null,
                "kernelUnitLength": null,
                "order": null,
                "preserveAlpha": [
                    "false",
                    "true"
                ],
                "result": null,
                "targetX": null,
                "targetY": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feDiffuseLighting": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "diffuseConstant": null,
                "height": null,
                "id": null,
                "in": null,
                "kernelUnitLength": null,
                "lighting-color": null,
                "result": null,
                "style": null,
                "surfaceScale": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "animateColor",
                "feDistantLight",
                "fePointLight",
                "feSpotLight",
                "set"
            ]
        },
        "feDisplacementMap": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "height": null,
                "id": null,
                "in": null,
                "in2": null,
                "result": null,
                "scale": null,
                "width": null,
                "x": null,
                "xChannelSelector": [
                    "R",
                    "G",
                    "B",
                    "A"
                ],
                "y": null,
                "yChannelSelector": [
                    "R",
                    "G",
                    "B",
                    "A"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feFlood": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "flood-color": null,
                "flood-opacity": null,
                "height": null,
                "id": null,
                "in": null,
                "result": null,
                "style": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "animateColor",
                "set"
            ]
        },
        "feGaussianBlur": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "height": null,
                "id": null,
                "in": null,
                "result": null,
                "stdDeviation": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feImage": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "height": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "preserveAspectRatio": null,
                "result": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "width": null,
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ],
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "animateTransform",
                "set"
            ]
        },
        "feMerge": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "height": null,
                "id": null,
                "result": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "feMergeNode"
            ]
        },
        "feMergeNode": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "id": null,
                "in": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feMorphology": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "height": null,
                "id": null,
                "in": null,
                "operator": [
                    "erode",
                    "dilate"
                ],
                "radius": null,
                "result": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feOffset": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "dx": null,
                "dy": null,
                "height": null,
                "id": null,
                "in": null,
                "result": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feSpecularLighting": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "class": null,
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "height": null,
                "id": null,
                "in": null,
                "kernelUnitLength": null,
                "lighting-color": null,
                "result": null,
                "specularConstant": null,
                "specularExponent": null,
                "style": null,
                "surfaceScale": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "animateColor",
                "feDistantLight",
                "fePointLight",
                "feSpotLight",
                "set"
            ]
        },
        "feTile": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "height": null,
                "id": null,
                "in": null,
                "result": null,
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feTurbulence": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "baseFrequency": null,
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "height": null,
                "id": null,
                "numOctaves": null,
                "result": null,
                "seed": null,
                "stitchTiles": [
                    "stitch",
                    "noStitch"
                ],
                "type": [
                    "fractalNoise",
                    "turbulence"
                ],
                "width": null,
                "x": null,
                "y": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feDistantLight": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "azimuth": null,
                "elevation": null,
                "id": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "fePointLight": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "id": null,
                "x": null,
                "y": null,
                "z": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feSpotLight": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "id": null,
                "limitingConeAngle": null,
                "pointsAtX": null,
                "pointsAtY": null,
                "pointsAtZ": null,
                "specularExponent": null,
                "x": null,
                "y": null,
                "z": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feFuncR": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "amplitude": null,
                "exponent": null,
                "id": null,
                "intercept": null,
                "offset": null,
                "slope": null,
                "tableValues": null,
                "type": [
                    "identity",
                    "table",
                    "discrete",
                    "linear",
                    "gamma"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feFuncG": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "amplitude": null,
                "exponent": null,
                "id": null,
                "intercept": null,
                "offset": null,
                "slope": null,
                "tableValues": null,
                "type": [
                    "identity",
                    "table",
                    "discrete",
                    "linear",
                    "gamma"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feFuncB": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "amplitude": null,
                "exponent": null,
                "id": null,
                "intercept": null,
                "offset": null,
                "slope": null,
                "tableValues": null,
                "type": [
                    "identity",
                    "table",
                    "discrete",
                    "linear",
                    "gamma"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feFuncA": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "amplitude": null,
                "exponent": null,
                "id": null,
                "intercept": null,
                "offset": null,
                "slope": null,
                "tableValues": null,
                "type": [
                    "identity",
                    "table",
                    "discrete",
                    "linear",
                    "gamma"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "cursor": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "id": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "systemLanguage": null,
                "x": null,
                "y": null
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "a": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "target": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ]
            },
            "children": [
                "a",
                "altGlyphDef",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "clipPath",
                "color-profile",
                "cursor",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "font-face",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "metadata",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "script",
                "set",
                "style",
                "svg",
                "switch",
                "symbol",
                "text",
                "title",
                "use",
                "view"
            ]
        },
        "view": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "id": null,
                "preserveAspectRatio": null,
                "viewBox": null,
                "viewTarget": null,
                "zoomAndPan": [
                    "disable",
                    "magnify"
                ]
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "script": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "id": null,
                "type": null
            }
        },
        "animate": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "accumulate": [
                    "none",
                    "sum"
                ],
                "additive": [
                    "replace",
                    "sum"
                ],
                "attributeName": null,
                "attributeType": null,
                "begin": null,
                "by": null,
                "calcMode": [
                    "discrete",
                    "linear",
                    "paced",
                    "spline"
                ],
                "dur": null,
                "end": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": [
                    "remove",
                    "freeze"
                ],
                "from": null,
                "id": null,
                "keySplines": null,
                "keyTimes": null,
                "max": null,
                "min": null,
                "onbegin": null,
                "onend": null,
                "onload": null,
                "onrepeat": null,
                "repeatCount": null,
                "repeatDur": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "restart": [
                    "always",
                    "never",
                    "whenNotActive"
                ],
                "systemLanguage": null,
                "to": null,
                "values": null
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "set": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "attributeName": null,
                "attributeType": null,
                "begin": null,
                "dur": null,
                "end": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": [
                    "remove",
                    "freeze"
                ],
                "id": null,
                "max": null,
                "min": null,
                "onbegin": null,
                "onend": null,
                "onload": null,
                "onrepeat": null,
                "repeatCount": null,
                "repeatDur": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "restart": [
                    "always",
                    "never",
                    "whenNotActive"
                ],
                "systemLanguage": null,
                "to": null
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "animateMotion": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "accumulate": [
                    "none",
                    "sum"
                ],
                "additive": [
                    "replace",
                    "sum"
                ],
                "begin": null,
                "by": null,
                "calcMode": [
                    "discrete",
                    "linear",
                    "paced",
                    "spline"
                ],
                "dur": null,
                "end": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": [
                    "remove",
                    "freeze"
                ],
                "from": null,
                "id": null,
                "keyPoints": null,
                "keySplines": null,
                "keyTimes": null,
                "max": null,
                "min": null,
                "onbegin": null,
                "onend": null,
                "onload": null,
                "onrepeat": null,
                "origin": null,
                "path": null,
                "repeatCount": null,
                "repeatDur": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "restart": [
                    "always",
                    "never",
                    "whenNotActive"
                ],
                "rotate": null,
                "systemLanguage": null,
                "to": null,
                "values": null
            },
            "children": [
                "desc",
                "metadata",
                "mpath",
                "title"
            ]
        },
        "animateColor": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "accumulate": [
                    "none",
                    "sum"
                ],
                "additive": [
                    "replace",
                    "sum"
                ],
                "attributeName": null,
                "attributeType": null,
                "begin": null,
                "by": null,
                "calcMode": [
                    "discrete",
                    "linear",
                    "paced",
                    "spline"
                ],
                "dur": null,
                "end": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": [
                    "remove",
                    "freeze"
                ],
                "from": null,
                "id": null,
                "keySplines": null,
                "keyTimes": null,
                "max": null,
                "min": null,
                "onbegin": null,
                "onend": null,
                "onload": null,
                "onrepeat": null,
                "repeatCount": null,
                "repeatDur": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "restart": [
                    "always",
                    "never",
                    "whenNotActive"
                ],
                "systemLanguage": null,
                "to": null,
                "values": null
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "animateTransform": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "accumulate": [
                    "none",
                    "sum"
                ],
                "additive": [
                    "replace",
                    "sum"
                ],
                "attributeName": null,
                "attributeType": null,
                "begin": null,
                "by": null,
                "calcMode": [
                    "discrete",
                    "linear",
                    "paced",
                    "spline"
                ],
                "dur": null,
                "end": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": [
                    "remove",
                    "freeze"
                ],
                "from": null,
                "id": null,
                "keySplines": null,
                "keyTimes": null,
                "max": null,
                "min": null,
                "onbegin": null,
                "onend": null,
                "onload": null,
                "onrepeat": null,
                "repeatCount": null,
                "repeatDur": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "restart": [
                    "always",
                    "never",
                    "whenNotActive"
                ],
                "systemLanguage": null,
                "to": null,
                "type": [
                    "translate",
                    "scale",
                    "rotate",
                    "skewX",
                    "skewY"
                ],
                "values": null
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "mpath": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "id": null
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "font": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "horiz-adv-x": null,
                "horiz-origin-x": null,
                "horiz-origin-y": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "vert-adv-y": null,
                "vert-origin-x": null,
                "vert-origin-y": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ]
            },
            "children": [
                "desc",
                "font-face",
                "glyph",
                "hkern",
                "metadata",
                "missing-glyph",
                "title",
                "vkern"
            ]
        },
        "font-face": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "accent-height": null,
                "alphabetic": null,
                "ascent": null,
                "bbox": null,
                "cap-height": null,
                "descent": null,
                "font-family": null,
                "font-size": null,
                "font-stretch": null,
                "font-style": null,
                "font-variant": null,
                "font-weight": null,
                "hanging": null,
                "id": null,
                "ideographic": null,
                "mathematical": null,
                "overline-position": null,
                "overline-thickness": null,
                "panose-1": null,
                "slope": null,
                "stemh": null,
                "stemv": null,
                "strikethrough-position": null,
                "strikethrough-thickness": null,
                "underline-position": null,
                "underline-thickness": null,
                "unicode-range": null,
                "units-per-em": null,
                "v-alphabetic": null,
                "v-hanging": null,
                "v-ideographic": null,
                "v-mathematical": null,
                "widths": null,
                "x-height": null
            },
            "children": [
                "definition-src",
                "desc",
                "font-face-src",
                "metadata",
                "title"
            ]
        },
        "glyph": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "arabic-form": null,
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "d": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-name": null,
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "horiz-adv-x": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "lang": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "opacity": null,
                "orientation": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode": null,
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "vert-adv-y": null,
                "vert-origin-x": null,
                "vert-origin-y": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ]
            },
            "children": [
                "a",
                "altGlyphDef",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "clipPath",
                "color-profile",
                "cursor",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "font-face",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "metadata",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "script",
                "set",
                "style",
                "svg",
                "switch",
                "symbol",
                "text",
                "title",
                "use",
                "view"
            ]
        },
        "missing-glyph": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "d": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "horiz-adv-x": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "vert-adv-y": null,
                "vert-origin-x": null,
                "vert-origin-y": null,
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ]
            },
            "children": [
                "a",
                "altGlyphDef",
                "animate",
                "animateColor",
                "animateMotion",
                "animateTransform",
                "circle",
                "clipPath",
                "color-profile",
                "cursor",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "font-face",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "metadata",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "script",
                "set",
                "style",
                "svg",
                "switch",
                "symbol",
                "text",
                "title",
                "use",
                "view"
            ]
        },
        "hkern": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "g1": null,
                "g2": null,
                "id": null,
                "k": null,
                "u1": null,
                "u2": null
            }
        },
        "vkern": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "g1": null,
                "g2": null,
                "id": null,
                "k": null,
                "u1": null,
                "u2": null
            }
        },
        "font-face-src": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "id": null
            },
            "children": [
                "font-face-name",
                "font-face-uri"
            ]
        },
        "font-face-uri": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "id": null
            },
            "children": [
                "font-face-format"
            ]
        },
        "font-face-format": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "id": null,
                "string": null
            }
        },
        "font-face-name": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "id": null,
                "name": null
            }
        },
        "definition-src": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xlink:type": [
                    "simple",
                    "extended",
                    "title",
                    "resource",
                    "locator",
                    "arc"
                ],
                "xlink:href": null,
                "xlink:role": null,
                "xlink:arcrole": null,
                "xlink:title": null,
                "xlink:show": [
                    "new",
                    "replace",
                    "embed",
                    "other",
                    "none"
                ],
                "xlink:actuate": [
                    "onLoad",
                    "onRequest",
                    "other",
                    "none"
                ],
                "id": null
            }
        },
        "foreignObject": {
            "attrs": {
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "alignment-baseline": [
                    "auto",
                    "baseline",
                    "before-edge",
                    "text-before-edge",
                    "middle",
                    "central",
                    "after-edge",
                    "text-after-edge",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "inherit"
                ],
                "baseline-shift": null,
                "class": null,
                "clip": null,
                "clip-path": null,
                "clip-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "color": null,
                "color-interpolation": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-interpolation-filters": [
                    "auto",
                    "sRGB",
                    "linearRGB",
                    "inherit"
                ],
                "color-profile": null,
                "color-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "cursor": null,
                "direction": [
                    "ltr",
                    "rtl",
                    "inherit"
                ],
                "display": [
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption",
                    "none",
                    "inherit"
                ],
                "dominant-baseline": [
                    "auto",
                    "use-script",
                    "no-change",
                    "reset-size",
                    "ideographic",
                    "alphabetic",
                    "hanging",
                    "mathematical",
                    "central",
                    "middle",
                    "text-after-edge",
                    "text-before-edge",
                    "inherit"
                ],
                "enable-background": null,
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "fill": null,
                "fill-opacity": null,
                "fill-rule": [
                    "nonzero",
                    "evenodd",
                    "inherit"
                ],
                "filter": null,
                "flood-color": null,
                "flood-opacity": null,
                "font-family": null,
                "font-size": null,
                "font-size-adjust": null,
                "font-stretch": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    "inherit"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique",
                    "inherit"
                ],
                "font-variant": [
                    "normal",
                    "small-caps",
                    "inherit"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                    "inherit"
                ],
                "glyph-orientation-horizontal": null,
                "glyph-orientation-vertical": null,
                "height": null,
                "id": null,
                "image-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeQuality",
                    "inherit"
                ],
                "kerning": null,
                "letter-spacing": null,
                "lighting-color": null,
                "marker-end": null,
                "marker-mid": null,
                "marker-start": null,
                "mask": null,
                "onactivate": null,
                "onclick": null,
                "onfocusin": null,
                "onfocusout": null,
                "onload": null,
                "onmousedown": null,
                "onmousemove": null,
                "onmouseout": null,
                "onmouseover": null,
                "onmouseup": null,
                "opacity": null,
                "overflow": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto",
                    "inherit"
                ],
                "pointer-events": [
                    "visiblePainted",
                    "visibleFill",
                    "visibleStroke",
                    "visible",
                    "painted",
                    "fill",
                    "stroke",
                    "all",
                    "none",
                    "inherit"
                ],
                "requiredExtensions": null,
                "requiredFeatures": null,
                "shape-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "crispEdges",
                    "geometricPrecision",
                    "inherit"
                ],
                "stop-color": null,
                "stop-opacity": null,
                "stroke": null,
                "stroke-dasharray": null,
                "stroke-dashoffset": null,
                "stroke-linecap": [
                    "butt",
                    "round",
                    "square",
                    "inherit"
                ],
                "stroke-linejoin": [
                    "miter",
                    "round",
                    "bevel",
                    "inherit"
                ],
                "stroke-miterlimit": null,
                "stroke-opacity": null,
                "stroke-width": null,
                "style": null,
                "systemLanguage": null,
                "text-anchor": [
                    "start",
                    "middle",
                    "end",
                    "inherit"
                ],
                "text-decoration": null,
                "text-rendering": [
                    "auto",
                    "optimizeSpeed",
                    "optimizeLegibility",
                    "geometricPrecision",
                    "inherit"
                ],
                "transform": null,
                "unicode-bidi": [
                    "normal",
                    "embed",
                    "bidi-override",
                    "inherit"
                ],
                "visibility": [
                    "visible",
                    "hidden",
                    "inherit"
                ],
                "width": null,
                "word-spacing": null,
                "writing-mode": [
                    "lr-tb",
                    "rl-tb",
                    "tb-rl",
                    "lr",
                    "rl",
                    "tb",
                    "inherit"
                ],
                "x": null,
                "y": null
            }
        }
    }
;

}));