/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toy-react */ \"./toy-react.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Mycomponent = /*#__PURE__*/function (_Component) {\n  _inherits(Mycomponent, _Component);\n\n  var _super = _createSuper(Mycomponent);\n\n  function Mycomponent() {\n    _classCallCheck(this, Mycomponent);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Mycomponent, [{\n    key: \"render\",\n    value: function render() {\n      return _toy_react__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, \"hello\");\n    } // 方法提取出去了\n\n  }]);\n\n  return Mycomponent;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // let a = < Mycomponent name = \"a\" / > ;\n// 在javascript中把Dom元素当做一等公民去使用，可以做函数、方法参数，可以做返回值可以赋值给变量\n// let a = <div name=\"a\">\n//   <span>hello</span>\n//   <span>haha</span>\n//   <span>huhu</span>\n// </div>\n\n\nvar a = _toy_react__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Mycomponent, {\n  name: \"a\"\n});\nconsole.log(a);\n_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].render(a, document.body);\n/** \r\n * \r\n * \r\n * let a = <div name=\"a\">\r\n  <span>hello</span>\r\n  <span>haha</span>\r\n  <span>huhu</span>\r\n</div>\r\n\r\nconsole.log(a)\r\n\r\ndocument.body.appendChild(a)\r\n\r\n\r\n * 上面代码等价于\r\n * var a = _toy_react__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\r\n  name: \"a\"\r\n}, \r\n_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"span\", null, \"hello\"), _toy_react__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"span\", null, \"haha\"), _toy_react__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"span\", null, \"huhu\"));\r\n\r\nconsole.log(a);\r\ndocument.body.appendChild(a);\r\n * \r\n*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! exports provided: Component, ToyReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToyReact\", function() { return ToyReact; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 给type一个wrapper来处理\nvar Elementwrapper = /*#__PURE__*/function () {\n  function Elementwrapper(type) {\n    _classCallCheck(this, Elementwrapper);\n\n    this.root = document.createElement(type);\n  }\n\n  _createClass(Elementwrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.root.setAttribute(name, value);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      // 不是真实child是虚拟child\n      vchild.mounTo(this.root);\n    }\n  }, {\n    key: \"mounTo\",\n    value: function mounTo(parent) {\n      // 真正的parent元素\n      parent.appendChild(this.root); // 讲生命周期时会大幅修改这里的代码\n    }\n  }]);\n\n  return Elementwrapper;\n}();\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    // 提取公共方法\n    value: function setAttribute(name, value) {\n      // 虚拟dom上的属性\n      this[name] = value;\n    }\n  }, {\n    key: \"mounTo\",\n    value: function mounTo(parent) {\n      var vdom = this.render();\n      vdom.mounTo(parent);\n    }\n  }]);\n\n  return Component;\n}();\n\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(content) {\n    _classCallCheck(this, TextWrapper);\n\n    this.root = document.createTextNode(content);\n  }\n\n  _createClass(TextWrapper, [{\n    key: \"mounTo\",\n    value: function mounTo(parent) {\n      // 真正的parent元素\n      // debugger\n      parent.appendChild(this.root); // 讲生命周期时会大幅修改这里的代码\n    }\n  }]);\n\n  return TextWrapper;\n}();\n\nvar ToyReact = {\n  // type 可能是string（普通标签）、class\n  // attributes 属性\n  // children 子元素 数目不定\n  createElement: function createElement(type, attributes) {\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    // debugger\n    console.log(arguments); // 参数\n\n    var element;\n\n    if (typeof type === 'string') {\n      // 普通元素\n      element = new Elementwrapper(type);\n    } else {\n      // 虚拟dom\n      element = new type();\n    }\n\n    console.log(element, 'element'); // let element = document.createElement(type)\n\n    for (var attr in attributes) {\n      element.setAttribute(attr, attributes[attr]);\n    }\n\n    for (var _i = 0, _children = children; _i < _children.length; _i++) {\n      var child = _children[_i];\n\n      // 可能为字符串\n      if (typeof child === 'string') {\n        child = new TextWrapper(child);\n      }\n\n      element.appendChild(child);\n    } // document.body.appendChild(element)\n\n\n    return element;\n  },\n  render: function render(vdom, element) {\n    vdom.mounTo(element); // 设计一个mounto方法 vdom里面去做mounto这件事情\n    // element.appendChild(vdom) // 如果是实Dom\n  }\n};\n\n//# sourceURL=webpack:///./toy-react.js?");

/***/ })

/******/ });