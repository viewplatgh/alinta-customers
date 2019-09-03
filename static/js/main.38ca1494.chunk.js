(window["webpackJsonpalinta-customers"]=window["webpackJsonpalinta-customers"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){e.exports=a(60)},50:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(24),s=a.n(c),o=a(11),l=a(13),i=a(40),u=(a(50),a(51),a(36),a(15));function m(){return n.a.createElement("div",{className:"tile is-ancestor",style:{marginTop:20}},n.a.createElement("div",{className:"tile is-parent is-12"},n.a.createElement("div",{className:"tile is-child"},n.a.createElement("p",{className:"title"},"Alinta app by Rob Lao"),n.a.createElement(u.b,{className:"button is-default",to:"/"},"Home"))))}var d=a(28),p=a(16),f=a(17),E=a(19),v=a(18),b=a(20),h="ADD_CUSTOMER",N="SEARCH_CUSTOMER",y="REFRESH_SEARCH",O="DELETE_CUSTOMER",w="EDIT_CUSTOMER";function j(){return{type:y}}var g=function(){return(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toLowerCase()};a(37);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var S=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).state={customer:{id:g(),firstName:"",lastName:"",dateOfBirth:new Date}},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"resetForm",value:function(){this.setState({customer:{id:g(),firstName:"",lastName:"",dateOfBirth:new Date}})}},{key:"render",value:function(){var e=this;return n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.onAddCustomer(e.state.customer),e.resetForm()}},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"First Name"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",type:"text",placeholder:"First Name",value:this.state.customer.firstName,onChange:function(t){e.setState({customer:k({},e.state.customer,{firstName:t.target.value})})},required:!0}))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Last Name"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",type:"text",placeholder:"Last Name",value:this.state.customer.lastName,onChange:function(t){e.setState({customer:k({},e.state.customer,{lastName:t.target.value})})},required:!0}))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Date of Birth"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{type:"date",onChange:function(t){e.setState({customer:k({},e.state.customer,{dateOfBirth:new Date(t.target.value)})})}}))),n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"button is-link",type:"submit",value:"Add"}))))}}]),t}(r.Component),C=Object(o.b)(null,function(e){return{onAddCustomer:function(t){return e(function(e){return{type:h,payload:e}}(t))}}})(S),T=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).keywordRef=n.a.createRef(),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onDispatchSearch("")}},{key:"render",value:function(){var e,t=this,a=[];for(e=0;e<this.props.result.length;e+=4)a.push(this.props.result.slice(e,e+4));return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"section"},n.a.createElement("nav",{className:"level"},n.a.createElement("div",{className:"level-item"},n.a.createElement("div",{className:"field has-addons"},n.a.createElement("p",{className:"control"},n.a.createElement("input",{className:"input",type:"text",placeholder:"Type anything to search...",ref:this.keywordRef,size:50,onKeyDown:function(e){"Enter"===e.key&&t.keywordRef.current&&t.props.onDispatchSearch(t.keywordRef.current.value.trim())}})),n.a.createElement("p",{className:"control"},n.a.createElement("button",{className:"button is-primary",onClick:function(e){t.keywordRef.current&&t.props.onDispatchSearch(t.keywordRef.current.value.trim())}},"Search")))))),n.a.createElement("section",{className:"section"},a.map(function(e,a){return n.a.createElement("div",{className:"tile is-ancestor",key:"tiles-".concat(a)},e.map(function(e,r){return n.a.createElement("div",{className:"tile is-parent is-".concat(3),key:"tile-".concat(a,"-").concat(r)},n.a.createElement("div",{className:"tile is-child box"},n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"Full Name"),n.a.createElement("div",null,e.firstName,"\xa0",e.lastName)),n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"Date of Birth"),n.a.createElement("div",null,e.dateOfBirth.toDateString())),n.a.createElement("div",{className:"is-grouped"},n.a.createElement(u.b,{className:"button is-link",to:"/edit/".concat(e.id)},"Edit"),"\xa0",n.a.createElement("button",{className:"button is-danger",onClick:t.props.onDispatchDelete.bind(t.props,e.id)},"Delete"))))}))})))}}]),t}(r.Component),x=Object(o.b)(function(e){return{keyword:e.keyword,result:e.result}},function(e){return{onDispatchSearch:function(t){return e(function(e){return{type:N,payload:e}}(t))},onDispatchDelete:function(t){return e(function(e){return{type:O,payload:e}}(t))}}})(T),P=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"navbar"},n.a.createElement("div",{className:"container"},n.a.createElement(m,null))),n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement(C,null)),n.a.createElement("div",{className:"container"},n.a.createElement(x,null))))},R=function(e){function t(e){var a;Object(p.a)(this,t),(a=Object(E.a)(this,Object(v.a)(t).call(this,e))).customerToEdit={id:"",firstName:"",lastName:"",dateOfBirth:new Date};var r=a.props.customers.find(function(e){return e.id===a.props.customerID});if(!r)throw new Error("Cannot find the customer to edit");return a.customerToEdit.id=r.id,a.customerToEdit.firstName=r.firstName,a.customerToEdit.lastName=r.lastName,a.customerToEdit.dateOfBirth=new Date(r.dateOfBirth.toDateString()),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.onEditCustomer(e.customerToEdit),e.props.history.push("/")}},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"First Name"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",type:"text",placeholder:"First Name",required:!0,defaultValue:this.customerToEdit.firstName,onChange:function(t){e.customerToEdit.firstName=t.target.value}}))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Last Name"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",type:"text",placeholder:"Last Name",required:!0,defaultValue:this.customerToEdit.lastName,onChange:function(t){e.customerToEdit.lastName=t.target.value}}))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Date of Birth"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{type:"date",defaultValue:this.customerToEdit.dateOfBirth.toISOString().split("T")[0],onChange:function(t){e.customerToEdit.dateOfBirth=new Date(t.target.value)}}))),n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"button is-link",type:"submit",value:"Edit"}))))}}]),t}(r.Component),B=Object(o.b)(function(e){return{customers:e.customers}},function(e){return{onEditCustomer:function(t){return e(function(e){return{type:w,payload:e}}(t))}}})(R),A=function(e){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"navbar"},n.a.createElement("div",{className:"container"},n.a.createElement(m,null))),n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement(B,{customerID:e.match.params.id,history:e.history}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(21),I=a(34),L=a.n(I);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var q={keyword:"",customers:[],result:[]};var H=a(10),U=a.n(H),V=a(22),J=U.a.mark(z),W=U.a.mark(K);function z(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.c)(h,U.a.mark(function e(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.b)(j());case 2:case"end":return e.stop()}},e)}));case 2:return e.next=4,Object(V.c)(O,U.a.mark(function e(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.b)(j());case 2:case"end":return e.stop()}},e)}));case 4:case"end":return e.stop()}},J)}function K(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([z()]);case 2:case"end":return e.stop()}},W)}var $=a(12),G=Object(i.a)(),Q=Object(l.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return _({},e,{customers:[].concat(Object(F.a)(e.customers),[t.payload])});case N:var a=L.a.filter(e.customers,function(e){return e.firstName.search(t.payload)>=0||e.lastName.search(t.payload)>=0});return _({},e,{keyword:t.payload,result:Object(F.a)(a)});case y:var r=L.a.filter(e.customers,function(t){return t.firstName.search(e.keyword)>=0||t.lastName.search(e.keyword)>=0});return _({},e,{result:Object(F.a)(r)});case O:var n=Object(F.a)(e.customers);return n.splice(n.findIndex(function(e){return e.id===t.payload}),1),_({},e,{customers:n});case w:var c=t.payload,s=Object(F.a)(e.customers),o=s.findIndex(function(e){return e.id===c.id});return s.splice(o,1,c),_({},e,{customers:s});default:return e}},Object(l.a)(G));G.run(K),s.a.render(n.a.createElement(o.a,{store:Q},n.a.createElement(u.a,null,n.a.createElement($.a,{exact:!0,path:"/",component:P}),n.a.createElement($.a,{path:"/edit/:id",component:A}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.38ca1494.chunk.js.map