"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[713,6393],{66393:(_,a,r)=>{r.r(a),r.d(a,{C:()=>n,c:()=>l});var s=r(94403);function e(t,u){for(var i=0;i<u.length;i++){const c=u[i];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in t)){const p=Object.getOwnPropertyDescriptor(c,d);p&&Object.defineProperty(t,d,p.get?p:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o=(0,s.r)();const n=(0,s.g)(o),l=e({__proto__:null,default:n},[o])},11511:(_,a,r)=>{r.d(a,{i:()=>s});function s(e,o){var n,l;const{levels:t,indentLevel:u}=e;return((!t||t.length===0?u:t.at(-1)-(!((n=this.electricInput)===null||n===void 0)&&n.test(o)?1:0))||0)*(((l=this.config)===null||l===void 0?void 0:l.indentUnit)||0)}},713:(_,a,r)=>{r.r(a);var s=r(66393),e=r(40618),o=r(11511);s.C.defineMode("graphql-results",t=>{const u=(0,e.r5)({eatWhitespace:i=>i.eatSpace(),lexRules:n,parseRules:l,editorConfig:{tabSize:t.tabSize}});return{config:t,startState:u.startState,token:u.token,indent:o.i,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}});const n={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},l={Document:[(0,e.p)("{"),(0,e.p_)("Entry",(0,e.p)(",")),(0,e.p)("}")],Entry:[(0,e.t)("String","def"),(0,e.p)(":"),"Value"],Value(t){switch(t.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(t.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(t.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[(0,e.t)("Number","number")],StringValue:[(0,e.t)("String","string")],BooleanValue:[(0,e.t)("Keyword","builtin")],NullValue:[(0,e.t)("Keyword","keyword")],ListValue:[(0,e.p)("["),(0,e.p_)("Value",(0,e.p)(",")),(0,e.p)("]")],ObjectValue:[(0,e.p)("{"),(0,e.p_)("ObjectField",(0,e.p)(",")),(0,e.p)("}")],ObjectField:[(0,e.t)("String","property"),(0,e.p)(":"),"Value"]}}}]);})();

//# sourceMappingURL=713.b40950fa.chunk.js.map