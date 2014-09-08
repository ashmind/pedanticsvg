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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "class": null,
                "id": null,
                "style": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        },
        "title": {
            "attrs": {
                "class": null,
                "id": null,
                "style": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        },
        "metadata": {
            "attrs": {
                "id": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        },
        "symbol": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "y": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
        "switch": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "y": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
        "style": {
            "attrs": {
                "id": null,
                "media": null,
                "title": null,
                "type": null,
                "xml:space": [
                    "default",
                    "preserve"
                ],
                "xml:base": null,
                "xml:lang": null
            }
        },
        "path": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
        "circle": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "y2": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
        "ellipse": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                "y": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                "word-spacing": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                "y": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        },
        "altGlyphDef": {
            "attrs": {
                "id": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "altGlyphItem",
                "glyphRef"
            ]
        },
        "altGlyphItem": {
            "attrs": {
                "id": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "glyphRef"
            ]
        },
        "glyphRef": {
            "attrs": {
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
                "y": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        },
        "marker": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "id": null,
                "local": null,
                "name": null,
                "rendering-intent": [
                    "auto",
                    "perceptual",
                    "relative-colorimetric",
                    "saturation",
                    "absolute-colorimetric"
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "y2": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                "style": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                "style": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "animateColor",
                "set"
            ]
        },
        "pattern": {
            "attrs": {
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
                "y": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
        "clipPath": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
        "filter": {
            "attrs": {
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
                "y": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feColorMatrix": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feComponentTransfer": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feConvolveMatrix": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feDiffuseLighting": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feFlood": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "animateColor",
                "set"
            ]
        },
        "feGaussianBlur": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feImage": {
            "attrs": {
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
                "y": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "animateTransform",
                "set"
            ]
        },
        "feMerge": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "feMergeNode"
            ]
        },
        "feMergeNode": {
            "attrs": {
                "id": null,
                "in": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feMorphology": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feOffset": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feSpecularLighting": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feTurbulence": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feDistantLight": {
            "attrs": {
                "azimuth": null,
                "elevation": null,
                "id": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "fePointLight": {
            "attrs": {
                "id": null,
                "x": null,
                "y": null,
                "z": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feSpotLight": {
            "attrs": {
                "id": null,
                "limitingConeAngle": null,
                "pointsAtX": null,
                "pointsAtY": null,
                "pointsAtZ": null,
                "specularExponent": null,
                "x": null,
                "y": null,
                "z": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feFuncR": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feFuncG": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feFuncB": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feFuncA": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "cursor": {
            "attrs": {
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "id": null,
                "requiredExtensions": null,
                "requiredFeatures": null,
                "systemLanguage": null,
                "x": null,
                "y": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "a": {
            "attrs": {
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "id": null,
                "type": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        },
        "animate": {
            "attrs": {
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
                "values": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "set": {
            "attrs": {
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
                "to": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "animateMotion": {
            "attrs": {
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
                "values": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                "values": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "animateTransform": {
            "attrs": {
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
                "values": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "mpath": {
            "attrs": {
                "externalResourcesRequired": [
                    "false",
                    "true"
                ],
                "id": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "font": {
            "attrs": {
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "x-height": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                ],
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
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
                "g1": null,
                "g2": null,
                "id": null,
                "k": null,
                "u1": null,
                "u2": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        },
        "vkern": {
            "attrs": {
                "g1": null,
                "g2": null,
                "id": null,
                "k": null,
                "u1": null,
                "u2": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        },
        "font-face-src": {
            "attrs": {
                "id": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "font-face-name",
                "font-face-uri"
            ]
        },
        "font-face-uri": {
            "attrs": {
                "id": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            },
            "children": [
                "font-face-format"
            ]
        },
        "font-face-format": {
            "attrs": {
                "id": null,
                "string": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        },
        "font-face-name": {
            "attrs": {
                "id": null,
                "name": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        },
        "definition-src": {
            "attrs": {
                "id": null,
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
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        },
        "foreignObject": {
            "attrs": {
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
                "y": null,
                "xml:base": null,
                "xml:lang": null,
                "xml:space": [
                    "default",
                    "preserve"
                ]
            }
        }
    }
;

}));