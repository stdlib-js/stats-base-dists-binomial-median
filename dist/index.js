"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var u=n(function(d,a){
var s=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-round/dist'),q=require('@stdlib/stats-base-dists-binomial-mean/dist'),o=require('@stdlib/constants-float64-pinf/dist');function N(e,r){return i(e)||i(r)||r<0||r>1||!s(e)||e===o?NaN:v(q(e,r))}a.exports=N
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
