(this.webpackJsonpbasicreactapp=this.webpackJsonpbasicreactapp||[]).push([[0],{14:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(7),s=n.n(o),l=n(2),r=(n.p,n(14),n(0));function i(e){return Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," px-2"),children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(r.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(r.jsx)("li",{className:"nav-item active",children:Object(r.jsxs)("a",{className:"nav-a",href:"#",children:["Home ",Object(r.jsx)("span",{className:"sr-only",children:"(current)"})]})})})}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toogleMode,id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"light"===e.mode?"Enable DarkMode":"Enable LightMode"})]})]})}function b(e){var t=Object(c.useState)("Please Enter text here"),n=Object(l.a)(t,2),a=n[0],o=n[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"my-2 text-".concat("light"===e.mode?"dark":"light","  text-").concat("green"===e.colormode?"success":"danger"),children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",id:"myBox",value:a,onChange:function(e){console.log("Handle On change"),o(e.target.value)},onFocus:function(e){o(e.target.onFocus="")},rows:"10",style:{backgroundColor:"light"===e.mode?"#f8f9fa":"#212529",color:"light"===e.mode?"#000":"#fff",border:"light"===e.mode?"#000":"#fff"}})}),Object(r.jsx)("button",{className:"btn btn-primary ",onClick:function(){console.log("Handle upper case click here"+a);var e=a.toLocaleUpperCase();console.log(e),o(e)},children:"Convert to uppercase"}),Object(r.jsx)("button",{className:"btn btn-info mx-1",onClick:function(){var e=a.toLocaleLowerCase();o(e)},children:"Convert to lowercase"}),Object(r.jsx)("button",{className:"btn btn-danger mx-1",onClick:function(){o("")},children:"Clear text"}),Object(r.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){var e=a.charAt(0).toUpperCase()+a.slice();console.log(a.slice(1)),o(e)},children:"Capital First Word"}),Object(r.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){var e=a.split(" ");console.log(e),console.log(e.length);for(var t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);var n=e.join(" ");o(n)},children:"Capital First Word"}),Object(r.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy Text"}),Object(r.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){var e=a.split(/[ ]+/);o(e.join(" "))},children:"Removed Extra Space"})]}),Object(r.jsxs)("div",{className:"container my-2 text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("h1",{children:"Text summery "}),Object(r.jsxs)("p",{children:[a.split(/[ ]+/).length-1," words and ",a.length," charecter"]}),Object(r.jsxs)("p",{children:[.008*a.split(" ").length," read to one word"]}),Object(r.jsx)("h2",{children:"Preview Text ::"}),Object(r.jsx)("p",{children:a.length>0?a:"Your text is empty please write somthing in above box"})]})]})}i.defaultProps={title:"Default Props Here",abouttext:"About Us"};var d=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(null),s=Object(l.a)(o,2),d=(s[0],s[1]),h=function(e,t){d({msg:e,type:t}),setTimeout((function(){d(null)}),1500)};return Object(r.jsxs)("div",{children:[Object(r.jsx)(i,{title:"Textutils",mode:n,toogleMode:function(){"light"===n?(a("dark"),document.body.style.backgroundColor="#181b1e",h("Dark Mode has been Enbled","success"),document.title="dark mode Enables"):(a("light"),document.body.style.backgroundColor="#e3e3e3",h("Light Mode has been Enbled","success"),document.title="light mode Enables")}}),Object(r.jsx)(b,{showAlert:h,heading:"Enter text analyze below",mode:n})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};n(16),n(17),n(18);s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),h()}},[[40,1,2]]]);
//# sourceMappingURL=main.0ab7c7a8.chunk.js.map