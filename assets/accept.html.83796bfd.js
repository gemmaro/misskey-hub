import{_ as n,o as i,c as h,b as r,w as c,a as e,d as s,e as l,r as a}from"./app.798b97f6.js";const _={},p=e("h1",{id:"following-requests-accept",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#following-requests-accept","aria-hidden":"true"},"#"),s(),e("code",null,"following/requests/accept")],-1),u=e("p",null,"Credential required.",-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),b=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),m=l('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-user" tabindex="-1"><a class="header-anchor" href="#no-such-user" aria-hidden="true">#</a> NO_SUCH_USER</h3><p>ID: <code>66ce1645-d66c-46bb-8b79-96739af885bd</code></p><h3 id="no-follow-request" tabindex="-1"><a class="header-anchor" href="#no-follow-request" aria-hidden="true">#</a> NO_FOLLOW_REQUEST</h3><p>ID: <code>bcde4f8b-0913-4614-8881-614e522fb041</code></p>',5);function q(w,x){const d=a("MkApiConsole"),t=a("MkSchemaViewer"),o=a("ClientOnly");return i(),h("div",null,[p,u,r(d,{name:"following/requests/accept",def:{summary:"",description:"",tags:["following"],requireCredential:!0,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]},res:{},errors:{"66ce1645-d66c-46bb-8b79-96739af885bd":{id:"66ce1645-d66c-46bb-8b79-96739af885bd",code:"NO_SUCH_USER",description:""},"bcde4f8b-0913-4614-8881-614e522fb041":{id:"bcde4f8b-0913-4614-8881-614e522fb041",code:"NO_FOLLOW_REQUEST",description:""}}}}),f,r(o,null,{default:c(()=>[r(t,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]}})]),_:1}),b,r(o,null,{default:c(()=>[r(t,{schema:{}})]),_:1}),m])}var O=n(_,[["render",q],["__file","accept.html.vue"]]);export{O as default};