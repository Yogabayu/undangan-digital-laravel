import{aY as _,ae as M,aX as G,b5 as D,n as A,O as L,aq as z,k as y,v as be,b6 as Qe,ar as Se,q as Ze,at as Je,b7 as et,ah as T,P as $,R as H,T as x,a4 as w,X as F,a as f,aG as K,an as pe,ao as tt,a_ as oe,Z as Ce,Q as ke,aH as Ve,_ as we,$ as Pe,aK as nt,S as ee,aC as Ae,aL as at,aP as lt,y as Ie,U as te,a2 as Le,aD as st,W as Be,aM as Oe,a5 as Me,a6 as xe,b8 as it,ay as rt,aF as ot,G as ue,i as ce,ak as Te,Y as de,M as U,b9 as ut,ba as I,ap as ne,a3 as ct,a9 as dt,bb as Q,A as vt,bc as ve,bd as ft}from"./main-a0f635ce.js";import{c as mt,f as yt}from"./index-5b9673f5.js";import{M as gt}from"./VImg-ce066be5.js";import{c as De,V as fe}from"./VAvatar-c949dc11.js";import{m as ht,u as bt,a as me,V as ye}from"./VOverlay-98a581b7.js";import{V as St}from"./dialog-transition-762e9cc7.js";const Z=Symbol.for("vuetify:list");function Fe(){const e=_(Z,{hasPrepend:M(!1),updateHasPrepend:()=>null}),l={hasPrepend:M(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return G(Z,l),e}function Ee(){return _(Z,null)}const pt={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},_e={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},Ct={open:_e.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},ae=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=D(n),e&&!s){const i=Array.from(a.entries()).reduce((r,m)=>{let[g,h]=m;return h==="on"?[...r,g]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},Ge=e=>{const l=ae(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=D(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},kt=e=>{const l=ae(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=D(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},Vt=e=>{const l=Ge(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=D(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},wt=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=D(n);const m=new Map(a),g=[n];for(;g.length;){const o=g.shift();a.set(o,s?"on":"off"),i.has(o)&&g.push(...i.get(o))}let h=r.get(n);for(;h;){const o=i.get(h),c=o.every(d=>a.get(d)==="on"),v=o.every(d=>!a.has(d)||a.get(d)==="off");a.set(h,c?"on":v?"off":"indeterminate"),h=r.get(h)}return e&&!s&&Array.from(a.entries()).reduce((c,v)=>{let[d,u]=v;return u==="on"?[...c,d]:c},[]).length===0?m:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},E=Symbol.for("vuetify:nested"),$e={id:M(),root:{register:()=>null,unregister:()=>null,parents:A(new Map),children:A(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:A(new Set),selected:A(new Map),selectedValues:A([])}},Pt=L({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),At=e=>{let l=!1;const t=A(new Map),n=A(new Map),s=z(e,"opened",e.opened,o=>new Set(o),o=>[...o.values()]),a=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Vt(e.mandatory);case"leaf":return kt(e.mandatory);case"independent":return ae(e.mandatory);case"single-independent":return Ge(e.mandatory);case"classic":default:return wt(e.mandatory)}}),i=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Ct;case"single":return pt;case"multiple":default:return _e}}),r=z(e,"selected",e.selected,o=>a.value.in(o,t.value,n.value),o=>a.value.out(o,t.value,n.value));be(()=>{l=!0});function m(o){const c=[];let v=o;for(;v!=null;)c.unshift(v),v=n.value.get(v);return c}const g=Qe("nested"),h={id:M(),root:{opened:s,selected:r,selectedValues:y(()=>{const o=[];for(const[c,v]of r.value.entries())v==="on"&&o.push(c);return o}),register:(o,c,v)=>{c&&o!==c&&n.value.set(o,c),v&&t.value.set(o,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],o])},unregister:o=>{if(l)return;t.value.delete(o);const c=n.value.get(o);if(c){const v=t.value.get(c)??[];t.value.set(c,v.filter(d=>d!==o))}n.value.delete(o),s.value.delete(o)},open:(o,c,v)=>{g.emit("click:open",{id:o,value:c,path:m(o),event:v});const d=i.value.open({id:o,value:c,opened:new Set(s.value),children:t.value,parents:n.value,event:v});d&&(s.value=d)},openOnSelect:(o,c,v)=>{const d=i.value.select({id:o,value:c,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:v});d&&(s.value=d)},select:(o,c,v)=>{g.emit("click:select",{id:o,value:c,path:m(o),event:v});const d=a.value.select({id:o,value:c,selected:new Map(r.value),children:t.value,parents:n.value,event:v});d&&(r.value=d),h.root.openOnSelect(o,c,v)},children:t,parents:n}};return G(E,h),h.root},je=(e,l)=>{const t=_(E,$e),n=Symbol(Se()),s=y(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:y(()=>t.root.opened.value.has(s.value)),parent:y(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:y(()=>t.root.selected.value.get(D(s.value))==="on"),isIndeterminate:y(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:y(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),be(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&G(E,a),a},It=()=>{const e=_(E,$e);G(E,{...e,isGroupActivator:!0})};function Lt(){const e=M(!1);return Ze(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:y(()=>e.value?void 0:{transition:"none !important"}),isBooted:Je(e)}}const Bt=et({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return It(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Ot=L({activeColor:String,baseColor:String,color:String,collapseIcon:{type:T,default:"$collapse"},expandIcon:{type:T,default:"$expand"},prependIcon:T,appendIcon:T,fluid:Boolean,subgroup:Boolean,title:String,value:null,...$(),...H()},"VListGroup"),ge=x()({name:"VListGroup",props:Ot(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=je(w(e,"value"),!0),i=y(()=>`v-list-group--id-${String(a.value)}`),r=Ee(),{isBooted:m}=Lt();function g(v){s(!n.value,v)}const h=y(()=>({onClick:g,class:"v-list-group__header",id:i.value})),o=y(()=>n.value?e.collapseIcon:e.expandIcon),c=y(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&o.value,appendIcon:e.appendIcon||!e.subgroup&&o.value,title:e.title,value:e.value}}));return F(()=>f(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&f(K,{defaults:c.value},{default:()=>[f(Bt,null,{default:()=>[t.activator({props:h.value,isOpen:n.value})]})]}),f(gt,{transition:{component:mt},disabled:!m.value},{default:()=>{var v;return[pe(f("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(v=t.default)==null?void 0:v.call(t)]),[[tt,n.value]])]}})]})),{}}});const Mt=De("v-list-item-subtitle"),xt=De("v-list-item-title"),Tt=L({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:T,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:T,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:oe(),onClickOnce:oe(),...Ce(),...$(),...ke(),...Ve(),...we(),...Pe(),...nt(),...H(),...ee(),...Ae({variant:"text"})},"VListItem"),he=x()({name:"VListItem",directives:{Ripple:at},props:Tt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=lt(e,t),i=y(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:m,isIndeterminate:g,isGroupActivator:h,root:o,parent:c,openOnSelect:v}=je(i,!1),d=Ee(),u=y(()=>{var p;return e.active!==!1&&(e.active||((p=a.isActive)==null?void 0:p.value)||m.value)}),b=y(()=>e.link!==!1&&a.isLink.value),S=y(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),C=y(()=>e.rounded||e.nav),k=y(()=>e.color??e.activeColor),B=y(()=>({color:u.value?k.value??e.baseColor:e.baseColor,variant:e.variant}));Ie(()=>{var p;return(p=a.isActive)==null?void 0:p.value},p=>{p&&c.value!=null&&o.open(c.value,!0),p&&v(p)},{immediate:!0});const{themeClasses:j}=te(e),{borderClasses:W}=Le(e),{colorClasses:q,colorStyles:O,variantClasses:V}=st(B),{densityClasses:N}=Be(e),{dimensionStyles:Ue}=Oe(e),{elevationClasses:He}=Me(e),{roundedClasses:We}=xe(C),qe=y(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),X=y(()=>({isActive:u.value,select:r,isSelected:m.value,isIndeterminate:g.value}));function le(p){var R;s("click",p),!(h||!S.value)&&((R=a.navigate)==null||R.call(a,p),e.value!=null&&r(!m.value,p))}function Xe(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),le(p))}return F(()=>{const p=b.value?"a":e.tag,R=n.title||e.title,Ye=n.subtitle||e.subtitle,se=!!(e.appendAvatar||e.appendIcon),ze=!!(se||n.append),ie=!!(e.prependAvatar||e.prependIcon),Y=!!(ie||n.prepend);return d==null||d.updateHasPrepend(Y),e.activeColor&&it("active-color",["color","base-color"]),pe(f(p,{class:["v-list-item",{"v-list-item--active":u.value,"v-list-item--disabled":e.disabled,"v-list-item--link":S.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Y&&(d==null?void 0:d.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&u.value},j.value,W.value,q.value,N.value,He.value,qe.value,We.value,V.value,e.class],style:[O.value,Ue.value,e.style],href:a.href.value,tabindex:S.value?d?-2:0:void 0,onClick:le,onKeydown:S.value&&!b.value&&Xe},{default:()=>{var re;return[ot(S.value||u.value,"v-list-item"),Y&&f("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?f(K,{key:"prepend-defaults",disabled:!ie,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=n.prepend)==null?void 0:P.call(n,X.value)]}}):f(ue,null,[e.prependAvatar&&f(fe,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&f(ce,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),f("div",{class:"v-list-item__spacer"},null)]),f("div",{class:"v-list-item__content","data-no-activator":""},[R&&f(xt,{key:"title"},{default:()=>{var P;return[((P=n.title)==null?void 0:P.call(n,{title:e.title}))??e.title]}}),Ye&&f(Mt,{key:"subtitle"},{default:()=>{var P;return[((P=n.subtitle)==null?void 0:P.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(re=n.default)==null?void 0:re.call(n,X.value)]),ze&&f("div",{key:"append",class:"v-list-item__append"},[n.append?f(K,{key:"append-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=n.append)==null?void 0:P.call(n,X.value)]}}):f(ue,null,[e.appendIcon&&f(ce,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&f(fe,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),f("div",{class:"v-list-item__spacer"},null)])]}}),[[rt("ripple"),S.value&&e.ripple]])}),{}}}),Dt=L({color:String,inset:Boolean,sticky:Boolean,title:String,...$(),...H()},"VListSubheader"),Ft=x()({name:"VListSubheader",props:Dt(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=Te(w(e,"color"));return F(()=>{const a=!!(t.default||e.title);return f(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&f("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}});const Et=L({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...$(),...ee()},"VDivider"),_t=x()({name:"VDivider",props:Et(),setup(e,l){let{attrs:t}=l;const{themeClasses:n}=te(e),{textColorClasses:s,textColorStyles:a}=Te(w(e,"color")),i=y(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=de(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=de(e.thickness)),r});return F(()=>f("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,s.value,e.class],style:[i.value,a.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),Gt=L({items:Array,returnObject:Boolean},"VListChildren"),Ne=x()({name:"VListChildren",props:Gt(),setup(e,l){let{slots:t}=l;return Fe(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var c,v;let{children:i,props:r,type:m,raw:g}=a;if(m==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:r}))??f(_t,r,null);if(m==="subheader")return((v=t.subheader)==null?void 0:v.call(t,{props:r}))??f(Ft,r,null);const h={subtitle:t.subtitle?d=>{var u;return(u=t.subtitle)==null?void 0:u.call(t,{...d,item:g})}:void 0,prepend:t.prepend?d=>{var u;return(u=t.prepend)==null?void 0:u.call(t,{...d,item:g})}:void 0,append:t.append?d=>{var u;return(u=t.append)==null?void 0:u.call(t,{...d,item:g})}:void 0,title:t.title?d=>{var u;return(u=t.title)==null?void 0:u.call(t,{...d,item:g})}:void 0},o=ge.filterProps(r);return i?f(ge,U({value:r==null?void 0:r.value},o),{activator:d=>{let{props:u}=d;const b={...r,...u,value:e.returnObject?g:r.value};return t.header?t.header({props:b}):f(he,b,h)},default:()=>f(Ne,{items:i},t)}):t.item?t.item({props:r}):f(he,U(r,{value:e.returnObject?g:r.value}),h)}))}}}),$t=L({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:ut}},"list-items");function J(e,l){const t=I(l,e.itemTitle,l),n=I(l,e.itemValue,t),s=I(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?ne(l,["children"]):l:void 0:I(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?Re(e,s):void 0,raw:l}}function Re(e,l){const t=[];for(const n of l)t.push(J(e,n));return t}function Qt(e){const l=y(()=>Re(e,e.items)),t=y(()=>l.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(i=>i!==null)),a.map(i=>e.returnObject&&typeof i=="string"?J(e,i):l.value.find(r=>e.valueComparator(i,r.value))||J(e,i))}function s(a){return e.returnObject?a.map(i=>{let{raw:r}=i;return r}):a.map(i=>{let{value:r}=i;return r})}return{items:l,transformIn:n,transformOut:s}}function jt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Nt(e,l){const t=I(l,e.itemType,"item"),n=jt(l)?l:I(l,e.itemTitle),s=I(l,e.itemValue,void 0),a=I(l,e.itemChildren),i=e.itemProps===!0?ne(l,["children"]):I(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?Ke(e,a):void 0,raw:l}}function Ke(e,l){const t=[];for(const n of l)t.push(Nt(e,n));return t}function Rt(e){return{items:y(()=>Ke(e,e.items))}}const Kt=L({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...Pt({selectStrategy:"single-leaf",openStrategy:"list"}),...Ce(),...$(),...ke(),...Ve(),...we(),itemType:{type:String,default:"type"},...$t(),...Pe(),...H(),...ee(),...Ae({variant:"text"})},"VList"),Zt=x()({name:"VList",props:Kt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=Rt(e),{themeClasses:s}=te(e),{backgroundColorClasses:a,backgroundColorStyles:i}=ct(w(e,"bgColor")),{borderClasses:r}=Le(e),{densityClasses:m}=Be(e),{dimensionStyles:g}=Oe(e),{elevationClasses:h}=Me(e),{roundedClasses:o}=xe(e),{open:c,select:v}=At(e),d=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),u=w(e,"activeColor"),b=w(e,"baseColor"),S=w(e,"color");Fe(),dt({VListGroup:{activeColor:u,baseColor:b,color:S},VListItem:{activeClass:w(e,"activeClass"),activeColor:u,baseColor:b,color:S,density:w(e,"density"),disabled:w(e,"disabled"),lines:w(e,"lines"),nav:w(e,"nav"),slim:w(e,"slim"),variant:w(e,"variant")}});const C=M(!1),k=A();function B(V){C.value=!0}function j(V){C.value=!1}function W(V){var N;!C.value&&!(V.relatedTarget&&((N=k.value)!=null&&N.contains(V.relatedTarget)))&&O()}function q(V){if(k.value){if(V.key==="ArrowDown")O("next");else if(V.key==="ArrowUp")O("prev");else if(V.key==="Home")O("first");else if(V.key==="End")O("last");else return;V.preventDefault()}}function O(V){if(k.value)return Q(k.value,V)}return F(()=>f(e.tag,{ref:k,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,a.value,r.value,m.value,h.value,d.value,o.value,e.class],style:[i.value,g.value,e.style],tabindex:e.disabled||C.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:B,onFocusout:j,onFocus:W,onKeydown:q},{default:()=>[f(Ne,{items:n.value,returnObject:e.returnObject},t)]})),{open:c,select:v,focus:O}}});const Ut=L({id:String,...ne(ht({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:St}}),["absolute"])},"VMenu"),Jt=x()({name:"VMenu",props:Ut(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const n=z(e,"modelValue"),{scopeId:s}=bt(),a=Se(),i=y(()=>e.id||`v-menu-${a}`),r=A(),m=_(me,null),g=M(0);G(me,{register(){++g.value},unregister(){--g.value},closeParents(){setTimeout(()=>{g.value||(n.value=!1,m==null||m.closeParents())},40)}});async function h(u){var C,k,B;const b=u.relatedTarget,S=u.target;await vt(),n.value&&b!==S&&((C=r.value)!=null&&C.contentEl)&&((k=r.value)!=null&&k.globalTop)&&![document,r.value.contentEl].includes(S)&&!r.value.contentEl.contains(S)&&((B=ve(r.value.contentEl)[0])==null||B.focus())}Ie(n,u=>{u?(m==null||m.register(),document.addEventListener("focusin",h,{once:!0})):(m==null||m.unregister(),document.removeEventListener("focusin",h))});function o(){m==null||m.closeParents()}function c(u){var b,S,C;e.disabled||u.key==="Tab"&&(ft(ve((b=r.value)==null?void 0:b.contentEl,!1),u.shiftKey?"prev":"next",B=>B.tabIndex>=0)||(n.value=!1,(C=(S=r.value)==null?void 0:S.activatorEl)==null||C.focus()))}function v(u){var S;if(e.disabled)return;const b=(S=r.value)==null?void 0:S.contentEl;b&&n.value?u.key==="ArrowDown"?(u.preventDefault(),Q(b,"next")):u.key==="ArrowUp"&&(u.preventDefault(),Q(b,"prev")):["ArrowDown","ArrowUp"].includes(u.key)&&(n.value=!0,u.preventDefault(),setTimeout(()=>setTimeout(()=>v(u))))}const d=y(()=>U({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":i.value,onKeydown:v},e.activatorProps));return F(()=>{const u=ye.filterProps(e);return f(ye,U({ref:r,class:["v-menu",e.class],style:e.style},u,{modelValue:n.value,"onUpdate:modelValue":b=>n.value=b,absolute:!0,activatorProps:d.value,"onClick:outside":o,onKeydown:c},s),{activator:t.activator,default:function(){for(var b=arguments.length,S=new Array(b),C=0;C<b;C++)S[C]=arguments[C];return f(K,{root:"VMenu"},{default:()=>{var k;return[(k=t.default)==null?void 0:k.call(t,...S)]}})}})}),yt({id:i,ΨopenChildren:g},r)}});export{Jt as V,Zt as a,he as b,xt as c,_t as d,Mt as e,Qt as f,$t as m,Lt as u};