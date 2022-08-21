import{_ as n,o as c,c as l,b as r,w as t,a as e,d as s,e as h,r as a}from"./app.798b97f6.js";const f={},p=e("h1",{id:"drive-files-show",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#drive-files-show","aria-hidden":"true"},"#"),s(),e("code",null,"drive/files/show")],-1),_=e("p",null,"Credential required.",-1),b=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),m=h('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-file" tabindex="-1"><a class="header-anchor" href="#no-such-file" aria-hidden="true">#</a> NO_SUCH_FILE</h3><p>ID: <code>067bc436-2718-4795-b0fb-ecbe43949e31</code></p><h3 id="access-denied" tabindex="-1"><a class="header-anchor" href="#access-denied" aria-hidden="true">#</a> ACCESS_DENIED</h3><p>ID: <code>25b73c73-68b1-41d0-bad1-381cfdf6579f</code></p>',5);function y(C,v){const o=a("MkApiConsole"),i=a("MkSchemaViewer"),d=a("ClientOnly");return c(),l("div",null,[p,_,r(o,{name:"drive/files/show",def:{summary:"",description:"",tags:["drive"],requireCredential:!0,req:{type:"object",anyOf:[{properties:{fileId:{type:"string",format:"misskey:id"}},required:["fileId"]},{properties:{url:{type:"string"}},required:["url"]}]},res:{type:"object",optional:!1,nullable:!1,ref:"DriveFile",$ref:"misskey://DriveFile"},errors:{"067bc436-2718-4795-b0fb-ecbe43949e31":{id:"067bc436-2718-4795-b0fb-ecbe43949e31",code:"NO_SUCH_FILE",description:""},"25b73c73-68b1-41d0-bad1-381cfdf6579f":{id:"25b73c73-68b1-41d0-bad1-381cfdf6579f",code:"ACCESS_DENIED",description:""}}}}),b,r(d,null,{default:t(()=>[r(i,{schema:{type:"object",anyOf:[{properties:{fileId:{type:"string",format:"misskey:id"}},required:["fileId"]},{properties:{url:{type:"string"}},required:["url"]}]}})]),_:1}),u,r(d,null,{default:t(()=>[r(i,{schema:{type:"object",optional:!1,nullable:!1,ref:"DriveFile",$ref:"misskey://DriveFile"}})]),_:1}),m])}var k=n(f,[["render",y],["__file","show.html.vue"]]);export{k as default};