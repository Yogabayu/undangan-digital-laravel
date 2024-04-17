import{a as w,m as u}from"./VAvatar-c949dc11.js";import{r as x,o as c,c as F,a,w as t,b as l,i as p,e as d,t as S,d as T,V as C,h as f,M as g}from"./main-a0f635ce.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{V,a as B,c as I}from"./VCard-6c0ec275.js";import{V as v}from"./VTextField-62b0c032.js";import{V as U}from"./VDialog-59cdd517.js";import{V as N}from"./VForm-12a536ad.js";import{V as M,a as h}from"./VRow-dcc804f1.js";import{V as A}from"./VSelect-9ae2ff64.js";import{V as k}from"./VChip-c2c4b442.js";import{V as y}from"./VTooltip-06e35bf4.js";import"./VImg-ce066be5.js";import"./VInput-872f54a1.js";import"./index-5b9673f5.js";import"./VOverlay-98a581b7.js";import"./dialog-transition-762e9cc7.js";/* empty css              */import"./VMenu-10fdde58.js";const j={data(){return{edit:!1,userId:this.$route.params.userId,userProfile:{},dataForm:{id:null,nameDev:"",isVerified:null,device:null},items:[],searchValue:"",headers:[{text:"Nama Perangkat",value:"nameDev",sortable:!0},{text:"Detail Perangkat",value:"deviceName",sortable:!0},{text:"IP",value:"ip",sortable:!0},{text:"Status",value:"isVerified",sortable:!0},{text:"Operation",value:"operation"}],status:[{title:"Verified",value:1},{title:"not verified",value:0}]}},methods:{closeModal(){this.dataForm.id=null,this.dataForm.nameDev="",this.dataForm.isVerified=null,this.dataForm.device=null,this.edit=!1},openModal(s){this.dataForm.id=s.id,this.dataForm.nameDev=s.nameDev,this.dataForm.isVerified=parseInt(s.isVerified),this.dataForm.device=s.deviceName,this.edit=!0},goBack(){this.$router.go(-1)},async deleteDevice(s){try{if(!window.confirm("Apakah Anda yakin ingin menghapus data?"))return;const n=navigator.userAgent;let o=(await w.get("https://api.ipify.org?format=json")).data.ip;if(s.nameDev===n&&s.ip===o){alert("Anda tidak diizinkan untuk menghapus perangkat ini. Karena anda sedang menggunakan nya. Silahkan hubungi admin jika ingin menghapusnya");return}const r=await u.delete(`/deletedevices/${s.id}`);r.status===200?(this.getUserDevice(this.userId),this.$showToast("success","Berhasil",r.data.data.message)):this.$showToast("error","Sorry",r.data.data.message)}catch(e){this.$showToast("error","Sorry",e.response.data.message)}},async updateData(){try{const s=new FormData;this.dataForm.nameDev!=null&&s.append("nameDev",this.dataForm.nameDev),this.dataForm.isVerified!=null&&s.append("isVerified",this.dataForm.isVerified),s.append("_method","PUT");const e=await u.post(`/updatedevices/${this.dataForm.id}`,s,{headers:{"Content-Type":"multipart/form-data"}});if(e.status===200){const n=navigator.userAgent;this.$showToast("success","Berhasil",e.data.data.message),n==this.dataForm.device&&this.dataForm.isVerified!=1&&(localStorage.removeItem("userToken"),localStorage.removeItem("userData"),this.$router.push("/login")),this.closeModal(),this.getUserDevice(this.userId)}else this.$showToast("error","Sorry",e.data.data.message)}catch(s){this.$showToast("error","Sorry",s.response.data.message)}},async getUserDevice(s){try{const e=await u.get(`/devices/${s}`);e.status===200?(this.items=e.data.devices,this.userProfile=e.data.user):this.$showToast("error","Sorry",e.data.data.message)}catch(e){this.$showToast("error","Sorry",e.response.data.message)}}},mounted(){this.getUserDevice(this.userId)}},E={class:"d-flex justify-end mb-6"},z={class:"d-flex align-center pe-2 w-25"},K=l("p",null,"Data Kosong",-1),R=l("p",null,"loading data .....",-1),H={class:"operation-wrapper"},L={class:"d-flex justify-space-between"},O=["onClick"],q=["onClick"];function G(s,e,n,D,o,r){const _=x("EasyDataTable");return c(),F("div",null,[a(V,{class:"auth-card pa-4 pt-5"},{default:t(()=>[a(B,{class:"align-left"},{default:t(()=>[l("span",{color:"primary",onClick:e[0]||(e[0]=(...i)=>r.goBack&&r.goBack(...i)),style:{cursor:"pointer"}},[a(p,{icon:"bx-arrow-back",color:"primary",tag:"back",start:""}),d(" Back ")]),a(I,{class:"text-2xl font-weight-bold"},{default:t(()=>[d(" Daftar Perangkat User : "+S(o.userProfile.name??"-"),1)]),_:1})]),_:1}),l("div",E,[l("div",z,[a(v,{"prepend-inner-icon":"mdi-magnify",density:"compact",label:"Search","single-line":"",flat:"","hide-details":"",variant:"solo-filled",modelValue:o.searchValue,"onUpdate:modelValue":e[1]||(e[1]=i=>o.searchValue=i)},null,8,["modelValue"])])]),a(U,{modelValue:o.edit,"onUpdate:modelValue":e[5]||(e[5]=i=>o.edit=i),width:"auto"},{default:t(()=>[a(V,null,{title:t(()=>[d(" Update Data ")]),text:t(()=>[a(N,{onSubmit:T(r.updateData,["prevent"])},{default:t(()=>[a(M,null,{default:t(()=>[a(h,{md:"12",cols:"12"},{default:t(()=>[a(v,{placeholder:"Nama Perangkat",label:"Nama",modelValue:o.dataForm.nameDev,"onUpdate:modelValue":e[2]||(e[2]=i=>o.dataForm.nameDev=i),autofocus:"","prepend-icon":"mdi-devices"},null,8,["modelValue"])]),_:1}),a(h,{cols:"12",md:"12"},{default:t(()=>[a(A,{label:"Pilih Status",items:o.status,modelValue:o.dataForm.isVerified,"onUpdate:modelValue":e[3]||(e[3]=i=>o.dataForm.isVerified=i),"prepend-icon":"mdi-check",clearable:""},null,8,["items","modelValue"])]),_:1}),a(h,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[a(C,{type:"submit"},{default:t(()=>[d("Simpan")]),_:1}),l("button",{type:"button",class:"btn btn-blue",onClick:e[4]||(e[4]=(...i)=>r.closeModal&&r.closeModal(...i))}," Batal ")]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),a(_,{"show-index":"",headers:o.headers,items:o.items,"search-value":o.searchValue},{"empty-message":t(()=>[K]),loading:t(()=>[R]),"item-isVerified":t(({isVerified:i})=>[i==1?(c(),f(k,{key:0,color:"primary"},{default:t(()=>[d(" Verified ")]),_:1})):(c(),f(k,{key:1,color:"#eb4034"},{default:t(()=>[d(" Not Verified ")]),_:1}))]),"item-operation":t(i=>[l("div",H,[l("div",L,[a(y,{location:"top",text:"Edit Perangkat"},{activator:t(({props:m})=>[l("button",g(m,{onClick:b=>r.openModal(i)}),[a(p,{size:"20",icon:"bx-edit"})],16,O)]),_:2},1024),a(y,{location:"top",text:"Hapus Perangkat"},{activator:t(({props:m})=>[l("button",g(m,{onClick:b=>r.deleteDevice(i)}),[a(p,{size:"20",icon:"bx-trash"})],16,q)]),_:2},1024)])])]),_:1},8,["headers","items","search-value"])]),_:1})])}const ue=P(j,[["render",G]]);export{ue as default};