webpackJsonp([0],{

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(81),
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

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Loading_Placeholder_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Loading_Placeholder_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Loading_Placeholder_vue__);
/**
 * Created by Lorilla on 23/07/2017.
 */


var ErrorComponent = {
    name: 'error-component',
    template: '<div>error!</div>'
};

var defaultComponent = function defaultComponent() {
    return {
        component: new Promise(function (resolve, reject) {
            setTimeout(function () {
                __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(78)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            }, 1000);
        }),
        loading: __WEBPACK_IMPORTED_MODULE_0__Loading_Placeholder_vue___default.a,
        error: ErrorComponent,
        delay: 1
    };
};

/* harmony default export */ __webpack_exports__["a"] = ({

    data: {
        SELECTED: false,
        STATE_VIEW: true,
        READY: false,
        dataFetch: [],
        selectData: {},
        nextPost: null,
        previousPost: null
    },
    selectedPost: function selectedPost(index) {
        var vm = this.data;
        var id = index.id;
        var next = id + 1 ? id + 1 : null;
        var previous = id - 1 ? id - 1 : null;
        vm.SELECTED = true;
        vm.selectData = index;
        vm.nextPost = next;
        vm.previousPost = previous;
        setTimeout(function () {
            vm.READY = true;
        }, 600);
    },
    nextPost: function nextPost() {
        var vm = this.data;
        var found = _.find(vm.dataFetch, ['id', vm.nextPost]);
        if (!_.isEmpty(found)) {
            var id = found.id ? found.id : null;
            var next = id + 1 ? id + 1 : null;
            var previous = id - 1 ? id - 1 : null;
            vm.selectData = found;
            vm.nextPost = next;
            vm.previousPost = previous;
            setTimeout(function () {
                vm.READY = true;
            }, 600);
        }
    },
    previousPost: function previousPost() {
        var vm = this.data;
        var found = _.find(vm.dataFetch, ['id', vm.previousPost]);
        if (!_.isEmpty(found)) {
            var id = found.id;
            var next = id + 1 ? id + 1 : null;
            var previous = id - 1 ? id - 1 : null;
            vm.selectData = found;
            vm.nextPost = next;
            vm.previousPost = previous;
            setTimeout(function () {
                vm.READY = true;
            }, 600);
        }
    },
    fetch: function fetch(urlFetch) {
        var _this = this;

        axios.get(urlFetch).then(function (response) {
            return _this.data.dataFetch = response.data;
        });
    },
    unSelected: function unSelected() {
        var vm = this.data;
        vm.SELECTED = false;
        vm.selectData = {};
    }
});

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__State_blogState__ = __webpack_require__(72);
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
        'default-component': __WEBPACK_IMPORTED_MODULE_0__State_blogState__["b" /* defaultComponent */]
    },
    data: function data() {
        return {
            searchValue: '',
            dataView: __WEBPACK_IMPORTED_MODULE_0__State_blogState__["a" /* default */].data
        };
    },
    mounted: function mounted() {
        var vm = this;
        vm.fetchData();
        if (!vm.dataView.SELECTED) {
            window.addEventListener("keydown", function (e) {
                e.keyCode === 27 ? vm.unSelected() : false;
                e.keyCode == 39 ? vm.nextPost() : false;
                e.keyCode == 37 ? vm.previousPost() : false;
            });
        }
    },

    computed: {
        filteredData: function filteredData() {
            var data = this.dataView.dataFetch.filter(function (country) {
                return country.title.toLowerCase().includes(this.searchValue.toLowerCase());
            }.bind(this));
            return data;
        },
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
            __WEBPACK_IMPORTED_MODULE_0__State_blogState__["a" /* default */].selectedPost(index);
        },
        fetchData: function fetchData() {
            var urlFetch = 'api/blog';
            __WEBPACK_IMPORTED_MODULE_0__State_blogState__["a" /* default */].fetch(urlFetch);
        },
        unSelected: function unSelected() {
            __WEBPACK_IMPORTED_MODULE_0__State_blogState__["a" /* default */].unSelected();
        },
        nextPost: function nextPost() {
            __WEBPACK_IMPORTED_MODULE_0__State_blogState__["a" /* default */].nextPost();
        },
        previousPost: function previousPost() {
            __WEBPACK_IMPORTED_MODULE_0__State_blogState__["a" /* default */].previousPost();
        }
    }
});

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(75)
}
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(77),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-9afcb10c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\blog\\resources\\assets\\js\\components\\Loading\\Placeholder.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Placeholder.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9afcb10c", Component.options)
  } else {
    hotAPI.reload("data-v-9afcb10c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6e912efc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9afcb10c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Placeholder.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9afcb10c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Placeholder.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.timeline-item[data-v-9afcb10c] {\n    background: #fff;\n    border-bottom: 1px solid #f2f2f2;\n    padding: 25px;\n    margin: 0 auto;\n}\n@-webkit-keyframes placeHolderShimmer {\n0% {\n        background-position: -468px 0;\n}\n100% {\n        background-position: 468px 0;\n}\n}\n@keyframes placeHolderShimmer-data-v-9afcb10c {\n0% {\n        background-position: -468px 0;\n}\n100% {\n        background-position: 468px 0;\n}\n}\n.animated-background[data-v-9afcb10c] {\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-name: placeHolderShimmer-data-v-9afcb10c;\n    animation-name: placeHolderShimmer-data-v-9afcb10c;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    background: #f6f7f8;\n    background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n    background-size: 800px 104px;\n    height: 40px;\n    position: relative;\n}\n.background-masker[data-v-9afcb10c] {\n    background: #fff;\n    position: absolute;\n}\n.background-masker.header-top[data-v-9afcb10c], .background-masker.header-bottom[data-v-9afcb10c], .background-masker.subheader-bottom[data-v-9afcb10c] {\n    top: 0;\n    left: 40px;\n    right: 0;\n    height: 10px;\n}\n.background-masker.header-left[data-v-9afcb10c], .background-masker.subheader-left[data-v-9afcb10c], .background-masker.header-right[data-v-9afcb10c], .background-masker.subheader-right[data-v-9afcb10c] {\n    top: 10px;\n    left: 40px;\n    height: 8px;\n    width: 10px;\n}\n.background-masker.header-bottom[data-v-9afcb10c] {\n    top: 18px;\n    height: 6px;\n}\n.background-masker.subheader-left[data-v-9afcb10c], .background-masker.subheader-right[data-v-9afcb10c] {\n    top: 24px;\n    height: 6px;\n}\n.background-masker.header-right[data-v-9afcb10c], .background-masker.subheader-right[data-v-9afcb10c] {\n    width: auto;\n    left: 300px;\n    right: 0;\n}\n.background-masker.subheader-right[data-v-9afcb10c] {\n    left: 230px;\n}\n.background-masker.subheader-bottom[data-v-9afcb10c] {\n    top: 30px;\n    height: 10px;\n}\n.background-masker.content-top[data-v-9afcb10c], .background-masker.content-second-line[data-v-9afcb10c], .background-masker.content-third-line[data-v-9afcb10c], .background-masker.content-second-end[data-v-9afcb10c], .background-masker.content-third-end[data-v-9afcb10c], .background-masker.content-first-end[data-v-9afcb10c] {\n    top: 40px;\n    left: 0;\n    right: 0;\n    height: 6px;\n}\n.background-masker.content-top[data-v-9afcb10c] {\n    height: 20px;\n}\n.background-masker.content-first-end[data-v-9afcb10c], .background-masker.content-second-end[data-v-9afcb10c], .background-masker.content-third-end[data-v-9afcb10c] {\n    width: auto;\n    left: 380px;\n    right: 0;\n    top: 60px;\n    height: 8px;\n}\n.background-masker.content-second-line[data-v-9afcb10c] {\n    top: 68px;\n}\n.background-masker.content-second-end[data-v-9afcb10c] {\n    left: 420px;\n    top: 74px;\n}\n.background-masker.content-third-line[data-v-9afcb10c] {\n    top: 82px;\n}\n.background-masker.content-third-end[data-v-9afcb10c] {\n    left: 300px;\n    top: 88px;\n}\n", ""]);

// exports


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "white-widget grey-bg author-area"
  }, [_c('div', {
    staticClass: "auth-info row"
  }, [_c('div', {
    staticClass: "timeline-wrapper"
  }, [_c('div', {
    staticClass: "timeline-item"
  }, [_c('div', {
    staticClass: "animated-background"
  }, [_c('div', {
    staticClass: "background-masker header-top"
  }), _vm._v(" "), _c('div', {
    staticClass: "background-masker header-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "background-masker header-right"
  }), _vm._v(" "), _c('div', {
    staticClass: "background-masker header-bottom"
  }), _vm._v(" "), _c('div', {
    staticClass: "background-masker subheader-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "background-masker subheader-right"
  }), _vm._v(" "), _c('div', {
    staticClass: "background-masker subheader-bottom"
  })])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9afcb10c", module.exports)
  }
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('fade', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [(!_vm.dataView.SELECTED) ? _c('div', {
    staticClass: "col-md-8"
  }, [_c('staggered-fade', _vm._l((_vm.filteredData), function(postFetch, index) {
    return _c(_vm.dynamicComponent, {
      key: postFetch.id,
      tag: "component",
      attrs: {
        "data-index": index,
        "fetchArray": postFetch
      },
      on: {
        "selectedPost": _vm.selectedPost
      }
    })
  }))], 1) : _c('div', [_c('fade', [_c('blog-post', {
    attrs: {
      "selectedObject": _vm.dataView.selectData
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('category', {
    attrs: {
      "state_view": _vm.dataView.STATE_VIEW
    },
    on: {
      "state_change": function($event) {
        _vm.dataView.STATE_VIEW = $event
      }
    }
  }), _vm._v(" "), _c('search', {
    on: {
      "search_button": function($event) {
        _vm.unSelected()
      }
    },
    model: {
      value: (_vm.searchValue),
      callback: function($$v) {
        _vm.searchValue = $$v
      },
      expression: "searchValue"
    }
  })], 1)])])])
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