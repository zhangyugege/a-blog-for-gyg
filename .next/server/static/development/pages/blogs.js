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
var _jsxFileName = "/Users/didi/mycodes/resume/component/main.js";




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-942610349" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-942610349" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-942610349",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "github"))), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "942610349",
    css: ".main.jsx-942610349{padding:25px 50px;}.logo.jsx-942610349{padding-bottom:50px;}a.jsx-942610349{-webkit-text-decoration:none;text-decoration:none;}@media (max-width:500px){.main.jsx-942610349{padding:25px 15px;}.logo.jsx-942610349{padding-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRpL215Y29kZXMvcmVzdW1lL2NvbXBvbmVudC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUcyQixBQUlFLEFBSUMsQUFLRCxBQUlFLGtCQWhCeEIsQUFhRSxFQVRGLEFBYUUsOEJBVEYiLCJmaWxlIjoiL1VzZXJzL2RpZGkvbXljb2Rlcy9yZXN1bWUvY29tcG9uZW50L21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnQvbWV0YSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+PGE+Z2l0aHViPC9hPjwvTGluaz5cbiAgICA8L2Rpdj5cblxuICAgIHsgY2hpbGRyZW4gfVxuXG4gICAgPE1ldGEgLz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tYWluIHtcbiAgICAgICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgICAgfVxuXG4gICAgICAubG9nbyB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/didi/mycodes/resume/component/main.js */",
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
var _jsxFileName = "/Users/didi/mycodes/resume/component/meta.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3820774761",
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
    className: "jsx-3820774761",
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
    className: "jsx-3820774761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3820774761",
    css: "*{margin:0;box-sizing:border-box;}body{font:13px Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;}a{color:#22BAD9;-webkit-tap-highlight-color:rgba(0,0,0,0);}a:hover{color:#fff;background:#22BAD9;-webkit-text-decoration:none;text-decoration:none;}#nprogress{pointer-events:none;}#nprogress .bar{background:#22BAD9;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #22BAD9,0 0 5px #22BAD9;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRpL215Y29kZXMvcmVzdW1lL2NvbXBvbmVudC9tZXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVV1QixBQUdrQixBQUsySCxBQUl0SCxBQUtILEFBT1MsQUFJRCxBQVVMLFNBbENRLEVBY0gsR0FMdUIsQUEwQnhCLEtBVkgsQ0FKakIsVUFOdUIsQ0FkdkIsQ0FtQ1ksRUFWRyxRQVdELEtBVk4sTUFDQyxDQVVLLEVBNUJkLElBbUJhLE1BVWtDLEtBVGxDLFNBZGIsRUFlQSw0QkFTYyxZQUNnQyxFQXBDOUMsMklBcUNBIiwiZmlsZSI6Ii9Vc2Vycy9kaWRpL215Y29kZXMvcmVzdW1lL2NvbXBvbmVudC9tZXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cIi9hdG9tXCIgdHlwZT1cImFwcGxpY2F0aW9uL2F0b20reG1sXCIgcmVsPVwiYWx0ZXJuYXRlXCIgdGl0bGU9XCJHdWlsbGVybW8gUmF1Y2hcIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIHsgLyogZ2xvYmFsIHN0eWxlcyAqLyB9XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIGJvZHkge1xuICAgICAgICBmb250OiAxM3B4IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZSwgc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzIyQkFEOTtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMkJBRDk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLyogbG9hZGluZyBwcm9ncmVzcyBiYXIgc3R5bGVzICovXG4gICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMkJBRDk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjJCQUQ5LCAwIDAgNXB4ICMyMkJBRDk7XG4gICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/didi/mycodes/resume/component/meta.js */",
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
var _jsxFileName = "/Users/didi/mycodes/resume/pages/blogs.js";





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
    css: ".posts.jsx-386733338{margin:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRpL215Y29kZXMvcmVzdW1lL3BhZ2VzL2Jsb2dzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFJcUIsWUFDZCIsImZpbGUiOiIvVXNlcnMvZGlkaS9teWNvZGVzL3Jlc3VtZS9wYWdlcy9ibG9ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBwb3N0cyBmcm9tICcuLi9wb3N0cydcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudC9tYWluLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxQYWdlIGNsYXNzTmFtZT1cInBvc3RzXCI+XG4gICAge1xuICAgICAgcG9zdHMubWFwKCh7IGlkLCBkYXRlLCB0aXRsZSB9KSA9PiAoXG4gICAgICAgIDxQb3N0IFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICB9XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBcbiAgICAgIC5wb3N0cyB7XG4gICAgICAgIG1hcmdpbjogMzBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUGFnZT5cbilcblxuY29uc3QgUG9zdCA9ICh7IGlkLCBkYXRlLCB0aXRsZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj57IGRhdGUgfTwvc3Bhbj5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgLyR7bmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKX0vJHtpZH1gfT48YT57IHRpdGxlIH08L2E+PC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBvc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZGF0ZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIC5wb3N0IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=/Users/didi/mycodes/resume/pages/blogs.js */",
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
    css: ".post.jsx-1229270080{margin-bottom:10px;}.date.jsx-1229270080{display:inline-block;width:140px;text-align:right;margin-right:30px;color:#999;}a.jsx-1229270080{-webkit-text-decoration:none;text-decoration:none;}@media (max-width:500px){.post.jsx-1229270080{margin-bottom:15px;}.date.jsx-1229270080{display:block;width:inherit;text-align:inherit;font-size:11px;color:#ccc;margin-bottom:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRpL215Y29kZXMvcmVzdW1lL3BhZ2VzL2Jsb2dzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCZ0IsQUFHNEIsQUFJRSxBQVFBLEFBS0EsQUFJTCxjQUNBLEtBckJsQixBQWlCRSxFQWJZLE9Ba0JTLEtBakJKLGNBa0JBLEdBakJDLEFBTXBCLFlBWWUsTUFqQkYsS0FrQlMsTUFqQnRCLFlBa0JFIiwiZmlsZSI6Ii9Vc2Vycy9kaWRpL215Y29kZXMvcmVzdW1lL3BhZ2VzL2Jsb2dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL3Bvc3RzJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50L21haW4uanMnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPFBhZ2UgY2xhc3NOYW1lPVwicG9zdHNcIj5cbiAgICB7XG4gICAgICBwb3N0cy5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgICAgICAgPFBvc3QgXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIC8+XG4gICAgICApKVxuICAgIH1cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIFxuICAgICAgLnBvc3RzIHtcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9QYWdlPlxuKVxuXG5jb25zdCBQb3N0ID0gKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPnsgZGF0ZSB9PC9zcGFuPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2AvJHtuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpfS8ke2lkfWB9PjxhPnsgdGl0bGUgfTwvYT48L0xpbms+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucG9zdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kYXRlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgLnBvc3Qge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=/Users/didi/mycodes/resume/pages/blogs.js */",
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
  id: 'my-first-blog',
  date: '2019-01-19',
  title: 'hello my blogs'
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