"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1472,3402],{33402:($e,$,s)=>{s.d($,{b:()=>ft,W:()=>Ft});var t=s(14041),L=s(18690),k=s(82326),N=s(11618),_=s(66839),ce=s(39781),W=s(93285),M=s(42899),Ee=s(4387),ye=s(13660),O=s(15246),T=s(699),ee=s(37281),te=s(14158),ke=s(97214),j=s(64398),de=s(79182),Ae=s(18139),Ne=s(54195),Pe=s(72814),Ue=s(45250),Z=s(17749);const xe=t.createElement(Ee.A,{animation:"wave",variant:"text",height:40}),me=fe=>{const{children:ne}=fe,ge=(0,N.YR)(),Ce=(0,Ae.gf)(Ne.U),{title:ue,setTitle:b,subtitle:V,setSubtitle:ve,entityRef:be,metadata:{value:H,loading:oe},entityMetadata:{value:x,loading:G}}=(0,_.V)();(0,t.useEffect)(()=>{H&&(b(H.site_name),ve(()=>{let{site_description:Ie}=H;return(!Ie||Ie==="None")&&(Ie=""),Ie}))},[H,b,ve]);const qe=Ce.getOptional("app.title")||"Backstage",gt=[ue,V,qe].filter(Boolean).join(" | "),{locationMetadata:Be,spec:$t}=x||{},vt=$t?.lifecycle,Et=x?(0,T.t)(x,ke.vv):[],B=(0,Pe.S)(Z.rQ)(),ae=t.createElement(t.Fragment,null,t.createElement(j.S,{label:(0,Ue.capitalize)(x?.kind||"entity"),value:t.createElement(ee.z,{color:"inherit",entityRef:be,title:x?.metadata.title,defaultKind:"Component"})}),Et.length>0&&t.createElement(j.S,{label:"Owner",value:t.createElement(te.i,{color:"inherit",entityRefs:Et,defaultKind:"group"})}),vt?t.createElement(j.S,{label:"Lifecycle",value:String(vt)}):null,Be&&Be.type!=="dir"&&Be.type!=="file"?t.createElement(j.S,{label:"",value:t.createElement(M.A,{container:!0,direction:"column",alignItems:"center"},t.createElement(M.A,{style:{padding:0},item:!0},t.createElement(ye.A,{style:{marginTop:"-25px"}})),t.createElement(M.A,{style:{padding:0},item:!0},"Source")),url:Be.target}):null);return!G&&x===void 0||!oe&&H===void 0?null:t.createElement(de.Y,{type:"Documentation",typeLink:B,title:ue||xe,subtitle:V===""?void 0:V||xe},t.createElement(W.A,{titleTemplate:"%s"},t.createElement("title",null,gt)),ae,ne,ge.renderComponentsByLocation(O.e.Header))};var je=s(84893),kt=s(76888),ut=s(85408),Nt=s(12554),Ze=s(95208),_e=s(64947),Pt=s(95159),Ut=s(61617),ht=s(91042),_t=s(76842),Ht=s(71834);const Bt="/.backstage/auth/v1/cookie",pt=365*24*36e5;function zt(fe){const{pluginId:ne}=fe??{},ge=(0,Ae.gf)(Pt.a),Ce=(0,Ae.gf)(Ut.I),ue=(0,t.useMemo)(()=>"BroadcastChannel"in window?new BroadcastChannel(`${ne}-auth-cookie-expires-at`):null,[ne]),[b,V]=(0,ht.Y)(async()=>{const oe=`${await Ce.getBaseUrl(ne)}${Bt}`,x=await ge.fetch(`${oe}`,{credentials:"include"});if(!x.ok){if(x.status===404)return{expiresAt:new Date(Date.now()+pt)};throw await Ht.o.fromResponse(x)}const G=await x.json();if(!G.expiresAt)throw new Error("No expiration date found in response");return G});(0,_t.u)(V.execute);const ve=(0,t.useCallback)(()=>{V.execute()},[V]),be=(0,t.useCallback)(H=>{const oe=(1+3*Math.random())*6e4,x=Date.parse(H.expiresAt)-Date.now()-oe,G=setTimeout(ve,x);return()=>clearTimeout(G)},[ve]);return(0,t.useEffect)(()=>{if(b.status!=="success"||!b.result)return()=>{};ue?.postMessage({action:"COOKIE_REFRESH_SUCCESS",payload:b.result});let H=be(b.result);const oe=x=>{const{action:G,payload:qe}=x.data;G==="COOKIE_REFRESH_SUCCESS"&&(H(),H=be(qe))};return ue?.addEventListener("message",oe),()=>{H(),ue?.removeEventListener("message",oe)}},[b,be,ue]),b.status==="not-executed"?{status:"loading"}:b.status==="loading"&&!b.result?{status:"loading"}:b.status==="loading"&&b.error?{status:"loading"}:b.status==="error"&&b.error?{status:"error",error:b.error,retry:ve}:{status:"success",data:b.result}}function He(fe){const{children:ne,...ge}=fe,Ce=(0,Ze.n)(),{Progress:ue}=Ce.getComponents(),b=zt(ge);return b.status==="loading"?t.createElement(ue,null):b.status==="error"?t.createElement(Nt.b,{error:b.error},t.createElement(_e.A,{variant:"outlined",onClick:b.retry},"Retry")):t.createElement(t.Fragment,null,ne)}var Oe=s(54917),Qe=s(98392),Je=s(50868);const ft=fe=>{const{withSearch:ne,withHeader:ge=!0}=fe;return t.createElement(k.Y,{themeId:"documentation"},ge&&t.createElement(me,null),t.createElement(je.Z,null),t.createElement(ce.p,{withSearch:ne}))},Ft=fe=>{const ne=(0,Oe.A)(),ge=(0,Qe.A)({...ne,...fe.overrideThemeOptions||{}}),{kind:Ce,name:ue,namespace:b}=(0,kt.K)(Z.Oc),{children:V,entityRef:ve={kind:Ce,name:ue,namespace:b}}=fe,be=(0,L.P1)();if(!V){const x=(be?t.Children.toArray(be.props.children):[]).flatMap(G=>G?.props?.children??[]).find(G=>!(0,ut.E)(G,N.AF)&&!(0,ut.E)(G,N.Wm));return t.createElement(Je.A,{theme:ge},t.createElement(He,{pluginId:"techdocs"},t.createElement(_.R,{entityRef:ve},x||t.createElement(ft,null))))}return t.createElement(Je.A,{theme:ge},t.createElement(He,{pluginId:"techdocs"},t.createElement(_.R,{entityRef:ve},({metadata:H,entityMetadata:oe,onReady:x})=>t.createElement("div",{className:"techdocs-reader-page"},t.createElement(k.Y,{themeId:"documentation"},V instanceof Function?V({entityRef:ve,techdocsMetadataValue:H.value,entityMetadataValue:oe.value,onReady:x}):V)))))}},39781:($e,$,s)=>{s.d($,{p:()=>Aa});var t=s(14041),L=s(42899),k=s(58837),N=s(66839),_=s(9394),ce=s(91360),W=s(22856);const M="TECH_DOCS_SHADOW_DOM_STYLE_LOAD",Ee=e=>{(0,t.useEffect)(()=>{if(!e)return()=>{};const n=e.querySelectorAll('head > link[rel="stylesheet"]');let a=n?.length??0;const r=new CustomEvent(M);if(!a)return e.dispatchEvent(r),()=>{};const i=()=>{--a===0&&e.dispatchEvent(r)};return n?.forEach(l=>{l.addEventListener("load",i)}),()=>{n?.forEach(l=>{l.removeEventListener("load",i)})}},[e])},ye=e=>{const[n,a]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if(!e)return()=>{};a(!0);const r=e.style;r.setProperty("opacity","0");const i=()=>{a(!1),r.setProperty("opacity","1")};return e.addEventListener(M,i),()=>{e.removeEventListener(M,i)}},[e]),n},O=e=>{const{element:n,onAppend:a,children:r}=e,[i,l]=(0,t.useState)((0,_.vt)({...(0,W.A)(),insertionPoint:void 0}));Ee(n);const d=(0,t.useCallback)(h=>{if(!n||!h)return;l((0,_.vt)({...(0,W.A)(),insertionPoint:n.querySelector("head")||void 0}));let p=h.shadowRoot;p||(p=h.attachShadow({mode:"open"})),p.replaceChildren(n),typeof a=="function"&&a(p)},[n,a]);return t.createElement(t.Fragment,null,t.createElement(ce.Ay,{jss:i,sheetsManager:new Map},t.createElement("div",{ref:d,"data-testid":"techdocs-native-shadowroot"}),r))};var T=s(85639),ee=s(41544),te=s(16454),ke=s(96872),j=s(87437),de=s(78467),Ae=s(61783),Ne=s(33986);const Pe=(0,k.A)(e=>({loading:{right:e.spacing(1),position:"absolute"}})),Ue=e=>n=>t.createElement(j.Lt,{inheritParentContextIfAvailable:!0},t.createElement(e,{...n})),Z=()=>{const e=Pe();return t.createElement(de.A,{className:e.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},xe=Ue(function(n){const{loading:a,value:r,onChange:i=()=>{},options:l=[],getOptionLabel:d=D=>String(D),inputPlaceholder:h,inputDebounceTime:p,freeSolo:v=!0,fullWidth:g=!0,clearOnBlur:y=!1,"data-testid":Y="search-autocomplete",...A}=n,{setTerm:J}=(0,j.SQ)(),se=(0,t.useCallback)(D=>D?typeof D=="string"?D:d(D):"",[d]),ie=(0,t.useMemo)(()=>se(r),[r,se]),R=(0,t.useCallback)((D,E,S,I)=>{J(se(E)),i(D,E,S,I)},[se,J,i]),pe=(0,t.useCallback)(({InputProps:{ref:D,className:E,endAdornment:S},InputLabelProps:I,...Re})=>t.createElement(Ne.I,{...Re,ref:D,clearButton:!1,value:ie,placeholder:h,debounceTime:p,endAdornment:a?t.createElement(Z,null):S,InputProps:{className:E}}),[a,ie,h,p]);return t.createElement(Ae.Ay,{...A,"data-testid":Y,value:r,onChange:R,options:l,getOptionLabel:d,renderInput:pe,freeSolo:v,fullWidth:g,clearOnBlur:y})});var me=s(18690),je=s(41472);const kt=e=>e?.document,ut=e=>{const{entityId:n,entityTitle:a,debounceTime:r=150}=e,[i,l]=(0,t.useState)(!1),d=(0,me.Zp)(),{setFilters:h,term:p,result:{loading:v,value:g}}=(0,j.SQ)(),[y,Y]=(0,t.useState)([]);(0,t.useEffect)(()=>{let R=!0;if(R&&g){const pe=g.results.slice(0,10);Y(pe)}return()=>{R=!1}},[v,g]);const{kind:A,name:J,namespace:se}=n;(0,t.useEffect)(()=>{h(R=>({...R,kind:A,namespace:se,name:J}))},[A,se,J,h]);const ie=(R,pe)=>{if(kt(pe)){const{location:D}=pe.document;d(D)}};return t.createElement(xe,{"data-testid":"techdocs-search-bar",size:"small",open:i&&!!p,getOptionLabel:()=>"",filterOptions:R=>R,onClose:()=>{l(!1)},onOpen:()=>{l(!0)},onChange:ie,blurOnSelect:!0,noOptionsText:"No results found",value:null,options:y,renderOption:({document:R,highlight:pe})=>t.createElement(je.TechDocsSearchResultListItem,{result:R,lineClamp:3,asListItem:!1,asLink:!1,title:R.title,highlight:pe}),loading:v,inputDebounceTime:r,inputPlaceholder:`Search ${a||n.name} docs`,freeSolo:!1})},Nt=e=>{const n={term:"",types:["techdocs"],pageCursor:"",filters:e.entityId};return t.createElement(j.Lt,{initialState:n},t.createElement(ut,{...e}))};var Ze=s(64947),_e=s(74219),Pt=s(67296),Ut=s(73845),ht=s(29365),_t=s(72501),Ht=s(99703),Bt=s(32881);const pt=(0,k.A)(e=>(0,Ht.A)({paper:{width:"100%",[e.breakpoints.up("sm")]:{width:"75%"},[e.breakpoints.up("md")]:{width:"50%"},padding:e.spacing(2.5)},root:{height:"100%",overflow:"hidden"},logs:{background:e.palette.background.default}})),zt=({buildLog:e,onClose:n})=>{const a=pt(),r=e.length===0?"Waiting for logs...":e.join(`
`);return t.createElement(L.A,{container:!0,direction:"column",className:a.root,spacing:0,wrap:"nowrap"},t.createElement(L.A,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",spacing:0,wrap:"nowrap"},t.createElement(_t.A,{variant:"h5"},"Build Details"),t.createElement(ht.A,{key:"dismiss",title:"Close the drawer",onClick:n,color:"inherit"},t.createElement(Bt.A,null))),t.createElement(L.A,{item:!0,xs:!0},t.createElement(Pt.r,{text:r,classes:{root:a.logs}})))},He=({buildLog:e})=>{const n=pt(),[a,r]=(0,t.useState)(!1);return t.createElement(t.Fragment,null,t.createElement(Ze.A,{color:"inherit",onClick:()=>r(!0)},"Show Build Logs"),t.createElement(Ut.Ay,{classes:{paper:n.paper},anchor:"right",open:a,onClose:()=>r(!1)},t.createElement(zt,{buildLog:e,onClose:()=>r(!1)})))};var Oe=s(18139),Qe=s(54195),Je=s(52262);const ft=({errorMessage:e})=>{const n=(0,Oe.gf)(Qe.U).getOptionalString("techdocs.builder"),a=(0,Je.s)(),{entityRef:r}=(0,N.V)(),i=(0,me.zy)();(0,t.useEffect)(()=>{const{pathname:d,search:h,hash:p}=i;a.captureEvent("not-found",`${d}${h}${p}`,{attributes:r})},[a,r,i]);let l="";return[void 0,"local"].includes(n)||(l="Note that techdocs.builder is not set to 'local' in your config, which means this Backstage app will not generate docs if they are not found. Make sure the project's docs are generated and published by some external process (e.g. CI/CD pipeline). Or change techdocs.builder to 'local' to generate docs from this Backstage instance."),t.createElement(ee.M,{status:"404",statusMessage:e||"Documentation not found",additionalInfo:l})};var Ft=s(73466),fe=s(28966),ne=s(49707);function ge({contentLoading:e,content:n,activeSyncState:a}){return e||a==="BUILD_READY_RELOAD"||!n&&a==="CHECKING"?"CHECKING":!n&&a==="BUILDING"?"INITIAL_BUILD":n?a==="BUILDING"?"CONTENT_STALE_REFRESHING":a==="BUILD_READY"?"CONTENT_STALE_READY":a==="ERROR"?"CONTENT_STALE_ERROR":"CONTENT_FRESH":"CONTENT_NOT_FOUND"}function Ce(e,n){const a={...e};switch(n.type){case"sync":n.state==="CHECKING"&&(a.buildLog=[]),a.activeSyncState=n.state,a.syncError=n.syncError;break;case"contentLoading":a.contentLoading=!0,a.contentError=void 0;break;case"content":typeof n.path=="string"&&(a.path=n.path),a.contentLoading=!1,a.content=n.content,a.contentError=n.contentError;break;case"buildLog":a.buildLog=a.buildLog.concat(n.log);break;default:throw new Error}return["BUILD_READY","BUILD_READY_RELOAD"].includes(a.activeSyncState)&&["contentLoading","content"].includes(n.type)&&(a.activeSyncState="UP_TO_DATE",a.buildLog=[]),a}function ue(e,n,a,r){const[i,l]=(0,t.useReducer)(Ce,{activeSyncState:"CHECKING",path:r,contentLoading:!0,buildLog:[]}),d=(0,Oe.gf)(ne.s),{retry:h}=(0,fe.A)(async()=>{l({type:"contentLoading"});try{const g=await d.getEntityDocs({kind:e,namespace:n,name:a},r);return l({type:"content",content:g,path:r}),g}catch(g){l({type:"content",contentError:g,path:r})}},[d,e,n,a,r]),p=(0,t.useRef)({content:void 0,reload:()=>{}});p.current={content:i.content,reload:h},(0,Ft.A)(async()=>{l({type:"sync",state:"CHECKING"});const g=setTimeout(()=>{l({type:"sync",state:"BUILDING"})},1e3);try{switch(await d.syncEntityDocs({kind:e,namespace:n,name:a},Y=>{l({type:"buildLog",log:Y})})){case"updated":p.current.content?l({type:"sync",state:"BUILD_READY"}):(p.current.reload(),l({type:"sync",state:"BUILD_READY_RELOAD"}));break;case"cached":l({type:"sync",state:"UP_TO_DATE"});break;default:l({type:"sync",state:"ERROR",syncError:new Error("Unexpected return state")});break}}catch(y){l({type:"sync",state:"ERROR",syncError:y})}finally{clearTimeout(g)}},[e,a,n,d,l,p]);const v=(0,t.useMemo)(()=>ge({activeSyncState:i.activeSyncState,contentLoading:i.contentLoading,content:i.content}),[i.activeSyncState,i.content,i.contentLoading]);return(0,t.useMemo)(()=>({state:v,contentReload:h,path:i.path,content:i.content,contentErrorMessage:i.contentError?.toString(),syncErrorMessage:i.syncError?.toString(),buildLog:i.buildLog}),[v,h,i.path,i.content,i.contentError,i.syncError,i.buildLog])}const b=(0,t.createContext)({}),V=()=>(0,t.useContext)(b),ve=e=>{const{children:n}=e,{"*":a=""}=(0,me.g)(),{entityRef:r}=(0,N.V)(),{kind:i,namespace:l,name:d}=r,h=ue(i,l,d,a);return t.createElement(b.Provider,{value:h},n instanceof Function?n(h):n)},be=e=>n=>t.createElement(ve,null,t.createElement(e,{...n})),H=(0,k.A)(e=>({root:{marginBottom:e.spacing(2)},message:{wordBreak:"break-word",overflowWrap:"anywhere"}})),oe=()=>{let e=null;const n=H(),{state:a,contentReload:r,contentErrorMessage:i,syncErrorMessage:l,buildLog:d}=V();return a==="INITIAL_BUILD"&&(e=t.createElement(_e.A,{classes:{root:n.root},variant:"outlined",severity:"info",icon:t.createElement(de.A,{size:"24px"}),action:t.createElement(He,{buildLog:d})},"Documentation is accessed for the first time and is being prepared. The subsequent loads are much faster.")),a==="CONTENT_STALE_REFRESHING"&&(e=t.createElement(_e.A,{variant:"outlined",severity:"info",icon:t.createElement(de.A,{size:"24px"}),action:t.createElement(He,{buildLog:d}),classes:{root:n.root}},"A newer version of this documentation is being prepared and will be available shortly.")),a==="CONTENT_STALE_READY"&&(e=t.createElement(_e.A,{variant:"outlined",severity:"success",action:t.createElement(Ze.A,{color:"inherit",onClick:()=>r()},"Refresh"),classes:{root:n.root}},"A newer version of this documentation is now available, please refresh to view.")),a==="CONTENT_STALE_ERROR"&&(e=t.createElement(_e.A,{variant:"outlined",severity:"error",action:t.createElement(He,{buildLog:d}),classes:{root:n.root,message:n.message}},"Building a newer version of this documentation failed."," ",l)),a==="CONTENT_NOT_FOUND"&&(e=t.createElement(t.Fragment,null,l&&t.createElement(_e.A,{variant:"outlined",severity:"error",action:t.createElement(He,{buildLog:d}),classes:{root:n.root,message:n.message}},"Building a newer version of this documentation failed."," ",l),t.createElement(ft,{errorMessage:i}))),e};var x=s(5893),G=s(54917),qe=s(54934);/*! @license DOMPurify 3.2.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.2/LICENSE */const{entries:gt,setPrototypeOf:Be,isFrozen:$t,getPrototypeOf:vt,getOwnPropertyDescriptor:Et}=Object;let{freeze:B,seal:ae,create:Wt}=Object,{apply:yt,construct:Ie}=typeof Reflect<"u"&&Reflect;B||(B=function(n){return n}),ae||(ae=function(n){return n}),yt||(yt=function(n,a,r){return n.apply(a,r)}),Ie||(Ie=function(n,a){return new n(...a)});const Tt=he(Array.prototype.forEach),cn=he(Array.prototype.pop),et=he(Array.prototype.push),At=he(String.prototype.toLowerCase),Vt=he(String.prototype.toString),dn=he(String.prototype.match),tt=he(String.prototype.replace),Jn=he(String.prototype.indexOf),qn=he(String.prototype.trim),Te=he(Object.prototype.hasOwnProperty),Q=he(RegExp.prototype.test),nt=eo(TypeError);function he(e){return function(n){for(var a=arguments.length,r=new Array(a>1?a-1:0),i=1;i<a;i++)r[i-1]=arguments[i];return yt(e,n,r)}}function eo(e){return function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return Ie(e,a)}}function f(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:At;Be&&Be(e,null);let r=n.length;for(;r--;){let i=n[r];if(typeof i=="string"){const l=a(i);l!==i&&($t(n)||(n[r]=l),i=l)}e[i]=!0}return e}function to(e){for(let n=0;n<e.length;n++)Te(e,n)||(e[n]=null);return e}function ze(e){const n=Wt(null);for(const[a,r]of gt(e))Te(e,a)&&(Array.isArray(r)?n[a]=to(r):r&&typeof r=="object"&&r.constructor===Object?n[a]=ze(r):n[a]=r);return n}function ot(e,n){for(;e!==null;){const r=Et(e,n);if(r){if(r.get)return he(r.get);if(typeof r.value=="function")return he(r.value)}e=vt(e)}function a(){return null}return a}const mn=B(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Gt=B(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Yt=B(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),no=B(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Kt=B(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),oo=B(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),un=B(["#text"]),hn=B(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Xt=B(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),pn=B(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),bt=B(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ao=ae(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ro=ae(/<%[\w\W]*|[\w\W]*%>/gm),so=ae(/\${[\w\W]*}/gm),io=ae(/^data-[\-\w.\u00B7-\uFFFF]/),lo=ae(/^aria-[\-\w]+$/),fn=ae(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),co=ae(/^(?:\w+script|data):/i),mo=ae(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),gn=ae(/^html$/i),uo=ae(/^[a-z][.\w]*(-[.\w]+)+$/i);var vn=Object.freeze({__proto__:null,ARIA_ATTR:lo,ATTR_WHITESPACE:mo,CUSTOM_ELEMENT:uo,DATA_ATTR:io,DOCTYPE_NAME:gn,ERB_EXPR:ro,IS_ALLOWED_URI:fn,IS_SCRIPT_OR_DATA:co,MUSTACHE_EXPR:ao,TMPLIT_EXPR:so});const at={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ho=function(){return typeof window>"u"?null:window},po=function(n,a){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";a&&a.hasAttribute(i)&&(r=a.getAttribute(i));const l="dompurify"+(r?"#"+r:"");try{return n.createPolicy(l,{createHTML(d){return d},createScriptURL(d){return d}})}catch{return console.warn("TrustedTypes policy "+l+" could not be created."),null}},En=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function yn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ho();const n=u=>yn(u);if(n.version="3.2.2",n.removed=[],!e||!e.document||e.document.nodeType!==at.document)return n.isSupported=!1,n;let{document:a}=e;const r=a,i=r.currentScript,{DocumentFragment:l,HTMLTemplateElement:d,Node:h,Element:p,NodeFilter:v,NamedNodeMap:g=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:y,DOMParser:Y,trustedTypes:A}=e,J=p.prototype,se=ot(J,"cloneNode"),ie=ot(J,"remove"),R=ot(J,"nextSibling"),pe=ot(J,"childNodes"),D=ot(J,"parentNode");if(typeof d=="function"){const u=a.createElement("template");u.content&&u.content.ownerDocument&&(a=u.content.ownerDocument)}let E,S="";const{implementation:I,createNodeIterator:Re,createDocumentFragment:Se,getElementsByTagName:wt}=a,{importNode:st}=r;let K=En();n.isSupported=typeof gt=="function"&&typeof D=="function"&&I&&I.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Lt,ERB_EXPR:it,TMPLIT_EXPR:Qt,DATA_ATTR:ba,ARIA_ATTR:Sa,IS_SCRIPT_OR_DATA:wa,ATTR_WHITESPACE:xn,CUSTOM_ELEMENT:La}=vn;let{IS_ALLOWED_URI:Cn}=vn,P=null;const Rn=f({},[...mn,...Gt,...Yt,...Kt,...un]);let z=null;const Dn=f({},[...hn,...Xt,...pn,...bt]);let C=Object.seal(Wt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),lt=null,Jt=null,Mn=!0,qt=!0,On=!1,In=!0,We=!1,en=!0,Fe=!1,tn=!1,nn=!1,Ve=!1,xt=!1,Ct=!1,kn=!0,Nn=!1;const xa="user-content-";let on=!0,ct=!1,Ge={},Ye=null;const Pn=f({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Un=null;const _n=f({},["audio","video","img","source","image","track"]);let an=null;const Hn=f({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Rt="http://www.w3.org/1998/Math/MathML",Dt="http://www.w3.org/2000/svg",De="http://www.w3.org/1999/xhtml";let Ke=De,rn=!1,sn=null;const Ca=f({},[Rt,Dt,De],Vt);let Mt=f({},["mi","mo","mn","ms","mtext"]),Ot=f({},["annotation-xml"]);const Ra=f({},["title","style","font","a","script"]);let dt=null;const Da=["application/xhtml+xml","text/html"],Ma="text/html";let U=null,Xe=null;const Oa=a.createElement("form"),Bn=function(o){return o instanceof RegExp||o instanceof Function},ln=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Xe&&Xe===o)){if((!o||typeof o!="object")&&(o={}),o=ze(o),dt=Da.indexOf(o.PARSER_MEDIA_TYPE)===-1?Ma:o.PARSER_MEDIA_TYPE,U=dt==="application/xhtml+xml"?Vt:At,P=Te(o,"ALLOWED_TAGS")?f({},o.ALLOWED_TAGS,U):Rn,z=Te(o,"ALLOWED_ATTR")?f({},o.ALLOWED_ATTR,U):Dn,sn=Te(o,"ALLOWED_NAMESPACES")?f({},o.ALLOWED_NAMESPACES,Vt):Ca,an=Te(o,"ADD_URI_SAFE_ATTR")?f(ze(Hn),o.ADD_URI_SAFE_ATTR,U):Hn,Un=Te(o,"ADD_DATA_URI_TAGS")?f(ze(_n),o.ADD_DATA_URI_TAGS,U):_n,Ye=Te(o,"FORBID_CONTENTS")?f({},o.FORBID_CONTENTS,U):Pn,lt=Te(o,"FORBID_TAGS")?f({},o.FORBID_TAGS,U):{},Jt=Te(o,"FORBID_ATTR")?f({},o.FORBID_ATTR,U):{},Ge=Te(o,"USE_PROFILES")?o.USE_PROFILES:!1,Mn=o.ALLOW_ARIA_ATTR!==!1,qt=o.ALLOW_DATA_ATTR!==!1,On=o.ALLOW_UNKNOWN_PROTOCOLS||!1,In=o.ALLOW_SELF_CLOSE_IN_ATTR!==!1,We=o.SAFE_FOR_TEMPLATES||!1,en=o.SAFE_FOR_XML!==!1,Fe=o.WHOLE_DOCUMENT||!1,Ve=o.RETURN_DOM||!1,xt=o.RETURN_DOM_FRAGMENT||!1,Ct=o.RETURN_TRUSTED_TYPE||!1,nn=o.FORCE_BODY||!1,kn=o.SANITIZE_DOM!==!1,Nn=o.SANITIZE_NAMED_PROPS||!1,on=o.KEEP_CONTENT!==!1,ct=o.IN_PLACE||!1,Cn=o.ALLOWED_URI_REGEXP||fn,Ke=o.NAMESPACE||De,Mt=o.MATHML_TEXT_INTEGRATION_POINTS||Mt,Ot=o.HTML_INTEGRATION_POINTS||Ot,C=o.CUSTOM_ELEMENT_HANDLING||{},o.CUSTOM_ELEMENT_HANDLING&&Bn(o.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(C.tagNameCheck=o.CUSTOM_ELEMENT_HANDLING.tagNameCheck),o.CUSTOM_ELEMENT_HANDLING&&Bn(o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(C.attributeNameCheck=o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),o.CUSTOM_ELEMENT_HANDLING&&typeof o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(C.allowCustomizedBuiltInElements=o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),We&&(qt=!1),xt&&(Ve=!0),Ge&&(P=f({},un),z=[],Ge.html===!0&&(f(P,mn),f(z,hn)),Ge.svg===!0&&(f(P,Gt),f(z,Xt),f(z,bt)),Ge.svgFilters===!0&&(f(P,Yt),f(z,Xt),f(z,bt)),Ge.mathMl===!0&&(f(P,Kt),f(z,pn),f(z,bt))),o.ADD_TAGS&&(P===Rn&&(P=ze(P)),f(P,o.ADD_TAGS,U)),o.ADD_ATTR&&(z===Dn&&(z=ze(z)),f(z,o.ADD_ATTR,U)),o.ADD_URI_SAFE_ATTR&&f(an,o.ADD_URI_SAFE_ATTR,U),o.FORBID_CONTENTS&&(Ye===Pn&&(Ye=ze(Ye)),f(Ye,o.FORBID_CONTENTS,U)),on&&(P["#text"]=!0),Fe&&f(P,["html","head","body"]),P.table&&(f(P,["tbody"]),delete lt.tbody),o.TRUSTED_TYPES_POLICY){if(typeof o.TRUSTED_TYPES_POLICY.createHTML!="function")throw nt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof o.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw nt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=o.TRUSTED_TYPES_POLICY,S=E.createHTML("")}else E===void 0&&(E=po(A,i)),E!==null&&typeof S=="string"&&(S=E.createHTML(""));B&&B(o),Xe=o}},zn=f({},[...Gt,...Yt,...no]),Fn=f({},[...Kt,...oo]),Ia=function(o){let c=D(o);(!c||!c.tagName)&&(c={namespaceURI:Ke,tagName:"template"});const m=At(o.tagName),w=At(c.tagName);return sn[o.namespaceURI]?o.namespaceURI===Dt?c.namespaceURI===De?m==="svg":c.namespaceURI===Rt?m==="svg"&&(w==="annotation-xml"||Mt[w]):!!zn[m]:o.namespaceURI===Rt?c.namespaceURI===De?m==="math":c.namespaceURI===Dt?m==="math"&&Ot[w]:!!Fn[m]:o.namespaceURI===De?c.namespaceURI===Dt&&!Ot[w]||c.namespaceURI===Rt&&!Mt[w]?!1:!Fn[m]&&(Ra[m]||!zn[m]):!!(dt==="application/xhtml+xml"&&sn[o.namespaceURI]):!1},we=function(o){et(n.removed,{element:o});try{D(o).removeChild(o)}catch{ie(o)}},It=function(o,c){try{et(n.removed,{attribute:c.getAttributeNode(o),from:c})}catch{et(n.removed,{attribute:null,from:c})}if(c.removeAttribute(o),o==="is")if(Ve||xt)try{we(c)}catch{}else try{c.setAttribute(o,"")}catch{}},$n=function(o){let c=null,m=null;if(nn)o="<remove></remove>"+o;else{const F=dn(o,/^[\r\n\t ]+/);m=F&&F[0]}dt==="application/xhtml+xml"&&Ke===De&&(o='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+o+"</body></html>");const w=E?E.createHTML(o):o;if(Ke===De)try{c=new Y().parseFromString(w,dt)}catch{}if(!c||!c.documentElement){c=I.createDocument(Ke,"template",null);try{c.documentElement.innerHTML=rn?S:w}catch{}}const X=c.body||c.documentElement;return o&&m&&X.insertBefore(a.createTextNode(m),X.childNodes[0]||null),Ke===De?wt.call(c,Fe?"html":"body")[0]:Fe?c.documentElement:X},Wn=function(o){return Re.call(o.ownerDocument||o,o,v.SHOW_ELEMENT|v.SHOW_COMMENT|v.SHOW_TEXT|v.SHOW_PROCESSING_INSTRUCTION|v.SHOW_CDATA_SECTION,null)},Vn=function(o){return o instanceof y&&(typeof o.nodeName!="string"||typeof o.textContent!="string"||typeof o.removeChild!="function"||!(o.attributes instanceof g)||typeof o.removeAttribute!="function"||typeof o.setAttribute!="function"||typeof o.namespaceURI!="string"||typeof o.insertBefore!="function"||typeof o.hasChildNodes!="function")},Gn=function(o){return typeof h=="function"&&o instanceof h};function Me(u,o,c){Tt(u,m=>{m.call(n,o,c,Xe)})}const Yn=function(o){let c=null;if(Me(K.beforeSanitizeElements,o,null),Vn(o))return we(o),!0;const m=U(o.nodeName);if(Me(K.uponSanitizeElement,o,{tagName:m,allowedTags:P}),o.hasChildNodes()&&!Gn(o.firstElementChild)&&Q(/<[/\w]/g,o.innerHTML)&&Q(/<[/\w]/g,o.textContent)||o.nodeType===at.progressingInstruction||en&&o.nodeType===at.comment&&Q(/<[/\w]/g,o.data))return we(o),!0;if(!P[m]||lt[m]){if(!lt[m]&&Xn(m)&&(C.tagNameCheck instanceof RegExp&&Q(C.tagNameCheck,m)||C.tagNameCheck instanceof Function&&C.tagNameCheck(m)))return!1;if(on&&!Ye[m]){const w=D(o)||o.parentNode,X=pe(o)||o.childNodes;if(X&&w){const F=X.length;for(let le=F-1;le>=0;--le){const Le=se(X[le],!0);Le.__removalCount=(o.__removalCount||0)+1,w.insertBefore(Le,R(o))}}}return we(o),!0}return o instanceof p&&!Ia(o)||(m==="noscript"||m==="noembed"||m==="noframes")&&Q(/<\/no(script|embed|frames)/i,o.innerHTML)?(we(o),!0):(We&&o.nodeType===at.text&&(c=o.textContent,Tt([Lt,it,Qt],w=>{c=tt(c,w," ")}),o.textContent!==c&&(et(n.removed,{element:o.cloneNode()}),o.textContent=c)),Me(K.afterSanitizeElements,o,null),!1)},Kn=function(o,c,m){if(kn&&(c==="id"||c==="name")&&(m in a||m in Oa))return!1;if(!(qt&&!Jt[c]&&Q(ba,c))){if(!(Mn&&Q(Sa,c))){if(!z[c]||Jt[c]){if(!(Xn(o)&&(C.tagNameCheck instanceof RegExp&&Q(C.tagNameCheck,o)||C.tagNameCheck instanceof Function&&C.tagNameCheck(o))&&(C.attributeNameCheck instanceof RegExp&&Q(C.attributeNameCheck,c)||C.attributeNameCheck instanceof Function&&C.attributeNameCheck(c))||c==="is"&&C.allowCustomizedBuiltInElements&&(C.tagNameCheck instanceof RegExp&&Q(C.tagNameCheck,m)||C.tagNameCheck instanceof Function&&C.tagNameCheck(m))))return!1}else if(!an[c]){if(!Q(Cn,tt(m,xn,""))){if(!((c==="src"||c==="xlink:href"||c==="href")&&o!=="script"&&Jn(m,"data:")===0&&Un[o])){if(!(On&&!Q(wa,tt(m,xn,"")))){if(m)return!1}}}}}}return!0},Xn=function(o){return o!=="annotation-xml"&&dn(o,La)},jn=function(o){Me(K.beforeSanitizeAttributes,o,null);const{attributes:c}=o;if(!c)return;const m={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:z,forceKeepAttr:void 0};let w=c.length;for(;w--;){const X=c[w],{name:F,namespaceURI:le,value:Le}=X,mt=U(F);let q=F==="value"?Le:qn(Le);if(m.attrName=mt,m.attrValue=q,m.keepAttr=!0,m.forceKeepAttr=void 0,Me(K.uponSanitizeAttribute,o,m),q=m.attrValue,Nn&&(mt==="id"||mt==="name")&&(It(F,o),q=xa+q),en&&Q(/((--!?|])>)|<\/(style|title)/i,q)){It(F,o);continue}if(m.forceKeepAttr||(It(F,o),!m.keepAttr))continue;if(!In&&Q(/\/>/i,q)){It(F,o);continue}We&&Tt([Lt,it,Qt],Qn=>{q=tt(q,Qn," ")});const Zn=U(o.nodeName);if(Kn(Zn,mt,q)){if(E&&typeof A=="object"&&typeof A.getAttributeType=="function"&&!le)switch(A.getAttributeType(Zn,mt)){case"TrustedHTML":{q=E.createHTML(q);break}case"TrustedScriptURL":{q=E.createScriptURL(q);break}}try{le?o.setAttributeNS(le,F,q):o.setAttribute(F,q),Vn(o)?we(o):cn(n.removed)}catch{}}}Me(K.afterSanitizeAttributes,o,null)},ka=function u(o){let c=null;const m=Wn(o);for(Me(K.beforeSanitizeShadowDOM,o,null);c=m.nextNode();)Me(K.uponSanitizeShadowNode,c,null),!Yn(c)&&(c.content instanceof l&&u(c.content),jn(c));Me(K.afterSanitizeShadowDOM,o,null)};return n.sanitize=function(u){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=null,m=null,w=null,X=null;if(rn=!u,rn&&(u="<!-->"),typeof u!="string"&&!Gn(u))if(typeof u.toString=="function"){if(u=u.toString(),typeof u!="string")throw nt("dirty is not a string, aborting")}else throw nt("toString is not a function");if(!n.isSupported)return u;if(tn||ln(o),n.removed=[],typeof u=="string"&&(ct=!1),ct){if(u.nodeName){const Le=U(u.nodeName);if(!P[Le]||lt[Le])throw nt("root node is forbidden and cannot be sanitized in-place")}}else if(u instanceof h)c=$n("<!---->"),m=c.ownerDocument.importNode(u,!0),m.nodeType===at.element&&m.nodeName==="BODY"||m.nodeName==="HTML"?c=m:c.appendChild(m);else{if(!Ve&&!We&&!Fe&&u.indexOf("<")===-1)return E&&Ct?E.createHTML(u):u;if(c=$n(u),!c)return Ve?null:Ct?S:""}c&&nn&&we(c.firstChild);const F=Wn(ct?u:c);for(;w=F.nextNode();)Yn(w)||(w.content instanceof l&&ka(w.content),jn(w));if(ct)return u;if(Ve){if(xt)for(X=Se.call(c.ownerDocument);c.firstChild;)X.appendChild(c.firstChild);else X=c;return(z.shadowroot||z.shadowrootmode)&&(X=st.call(r,X,!0)),X}let le=Fe?c.outerHTML:c.innerHTML;return Fe&&P["!doctype"]&&c.ownerDocument&&c.ownerDocument.doctype&&c.ownerDocument.doctype.name&&Q(gn,c.ownerDocument.doctype.name)&&(le="<!DOCTYPE "+c.ownerDocument.doctype.name+`>
`+le),We&&Tt([Lt,it,Qt],Le=>{le=tt(le,Le," ")}),E&&Ct?E.createHTML(le):le},n.setConfig=function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ln(u),tn=!0},n.clearConfig=function(){Xe=null,tn=!1},n.isValidAttribute=function(u,o,c){Xe||ln({});const m=U(u),w=U(o);return Kn(m,w,c)},n.addHook=function(u,o){typeof o=="function"&&et(K[u],o)},n.removeHook=function(u){return cn(K[u])},n.removeHooks=function(u){K[u]=[]},n.removeAllHooks=function(){K=En()},n}var rt=yn();const fo=/main\.[A-Fa-f0-9]{8}\.min\.css$/,go=/^https:\/\/fonts\.googleapis\.com/,vo=/^https:\/\/fonts\.gstatic\.com/,Eo=e=>e.nodeName==="LINK",yo=e=>{const n=e?.getAttribute("href")||"",a=n.match(fo),r=n.match(go),i=n.match(vo);return a||r||i},To=e=>(Eo(e)&&!yo(e)&&e.remove(),e),Ao=e=>e.nodeName==="IFRAME",bo=(e,n)=>{const a=e.getAttribute("src")||"";try{const{host:r}=new URL(a);return n.includes(r)}catch{return!1}},So=e=>n=>(Ao(n)&&!bo(n,e)&&n.remove(),n),wo=()=>{const e=(0,Oe.gf)(Qe.U);return(0,t.useMemo)(()=>e.getOptionalConfig("techdocs.sanitizer"),[e])},Lo=()=>{const e=wo();return(0,t.useCallback)(async n=>{const a=e?.getOptionalStringArray("allowedIframeHosts");rt.addHook("beforeSanitizeElements",To);const r=["link","meta"];a&&(r.push("iframe"),rt.addHook("beforeSanitizeElements",So(a))),rt.addHook("uponSanitizeElement",(d,h)=>{h.tagName==="meta"&&(d.getAttribute("http-equiv")==="refresh"&&d.getAttribute("content")?.includes("url=")||d.parentNode?.removeChild(d))}),rt.addHook("uponSanitizeAttribute",(d,h)=>{d.tagName!=="meta"&&(h.attrName==="http-equiv"||h.attrName==="content")&&d.removeAttribute(h.attrName)});const i=e?.getOptionalString("allowedCustomElementTagNameRegExp"),l=e?.getOptionalString("allowedCustomElementAttributeNameRegExp");return rt.sanitize(n.outerHTML,{ADD_TAGS:r,FORBID_TAGS:["style"],ADD_ATTR:["http-equiv","content"],WHOLE_DOCUMENT:!0,RETURN_DOM:!0,CUSTOM_ELEMENT_HANDLING:{tagNameCheck:i?new RegExp(i):void 0,attributeNameCheck:l?new RegExp(l):void 0}})},[e])};var xo=s(65901),re=s(268),Co=({theme:e})=>`
/*==================  Variables  ==================*/
/*
  As the MkDocs output is rendered in shadow DOM, the CSS variable definitions on the root selector are not applied. Instead, they have to be applied on :host.
  As there is no way to transform the served main*.css yet (for example in the backend), we have to copy from main*.css and modify them.
*/

:host {
  /* FONT */
  --md-default-fg-color: ${e.palette.text.primary};
  --md-default-fg-color--light: ${e.palette.text.secondary};
  --md-default-fg-color--lighter: ${(0,re.a)(e.palette.text.secondary,.7)};
  --md-default-fg-color--lightest: ${(0,re.a)(e.palette.text.secondary,.3)};

  /* BACKGROUND */
  --md-default-bg-color:${e.palette.background.default};
  --md-default-bg-color--light: ${e.palette.background.paper};
  --md-default-bg-color--lighter: ${(0,re.a)(e.palette.background.paper,.7)};
  --md-default-bg-color--lightest: ${(0,re.a)(e.palette.background.paper,.3)};

  /* PRIMARY */
  --md-primary-fg-color: ${e.palette.primary.main};
  --md-primary-fg-color--light: ${e.palette.primary.light};
  --md-primary-fg-color--dark: ${e.palette.primary.dark};
  --md-primary-bg-color: ${e.palette.primary.contrastText};
  --md-primary-bg-color--light: ${(0,re.a)(e.palette.primary.contrastText,.7)};

  /* ACCENT */
  --md-accent-fg-color: var(--md-primary-fg-color);
  --md-accent-fg-color--transparent: ${(0,re.X4)(e.palette.primary.main,.1)};
  --md-accent-bg-color: var(--md-primary-bg-color);
  --md-accent-bg-color--light: var(--md-primary-bg-color--light);

  /* SHADOW */
  --md-shadow-z1: ${e.shadows[1]};
  --md-shadow-z2: ${e.shadows[2]};
  --md-shadow-z3: ${e.shadows[3]};

  /* EXTENSIONS */
  --md-admonition-fg-color: var(--md-default-fg-color);
  --md-admonition-bg-color: var(--md-default-bg-color);
  /* Admonitions and others are using SVG masks to define icons. These masks are defined as CSS variables. */
  --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
  --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>');
  --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>');
  --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.55 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 4.85 13.91 3c-.91.23-1.75.75-2.45 1.32-2.54 2.08-3.54 5.75-2.34 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12a.83.83 0 01-.15-.17c-1.1-1.43-1.28-3.48-.53-5.12C5.89 10 5 12.3 5.14 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.32 1.5-6.6l-.13-.26c-.2-.46-.47-.87-.8-1.25l.05-.01m-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.4-2.2-.16-2.87-.82 1.19-.28 1.89-1.16 2.09-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.18-2.06.17.38.37.76.6 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.27h.01z"/></svg>');
  --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8a4 4 0 014-4 4 4 0 014 4 3.2 3.2 0 01-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z"/></svg>');
  --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
  --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"/></svg>');
  --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z"/></svg>');
  --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 00-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
  --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 01.75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
  --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>');
  --md-footnotes-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.42L5.83 13H21V7h-2z"/></svg>');
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-tasklist-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
  --md-tasklist-icon--checked: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-nav-icon--prev: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"/></svg>');
  --md-nav-icon--next: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-toc-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/></svg>');
  --md-clipboard-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg>');
  --md-search-result-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8l-6-6m6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>');
  --md-source-forks-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>');
  --md-source-repositories-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>');
  --md-source-stars-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>');
  --md-source-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>');
  --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>');
  
  --md-status--updated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cellphone-arrow-down</title><path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z" /></svg>');
  --md-status: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>');
  --md-status--new: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12m-10 5h-2v-2h2v2m0-4h-2V7h2v6Z"/></svg>');
  --md-status--deprecated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"/></svg>');
  --md-status--encrypted: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3Z"/></svg>');
}

:host > * {
  /* CODE */
  --md-code-fg-color: ${e.palette.text.primary};
  --md-code-bg-color: ${e.palette.code?.background??e.palette.background.paper};
  --md-code-hl-color: ${(0,re.X4)(e.palette.warning.main,.5)};
  --md-code-hl-color--light: var(--md-code-hl-color);
  --md-code-hl-keyword-color: ${e.palette.type==="dark"?e.palette.primary.light:e.palette.primary.dark};
  --md-code-hl-function-color: ${e.palette.type==="dark"?e.palette.secondary.light:e.palette.secondary.dark};
  --md-code-hl-string-color: ${e.palette.type==="dark"?e.palette.success.light:e.palette.success.dark};
  --md-code-hl-number-color: ${e.palette.type==="dark"?e.palette.error.light:e.palette.error.dark};
  --md-code-hl-constant-color: var(--md-code-hl-function-color);
  --md-code-hl-special-color: var(--md-code-hl-function-color);
  --md-code-hl-name-color: var(--md-code-fg-color);
  --md-code-hl-comment-color: var(--md-default-fg-color--light);
  --md-code-hl-generic-color: var(--md-default-fg-color--light);
  --md-code-hl-variable-color: var(--md-default-fg-color--light);
  --md-code-hl-operator-color: var(--md-default-fg-color--light);
  --md-code-hl-punctuation-color: var(--md-default-fg-color--light);

  /* TYPESET */
  --md-typeset-font-size: 1rem;
  --md-typeset-color: var(--md-default-fg-color);
  --md-typeset-a-color: ${e.palette.link};
  --md-typeset-table-color: ${e.palette.text.primary};
  --md-typeset-table-color--light: ${(0,re.X4)(e.palette.text.primary,.05)};
  --md-typeset-del-color: ${e.palette.type==="dark"?(0,re.X4)(e.palette.error.dark,.5):(0,re.X4)(e.palette.error.light,.5)};
  --md-typeset-ins-color: ${e.palette.type==="dark"?(0,re.X4)(e.palette.success.dark,.5):(0,re.X4)(e.palette.success.light,.5)};
  --md-typeset-mark-color: ${e.palette.type==="dark"?(0,re.X4)(e.palette.warning.dark,.5):(0,re.X4)(e.palette.warning.light,.5)};
  --md-typeset-kbd-color: var(--md-code-bg-color);
  --md-typeset-kbd-accent-color var(--md-code-bg-color);
  --md-typeset-kbd-border-color: var(--md-default-fg-color--light);
}

@media screen and (max-width: 76.1875em) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .9rem;
  }
}

@media screen and (max-width: 600px) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .7rem;
  }
}

  --md-footer-bg-color: var(--md-default-bg-color);
  --md-footer-bg-color--dark: var(--md-default-bg-color);
`,Ro=({theme:e})=>`
/*==================  Reset  ==================*/

body {
  --md-text-color: var(--md-default-fg-color);
  --md-text-link-color: var(--md-accent-fg-color);
  --md-text-font-family: ${e.typography.fontFamily};
  font-family: var(--md-text-font-family);
  background-color: unset;
}
`;const Do="224px";var Mo=({theme:e,sidebar:n})=>`
/*==================  Layout  ==================*/

/* mkdocs material v9 compat */
.md-nav__title {
  color: var(--md-default-fg-color);
}

.md-grid {
  max-width: 100%;
  margin: 0;
}

.md-nav {
  font-size: calc(var(--md-typeset-font-size) * 0.9);
}
.md-nav__link:not(:has(svg)) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-nav__link:has(svg) > .md-ellipsis {
  flex-grow: 1;
}
.md-nav__icon {
  height: 20px !important;
  width: 20px !important;
  margin-left:${e.spacing(1)}px;
}
.md-nav__icon svg {
  margin: 0;
  width: 20px !important;
  height: 20px !important;
}
.md-nav__icon:after {
  width: 20px !important;
  height: 20px !important;
}
.md-status--updated::after {
  -webkit-mask-image: var(--md-status--updated);
  mask-image: var(--md-status--updated);
}

.md-nav__item--active > .md-nav__link, a.md-nav__link--active {
  text-decoration: underline;
  color: var(--md-typeset-a-color);
}
.md-nav__link--active > .md-status:after {
  background-color: var(--md-typeset-a-color);
}
.md-nav__link[href]:hover > .md-status:after {
  background-color: var(--md-accent-fg-color);
}

.md-main__inner {
  margin-top: 0;
}

.md-sidebar {
  bottom: 75px;
  position: fixed;
  width: 16rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: rgb(193, 193, 193) #eee;
  scrollbar-width: thin;
}
.md-sidebar .md-sidebar__scrollwrap {
  width: calc(16rem);
  overflow-y: hidden;
}
@supports selector(::-webkit-scrollbar) {
  [dir=ltr] .md-sidebar__inner {
      padding-right: calc(100% - 15.1rem);
  }
}
.md-sidebar--secondary {
  right: ${e.spacing(3)}px;
}
.md-sidebar::-webkit-scrollbar {
  width: 5px;
}
.md-sidebar::-webkit-scrollbar-button {
  width: 5px;
  height: 5px;
}
.md-sidebar::-webkit-scrollbar-track {
  background: #eee;
  border: 1 px solid rgb(250, 250, 250);
  box-shadow: 0px 0px 3px #dfdfdf inset;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb {
  width: 5px;
  background: rgb(193, 193, 193);
  border: transparent;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgb(125, 125, 125);
}

.md-content {
  max-width: calc(100% - 16rem * 2);
  margin-left: 16rem;
  margin-bottom: 50px;
}

.md-content > .md-sidebar {
  left: 16rem;
}

.md-footer {
  position: fixed;
  bottom: 0px;
  pointer-events: none;
}

.md-footer-nav__link, .md-footer__link {
  pointer-events: all;
}

.md-footer__title {
  background-color: unset;
}
.md-footer-nav__link, .md-footer__link {
  width: 16rem;
}

.md-dialog {
  background-color: unset;
}

@media screen and (min-width: 76.25em) {
  .md-sidebar {
    height: auto;
  }
}

@media screen and (max-width: 76.1875em) {
  .md-nav {
    transition: none !important;
    background-color: var(--md-default-bg-color)
  }
  .md-nav--primary .md-nav__title {
    cursor: auto;
    color: var(--md-default-fg-color);
    font-weight: 700;
    white-space: normal;
    line-height: 1rem;
    height: auto;
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    padding: 1.2rem .8rem .8rem;
    background-color: var(--md-default-bg-color);
  }
  .md-nav--primary .md-nav__title~.md-nav__list {
    box-shadow: none;
  }
  .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
    border-top: none;
  }
  .md-nav--primary .md-nav__title .md-nav__button {
    display: none;
  }
  .md-nav--primary .md-nav__title .md-nav__icon {
    color: var(--md-default-fg-color);
    position: static;
    height: auto;
    margin: 0 0 0 -0.2rem;
  }
  .md-nav--primary > .md-nav__title [for="none"] {
    padding-top: 0;
  }
  .md-nav--primary .md-nav__item {
    border-top: none;
  }
  .md-nav--primary :is(.md-nav__title,.md-nav__item) {
    font-size : var(--md-typeset-font-size);
  }
  .md-nav .md-source {
    display: none;
  }

  .md-sidebar {
    height: 100%;
  }
  .md-sidebar--primary {
    width: 16rem !important;
    z-index: 200;
    left: ${n.isPinned?`calc(-16rem + ${Do})`:"calc(-16rem + 72px)"} !important;
  }
  .md-sidebar--secondary:not([hidden]) {
    display: none;
  }

  [data-md-toggle=drawer]:checked~.md-container .md-sidebar--primary {
    transform: translateX(16rem);
  }

  .md-content {
    max-width: 100%;
    margin-left: 0;
  }

  .md-header__button {
    margin: 0.4rem 0;
    margin-left: 0.4rem;
    padding: 0;
  }

  .md-overlay {
    left: 0;
  }

  .md-footer {
    position: static;
    padding-left: 0;
  }
  .md-footer-nav__link {
    /* footer links begin to overlap at small sizes without setting width */
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .md-sidebar--primary {
    left: -16rem !important;
    width: 16rem;
  }
}


@media print {
  .md-sidebar,
  #toggle-sidebar {
    display: none;
  }

  .md-content {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
`;const Oo=["h1","h2","h3","h4","h5","h6"],Tn=/(em)|(rem)/gi,An=/var\(|\)/gi;var Io=({theme:e})=>`
/*==================  Typeset  ==================*/

.md-typeset {
  font-size: var(--md-typeset-font-size);
}

${Oo.reduce((n,a)=>{const r=e.typography.htmlFontSize??16,i=e.typography[a],{lineHeight:l,fontFamily:d,fontWeight:h,fontSize:p}=i,v=g=>{if(typeof g=="number")return v(`${g/r*.6}rem`);if(typeof g=="string"){if(g.match(An)){const y=window.getComputedStyle(document.body).getPropertyValue(g.replaceAll(An,""));if(y!=="")return v(y)}else if(g.match(Tn))return`calc(${g.replace(Tn,"")} * var(--md-typeset-font-size))`}return g};return n.concat(`
    .md-typeset ${a} {
      color: var(--md-default-fg-color);
      line-height: ${l};
      font-family: ${d};
      font-weight: ${h};
      font-size: ${v(p)};
    }
  `)},"")}

.md-typeset .md-content__button {
  color: var(--md-default-fg-color);
}

.md-typeset hr {
  border-bottom: 0.05rem dotted ${e.palette.divider};
}

.md-typeset details {
  font-size: var(--md-typeset-font-size) !important;
}
.md-typeset details summary {
  padding-left: 2.5rem !important;
}
.md-typeset details summary:before,
.md-typeset details summary:after {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: rotate(0deg) translateY(-50%) !important;
}
.md-typeset details[open] > summary:after {
  transform: rotate(90deg) translateX(-50%) !important;
}

.md-typeset blockquote {
  color: var(--md-default-fg-color--light);
  border-left: 0.2rem solid var(--md-default-fg-color--light);
}

.md-typeset table:not([class]) {
  font-size: var(--md-typeset-font-size);
  border: 1px solid var(--md-default-fg-color);
  border-bottom: none;
  border-collapse: collapse;
  border-radius: ${e.shape.borderRadius}px;
}
.md-typeset table:not([class]) th {
  font-weight: bold;
}
.md-typeset table:not([class]) td, .md-typeset table:not([class]) th {
  border-bottom: 1px solid var(--md-default-fg-color);
}

.md-typeset pre > code::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 0%, 0.32);
}
.md-typeset pre > code::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0%, 0%, 0.87);
}

.md-typeset code {
  word-break: keep-all;
}
`,ko=()=>`
/*==================  Animations  ==================*/
/*
  Disable CSS animations on link colors as they lead to issues in dark mode.
  The dark mode color theme is applied later and theirfore there is always an animation from light to dark mode when navigation between pages.
*/
.md-dialog, .md-nav__link, .md-footer__link, .md-typeset a, .md-typeset a::before, .md-typeset .headerlink {
  transition: none;
}
`,No=({theme:e})=>`
/*==================  Extensions  ==================*/

/* HIGHLIGHT */
.highlight .md-clipboard:after {
  content: unset;
}

.highlight .nx {
  color: ${e.palette.type==="dark"?"#ff53a3":"#ec407a"};
}

/* CODE HILITE */
.codehilite .gd {
  background-color: ${e.palette.type==="dark"?"rgba(248,81,73,0.65)":"#fdd"};
}

.codehilite .gi {
  background-color: ${e.palette.type==="dark"?"rgba(46,160,67,0.65)":"#dfd"};
}

/* TABBED */
.tabbed-set>input:nth-child(1):checked~.tabbed-labels>:nth-child(1),
.tabbed-set>input:nth-child(2):checked~.tabbed-labels>:nth-child(2),
.tabbed-set>input:nth-child(3):checked~.tabbed-labels>:nth-child(3),
.tabbed-set>input:nth-child(4):checked~.tabbed-labels>:nth-child(4),
.tabbed-set>input:nth-child(5):checked~.tabbed-labels>:nth-child(5),
.tabbed-set>input:nth-child(6):checked~.tabbed-labels>:nth-child(6),
.tabbed-set>input:nth-child(7):checked~.tabbed-labels>:nth-child(7),
.tabbed-set>input:nth-child(8):checked~.tabbed-labels>:nth-child(8),
.tabbed-set>input:nth-child(9):checked~.tabbed-labels>:nth-child(9),
.tabbed-set>input:nth-child(10):checked~.tabbed-labels>:nth-child(10),
.tabbed-set>input:nth-child(11):checked~.tabbed-labels>:nth-child(11),
.tabbed-set>input:nth-child(12):checked~.tabbed-labels>:nth-child(12),
.tabbed-set>input:nth-child(13):checked~.tabbed-labels>:nth-child(13),
.tabbed-set>input:nth-child(14):checked~.tabbed-labels>:nth-child(14),
.tabbed-set>input:nth-child(15):checked~.tabbed-labels>:nth-child(15),
.tabbed-set>input:nth-child(16):checked~.tabbed-labels>:nth-child(16),
.tabbed-set>input:nth-child(17):checked~.tabbed-labels>:nth-child(17),
.tabbed-set>input:nth-child(18):checked~.tabbed-labels>:nth-child(18),
.tabbed-set>input:nth-child(19):checked~.tabbed-labels>:nth-child(19),
.tabbed-set>input:nth-child(20):checked~.tabbed-labels>:nth-child(20) {
  color: var(--md-accent-fg-color);
  border-color: var(--md-accent-fg-color);
}

/* TASK-LIST */
.task-list-control .task-list-indicator::before {
  background-color: ${e.palette.action.disabledBackground};
}
.task-list-control [type="checkbox"]:checked + .task-list-indicator:before {
 background-color: ${e.palette.success.main};
}

/* ADMONITION */
.admonition {
  font-size: var(--md-typeset-font-size) !important;
}
.admonition .admonition-title {
  padding-left: 2.5rem !important;
}

.admonition .admonition-title:before {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: translateY(-50%) !important;
}
`;const Po={dark:["#only-light","#gh-light-mode-only"],light:["#only-dark","#gh-dark-mode-only"]};var Uo=({theme:e})=>`
/*==================  Palette  ==================*/
/*
  When color palette toggle is enabled in material theme for Mkdocs, there is a possibility to show conditionally 
  images by adding #only-dark or #only-light to resource hash. Backstage doesn't use mkdocs color palette mechanism,
  so there is a need to add css rules from palette*.css manually.
*/

${Po[e.palette.type].map(n=>`img[src$="${n}"]`).join(", ")} {
  display: none;
}
`;const _o=[Co,Ro,Mo,Io,ko,No,Uo],Ho=()=>(0,xo.Ut)(),Bo=()=>{const e=Ho(),n=(0,G.A)();return(0,t.useMemo)(()=>{const a={theme:n,sidebar:e};return _o.reduce((r,i)=>r+i(a),"")},[n,e])},zo=()=>{const e=Bo();return(0,t.useCallback)(n=>(n.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<style>${e}</style>`),n),[e])},Fo=(e,n,a)=>{const r=e==="src"&&n.endsWith(".svg"),i=!n.match(/^([a-z]*:)?\/\//i),l=n.startsWith(a);return r&&(i||l)},$o=({techdocsStorageApi:e,entityId:n,path:a})=>async r=>{const i=await e.getApiOrigin(),l=async(d,h)=>{for(const p of d)if(p.hasAttribute(h)){const v=p.getAttribute(h);if(!v)return;const g=await e.getBaseUrl(v,n,a);if(Fo(h,v,i))try{const Y=await(await fetch(g,{credentials:"include"})).text();p.setAttribute(h,`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(Y)))}`)}catch{p.setAttribute("alt",`Error: ${v}`)}else p.setAttribute(h,g)}};return await Promise.all([l(r.querySelectorAll("img"),"src"),l(r.querySelectorAll("script"),"src"),l(r.querySelectorAll("source"),"src"),l(r.querySelectorAll("link"),"href"),l(r.querySelectorAll("a[download]"),"href")]),r};var Wo=s(78264),Vo=s(90292),Go=s(52536),Yo=s.n(Go);let bn;bn=Promise.resolve().then(s.t.bind(s,25873,19));function St(e,n){bn.then(a=>{"createRoot"in a?a.createRoot(n).render(e):a.render(e,n)})}const Ko=e=>n=>{const a=n.querySelector('[title="Edit this page"]');if(!a||!a.href)return n;const r=new URL(a.href),i=e.byUrl(r);if(i?.type!=="github"&&i?.type!=="gitlab")return n;const l=n.querySelector("article>h1")?.childNodes[0].textContent||"",d=encodeURIComponent(`Documentation Feedback: ${l}`),h=encodeURIComponent(`Page source:
${a.href}

Feedback:`),p=i?.type==="github"?(0,Wo.F)(r.href,"blob"):r.href,v=Yo()(p),g=`/${v.organization}/${v.name}`,y=a.cloneNode();switch(i?.type){case"gitlab":y.href=`${r.origin}${g}/issues/new?issue[title]=${d}&issue[description]=${h}`;break;case"github":y.href=`${r.origin}${g}/issues/new?title=${d}&body=${h}`;break;default:return n}return St(t.createElement(Vo.A),y),y.style.paddingLeft="5px",y.title="Leave feedback for this page",y.id="git-feedback-link",a?.insertAdjacentElement("beforebegin",y),n};var Xo=s(27326);const jo=()=>e=>{const n=e.querySelector('.md-header label[for="__drawer"]'),a=e.querySelector("article");if(!n||!a)return e;const r=n.cloneNode();return St(t.createElement(Xo.A),r),r.id="toggle-sidebar",r.title="Toggle Sidebar",r.classList.add("md-content__button"),r.style.setProperty("padding","0 0 0 5px"),r.style.setProperty("margin","0.4rem 0 0.4rem 0.4rem"),a?.prepend(r),e},Zo=()=>e=>(((a,r)=>{Array.from(a).filter(i=>i.hasAttribute(r)).forEach(i=>{const l=i.getAttribute(r);if(l){l.match(/^https?:\/\//i)&&i.setAttribute("target","_blank");try{const d=Sn(window.location.href);i.setAttribute(r,new URL(l,d).toString())}catch{i.replaceWith(i.textContent||l)}}})})(Array.from(e.getElementsByTagName("a")),"href"),e);function Sn(e){const n=new URL(e);return!n.pathname.endsWith("/")&&!n.pathname.endsWith(".html")&&(n.pathname+="/"),n.toString()}const Qo=({baseUrl:e,onClick:n})=>a=>(Array.from(a.getElementsByTagName("a")).forEach(r=>{r.addEventListener("click",i=>{const d=r.getAttribute("href");d&&d.startsWith(e)&&!r.hasAttribute("download")&&(i.preventDefault(),n(i,d))})}),a);var Jo=s(7031),qo=s(50868),ea=s(10437),ta=s(71677),na=s(36338);const oa=(0,Jo.A)(e=>({tooltip:{fontSize:"inherit",color:e.palette.text.primary,margin:0,padding:e.spacing(.5),backgroundColor:"transparent",boxShadow:"none"}}))(ta.Ay),aa=()=>t.createElement(ea.A,null,t.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),ra=({text:e})=>{const[n,a]=(0,t.useState)(!1),[,r]=(0,na.A)(),i=(0,t.useCallback)(()=>{r(e),a(!0)},[e,r]),l=(0,t.useCallback)(()=>{a(!1)},[a]);return t.createElement(oa,{title:"Copied to clipboard",placement:"left",open:n,onClose:l,leaveDelay:1e3},t.createElement(ht.A,{style:{color:"inherit",position:"absolute"},className:"md-clipboard md-icon",onClick:i},t.createElement(aa,null)))},sa=e=>n=>{const a=n.querySelectorAll("pre > code");for(const r of a){const i=r.textContent||"",l=document.createElement("div");r?.parentElement?.prepend(l),St(t.createElement(qo.A,{theme:e},t.createElement(ra,{text:i})),l)}return n},ia=()=>e=>(e.querySelector(".md-header")?.remove(),e),la=()=>e=>(e.querySelector(".md-footer .md-copyright")?.remove(),e.querySelector(".md-footer-copyright")?.remove(),e),wn=({onLoading:e,onLoaded:n})=>a=>(e(),a.addEventListener(M,function r(){n(),a.removeEventListener(M,r)}),a),ca=()=>e=>(setTimeout(()=>{const n=e?.querySelectorAll("li.md-nav__item--active");n.length!==0&&(n.forEach(r=>{const i=r?.querySelector("input");i?.checked||i?.click()}),n[n.length-1].scrollIntoView())},200),e),Ln=async(e,n)=>{let a;if(typeof e=="string")a=new DOMParser().parseFromString(e,"text/html").documentElement;else if(e instanceof Element)a=e;else throw new Error("dom is not a recognized type");for(const r of n)a=await r(a);return a};var da=s(38097);const ma=(0,k.A)(e=>({button:{color:e.palette.primary.light,textDecoration:"underline"}})),ua=({message:e,handleButtonClick:n,autoHideDuration:a})=>{const r=ma(),[i,l]=(0,t.useState)(!0),d=()=>l(!1);return t.createElement(da.A,{open:i,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:a,color:"primary",onClose:d,message:e,action:t.createElement(Ze.A,{classes:{root:r.button},size:"small",onClick:()=>{d(),n()}},"Redirect now")})},ha=(e,n)=>{const r=i=>{const l=Sn(window.location.href),d=new URL(i,l);if(d.hostname!==window.location.hostname){const p=window.location.pathname,v=p.indexOf(n),g=p.slice(0,v+n.length);return new URL(g,l).href}return d.href};return i=>{for(const l of Array.from(i.querySelectorAll("meta")))if(l.getAttribute("http-equiv")==="refresh"){const d=l.getAttribute("content")?.split("url=");if(!d||d.length<2)return i;const h=d[1],p=r(h);if(window.location.href===p)return i;const v=document.createElement("div");return St(t.createElement(ua,{message:"This TechDocs page is no longer maintained. Will automatically redirect to the designated replacement.",handleButtonClick:()=>e(p),autoHideDuration:3e3}),v),document.body.appendChild(v),setTimeout(()=>{e(p)},3e3),i}return i}};function pa(e,n){const a=new URL(n),r=`${a.origin}${a.pathname.replace(/\/$/,"")}`,i=e.replace(r,"").replace(/^\/+/,""),l=new URL(`http://localhost/${i}`);return`${l.pathname}${l.search}${l.hash}`}function fa(){const e=(0,t.useRef)((0,me.Zp)()),a=(0,Oe.gf)(Qe.U).getOptionalString("app.baseUrl");return(0,t.useCallback)(i=>{let l=i;if(a)try{l=pa(i,a)}catch{}e.current(l)},[a])}const ga="screen and (max-width: 76.1875em)",va=e=>{const n=fa(),a=(0,G.A)(),r=(0,x.A)(ga),i=Lo(),l=zo(),d=(0,Je.s)(),h=(0,Oe.gf)(ne.s),p=(0,Oe.gf)(qe.Y),{state:v,path:g,content:y}=V(),{"*":Y=""}=(0,me.g)(),[A,J]=(0,t.useState)(null),se=ye(A),ie=(0,t.useCallback)(()=>{if(!A)return;A.querySelectorAll(".md-sidebar").forEach(S=>{if(r)S.style.top="0px";else{const Re=document?.querySelector(".techdocs-reader-page")?.getBoundingClientRect().top??0;let Se=A.getBoundingClientRect().top??0;const st=A.querySelector(".md-container > .md-tabs")?.getBoundingClientRect().height??0;Se<Re&&(Se=Re);const K=Math.max(Se,0)+st;S.style.top=`${K}px`;const it=A.querySelector(".md-container > .md-footer")?.getBoundingClientRect().top??window.innerHeight;S.style.height=`${it-K}px`}S.style.setProperty("opacity","1")})},[A,r]);(0,t.useEffect)(()=>(window.addEventListener("resize",ie),window.addEventListener("scroll",ie,!0),()=>{window.removeEventListener("resize",ie),window.removeEventListener("scroll",ie,!0)}),[A,ie]);const R=(0,t.useCallback)(()=>{if(!A)return;const E=A.querySelector(".md-footer");E&&(E.style.width=`${A.getBoundingClientRect().width}px`)},[A]);(0,t.useEffect)(()=>(window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R)}),[A,R]),(0,t.useEffect)(()=>{se||(R(),ie())},[v,se,R,ie]);const pe=(0,t.useCallback)((E,S)=>Ln(E,[i,$o({techdocsStorageApi:h,entityId:e,path:S}),Zo(),jo(),ia(),la(),Ko(p),l]),[e,p,h,i,l]),D=(0,t.useCallback)(async E=>Ln(E,[ha(n,e.name),ca(),sa(a),Qo({baseUrl:window.location.origin,onClick:(S,I)=>{const Re=S.ctrlKey||S.metaKey,Se=new URL(I),wt=S.target?.innerText||I,st=I.replace(window.location.origin,"");d.captureEvent("click",wt,{attributes:{to:st}}),Se.hash?Re?window.open(I,"_blank"):(window.location.pathname!==Se.pathname?n(I):window.history.pushState(null,document.title,Se.hash),E?.querySelector(`[id="${Se.hash.slice(1)}"]`)?.scrollIntoView()):Re?window.open(I,"_blank"):n(I)}}),wn({onLoading:()=>{},onLoaded:()=>{E.querySelector(".md-nav__title")?.removeAttribute("for")}}),wn({onLoading:()=>{Array.from(E.querySelectorAll(".md-sidebar")).forEach(I=>{I.style.setProperty("opacity","0")})},onLoaded:()=>{}})]),[a,n,d,e.name]);return(0,t.useEffect)(()=>{if(!y)return()=>{};let E=!0;return pe(y,g).then(async S=>{if(!S?.innerHTML||!E||Y!==g)return;window.scroll({top:0});const I=await D(S);J(I)}),()=>{E=!1}},[y,Y,g,pe,D]),A};var jt=s(41883),Ea=s(11618),Zt=s(15246);const ya=()=>{const e=(0,Ea.YR)(),{shadowRoot:n}=(0,N.V)(),a=n?.querySelector('[data-md-component="content"]'),r=n?.querySelector('div[data-md-component="sidebar"][data-md-type="navigation"], div[data-md-component="navigation"]');let i=r?.querySelector('[data-techdocs-addons-location="primary sidebar"]');i||(i=document.createElement("div"),i.setAttribute("data-techdocs-addons-location","primary sidebar"),r?.prepend(i));const l=n?.querySelector('div[data-md-component="sidebar"][data-md-type="toc"], div[data-md-component="toc"]');let d=l?.querySelector('[data-techdocs-addons-location="secondary sidebar"]');return d||(d=document.createElement("div"),d.setAttribute("data-techdocs-addons-location","secondary sidebar"),l?.prepend(d)),t.createElement(t.Fragment,null,t.createElement(jt.A,{container:i},e.renderComponentsByLocation(Zt.e.PrimarySidebar)),t.createElement(jt.A,{container:a},e.renderComponentsByLocation(Zt.e.Content)),t.createElement(jt.A,{container:d},e.renderComponentsByLocation(Zt.e.SecondarySidebar)))},Ta=(0,k.A)({search:{width:"100%","@media (min-width: 76.1875em)":{width:"calc(100% - 34.4rem)",margin:"0 auto"},"@media print":{display:"none"}}}),Aa=be(e=>{const{withSearch:n=!0,onReady:a}=e,r=Ta(),{entityMetadata:{value:i,loading:l},entityRef:d,setShadowRoot:h}=(0,N.V)(),{state:p}=V(),v=va(d),g=window.location.pathname,y=window.location.hash,Y=ye(v),[A]=(0,T.$r)([`[id="${y.slice(1)}"]`]);(0,t.useEffect)(()=>{Y||(y?A&&A.scrollIntoView():document?.querySelector("header")?.scrollIntoView())},[g,y,A,Y]);const J=(0,t.useCallback)(se=>{h(se),a instanceof Function&&a()},[h,a]);return l===!1&&!i?t.createElement(ee.M,{status:"404",statusMessage:"PAGE NOT FOUND"}):v?t.createElement(te.U,null,t.createElement(L.A,{container:!0},t.createElement(L.A,{xs:12,item:!0},t.createElement(oe,null)),n&&t.createElement(L.A,{className:r.search,xs:"auto",item:!0},t.createElement(Nt,{entityId:d,entityTitle:i?.metadata?.title})),t.createElement(L.A,{xs:12,item:!0},(p==="CHECKING"||Y)&&t.createElement(ke.k,null),t.createElement(O,{element:v,onAppend:J},t.createElement(ya,null))))):t.createElement(te.U,null,t.createElement(L.A,{container:!0},t.createElement(L.A,{xs:12,item:!0},t.createElement(oe,null))))}),Na=null},84893:($e,$,s)=>{s.d($,{Z:()=>ee});var t=s(14041),L=s(58837),k=s(29365),N=s(75173),_=s(71677),ce=s(37757),W=s(77125),M=s(9684),Ee=s(66839),ye=s(11618),O=s(15246);const T=(0,L.A)(te=>({root:{gridArea:"pageSubheader",flexDirection:"column",minHeight:"auto",padding:te.spacing(3,3,0),"@media print":{display:"none"}}})),ee=te=>{const ke=T(),[j,de]=(0,t.useState)(null),Ae=(0,t.useCallback)(je=>{de(je.currentTarget)},[]),Ne=(0,t.useCallback)(()=>{de(null)},[]),{entityMetadata:{value:Pe,loading:Ue}}=(0,Ee.V)(),Z=(0,ye.YR)(),xe=Z.renderComponentsByLocation(O.e.Subheader),me=Z.renderComponentsByLocation(O.e.Settings);return!xe&&!me||Ue===!1&&!Pe?null:t.createElement(N.A,{classes:ke,...te.toolbarProps},t.createElement(W.A,{display:"flex",justifyContent:"flex-end",width:"100%",flexWrap:"wrap"},xe,me?t.createElement(t.Fragment,null,t.createElement(_.Ay,{title:"Settings"},t.createElement(k.A,{"aria-controls":"tech-docs-reader-page-settings","aria-haspopup":"true",onClick:Ae},t.createElement(M.A,null))),t.createElement(ce.A,{id:"tech-docs-reader-page-settings",getContentAnchorEl:null,anchorEl:j,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!j,onClose:Ne,keepMounted:!0},t.createElement("div",null,me))):null))}},41472:($e,$,s)=>{s.r($),s.d($,{TechDocsSearchResultListItem:()=>Ee});var t=s(14041),L=s(46423),k=s(5951),N=s(58837),_=s(72501),ce=s(75202),W=s(51470);const M=(0,N.A)({flexContainer:{flexWrap:"wrap"},itemText:{width:"100%",marginBottom:"1rem"}}),Ee=ye=>{const{result:O,highlight:T,lineClamp:ee=5,asListItem:te=!0,asLink:ke=!0,title:j,icon:de}=ye,Ae=M(),Ne=({children:Z})=>ke?t.createElement(ce.N_,{noTrack:!0,to:O.location},Z):t.createElement(t.Fragment,null,Z),Pe=()=>{const Z=T?.fields.title?t.createElement(W.e,{text:T.fields.title,preTag:T.preTag,postTag:T.postTag}):O.title,xe=T?.fields.entityTitle?t.createElement(W.e,{text:T.fields.entityTitle,preTag:T.preTag,postTag:T.postTag}):O.entityTitle,me=T?.fields.name?t.createElement(W.e,{text:T.fields.name,preTag:T.preTag,postTag:T.postTag}):O.name;return O?t.createElement(k.A,{className:Ae.itemText,primaryTypographyProps:{variant:"h6"},primary:t.createElement(Ne,null,j||t.createElement(t.Fragment,null,Z," | ",xe??me," docs")),secondary:t.createElement(_.A,{component:"span",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:ee,overflow:"hidden"},color:"textSecondary",variant:"body2"},T?.fields.text?t.createElement(W.e,{text:T.fields.text,preTag:T.preTag,postTag:T.postTag}):O.text)}):null},Ue=({children:Z})=>te?t.createElement(t.Fragment,null,de&&t.createElement(L.A,null,typeof de=="function"?de(O):de),t.createElement("div",{className:Ae.flexContainer},Z)):t.createElement(t.Fragment,null,Z);return t.createElement(Ue,null,t.createElement(Pe,null))}},13660:($e,$,s)=>{var t,L=s(4293),k=s(78920);t={value:!0},$.A=void 0;var N=k(s(14041)),_=L(s(74044)),ce=(0,_.default)(N.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");$.A=ce},90292:($e,$,s)=>{var t,L=s(4293),k=s(78920);t={value:!0},$.A=void 0;var N=k(s(14041)),_=L(s(74044)),ce=(0,_.default)(N.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"}),"FeedbackOutlined");$.A=ce},91042:($e,$,s)=>{s.d($,{Y:()=>k});var t=s(14041),L=s(16261);function k(N,_){const[ce,W]=(0,t.useState)({status:"not-executed",error:void 0,result:_}),M=(0,t.useRef)(),Ee=(0,t.useRef)(),ye=(0,L.J)({execute(...O){Ee.current=O;const T=N(...O);return M.current=T,W(ee=>({...ee,status:"loading"})),T.then(ee=>{T===M.current&&W(te=>({...te,status:"success",error:void 0,result:ee}))},ee=>{T===M.current&&W(te=>({...te,status:"error",error:ee}))}),T},reset(){W({status:"not-executed",error:void 0,result:_}),M.current=void 0,Ee.current=void 0}});return[ce,(0,t.useMemo)(()=>({reset(){ye.current.reset()},execute:(...O)=>ye.current.execute(...O)}),[]),{promise:M.current,lastArgs:Ee.current}]}}}]);})();

//# sourceMappingURL=3402.3ad7bd21.chunk.js.map