"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2236,6393],{66393:(_,c,t)=>{t.r(c),t.d(c,{C:()=>l,c:()=>p});var s=t(94403);function g(o,d){for(var i=0;i<d.length;i++){const r=d[i];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in o)){const u=Object.getOwnPropertyDescriptor(r,a);u&&Object.defineProperty(o,a,u.get?u:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var n=(0,s.r)();const l=(0,s.g)(n),p=g({__proto__:null,default:l},[n])},52236:(_,c,t)=>{t.r(c);var s=t(66393),g=t(40618);const n=["error","warning","information","hint"],l={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};s.C.registerHelper("lint","graphql",(p,o)=>{const{schema:d,validationRules:i,externalFragments:r}=o;return(0,g.VS)(p,d,i,void 0,r).map(e=>({message:e.message,severity:e.severity?n[e.severity-1]:n[0],type:e.source?l[e.source]:void 0,from:s.C.Pos(e.range.start.line,e.range.start.character),to:s.C.Pos(e.range.end.line,e.range.end.character)}))})}}]);})();

//# sourceMappingURL=2236.53e1f681.chunk.js.map