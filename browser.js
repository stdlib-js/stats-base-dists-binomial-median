// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor;function n(n){return e(n)===n&&n>=0}function t(e){return e!=e}var o=Math.round,r=Number.POSITIVE_INFINITY;return function(e,u){return t(e)||t(u)||u<0||u>1||!n(e)||e===r?NaN:o(function(e,o){return t(e)||t(o)||o<0||o>1||!n(e)||e===r?NaN:e*o}(e,u))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).median=n();
//# sourceMappingURL=browser.js.map
