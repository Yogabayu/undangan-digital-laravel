import{_ as F,L as W,a as O,V as C,b as m,c as A,d as J}from"./VBadge-a1df92a5.js";import{o as n,h as r,r as k,w as a,a as e,e as c,t as j,i as u,O as E,Z as G,P as H,Q as Y,_ as M,$ as Q,a0 as X,R as Z,a1 as q,S as K,T as ee,j as P,a2 as te,a3 as ae,a4 as _,W as oe,a5 as se,a6 as ne,k as f,a7 as re,a8 as le,a9 as ie,X as ue,Y as D,aa as ce,n as de,ab as me,u as v,f as b,b as h,V as y,l as _e,H as fe,I as ve}from"./main-a0f635ce.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{V as w}from"./VAvatar-c949dc11.js";import{V as I}from"./VImg-ce066be5.js";import{V as he,a as pe,b as x,c as N,d as L,u as ge}from"./VMenu-10fdde58.js";import{V as be}from"./VListItemAction-0edb71bf.js";import{V as ye}from"./VSpacer-494c86f5.js";import"./arthaya-5f3e6501.js";import"./index-7a6015b4.js";import"./VTooltip-06e35bf4.js";import"./VOverlay-98a581b7.js";import"./index-5b9673f5.js";import"./dialog-transition-762e9cc7.js";/* empty css              */const Ve={__name:"NavbarThemeSwitcher",setup(t){const o=[{name:"light",icon:"bx-sun"},{name:"dark",icon:"bx-moon"}];return(s,l)=>{const i=F;return n(),r(i,{themes:o})}}},Se={components:{LogoutBtn:W},data(){return{avatar1:O,userData:null,photoURL:this.$userPhotoUrl+JSON.parse(localStorage.getItem("userData")).photo}},methods:{getUserData(){const t=localStorage.getItem("userData");t&&(this.userData=JSON.parse(t))}},mounted(){this.getUserData()}};function xe(t,o,s,l,i,p){const d=k("LogoutBtn");return n(),r(C,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success",bordered:""},{default:a(()=>[e(w,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:a(()=>[e(I,{src:i.photoURL},null,8,["src"]),e(he,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:a(()=>[e(pe,null,{default:a(()=>[e(x,null,{prepend:a(()=>[e(be,{start:""},{default:a(()=>[e(C,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:a(()=>[e(w,{color:"primary",variant:"tonal"},{default:a(()=>[e(I,{src:i.photoURL},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:a(()=>[e(N,{class:"font-weight-semibold"},{default:a(()=>[c(j(this.userData.name),1)]),_:1})]),_:1}),e(L,{class:"my-2"}),e(x,{to:"/user-profile"},{prepend:a(()=>[e(u,{class:"me-2",icon:"bx-user",size:"22"})]),default:a(()=>[e(N,null,{default:a(()=>[c("Profile")]),_:1})]),_:1}),e(L,{class:"my-2"}),e(x,{to:"/login"},{prepend:a(()=>[e(u,{class:"me-2",icon:"bx-log-out",size:"22"})]),default:a(()=>[e(d)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ke=$(Se,[["render",xe]]);const Be=E({bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:t=>!t||["horizontal","shift"].includes(t)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...G(),...H(),...Y(),...M(),...Q(),...X({name:"bottom-navigation"}),...Z({tag:"header"}),...q({modelValue:!0,selectedClass:"v-btn--selected"}),...K()},"VBottomNavigation"),Ce=ee()({name:"VBottomNavigation",props:Be(),emits:{"update:modelValue":t=>!0},setup(t,o){let{slots:s}=o;const{themeClasses:l}=P(),{borderClasses:i}=te(t),{backgroundColorClasses:p,backgroundColorStyles:d}=ae(_(t,"bgColor")),{densityClasses:B}=oe(t),{elevationClasses:R}=se(t),{roundedClasses:T}=ne(t),{ssrBootStyles:U}=ge(),S=f(()=>Number(t.height)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0)),g=_(t,"active"),{layoutItemStyles:z}=re({id:t.name,order:f(()=>parseInt(t.order,10)),position:f(()=>"bottom"),layoutSize:f(()=>g.value?S.value:0),elementSize:S,active:g,absolute:_(t,"absolute")});return le(t,ce),ie({VBtn:{color:_(t,"color"),density:_(t,"density"),stacked:f(()=>t.mode!=="horizontal"),variant:"text"}},{scoped:!0}),ue(()=>e(t.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":g.value,"v-bottom-navigation--grow":t.grow,"v-bottom-navigation--shift":t.mode==="shift"},l.value,p.value,i.value,B.value,R.value,T.value,t.class],style:[d.value,z.value,{height:D(S.value),transform:`translateY(${D(g.value?0:100,"%")})`},U.value,t.style]},{default:()=>[s.default&&e("div",{class:"v-bottom-navigation__content"},[s.default()])]})),{}}}),V=t=>(fe("data-v-3cf90104"),t=t(),ve(),t),De={class:"d-flex h-100 align-center"},we=V(()=>h("span",null,"Home",-1)),Ie=V(()=>h("span",null,"Cari File",-1)),Ne=V(()=>h("span",null,"Favorite",-1)),Le=V(()=>h("span",null,"Riwayat",-1)),Pe={__name:"DefaultLayoutWithVerticalNav",setup(t){P();const o=de(!1);typeof window<"u"&&(o.value=window.innerWidth<=600);const s=JSON.parse(localStorage.getItem("userData"));return(l,i)=>{const p=k("IconBtn");return n(),r(J,null,me({navbar:a(({toggleVerticalOverlayNavActive:d})=>[h("div",De,[v(o)?b("",!0):(n(),r(p,{key:0,class:"ms-n3 d-lg-none",onClick:B=>d(!0)},{default:a(()=>[e(u,{icon:"bx-menu"})]),_:2},1032,["onClick"])),e(ye),e(Ve,{class:"me-2"}),e(ke)])]),footer:a(()=>[v(o)?(n(),r(Ce,{key:0,elevation:0,mode:"shift"},{default:a(()=>[e(y,{value:"home",to:"/user-dashboard"},{default:a(()=>[e(u,null,{default:a(()=>[c("mdi-home")]),_:1}),we]),_:1}),e(y,{value:"search",to:"/u-search"},{default:a(()=>[e(u,null,{default:a(()=>[c("mdi-text-box-search")]),_:1}),Ie]),_:1}),e(y,{value:"favorite",to:"/u-favorite"},{default:a(()=>[e(u,null,{default:a(()=>[c("mdi-heart")]),_:1}),Ne]),_:1}),e(y,{value:"nearby",to:"/u-read"},{default:a(()=>[e(u,null,{default:a(()=>[c("mdi-eye-outline")]),_:1}),Le]),_:1})]),_:1})):b("",!0)]),default:a(()=>[_e(l.$slots,"default",{},void 0,!0)]),_:2},[v(o)?void 0:{name:"vertical-nav-content",fn:a(()=>[e(m,{item:{title:"Dashboard",icon:"bx-home",to:"/user-dashboard"}}),e(m,{item:{title:"Cari File",icon:"bx-file-find",to:"/u-search"}}),e(m,{item:{title:"Favorite",icon:"bx-heart",to:"/u-favorite"}}),e(m,{item:{title:"Riwayat",icon:"bx-show",to:"/u-read"}}),v(s).position.approval_level_id!=1?(n(),r(A,{key:0,item:{heading:"Pengajuan Draft"}})):b("",!0),v(s).position.approval_level_id!=1?(n(),r(m,{key:1,item:{title:"Draft",icon:"bx-file",to:"/u-draft"}})):b("",!0)]),key:"0"}]),1024)}}},$e=$(Pe,[["__scopeId","data-v-3cf90104"]]);const Qe={__name:"default",setup(t){return(o,s)=>{const l=k("RouterView");return n(),r($e,null,{default:a(()=>[e(l)]),_:1})}}};export{Qe as default};