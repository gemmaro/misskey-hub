import{r as s,o as a,c as n,b as o,F as c,a as e,d as t}from"./app.87e5d7c8.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={},p=e("h1",{id:"note",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#note","aria-hidden":"true"},"#"),t(" Note")],-1),l=e("p",null,"Entity representing a note.",-1),h=e("h2",{id:"schema",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#schema","aria-hidden":"true"},"#"),t(" Schema")],-1);function m(_,u){const r=s("MkSchemaViewer");return a(),n(c,null,[p,l,h,o(r,{schema:{type:"object",properties:{id:{type:"string"},createdAt:{type:"string"},text:{type:"string",nullable:!0},cw:{type:"string",nullable:!0},user:{$ref:"misskey://User"},userId:{type:"string"},visibility:{type:"string",enum:["public","home","followers","specified"]}}}})],64)}var g=i(d,[["render",m]]);export{g as default};