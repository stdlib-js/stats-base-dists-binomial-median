// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var n=function(n){return r(n)===n&&n>=0};var t=function(r){return r!=r},a=Math.round,u=Number.POSITIVE_INFINITY,o=n,e=t,N=u;var f=n,v=t,I=a,c=function(r,n){return e(r)||e(n)||n<0||n>1||!o(r)||r===N?NaN:r*n},i=u;var d=function(r,n){return v(r)||v(n)||n<0||n>1||!f(r)||r===i?NaN:I(c(r,n))};export{d as default};
//# sourceMappingURL=mod.js.map
