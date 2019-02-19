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

/***/ "./pages/2019/resume.js":
/*!******************************!*\
  !*** ./pages/2019/resume.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/main.js */ "./component/main.js");
var _jsxFileName = "/Users/didi/mycodes/a-blog-for-gyg/pages/2019/resume.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_main_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "\u5218\u6668"), "(zhangyugege) "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "tel: 17357125759  email: liuchen798@163.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u6559\u80B2\u80CC\u666F:"), " \u54C8\u5C14\u6EE8\u5DE5\u4E1A\u5927\u5B66 2017\u5C4A \u672C\u79D1 \u4FE1\u606F\u5B89\u5168"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\u83B7\u5956\u7ECF\u5386:"), " \u534E\u4E3A\u591A\u6821\u7F16\u7A0B\u5927\u8D5B\u4E09\u7B49\u5956 / \u6821\u4FE1\u606F\u5B89\u5168\u4E13\u4E1A\u7F16\u7A0B\u7ADE\u8D5B\u4E00\u7B49\u5956 / com2us\u676F\u6E38\u620F\u8BBE\u8BA1\u5927\u8D5B\u4E09\u7B49\u5956"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\u5DE5\u4F5C\u7ECF\u9A8C:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "2018.10--\u81F3\u4ECA ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\u6EF4\u6EF4\u51FA\u884C"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\u9AD8\u7EA7\u8F6F\u4EF6\u5F00\u53D1\u5DE5\u7A0B\u5E08"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "\u8D1F\u8D23 \u6EF4\u6EF4\u5916\u5356 \u79FB\u52A8\u7AEF\u548CPC\u7AEF\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), "\xA0\xA0> \u79FB\u52A8\u7AEF: \u7528\u6237\u7AEF\u56FD\u5185\u4E1A\u52A1webapp,\u56FD\u9645\u5316\u4E1A\u52A1H5\u843D\u5730\u9875,\u8425\u9500\u6D3B\u52A8\u9875\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), "\xA0\xA0> PC\u7AEF: \u6570\u636E\u53EF\u89C6\u5316\u5E73\u53F0\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\u6280\u672F\u6808: vue; vuex;\u81EA\u7814\u7EC4\u4EF6\u5E93cube-ui; webpack; echarts\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\u6280\u672F\u4EA7\u51FA:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), "\xA0\xA0> css: \u652F\u6301\u9002\u914D\u591A\u79CD\u89C6\u89C9\u57FA\u51C6\u7684postcss\u63D2\u4EF6: @didi/postcss-plugin-px2rem-multiple; \u4E00\u4E2A\u5168\u5C40\u6DFB\u52A0namespace\u7684postcss\u63D2\u4EF6: @didi/postcss-global-namespace", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), "\xA0\xA0> webpack: webpack1 -> \u591A\u7F16\u8BD1\u73AF\u5883webpack4\u914D\u7F6E\u5347\u7EA7", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), "\xA0\xA0> \u7EC4\u4EF6: \u652F\u6301charts\u7C7B\u578B\u7EBF\u4E0A\u5207\u6362\u7684charts\u5361\u7247\u751F\u6210\u5668"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "2017.7--2018.9 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\u7F51\u6613"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\u8D1F\u8D23 \u7F51\u6613\u4E91\u97F3\u4E50 \u684C\u9762\u5E94\u7528\u548C\u89C6\u9891\u6D41\u4E1A\u52A1\u7EBF\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), "\xA0\xA0> \u684C\u9762\u5E94\u7528: \u4E91\u97F3\u4E50PC\u7AEF,MAC\u7AEF\u6DF7\u5408\u5E94\u7528\u7684\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), "\xA0\xA0> PC\u7AEF: \u8D1F\u8D23\u89C6\u9891\u6D41\u4E1A\u52A1\u7EBF\u7528\u6237\u7AEF\u4E91\u97F3\u4E50\u89C6\u9891\u521B\u4F5C\u4E2D\u5FC3(", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "https://music.163.com/st/creator/#/"), "),\u8FD0\u8425\u7AEF\u89C6\u9891\u8FD0\u8425\u540E\u53F0;\u5BF9\u5916\u5DE5\u5177NEI\u63A5\u53E3\u7BA1\u7406\u5E73\u53F0(", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "https://nei.netease.com/"), ");\u5185\u90E8\u5DE5\u5177\u7F51\u6613\u8BBE\u8BA1\u7BA1\u7406\u5E73\u53F0\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\u6280\u672F\u6808: react\u5168\u5BB6\u6876, \u516C\u53F8\u81EA\u7814\u6846\u67B6Regular, NEJ; \u81EA\u7814\u7EC4\u4EF6\u5E93MUI, RegularUI;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\u6280\u672F\u4EA7\u51FA:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), "\xA0\xA0> node: \u7EC4\u4EF6\u6587\u6863\u751F\u6210\u5668:\u4E00\u952E\u751F\u6210\u7EC4\u4EF6\u6587\u6863\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), "\xA0\xA0> \u7EC4\u4EF6: \u6A21\u62DFwindows\u83DC\u5355\u7684\u591A\u7EA7\u4E0B\u62C9\u83DC\u5355\u7EC4\u4EF6\u3002"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "2016.7--2016.10 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\u641C\u72D0"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\u524D\u7AEF\u5F00\u53D1\u5B9E\u4E60\u751F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u8D1F\u8D23 \u641C\u72D0\u4E91  DomeOS\u8FD0\u7EF4\u7BA1\u7406\u5E73\u53F0 \u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u6280\u672F\u6808: angular1, gulp\u3002")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "\u4E2A\u4EBA\u9879\u76EE:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "2015.3--2015.4 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "monsu\u5361\u724C\u6CE1\u6CE1\u9F99\u6E38\u620F"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u6E38\u620F\u8BBE\u8BA1\u5E08 & \u6E38\u620F\u7814\u53D1\u5DE5\u7A0B\u5E08"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\u4E00\u6B3E\u96C6 \u5361\u724C\u7CFB\u7EDF,\u6CE1\u6CE1\u6D88\u9664,\u602A\u7269\u5BF9\u6218,\u5BA0\u7269\u517B\u6210\u4E8E\u4E00\u4F53\u7684H5\u6E38\u620F,\u4F7F\u7528cocos2djs\u5F15\u64CE\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "http://zhangyugege.github.io/monsu-bubble-game/"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\u4E2A\u4EBA\u6280\u80FD:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\u719F\u6089\u5E02\u9762\u6D41\u884C\u7684\u524D\u7AEF\u6846\u67B6:vue,react\u3002\u6253\u5305\u5DE5\u5177webpack\u53CA\u5176\u5DE5\u5177\u94FE\u3002\u4F1AH5\u6E38\u620F\u5F00\u53D1\u3002\u4F1A\u79FB\u52A8\u7AEF,PC\u7AEF,\u684C\u9762\u7AEF\u524D\u7AEF\u5F00\u53D1\u3002\u5BF9vue\u548Creact\u6B23\u8D4F\u4E2D\u7ACB\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bold", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\u793E\u4EA4\u7F51\u7AD9:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "github: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "https://github.com/zhangyugege")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0CSDN: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "https://blog.csdn.net/u014787301")));
});

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/2019/resume.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/2019/resume.js */"./pages/2019/resume.js");


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
//# sourceMappingURL=resume.js.map