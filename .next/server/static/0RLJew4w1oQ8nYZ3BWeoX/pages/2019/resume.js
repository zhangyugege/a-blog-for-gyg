module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(2);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./component/meta.js



/* harmony default export */ var meta = (function () {
  return external_react_default.a.createElement("div", {
    className: "jsx-419816730"
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-419816730"
  }), external_react_default.a.createElement("link", {
    href: "/atom",
    type: "application/atom+xml",
    rel: "alternate",
    title: "Guillermo Rauch",
    className: "jsx-419816730"
  })), external_react_default.a.createElement(style_default.a, {
    styleId: "419816730",
    css: ["*{margin:0;box-sizing:border-box;line-height:20px;}", "bold{font-weight:bold;}", "body{font:13px Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;}", "a{color:#22BAD9;-webkit-tap-highlight-color:rgba(0,0,0,0);}", "a:hover{color:#fff;background:#22BAD9;-webkit-text-decoration:none;text-decoration:none;}", "#nprogress{pointer-events:none;}", "#nprogress .bar{background:#22BAD9;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}", "#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #22BAD9,0 0 5px #22BAD9;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}"]
  }));
});
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);

// CONCATENATED MODULE: ./component/main.js




/* harmony default export */ var main = __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", {
    className: "jsx-942610349" + " " + "main"
  }, external_react_default.a.createElement("br", {
    className: "jsx-942610349"
  }), children, external_react_default.a.createElement(meta, null), external_react_default.a.createElement(style_default.a, {
    styleId: "942610349",
    css: [".main.jsx-942610349{padding:25px 50px;}", ".logo.jsx-942610349{padding-bottom:50px;}", "a.jsx-942610349{-webkit-text-decoration:none;text-decoration:none;}", "@media (max-width:500px){.main.jsx-942610349{padding:25px 15px;}.logo.jsx-942610349{padding-bottom:20px;}}"]
  }));
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_main_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    className: "blog"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", null, "\u5218\u6668"), "(zhangyugege)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", null, "\u6559\u80B2\u80CC\u666F:"), " \u54C8\u5C14\u6EE8\u5DE5\u4E1A\u5927\u5B66 2017\u5C4A \u672C\u79D1 \u4FE1\u606F\u5B89\u5168"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", null, "\u83B7\u5956\u7ECF\u5386:"), " \u534E\u4E3A\u591A\u6821\u7F16\u7A0B\u5927\u8D5B\u4E09\u7B49\u5956 / \u6821\u4FE1\u606F\u5B89\u5168\u4E13\u4E1A\u7F16\u7A0B\u7ADE\u8D5B\u4E00\u7B49\u5956 / com2us\u676F\u6E38\u620F\u8BBE\u8BA1\u5927\u8D5B\u4E09\u7B49\u5956"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", null, "\u5DE5\u4F5C\u7ECF\u9A8C:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "2018.10--\u81F3\u4ECA ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", null, "\u6EF4\u6EF4\u51FA\u884C"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u9AD8\u7EA7\u8F6F\u4EF6\u5F00\u53D1\u5DE5\u7A0B\u5E08"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u8D1F\u8D23 \u6EF4\u6EF4\u5916\u5356 \u79FB\u52A8\u7AEF\u548CPC\u7AEF\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xA0\xA0> \u79FB\u52A8\u7AEF: \u7528\u6237\u7AEF\u56FD\u5185\u4E1A\u52A1webapp,\u56FD\u9645\u5316\u4E1A\u52A1H5\u843D\u5730\u9875,\u8425\u9500\u6D3B\u52A8\u9875\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xA0\xA0> PC\u7AEF: \u6570\u636E\u53EF\u89C6\u5316\u5E73\u53F0\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6280\u672F\u6808: vue; vuex;\u81EA\u7814\u7EC4\u4EF6\u5E93cube-ui; webpack; echarts\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6280\u672F\u4EA7\u51FA:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xA0\xA0> css: \u652F\u6301\u9002\u914D\u591A\u79CD\u89C6\u89C9\u57FA\u51C6\u7684postcss\u63D2\u4EF6: @didi/postcss-plugin-px2rem-multiple; \u4E00\u4E2A\u5168\u5C40\u6DFB\u52A0namespace\u7684postcss\u63D2\u4EF6: @didi/postcss-global-namespace", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xA0\xA0> webpack: webpack1 -> \u591A\u7F16\u8BD1\u73AF\u5883webpack4\u914D\u7F6E\u5347\u7EA7", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xA0\xA0> \u7EC4\u4EF6: \u652F\u6301charts\u7C7B\u578B\u7EBF\u4E0A\u5207\u6362\u7684charts\u5361\u7247\u751F\u6210\u5668"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "2017.7--2018.9 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", null, "\u7F51\u6613"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u8D1F\u8D23 \u7F51\u6613\u4E91\u97F3\u4E50 \u684C\u9762\u5E94\u7528\u548C\u89C6\u9891\u6D41\u4E1A\u52A1\u7EBF\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xA0\xA0> \u684C\u9762\u5E94\u7528: \u4E91\u97F3\u4E50PC\u7AEF,MAC\u7AEF\u6DF7\u5408\u5E94\u7528\u7684\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xA0\xA0> PC\u7AEF: \u8D1F\u8D23\u89C6\u9891\u6D41\u4E1A\u52A1\u7EBF\u7528\u6237\u7AEF\u4E91\u97F3\u4E50\u89C6\u9891\u521B\u4F5C\u4E2D\u5FC3(", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "https://music.163.com/st/creator/#/"), "),\u8FD0\u8425\u7AEF\u89C6\u9891\u8FD0\u8425\u540E\u53F0;\u5BF9\u5916\u5DE5\u5177NEI\u63A5\u53E3\u7BA1\u7406\u5E73\u53F0(", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "https://nei.netease.com/"), ");\u5185\u90E8\u5DE5\u5177\u7F51\u6613\u8BBE\u8BA1\u7BA1\u7406\u5E73\u53F0\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6280\u672F\u6808: react\u5168\u5BB6\u6876, \u516C\u53F8\u81EA\u7814\u6846\u67B6Regular, NEJ; \u81EA\u7814\u7EC4\u4EF6\u5E93MUI, RegularUI;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6280\u672F\u4EA7\u51FA:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xA0\xA0> node: \u7EC4\u4EF6\u6587\u6863\u751F\u6210\u5668:\u4E00\u952E\u751F\u6210\u7EC4\u4EF6\u6587\u6863\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xA0\xA0> \u7EC4\u4EF6: \u6A21\u62DFwindows\u83DC\u5355\u7684\u591A\u7EA7\u4E0B\u62C9\u83DC\u5355\u7EC4\u4EF6\u3002"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "2016.7--2016.10 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", null, "\u641C\u72D0"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u524D\u7AEF\u5F00\u53D1\u5B9E\u4E60\u751F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u8D1F\u8D23 \u641C\u72D0\u4E91  DomeOS\u8FD0\u7EF4\u7BA1\u7406\u5E73\u53F0 \u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6280\u672F\u6808: angular1, gulp\u3002")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", null, "\u4E2A\u4EBA\u9879\u76EE:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "2015.3--2015.4 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", null, "monsu\u5361\u724C\u6CE1\u6CE1\u9F99\u6E38\u620F"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6E38\u620F\u8BBE\u8BA1\u5E08 & \u6E38\u620F\u7814\u53D1\u5DE5\u7A0B\u5E08"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E00\u6B3E\u96C6 \u5361\u724C\u7CFB\u7EDF,\u6CE1\u6CE1\u6D88\u9664,\u602A\u7269\u5BF9\u6218,\u5BA0\u7269\u517B\u6210\u4E8E\u4E00\u4F53\u7684H5\u6E38\u620F,\u4F7F\u7528cocos2djs\u5F15\u64CE\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "http://zhangyugege.github.io/monsu-bubble-game/"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", null, "\u4E2A\u4EBA\u6280\u80FD:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u719F\u6089\u5E02\u9762\u6D41\u884C\u7684\u524D\u7AEF\u6846\u67B6:vue,react\u3002\u6253\u5305\u5DE5\u5177webpack\u53CA\u5176\u5DE5\u5177\u94FE\u3002\u4F1AH5\u6E38\u620F\u5F00\u53D1\u3002\u4F1A\u79FB\u52A8\u7AEF,PC\u7AEF,\u684C\u9762\u7AEF\u524D\u7AEF\u5F00\u53D1\u3002\u5BF9vue\u548Creact\u6B23\u8D4F\u4E2D\u7ACB\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", null, "\u793E\u4EA4\u7F51\u7AD9:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "github: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "https://github.com/zhangyugege")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0CSDN: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "https://blog.csdn.net/u014787301")));
});

/***/ })
/******/ ]);