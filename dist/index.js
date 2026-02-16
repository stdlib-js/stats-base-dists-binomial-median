"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(d,a){
var n=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-round/dist'),v=require('@stdlib/stats-base-dists-binomial-mean/dist'),q=require('@stdlib/constants-float64-pinf/dist');function o(e,r){return i(e)||i(r)||r<0||r>1||!n(e)||e===q?NaN:s(v(e,r))}a.exports=o
});var N=u();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
