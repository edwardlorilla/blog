webpackJsonp([1],{

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(51),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\blog\\resources\\assets\\js\\components\\Blog\\show.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] show.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72938544", Component.options)
  } else {
    hotAPI.reload("data-v-72938544", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['fetchArray'],
    mounted: function mounted() {
        console.log('Component mounted.');
    }
});

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-8"
  }, [_vm._m(0), _vm._v(" "), _c('h2', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v(_vm._s(_vm.fetchArray.title))])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "glyphicon glyphicon-time"
  }), _vm._v(" Posted on " + _vm._s(_vm.fetchArray.created_at))]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "http://placehold.it/900x300",
      "alt": ""
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.fetchArray.content))]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('hr')])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_vm._v("\n        Page Heading\n        "), _c('small', [_vm._v("Secondary Text")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "lead"
  }, [_vm._v("\n        by "), _c('a', [_vm._v("Start Bootstrap")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "btn btn-primary",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Read More "), _c('span', {
    staticClass: "glyphicon glyphicon-chevron-right"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72938544", module.exports)
  }
}

/***/ })

});