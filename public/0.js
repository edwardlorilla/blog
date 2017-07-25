webpackJsonp([0],{

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(60),
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

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__State_blogState__ = __webpack_require__(61);
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
    data: function data() {
        return {
            dataView: __WEBPACK_IMPORTED_MODULE_0__State_blogState__["a" /* default */].data
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
            __WEBPACK_IMPORTED_MODULE_0__State_blogState__["a" /* default */].selectedPost(index);
        },
        fetchData: function fetchData() {
            var urlFetch = 'api/blog';
            __WEBPACK_IMPORTED_MODULE_0__State_blogState__["a" /* default */].fetch(urlFetch);
        }
    }
});

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
  }, [_c('blog-post')], 1)])
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