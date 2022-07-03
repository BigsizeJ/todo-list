/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins.ttf */ "./src/fonts/Poppins.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: Poppins;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: Poppins, sans-serif;\n  color: #333;\n}\n\n.container {\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 100px 5fr;\n  color: #333;\n}\n.container .header {\n  grid-column: 1/-1;\n  background-color: dodgerblue;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n}\n.container .header h1 {\n  font-weight: 700;\n  padding: 10px;\n  margin: 0;\n  color: #e8e8e8;\n}\n.container .sidebar {\n  display: grid;\n  background-color: #e8e8e8;\n}\n.container .sidebar nav {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 20px 10px;\n}\n.container .sidebar nav .project {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 700;\n  padding: 5px 5px;\n}\n.container .btn {\n  background: none;\n  text-align: left;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  font-size: 1.25rem;\n  font-weight: 300;\n  padding: 5px 5px;\n}\n.container .btn:hover {\n  cursor: pointer;\n  background-color: rgba(143, 143, 143, 0.2);\n}\n.container .active {\n  font-weight: 400;\n  background-color: rgba(143, 143, 143, 0.3);\n}\n.container .content {\n  padding: 20px 100px;\n  width: 100%;\n  height: 100%;\n}\n.container .content .taskTitle {\n  font-size: 1.5rem;\n}\n.container .displayTask {\n  display: grid;\n  width: 100%;\n  gap: 10px;\n}\n.container .displayTask .taskItem {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 5px;\n  min-height: 35px;\n  background-color: #e8e8e8;\n}\n.container .displayTask .taskItem p {\n  margin: 0;\n  padding: 0;\n}\n.container .addButton {\n  transition: 0.5s ease;\n  background-color: dodgerblue;\n  position: fixed;\n  display: flex;\n  border-radius: 100%;\n  padding: 5px;\n  border: none;\n  right: 15px;\n  bottom: 15px;\n}\n.container .addButton img {\n  width: 45px;\n  filter: invert(99%) sepia(3%) saturate(3178%) hue-rotate(204deg) brightness(116%) contrast(99%);\n}\n.container .addButton:hover {\n  cursor: pointer;\n  transform: rotate(360deg);\n}\n.container .modal {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n.container .show {\n  display: flex;\n}\n.container .modalContent {\n  transition: 0.5s ease;\n  display: grid;\n  grid-template-columns: minmax(50px, 150px) auto;\n  grid-template-rows: min-content auto auto;\n  background-color: #fefefe;\n  min-width: 600px;\n  min-height: 350px;\n  box-shadow: 0px 1px 5px #333;\n}\n.container .modalContent .modalHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  grid-column: 1/-1;\n  padding: 5px;\n  color: #e8e8e8;\n  background-color: dodgerblue;\n}\n.container .modalContent .modalHeader h1 {\n  padding: 0;\n  margin: 0;\n  font-size: 1.5rem;\n}\n.container .modalContent .modalHeader .modalClose {\n  background-color: transparent;\n  border: none;\n  border-radius: 100%;\n  outline: none;\n}\n.container .modalContent .modalHeader .modalClose:hover {\n  cursor: pointer;\n}\n.container .modalContent .modalHeader .modalClose img {\n  width: 30px;\n  transform: rotate(225deg);\n  filter: invert(99%) sepia(3%) saturate(3178%) hue-rotate(204deg) brightness(116%) contrast(99%);\n}\n.container .modalContent .modalSidebar {\n  padding: 10px 5px;\n  grid-row: 2/-1;\n  background-color: #e8e8e8;\n  display: flex;\n  flex-direction: column;\n  place-content: flex-start;\n}\n.container .modalContent .modalSidebar button {\n  width: 100%;\n}\n.container .modalContent .modalForm {\n  grid-column: 2;\n  grid-row: 2/-1;\n}\n\n@media screen and (max-width: 850px) {\n  .container .header {\n    max-height: 75px;\n  }\n  .container .sidebar {\n    display: none;\n  }\n  .container .content {\n    width: 100vw;\n    padding: 0px 10px;\n  }\n  .container .content .displayTask {\n    padding: 0;\n    width: 100%;\n  }\n  .container .content .taskTitle {\n    margin: 0;\n    padding-bottom: 10px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ;;AAEA;EACI,oBAAA;EACA,4CAAA;AACJ;AAMA;EACI,SAAA;EACA,UAAA;EACA,gCAAA;EACA,WANQ;AAEZ;;AASA;EACI,aAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,6BAAA;EACA,WAlBQ;AAYZ;AAOI;EACI,iBAAA;EACA,4BAvBM;EAwBN,iBAAA;EACA,aAAA;EACA,mBAAA;AALR;AAMQ;EACI,gBAAA;EACA,aAAA;EACA,SAAA;EACA,cA9BG;AA0Bf;AAQI;EACI,aAAA;EACA,yBAAA;AANR;AAQQ;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,kBAAA;AANZ;AAQY;EACI,SAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;AANhB;AAWI;EACI,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;AATR;AAUQ;EACI,eAAA;EACA,0CAAA;AARZ;AAaI;EACI,gBAAA;EACA,0CAAA;AAXR;AAcI;EACI,mBAAA;EACA,WAAA;EACA,YAAA;AAZR;AAcQ;EACI,iBAAA;AAZZ;AAiBI;EACI,aAAA;EACA,WAAA;EACA,SAAA;AAfR;AAgBQ;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;EACA,gBAAA;EACA,yBA/FG;AAiFf;AAeY;EACI,SAAA;EACA,UAAA;AAbhB;AAkBI;EACI,qBAAA;EACA,4BA1GM;EA2GN,eAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AAhBR;AAiBQ;EACI,WAAA;EACA,+FAAA;AAfZ;AAkBQ;EACI,eAAA;EACA,yBAAA;AAhBZ;AAoBI;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,oCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAlBR;AAoBI;EACI,aAAA;AAlBR;AAoBI;EACI,qBAAA;EACA,aAAA;EACA,+CAAA;EACA,yCAAA;EACA,yBAAA;EACA,gBAAA;EACA,iBAAA;EACA,4BAAA;AAlBR;AAoBQ;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,iBAAA;EACA,YAAA;EACA,cAxJG;EAyJH,4BA1JE;AAwId;AAmBY;EACI,UAAA;EACA,SAAA;EACA,iBAAA;AAjBhB;AAmBY;EACI,6BAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;AAjBhB;AAkBgB;EACI,eAAA;AAhBpB;AAkBgB;EACI,WAAA;EACA,yBAAA;EACA,+FAAA;AAhBpB;AAoBQ;EACI,iBAAA;EACA,cAAA;EACA,yBAjLG;EAkLH,aAAA;EACA,sBAAA;EACA,yBAAA;AAlBZ;AAmBY;EACI,WAAA;AAjBhB;AAoBQ;EACI,cAAA;EACA,cAAA;AAlBZ;;AA0BA;EAEQ;IACI,gBAAA;EAxBV;EA0BM;IACI,aAAA;EAxBV;EA0BM;IACI,YAAA;IACA,iBAAA;EAxBV;EAyBU;IACI,UAAA;IACA,WAAA;EAvBd;EAyBU;IACI,SAAA;IACA,oBAAA;EAvBd;AACF","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: Poppins;\n    src: url('./fonts/Poppins.ttf');\n}\n\n$headerColor: dodgerblue;\n$PrimaryColor: #e8e8e8;\n$fontColor: #333;\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Poppins, sans-serif;\n    color: $fontColor;\n}\n\n\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 100px 5fr;\n    color: $fontColor;\n    .header {\n        grid-column: 1/-1;\n        background-color: $headerColor;\n        font-size: 1.20rem;\n        display: flex;\n        align-items: center;\n        h1 {\n            font-weight: 700;\n            padding: 10px;\n            margin: 0;\n            color: $PrimaryColor;\n        }\n    }\n\n    .sidebar {\n        display: grid;\n        background-color: #e8e8e8;\n\n        nav {\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n            padding: 20px 10px;\n            \n            .project {\n                margin: 0;\n                font-size: 1.30rem;\n                font-weight: 700;\n                padding: 5px 5px;\n            }\n        }\n    }\n\n    .btn{\n        background: none;\n        text-align: left;\n        border: none;\n        border-radius: 5px;\n        outline: none;\n        font-size: 1.25rem;\n        font-weight: 300;\n        padding: 5px 5px;\n        &:hover {\n            cursor: pointer;\n            background-color: rgba(143, 143, 143, .2);\n        \n        }\n    }\n\n    .active {\n        font-weight: 400;\n        background-color: rgba(143, 143, 143, .3);\n    }\n    \n    .content {\n        padding: 20px 100px;\n        width: 100%;\n        height: 100%;\n\n        .taskTitle {\n            font-size: 1.5rem;\n        }\n\n    }\n\n    .displayTask {\n        display: grid;\n        width: 100%;\n        gap: 10px;\n        .taskItem {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 0px 5px;\n            min-height: 35px;\n            background-color: $PrimaryColor;\n            p{\n                margin: 0;\n                padding: 0;\n            }\n        }\n    }\n\n    .addButton {\n        transition: .5s ease;\n        background-color: $headerColor;\n        position: fixed;\n        display: flex;\n        border-radius: 100%;\n        padding: 5px;\n        border: none;\n        right: 15px;\n        bottom: 15px;\n        img {\n            width: 45px;\n            filter: invert(99%) sepia(3%) saturate(3178%) hue-rotate(204deg) brightness(116%) contrast(99%);\n        }\n\n        &:hover {\n            cursor: pointer;\n            transform: rotate(360deg);\n        }\n    }\n\n    .modal {\n        position: absolute;\n        width: 100vw;\n        height: 100vh;\n        background-color: rgba(0, 0, 0, .5);\n        display: none;\n        align-items: center;\n        justify-content: center;\n    }\n    .show {\n        display: flex;\n    }\n    .modalContent {\n        transition: .5s ease;\n        display: grid;\n        grid-template-columns: minmax(50px, 150px) auto;\n        grid-template-rows: min-content auto auto;\n        background-color: #fefefe;\n        min-width: 600px;\n        min-height: 350px;\n        box-shadow: 0px 1px 5px $fontColor;\n      \n        .modalHeader {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            grid-column: 1/-1;\n            padding: 5px;\n            color: $PrimaryColor;\n            background-color: $headerColor;\n            h1 {\n                padding: 0;\n                margin: 0;\n                font-size: 1.5rem;\n            }\n            .modalClose {\n                background-color: transparent;\n                border: none;\n                border-radius: 100%;\n                outline: none;\n                &:hover {\n                    cursor: pointer;\n                }\n                img {\n                    width: 30px;\n                    transform: rotate(225deg);\n                    filter: invert(99%) sepia(3%) saturate(3178%) hue-rotate(204deg) brightness(116%) contrast(99%);\n                }\n            }    \n        }\n        .modalSidebar {\n            padding: 10px 5px;\n            grid-row: 2/-1;\n            background-color: $PrimaryColor;\n            display: flex;\n            flex-direction: column;\n            place-content: flex-start;\n            button {\n                width: 100%;\n            }\n        }\n        .modalForm {\n            grid-column: 2;\n            grid-row: 2/-1;\n        }\n    }\n\n\n    \n}\n\n@media screen and (max-width: 850px) {\n    .container {\n        .header {\n            max-height: 75px;\n        }\n        .sidebar {\n            display: none;\n        }\n        .content {\n            width: 100vw;   \n            padding: 0px 10px;\n            .displayTask {\n                padding: 0;\n                width: 100%;\n            }\n            .taskTitle {\n                margin: 0;\n                padding-bottom: 10px;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/App.js":
/*!****************************!*\
  !*** ./src/modules/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _Interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interface */ "./src/modules/Interface.js");
/* harmony import */ var _img_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/add.svg */ "./src/img/add.svg");




const App = (() => {
    const container = document.querySelector('.container')

    const Header = () => {
        const parent = document.createElement('div')
        const title = document.createElement('h1')
        parent.className = 'header'
        title.textContent = 'To-do'
        parent.appendChild(title)
        return parent
    }

    const Content = () => {
        const parent = document.createElement('div')
        parent.className = 'content'
        return parent
    }

    const Sidebar = () => {
        const Navbar = () => {
            const Home_Button = () => {
                const button = document.createElement('button')
                button.textContent = 'Home'
                button.className = 'btn'

                button.addEventListener('click', () => {
                    ;(0,_Interface__WEBPACK_IMPORTED_MODULE_0__.TaskTitle)('Home')
                    ;(0,_Interface__WEBPACK_IMPORTED_MODULE_0__.DisplayTask)()
                    activeButton(button)
                })
                return button
            }
            const Today_Button = () => {
                const button = document.createElement('button')
                button.textContent = 'Today'
                button.className = 'btn'
        
                button.addEventListener('click', () => {
                    ;(0,_Interface__WEBPACK_IMPORTED_MODULE_0__.TaskTitle)('Today')
                    activeButton(button)
                })
                return button
            }
            const thisWeek_Button = () => {
                const button = document.createElement('button')
                button.textContent = 'This Week'
                button.className = 'btn'
        
                button.addEventListener('click', () => {
                    ;(0,_Interface__WEBPACK_IMPORTED_MODULE_0__.TaskTitle)('This Week')
                    activeButton(button)
                })
                return button
            }
            const Project = () => {
                const p = document.createElement('p')
                p.className = 'project'
                p.textContent = 'Project'
                return p
            }
            const activeButton = (element) => {
                const buttons = document.querySelectorAll('.btn')
        
                Array.from(buttons).forEach((button) => {
                    button.classList.remove('active')
                });
        
                element.classList.add('active')
            }
            const load = () => {
                const nav = document.createElement('nav')
                nav.className = 'navbar'
                nav.appendChild(Home_Button())
                nav.appendChild(Today_Button())
                nav.appendChild(thisWeek_Button())
                nav.appendChild(Project())
                
                return nav
            }
            return load()
        }
        const parent = document.createElement('div')
        parent.className = 'sidebar'
        parent.appendChild(Navbar())
        return parent
    }

    const Modal = () => {
        const Create  = () => {
            const modal = document.createElement('div')
            const content = document.createElement('div')
            modal.className = 'modal'
            content.className = 'modalContent'
            modal.appendChild(content)
           
            return {modal, content}
        }
    
        const ModalForm = () => {
            const parent = document.createElement('div')
            parent.className = 'modalForm'
            return parent
        }
    
        const ModalHeader = () => {
            const header = document.createElement('div')
            const h1 = document.createElement('h1')
            const close = document.createElement('button')
            const img = document.createElement('img')
            img.src = _img_add_svg__WEBPACK_IMPORTED_MODULE_1__
            close.className = 'modalClose'
            close.appendChild(img)
            h1.textContent = 'Create a new...'
    
            close.addEventListener('click', () => {
                ;(0,_Interface__WEBPACK_IMPORTED_MODULE_0__.ShowModal)()
            })  
            header.className = 'modalHeader'
            header.appendChild(h1)
            header.appendChild(close)
    
            return header
        }
    
        const ModalSidebar = () => {
            const parent = document.createElement('div')
            parent.className = 'modalSidebar'
            
            const CreateTodo = () => {
                const form = document.querySelector('.modalForm')
                const title = document.createElement('input')
                const date = document.createElement('input')
                title.type = 'text'
                date.type = 'date'
                title.placeholder = 'Task Title'
                form.appendChild(title)
                form.appendChild(date)
            }
    
            const TaskButton = () => {
                const button = document.createElement('button')
                button.className = 'btn modalbtn'
                button.textContent = 'Task'
                
                button.addEventListener('click', () => {
                    if(button.classList.contains('active')) return
                    activeButton(button)
                    CreateTodo()
                })
                return button
            }
    
            const activeButton = (element) => {
                const buttons = document.querySelectorAll('.modalbtn')
                Array.from(buttons).forEach((button) => {
                    button.classList.remove('active')
                })
                element.classList.add('active')
            }
    
            parent.appendChild(TaskButton())
            return parent
        }
    
        const CreateModal = () => {
            const {modal, content} = Create()
            content.appendChild(ModalHeader())
            content.appendChild(ModalSidebar())
            content.appendChild(ModalForm())
            return modal
        }
    
        return CreateModal()
        
    }

    const Add_Button = () => {
        const button = document.createElement('button')
        const img = document.createElement('img')
        button.className = 'addButton'
        img.src = _img_add_svg__WEBPACK_IMPORTED_MODULE_1__
        button.appendChild(img)
        button.addEventListener('click', () => {
            ;(0,_Interface__WEBPACK_IMPORTED_MODULE_0__.ShowModal)()
        })
        return button
    }
   
    container.appendChild(Header())
    container.appendChild(Sidebar())
    container.appendChild(Content())
    container.appendChild(Add_Button())
    container.appendChild(Modal())
})()




/***/ }),

/***/ "./src/modules/Interface.js":
/*!**********************************!*\
  !*** ./src/modules/Interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayTask": () => (/* binding */ DisplayTask),
/* harmony export */   "ShowModal": () => (/* binding */ ShowModal),
/* harmony export */   "TaskTitle": () => (/* binding */ TaskTitle)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");



const TaskTitle = (title) => {
    const content = document.querySelector('.content')
    const h1 = document.createElement('h1')
    content.textContent = ''
    h1.className = 'taskTitle'
    h1.textContent = title
    content.appendChild(h1)
}

const DisplayTask = () => {
    const content = document.querySelector('.content')
    content.appendChild((0,_Task__WEBPACK_IMPORTED_MODULE_0__.Task)())

    return content
}

const ShowModal = () => {
    const modal = document.querySelector('.modal')
   
    modal.classList.toggle('show')
}




/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage = () => {

    const Set = (key, value) => {
        localStorage.setItem(key, value)
    }

    return {Set}
});

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");


const Task = () => {
    const store = (0,_Storage__WEBPACK_IMPORTED_MODULE_0__["default"])()
    let task = []

    let obj = {
        'title': 'My Will',
        'Date': 'July 13 2022'
        
    }
    let obj2 = {
        'title': 'My War',
        'Date': 'July 20 2022'   
    }
    task.push(obj)
    task.push(obj2)
    store.Set('task', JSON.stringify(task))
   
    const DisplayGrid = document.createElement('div')
    DisplayGrid.className = 'displayTask'

    let LocalTask = JSON.parse(localStorage.getItem('task'))
    Array.from(LocalTask).forEach((item, index) => {
        const taskItem = document.createElement('div')
        taskItem.className = 'taskItem'
        taskItem.innerHTML = `<p>${LocalTask[index].title}</p><p>${LocalTask[index].Date}</p>`
        DisplayGrid.appendChild(taskItem)
    })
    

    
    



    return DisplayGrid

}




/***/ }),

/***/ "./src/fonts/Poppins.ttf":
/*!*******************************!*\
  !*** ./src/fonts/Poppins.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Poppins.ttf";

/***/ }),

/***/ "./src/img/add.svg":
/*!*************************!*\
  !*** ./src/img/add.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/App */ "./src/modules/App.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9JbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BvcHBpbnMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA1ZnI7XFxuICBjb2xvcjogIzMzMztcXG59XFxuLmNvbnRhaW5lciAuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250YWluZXIgLmhlYWRlciBoMSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiAjZThlOGU4O1xcbn1cXG4uY29udGFpbmVyIC5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xcbn1cXG4uY29udGFpbmVyIC5zaWRlYmFyIG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcXG59XFxuLmNvbnRhaW5lciAuc2lkZWJhciBuYXYgLnByb2plY3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG59XFxuLmNvbnRhaW5lciAuYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbn1cXG4uY29udGFpbmVyIC5idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDMsIDE0MywgMTQzLCAwLjIpO1xcbn1cXG4uY29udGFpbmVyIC5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQzLCAxNDMsIDE0MywgMC4zKTtcXG59XFxuLmNvbnRhaW5lciAuY29udGVudCB7XFxuICBwYWRkaW5nOiAyMHB4IDEwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250YWluZXIgLmNvbnRlbnQgLnRhc2tUaXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmNvbnRhaW5lciAuZGlzcGxheVRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uY29udGFpbmVyIC5kaXNwbGF5VGFzayAudGFza0l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwcHggNXB4O1xcbiAgbWluLWhlaWdodDogMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XFxufVxcbi5jb250YWluZXIgLmRpc3BsYXlUYXNrIC50YXNrSXRlbSBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5jb250YWluZXIgLmFkZEJ1dHRvbiB7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICByaWdodDogMTVweDtcXG4gIGJvdHRvbTogMTVweDtcXG59XFxuLmNvbnRhaW5lciAuYWRkQnV0dG9uIGltZyB7XFxuICB3aWR0aDogNDVweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMyUpIHNhdHVyYXRlKDMxNzglKSBodWUtcm90YXRlKDIwNGRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCg5OSUpO1xcbn1cXG4uY29udGFpbmVyIC5hZGRCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxuLmNvbnRhaW5lciAubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jb250YWluZXIgLnNob3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lciAubW9kYWxDb250ZW50IHtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg1MHB4LCAxNTBweCkgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgYXV0byBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1pbi13aWR0aDogNjAwcHg7XFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4ICMzMzM7XFxufVxcbi5jb250YWluZXIgLm1vZGFsQ29udGVudCAubW9kYWxIZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiAjZThlOGU4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXG59XFxuLmNvbnRhaW5lciAubW9kYWxDb250ZW50IC5tb2RhbEhlYWRlciBoMSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5jb250YWluZXIgLm1vZGFsQ29udGVudCAubW9kYWxIZWFkZXIgLm1vZGFsQ2xvc2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmNvbnRhaW5lciAubW9kYWxDb250ZW50IC5tb2RhbEhlYWRlciAubW9kYWxDbG9zZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb250YWluZXIgLm1vZGFsQ29udGVudCAubW9kYWxIZWFkZXIgLm1vZGFsQ2xvc2UgaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcXG4gIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMyUpIHNhdHVyYXRlKDMxNzglKSBodWUtcm90YXRlKDIwNGRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCg5OSUpO1xcbn1cXG4uY29udGFpbmVyIC5tb2RhbENvbnRlbnQgLm1vZGFsU2lkZWJhciB7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGxhY2UtY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLmNvbnRhaW5lciAubW9kYWxDb250ZW50IC5tb2RhbFNpZGViYXIgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGFpbmVyIC5tb2RhbENvbnRlbnQgLm1vZGFsRm9ybSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgLmNvbnRhaW5lciAuaGVhZGVyIHtcXG4gICAgbWF4LWhlaWdodDogNzVweDtcXG4gIH1cXG4gIC5jb250YWluZXIgLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmNvbnRhaW5lciAuY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICB9XFxuICAuY29udGFpbmVyIC5jb250ZW50IC5kaXNwbGF5VGFzayB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmNvbnRhaW5lciAuY29udGVudCAudGFza1RpdGxlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSw0Q0FBQTtBQUNKO0FBTUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FOUTtBQUVaOztBQVNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FsQlE7QUFZWjtBQU9JO0VBQ0ksaUJBQUE7RUFDQSw0QkF2Qk07RUF3Qk4saUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQU1RO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGNBOUJHO0FBMEJmO0FBUUk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFOUjtBQVFRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBTlo7QUFRWTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFOaEI7QUFXSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVFI7QUFVUTtFQUNJLGVBQUE7RUFDQSwwQ0FBQTtBQVJaO0FBYUk7RUFDSSxnQkFBQTtFQUNBLDBDQUFBO0FBWFI7QUFjSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFaUjtBQWNRO0VBQ0ksaUJBQUE7QUFaWjtBQWlCSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWZSO0FBZ0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBL0ZHO0FBaUZmO0FBZVk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQWJoQjtBQWtCSTtFQUNJLHFCQUFBO0VBQ0EsNEJBMUdNO0VBMkdOLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBaEJSO0FBaUJRO0VBQ0ksV0FBQTtFQUNBLCtGQUFBO0FBZlo7QUFrQlE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFoQlo7QUFvQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWxCUjtBQW9CSTtFQUNJLGFBQUE7QUFsQlI7QUFvQkk7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFsQlI7QUFvQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBeEpHO0VBeUpILDRCQTFKRTtBQXdJZDtBQW1CWTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFqQmhCO0FBbUJZO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBakJoQjtBQWtCZ0I7RUFDSSxlQUFBO0FBaEJwQjtBQWtCZ0I7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwrRkFBQTtBQWhCcEI7QUFvQlE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFqTEc7RUFrTEgsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFsQlo7QUFtQlk7RUFDSSxXQUFBO0FBakJoQjtBQW9CUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBbEJaOztBQTBCQTtFQUVRO0lBQ0ksZ0JBQUE7RUF4QlY7RUEwQk07SUFDSSxhQUFBO0VBeEJWO0VBMEJNO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0VBeEJWO0VBeUJVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUF2QmQ7RUF5QlU7SUFDSSxTQUFBO0lBQ0Esb0JBQUE7RUF2QmQ7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLnR0ZicpO1xcbn1cXG5cXG4kaGVhZGVyQ29sb3I6IGRvZGdlcmJsdWU7XFxuJFByaW1hcnlDb2xvcjogI2U4ZThlODtcXG4kZm9udENvbG9yOiAjMzMzO1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogJGZvbnRDb2xvcjtcXG59XFxuXFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNWZyO1xcbiAgICBjb2xvcjogJGZvbnRDb2xvcjtcXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXJDb2xvcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yMHJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaDEge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5Q29sb3I7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XFxuXFxuICAgICAgICBuYXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC5wcm9qZWN0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzByZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5idG57XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDVweDtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MywgMTQzLCAxNDMsIC4yKTtcXG4gICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5hY3RpdmUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQzLCAxNDMsIDE0MywgLjMpO1xcbiAgICB9XFxuICAgIFxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgICAgICAudGFza1RpdGxlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgfVxcblxcbiAgICAuZGlzcGxheVRhc2sge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgLnRhc2tJdGVtIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMzVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkUHJpbWFyeUNvbG9yO1xcbiAgICAgICAgICAgIHB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmFkZEJ1dHRvbiB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXJDb2xvcjtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgcmlnaHQ6IDE1cHg7XFxuICAgICAgICBib3R0b206IDE1cHg7XFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMyUpIHNhdHVyYXRlKDMxNzglKSBodWUtcm90YXRlKDIwNGRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCg5OSUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnNob3cge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICAubW9kYWxDb250ZW50IHtcXG4gICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDUwcHgsIDE1MHB4KSBhdXRvO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBhdXRvIGF1dG87XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgICAgbWluLXdpZHRoOiA2MDBweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggJGZvbnRDb2xvcjtcXG4gICAgICBcXG4gICAgICAgIC5tb2RhbEhlYWRlciB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5Q29sb3I7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlckNvbG9yO1xcbiAgICAgICAgICAgIGgxIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLm1vZGFsQ2xvc2Uge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgzJSkgc2F0dXJhdGUoMzE3OCUpIGh1ZS1yb3RhdGUoMjA0ZGVnKSBicmlnaHRuZXNzKDExNiUpIGNvbnRyYXN0KDk5JSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9ICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgLm1vZGFsU2lkZWJhciB7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvLTE7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJFByaW1hcnlDb2xvcjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAubW9kYWxGb3JtIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICAgICAgICBncmlkLXJvdzogMi8tMTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcblxcbiAgICBcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICAuaGVhZGVyIHtcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA3NXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnNpZGViYXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICAuY29udGVudCB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3OyAgIFxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICAgICAgICAgIC5kaXNwbGF5VGFzayB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudGFza1RpdGxlIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1Rhc2tUaXRsZSwgRGlzcGxheVRhc2ssIFNob3dNb2RhbH0gZnJvbSAnLi9JbnRlcmZhY2UnXG5pbXBvcnQgYWRkIGZyb20gJy4uL2ltZy9hZGQuc3ZnJ1xuXG5cbmV4cG9ydCBjb25zdCBBcHAgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxuXG4gICAgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgICAgcGFyZW50LmNsYXNzTmFtZSA9ICdoZWFkZXInXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RvLWRvJ1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgIHJldHVybiBwYXJlbnRcbiAgICB9XG5cbiAgICBjb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwYXJlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnXG4gICAgICAgIHJldHVybiBwYXJlbnRcbiAgICB9XG5cbiAgICBjb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBIb21lX0J1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJ1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuJ1xuXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBUYXNrVGl0bGUoJ0hvbWUnKVxuICAgICAgICAgICAgICAgICAgICBEaXNwbGF5VGFzaygpXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbihidXR0b24pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBUb2RheV9CdXR0b24gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVG9kYXknXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdidG4nXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVGFza1RpdGxlKCdUb2RheScpXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbihidXR0b24pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0aGlzV2Vla19CdXR0b24gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJ1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuJ1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFRhc2tUaXRsZSgnVGhpcyBXZWVrJylcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQnV0dG9uKGJ1dHRvbilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybiBidXR0b25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgICAgIHAuY2xhc3NOYW1lID0gJ3Byb2plY3QnXG4gICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9ICdQcm9qZWN0J1xuICAgICAgICAgICAgICAgIHJldHVybiBwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVCdXR0b24gPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuJylcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShidXR0b25zKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICAgICAgICAgICAgICBuYXYuY2xhc3NOYW1lID0gJ25hdmJhcidcbiAgICAgICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoSG9tZV9CdXR0b24oKSlcbiAgICAgICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoVG9kYXlfQnV0dG9uKCkpXG4gICAgICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKHRoaXNXZWVrX0J1dHRvbigpKVxuICAgICAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChQcm9qZWN0KCkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxvYWQoKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHBhcmVudC5jbGFzc05hbWUgPSAnc2lkZWJhcidcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKE5hdmJhcigpKVxuICAgICAgICByZXR1cm4gcGFyZW50XG4gICAgfVxuXG4gICAgY29uc3QgTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IENyZWF0ZSAgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbCdcbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ21vZGFsQ29udGVudCdcbiAgICAgICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHttb2RhbCwgY29udGVudH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBNb2RhbEZvcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgcGFyZW50LmNsYXNzTmFtZSA9ICdtb2RhbEZvcm0nXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgTW9kYWxIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICAgICAgaW1nLnNyYyA9IGFkZFxuICAgICAgICAgICAgY2xvc2UuY2xhc3NOYW1lID0gJ21vZGFsQ2xvc2UnXG4gICAgICAgICAgICBjbG9zZS5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICBoMS50ZXh0Q29udGVudCA9ICdDcmVhdGUgYSBuZXcuLi4nXG4gICAgXG4gICAgICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBTaG93TW9kYWwoKVxuICAgICAgICAgICAgfSkgIFxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdtb2RhbEhlYWRlcidcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSlcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZSlcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBNb2RhbFNpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgcGFyZW50LmNsYXNzTmFtZSA9ICdtb2RhbFNpZGViYXInXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IENyZWF0ZVRvZG8gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbEZvcm0nKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgdGl0bGUudHlwZSA9ICd0ZXh0J1xuICAgICAgICAgICAgICAgIGRhdGUudHlwZSA9ICdkYXRlJ1xuICAgICAgICAgICAgICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gJ1Rhc2sgVGl0bGUnXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGUpXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCBUYXNrQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gbW9kYWxidG4nXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1Rhc2snXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbihidXR0b24pXG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZVRvZG8oKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1dHRvblxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgY29uc3QgYWN0aXZlQnV0dG9uID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsYnRuJylcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGJ1dHRvbnMpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChUYXNrQnV0dG9uKCkpXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgQ3JlYXRlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7bW9kYWwsIGNvbnRlbnR9ID0gQ3JlYXRlKClcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoTW9kYWxIZWFkZXIoKSlcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoTW9kYWxTaWRlYmFyKCkpXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKE1vZGFsRm9ybSgpKVxuICAgICAgICAgICAgcmV0dXJuIG1vZGFsXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIENyZWF0ZU1vZGFsKClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgQWRkX0J1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdhZGRCdXR0b24nXG4gICAgICAgIGltZy5zcmMgPSBhZGRcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgU2hvd01vZGFsKClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGJ1dHRvblxuICAgIH1cbiAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChIZWFkZXIoKSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoU2lkZWJhcigpKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDb250ZW50KCkpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKEFkZF9CdXR0b24oKSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoTW9kYWwoKSlcbn0pKClcblxuXG4iLCJpbXBvcnQge1Rhc2t9IGZyb20gJy4vVGFzaydcblxuXG5jb25zdCBUYXNrVGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgIGgxLmNsYXNzTmFtZSA9ICd0YXNrVGl0bGUnXG4gICAgaDEudGV4dENvbnRlbnQgPSB0aXRsZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpXG59XG5cbmNvbnN0IERpc3BsYXlUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChUYXNrKCkpXG5cbiAgICByZXR1cm4gY29udGVudFxufVxuXG5jb25zdCBTaG93TW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICAgXG4gICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXG59XG5cblxuZXhwb3J0IHtUYXNrVGl0bGUsIERpc3BsYXlUYXNrLCBTaG93TW9kYWx9IiwiZXhwb3J0IGRlZmF1bHQgU3RvcmFnZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFNldCA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtTZXR9XG59IiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZVwiXG5cbmNvbnN0IFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBTdG9yYWdlKClcbiAgICBsZXQgdGFzayA9IFtdXG5cbiAgICBsZXQgb2JqID0ge1xuICAgICAgICAndGl0bGUnOiAnTXkgV2lsbCcsXG4gICAgICAgICdEYXRlJzogJ0p1bHkgMTMgMjAyMidcbiAgICAgICAgXG4gICAgfVxuICAgIGxldCBvYmoyID0ge1xuICAgICAgICAndGl0bGUnOiAnTXkgV2FyJyxcbiAgICAgICAgJ0RhdGUnOiAnSnVseSAyMCAyMDIyJyAgIFxuICAgIH1cbiAgICB0YXNrLnB1c2gob2JqKVxuICAgIHRhc2sucHVzaChvYmoyKVxuICAgIHN0b3JlLlNldCgndGFzaycsIEpTT04uc3RyaW5naWZ5KHRhc2spKVxuICAgXG4gICAgY29uc3QgRGlzcGxheUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIERpc3BsYXlHcmlkLmNsYXNzTmFtZSA9ICdkaXNwbGF5VGFzaydcblxuICAgIGxldCBMb2NhbFRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpXG4gICAgQXJyYXkuZnJvbShMb2NhbFRhc2spLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NOYW1lID0gJ3Rhc2tJdGVtJ1xuICAgICAgICB0YXNrSXRlbS5pbm5lckhUTUwgPSBgPHA+JHtMb2NhbFRhc2tbaW5kZXhdLnRpdGxlfTwvcD48cD4ke0xvY2FsVGFza1tpbmRleF0uRGF0ZX08L3A+YFxuICAgICAgICBEaXNwbGF5R3JpZC5hcHBlbmRDaGlsZCh0YXNrSXRlbSlcbiAgICB9KVxuICAgIFxuXG4gICAgXG4gICAgXG5cblxuXG4gICAgcmV0dXJuIERpc3BsYXlHcmlkXG5cbn1cblxuXG5leHBvcnQge1Rhc2t9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0ICcuL21vZHVsZXMvQXBwJ1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9