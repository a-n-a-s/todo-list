(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),i=n(8),a=n.n(i),d=(n(15),n(7)),r=n(3),s=n(1);var u=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(r.a)(e,2),c=n[0],i=n[1],a=function(t){i(t.target.value)},d=Object(o.useRef)(null);Object(o.useEffect)((function(){d.current.focus()}));var u=function(e){e.preventDefault(),t.onSumbit({id:Date.now(),text:c}),i("")};return Object(s.jsx)("form",{className:"todo-form",onSubmit:u,children:t.edit?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",placeholder:"Update Todo",name:"text",value:c,className:"todo-input edit",onChange:a,ref:d}),Object(s.jsx)("button",{className:"todo-button edit",onClick:u,children:"Update"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",placeholder:"Add Todo",name:"text",value:c,className:"todo-input",onChange:a,ref:d}),Object(s.jsx)("button",{className:"todo-button",onClick:u,children:"Add Todo"})]})})},l=n(9),j=n(10);var b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,i=t.updateTodo,a=Object(o.useState)({id:null,value:""}),d=Object(r.a)(a,2),b=d[0],f=d[1];return b.id?Object(s.jsx)(u,{edit:b,onSumbit:function(t){i(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(s.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(s.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(s.jsxs)("div",{className:"icons",children:[Object(s.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(s.jsx)(j.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"What's up for Today?"}),Object(s.jsx)(u,{onSumbit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(d.a)(n));c(e)}}}),Object(s.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(d.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var m=function(){return Object(s.jsx)("div",{className:"todo-app",children:Object(s.jsx)(f,{})})};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c461820c.chunk.js.map