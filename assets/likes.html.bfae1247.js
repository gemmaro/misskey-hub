import{_ as n,o as d,c as p,b as t,w as i,a as e,d as a,r}from"./app.798b97f6.js";const c={},m=e("h1",{id:"i-gallery-likes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-gallery-likes","aria-hidden":"true"},"#"),a(),e("code",null,"i/gallery/likes")],-1),f=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),y=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),h=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function _(b,k){const o=r("MkApiConsole"),s=r("MkSchemaViewer"),l=r("ClientOnly");return d(),p("div",null,[m,f,t(o,{name:"i/gallery/likes",def:{summary:"",description:"",tags:["account"],requireCredential:!0,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},post:{type:"object",optional:!1,nullable:!1,ref:"GalleryPost",$ref:"misskey://GalleryPost"}},required:["id","post"]}},errors:{}}}),u,t(l,null,{default:i(()=>[t(s,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]}})]),_:1}),y,t(l,null,{default:i(()=>[t(s,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},post:{type:"object",optional:!1,nullable:!1,ref:"GalleryPost",$ref:"misskey://GalleryPost"}},required:["id","post"]}}})]),_:1}),h])}var x=n(c,[["render",_],["__file","likes.html.vue"]]);export{x as default};