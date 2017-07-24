webpackJsonp([0],{

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(62),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\blog\\resources\\assets\\js\\components\\Blog\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23ce2a1b", Component.options)
  } else {
    hotAPI.reload("data-v-23ce2a1b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__grid_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__post_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__State_blogState__ = __webpack_require__(61);
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
    components: {
        defaultComponent: __WEBPACK_IMPORTED_MODULE_0__grid_vue___default.a,
        listsComponent: __WEBPACK_IMPORTED_MODULE_2__list_vue___default.a,
        blogPost: __WEBPACK_IMPORTED_MODULE_1__post_vue___default.a
    }, data: function data() {
        return {
            dataView: __WEBPACK_IMPORTED_MODULE_3__State_blogState__["a" /* default */].data
        };
    },
    mounted: function mounted() {
        var vm = this;
        vm.fetchData();
    },

    computed: {
        dynamicComponent: function dynamicComponent() {
            var vm = this;
            if (vm.dataView.STATE_VIEW) {
                return 'default-component';
            } else {
                return 'lists-component';
            }
        }
    },
    methods: {
        selectedPost: function selectedPost(index) {
            __WEBPACK_IMPORTED_MODULE_3__State_blogState__["a" /* default */].selectedPost(index);
        },
        fetchData: function fetchData() {
            var urlFetch = 'api/blog';
            __WEBPACK_IMPORTED_MODULE_3__State_blogState__["a" /* default */].fetch(urlFetch);
        }
    }
});

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(52),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\blog\\resources\\assets\\js\\components\\Blog\\grid.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] grid.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cc8a2de6", Component.options)
  } else {
    hotAPI.reload("data-v-cc8a2de6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 51:
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
    props: ['fetchArray']
});

/***/ }),

/***/ 52:
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
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.fetchArray.content))]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        _vm.$emit('selectedPost', _vm.fetchArray)
      }
    }
  }, [_vm._v("Read More "), _c('span', {
    staticClass: "glyphicon glyphicon-chevron-right"
  })]), _vm._v(" "), _c('hr')])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "page-header"
  }, [_vm._v("\n        Page Heading\n        "), _c('small', [_vm._v("Secondary Text")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "lead"
  }, [_vm._v("\n        by "), _c('a', [_vm._v("Start Bootstrap")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cc8a2de6", module.exports)
  }
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(55),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\blog\\resources\\assets\\js\\components\\Blog\\post.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] post.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98368d32", Component.options)
  } else {
    hotAPI.reload("data-v-98368d32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 54:
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['selectedObject'],
    mounted: function mounted() {
        console.log('Component mounted.');
    }
});

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-lg-8"
  }, [_c('h1', [_vm._v(_vm._s(_vm.selectedObject.title))]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "glyphicon glyphicon-time"
  }), _vm._v(" Posted on " + _vm._s(_vm.selectedObject.created_at))]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "http://placehold.it/900x300",
      "alt": ""
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
    staticClass: "lead"
  }, [_vm._v("\n        " + _vm._s(_vm.selectedObject.content) + "\n    ")]), _vm._v(" "), _c('hr')])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "lead"
  }, [_vm._v("\n        by "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Start Bootstrap")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-98368d32", module.exports)
  }
}

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(57)
}
var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(60),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-520abb36",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\blog\\resources\\assets\\js\\components\\Blog\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-520abb36", Component.options)
  } else {
    hotAPI.reload("data-v-520abb36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("59259037", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-520abb36\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-520abb36\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(undefined);
// imports


// module
exports.push([module.i, "\n.bg[data-v-520abb36] {\n    background-color: #dfdfdf;\n}\n.rwrapper[data-v-520abb36] {\n    padding: 5px;\n}\n.rlisting[data-v-520abb36] {\n    background-color: #fff;\n    overflow: hidden;\n}\n.rlisting img[data-v-520abb36] {\n    width: 100%\n}\n.nopad[data-v-520abb36] {\n    padding: 0;\n}\n.rfooter[data-v-520abb36] {\n    background: #f1f3f5;\n    border-top: 1px #ebebeb solid;\n    width: 100%;\n    padding: 10px 15px\n}\n.rlisting h5[data-v-520abb36], .rlisting p[data-v-520abb36] {\n    padding: 0 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 59:
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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-12 col-sm-6 col-md-3 rwrapper"
  }, [_c('div', {
    staticClass: "rlisting"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 nopad"
  }, [_c('h1', [_vm._v(_vm._s(_vm.fetchArray.title))]), _vm._v(" "), _c('h5', [_vm._v(_vm._s(_vm.fetchArray.created_at))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.fetchArray.content))]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        _vm.$emit('selectedPost', _vm.fetchArray)
      }
    }
  }, [_vm._v("Read More "), _c('span', {
    staticClass: "glyphicon glyphicon-chevron-right"
  })])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-12 nopad"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "http://dummyimage.com/250x250"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rfooter"
  }, [_c('i', {
    staticClass: "fa fa-phone-square"
  }), _vm._v(" +3000000\n            ")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-520abb36", module.exports)
  }
}

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Lorilla on 23/07/2017.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    data: {
        SELECTED: false,
        STATE_VIEW: true,
        READY: false,
        dataFetch: [],
        selectData: {}
    },
    selectedPost: function selectedPost(index) {
        var vm = this.data;
        vm.SELECTED = true;
        vm.selectData = index;
        setTimeout(function () {
            vm.READY = true;
        }, 600);
    },
    fetch: function fetch(urlFetch) {
        var _this = this;

        axios.get(urlFetch).then(function (response) {
            return _this.data.dataFetch = response.data;
        });
    }
});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(!_vm.dataView.SELECTED) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "well well-sm"
  }, [_c('strong', [_vm._v("Category Title")]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.dataView.STATE_VIEW = !_vm.dataView.STATE_VIEW
      }
    }
  }, [_c('span', {
    staticClass: "glyphicon ",
    class: _vm.dataView.STATE_VIEW ? 'glyphicon-th-list' : 'glyphicon-th',
    domProps: {
      "textContent": _vm._s(_vm.dataView.STATE_VIEW ? ' List' : ' Grid')
    }
  })])])]), _vm._v(" "), _vm._l((_vm.dataView.dataFetch), function(postFetch, index) {
    return _c(_vm.dynamicComponent, {
      key: postFetch.id,
      tag: "component",
      attrs: {
        "fetchArray": postFetch
      },
      on: {
        "selectedPost": _vm.selectedPost
      }
    })
  })], 2) : _c('div', {
    staticClass: "row"
  }, [_c('blog-post', {
    attrs: {
      "selectedObject": _vm.dataView.selectData
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-23ce2a1b", module.exports)
  }
}

/***/ })

});