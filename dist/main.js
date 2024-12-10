/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    padding: 10px;
    font-family: Arial, sans-serif;
    background-color: #2c3e50;
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.game-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 0 auto;
}

.board-container {
    text-align: center;
}

.board {
    display: grid;
    grid-template-columns: repeat(10, 30px);
    grid-template-rows: repeat(10, 30px);
    gap: 1px;
    background-color: #34495e;
    padding: 5px;
    border-radius: 4px;
}

.cell {
    width: 30px;
    height: 30px;
    border: 1px solid #465c71;
    background-color: #2c3e50;
    cursor: pointer;
    transition: background-color 0.2s;
}

.cell:hover {
    background-color: #3498db;
}

.cell.valid-placement {
    background-color: #2ecc71;
}

.cell.invalid-placement {
    background-color: #e74c3c;
}

.ship {
    background-color: #95a5a6 !important;
}

.hit {
    background-color: #e74c3c !important;
    animation: hitEffect 0.3s ease-out;
}

.miss {
    background-color: #3498db !important;
    animation: missEffect 0.3s ease-out;
}

.sunk {
    background-color: #c0392b !important;
    animation: sunkEffect 0.5s ease-in-out;
    border: 2px solid #2c3e50 !important;
    box-shadow: 0 0 10px rgba(192, 57, 43, 0.7);
}

@keyframes hitEffect {
    0% { transform: scale(0.5); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

@keyframes missEffect {
    0% { transform: scale(0.8); }
    100% { transform: scale(1); }
}

@keyframes sunkEffect {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
.game-info {
    text-align: center;
    margin-bottom: 10px;
}

h1 {
    margin: 0 0 10px 0;
    font-size: 24px;
}

.player-name {
    font-size: 18px;
    margin: 5px 0;
    color: #ecf0f1;
}

.message {
    font-size: 16px;
    margin: 10px 0;
    padding: 5px;
    border-radius: 4px;
}

.message.success {
    background-color: #27ae60;
    color: white;
}

.message.error {
    background-color: #c0392b;
    color: white;
}

.message.info {
    background-color: #2980b9;
    color: white;
}

.setup-phase {
    text-align: center;
    margin-bottom: 10px;
}

.ship-selection {
    background-color: #34495e;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ship-selection h2 {
    margin: 0 0 10px 0;
    font-size: 20px;
}

.controls {
    margin: 10px 0;
}

button {
    padding: 8px 16px;
    margin: 0 5px;
    border: none;
    border-radius: 4px;
    background-color: #2ecc71;
    color: white;
    cursor: pointer;
    font-size: 14px;
}

button:disabled {
    background-color: #7f8c8d;
    cursor: not-allowed;
}

button:hover:not(:disabled) {
    background-color: #27ae60;
}

.ships-to-place {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 600px;
}

.ships-to-place div {
    padding: 5px 10px;
    background-color: #2c3e50;
    border-radius: 4px;
    font-size: 14px;
}

.ships-to-place div.placed {
    background-color: #27ae60;
    text-decoration: line-through;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,yBAAyB;IACzB,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,QAAQ;IACR,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;IACpC,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;IACpC,sCAAsC;IACtC,oCAAoC;IACpC,2CAA2C;AAC/C;;AAEA;IACI,KAAK,qBAAqB,EAAE;IAC5B,MAAM,qBAAqB,EAAE;IAC7B,OAAO,mBAAmB,EAAE;AAChC;;AAEA;IACI,KAAK,qBAAqB,EAAE;IAC5B,OAAO,mBAAmB,EAAE;AAChC;;AAEA;IACI,KAAK,mBAAmB,EAAE;IAC1B,MAAM,qBAAqB,EAAE;IAC7B,OAAO,mBAAmB,EAAE;AAChC;AACA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,6BAA6B;AACjC","sourcesContent":["body {\n    margin: 0;\n    padding: 10px;\n    font-family: Arial, sans-serif;\n    background-color: #2c3e50;\n    color: white;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.game-container {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin: 0 auto;\n}\n\n.board-container {\n    text-align: center;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n    gap: 1px;\n    background-color: #34495e;\n    padding: 5px;\n    border-radius: 4px;\n}\n\n.cell {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #465c71;\n    background-color: #2c3e50;\n    cursor: pointer;\n    transition: background-color 0.2s;\n}\n\n.cell:hover {\n    background-color: #3498db;\n}\n\n.cell.valid-placement {\n    background-color: #2ecc71;\n}\n\n.cell.invalid-placement {\n    background-color: #e74c3c;\n}\n\n.ship {\n    background-color: #95a5a6 !important;\n}\n\n.hit {\n    background-color: #e74c3c !important;\n    animation: hitEffect 0.3s ease-out;\n}\n\n.miss {\n    background-color: #3498db !important;\n    animation: missEffect 0.3s ease-out;\n}\n\n.sunk {\n    background-color: #c0392b !important;\n    animation: sunkEffect 0.5s ease-in-out;\n    border: 2px solid #2c3e50 !important;\n    box-shadow: 0 0 10px rgba(192, 57, 43, 0.7);\n}\n\n@keyframes hitEffect {\n    0% { transform: scale(0.5); }\n    50% { transform: scale(1.2); }\n    100% { transform: scale(1); }\n}\n\n@keyframes missEffect {\n    0% { transform: scale(0.8); }\n    100% { transform: scale(1); }\n}\n\n@keyframes sunkEffect {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.1); }\n    100% { transform: scale(1); }\n}\n.game-info {\n    text-align: center;\n    margin-bottom: 10px;\n}\n\nh1 {\n    margin: 0 0 10px 0;\n    font-size: 24px;\n}\n\n.player-name {\n    font-size: 18px;\n    margin: 5px 0;\n    color: #ecf0f1;\n}\n\n.message {\n    font-size: 16px;\n    margin: 10px 0;\n    padding: 5px;\n    border-radius: 4px;\n}\n\n.message.success {\n    background-color: #27ae60;\n    color: white;\n}\n\n.message.error {\n    background-color: #c0392b;\n    color: white;\n}\n\n.message.info {\n    background-color: #2980b9;\n    color: white;\n}\n\n.setup-phase {\n    text-align: center;\n    margin-bottom: 10px;\n}\n\n.ship-selection {\n    background-color: #34495e;\n    padding: 10px;\n    border-radius: 4px;\n    margin-bottom: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.ship-selection h2 {\n    margin: 0 0 10px 0;\n    font-size: 20px;\n}\n\n.controls {\n    margin: 10px 0;\n}\n\nbutton {\n    padding: 8px 16px;\n    margin: 0 5px;\n    border: none;\n    border-radius: 4px;\n    background-color: #2ecc71;\n    color: white;\n    cursor: pointer;\n    font-size: 14px;\n}\n\nbutton:disabled {\n    background-color: #7f8c8d;\n    cursor: not-allowed;\n}\n\nbutton:hover:not(:disabled) {\n    background-color: #27ae60;\n}\n\n.ships-to-place {\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    flex-wrap: wrap;\n    max-width: 600px;\n}\n\n.ships-to-place div {\n    padding: 5px 10px;\n    background-color: #2c3e50;\n    border-radius: 4px;\n    font-size: 14px;\n}\n\n.ships-to-place div.placed {\n    background-color: #27ae60;\n    text-decoration: line-through;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");



class Game {
    constructor() {
        this.player = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('Player');
        this.computer = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('Computer', true);
        this.currentPlayer = this.player;
        this.gameOver = false;
    }

    initialize() {
    }

    placeComputerShips() {
        const ships = [
            new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(5),
            new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(4),
            new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3),
            new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3),
            new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(2)
        ];

        ships.forEach(ship => {
            let placed = false;
            while (!placed) {
                const x = Math.floor(Math.random() * 10);
                const y = Math.floor(Math.random() * 10);
                const isHorizontal = Math.random() < 0.5;
                placed = this.computer.gameboard.placeShip(ship, x, y, isHorizontal);
            }
        });
    }

    playTurn(x, y) {
        if (this.gameOver) return false;

        let result;
        
        if (this.currentPlayer === this.player && x !== undefined && y !== undefined) {
            result = this.player.makeMove(x, y, this.computer.gameboard);
            if (result) {
                if (this.computer.gameboard.allShipsSunk()) {
                    this.gameOver = true;
                    return 'Player wins!';
                }
                this.currentPlayer = this.computer;
                return result;
            }
        }
        
        if (this.currentPlayer === this.computer) {
            result = this.computer.makeRandomMove(this.player.gameboard);
            if (result) {
                if (this.player.gameboard.allShipsSunk()) {
                    this.gameOver = true;
                    return 'Computer wins!';
                }
                this.currentPlayer = this.player;
                return result;
            }
        }

        return false;
    }
}

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");


class Gameboard {
    constructor() {
        this.board = this.createBoard();
        this.ships = [];
        this.missedAttacks = [];
        this.lastMove = null;
    }

    createBoard() {
        return Array(10).fill(null).map(() => Array(10).fill(null));
    }

    placeShip(ship, x, y, isHorizontal) {
        if (!this.isValidPlacement(ship, x, y, isHorizontal)) {
            return false;
        }

        if (isHorizontal) {
            for (let i = 0; i < ship.length; i++) {
                this.board[x][y + i] = ship;
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                this.board[x + i][y] = ship;
            }
        }

        this.ships.push(ship);
        return true;
    }

    isValidPlacement(ship, x, y, isHorizontal) {
        if (!ship || x < 0 || y < 0 || x >= 10 || y >= 10) return false;

        if (isHorizontal) {
            if (y + ship.length > 10) return false;
            for (let i = 0; i < ship.length; i++) {
                if (this.board[x][y + i] !== null) return false;
            }
        } else {
            if (x + ship.length > 10) return false;
            for (let i = 0; i < ship.length; i++) {
                if (this.board[x + i][y] !== null) return false;
            }
        }

        return true;
    }

    receiveAttack(x, y) {
        
        if (!Number.isInteger(x) || !Number.isInteger(y) || 
            x < 0 || x >= 10 || y < 0 || y >= 10) {
            return false;
        }

        
        this.lastMove = { x, y };

        const cell = this.board[x][y];

        
        if (cell === null) {
            this.board[x][y] = 'miss';
            this.missedAttacks.push({ x, y });
            return 'miss';
        }
        
        
        if (cell === 'miss' || cell === 'hit' || cell === 'sunk') {
            return false;
        }

        
        if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship) {
            const ship = cell;
            ship.hit();
            this.board[x][y] = 'hit';
            
            
            if (ship.isSunk()) {
                
                this.markShipAsSunk(ship);
                return 'sunk';
            }
            return 'hit';
        }

        return false;
    }

    markShipAsSunk(sunkShip) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] === sunkShip || this.board[i][j] === 'hit') {
                    let cell = this.board[i][j];
                    if (cell === sunkShip || (cell === 'hit' && this.wasPartOfShip(i, j, sunkShip))) {
                        this.board[i][j] = 'sunk';
                    }
                }
            }
        }
    }

    wasPartOfShip(x, y, ship) {
        if (x > 0 && this.board[x-1][y] === ship) return true;
        if (x < 9 && this.board[x+1][y] === ship) return true;
        if (y > 0 && this.board[x][y-1] === ship) return true;
        if (y < 9 && this.board[x][y+1] === ship) return true;
        return false;
    }

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }

    getBoard() {
        return this.board;
    }
    
    getLastMove() {
        return this.lastMove;
    }
}

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");


class Player {
    constructor(name, isComputer = false) {
        this.name = name;
        this.isComputer = isComputer;
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
        this.movesMade = new Set();
    }

    makeMove(x, y, enemyBoard) {
        if (!enemyBoard) return false;
        
        if (this.isComputer) {
            return this.makeRandomMove(enemyBoard);
        }
        
        const moveKey = `${x},${y}`;
        if (this.movesMade.has(moveKey)) return false;
        
        this.movesMade.add(moveKey);
        return enemyBoard.receiveAttack(x, y);
    }

    makeRandomMove(enemyBoard) {
        if (!enemyBoard) return false;
        
        for (let attempts = 0; attempts < 100; attempts++) {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            const moveKey = `${x},${y}`;
            
            if (!this.movesMade.has(moveKey)) {
                this.movesMade.add(moveKey);
                const result = enemyBoard.receiveAttack(x, y);
                if (result) return result;
            }
        }
        
        return false;
    }
}

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hits++;
        this.isSunk();
        return this.hits;
    }

    isSunk() {
        if (this.hits >= this.length) {
            this.sunk = true;
        }
        return this.sunk;
    }
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.js");
/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ship */ "./src/modules/ship.js");




class GameUI {
    constructor() {
        this.game = new _modules_game__WEBPACK_IMPORTED_MODULE_1__.Game();
        this.playerBoard = document.getElementById('player-board');
        this.computerBoard = document.getElementById('computer-board');
        this.messageDisplay = document.getElementById('message');
        this.setupPhase = document.getElementById('setup-phase');
        this.startGameButton = document.getElementById('start-game');
        this.rotateShipButton = document.getElementById('rotate-ship');
        
        this.ships = [
            { name: 'Carrier', length: 5 },
            { name: 'Battleship', length: 4 },
            { name: 'Cruiser', length: 3 },
            { name: 'Submarine', length: 3 },
            { name: 'Destroyer', length: 2 }
        ];
        
        this.currentShipIndex = 0;
        this.isHorizontal = true;
        
        this.initialize();
    }

    initialize() {
        this.createBoards();
        this.setupEventListeners();
        this.computerBoard.style.display = 'none';
        this.setMessage('Place your Carrier (length: 5)', 'info');
    }

    createBoards() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = i;
                cell.dataset.col = j;
                this.playerBoard.appendChild(cell);
            }
        }

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = i;
                cell.dataset.col = j;
                this.computerBoard.appendChild(cell);
            }
        }
    }

    setupEventListeners() {
        this.rotateShipButton.addEventListener('click', () => {
            this.isHorizontal = !this.isHorizontal;
            this.clearPlacementHighlight();
        });

        this.playerBoard.addEventListener('mouseover', (e) => {
            if (this.currentShipIndex < this.ships.length) {
                this.handleShipPlacementPreview(e);
            }
        });

        this.playerBoard.addEventListener('mouseout', () => {
            this.clearPlacementHighlight();
        });

        this.playerBoard.addEventListener('click', (e) => {
            if (this.currentShipIndex < this.ships.length) {
                this.handleShipPlacement(e);
            }
        });

        this.computerBoard.addEventListener('click', (e) => {
            if (e.target.classList.contains('cell') && !this.game.gameOver) {
                const row = parseInt(e.target.dataset.row);
                const col = parseInt(e.target.dataset.col);
                this.handlePlayerMove(row, col);
            }
        });
    }

    handleShipPlacementPreview(e) {
        if (!e.target.classList.contains('cell')) return;

        this.clearPlacementHighlight();
        
        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);
        const shipLength = this.ships[this.currentShipIndex].length;
        const cells = this.getShipPlacementCells(row, col, shipLength);

        if (cells) {
            cells.forEach(cell => cell.classList.add('valid-placement'));
        } else {
            const invalidCells = this.getInvalidPlacementCells(row, col, shipLength);
            invalidCells.forEach(cell => cell.classList.add('invalid-placement'));
        }
    }

    getShipPlacementCells(row, col, length) {
        const cells = [];
        
        for (let i = 0; i < length; i++) {
            const newRow = this.isHorizontal ? row : row + i;
            const newCol = this.isHorizontal ? col + i : col;
            
            if (newRow >= 10 || newCol >= 10) return null;
            
            const cell = this.playerBoard.children[newRow * 10 + newCol];
            if (cell.classList.contains('ship')) return null;
            
            cells.push(cell);
        }
        
        return cells;
    }

    getInvalidPlacementCells(row, col, length) {
        const cells = [];
        
        for (let i = 0; i < length; i++) {
            const newRow = this.isHorizontal ? row : row + i;
            const newCol = this.isHorizontal ? col + i : col;
            
            if (newRow < 10 && newCol < 10) {
                const cell = this.playerBoard.children[newRow * 10 + newCol];
                cells.push(cell);
            }
        }
        
        return cells;
    }

    clearPlacementHighlight() {
        const cells = this.playerBoard.getElementsByClassName('cell');
        Array.from(cells).forEach(cell => {
            cell.classList.remove('valid-placement', 'invalid-placement');
        });
    }

    handleShipPlacement(e) {
        if (!e.target.classList.contains('cell')) return;

        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);
        const currentShip = this.ships[this.currentShipIndex];
        const ship = new _modules_ship__WEBPACK_IMPORTED_MODULE_2__.Ship(currentShip.length);

        if (this.game.player.gameboard.placeShip(ship, row, col, this.isHorizontal)) {
            this.renderPlayerBoard();
            this.updateShipList();
            this.currentShipIndex++;

            if (this.currentShipIndex < this.ships.length) {
                const nextShip = this.ships[this.currentShipIndex];
                this.setMessage(`Place your ${nextShip.name} (length: ${nextShip.length})`, 'info');
            } else {
                this.startGame();
            }
        }
    }

    updateShipList() {
        const shipElements = document.querySelectorAll('.ships-to-place div');
        shipElements[this.currentShipIndex].classList.add('placed');
    }

    startGame() {
        this.setupPhase.style.display = 'none';
        this.computerBoard.style.display = 'grid';
        this.game.placeComputerShips();
        this.setMessage('Game started! Attack the computer\'s board.', 'success');
    }

    renderPlayerBoard() {
        const board = this.game.player.gameboard.getBoard();
        const cells = this.playerBoard.getElementsByClassName('cell');

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = cells[i * 10 + j];
                const boardCell = board[i][j];

                if (boardCell instanceof _modules_ship__WEBPACK_IMPORTED_MODULE_2__.Ship) {
                    cell.classList.add('ship');
                }
            }
        }
    }

    handlePlayerMove(row, col) {
        const result = this.game.playTurn(row, col);
        if (result) {
            this.updateCell(this.computerBoard, row, col, result);
            this.setMessage(result === 'hit' ? 'Hit!' : 'Miss!', result === 'hit' ? 'success' : 'error');

            if (!this.game.gameOver) {
                setTimeout(() => {
                    this.handleComputerMove();
                }, 500);
            }
        }

        if (this.game.gameOver) {
            this.setMessage(`Game Over! ${result}`, 'success');
        }
    }

    handleComputerMove() { 
        const result = this.game.playTurn();
        if (result && result !== 'Player wins!' && result !== 'Computer wins!') {
            const lastMove = this.game.player.gameboard.getLastMove();
            if (lastMove) {
                this.updateCell(this.playerBoard, lastMove.x, lastMove.y, result);
            }
        }

        if (this.game.gameOver) {
            this.setMessage(`Game Over! ${result}`, 'success');
        }
    }

    updateCell(board, row, col, result) {
        const index = row * 10 + col;
        const cells = board.getElementsByClassName('cell');
        const cell = cells[index];

        if (result === 'hit') {
            cell.classList.add('hit');
            this.setMessage('Hit!', 'success');
        } else if (result === 'miss') {
            cell.classList.add('miss');
            this.setMessage('Miss!', 'error');
        } else if (result === 'sunk') {
            cell.classList.add('hit');
            
            const gameBoard = board === this.playerBoard ? 
                            this.game.player.gameboard : 
                            this.game.computer.gameboard;
            
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (gameBoard.board[i][j] === 'sunk') {
                        const sunkIndex = i * 10 + j;
                        cells[sunkIndex].classList.remove('hit');
                        cells[sunkIndex].classList.add('sunk');
                    }
                }
            }
            
            this.setMessage('Ship Sunk!', 'success');
        }
    }

    setMessage(text, type) {
        this.messageDisplay.textContent = text;
        this.messageDisplay.className = `message ${type}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GameUI();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdCLFFBQVE7QUFDaEMsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTs7QUFFQSx5Q0FBeUMsK0NBQUk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQyxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsS0FBSztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZ2FtZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xuICAgIGdhcDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NWU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmNlbGwge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDY1YzcxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmNlbGw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG59XG5cbi5jZWxsLnZhbGlkLXBsYWNlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTtcbn1cblxuLmNlbGwuaW52YWxpZC1wbGFjZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG59XG5cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVhNWE2ICFpbXBvcnRhbnQ7XG59XG5cbi5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2MgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb246IGhpdEVmZmVjdCAwLjNzIGVhc2Utb3V0O1xufVxuXG4ubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYiAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbjogbWlzc0VmZmVjdCAwLjNzIGVhc2Utb3V0O1xufVxuXG4uc3VuayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbjogc3Vua0VmZmVjdCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyYzNlNTAgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDE5MiwgNTcsIDQzLCAwLjcpO1xufVxuXG5Aa2V5ZnJhbWVzIGhpdEVmZmVjdCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7IH1cbiAgICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG1pc3NFZmZlY3Qge1xuICAgIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjgpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbn1cblxuQGtleWZyYW1lcyBzdW5rRWZmZWN0IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxufVxuLmdhbWUtaW5mbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmgxIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ucGxheWVyLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIGNvbG9yOiAjZWNmMGYxO1xufVxuXG4ubWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5tZXNzYWdlLnN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN2FlNjA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWVzc2FnZS5lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZXNzYWdlLmluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2V0dXAtcGhhc2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2hpcC1zZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NWU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNoaXAtc2VsZWN0aW9uIGgyIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29udHJvbHMge1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZjhjOGQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xufVxuXG4uc2hpcHMtdG8tcGxhY2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4uc2hpcHMtdG8tcGxhY2UgZGl2IHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zaGlwcy10by1wbGFjZSBkaXYucGxhY2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLEtBQUsscUJBQXFCLEVBQUU7SUFDNUIsTUFBTSxxQkFBcUIsRUFBRTtJQUM3QixPQUFPLG1CQUFtQixFQUFFO0FBQ2hDOztBQUVBO0lBQ0ksS0FBSyxxQkFBcUIsRUFBRTtJQUM1QixPQUFPLG1CQUFtQixFQUFFO0FBQ2hDOztBQUVBO0lBQ0ksS0FBSyxtQkFBbUIsRUFBRTtJQUMxQixNQUFNLHFCQUFxQixFQUFFO0lBQzdCLE9BQU8sbUJBQW1CLEVBQUU7QUFDaEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdhcDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDY1YzcxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbn1cXG5cXG4uY2VsbC52YWxpZC1wbGFjZW1lbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcxO1xcbn1cXG5cXG4uY2VsbC5pbnZhbGlkLXBsYWNlbWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1YTVhNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb246IGhpdEVmZmVjdCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGIgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uOiBtaXNzRWZmZWN0IDAuM3MgZWFzZS1vdXQ7XFxufVxcblxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb246IHN1bmtFZmZlY3QgMC41cyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJjM2U1MCAhaW1wb3J0YW50O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDE5MiwgNTcsIDQzLCAwLjcpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpdEVmZmVjdCB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjUpOyB9XFxuICAgIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1pc3NFZmZlY3Qge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMC44KTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHN1bmtFZmZlY3Qge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XFxufVxcbi5nYW1lLWluZm8ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbmgxIHtcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5wbGF5ZXItbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgY29sb3I6ICNlY2YwZjE7XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5tZXNzYWdlLnN1Y2Nlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZXNzYWdlLmVycm9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVzc2FnZS5pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2V0dXAtcGhhc2Uge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zaGlwLXNlbGVjdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtc2VsZWN0aW9uIGgyIHtcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jb250cm9scyB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZjhjOGQ7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbmJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN2FlNjA7XFxufVxcblxcbi5zaGlwcy10by1wbGFjZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlIGRpdiB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlIGRpdi5wbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllcicpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyID0gbmV3IFBsYXllcignQ29tcHV0ZXInLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgIH1cblxuICAgIHBsYWNlQ29tcHV0ZXJTaGlwcygpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgICAgICBuZXcgU2hpcCg1KSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDQpLFxuICAgICAgICAgICAgbmV3IFNoaXAoMyksXG4gICAgICAgICAgICBuZXcgU2hpcCgzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDIpXG4gICAgICAgIF07XG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gICAgICAgICAgICAgICAgcGxhY2VkID0gdGhpcy5jb21wdXRlci5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBsYXlUdXJuKHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIgJiYgeCAhPT0gdW5kZWZpbmVkICYmIHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wbGF5ZXIubWFrZU1vdmUoeCwgeSwgdGhpcy5jb21wdXRlci5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbXB1dGVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdQbGF5ZXIgd2lucyEnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLmNvbXB1dGVyO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IHRoaXMuY29tcHV0ZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuY29tcHV0ZXIubWFrZVJhbmRvbU1vdmUodGhpcy5wbGF5ZXIuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0NvbXB1dGVyIHdpbnMhJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMubWlzc2VkQXR0YWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmxhc3RNb3ZlID0gbnVsbDtcbiAgICB9XG5cbiAgICBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHNoaXAsIHgsIHksIGlzSG9yaXpvbnRhbCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZFBsYWNlbWVudChzaGlwLCB4LCB5LCBpc0hvcml6b250YWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlzVmFsaWRQbGFjZW1lbnQoc2hpcCwgeCwgeSwgaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIGlmICghc2hpcCB8fCB4IDwgMCB8fCB5IDwgMCB8fCB4ID49IDEwIHx8IHkgPj0gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBpZiAoeSArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3kgKyBpXSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt4ICsgaV1beV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHgpIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKHkpIHx8IFxuICAgICAgICAgICAgeCA8IDAgfHwgeCA+PSAxMCB8fCB5IDwgMCB8fCB5ID49IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgdGhpcy5sYXN0TW92ZSA9IHsgeCwgeSB9O1xuXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3hdW3ldO1xuXG4gICAgICAgIFxuICAgICAgICBpZiAoY2VsbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9ICdtaXNzJztcbiAgICAgICAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoY2VsbCA9PT0gJ21pc3MnIHx8IGNlbGwgPT09ICdoaXQnIHx8IGNlbGwgPT09ICdzdW5rJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGNlbGw7XG4gICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9ICdoaXQnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrU2hpcEFzU3VuayhzaGlwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3N1bmsnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG1hcmtTaGlwQXNTdW5rKHN1bmtTaGlwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0gPT09IHN1bmtTaGlwIHx8IHRoaXMuYm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5ib2FyZFtpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwgPT09IHN1bmtTaGlwIHx8IChjZWxsID09PSAnaGl0JyAmJiB0aGlzLndhc1BhcnRPZlNoaXAoaSwgaiwgc3Vua1NoaXApKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9ICdzdW5rJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdhc1BhcnRPZlNoaXAoeCwgeSwgc2hpcCkge1xuICAgICAgICBpZiAoeCA+IDAgJiYgdGhpcy5ib2FyZFt4LTFdW3ldID09PSBzaGlwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHggPCA5ICYmIHRoaXMuYm9hcmRbeCsxXVt5XSA9PT0gc2hpcCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh5ID4gMCAmJiB0aGlzLmJvYXJkW3hdW3ktMV0gPT09IHNoaXApIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoeSA8IDkgJiYgdGhpcy5ib2FyZFt4XVt5KzFdID09PSBzaGlwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG5cbiAgICBnZXRCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgfVxuICAgIFxuICAgIGdldExhc3RNb3ZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0TW92ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pc0NvbXB1dGVyID0gaXNDb21wdXRlcjtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMubW92ZXNNYWRlID0gbmV3IFNldCgpO1xuICAgIH1cblxuICAgIG1ha2VNb3ZlKHgsIHksIGVuZW15Qm9hcmQpIHtcbiAgICAgICAgaWYgKCFlbmVteUJvYXJkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlUmFuZG9tTW92ZShlbmVteUJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbW92ZUtleSA9IGAke3h9LCR7eX1gO1xuICAgICAgICBpZiAodGhpcy5tb3Zlc01hZGUuaGFzKG1vdmVLZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdmVzTWFkZS5hZGQobW92ZUtleSk7XG4gICAgICAgIHJldHVybiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuXG4gICAgbWFrZVJhbmRvbU1vdmUoZW5lbXlCb2FyZCkge1xuICAgICAgICBpZiAoIWVuZW15Qm9hcmQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGF0dGVtcHRzID0gMDsgYXR0ZW1wdHMgPCAxMDA7IGF0dGVtcHRzKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29uc3QgbW92ZUtleSA9IGAke3h9LCR7eX1gO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXRoaXMubW92ZXNNYWRlLmhhcyhtb3ZlS2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZXNNYWRlLmFkZChtb3ZlS2V5KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICB0aGlzLmlzU3VuaygpO1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRzO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdW5rO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9tb2R1bGVzL3NoaXAnO1xuXG5jbGFzcyBHYW1lVUkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItYm9hcmQnKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuc2V0dXBQaGFzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR1cC1waGFzZScpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XG4gICAgICAgIHRoaXMucm90YXRlU2hpcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGUtc2hpcCcpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0NhcnJpZXInLCBsZW5ndGg6IDUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0JhdHRsZXNoaXAnLCBsZW5ndGg6IDQgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0NydWlzZXInLCBsZW5ndGg6IDMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1N1Ym1hcmluZScsIGxlbmd0aDogMyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRGVzdHJveWVyJywgbGVuZ3RoOiAyIH1cbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuaXNIb3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQm9hcmRzKCk7XG4gICAgICAgIHRoaXMuc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlKCdQbGFjZSB5b3VyIENhcnJpZXIgKGxlbmd0aDogNSknLCAnaW5mbycpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJvYXJkcygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGk7XG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGo7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSBpO1xuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBqO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMucm90YXRlU2hpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNIb3Jpem9udGFsID0gIXRoaXMuaXNIb3Jpem9udGFsO1xuICAgICAgICAgICAgdGhpcy5jbGVhclBsYWNlbWVudEhpZ2hsaWdodCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hpcEluZGV4IDwgdGhpcy5zaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNoaXBQbGFjZW1lbnRQcmV2aWV3KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhclBsYWNlbWVudEhpZ2hsaWdodCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaGlwSW5kZXggPCB0aGlzLnNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2hpcFBsYWNlbWVudChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb21wdXRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSAmJiAhdGhpcy5nYW1lLmdhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5yb3cpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBsYXllck1vdmUocm93LCBjb2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVTaGlwUGxhY2VtZW50UHJldmlldyhlKSB7XG4gICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHJldHVybjtcblxuICAgICAgICB0aGlzLmNsZWFyUGxhY2VtZW50SGlnaGxpZ2h0KCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByb3cgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnJvdyk7XG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHRoaXMuc2hpcHNbdGhpcy5jdXJyZW50U2hpcEluZGV4XS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5nZXRTaGlwUGxhY2VtZW50Q2VsbHMocm93LCBjb2wsIHNoaXBMZW5ndGgpO1xuXG4gICAgICAgIGlmIChjZWxscykge1xuICAgICAgICAgICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuY2xhc3NMaXN0LmFkZCgndmFsaWQtcGxhY2VtZW50JykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW52YWxpZENlbGxzID0gdGhpcy5nZXRJbnZhbGlkUGxhY2VtZW50Q2VsbHMocm93LCBjb2wsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgaW52YWxpZENlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtcGxhY2VtZW50JykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2hpcFBsYWNlbWVudENlbGxzKHJvdywgY29sLCBsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9IHRoaXMuaXNIb3Jpem9udGFsID8gcm93IDogcm93ICsgaTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbCA9IHRoaXMuaXNIb3Jpem9udGFsID8gY29sICsgaSA6IGNvbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG5ld1JvdyA+PSAxMCB8fCBuZXdDb2wgPj0gMTApIHJldHVybiBudWxsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5wbGF5ZXJCb2FyZC5jaGlsZHJlbltuZXdSb3cgKiAxMCArIG5ld0NvbF07XG4gICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNlbGxzLnB1c2goY2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9XG5cbiAgICBnZXRJbnZhbGlkUGxhY2VtZW50Q2VsbHMocm93LCBjb2wsIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gdGhpcy5pc0hvcml6b250YWwgPyByb3cgOiByb3cgKyBpO1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sID0gdGhpcy5pc0hvcml6b250YWwgPyBjb2wgKyBpIDogY29sO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobmV3Um93IDwgMTAgJiYgbmV3Q29sIDwgMTApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5wbGF5ZXJCb2FyZC5jaGlsZHJlbltuZXdSb3cgKiAxMCArIG5ld0NvbF07XG4gICAgICAgICAgICAgICAgY2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH1cblxuICAgIGNsZWFyUGxhY2VtZW50SGlnaGxpZ2h0KCkge1xuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMucGxheWVyQm9hcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2VsbCcpO1xuICAgICAgICBBcnJheS5mcm9tKGNlbGxzKS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZC1wbGFjZW1lbnQnLCAnaW52YWxpZC1wbGFjZW1lbnQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU2hpcFBsYWNlbWVudChlKSB7XG4gICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHJldHVybjtcblxuICAgICAgICBjb25zdCByb3cgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnJvdyk7XG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNoaXAgPSB0aGlzLnNoaXBzW3RoaXMuY3VycmVudFNoaXBJbmRleF07XG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChjdXJyZW50U2hpcC5sZW5ndGgpO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWUucGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgcm93LCBjb2wsIHRoaXMuaXNIb3Jpem9udGFsKSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJQbGF5ZXJCb2FyZCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaGlwTGlzdCgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEluZGV4Kys7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaGlwSW5kZXggPCB0aGlzLnNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTaGlwID0gdGhpcy5zaGlwc1t0aGlzLmN1cnJlbnRTaGlwSW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWVzc2FnZShgUGxhY2UgeW91ciAke25leHRTaGlwLm5hbWV9IChsZW5ndGg6ICR7bmV4dFNoaXAubGVuZ3RofSlgLCAnaW5mbycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2hpcExpc3QoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwcy10by1wbGFjZSBkaXYnKTtcbiAgICAgICAgc2hpcEVsZW1lbnRzW3RoaXMuY3VycmVudFNoaXBJbmRleF0uY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLnNldHVwUGhhc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5jb21wdXRlckJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgIHRoaXMuZ2FtZS5wbGFjZUNvbXB1dGVyU2hpcHMoKTtcbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlKCdHYW1lIHN0YXJ0ZWQhIEF0dGFjayB0aGUgY29tcHV0ZXJcXCdzIGJvYXJkLicsICdzdWNjZXNzJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUGxheWVyQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5nYW1lLnBsYXllci5nYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLnBsYXllckJvYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NlbGwnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBjZWxsc1tpICogMTAgKyBqXTtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSBib2FyZFtpXVtqXTtcblxuICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVBsYXllck1vdmUocm93LCBjb2wpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nYW1lLnBsYXlUdXJuKHJvdywgY29sKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDZWxsKHRoaXMuY29tcHV0ZXJCb2FyZCwgcm93LCBjb2wsIHJlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLnNldE1lc3NhZ2UocmVzdWx0ID09PSAnaGl0JyA/ICdIaXQhJyA6ICdNaXNzIScsIHJlc3VsdCA9PT0gJ2hpdCcgPyAnc3VjY2VzcycgOiAnZXJyb3InKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWUuZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDb21wdXRlck1vdmUoKTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lT3Zlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRNZXNzYWdlKGBHYW1lIE92ZXIhICR7cmVzdWx0fWAsICdzdWNjZXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDb21wdXRlck1vdmUoKSB7IFxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdhbWUucGxheVR1cm4oKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQgIT09ICdQbGF5ZXIgd2lucyEnICYmIHJlc3VsdCAhPT0gJ0NvbXB1dGVyIHdpbnMhJykge1xuICAgICAgICAgICAgY29uc3QgbGFzdE1vdmUgPSB0aGlzLmdhbWUucGxheWVyLmdhbWVib2FyZC5nZXRMYXN0TW92ZSgpO1xuICAgICAgICAgICAgaWYgKGxhc3RNb3ZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZWxsKHRoaXMucGxheWVyQm9hcmQsIGxhc3RNb3ZlLngsIGxhc3RNb3ZlLnksIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVPdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1lc3NhZ2UoYEdhbWUgT3ZlciEgJHtyZXN1bHR9YCwgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUNlbGwoYm9hcmQsIHJvdywgY29sLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSByb3cgKiAxMCArIGNvbDtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBib2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsJyk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBjZWxsc1tpbmRleF07XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICB0aGlzLnNldE1lc3NhZ2UoJ0hpdCEnLCAnc3VjY2VzcycpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWVzc2FnZSgnTWlzcyEnLCAnZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdzdW5rJykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZ2FtZUJvYXJkID0gYm9hcmQgPT09IHRoaXMucGxheWVyQm9hcmQgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUucGxheWVyLmdhbWVib2FyZCA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jb21wdXRlci5nYW1lYm9hcmQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZUJvYXJkLmJvYXJkW2ldW2pdID09PSAnc3VuaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bmtJbmRleCA9IGkgKiAxMCArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tzdW5rSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbc3Vua0luZGV4XS5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2V0TWVzc2FnZSgnU2hpcCBTdW5rIScsICdzdWNjZXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNZXNzYWdlKHRleHQsIHR5cGUpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlRGlzcGxheS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHRoaXMubWVzc2FnZURpc3BsYXkuY2xhc3NOYW1lID0gYG1lc3NhZ2UgJHt0eXBlfWA7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIG5ldyBHYW1lVUkoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==