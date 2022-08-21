import{_ as s,o as m,c as l,b as t,w as o,a as e,d as r,r as a}from"./app.798b97f6.js";const u={},d=e("h1",{id:"charts-drive",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#charts-drive","aria-hidden":"true"},"#"),r(),e("code",null,"charts/drive")],-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),y=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),h=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function _(b,f){const c=a("MkApiConsole"),n=a("MkSchemaViewer"),i=a("ClientOnly");return m(),l("div",null,[d,t(c,{name:"charts/drive",def:{summary:"",description:"",tags:["charts"],requireCredential:!1,req:{type:"object",properties:{span:{type:"string",enum:["day","hour"]},limit:{type:"integer",minimum:1,maximum:500,default:30},offset:{type:"integer",nullable:!0,default:null}},required:["span"]},res:{type:"object",properties:{"local.incCount":{type:"array",items:{type:"number"}},"local.incSize":{type:"array",items:{type:"number"}},"local.decCount":{type:"array",items:{type:"number"}},"local.decSize":{type:"array",items:{type:"number"}},"remote.incCount":{type:"array",items:{type:"number"}},"remote.incSize":{type:"array",items:{type:"number"}},"remote.decCount":{type:"array",items:{type:"number"}},"remote.decSize":{type:"array",items:{type:"number"}}},required:["local.incCount","local.incSize","local.decCount","local.decSize","remote.incCount","remote.incSize","remote.decCount","remote.decSize"]},errors:{}}},null,8,["def"]),p,t(i,null,{default:o(()=>[t(n,{schema:{type:"object",properties:{span:{type:"string",enum:["day","hour"]},limit:{type:"integer",minimum:1,maximum:500,default:30},offset:{type:"integer",nullable:!0,default:null}},required:["span"]}})]),_:1}),y,t(i,null,{default:o(()=>[t(n,{schema:{type:"object",properties:{"local.incCount":{type:"array",items:{type:"number"}},"local.incSize":{type:"array",items:{type:"number"}},"local.decCount":{type:"array",items:{type:"number"}},"local.decSize":{type:"array",items:{type:"number"}},"remote.incCount":{type:"array",items:{type:"number"}},"remote.incSize":{type:"array",items:{type:"number"}},"remote.decCount":{type:"array",items:{type:"number"}},"remote.decSize":{type:"array",items:{type:"number"}}},required:["local.incCount","local.incSize","local.decCount","local.decSize","remote.incCount","remote.incSize","remote.decCount","remote.decSize"]}},null,8,["schema"])]),_:1}),h])}var S=s(u,[["render",_],["__file","drive.html.vue"]]);export{S as default};