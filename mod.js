// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function n(n){return r(n)===n&&n>=0}function t(r){return r!=r}var u=Math.round,a=Number.POSITIVE_INFINITY;function o(r,o){return t(r)||t(o)||o<0||o>1||!n(r)||r===a?NaN:u(function(r,u){return t(r)||t(u)||u<0||u>1||!n(r)||r===a?NaN:r*u}(r,o))}export{o as default};
//# sourceMappingURL=mod.js.map
