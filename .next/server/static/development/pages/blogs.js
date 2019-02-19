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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/main.js":
/*!***************************!*\
  !*** ./component/main.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/meta */ "./component/meta.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/didi/mycodes/a-blog-for-gyg/component/main.js";




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-942610349" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-942610349",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "942610349",
    css: ".main.jsx-942610349{padding:25px 50px;}.logo.jsx-942610349{padding-bottom:50px;}a.jsx-942610349{-webkit-text-decoration:none;text-decoration:none;}@media (max-width:500px){.main.jsx-942610349{padding:25px 15px;}.logo.jsx-942610349{padding-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRpL215Y29kZXMvYS1ibG9nLWZvci1neWcvY29tcG9uZW50L21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2dCLEFBRzJCLEFBSUUsQUFJQyxBQUtELEFBSUUsa0JBaEJ4QixBQWFFLEVBVEYsQUFhRSw4QkFURiIsImZpbGUiOiIvVXNlcnMvZGlkaS9teWNvZGVzL2EtYmxvZy1mb3ItZ3lnL2NvbXBvbmVudC9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50L21ldGEnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj48YT5naXRodWI8L2E+PC9MaW5rPlxuICAgIDwvZGl2PiAqL31cbiAgICA8YnIvPlxuXG4gICAgeyBjaGlsZHJlbiB9XG5cbiAgICA8TWV0YSAvPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1haW4ge1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogMjVweCAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/didi/mycodes/a-blog-for-gyg/component/main.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./component/meta.js":
/*!***************************!*\
  !*** ./component/meta.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/didi/mycodes/a-blog-for-gyg/component/meta.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-419816730",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-419816730",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "/atom",
    type: "application/atom+xml",
    rel: "alternate",
    title: "Guillermo Rauch",
    className: "jsx-419816730",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "419816730",
    css: "*{margin:0;box-sizing:border-box;line-height:20px;}bold{font-weight:bold;}body{font:13px Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;}a{color:#22BAD9;-webkit-tap-highlight-color:rgba(0,0,0,0);}a:hover{color:#fff;background:#22BAD9;-webkit-text-decoration:none;text-decoration:none;}#nprogress{pointer-events:none;}#nprogress .bar{background:#22BAD9;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #22BAD9,0 0 5px #22BAD9;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRpL215Y29kZXMvYS1ibG9nLWZvci1neWcvY29tcG9uZW50L21ldGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXVCLEFBR2tCLEFBTVEsQUFJbUgsQUFJdEgsQUFLSCxBQU9TLEFBSUQsQUFVTCxTQXZDUSxFQW1CSCxHQUx1QixBQTBCeEIsR0FsQ3BCLEVBd0JpQixDQUpqQixVQU51QixDQW5CSixDQXdDUCxFQVZHLFFBV0QsS0FWTixDQTlCUixLQStCUyxDQVVLLEVBNUJkLElBbUJhLE1BVWtDLEtBVGxDLFNBZGIsRUFlQSw0QkFTYyxZQUNnQyxFQXBDOUMsMklBcUNBIiwiZmlsZSI6Ii9Vc2Vycy9kaWRpL215Y29kZXMvYS1ibG9nLWZvci1neWcvY29tcG9uZW50L21ldGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bGluayBocmVmPVwiL2F0b21cIiB0eXBlPVwiYXBwbGljYXRpb24vYXRvbSt4bWxcIiByZWw9XCJhbHRlcm5hdGVcIiB0aXRsZT1cIkd1aWxsZXJtbyBSYXVjaFwiIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgeyAvKiBnbG9iYWwgc3R5bGVzICovIH1cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIGJvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgYm9keSB7XG4gICAgICAgIGZvbnQ6IDEzcHggTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubywgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlLCBzZXJpZjtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjJCQUQ5O1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzIyQkFEOTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAvKiBsb2FkaW5nIHByb2dyZXNzIGJhciBzdHlsZXMgKi9cbiAgICAgICNucHJvZ3Jlc3Mge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI25wcm9ncmVzcyAuYmFyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzIyQkFEOTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxMDMxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIH1cblxuICAgICAgI25wcm9ncmVzcyAucGVnIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMyMkJBRDksIDAgMCA1cHggIzIyQkFEOTtcbiAgICAgICAgb3BhY2l0eTogMS4wO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=/Users/didi/mycodes/a-blog-for-gyg/component/meta.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./pages/blogs.js":
/*!************************!*\
  !*** ./pages/blogs.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts */ "./posts.js");
/* harmony import */ var _component_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/main.js */ "./component/main.js");
var _jsxFileName = "/Users/didi/mycodes/a-blog-for-gyg/pages/blogs.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_main_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "posts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, _posts__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (_ref) {
    var id = _ref.id,
        date = _ref.date,
        title = _ref.title;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Post, {
      id: id,
      key: id,
      date: date,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "386733338",
    css: ".posts.jsx-386733338{margin:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRpL215Y29kZXMvYS1ibG9nLWZvci1neWcvcGFnZXMvYmxvZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJnQixBQUlxQixZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kaWRpL215Y29kZXMvYS1ibG9nLWZvci1neWcvcGFnZXMvYmxvZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgcG9zdHMgZnJvbSAnLi4vcG9zdHMnXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnQvbWFpbi5qcydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8UGFnZSBjbGFzc05hbWU9XCJwb3N0c1wiPlxuICAgIHtcbiAgICAgIHBvc3RzLm1hcCgoeyBpZCwgZGF0ZSwgdGl0bGUgfSkgPT4gKFxuICAgICAgICA8UG9zdCBcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gICAgfVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgXG4gICAgICAucG9zdHMge1xuICAgICAgICBtYXJnaW46IDMwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1BhZ2U+XG4pXG5cbmNvbnN0IFBvc3QgPSAoeyBpZCwgZGF0ZSwgdGl0bGUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+eyBkYXRlIH08L3NwYW4+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC8ke25ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCl9LyR7aWR9YH0+PGE+eyB0aXRsZSB9PC9hPjwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5wb3N0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmRhdGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=/Users/didi/mycodes/a-blog-for-gyg/pages/blogs.js */",
    __self: this
  }));
});

var Post = function Post(_ref2) {
  var id = _ref2.id,
      date = _ref2.date,
      title = _ref2.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1229270080" + " " + "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1229270080" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, date), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/".concat(new Date(date).getFullYear(), "/").concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1229270080",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1229270080",
    css: ".post.jsx-1229270080{margin-bottom:10px;}.date.jsx-1229270080{display:inline-block;width:140px;text-align:right;margin-right:30px;color:#999;}a.jsx-1229270080{-webkit-text-decoration:none;text-decoration:none;}@media (max-width:500px){.post.jsx-1229270080{margin-bottom:15px;}.date.jsx-1229270080{display:block;width:inherit;text-align:inherit;font-size:11px;color:#ccc;margin-bottom:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRpL215Y29kZXMvYS1ibG9nLWZvci1neWcvcGFnZXMvYmxvZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JnQixBQUc0QixBQUlFLEFBUUEsQUFLQSxBQUlMLGNBQ0EsS0FyQmxCLEFBaUJFLEVBYlksT0FrQlMsS0FqQkosY0FrQkEsR0FqQkMsQUFNcEIsWUFZZSxNQWpCRixLQWtCUyxNQWpCdEIsWUFrQkUiLCJmaWxlIjoiL1VzZXJzL2RpZGkvbXljb2Rlcy9hLWJsb2ctZm9yLWd5Zy9wYWdlcy9ibG9ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBwb3N0cyBmcm9tICcuLi9wb3N0cydcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudC9tYWluLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxQYWdlIGNsYXNzTmFtZT1cInBvc3RzXCI+XG4gICAge1xuICAgICAgcG9zdHMubWFwKCh7IGlkLCBkYXRlLCB0aXRsZSB9KSA9PiAoXG4gICAgICAgIDxQb3N0IFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICB9XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBcbiAgICAgIC5wb3N0cyB7XG4gICAgICAgIG1hcmdpbjogMzBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUGFnZT5cbilcblxuY29uc3QgUG9zdCA9ICh7IGlkLCBkYXRlLCB0aXRsZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj57IGRhdGUgfTwvc3Bhbj5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgLyR7bmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKX0vJHtpZH1gfT48YT57IHRpdGxlIH08L2E+PC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBvc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZGF0ZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIC5wb3N0IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=/Users/didi/mycodes/a-blog-for-gyg/pages/blogs.js */",
    __self: this
  }));
};

/***/ }),

/***/ "./posts.js":
/*!******************!*\
  !*** ./posts.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 'resume',
  date: '2019-01-19',
  title: 'hello resume'
}]);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/blogs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/blogs.js */"./pages/blogs.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=blogs.js.map