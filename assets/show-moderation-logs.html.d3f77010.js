import{_ as n,o as d,c as p,b as a,w as o,a as e,d as t,r as s}from"./app.798b97f6.js";const f={},m=e("h1",{id:"admin-show-moderation-logs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-show-moderation-logs","aria-hidden":"true"},"#"),t(),e("code",null,"admin/show-moderation-logs")],-1),u=e("p",null,"Credential required.",-1),c=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),y=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function _(b,g){const i=s("MkApiConsole"),l=s("MkSchemaViewer"),r=s("ClientOnly");return d(),p("div",null,[m,u,a(i,{name:"admin/show-moderation-logs",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},createdAt:{type:"string",optional:!1,nullable:!1,format:"date-time"},type:{type:"string",optional:!1,nullable:!1},info:{type:"object",optional:!1,nullable:!1},userId:{type:"string",optional:!1,nullable:!1,format:"id"},user:{type:"object",optional:!1,nullable:!1,ref:"UserDetailed",$ref:"misskey://UserDetailed"}},required:["id","createdAt","type","info","userId","user"]}},errors:{}}}),c,a(r,null,{default:o(()=>[a(l,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]}})]),_:1}),h,a(r,null,{default:o(()=>[a(l,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},createdAt:{type:"string",optional:!1,nullable:!1,format:"date-time"},type:{type:"string",optional:!1,nullable:!1},info:{type:"object",optional:!1,nullable:!1},userId:{type:"string",optional:!1,nullable:!1,format:"id"},user:{type:"object",optional:!1,nullable:!1,ref:"UserDetailed",$ref:"misskey://UserDetailed"}},required:["id","createdAt","type","info","userId","user"]}}})]),_:1}),y])}var x=n(f,[["render",_],["__file","show-moderation-logs.html.vue"]]);export{x as default};