import{_ as i,o as c,c as l,b as a,w as d,a as e,d as s,r}from"./app.798b97f6.js";const h={},m=e("h1",{id:"messaging-messages-delete",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#messaging-messages-delete","aria-hidden":"true"},"#"),s(),e("code",null,"messaging/messages/delete")],-1),_=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),s(" Errors")],-1),g=e("h3",{id:"no-such-message",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-message","aria-hidden":"true"},"#"),s(" NO_SUCH_MESSAGE")],-1),b=e("p",null,[s("ID: "),e("code",null,"54b5b326-7925-42cf-8019-130fda8b56af")],-1);function x(C,y){const o=r("MkApiConsole"),t=r("MkSchemaViewer"),n=r("ClientOnly");return c(),l("div",null,[m,_,a(o,{name:"messaging/messages/delete",def:{summary:"",description:"",tags:["messaging"],requireCredential:!0,req:{type:"object",properties:{messageId:{type:"string",format:"misskey:id"}},required:["messageId"]},res:{},errors:{"54b5b326-7925-42cf-8019-130fda8b56af":{id:"54b5b326-7925-42cf-8019-130fda8b56af",code:"NO_SUCH_MESSAGE",description:""}}}}),p,a(n,null,{default:d(()=>[a(t,{schema:{type:"object",properties:{messageId:{type:"string",format:"misskey:id"}},required:["messageId"]}})]),_:1}),f,a(n,null,{default:d(()=>[a(t,{schema:{}})]),_:1}),u,g,b])}var S=i(h,[["render",x],["__file","delete.html.vue"]]);export{S as default};