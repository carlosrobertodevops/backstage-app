(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2287],{67156:(F,u,g)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});const t=g(11601),$=g(17898),h=g(83277),A=g(96223),w=g(49409),y=g(63036),E="errorMessage",i=new t.Name("emUsed"),r={required:"missingProperty",dependencies:"property",dependentRequired:"property"},o=/\$\{[^}]+\}/,p=/\$\{([^}]+)\}/g,c=/^""\s*\+\s*|\s*\+\s*""$/g;function S(N){return{keyword:E,schemaType:["string","object"],post:!0,code(k){const{gen:e,data:x,schema:v,schemaValue:O,it:b}=k;if(b.createErrors===!1)return;const j=v,D=$.strConcat(y.default.instancePath,b.errorPath);e.if(t._`${y.default.errors} > 0`,()=>{if(typeof j=="object"){const[n,f]=m(j);f&&M(f),n&&T(n),L(s(j))}const a=typeof j=="string"?j:j._;a&&V(a),N.keepErrors||Y()});function s({properties:a,items:n}){const f={};if(a){f.props={};for(const _ in a)f.props[_]=[]}if(n){f.items={};for(let _=0;_<n.length;_++)f.items[_]=[]}return f}function m(a){let n,f;for(const _ in a){if(_==="properties"||_==="items")continue;const I=a[_];if(typeof I=="object"){n||(n={});const P=n[_]={};for(const d in I)P[d]=[]}else f||(f={}),f[_]=[]}return[n,f]}function M(a){const n=e.const("emErrors",t.stringify(a)),f=e.const("templates",U(a,v));e.forOf("err",y.default.vErrors,d=>e.if(G(d,n),()=>e.code(t._`${n}[${d}.keyword].push(${d})`).assign(t._`${d}.${i}`,!0)));const{singleError:_}=N;if(_){const d=e.let("message",t._`""`),l=e.let("paramsErrors",t._`[]`);I(C=>{e.if(d,()=>e.code(t._`${d} += ${typeof _=="string"?_:";"}`)),e.code(t._`${d} += ${P(C)}`),e.assign(l,t._`${l}.concat(${n}[${C}])`)}),w.reportError(k,{message:d,params:t._`{errors: ${l}}`})}else I(d=>w.reportError(k,{message:P(d),params:t._`{errors: ${n}[${d}]}`}));function I(d){e.forIn("key",n,l=>e.if(t._`${n}[${l}].length`,()=>d(l)))}function P(d){return t._`${d} in ${f} ? ${f}[${d}]() : ${O}[${d}]`}}function T(a){const n=e.const("emErrors",t.stringify(a)),f=[];for(const l in a)f.push([l,U(a[l],v[l])]);const _=e.const("templates",e.object(...f)),I=e.scopeValue("obj",{ref:r,code:t.stringify(r)}),P=e.let("emPropParams"),d=e.let("emParamsErrors");e.forOf("err",y.default.vErrors,l=>e.if(G(l,n),()=>{e.assign(P,t._`${I}[${l}.keyword]`),e.assign(d,t._`${n}[${l}.keyword][${l}.params[${P}]]`),e.if(d,()=>e.code(t._`${d}.push(${l})`).assign(t._`${l}.${i}`,!0))})),e.forIn("key",n,l=>e.forIn("keyProp",t._`${n}[${l}]`,C=>{e.assign(d,t._`${n}[${l}][${C}]`),e.if(t._`${d}.length`,()=>{const K=e.const("tmpl",t._`${_}[${l}] && ${_}[${l}][${C}]`);w.reportError(k,{message:t._`${K} ? ${K}() : ${O}[${l}][${C}]`,params:t._`{errors: ${d}}`})})}))}function L(a){const{props:n,items:f}=a;if(!n&&!f)return;const _=t._`typeof ${x} == "object"`,I=t._`Array.isArray(${x})`,P=e.let("emErrors");let d,l;const C=e.let("templates");n&&f?(d=e.let("emChildKwd"),e.if(_),e.if(I,()=>{K(f,v.items),e.assign(d,t.str`items`)},()=>{K(n,v.properties),e.assign(d,t.str`properties`)}),l=t._`[${d}]`):f?(e.if(I),K(f,v.items),l=t._`.items`):n&&(e.if($.and(_,$.not(I))),K(n,v.properties),l=t._`.properties`),e.forOf("err",y.default.vErrors,R=>W(R,P,Z=>e.code(t._`${P}[${Z}].push(${R})`).assign(t._`${R}.${i}`,!0))),e.forIn("key",P,R=>e.if(t._`${P}[${R}].length`,()=>{w.reportError(k,{message:t._`${R} in ${C} ? ${C}[${R}]() : ${O}${l}[${R}]`,params:t._`{errors: ${P}[${R}]}`}),e.assign(t._`${y.default.vErrors}[${y.default.errors}-1].instancePath`,t._`${D} + "/" + ${R}.replace(/~/g, "~0").replace(/\\//g, "~1")`)})),e.endIf();function K(R,Z){e.assign(P,t.stringify(R)),e.assign(C,U(R,Z))}}function V(a){const n=e.const("emErrs",t._`[]`);e.forOf("err",y.default.vErrors,f=>e.if(H(f),()=>e.code(t._`${n}.push(${f})`).assign(t._`${f}.${i}`,!0))),e.if(t._`${n}.length`,()=>w.reportError(k,{message:J(a),params:t._`{errors: ${n}}`}))}function Y(){const a=e.const("emErrs",t._`[]`);e.forOf("err",y.default.vErrors,n=>e.if(t._`!${n}.${i}`,()=>e.code(t._`${a}.push(${n})`))),e.assign(y.default.vErrors,a).assign(y.default.errors,t._`${a}.length`)}function G(a,n){return $.and(t._`${a}.keyword !== ${E}`,t._`!${a}.${i}`,t._`${a}.instancePath === ${D}`,t._`${a}.keyword in ${n}`,t._`${a}.schemaPath.indexOf(${b.errSchemaPath}) === 0`,t._`/^\\/[^\\/]*$/.test(${a}.schemaPath.slice(${b.errSchemaPath.length}))`)}function W(a,n,f){e.if($.and(t._`${a}.keyword !== ${E}`,t._`!${a}.${i}`,t._`${a}.instancePath.indexOf(${D}) === 0`),()=>{const _=e.scopeValue("pattern",{ref:/^\/([^/]*)(?:\/|$)/,code:t._`new RegExp("^\\\/([^/]*)(?:\\\/|$)")`}),I=e.const("emMatches",t._`${_}.exec(${a}.instancePath.slice(${D}.length))`),P=e.const("emChild",t._`${I} && ${I}[1].replace(/~1/g, "/").replace(/~0/g, "~")`);e.if(t._`${P} !== undefined && ${P} in ${n}`,()=>f(P))})}function H(a){return $.and(t._`${a}.keyword !== ${E}`,t._`!${a}.${i}`,$.or(t._`${a}.instancePath === ${D}`,$.and(t._`${a}.instancePath.indexOf(${D}) === 0`,t._`${a}.instancePath[${D}.length] === "/"`)),t._`${a}.schemaPath.indexOf(${b.errSchemaPath}) === 0`,t._`${a}.schemaPath[${b.errSchemaPath}.length] === "/"`)}function U(a,n){const f=[];for(const _ in a){const I=n[_];o.test(I)&&f.push([_,B(I)])}return e.object(...f)}function J(a){return o.test(a)?new h._Code(h.safeStringify(a).replace(p,(n,f)=>`" + JSON.stringify(${A.getData(f,b)}) + "`).replace(c,"")):t.stringify(a)}function B(a){return t._`function(){return ${J(a)}}`}},metaSchema:{anyOf:[{type:"string"},{type:"object",properties:{properties:{$ref:"#/$defs/stringMap"},items:{$ref:"#/$defs/stringList"},required:{$ref:"#/$defs/stringOrMap"},dependencies:{$ref:"#/$defs/stringOrMap"}},additionalProperties:{type:"string"}}],$defs:{stringMap:{type:"object",additionalProperties:{type:"string"}},stringOrMap:{anyOf:[{type:"string"},{$ref:"#/$defs/stringMap"}]},stringList:{type:"array",items:{type:"string"}}}}}}const z=(N,k={})=>{if(!N.opts.allErrors)throw new Error("ajv-errors: Ajv option allErrors must be true");if(N.opts.jsPropertySyntax)throw new Error("ajv-errors: ajv option jsPropertySyntax is not supported");return N.addKeyword(S(k))};u.default=z,F.exports=z,F.exports.default=z},65733:(F,u)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.formatNames=u.fastFormats=u.fullFormats=void 0;function g(s,m){return{validate:s,compare:m}}u.fullFormats={date:g(A,w),time:g(E,i),"date-time":g(o,p),duration:/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,uri:z,"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,url:/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,regex:D,uuid:/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,"json-pointer":/^(?:\/(?:[^~/]|~0|~1)*)*$/,"json-pointer-uri-fragment":/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,byte:k,int32:{type:"number",validate:v},int64:{type:"number",validate:O},float:{type:"number",validate:b},double:{type:"number",validate:b},password:!0,binary:!0},u.fastFormats={...u.fullFormats,date:g(/^\d\d\d\d-[0-1]\d-[0-3]\d$/,w),time:g(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,i),"date-time":g(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,p),uri:/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i},u.formatNames=Object.keys(u.fullFormats);function t(s){return s%4===0&&(s%100!==0||s%400===0)}const $=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,h=[0,31,28,31,30,31,30,31,31,30,31,30,31];function A(s){const m=$.exec(s);if(!m)return!1;const M=+m[1],T=+m[2],L=+m[3];return T>=1&&T<=12&&L>=1&&L<=(T===2&&t(M)?29:h[T])}function w(s,m){if(s&&m)return s>m?1:s<m?-1:0}const y=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;function E(s,m){const M=y.exec(s);if(!M)return!1;const T=+M[1],L=+M[2],V=+M[3],Y=M[5];return(T<=23&&L<=59&&V<=59||T===23&&L===59&&V===60)&&(!m||Y!=="")}function i(s,m){if(!(s&&m))return;const M=y.exec(s),T=y.exec(m);if(M&&T)return s=M[1]+M[2]+M[3]+(M[4]||""),m=T[1]+T[2]+T[3]+(T[4]||""),s>m?1:s<m?-1:0}const r=/t|\s/i;function o(s){const m=s.split(r);return m.length===2&&A(m[0])&&E(m[1],!0)}function p(s,m){if(!(s&&m))return;const[M,T]=s.split(r),[L,V]=m.split(r),Y=w(M,L);if(Y!==void 0)return Y||i(T,V)}const c=/\/|:/,S=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;function z(s){return c.test(s)&&S.test(s)}const N=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;function k(s){return N.lastIndex=0,N.test(s)}const e=-(2**31),x=2**31-1;function v(s){return Number.isInteger(s)&&s<=x&&s>=e}function O(s){return Number.isInteger(s)}function b(){return!0}const j=/[^\\]\\Z/;function D(s){if(j.test(s))return!1;try{return new RegExp(s),!0}catch{return!1}}},74421:(F,u,g)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});const t=g(65733),$=g(31038),h=g(17898),A=new h.Name("fullFormats"),w=new h.Name("fastFormats"),y=(i,r={keywords:!0})=>{if(Array.isArray(r))return E(i,r,t.fullFormats,A),i;const[o,p]=r.mode==="fast"?[t.fastFormats,w]:[t.fullFormats,A],c=r.formats||t.formatNames;return E(i,c,o,p),r.keywords&&$.default(i),i};y.get=(i,r="full")=>{const p=(r==="fast"?t.fastFormats:t.fullFormats)[i];if(!p)throw new Error(`Unknown format "${i}"`);return p};function E(i,r,o,p){var c,S;(c=(S=i.opts.code).formats)!==null&&c!==void 0||(S.formats=h._`require("ajv-formats/dist/formats").${p}`);for(const z of r)i.addFormat(z,o[z])}F.exports=u=y,Object.defineProperty(u,"__esModule",{value:!0}),u.default=y},31038:(F,u,g)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.formatLimitDefinition=void 0;const t=g(11601),$=g(17898),h=$.operators,A={formatMaximum:{okStr:"<=",ok:h.LTE,fail:h.GT},formatMinimum:{okStr:">=",ok:h.GTE,fail:h.LT},formatExclusiveMaximum:{okStr:"<",ok:h.LT,fail:h.GTE},formatExclusiveMinimum:{okStr:">",ok:h.GT,fail:h.LTE}},w={message:({keyword:E,schemaCode:i})=>$.str`should be ${A[E].okStr} ${i}`,params:({keyword:E,schemaCode:i})=>$._`{comparison: ${A[E].okStr}, limit: ${i}}`};u.formatLimitDefinition={keyword:Object.keys(A),type:"string",schemaType:"string",$data:!0,error:w,code(E){const{gen:i,data:r,schemaCode:o,keyword:p,it:c}=E,{opts:S,self:z}=c;if(!S.validateFormats)return;const N=new t.KeywordCxt(c,z.RULES.all.format.definition,"format");N.$data?k():e();function k(){const v=i.scopeValue("formats",{ref:z.formats,code:S.code.formats}),O=i.const("fmt",$._`${v}[${N.schemaCode}]`);E.fail$data($.or($._`typeof ${O} != "object"`,$._`${O} instanceof RegExp`,$._`typeof ${O}.compare != "function"`,x(O)))}function e(){const v=N.schema,O=z.formats[v];if(!O||O===!0)return;if(typeof O!="object"||O instanceof RegExp||typeof O.compare!="function")throw new Error(`"${p}": format "${v}" does not define "compare" function`);const b=i.scopeValue("formats",{key:v,ref:O,code:S.code.formats?$._`${S.code.formats}${$.getProperty(v)}`:void 0});E.fail$data(x(b))}function x(v){return $._`${v}.compare(${r}, ${o}) ${A[p].fail} 0`}},dependencies:["format"]};const y=E=>(E.addKeyword(u.formatLimitDefinition),E);u.default=y},45838:(F,u)=>{var g=/~/,t=/~[01]/g;function $(r){switch(r){case"~1":return"/";case"~0":return"~"}throw new Error("Invalid tilde escape: "+r)}function h(r){return g.test(r)?r.replace(t,$):r}function A(r,o,p){for(var c,S,z=1,N=o.length;z<N;){if(o[z]==="constructor"||o[z]==="prototype"||o[z]==="__proto__")return r;if(c=h(o[z++]),S=N>z,typeof r[c]>"u"&&(Array.isArray(r)&&c==="-"&&(c=r.length),S&&(o[z]!==""&&o[z]<1/0||o[z]==="-"?r[c]=[]:r[c]={})),!S)break;r=r[c]}var k=r[c];return p===void 0?delete r[c]:r[c]=p,k}function w(r){if(typeof r=="string"){if(r=r.split("/"),r[0]==="")return r;throw new Error("Invalid JSON pointer.")}else if(Array.isArray(r)){for(const o of r)if(typeof o!="string"&&typeof o!="number")throw new Error("Invalid JSON pointer. Must be of type string or number.");return r}throw new Error("Invalid JSON pointer.")}function y(r,o){if(typeof r!="object")throw new Error("Invalid input object.");o=w(o);var p=o.length;if(p===1)return r;for(var c=1;c<p;){if(r=r[h(o[c++])],p===c)return r;if(typeof r!="object"||r===null)return}}function E(r,o,p){if(typeof r!="object")throw new Error("Invalid input object.");if(o=w(o),o.length===0)throw new Error("Invalid JSON pointer for set.");return A(r,o,p)}function i(r){var o=w(r);return{get:function(p){return y(p,o)},set:function(p,c){return E(p,o,c)}}}u.get=y,u.set=E,u.compile=i},41263:(F,u,g)=>{var t=g(87655);function $(h,A,w){return h==null?h:t(h,A,w)}F.exports=$}}]);})();

//# sourceMappingURL=2287.45346c86.chunk.js.map