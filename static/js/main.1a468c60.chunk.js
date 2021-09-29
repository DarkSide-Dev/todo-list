(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{23:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var o,i,a,r,c,l,d,s,u,x,b=t(1),g=t.n(b),p=t(14),f=t.n(p),j=(t(23),t(12)),h=t(5),m=t(3),O=t(4),w=O.a.div(o||(o=Object(m.a)(["\n    width: 100%;\n    min-height: 100vh;\n    max-height: auto;\n    padding-bottom: 20px;\n    box-sizing: border-box;\n    padding-bottom: 20px;\n    background-color: #478dd3;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n"]))),A=O.a.h1(i||(i=Object(m.a)(["\n    font-size: 30px;\n    margin: 0;\n    padding: 20px 0;\n    font-family: monospace;\n"]))),D=O.a.div(a||(a=Object(m.a)(["\n    background-color: #8CB3DB;\n    width: 100%;\n    height: auto;\n    border-radius: 5px;\n    border-bottom: 0;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    @media(min-width: 601px) {\n        justify-content: center;\n        align-items: center;\n    }\n"]))),y=O.a.p(r||(r=Object(m.a)(["\n    background-color: ",";\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 50px;\n    border: 2px solid #555;\n    font-family: monospace;\n    cursor: pointer;\n    flex-wrap: wrap;\n    position: relative;\n\n    &:hover{\n        background-color: ",";\n    }\n\n    @media(max-width: 600px) {\n        flex: 1;\n        min-width: 100%;\n        max-width: 100%;\n        box-sizing: border-box;\n        margin: 0;\n        min-height: 100px;\n        align-items: flex-start;\n    }\n\n    @media(min-width: 601px) {\n        width: 300px;\n        margin-right: 5px;\n        margin-left: 5px;\n    } \n"])),(function(n){return n.color}),(function(n){return n.colorHover})),v=O.a.img(c||(c=Object(m.a)(["\n    width: 40px;\n    padding: 6px;\n    margin: 10px 0;\n    border-radius: 0;\n    border: 2px solid black;\n    background-color: ",";\n"])),(function(n){return n.color})),E=O.a.p(l||(l=Object(m.a)(["\n    width: 100%;\n    font-size: 20px;\n    font-family: monospace;\n    margin: 0;\n    text-align: center;\n"]))),C=O.a.button(d||(d=Object(m.a)(["\n    border: 2px solid #000;\n    border-radius: 5px;\n    padding: 15px;\n    font-size: 17px;\n    background-color: #05da15;\n    cursor: pointer;\n    flex: 1;\n    outline: none;\n\n    &:hover{\n        background-color: #04bf12;\n    }\n"]))),k=O.a.div(s||(s=Object(m.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n"]))),R=O.a.button(u||(u=Object(m.a)(["\n    background-color: ",";\n    max-width: 100%;\n    width: 300px;\n    border: 1px solid #a0a096;\n    border-top: 0;\n    cursor: pointer;\n    font-family: monospace;\n    font-size: 17px;\n    box-shadow: 0 2px 5px #173d62;\n    color: ",";\n    padding: 5px 0;\n"])),(function(n){return n.color}),(function(n){return n.textColor})),F=t(18),V=(t(28),t(2)),B=O.a.input(x||(x=Object(m.a)(["\n    border: 2px solid #000;\n    border-radius: 5px;\n    padding: 15px;\n    font-size: 17px;\n    flex: 1;\n    outline: none;\n"])));var I=function(n){var e,t=Object(b.useState)(""),o=Object(h.a)(t,2),i=o[0],a=o[1];return Object(b.useEffect)((function(){n.clear&&(a(""),n.changeClear(!1))}),[n.clear]),Object(V.jsx)(B,{type:"text",placeholder:null!==(e=n.placeholder)&&void 0!==e?e:"Digite alguma coisa...",value:i,onChange:function(e){a(e.target.value),n.setValue(e.target.value)},onKeyUp:function(e){13==e.keyCode&&i.length>0&&n.onEnter&&(n.onEnter(i),a(""))}})};var H=function(){var n=Object(b.useState)([]),e=Object(h.a)(n,2),t=e[0],o=e[1],i=Object(b.useState)(""),a=Object(h.a)(i,2),r=a[0],c=a[1],l=Object(b.useState)(!1),d=Object(h.a)(l,2),s=d[0],u=d[1],x=Object(b.useState)([new Date]),g=Object(h.a)(x,2),p=g[0],f=g[1],m=Object(b.useState)(!1),O=Object(h.a)(m,2),B=O[0],H=O[1];function L(n){if(n.length>0){var e=new Date(p).setHours(0,0,0,0),i=[].concat(Object(j.a)(t),[{title:n,date:e,done:!1}]);localStorage.setItem("list",JSON.stringify(i)),o(i),u(!0),c("")}}return Object(b.useEffect)((function(){localStorage.getItem("list")&&o(JSON.parse(localStorage.getItem("list")))}),[]),Object(V.jsxs)(w,{children:[Object(V.jsx)(A,{children:"Lista de Tarefas"}),Object(V.jsx)(F.a,{onChange:function(n){var e=(new Date).setHours(0,0,0,0);f([new Date(n)]),B&&f([new Date(e),n].sort((function(n,e){return n.getTime()-e.getTime()})))},value:p}),Object(V.jsx)(R,{onClick:function(){return H(!B)},textColor:B?"#eee":"#000",color:B?"#1D3854":"#70B8FF",children:B?"Selecionar apenas uma data":"Selecionar v\xe1rias datas"}),Object(V.jsxs)(k,{children:[Object(V.jsx)(I,{placeholder:"Adicione um item...",onEnter:L,setValue:function(n){c(n)},clear:s,changeClear:function(n){return u(n)}}),Object(V.jsx)(C,{onClick:function(){L(r)},children:"Adicionar"})]}),Object(V.jsx)("br",{}),Object(V.jsx)(D,{children:t.map((function(n,e){var i,a,r=new Date(new Date(n.date).setHours(0,0,0,0));if(i=1==p.length?new Date(new Date(p[0]).setHours(0,0,0,0)):new Date((new Date).setHours(0,0,0,0)),r=r.getDate()+""+r.getMonth()+r.getFullYear(),i=i.getDate()+""+i.getMonth()+i.getFullYear(),new Date(n.date).getTime()>=new Date(p[0]).getTime()&&new Date(n.date).getTime()<=new Date(p[1]).getTime()&&(a=!0),r==i||a){var c=new Date(n.date);return c=c.getDate()+"/"+(c.getMonth()+1)+"/"+c.getFullYear(),Object(V.jsxs)(y,{color:n.done?"#1EFA46":"#FAEB07",colorHover:n.done?"#16BA34":"#DED007",children:[Object(V.jsxs)(E,{onClick:function(){return function(n){if(t.length>0&&t[n]){var e=Object(j.a)(t);e[n].done=!e[n].done,localStorage.setItem("list",JSON.stringify(e)),o(e)}}(e)},children:[n.done&&Object(V.jsx)("del",{children:n.title}),!n.done&&n.title,Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),c]}),Object(V.jsx)(v,{color:n.done?"#0D6E1F":"#F57100",src:"data:image/png;base64,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",onClick:function(){!function(n){t.splice(n,1),localStorage.setItem("list",JSON.stringify(t));var e=JSON.parse(localStorage.getItem("list"));o(e)}(e)}})]},e)}}))})]})},L=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(e){var t=e.getCLS,o=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),o(n),i(n),a(n),r(n)}))};f.a.render(Object(V.jsx)(g.a.StrictMode,{children:Object(V.jsx)(H,{})}),document.getElementById("root")),L()}},[[32,1,2]]]);
//# sourceMappingURL=main.1a468c60.chunk.js.map