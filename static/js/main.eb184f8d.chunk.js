(this["webpackJsonpbeejee-todo-list"]=this["webpackJsonpbeejee-todo-list"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(19),r=a.n(c),i=a(10),o=a(18),u=a(4),l=Object(n.createContext)(null),j=a(9),b=a.n(j),h=a(14),d=a(20),O=a(21),m=(localStorage.getItem("token"),{baseUrl:"https://uxcandy.com/~shapoval/test-task-backend/v2",headers:{},userName:"/?developer=sumere4ny"}),x=function(){function e(t){var a=t.baseUrl,n=t.headers,s=t.userName;Object(d.a)(this,e),this._baseUrl=a,this._headers=n,this._userName=s}return Object(O.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getTasks",value:function(){var e=Object(h.a)(b.a.mark((function e(t,a,n){var s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a?"&sort_field=".concat(a)+"&sort_direction=".concat(n):"",e.next=3,fetch(this._baseUrl+this._userName+"&page=".concat(t)+s,{headers:this._headers,method:"GET"});case 3:return c=e.sent,e.abrupt("return",this._getResponseData(c));case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"createTask",value:function(){var e=Object(h.a)(b.a.mark((function e(t){var a,n,s,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,n=t.email,s=t.text,(c=new FormData).append("username",a),c.append("email",n),c.append("text",s),e.next=7,fetch("".concat(this._baseUrl,"/create").concat(this._userName),{method:"POST",headers:this._headers,body:c});case 7:return r=e.sent,e.abrupt("return",this._getResponseData(r));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"changeTask",value:function(){var e=Object(h.a)(b.a.mark((function e(t){var a,n,s,c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,n=t.text,s=t.status,c=t.token,(r=new FormData).append("status",s),r.append("token",c),r.append("text",n),e.next=7,fetch("".concat(this._baseUrl,"/edit/").concat(a),{method:"POST",headers:this._headers,body:r});case 7:return i=e.sent,e.abrupt("return",this._getResponseData(i));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),p=new x(m),f=a(2),v=a(0);var g=function(){return Object(v.jsx)("main",{className:"content",children:Object(v.jsx)("h1",{children:"Login"})})};var k=function(e){var t=e.username,a=e.message,n=e.email;return Object(v.jsxs)("div",{className:"tasklist__task",children:[Object(v.jsxs)("h2",{style:{textAlign:"center"},children:["\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ",t]}),Object(v.jsxs)("p",{children:["Email: ",Object(v.jsx)("a",{href:"mailto: ".concat(n),children:n})]}),Object(v.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(v.jsx)("p",{children:a})]})};var _=function(e){var t=e.tasks;return Object(v.jsx)(v.Fragment,{children:t.map((function(e){return Object(v.jsx)(k,{username:e.username,message:e.text,email:e.email},e.id)}))})};var S=function(e){var t=e.onSubmit,a=Object(n.useState)(""),s=Object(u.a)(a,2),c=s[0],r=s[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),l=o[0],j=o[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),d=h[0],O=h[1],m=Object(n.useState)(!1),x=Object(u.a)(m,2),p=x[0],f=x[1],g=Object(n.useState)(!0),k=Object(u.a)(g,2),_=k[0],S=k[1],N=Object(n.useState)(!0),y=Object(u.a)(N,2),T=y[0],w=y[1],C=Object(n.useState)(""),D=Object(u.a)(C,2),E=D[0],F=D[1],P=Object(n.useState)(""),U=Object(u.a)(P,2),L=U[0],I=U[1],R=Object(n.useState)(!1),A=Object(u.a)(R,2),M=A[0],q=A[1];return Object(n.useEffect)((function(){q(!!(_&&T&&l&&c))}),[l,c,_,T]),Object(n.useEffect)((function(){p&&(F(""),I(""),S(!0),w(!0))}),[p]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"button__show-form",onClick:function(){f(!p)},children:p?"\u0421\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),Object(v.jsxs)("form",{className:"task__form ".concat(p&&"task__form_visible"),onSubmit:function(e){e.preventDefault(),(l||c)&&(t({email:c,username:l,text:d}),r(""),j(""),O(""),e.target.reset())},children:[Object(v.jsx)("label",{children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(v.jsx)("input",{name:"username",id:"username",type:"text",minLength:"2",maxLength:"20",value:l,onChange:function(e){j(e.target.value),S(e.target.checkValidity()),F(e.target.validationMessage)},required:!0}),Object(v.jsx)("span",{id:"username-error",className:"task__form_input-error",children:E}),Object(v.jsx)("label",{children:"E-mail"}),Object(v.jsx)("input",{name:"email",id:"email",type:"email",minLength:"5",maxLength:"20",value:c,onChange:function(e){r(e.target.value),w(e.target.checkValidity()),I(e.target.validationMessage)},required:!0}),Object(v.jsx)("span",{id:"email-error",className:"task__form_input-error",children:L}),Object(v.jsx)("label",{children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(v.jsx)("textarea",{name:"message",type:"text",onChange:function(e){O(e.target.value)}}),Object(v.jsx)("button",{className:"task__submit",type:"submit",value:d,disabled:!M,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})]})},N=function(){var e=Object(n.useContext)(l),t=e.setSortField,a=e.setSortDirection;return Object(v.jsxs)("div",{className:"sort",children:[Object(v.jsx)("div",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(v.jsxs)("select",{onChange:function(e){return t(e.target.value)},children:[Object(v.jsx)("option",{value:"id",children:"id"}),Object(v.jsx)("option",{value:"username",children:"username"}),Object(v.jsx)("option",{value:"email",children:"email"}),Object(v.jsx)("option",{value:"status",children:"status"})]}),Object(v.jsxs)("select",{onChange:function(e){return a(e.target.value)},children:[Object(v.jsx)("option",{value:"asc",children:"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"}),Object(v.jsx)("option",{value:"desc",children:"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e"})]})]})},y=function(e){var t=e.taskTotal,a=Object(n.useContext)(l),s=a.pageNumber,c=a.setPageNumber;return t<=3?null:Object(v.jsxs)("div",{className:"pagination",children:[Object(v.jsx)("button",{onClick:function(){return c(s-1)},disabled:1===s,children:"\u041d\u0430\u0437\u0430\u0434"}),Object(v.jsxs)("div",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ",s]}),Object(v.jsx)("button",{onClick:function(){return c(s+1)},disabled:3*s>=t,children:"\u0414\u0430\u043b\u044c\u0448\u0435"})]})},T=function(e){var t=e.tasks,a=e.taskTotal,n=e.header,s=e.onSubmit;return Object(v.jsxs)("main",{className:"main",children:[Object(v.jsxs)("div",{className:"main__content",children:[Object(v.jsx)("h1",{children:n}),Object(v.jsx)(N,{}),Object(v.jsx)(_,{tasks:t}),Object(v.jsx)(y,{taskTotal:a})]}),Object(v.jsx)("div",{className:"main__sidebar",children:Object(v.jsx)(S,{onSubmit:s})})]})},w=function(e){var t=e.tasks,a=e.taskTotal,n=e.onSubmit,s=e.header;return Object(v.jsxs)(f.c,{children:[Object(v.jsx)(f.a,{path:"/",exac:!0,children:Object(v.jsx)(T,{tasks:t,taskTotal:a,onSubmit:n,header:s})}),Object(v.jsx)(f.a,{path:"/login",component:g})]})},C=function(){return Object(v.jsxs)("nav",{className:"navigation__bar",children:[Object(v.jsx)(i.b,{className:"navigation__link",to:"/",children:"\u0417\u0430\u0434\u0430\u0447\u0438"}),Object(v.jsx)(i.b,{className:"navigation__link",to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})]})};var D=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(1),r=Object(u.a)(c,2),i=r[0],j=r[1],b=Object(n.useState)(null),h=Object(u.a)(b,2),d=h[0],O=h[1],m=Object(n.useState)(null),x=Object(u.a)(m,2),f=x[0],g=x[1],k=Object(n.useState)(0),_=Object(u.a)(k,2),S=_[0],N=_[1],y=Object(n.useState)(""),T=Object(u.a)(y,2),D=T[0],E=T[1],F=Object(n.useState)([]),P=Object(u.a)(F,2),U=P[0],L=P[1];return Object(n.useEffect)((function(){p.getTasks(i,d,f).then((function(e){"ok"==e.status&&(L(Object(o.a)(e.message.tasks)),E(e.message.tasks.length?"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447:":"\u0417\u0430\u0434\u0430\u0447 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442!"),N(Number(e.message.total_task_count)))})).catch((function(e){return console.log(e)}))}),[i,S,d,f]),Object(n.useEffect)((function(){localStorage.getItem("token")&&s(!0)}),[]),Object(v.jsxs)(l.Provider,{value:{isAuth:a,setIsAuth:s,pageNumber:i,setPageNumber:j,setSortField:O,setSortDirection:g},children:[Object(v.jsx)(C,{}),Object(v.jsx)(w,{tasks:U,taskTotal:S,onSubmit:function(e){console.log(e),L([].concat(Object(o.a)(U),[e])),p.createTask(e).then((function(e){console.log(e.message),"ok"==e.status?N(S+1):E("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f")})).catch((function(e){return console.log(e)}))},header:D})]})};a(38);r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(i.a,{children:Object(v.jsx)(D,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.eb184f8d.chunk.js.map