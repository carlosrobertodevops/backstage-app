"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1820,6393,9424],{66393:(Y,k,v)=>{v.r(k),v.d(k,{C:()=>w,c:()=>R});var H=v(94403);function N(S,O){for(var T=0;T<O.length;T++){const o=O[T];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in S)){const h=Object.getOwnPropertyDescriptor(o,l);h&&Object.defineProperty(S,l,h.get?h:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}))}var C=(0,H.r)();const w=(0,H.g)(C),R=N({__proto__:null,default:w},[C])},29424:(Y,k,v)=>{v.r(k);var H=v(66393),N=v(11820),C=v(40618);H.C.registerHelper("hint","graphql",(w,R)=>{const{schema:S,externalFragments:O,autocompleteOptions:T}=R;if(!S)return;const o=w.getCursor(),l=w.getTokenAt(o),h=l.type!==null&&/"|\w/.test(l.string[0])?l.start:l.end,x=new C.yX(o.line,h),g={list:(0,C.CE)(S,w.getValue(),x,l,O,T).map(b=>{var _;return{text:(_=b?.rawInsert)!==null&&_!==void 0?_:b.label,type:b.type,description:b.documentation,isDeprecated:b.isDeprecated,deprecationReason:b.deprecationReason}}),from:{line:o.line,ch:h},to:{line:o.line,ch:l.end}};return g?.list&&g.list.length>0&&(g.from=H.C.Pos(g.from.line,g.from.ch),g.to=H.C.Pos(g.to.line,g.to.ch),H.C.signal(w,"hasCompletion",w,g,l)),g})},11820:(Y,k,v)=>{v.r(k),v.d(k,{s:()=>S});var H=v(94403);function N(O,T){for(var o=0;o<T.length;o++){const l=T[o];if(typeof l!="string"&&!Array.isArray(l)){for(const h in l)if(h!=="default"&&!(h in O)){const x=Object.getOwnPropertyDescriptor(l,h);x&&Object.defineProperty(O,h,x.get?x:{enumerable:!0,get:()=>l[h]})}}}return Object.freeze(Object.defineProperty(O,Symbol.toStringTag,{value:"Module"}))}var C={exports:{}};(function(O,T){(function(o){o((0,H.r)())})(function(o){var l="CodeMirror-hint",h="CodeMirror-hint-active";o.showHint=function(t,e,i){if(!e)return t.showHint(i);i&&i.async&&(e.async=!0);var n={hint:e};if(i)for(var s in i)n[s]=i[s];return t.showHint(n)},o.defineExtension("showHint",function(t){t=b(this,this.getCursor("start"),t);var e=this.listSelections();if(!(e.length>1)){if(this.somethingSelected()){if(!t.hint.supportsSelection)return;for(var i=0;i<e.length;i++)if(e[i].head.line!=e[i].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var n=this.state.completionActive=new x(this,t);n.options.hint&&(o.signal(this,"startCompletion",this),n.update(!0))}}),o.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function x(t,e){if(this.cm=t,this.options=e,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var i=this;t.on("cursorActivity",this.activityFunc=function(){i.cursorActivity()})}}var $=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},g=window.cancelAnimationFrame||clearTimeout;x.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&o.signal(this.data,"close"),this.widget&&this.widget.close(),o.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(t,e){var i=t.list[e],n=this;this.cm.operation(function(){i.hint?i.hint(n.cm,t,i):n.cm.replaceRange(_(i),i.from||t.from,i.to||t.to,"complete"),o.signal(t,"pick",i),n.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(g(this.debounce),this.debounce=0);var t=this.startPos;this.data&&(t=this.data.from);var e=this.cm.getCursor(),i=this.cm.getLine(e.line);if(e.line!=this.startPos.line||i.length-e.ch!=this.startLen-this.startPos.ch||e.ch<t.ch||this.cm.somethingSelected()||!e.ch||this.options.closeCharacters.test(i.charAt(e.ch-1)))this.close();else{var n=this;this.debounce=$(function(){n.update()}),this.widget&&this.widget.disable()}},update:function(t){if(this.tick!=null){var e=this,i=++this.tick;Q(this.options.hint,this.cm,this.options,function(n){e.tick==i&&e.finishUpdate(n,t)})}},finishUpdate:function(t,e){this.data&&o.signal(this.data,"update");var i=this.widget&&this.widget.picked||e&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=t,t&&t.list.length&&(i&&t.list.length==1?this.pick(t,0):(this.widget=new J(this,t),o.signal(t,"shown")))}};function b(t,e,i){var n=t.options.hintOptions,s={};for(var c in Z)s[c]=Z[c];if(n)for(var c in n)n[c]!==void 0&&(s[c]=n[c]);if(i)for(var c in i)i[c]!==void 0&&(s[c]=i[c]);return s.hint.resolve&&(s.hint=s.hint.resolve(t,e)),s}function _(t){return typeof t=="string"?t:t.text}function ct(t,e){var i={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(-e.menuSize()+1,!0)},PageDown:function(){e.moveFocus(e.menuSize()-1,!0)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close},n=/Mac/.test(navigator.platform);n&&(i["Ctrl-P"]=function(){e.moveFocus(-1)},i["Ctrl-N"]=function(){e.moveFocus(1)});var s=t.options.customKeys,c=s?{}:i;function r(d,a){var u;typeof a!="string"?u=function(P){return a(P,e)}:i.hasOwnProperty(a)?u=i[a]:u=a,c[d]=u}if(s)for(var p in s)s.hasOwnProperty(p)&&r(p,s[p]);var f=t.options.extraKeys;if(f)for(var p in f)f.hasOwnProperty(p)&&r(p,f[p]);return c}function G(t,e){for(;e&&e!=t;){if(e.nodeName.toUpperCase()==="LI"&&e.parentNode==t)return e;e=e.parentNode}}function J(t,e){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=t,this.data=e,this.picked=!1;var i=this,n=t.cm,s=n.getInputField().ownerDocument,c=s.defaultView||s.parentWindow,r=this.hints=s.createElement("ul");r.setAttribute("role","listbox"),r.setAttribute("aria-expanded","true"),r.id=this.id;var p=t.cm.options.theme;r.className="CodeMirror-hints "+p,this.selectedHint=e.selectedHint||0;for(var f=e.list,d=0;d<f.length;++d){var a=r.appendChild(s.createElement("li")),u=f[d],P=l+(d!=this.selectedHint?"":" "+h);u.className!=null&&(P=u.className+" "+P),a.className=P,d==this.selectedHint&&a.setAttribute("aria-selected","true"),a.id=this.id+"-"+d,a.setAttribute("role","option"),u.render?u.render(a,e,u):a.appendChild(s.createTextNode(u.displayText||_(u))),a.hintId=d}var F=t.options.container||s.body,E=n.cursorCoords(t.options.alignWithWord?e.from:null),D=E.left,W=E.bottom,q=!0,L=0,M=0;if(F!==s.body){var ht=["absolute","relative","fixed"].indexOf(c.getComputedStyle(F).position)!==-1,j=ht?F:F.offsetParent,tt=j.getBoundingClientRect(),et=s.body.getBoundingClientRect();L=tt.left-et.left-j.scrollLeft,M=tt.top-et.top-j.scrollTop}r.style.left=D-L+"px",r.style.top=W-M+"px";var B=c.innerWidth||Math.max(s.body.offsetWidth,s.documentElement.offsetWidth),z=c.innerHeight||Math.max(s.body.offsetHeight,s.documentElement.offsetHeight);F.appendChild(r),n.getInputField().setAttribute("aria-autocomplete","list"),n.getInputField().setAttribute("aria-owns",this.id),n.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var A=t.options.moveOnOverlap?r.getBoundingClientRect():new DOMRect,it=t.options.paddingForScrollbar?r.scrollHeight>r.clientHeight+1:!1,I;setTimeout(function(){I=n.getScrollInfo()});var ft=A.bottom-z;if(ft>0){var V=A.bottom-A.top,ut=E.top-(E.bottom-A.top);if(ut-V>0)r.style.top=(W=E.top-V-M)+"px",q=!1;else if(V>z){r.style.height=z-5+"px",r.style.top=(W=E.bottom-A.top-M)+"px";var nt=n.getCursor();e.from.ch!=nt.ch&&(E=n.cursorCoords(nt),r.style.left=(D=E.left-L)+"px",A=r.getBoundingClientRect())}}var K=A.right-B;if(it&&(K+=n.display.nativeBarWidth),K>0&&(A.right-A.left>B&&(r.style.width=B-5+"px",K-=A.right-A.left-B),r.style.left=(D=E.left-K-L)+"px"),it)for(var U=r.firstChild;U;U=U.nextSibling)U.style.paddingRight=n.display.nativeBarWidth+"px";if(n.addKeyMap(this.keyMap=ct(t,{moveFocus:function(m,y){i.changeActive(i.selectedHint+m,y)},setFocus:function(m){i.changeActive(m)},menuSize:function(){return i.screenAmount()},length:f.length,close:function(){t.close()},pick:function(){i.pick()},data:e})),t.options.closeOnUnfocus){var st;n.on("blur",this.onBlur=function(){st=setTimeout(function(){t.close()},100)}),n.on("focus",this.onFocus=function(){clearTimeout(st)})}n.on("scroll",this.onScroll=function(){var m=n.getScrollInfo(),y=n.getWrapperElement().getBoundingClientRect();I||(I=n.getScrollInfo());var rt=W+I.top-m.top,X=rt-(c.pageYOffset||(s.documentElement||s.body).scrollTop);if(q||(X+=r.offsetHeight),X<=y.top||X>=y.bottom)return t.close();r.style.top=rt+"px",r.style.left=D+I.left-m.left+"px"}),o.on(r,"dblclick",function(m){var y=G(r,m.target||m.srcElement);y&&y.hintId!=null&&(i.changeActive(y.hintId),i.pick())}),o.on(r,"click",function(m){var y=G(r,m.target||m.srcElement);y&&y.hintId!=null&&(i.changeActive(y.hintId),t.options.completeOnSingleClick&&i.pick())}),o.on(r,"mousedown",function(){setTimeout(function(){n.focus()},20)});var ot=this.getSelectedHintRange();return(ot.from!==0||ot.to!==0)&&this.scrollToActive(),o.signal(e,"select",f[this.selectedHint],r.childNodes[this.selectedHint]),!0}J.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm.getInputField();t.removeAttribute("aria-activedescendant"),t.removeAttribute("aria-owns");var e=this.completion.cm;this.completion.options.closeOnUnfocus&&(e.off("blur",this.onBlur),e.off("focus",this.onFocus)),e.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(t,e){if(t>=this.data.list.length?t=e?this.data.list.length-1:0:t<0&&(t=e?0:this.data.list.length-1),this.selectedHint!=t){var i=this.hints.childNodes[this.selectedHint];i&&(i.className=i.className.replace(" "+h,""),i.removeAttribute("aria-selected")),i=this.hints.childNodes[this.selectedHint=t],i.className+=" "+h,i.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",i.id),this.scrollToActive(),o.signal(this.data,"select",this.data.list[this.selectedHint],i)}},scrollToActive:function(){var t=this.getSelectedHintRange(),e=this.hints.childNodes[t.from],i=this.hints.childNodes[t.to],n=this.hints.firstChild;e.offsetTop<this.hints.scrollTop?this.hints.scrollTop=e.offsetTop-n.offsetTop:i.offsetTop+i.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=i.offsetTop+i.offsetHeight-this.hints.clientHeight+n.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var t=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-t),to:Math.min(this.data.list.length-1,this.selectedHint+t)}}};function lt(t,e){if(!t.somethingSelected())return e;for(var i=[],n=0;n<e.length;n++)e[n].supportsSelection&&i.push(e[n]);return i}function Q(t,e,i,n){if(t.async)t(e,n,i);else{var s=t(e,i);s&&s.then?s.then(n):n(s)}}function at(t,e){var i=t.getHelpers(e,"hint"),n;if(i.length){var s=function(c,r,p){var f=lt(c,i);function d(a){if(a==f.length)return r(null);Q(f[a],c,p,function(u){u&&u.list.length>0?r(u):d(a+1)})}d(0)};return s.async=!0,s.supportsSelection=!0,s}else return(n=t.getHelper(t.getCursor(),"hintWords"))?function(c){return o.hint.fromList(c,{words:n})}:o.hint.anyword?function(c,r){return o.hint.anyword(c,r)}:function(){}}o.registerHelper("hint","auto",{resolve:at}),o.registerHelper("hint","fromList",function(t,e){var i=t.getCursor(),n=t.getTokenAt(i),s,c=o.Pos(i.line,n.start),r=i;n.start<i.ch&&/\w/.test(n.string.charAt(i.ch-n.start-1))?s=n.string.substr(0,i.ch-n.start):(s="",c=i);for(var p=[],f=0;f<e.words.length;f++){var d=e.words[f];d.slice(0,s.length)==s&&p.push(d)}if(p.length)return{list:p,from:c,to:r}}),o.commands.autocomplete=o.showHint;var Z={hint:o.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};o.defineOption("hintOptions",null)})})();var w=C.exports;const S=N({__proto__:null,default:(0,H.g)(w)},[w])}}]);})();

//# sourceMappingURL=9424.e991870d.chunk.js.map