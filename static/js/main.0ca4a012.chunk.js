(this.webpackJsonpcalculator9=this.webpackJsonpcalculator9||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Jolomi_calculator9_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_Jolomi_calculator9_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_Jolomi_calculator9_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_Users_Jolomi_calculator9_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_Jolomi_KeyPad__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_Jolomi_Output__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__),App=function(_Component){Object(C_Users_Jolomi_calculator9_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(C_Users_Jolomi_calculator9_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;Object(C_Users_Jolomi_calculator9_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={result:""},_this.buttonPressed=function(_){"="===_?_this.calculate():"C"===_?_this.reset():"CE"===_?_this.backspace():_this.setState({result:_this.state.result+_})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.reset=function(){_this.setState({result:""})},_this.calculate=function(){try{_this.setState({result:(eval(_this.state.result)||"")+""})}catch(e){_this.setState({result:"error"})}},_this}return Object(C_Users_Jolomi_calculator9_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"App",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2",{children:"This is a simple calculator made by Jolomi Dudu"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3",{children:"Using React JS"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"calc-body",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jolomi_Output__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jolomi_KeyPad__WEBPACK_IMPORTED_MODULE_6__.a,{buttonPressed:this.buttonPressed})]})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},function(_,e,t){"use strict";t.d(e,"a",(function(){return i}));var s=t(2),n=t(3),r=t(5),c=t(4),a=t(1),o=t(0),i=function(_){Object(r.a)(t,_);var e=Object(c.a)(t);function t(){var _;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(_=e.call.apply(e,[this].concat(r))).buttonPressed=function(e){_.props.buttonPressed(e.target.name)},_}return Object(n.a)(t,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{name:"(",onClick:this.buttonPressed,children:"("}),Object(o.jsx)("button",{name:"CE",onClick:this.buttonPressed,children:"CE"}),Object(o.jsx)("button",{name:")",onClick:this.buttonPressed,children:")"}),Object(o.jsx)("button",{name:"C",onClick:this.buttonPressed,children:"C"}),Object(o.jsx)("button",{name:"1",onClick:this.buttonPressed,children:"1"}),Object(o.jsx)("button",{name:"2",onClick:this.buttonPressed,children:"2"}),Object(o.jsx)("button",{name:"3",onClick:this.buttonPressed,children:"3"}),Object(o.jsx)("button",{name:"+",onClick:this.buttonPressed,children:"+"}),Object(o.jsx)("button",{name:"4",onClick:this.buttonPressed,children:"4"}),Object(o.jsx)("button",{name:"5",onClick:this.buttonPressed,children:"5"}),Object(o.jsx)("button",{name:"6",onClick:this.buttonPressed,children:"6"}),Object(o.jsx)("button",{name:"-",onClick:this.buttonPressed,children:"-"}),Object(o.jsx)("button",{name:"7",onClick:this.buttonPressed,children:"7"}),Object(o.jsx)("button",{name:"8",onClick:this.buttonPressed,children:"8"}),Object(o.jsx)("button",{name:"9",onClick:this.buttonPressed,children:"9"}),Object(o.jsx)("button",{name:"*",onClick:this.buttonPressed,children:"*"}),Object(o.jsx)("button",{name:".",onClick:this.buttonPressed,children:"."}),Object(o.jsx)("button",{name:"0",onClick:this.buttonPressed,children:"0"}),Object(o.jsx)("button",{name:"=",onClick:this.buttonPressed,children:"="}),Object(o.jsx)("button",{name:"/",onClick:this.buttonPressed,children:"/"})]})}}]),t}(a.Component)},function(_,e,t){"use strict";t.d(e,"a",(function(){return i}));var s=t(2),n=t(3),r=t(5),c=t(4),a=t(1),o=t(0),i=function(_){Object(r.a)(t,_);var e=Object(c.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"result",children:Object(o.jsx)("p",{children:this.props.result})})}}]),t}(a.Component)},,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var s=t(1),n=t.n(s),r=t(7),c=t.n(r),a=(t(15),t(8)),o=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(e){var t=e.getCLS,s=e.getFID,n=e.getFCP,r=e.getLCP,c=e.getTTFB;t(_),s(_),n(_),r(_),c(_)}))},i=t(0);c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(a.a,{})}),document.getElementById("root")),o()}],[[18,1,2]]]);
//# sourceMappingURL=main.0ca4a012.chunk.js.map