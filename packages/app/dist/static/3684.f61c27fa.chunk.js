"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3684],{93684:(ot,T,t)=>{t.r(T),t.d(T,{CatalogGraphCard:()=>z});var y=t(78560),D=t(21332),H=t(72814),U=t(52262),$=t(16400),j=t(20987),M=t(53318),V=t(58837),Y=t(45810),L=t.n(Y),s=t(14041),Z=t(18690),b=t(15496),X=t(60332),J=t(54361),k=t(60241);const w=(0,V.A)({card:({height:G})=>({display:"flex",flexDirection:"column",maxHeight:G,minHeight:G}),graph:{flex:1,minHeight:0}},{name:"PluginCatalogGraphCatalogGraphCard"}),z=G=>{const{variant:q="gridItem",relationPairs:W=J.b,maxDepth:B=1,unidirectional:Q=!0,mergeRelations:F=!0,direction:K=k.O.LEFT_RIGHT,kinds:_,relations:tt,entityFilter:et,height:nt,className:st,action:at,rootEntityNames:e,onNodeClick:o,title:i="Relations",zoom:g="enable-on-click"}=G,{entity:r}=(0,$.tN)(),p=(0,y.sM)(r),N=(0,H.S)(j.s),S=(0,H.S)(b.c),R=(0,Z.Zp)(),A=w({height:nt}),c=(0,U.s)(),a=(0,s.useCallback)((m,E)=>{const x=(0,y.KU)(m.id),v=N({kind:x.kind.toLocaleLowerCase("en-US"),namespace:x.namespace.toLocaleLowerCase("en-US"),name:x.name});c.captureEvent("click",m.entity.metadata.title??(0,M.S)(x),{attributes:{to:v}}),R(v)},[N,R,c]),d=L().stringify({rootEntityRefs:[(0,y.U2)(r)],maxDepth:B,unidirectional:Q,mergeRelations:F,selectedKinds:_,selectedRelations:tt,direction:K},{arrayFormat:"brackets",addQueryPrefix:!0}),f=`${S()}${d}`;return s.createElement(D.n,{title:i,action:at,cardClassName:A.card,variant:q,noPadding:!0,deepLink:{title:"View graph",link:f}},s.createElement(X.L,{...G,rootEntityNames:e||p,onNodeClick:o||a,className:st||A.graph,maxDepth:B,unidirectional:Q,mergeRelations:F,direction:K,relationPairs:W,entityFilter:et,zoom:g}))}},60332:(ot,T,t)=>{t.d(T,{L:()=>at});var y=t(78560),D=t(80609),H=t(47090),U=t(18139),$=t(24453),j=t(78467),M=t(58837),V=t(54917),Y=t(53373),L=t.n(Y),s=t(14041),Z=t(22249);const b=(0,Z.A)(e=>({text:{fill:e.palette.textContrast},secondary:{fill:e.palette.textSubtle}}),{name:"PluginCatalogGraphCustomLabel"});function X({edge:{relations:e}}){const o=b();return s.createElement("text",{className:o.text,textAnchor:"middle"},e.map((i,g)=>s.createElement("tspan",{key:i,className:L()(g%2!==0&&o.secondary)},g>0&&s.createElement("tspan",null," / "),i)))}var J=t(46509),k=t(10437);function w({icon:e,...o}){const i=e??k.A;return s.createElement(i,{...o})}var z=t(55488);const G=(0,M.A)(e=>({node:{fill:e.palette.grey[300],stroke:e.palette.grey[300],"&.primary":{fill:e.palette.primary.light,stroke:e.palette.primary.light},"&.secondary":{fill:e.palette.secondary.light,stroke:e.palette.secondary.light}},text:{fill:e.palette.getContrastText(e.palette.grey[300]),"&.primary":{fill:e.palette.primary.contrastText},"&.secondary":{fill:e.palette.secondary.contrastText},"&.focused":{fontWeight:"bold"}},clickable:{cursor:"pointer"}}),{name:"PluginCatalogGraphCustomNode"});function q({node:{id:e,entity:o,color:i="default",focused:g,onClick:r}}){const p=G(),[N,S]=(0,s.useState)(0),[R,A]=(0,s.useState)(0),c=(0,s.useRef)(null),a=(0,J.f)(o,{defaultNamespace:z.oQ});(0,s.useLayoutEffect)(()=>{if(c.current){let{height:l,width:u}=c.current.getBBox();l=Math.round(l),u=Math.round(u),(l!==R||u!==N)&&(S(u),A(l))}},[N,R]);const d=!!a.Icon,f=10,m=R,E=d?m+f:0,x=E+N+f*2,v=R+f*2,I=a.primaryTitle??e;return s.createElement("g",{onClick:r,className:L()(r&&p.clickable)},s.createElement("rect",{className:L()(p.node,i==="primary"&&"primary",i==="secondary"&&"secondary"),width:x,height:v,rx:10}),d&&s.createElement(w,{icon:a.Icon,y:f,x:f,width:m,height:m,className:L()(p.text,g&&"focused",i==="primary"&&"primary",i==="secondary"&&"secondary")}),s.createElement("text",{ref:c,className:L()(p.text,g&&"focused",i==="primary"&&"primary",i==="secondary"&&"secondary"),y:v/2,x:E+(N+f*2)/2,textAnchor:"middle",alignmentBaseline:"middle"},I),s.createElement("title",null,a.entityRef))}var W=t(54361),B=t(60241),Q=t(22771),F=t(30043),K=t(87290);function _(){const e=(0,U.gf)(F.v),o=(0,s.useRef)({requestedEntities:new Set,outstandingEntities:new Map,cachedEntities:new Map}),[i,g]=(0,s.useState)({}),r=(0,s.useCallback)(()=>{const{cachedEntities:c,requestedEntities:a}=o.current,d={};a.forEach(f=>{const m=c.get(f);m&&(d[f]=m)}),g(d)},[o,g]),[p,N]=(0,K.A)(async()=>{const{requestedEntities:c,cachedEntities:a}=o.current,d=Array.from(c).filter(m=>!a.has(m));if(d.length===0){r();return}const{items:f}=await e.getEntitiesByRefs({entityRefs:d});f.forEach(m=>{if(m){const E=(0,y.U2)(m);a.set(E,m)}}),r()},[o,r]),{loading:S,error:R}=p,A=(0,s.useCallback)(c=>{const a=new Set(c),{requestedEntities:d}=o.current;(a.size!==d.size||Array.from(a).some(f=>!d.has(f)))&&(o.current.requestedEntities=a,N(),r())},[o,N,r]);return{entities:i,loading:S,error:R,requestEntities:A}}var tt=t(45250);function et({rootEntityRefs:e,filter:{maxDepth:o=Number.POSITIVE_INFINITY,relations:i,kinds:g,entityFilter:r}={}}){const{entities:p,loading:N,error:S,requestEntities:R}=_();return(0,s.useEffect)(()=>{const c=new Set([...e]),a=new Set;let d=[...e],f=0;for(;d.length>0&&(!isFinite(o)||f<o);){const m=d;for(d=[];m.length>0;){const E=m.shift(),x=p[E];if(a.add(E),x&&x.relations){if(r&&!r(x))continue;for(const v of x.relations)(!i||i.includes(v.type))&&(!g||g.some(I=>v.targetRef.startsWith(`${I.toLocaleLowerCase("en-US")}:`)))&&(a.has(v.targetRef)||(d.push(v.targetRef),c.add(v.targetRef)))}}++f}R([...c])},[p,e,o,i,g,r,R]),{entities:(0,s.useMemo)(()=>r?(0,tt.pickBy)(p,(c,a)=>r(c)):p,[p,r]),loading:N,error:S}}function nt({rootEntityRefs:e,maxDepth:o=Number.POSITIVE_INFINITY,unidirectional:i=!0,mergeRelations:g=!0,kinds:r,relations:p,entityFilter:N,onNodeClick:S,relationPairs:R=W.b}){const[A,c]=(0,s.useState)({}),{entities:a,loading:d,error:f}=et({rootEntityRefs:e,filter:{maxDepth:o,kinds:r,relations:p,entityFilter:N}});return(0,Q.A)(()=>{if(!a||Object.keys(a).length===0){c({});return}const m=Object.entries(a).map(([l,u])=>{const n=e.includes(l),h={id:l,entity:u,focused:n,color:n?"secondary":"primary",kind:u.kind,name:u.metadata.name,namespace:u.metadata.namespace||z.oQ,title:u.metadata.title,spec:u.spec};return S&&(h.onClick=C=>S(h,C)),h}),E=[],x=new Set,v=[...e];for(;v.length>0;){const l=v.pop(),u=a[l];x.add(l),u&&u?.relations?.forEach(n=>{if(a[n.targetRef]&&!(p&&!p.includes(n.type))&&!(r&&!r.some(h=>n.targetRef.startsWith(`${h.toLocaleLowerCase("en-US")}:`)))){if(!i||!x.has(n.targetRef))if(g){const h=R.find(([P,O])=>P===n.type||O===n.type)??[n.type],[C]=h;E.push({from:C===n.type?l:n.targetRef,to:C===n.type?n.targetRef:l,relations:h,label:"visible"})}else E.push({from:l,to:n.targetRef,relations:[n.type],label:"visible"});if(x.has(n.targetRef)||(v.push(n.targetRef),x.add(n.targetRef)),i){const h=E.findIndex(C=>l===C.from&&n.targetRef===C.to&&!C.relations.includes(n.type));if(h>=0)if(g){const C=R.find(([P,O])=>P===n.type||O===n.type)??[n.type];E[h].relations=[...E[h].relations,...C]}else E[h].relations=[...E[h].relations,n.type]}}})}const I=E.reduce((l,u)=>{const n=l.findIndex(h=>h.from===u.from&&h.to===u.to);return n>=0?(l[n]={...l[n],relations:Array.from(new Set([...l[n].relations,...u.relations]))},l):[...l,u]},[]);c({nodes:m,edges:I})},100,[a,e,r,p,i,g,S,R]),{loading:d,error:f,...A}}const st=(0,M.A)(e=>({progress:{position:"absolute",left:"50%",top:"50%",marginLeft:"-20px",marginTop:"-20px"},container:{position:"relative",width:"100%",display:"flex",flexDirection:"column"},graph:{width:"100%",flex:1,"& path[marker-end]":{transition:"filter 0.1s ease-in-out"},"& path[marker-end]:hover":{filter:`drop-shadow(2px 2px 4px ${e.palette.primary.dark});`},"& g[data-testid=label]":{transition:"transform 0s"}}}),{name:"PluginCatalogGraphEntityRelationsGraph"}),at=e=>{const{rootEntityNames:o,maxDepth:i=2,unidirectional:g=!0,mergeRelations:r=!0,kinds:p,relations:N,entityFilter:S,direction:R=B.O.LEFT_RIGHT,onNodeClick:A,relationPairs:c=W.b,className:a,zoom:d="enabled",renderNode:f,renderLabel:m,curve:E,showArrowHeads:x}=e,v=(0,V.A)(),I=st(),l=(0,s.useMemo)(()=>(Array.isArray(o)?o:[o]).map(O=>(0,y.U2)(O)),[o]),u=(0,U.gf)($.m),{loading:n,error:h,nodes:C,edges:P}=nt({rootEntityRefs:l,maxDepth:i,unidirectional:g,mergeRelations:r,kinds:p,relations:N,entityFilter:S,onNodeClick:A,relationPairs:c});return(0,s.useEffect)(()=>{h&&u.post(h)},[u,h]),s.createElement("div",{className:L()(I.container,a)},n&&s.createElement(j.A,{className:I.progress}),C&&P&&s.createElement(D.w,{nodes:C,edges:P,renderNode:f||q,renderLabel:m||X,direction:R,className:I.graph,paddingX:v.spacing(4),paddingY:v.spacing(4),labelPosition:H.D.LabelPosition.RIGHT,labelOffset:v.spacing(1),zoom:d,curve:E,showArrowHeads:x}))}},54361:(ot,T,t)=>{t.d(T,{b:()=>D});var y=t(97214);const D=[[y.L8,y.vv],[y.Ey,y.fO],[y.IB,y.ZD],[y.sA,y.jn],[y.Kx,y.Qz],[y.zj,y.u0],[y.nC,y.fT]]}}]);})();

//# sourceMappingURL=3684.f61c27fa.chunk.js.map