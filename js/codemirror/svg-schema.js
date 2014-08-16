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
        "a": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "lighting-color": null,
                "target": [],
                "transform": null
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
        "altGlyph": {
            "attrs": {
                "dx": null,
                "dy": null,
                "format": null,
                "glyphRef": null,
                "rotate": null,
                "x": null,
                "y": null
            }
        },
        "altGlyphDef": {
            "children": [
                "altGlyphItem",
                "glyphRef"
            ]
        },
        "altGlyphItem": {
            "children": [
                "glyphRef"
            ]
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
                "fill": [
                    "remove",
                    "freeze"
                ],
                "from": null,
                "keySplines": null,
                "keyTimes": null,
                "max": null,
                "min": null,
                "repeatCount": null,
                "repeatDur": null,
                "restart": [
                    "always",
                    "never",
                    "whenNotActive"
                ],
                "to": null,
                "values": null
            },
            "children": [
                "desc",
                "metadata",
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
                "fill": [
                    "remove",
                    "freeze"
                ],
                "from": null,
                "keySplines": null,
                "keyTimes": null,
                "max": null,
                "min": null,
                "repeatCount": null,
                "repeatDur": null,
                "restart": [
                    "always",
                    "never",
                    "whenNotActive"
                ],
                "to": null,
                "values": null
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
                "fill": [
                    "remove",
                    "freeze"
                ],
                "from": null,
                "keyPoints": null,
                "keySplines": null,
                "keyTimes": null,
                "max": null,
                "min": null,
                "origin": null,
                "path": null,
                "repeatCount": null,
                "repeatDur": null,
                "restart": [
                    "always",
                    "never",
                    "whenNotActive"
                ],
                "rotate": null,
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
                "fill": [
                    "remove",
                    "freeze"
                ],
                "from": null,
                "keySplines": null,
                "keyTimes": null,
                "max": null,
                "min": null,
                "repeatCount": null,
                "repeatDur": null,
                "restart": [
                    "always",
                    "never",
                    "whenNotActive"
                ],
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
        "circle": {
            "attrs": {
                "cx": null,
                "cy": null,
                "r": null,
                "transform": null
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
        "clipPath": {
            "attrs": {
                "clipPathUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "transform": null
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
        "color-profile": {
            "attrs": {
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
        "cursor": {
            "attrs": {
                "x": null,
                "y": null
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "definition-src": {},
        "defs": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "lighting-color": null,
                "transform": null
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
        "desc": {},
        "ellipse": {
            "attrs": {
                "cx": null,
                "cy": null,
                "rx": null,
                "ry": null,
                "transform": null
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
        "feBlend": {
            "attrs": {
                "height": null,
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
                "height": null,
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
                "height": null,
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
                "height": null,
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
                "bias": null,
                "divisor": null,
                "edgeMode": [
                    "duplicate",
                    "wrap",
                    "none"
                ],
                "height": null,
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
                "diffuseConstant": null,
                "height": null,
                "in": null,
                "kernelUnitLength": null,
                "lighting-color": null,
                "result": null,
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
                "height": null,
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
        "feDistantLight": {
            "attrs": {
                "azimuth": null,
                "elevation": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feFlood": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "height": null,
                "in": null,
                "result": null,
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
        "feFuncA": {
            "attrs": {
                "amplitude": null,
                "exponent": null,
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
                "amplitude": null,
                "exponent": null,
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
                "amplitude": null,
                "exponent": null,
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
        "feFuncR": {
            "attrs": {
                "amplitude": null,
                "exponent": null,
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
        "feGaussianBlur": {
            "attrs": {
                "height": null,
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
                "flood-color": null,
                "flood-opacity": null,
                "height": null,
                "lighting-color": null,
                "preserveAspectRatio": null,
                "result": null,
                "width": null,
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
                "height": null,
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
                "in": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feMorphology": {
            "attrs": {
                "height": null,
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
                "dx": null,
                "dy": null,
                "height": null,
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
        "fePointLight": {
            "attrs": {
                "x": null,
                "y": null,
                "z": null
            },
            "children": [
                "animate",
                "set"
            ]
        },
        "feSpecularLighting": {
            "attrs": {
                "height": null,
                "in": null,
                "kernelUnitLength": null,
                "lighting-color": null,
                "result": null,
                "specularConstant": null,
                "specularExponent": null,
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
        "feSpotLight": {
            "attrs": {
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
        "feTile": {
            "attrs": {
                "height": null,
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
                "baseFrequency": null,
                "height": null,
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
        "filter": {
            "attrs": {
                "filterRes": null,
                "filterUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "flood-color": null,
                "flood-opacity": null,
                "height": null,
                "lighting-color": null,
                "primitiveUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "width": null,
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
        "font": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "horiz-adv-x": null,
                "horiz-origin-x": null,
                "horiz-origin-y": null,
                "lighting-color": null,
                "vert-adv-y": null,
                "vert-origin-x": null,
                "vert-origin-y": null
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
                "font-stretch": [
                    "normal",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded"
                ],
                "font-style": [
                    "normal",
                    "italic",
                    "oblique"
                ],
                "font-variant": [
                    "normal",
                    "small-caps"
                ],
                "font-weight": [
                    "normal",
                    "bold",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900"
                ],
                "hanging": null,
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
        "font-face-format": {
            "attrs": {
                "string": null
            }
        },
        "font-face-name": {
            "attrs": {
                "name": null
            }
        },
        "font-face-src": {
            "children": [
                "font-face-name",
                "font-face-uri"
            ]
        },
        "font-face-uri": {
            "children": [
                "font-face-format"
            ]
        },
        "foreignObject": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "height": null,
                "lighting-color": null,
                "transform": null,
                "width": null,
                "x": null,
                "y": null
            }
        },
        "g": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "lighting-color": null,
                "transform": null
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
        "glyph": {
            "attrs": {
                "arabic-form": null,
                "d": null,
                "flood-color": null,
                "flood-opacity": null,
                "glyph-name": null,
                "horiz-adv-x": null,
                "lang": null,
                "lighting-color": null,
                "orientation": null,
                "unicode": null,
                "vert-adv-y": null,
                "vert-origin-x": null,
                "vert-origin-y": null
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
        "glyphRef": {
            "attrs": {
                "dx": null,
                "dy": null,
                "format": null,
                "glyphRef": null,
                "x": null,
                "y": null
            }
        },
        "hkern": {
            "attrs": {
                "g1": null,
                "g2": null,
                "k": null,
                "u1": null,
                "u2": null
            }
        },
        "image": {
            "attrs": {
                "height": null,
                "preserveAspectRatio": null,
                "transform": null,
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
        "line": {
            "attrs": {
                "transform": null,
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
        "linearGradient": {
            "attrs": {
                "gradientTransform": null,
                "gradientUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "spreadMethod": [
                    "pad",
                    "reflect",
                    "repeat"
                ],
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
        "marker": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "lighting-color": null,
                "markerHeight": null,
                "markerUnits": [
                    "strokeWidth",
                    "userSpaceOnUse"
                ],
                "markerWidth": null,
                "orient": null,
                "preserveAspectRatio": null,
                "refX": null,
                "refY": null,
                "viewBox": null
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
        "mask": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "height": null,
                "lighting-color": null,
                "maskContentUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "maskUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "width": null,
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
        "metadata": {},
        "missing-glyph": {
            "attrs": {
                "d": null,
                "flood-color": null,
                "flood-opacity": null,
                "horiz-adv-x": null,
                "lighting-color": null,
                "vert-adv-y": null,
                "vert-origin-x": null,
                "vert-origin-y": null
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
        "mpath": {
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "path": {
            "attrs": {
                "d": null,
                "pathLength": null,
                "transform": null
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
        "pattern": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "height": null,
                "lighting-color": null,
                "patternContentUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "patternTransform": null,
                "patternUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "preserveAspectRatio": null,
                "viewBox": null,
                "width": null,
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
        "polygon": {
            "attrs": {
                "points": null,
                "transform": null
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
                "points": null,
                "transform": null
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
        "radialGradient": {
            "attrs": {
                "cx": null,
                "cy": null,
                "fx": null,
                "fy": null,
                "gradientTransform": null,
                "gradientUnits": [
                    "userSpaceOnUse",
                    "objectBoundingBox"
                ],
                "r": null,
                "spreadMethod": [
                    "pad",
                    "reflect",
                    "repeat"
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
        "rect": {
            "attrs": {
                "height": null,
                "rx": null,
                "ry": null,
                "transform": null,
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
        "script": {
            "attrs": {
                "type": null
            }
        },
        "set": {
            "attrs": {
                "attributeName": null,
                "attributeType": null,
                "begin": null,
                "dur": null,
                "end": null,
                "fill": [
                    "remove",
                    "freeze"
                ],
                "max": null,
                "min": null,
                "repeatCount": null,
                "repeatDur": null,
                "restart": [
                    "always",
                    "never",
                    "whenNotActive"
                ],
                "to": null
            },
            "children": [
                "desc",
                "metadata",
                "title"
            ]
        },
        "stop": {
            "attrs": {
                "offset": null
            },
            "children": [
                "animate",
                "animateColor",
                "set"
            ]
        },
        "style": {
            "attrs": {
                "media": null,
                "title": null,
                "type": null
            }
        },
        "svg": {
            "attrs": {
                "baseProfile": null,
                "contentScriptType": null,
                "contentStyleType": null,
                "flood-color": null,
                "flood-opacity": null,
                "height": null,
                "lighting-color": null,
                "preserveAspectRatio": null,
                "version": null,
                "viewBox": null,
                "width": null,
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
        "switch": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "lighting-color": null,
                "transform": null
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
        "symbol": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "lighting-color": null,
                "preserveAspectRatio": null,
                "viewBox": null
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
        "text": {
            "attrs": {
                "dx": null,
                "dy": null,
                "lengthAdjust": [
                    "spacing",
                    "spacingAndGlyphs"
                ],
                "rotate": null,
                "textLength": null,
                "transform": null,
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
        "textPath": {
            "attrs": {
                "lengthAdjust": [
                    "spacing",
                    "spacingAndGlyphs"
                ],
                "method": [
                    "align",
                    "stretch"
                ],
                "spacing": [
                    "auto",
                    "exact"
                ],
                "startOffset": null,
                "textLength": null
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
        "title": {},
        "tref": {
            "attrs": {
                "dx": null,
                "dy": null,
                "lengthAdjust": [
                    "spacing",
                    "spacingAndGlyphs"
                ],
                "rotate": null,
                "textLength": null,
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
        "tspan": {
            "attrs": {
                "dx": null,
                "dy": null,
                "lengthAdjust": [
                    "spacing",
                    "spacingAndGlyphs"
                ],
                "rotate": null,
                "textLength": null,
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
        "use": {
            "attrs": {
                "flood-color": null,
                "flood-opacity": null,
                "height": null,
                "lighting-color": null,
                "transform": null,
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
        "view": {
            "attrs": {
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
        "vkern": {
            "attrs": {
                "g1": null,
                "g2": null,
                "k": null,
                "u1": null,
                "u2": null
            }
        }
    };
}));