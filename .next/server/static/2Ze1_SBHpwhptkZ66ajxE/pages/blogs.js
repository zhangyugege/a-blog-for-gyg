module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./posts.js
/* harmony default export */ var posts = ([{
  id: 'my-first-blog',
  date: '2019-01-19',
  title: 'hello my blogs'
}]);
// EXTERNAL MODULE: ./component/main.js + 1 modules
var main = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/blogs.js





/* harmony default export */ var blogs = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(main["a" /* default */], {
    className: "posts"
  }, posts.map(function (_ref) {
    var id = _ref.id,
        date = _ref.date,
        title = _ref.title;
    return external_react_default.a.createElement(blogs_Post, {
      id: id,
      key: id,
      date: date,
      title: title
    });
  }), external_react_default.a.createElement(style_default.a, {
    styleId: "386733338",
    css: [".posts.jsx-386733338{margin:30px;}"]
  }));
});

var blogs_Post = function Post(_ref2) {
  var id = _ref2.id,
      date = _ref2.date,
      title = _ref2.title;
  return external_react_default.a.createElement("div", {
    className: "jsx-1229270080" + " " + "post"
  }, external_react_default.a.createElement("span", {
    className: "jsx-1229270080" + " " + "date"
  }, date), external_react_default.a.createElement(link_default.a, {
    prefetch: true,
    href: "/".concat(new Date(date).getFullYear(), "/").concat(id)
  }, external_react_default.a.createElement("a", {
    className: "jsx-1229270080"
  }, title)), external_react_default.a.createElement(style_default.a, {
    styleId: "1229270080",
    css: [".post.jsx-1229270080{margin-bottom:10px;}", ".date.jsx-1229270080{display:inline-block;width:140px;text-align:right;margin-right:30px;color:#999;}", "a.jsx-1229270080{-webkit-text-decoration:none;text-decoration:none;}", "@media (max-width:500px){.post.jsx-1229270080{margin-bottom:15px;}.date.jsx-1229270080{display:block;width:inherit;text-align:inherit;font-size:11px;color:#ccc;margin-bottom:5px;}}"]
  }));
};

/***/ })
/******/ ]);