(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/_navbar */ "./assets/scripts/_navbar.js");
/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_navbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/_modules */ "./assets/scripts/_modules.js");
/* harmony import */ var _scripts_modal_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/_modal_delete */ "./assets/scripts/_modal_delete.js");
/* harmony import */ var _scripts_modal_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/_modal_switch */ "./assets/scripts/_modal_switch.js");
/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/_filters */ "./assets/scripts/_filters.js");
/* harmony import */ var _scripts_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/_pagination */ "./assets/scripts/_pagination.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application








/*!
 * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
//
// Scripts
//

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/functions/async.js":
/*!***********************************!*\
  !*** ./assets/functions/async.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async)
/* harmony export */ });
var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);

function async(url) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  axios.get(url).then(function (response) {
    if (element != null) {
      $(".".concat(element)).html(response.data);
    }
  })["catch"](function (error) {
    $(".".concat(element)).parent().html = "Erreur: ".concat(error.message);
    console.error("Il y a une erreur dans la requête", error);
  });
}

;


/***/ }),

/***/ "./assets/scripts/_filters.js":
/*!************************************!*\
  !*** ./assets/scripts/_filters.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _functions_async_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../functions/async.js */ "./assets/functions/async.js");









var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);

 // let async = (url, element = null) => {
//     axios
//       .get(url)
//       .then((response) => {
//         if (element != null) {
//         $(`.${element}`).html(response.data);
//         }
//       })
//       .catch((error) => {
//         $(`.${element}`).parent().html = `Erreur: ${error.message}`;
//         console.error("Il y a une erreur dans la requête", error);
//       });
//   };
// ______________________ FILTRE DES PARTENAIRES/STRUCTURES PAR NOM, OU ACTIVE/DESACTIVE _________________ //

function onClickFilter(event) {
  event.preventDefault();
  var filter = $(this).attr("name");
  var page = $("#filters input:hidden").attr("value");
  var query = $(".js-query").val();
  var params = new URLSearchParams();
  params.append("filter", filter);
  params.append("page", page);

  if ($(".js-query").val() != "") {
    params.append("query", query);
  }

  var url = new URL(window.location.href);
  (0,_functions_async_js__WEBPACK_IMPORTED_MODULE_8__.async)(url.pathname + "?" + params.toString() + "&ajax=1", "content"); // On met à jour l'url

  history.pushState({}, null, url.pathname + "?" + params.toString());
}

$(document).on("click", ".js-filter", onClickFilter);

/***/ }),

/***/ "./assets/scripts/_modal_delete.js":
/*!*****************************************!*\
  !*** ./assets/scripts/_modal_delete.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/async.js */ "./assets/functions/async.js");
var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);

 // ____________________ MODAL SUPPRESSION D'UN PARTENAIRE/STRUCTURE ____________________//

window.onclick = function (event) {
  if (event.target == $("#modal-delete")) {
    $("#modal-delete").css("display", "none");
  }
};

$('.modal_trigger').on("click", function (e) {
  console.log('ok');
  $("#modal-delete").css("display", "block");
});
$("#content").on("click", ".modal-trigger", function (e) {
  $("#modal-delete").css("display", "block");
  var href = $(this).data("slug") + "/" + $(this).data("id");
  $(".modal-footer-delete a").attr("href", href);
  var name = $(this).data("name");
  $(".modal-body-delete .question1").text("Voulez-vous supprimer ");
  $(".modal-body-delete .question2").text(name);
});
$("#cards").on("click", ".modal-trigger", function (e) {
  $("#modal-delete").css("display", "block");
  var href = $(this).data("slug") + "/" + $(this).data("id");
  $(".modal-footer-delete a").attr("href", href);
  var name = $(this).data("name");
  $(".modal-body-delete .question1").text("Voulez-vous supprimer ");
  $(".modal-body-delete .question2").text(name);
});
$(".btn-delete-cancel").on("click", function (e) {
  e.preventDefault();
  console.log("ok");
  $("#modal-delete").css("display", "none");
});

/***/ }),

/***/ "./assets/scripts/_modal_switch.js":
/*!*****************************************!*\
  !*** ./assets/scripts/_modal_switch.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _functions_async_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../functions/async.js */ "./assets/functions/async.js");














var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);

 // ____________________ MODAL ACTIVATION D'UN PARTENAIRE/STRUCTURE ____________________//
// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == $("#modal-switch")) {
    $("#modal-switch").css("display", "none");
  }
};

$(".modal-switch-user").css("cursor", "pointer");
var slug = "";
var state = "";
var name = "";
$("#cards").on("click", ".modal-switch-user", function (e) {
  if ($(this).data("disabled") === "disabled" || $(this).data("role") != "admin") {
    e.preventDefault();

    if ($(this).data("disabled") === "disabled") {
      $("#modal-switch").css("display", "block");
      $(".modal-body-switch .para1").text("La salle ne peut pas \xEAtre activ\xE9e quand le partenaire est d\xE9sactiv\xE9.");
      $("#btn-switch").css("display", "none");
      $("#btn-switch-cancel").text("VALIDER");
      $("#btn-switch-cancel").css("backgroundColor", "#0d6efd");
      $("#btn-switch-cancel").css("border", "none");
      $("#btn-switch-cancel").css("outline", "none");
    }
  } else {
    e.preventDefault();
    var switchChecked = $(this).is(":checked");
    name = $(this).data("name");

    if (!switchChecked) {
      $(".modal-body-switch .question1").text("Etes-vous s\xFBr de vouloir d\xE9sactiver ");
      $(".modal-body-switch .question2").text(name);
      var url = "";
      var href = window.location.pathname.split("/");

      if (href.includes("partenaires")) {
        $(".modal-body-switch .para1").css("display", "block");
        $(".modal-body-switch .para1").text("En d\xE9sactivant ce partenaire, vous d\xE9sactiverez toutes les structures auquel elles sont rattach\xE9es.");
      }
    } else {
      $(".modal-body-switch .question1").text("Etes-vous s\xFBr de vouloir activer ");
      $(".modal-body-switch .question2").text(name);
      $(".modal-body-switch .para1").css("display", "none");
    }

    $("#modal-switch").css("display", "block");
    slug = $(this).data("slug");
    state = $(this).data("state");
  }
});
$("#content").on("click", ".modal-switch-user", function (e) {
  if ($(this).data("disabled") === "disabled" || $(this).data("role") != "admin") {
    e.preventDefault();

    if ($(this).data("disabled") === "disabled") {
      $("#modal-switch").css("display", "block");
      $(".modal-body-switch .para1").text("La salle ne peut pas \xEAtre activ\xE9e quand le partenaire est d\xE9sactiv\xE9.");
      $("#btn-switch").css("display", "none");
      $("#btn-switch-cancel").text("VALIDER");
      $("#btn-switch-cancel").css("backgroundColor", "#0d6efd");
      $("#btn-switch-cancel").css("border", "none");
      $("#btn-switch-cancel").css("outline", "none");
    }
  } else {
    e.preventDefault();
    var switchChecked = $(this).is(":checked");
    name = $(this).data("name");

    if (!switchChecked) {
      $(".modal-body-switch .question1").text("Etes-vous s\xFBr de vouloir d\xE9sactiver ");
      $(".modal-body-switch .question2").text(name);
      var href = window.location.pathname.split("/");

      if (href.includes("partenaires")) {
        $(".modal-body-switch .para1").css("display", "block");
        $(".modal-body-switch .para1").text("En d\xE9sactivant ce partenaire, vous d\xE9sactiverez toutes les structures auquel elles sont rattach\xE9es.");
      }
    } else {
      $(".modal-body-switch .question1").text("Etes-vous s\xFBr de vouloir activer ");
      $(".modal-body-switch .question2").text(name);
      $(".modal-body-switch .para1").css("display", "none");
    }

    $("#modal-switch").css("display", "block");
    slug = $(this).data("slug");
    state = $(this).data("state");
  }
});
$(".btn-switch").on("click", function (e) {
  e.preventDefault();
  var params = new URLSearchParams(window.location.search);
  var paramsToString = params.toString();
  var url = "";
  var href = window.location.pathname.split("/");

  if (href.includes("partenaires")) {
    url = "".concat(window.location.protocol, "//").concat(window.location.host, "/partenaires/").concat(slug, "/active-user/?").concat(paramsToString);
  } else {
    url = "".concat(window.location.protocol, "//").concat(window.location.host, "/structures/").concat(slug, "/active-user/?").concat(paramsToString);

    if (href[2] != "") {
      var date = new Date();
      date.setTime(date.getTime() + 1000);
      $.cookie("card", "ok", {
        expires: date,
        path: "/;SameSite=None",
        secure: true
      });
    }
  }

  (0,_functions_async_js__WEBPACK_IMPORTED_MODULE_13__.async)(url, "content");
  $("#modal-switch").css("display", "none");
});
$(".btn-switch-cancel").on("click", function (e) {
  e.preventDefault();
  $("#modal-switch").css("display", "none");
});

/***/ }),

/***/ "./assets/scripts/_modules.js":
/*!************************************!*\
  !*** ./assets/scripts/_modules.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_async_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/async.js */ "./assets/functions/async.js");






var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);



window.onclick = function (event) {
  if (event.target == $("#modal-module")) {
    $("#modal-module").css("display", "none");
  }
};
/* _____________ ACTIVATION/DESACTIVATION DE MODULE ____________________________*/


$(".activate-module").css("cursor", "pointer");
var name, slug, role, moduleId, switchChecked, modulepartner;
$("#modules").on("click", ".activate-module", function (e) {
  modulepartner = $(this).data("modulepartner") == "1" ? "activé" : "désactivé";
  switchChecked = !$(this).is(":checked");
  e.preventDefault();

  if ($(this).data("disabled") === "disabled" || $(this).data("role") != "admin") {
    e.preventDefault();
  } else {
    e.preventDefault();
    $("#modal-module").css("display", "block");
    name = $(this).data("name");
    var href = window.location.pathname.split("/");

    if (href.includes("partenaires")) {
      if (switchChecked) {
        $(".modal-body-module .question1").text("Etes-vous s\xFBr de vouloir d\xE9sactiver");
        $(".modal-body-module .question2").text("".concat(name));
        $(".modal-body-module .para1").text("En d\xE9sactivant ce droit, vous d\xE9sactiverez celui des structures dont d\xE9pend ce partenaire.");
      } else {
        $(".modal-body-module .question1").text("Etes-vous s\xFBr de vouloir activer");
        $(".modal-body-module .question2").text("".concat(name));
        $(".modal-body-module .para1").text("Cette action ne concerne que ce partenaire. Ce droit devra \xEAtre activ\xE9 au cas par cas pour chaque structure dont d\xE9pend le partenaire.");
      }
    } else if (switchChecked) {
      e.preventDefault();
      $(".modal-body-module .question").css("display", "block");
      $(".modal-body-module .question1").text("Etes-vous s\xFBr de vouloir d\xE9sactiver");
      $(".modal-body-module .question2").text("".concat(name));
      $(".modal-body-module .para1").text("Cette action n'a aucune influence sur le droit du partenaire dont d\xE9pend cette structure.");
      $("#btn-module").css("display", "block");
      $("#btn-module-cancel").text("ANNULER");
      $("#btn-module-cancel").css("backgroundColor", "#dc3545");
    } else {
      e.preventDefault();

      if (modulepartner === "désactivé") {
        $(".modal-body-module .question").css("display", "none");
        $(".modal-body-module .para1").text("Vous ne pouvez pas activer le droit de cette structure car celui du partenaire n'est pas activ\xE9.");
        $("#btn-module").css("display", "none");
        $("#btn-module-cancel").text("VALIDER");
        $("#btn-module-cancel").css("backgroundColor", "#0d6efd");
        $("#btn-module-cancel").css("border", "none");
        $("#btn-module-cancel").css("outline", "none");
      } else {
        $(".modal-body-module .question").css("display", "block");
        $(".modal-body-module .question1").text("Etes-vous s\xFBr de vouloir activer");
        $(".modal-body-module .question2").text("".concat(name));
        $(".modal-body-module .para1").text("Cette action n'a aucune influence sur le droit du partenaire dont d\xE9pend cette structure.");
        $("#btn-module").css("display", "flex");
        $("#btn-module-cancel").text("ANNULER");
        $("#btn-module-cancel").css("backgroundColor", "#dc3545");
      }
    }

    slug = $(this).data("slug");
    role = $(this).data("role");
    moduleId = $(this).data("idmodule");
  }
});
$(".btn-module").on("click", function (e) {
  e.preventDefault();
  var url = "";
  var href = window.location.pathname.split("/");

  if (role === "admin") {
    if (href.includes("partenaires")) {
      url = "".concat(window.location.protocol, "//").concat(window.location.host, "/partenaires/").concat(slug, "/").concat(moduleId, "/active-module");
    } else {
      url = "".concat(window.location.protocol, "//").concat(window.location.host, "/structures/").concat(slug, "/").concat(moduleId, "/active-module");
    }

    (0,_functions_async_js__WEBPACK_IMPORTED_MODULE_5__.async)(url, "modules");
  } else {
    e.preventDefault();
  }

  $("#modal-module").css("display", "none");
  $(".activate-module").css("cursor", "pointer");
});
$(".btn-module-cancel").on("click", function (e) {
  e.preventDefault();
  $("#modal-module").css("display", "none");
  $(".activate-module").css("cursor", "pointer");
});

/***/ }),

/***/ "./assets/scripts/_navbar.js":
/*!***********************************!*\
  !*** ./assets/scripts/_navbar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*_______________ TOPNAV ________________________*/
window.addEventListener("DOMContentLoaded", function (event) {
  // Toggle the side navigation
  var sidebarToggle = document.body.querySelector("#sidebarToggle");

  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", function (event) {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
    });
  }
});
/*_______________ SIDENAV ________________________*/

var navLinks = $(".nav-link");
var current = location.href;

var _iterator = _createForOfIteratorHelper(navLinks),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var navLink = _step.value;

    if (navLink.href == current || navLink.href.split("/").slice(0, 4)[3] == current.split("/").slice(0, 4)[3]) {
      navLink.className.replace("active", "");
      navLink.className += " active";
      navLink.style.color = "#fff";
    }
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

if (current.split("/")[4] === "partenaire" || current.split("/")[4] === "structure") {
  $('.nav-dead-link').css('color', 'white');
}

/***/ }),

/***/ "./assets/scripts/_pagination.js":
/*!***************************************!*\
  !*** ./assets/scripts/_pagination.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/async.js */ "./assets/functions/async.js");







var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);


/*_______________ PAGINATION ________________________*/

$("#content").on("click", ".page-link", function (e) {
  e.preventDefault();
  var params = $(this).attr("href");
  var url = new URL(window.location.href);
  (0,_functions_async_js__WEBPACK_IMPORTED_MODULE_6__.async)(url.pathname + params + "&ajax=1", "content");
});
/*
$('.card').css("cursor", "pointer");

$("#content").on("click", '.card', function (e) {
    console.log($('a', this).attr('href'));
    let href = $('a', this).attr('href');
    window.location.href = href;
})
 */

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-300d0c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLFFBQVAsQ0FBZ0JDLElBQXhCLENBQVY7RUFDQTFCLDBEQUFLLENBQUNDLEdBQUcsQ0FBQzBCLFFBQUosR0FBZVAsTUFBZixHQUF3QixTQUF6QixFQUFvQyxTQUFwQyxDQUFMO0FBQ0gsQ0FMRDtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mdW5jdGlvbnMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX21vZGFsX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fbW9kYWxfc3dpdGNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19tb2R1bGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX3BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz8zZThhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5pbXBvcnQgJy4vc2NyaXB0cy9fbmF2YmFyJztcbmltcG9ydCAnLi9zY3JpcHRzL19tb2R1bGVzJztcbmltcG9ydCAnLi9zY3JpcHRzL19tb2RhbF9kZWxldGUnO1xuaW1wb3J0ICcuL3NjcmlwdHMvX21vZGFsX3N3aXRjaCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9fZmlsdGVycyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9fcGFnaW5hdGlvbic7XG5cblxuLyohXG4gKiBTdGFydCBCb290c3RyYXAgLSBTQiBBZG1pbiB2Ny4wLjUgKGh0dHBzOi8vc3RhcnRib290c3RyYXAuY29tL3RlbXBsYXRlL3NiLWFkbWluKVxuICogQ29weXJpZ2h0IDIwMTMtMjAyMiBTdGFydCBCb290c3RyYXBcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL1N0YXJ0Qm9vdHN0cmFwL3N0YXJ0Ym9vdHN0cmFwLXNiLWFkbWluL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbi8vXG4vLyBTY3JpcHRzXG4vLyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcblxyXG5mdW5jdGlvbiBhc3luYyAodXJsLCBlbGVtZW50ID0gbnVsbCkgeyAgICBcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQodXJsKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgJChgLiR7ZWxlbWVudH1gKS5odG1sKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICQoYC4ke2VsZW1lbnR9YCkucGFyZW50KCkuaHRtbCA9IGBFcnJldXI6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbCB5IGEgdW5lIGVycmV1ciBkYW5zIGxhIHJlcXXDqnRlXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IHthc3luY307IiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcbmltcG9ydCB7YXN5bmN9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXN5bmMuanNcIlxyXG5cclxuXHJcbi8vIGxldCBhc3luYyA9ICh1cmwsIGVsZW1lbnQgPSBudWxsKSA9PiB7XHJcbi8vICAgICBheGlvc1xyXG4vLyAgICAgICAuZ2V0KHVybClcclxuLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCkge1xyXG4vLyAgICAgICAgICQoYC4ke2VsZW1lbnR9YCkuaHRtbChyZXNwb25zZS5kYXRhKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH0pXHJcbi8vICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuLy8gICAgICAgICAkKGAuJHtlbGVtZW50fWApLnBhcmVudCgpLmh0bWwgPSBgRXJyZXVyOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiSWwgeSBhIHVuZSBlcnJldXIgZGFucyBsYSByZXF1w6p0ZVwiLCBlcnJvcik7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH07XHJcblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19fIEZJTFRSRSBERVMgUEFSVEVOQUlSRVMvU1RSVUNUVVJFUyBQQVIgTk9NLCBPVSBBQ1RJVkUvREVTQUNUSVZFIF9fX19fX19fX19fX19fX19fIC8vXHJcblxyXG5mdW5jdGlvbiBvbkNsaWNrRmlsdGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZpbHRlciA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICBsZXQgcGFnZSA9ICQoXCIjZmlsdGVycyBpbnB1dDpoaWRkZW5cIikuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgbGV0IHF1ZXJ5ID0gJChcIi5qcy1xdWVyeVwiKS52YWwoKTtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBwYXJhbXMuYXBwZW5kKFwiZmlsdGVyXCIsIGZpbHRlcik7XHJcbiAgICBwYXJhbXMuYXBwZW5kKFwicGFnZVwiLCBwYWdlKTtcclxuICAgIGlmICgkKFwiLmpzLXF1ZXJ5XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICBwYXJhbXMuYXBwZW5kKFwicXVlcnlcIiwgcXVlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIGFzeW5jKHVybC5wYXRobmFtZSArIFwiP1wiICsgcGFyYW1zLnRvU3RyaW5nKCkgKyBcIiZhamF4PTFcIiwgXCJjb250ZW50XCIpO1xyXG5cclxuICAgIC8vIE9uIG1ldCDDoCBqb3VyIGwndXJsXHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgbnVsbCwgdXJsLnBhdGhuYW1lICsgXCI/XCIgKyBwYXJhbXMudG9TdHJpbmcoKSk7XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuanMtZmlsdGVyXCIsIG9uQ2xpY2tGaWx0ZXIpOyIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG5pbXBvcnQge2FzeW5jfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCJcclxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fIE1PREFMIFNVUFBSRVNTSU9OIEQnVU4gUEFSVEVOQUlSRS9TVFJVQ1RVUkUgX19fX19fX19fX19fX19fX19fX18vL1xyXG5cclxuXHJcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gJChcIiNtb2RhbC1kZWxldGVcIikpIHtcclxuICAgICAgICAgICAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkKCcubW9kYWxfdHJpZ2dlcicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb2snKTtcclxuICAgICAgICAkKFwiI21vZGFsLWRlbGV0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI2NvbnRlbnRcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC10cmlnZ2VyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIGxldCBocmVmID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKSArIFwiL1wiICsgJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgICAgICAgJChcIi5tb2RhbC1mb290ZXItZGVsZXRlIGFcIikuYXR0cihcImhyZWZcIiwgaHJlZik7XHJcbiAgICAgICAgbGV0IG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1kZWxldGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFwiVm91bGV6LXZvdXMgc3VwcHJpbWVyIFwiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktZGVsZXRlIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjY2FyZHNcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC10cmlnZ2VyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIGxldCBocmVmID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKSArIFwiL1wiICsgJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgICAgICAgJChcIi5tb2RhbC1mb290ZXItZGVsZXRlIGFcIikuYXR0cihcImhyZWZcIiwgaHJlZik7XHJcbiAgICAgICAgbGV0IG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1kZWxldGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFwiVm91bGV6LXZvdXMgc3VwcHJpbWVyIFwiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktZGVsZXRlIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuYnRuLWRlbGV0ZS1jYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgICQoXCIjbW9kYWwtZGVsZXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfSk7XHJcblxyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKS5kZWZhdWx0O1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXN5bmMuanNcIjtcclxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fIE1PREFMIEFDVElWQVRJT04gRCdVTiBQQVJURU5BSVJFL1NUUlVDVFVSRSBfX19fX19fX19fX19fX19fX19fXy8vXHJcblxyXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoZXZlbnQudGFyZ2V0ID09ICQoXCIjbW9kYWwtc3dpdGNoXCIpKSB7XHJcbiAgICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICB9XHJcbn07XHJcblxyXG4kKFwiLm1vZGFsLXN3aXRjaC11c2VyXCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XHJcblxyXG5sZXQgc2x1ZyA9IFwiXCI7XHJcbmxldCBzdGF0ZSA9IFwiXCI7XHJcbmxldCBuYW1lID0gXCJcIjtcclxuXHJcbiQoXCIjY2FyZHNcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC1zd2l0Y2gtdXNlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmIChcclxuICAgICQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIgfHxcclxuICAgICQodGhpcykuZGF0YShcInJvbGVcIikgIT0gXCJhZG1pblwiXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoJCh0aGlzKS5kYXRhKFwiZGlzYWJsZWRcIikgPT09IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgYExhIHNhbGxlIG5lIHBldXQgcGFzIMOqdHJlIGFjdGl2w6llIHF1YW5kIGxlIHBhcnRlbmFpcmUgZXN0IGTDqXNhY3RpdsOpLmBcclxuICAgICAgKTtcclxuICAgICAgJChcIiNidG4tc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2gtY2FuY2VsXCIpLnRleHQoXCJWQUxJREVSXCIpO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2gtY2FuY2VsXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiLCBcIiMwZDZlZmRcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikuY3NzKFwiYm9yZGVyXCIsIFwibm9uZVwiKTtcclxuICAgICAgJChcIiNidG4tc3dpdGNoLWNhbmNlbFwiKS5jc3MoXCJvdXRsaW5lXCIsIFwibm9uZVwiKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHN3aXRjaENoZWNrZWQgPSAkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgICBuYW1lID0gJCh0aGlzKS5kYXRhKFwibmFtZVwiKTtcclxuICAgIGlmICghc3dpdGNoQ2hlY2tlZCkge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBkw6lzYWN0aXZlciBgXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG4gICAgICBsZXQgdXJsID0gXCJcIjtcclxuICAgICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgICBpZiAoaHJlZi5pbmNsdWRlcyhcInBhcnRlbmFpcmVzXCIpKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgRW4gZMOpc2FjdGl2YW50IGNlIHBhcnRlbmFpcmUsIHZvdXMgZMOpc2FjdGl2ZXJleiB0b3V0ZXMgbGVzIHN0cnVjdHVyZXMgYXVxdWVsIGVsbGVzIHNvbnQgcmF0dGFjaMOpZXMuYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGFjdGl2ZXIgYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgc2x1ZyA9ICQodGhpcykuZGF0YShcInNsdWdcIik7XHJcbiAgICBzdGF0ZSA9ICQodGhpcykuZGF0YShcInN0YXRlXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiI2NvbnRlbnRcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC1zd2l0Y2gtdXNlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICAgICQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIgfHxcclxuICAgICAgICAkKHRoaXMpLmRhdGEoXCJyb2xlXCIpICE9IFwiYWRtaW5cIlxyXG4gICAgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmRhdGEoXCJkaXNhYmxlZFwiKSA9PT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICAgIGBMYSBzYWxsZSBuZSBwZXV0IHBhcyDDqnRyZSBhY3RpdsOpZSBxdWFuZCBsZSBwYXJ0ZW5haXJlIGVzdCBkw6lzYWN0aXbDqS5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiI2J0bi1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIiNidG4tc3dpdGNoLWNhbmNlbFwiKS50ZXh0KFwiVkFMSURFUlwiKTtcclxuICAgICAgICAkKFwiI2J0bi1zd2l0Y2gtY2FuY2VsXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiLCBcIiMwZDZlZmRcIik7XHJcbiAgICAgICAgJChcIiNidG4tc3dpdGNoLWNhbmNlbFwiKS5jc3MoXCJib3JkZXJcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikuY3NzKFwib3V0bGluZVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHN3aXRjaENoZWNrZWQgPSAkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgICAgICAgbmFtZSA9ICQodGhpcykuZGF0YShcIm5hbWVcIik7XHJcbiAgICAgICAgaWYgKCFzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGTDqXNhY3RpdmVyIGBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG4gICAgICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBpZiAoaHJlZi5pbmNsdWRlcyhcInBhcnRlbmFpcmVzXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgICAgYEVuIGTDqXNhY3RpdmFudCBjZSBwYXJ0ZW5haXJlLCB2b3VzIGTDqXNhY3RpdmVyZXogdG91dGVzIGxlcyBzdHJ1Y3R1cmVzIGF1cXVlbCBlbGxlcyBzb250IHJhdHRhY2jDqWVzLmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgYWN0aXZlciBgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIHNsdWcgPSAkKHRoaXMpLmRhdGEoXCJzbHVnXCIpO1xyXG4gICAgICAgIHN0YXRlID0gJCh0aGlzKS5kYXRhKFwic3RhdGVcIik7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbiQoXCIuYnRuLXN3aXRjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICBsZXQgcGFyYW1zVG9TdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcclxuICBsZXQgdXJsID0gXCJcIjtcclxuICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vcGFydGVuYWlyZXMvJHtzbHVnfS9hY3RpdmUtdXNlci8/JHtwYXJhbXNUb1N0cmluZ31gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9zdHJ1Y3R1cmVzLyR7c2x1Z30vYWN0aXZlLXVzZXIvPyR7cGFyYW1zVG9TdHJpbmd9YDtcclxuICAgIGlmIChocmVmWzJdICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAxMDAwKTtcclxuICAgICAgJC5jb29raWUoXCJjYXJkXCIsIFwib2tcIiwge1xyXG4gICAgICAgIGV4cGlyZXM6IGRhdGUsXHJcbiAgICAgICAgcGF0aDogXCIvO1NhbWVTaXRlPU5vbmVcIixcclxuICAgICAgICBzZWN1cmU6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyh1cmwsIFwiY29udGVudFwiKTtcclxuICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufSk7XHJcblxyXG4kKFwiLmJ0bi1zd2l0Y2gtY2FuY2VsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbn0pO1xyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKS5kZWZhdWx0O1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXN5bmMuanNcIjtcclxuXHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgaWYgKGV2ZW50LnRhcmdldCA9PSAkKFwiI21vZGFsLW1vZHVsZVwiKSkge1xyXG4gICAgJChcIiNtb2RhbC1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyogX19fX19fX19fX19fXyBBQ1RJVkFUSU9OL0RFU0FDVElWQVRJT04gREUgTU9EVUxFIF9fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xyXG5cclxuJChcIi5hY3RpdmF0ZS1tb2R1bGVcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuXHJcbmxldCBuYW1lLCBzbHVnLCByb2xlLCBtb2R1bGVJZCwgc3dpdGNoQ2hlY2tlZCwgbW9kdWxlcGFydG5lcjtcclxuXHJcbiQoXCIjbW9kdWxlc1wiKS5vbihcImNsaWNrXCIsIFwiLmFjdGl2YXRlLW1vZHVsZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIG1vZHVsZXBhcnRuZXIgPSAoJCh0aGlzKS5kYXRhKFwibW9kdWxlcGFydG5lclwiKSA9PSBcIjFcIikgPyBcImFjdGl2w6lcIiA6IFwiZMOpc2FjdGl2w6lcIiA7XHJcbiAgc3dpdGNoQ2hlY2tlZCA9ICEkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmIChcclxuICAgICQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIgfHxcclxuICAgICQodGhpcykuZGF0YShcInJvbGVcIikgIT0gXCJhZG1pblwiXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAkKFwiI21vZGFsLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICBcclxuICAgIG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgICBpZiAoc3dpdGNoQ2hlY2tlZCkge1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgZMOpc2FjdGl2ZXJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgRW4gZMOpc2FjdGl2YW50IGNlIGRyb2l0LCB2b3VzIGTDqXNhY3RpdmVyZXogY2VsdWkgZGVzIHN0cnVjdHVyZXMgZG9udCBkw6lwZW5kIGNlIHBhcnRlbmFpcmUuYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBhY3RpdmVyYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24yXCIpLnRleHQoYCR7bmFtZX1gKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYENldHRlIGFjdGlvbiBuZSBjb25jZXJuZSBxdWUgY2UgcGFydGVuYWlyZS4gQ2UgZHJvaXQgZGV2cmEgw6p0cmUgYWN0aXbDqSBhdSBjYXMgcGFyIGNhcyBwb3VyIGNoYXF1ZSBzdHJ1Y3R1cmUgZG9udCBkw6lwZW5kIGxlIHBhcnRlbmFpcmUuYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc3dpdGNoQ2hlY2tlZCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIFxyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBkw6lzYWN0aXZlcmBcclxuICAgICAgKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24yXCIpLnRleHQoYCR7bmFtZX1gKTtcclxuICAgICAgXHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgYENldHRlIGFjdGlvbiBuJ2EgYXVjdW5lIGluZmx1ZW5jZSBzdXIgbGUgZHJvaXQgZHUgcGFydGVuYWlyZSBkb250IGTDqXBlbmQgY2V0dGUgc3RydWN0dXJlLmBcclxuICAgICAgKTtcclxuXHJcbiAgICAgICQoXCIjYnRuLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS50ZXh0KFwiQU5OVUxFUlwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiLCBcIiNkYzM1NDVcIik7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgICAgaWYgKG1vZHVsZXBhcnRuZXIgPT09IFwiZMOpc2FjdGl2w6lcIikge1xyXG5cclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYFZvdXMgbmUgcG91dmV6IHBhcyBhY3RpdmVyIGxlIGRyb2l0IGRlIGNldHRlIHN0cnVjdHVyZSBjYXIgY2VsdWkgZHUgcGFydGVuYWlyZSBuJ2VzdCBwYXMgYWN0aXbDqS5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS50ZXh0KFwiVkFMSURFUlwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiLCBcIiMwZDZlZmRcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS5jc3MoXCJib3JkZXJcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikuY3NzKFwib3V0bGluZVwiLCBcIm5vbmVcIik7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBhY3RpdmVyYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24yXCIpLnRleHQoYCR7bmFtZX1gKTsgICAgICAgIFxyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgQ2V0dGUgYWN0aW9uIG4nYSBhdWN1bmUgaW5mbHVlbmNlIHN1ciBsZSBkcm9pdCBkdSBwYXJ0ZW5haXJlIGRvbnQgZMOpcGVuZCBjZXR0ZSBzdHJ1Y3R1cmUuYFxyXG4gICAgICAgICk7ICAgICAgICBcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS50ZXh0KFwiQU5OVUxFUlwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiLCBcIiNkYzM1NDVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzbHVnID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKTtcclxuICAgIHJvbGUgPSAkKHRoaXMpLmRhdGEoXCJyb2xlXCIpO1xyXG4gICAgbW9kdWxlSWQgPSAkKHRoaXMpLmRhdGEoXCJpZG1vZHVsZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcIi5idG4tbW9kdWxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IHVybCA9IFwiXCI7XHJcbiAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gIGlmIChyb2xlID09PSBcImFkbWluXCIpIHtcclxuICAgIGlmIChocmVmLmluY2x1ZGVzKFwicGFydGVuYWlyZXNcIikpIHtcclxuICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vcGFydGVuYWlyZXMvJHtzbHVnfS8ke21vZHVsZUlkfS9hY3RpdmUtbW9kdWxlYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L3N0cnVjdHVyZXMvJHtzbHVnfS8ke21vZHVsZUlkfS9hY3RpdmUtbW9kdWxlYDtcclxuICAgIH1cclxuICAgIGFzeW5jKHVybCwgXCJtb2R1bGVzXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG4gICQoXCIjbW9kYWwtbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICQoXCIuYWN0aXZhdGUtbW9kdWxlXCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIilcclxufSk7XHJcblxyXG4kKFwiLmJ0bi1tb2R1bGUtY2FuY2VsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJChcIiNtb2RhbC1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgJChcIi5hY3RpdmF0ZS1tb2R1bGVcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKVxyXG59KTtcclxuIiwiLypfX19fX19fX19fX19fX18gVE9QTkFWIF9fX19fX19fX19fX19fX19fX19fX19fXyovXHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xyXG4gICAgLy8gVG9nZ2xlIHRoZSBzaWRlIG5hdmlnYXRpb25cclxuICAgIGNvbnN0IHNpZGViYXJUb2dnbGUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclRvZ2dsZVwiKTtcclxuICAgIGlmIChzaWRlYmFyVG9nZ2xlKSB7XHJcbiAgICAgICAgLy8gVW5jb21tZW50IEJlbG93IHRvIHBlcnNpc3Qgc2lkZWJhciB0b2dnbGUgYmV0d2VlbiByZWZyZXNoZXNcclxuICAgICAgICAvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NifHNpZGViYXItdG9nZ2xlJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NiLXNpZGVuYXYtdG9nZ2xlZCcpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBzaWRlYmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwic2Itc2lkZW5hdi10b2dnbGVkXCIpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgICAgIFwic2J8c2lkZWJhci10b2dnbGVcIixcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2Itc2lkZW5hdi10b2dnbGVkXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLypfX19fX19fX19fX19fX18gU0lERU5BViBfX19fX19fX19fX19fX19fX19fX19fX18qL1xyXG5cclxubGV0IG5hdkxpbmtzID0gJChcIi5uYXYtbGlua1wiKTtcclxubGV0IGN1cnJlbnQgPSBsb2NhdGlvbi5ocmVmO1xyXG5cclxuZm9yIChsZXQgbmF2TGluayBvZiBuYXZMaW5rcykge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIG5hdkxpbmsuaHJlZiA9PSBjdXJyZW50IHx8XHJcbiAgICAgICAgbmF2TGluay5ocmVmLnNwbGl0KFwiL1wiKS5zbGljZSgwLCA0KVszXSA9PVxyXG4gICAgICAgIGN1cnJlbnQuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIDQpWzNdXHJcbiAgICApIHtcclxuICAgICAgICBuYXZMaW5rLmNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgICAgIG5hdkxpbmsuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gICAgICAgIG5hdkxpbmsuc3R5bGUuY29sb3IgPSBcIiNmZmZcIjtcclxuICAgIH1cclxufVxyXG5cclxuaWYgKGN1cnJlbnQuc3BsaXQoXCIvXCIpWzRdID09PSBcInBhcnRlbmFpcmVcIiB8fCBjdXJyZW50LnNwbGl0KFwiL1wiKVs0XSA9PT0gXCJzdHJ1Y3R1cmVcIikge1xyXG4gICAgJCgnLm5hdi1kZWFkLWxpbmsnKS5jc3MoJ2NvbG9yJywgJ3doaXRlJylcclxufVxyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcclxuaW1wb3J0IHthc3luY30gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiXHJcblxyXG4vKl9fX19fX19fX19fX19fXyBQQUdJTkFUSU9OIF9fX19fX19fX19fX19fX19fX19fX19fXyovXHJcbiQoXCIjY29udGVudFwiKS5vbihcImNsaWNrXCIsIFwiLnBhZ2UtbGlua1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHBhcmFtcyA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcbiAgICBsZXQgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICBhc3luYyh1cmwucGF0aG5hbWUgKyBwYXJhbXMgKyBcIiZhamF4PTFcIiwgXCJjb250ZW50XCIpO1xyXG59KTtcclxuXHJcblxyXG4vKlxyXG4kKCcuY2FyZCcpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XHJcblxyXG4kKFwiI2NvbnRlbnRcIikub24oXCJjbGlja1wiLCAnLmNhcmQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJCgnYScsIHRoaXMpLmF0dHIoJ2hyZWYnKSk7XHJcbiAgICBsZXQgaHJlZiA9ICQoJ2EnLCB0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XHJcbn0pXHJcbiAqLyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiYXhpb3MiLCJhc3luYyIsInVybCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsIiQiLCJodG1sIiwiZGF0YSIsImVycm9yIiwicGFyZW50IiwibWVzc2FnZSIsImNvbnNvbGUiLCJvbkNsaWNrRmlsdGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlciIsImF0dHIiLCJwYWdlIiwicXVlcnkiLCJ2YWwiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJwYXRobmFtZSIsInRvU3RyaW5nIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRvY3VtZW50Iiwib24iLCJvbmNsaWNrIiwidGFyZ2V0IiwiY3NzIiwiZSIsImxvZyIsIm5hbWUiLCJ0ZXh0Iiwic2x1ZyIsInN0YXRlIiwic3dpdGNoQ2hlY2tlZCIsImlzIiwic3BsaXQiLCJpbmNsdWRlcyIsInNlYXJjaCIsInBhcmFtc1RvU3RyaW5nIiwicHJvdG9jb2wiLCJob3N0IiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImNvb2tpZSIsImV4cGlyZXMiLCJwYXRoIiwic2VjdXJlIiwicm9sZSIsIm1vZHVsZUlkIiwibW9kdWxlcGFydG5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaWRlYmFyVG9nZ2xlIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29udGFpbnMiLCJuYXZMaW5rcyIsImN1cnJlbnQiLCJuYXZMaW5rIiwic2xpY2UiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwic3R5bGUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=