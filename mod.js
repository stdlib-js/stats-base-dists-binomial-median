// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var n=function(n){return r(n)===n&&n>=0};var t=function(r){return r!=r},u=Math.round,a=Number.POSITIVE_INFINITY,o=n,e=t,N=a;var f=function(r,n){return e(r)||e(n)||n<0||n>1||!o(r)||r===N?NaN:r*n};function I(r,o){return t(r)||t(o)||o<0||o>1||!n(r)||r===a?NaN:u(f(r,o))}export{I as default};
//# sourceMappingURL=mod.js.map
