import{_ as l,o as d,c as m,b as t,w as o,a as e,d as r,r as s}from"./app.798b97f6.js";const c={},f=e("h1",{id:"federation-users",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#federation-users","aria-hidden":"true"},"#"),r(),e("code",null,"federation/users")],-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function _(y,b){const n=s("MkApiConsole"),a=s("MkSchemaViewer"),i=s("ClientOnly");return d(),m("div",null,[f,t(n,{name:"federation/users",def:{summary:"",description:"",tags:["federation"],requireCredential:!1,req:{type:"object",properties:{host:{type:"string"},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10}},required:["host"]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"UserDetailedNotMe",$ref:"misskey://UserDetailedNotMe"}},errors:{}}}),p,t(i,null,{default:o(()=>[t(a,{schema:{type:"object",properties:{host:{type:"string"},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10}},required:["host"]}})]),_:1}),h,t(i,null,{default:o(()=>[t(a,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"UserDetailedNotMe",$ref:"misskey://UserDetailedNotMe"}}})]),_:1}),u])}var x=l(c,[["render",_],["__file","users.html.vue"]]);export{x as default};