import{_ as i,o as c,c as l,b as a,w as o,a as e,d as t,r}from"./app.798b97f6.js";const h={},_=e("h1",{id:"notes-translate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-translate","aria-hidden":"true"},"#"),t(),e("code",null,"notes/translate")],-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1),m=e("h3",{id:"no-such-note",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-note","aria-hidden":"true"},"#"),t(" NO_SUCH_NOTE")],-1),b=e("p",null,[t("ID: "),e("code",null,"bea9b03f-36e0-49c5-a4db-627a029f8971")],-1);function g(y,x){const d=r("MkApiConsole"),n=r("MkSchemaViewer"),s=r("ClientOnly");return c(),l("div",null,[_,a(d,{name:"notes/translate",def:{summary:"",description:"",tags:["notes"],requireCredential:!1,req:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"},targetLang:{type:"string"}},required:["noteId","targetLang"]},res:{type:"object",optional:!1,nullable:!1},errors:{"bea9b03f-36e0-49c5-a4db-627a029f8971":{id:"bea9b03f-36e0-49c5-a4db-627a029f8971",code:"NO_SUCH_NOTE",description:""}}}}),p,a(s,null,{default:o(()=>[a(n,{schema:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"},targetLang:{type:"string"}},required:["noteId","targetLang"]}})]),_:1}),f,a(s,null,{default:o(()=>[a(n,{schema:{type:"object",optional:!1,nullable:!1}})]),_:1}),u,m,b])}var k=i(h,[["render",g],["__file","translate.html.vue"]]);export{k as default};