import{_ as l,o as d,c as m,b as t,w as n,a as e,d as r,r as a}from"./app.798b97f6.js";const c={},u=e("h1",{id:"mute-list",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mute-list","aria-hidden":"true"},"#"),r(),e("code",null,"mute/list")],-1),p=e("p",null,"Credential required.",-1),h=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function y(b,k){const o=a("MkApiConsole"),s=a("MkSchemaViewer"),i=a("ClientOnly");return d(),m("div",null,[u,p,t(o,{name:"mute/list",def:{summary:"",description:"",tags:["account"],requireCredential:!0,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:30},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Muting",$ref:"misskey://Muting"}},errors:{}}}),h,t(i,null,{default:n(()=>[t(s,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:30},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]}})]),_:1}),f,t(i,null,{default:n(()=>[t(s,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Muting",$ref:"misskey://Muting"}}})]),_:1}),_])}var x=l(c,[["render",y],["__file","list.html.vue"]]);export{x as default};