"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[322],{322:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r=t(791),a="ContactForm_wrap__Z1N47",o="ContactForm_formWrap__LBMtj",i="ContactForm_formItem__dbiTg",c="ContactForm_btn__wll+u",s=t(439),u=t(420),l=t(876),m=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n},d=function(e){return e.contacts},f=function(e){var n=function(e){return e.filter}(e),t=d(e).items;if(!n)return t;var r=n.toLowerCase();return t.filter((function(e){return e.name.toLocaleLowerCase().includes(r)}))},h=t(184),p=function(){var e=(0,r.useState)(""),n=(0,s.Z)(e,2),t=n[0],a=n[1],f=(0,r.useState)(""),p=(0,s.Z)(f,2),v=p[0],_=p[1],j=(0,u.v9)(d).items,x=(0,u.I0)(),C=(0,r.useMemo)((function(){return m()}),[]),g=(0,r.useMemo)((function(){return m()}),[]);return(0,h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),function(e){var n=e.toLowerCase();return j.find((function(e){return e.name.toLocaleLowerCase()===n}))}(t))return alert("".concat(t," is already in contacts"));x((0,l.G3)({name:t,phone:v})),a(""),_("")},className:o,children:[(0,h.jsxs)("label",{htmlFor:C,className:i,children:["Name",(0,h.jsx)("input",{onChange:function(e){var n=e.target.value;a(n)},value:t,name:"name",required:!0,id:C,placeholder:"Name",type:"text"})]}),(0,h.jsxs)("label",{htmlFor:g,className:i,children:["Phone",(0,h.jsx)("input",{onChange:function(e){var n=e.target.value;_(n)},value:v,name:"phone",id:g,placeholder:"Phone",required:!0})]}),(0,h.jsx)("button",{type:"submit",className:c,children:"Add contact"})]})},v=t(895),_="ContactList_list__csErn",j="ContactList_filter__26Vdf",x="ContactList_btnDel__M+VR9",C=function(){var e=(0,u.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{children:"Find contacts by name"}),(0,h.jsx)("input",{className:j,onChange:function(n){var t=n.target;e((0,v.K)(t.value))},name:"filter",placeholder:"Search"})]})},g=function(e){var n=e.name,t=e.phone,r=e.id,a=(0,u.I0)();return(0,h.jsxs)("li",{id:r,children:[n,": ",t," ",(0,h.jsx)("button",{className:x,onClick:function(){return function(e){var n=Number(e);a((0,l.ku)(n))}(r)},type:"button",children:"Delete"})]},r)},b=function(){var e=(0,u.v9)(d),n=e.isLoading,t=e.error,a=(0,u.I0)();(0,r.useEffect)((function(){a((0,l.m$)())}),[a]);var o=(0,u.v9)(f),i=o.map((function(e){return(0,h.jsx)(g,{id:e.id,phone:e.phone,name:e.name},e.id)})),c=Boolean(o.length);return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)("p",{children:"...Loading"}),t&&(0,h.jsx)("p",{children:t.message}),c&&(0,h.jsx)("ul",{className:_,children:i})]})},L=function(){return(0,h.jsxs)("div",{className:a,children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(p,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(C,{}),(0,h.jsx)(b,{})]})}}}]);
//# sourceMappingURL=322.68fff5d9.chunk.js.map