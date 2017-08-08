webpackJsonp([1],{

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(87),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\blog\\resources\\assets\\js\\components\\Auth\\Login_.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login_.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc4e1b12", Component.options)
  } else {
    hotAPI.reload("data-v-fc4e1b12", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 86:
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
            loginDetails: {
                email: '',
                password: '',
                remember: true
            },
            errorsEmail: false,
            errorsPassword: false,
            emailError: null,
            passwordError: null

        };
    },

    methods: {
        logout: function logout() {
            axios.post('/api/logout').then(function (response) {}).catch(function (response) {});
        },
        getUser: function getUser() {
            axios.get('/api/user').then(function (response) {}).catch(function (response) {});
        },
        loginPost: function loginPost() {
            var vm = this;
            axios.post('/api/login', vm.loginDetails).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                var errors = error.response;
                console.log(errors);
                if (errors.statusText === 'Unprocessable Entity') {
                    if (errors.data) {
                        if (errors.data.email) {
                            vm.errorsEmail = true;
                            vm.emailError = _.isArray(errors.data.email) ? errors.data.email[0] : errors.data.email;
                        }
                        if (errors.data.password) {
                            vm.errorsPassword = true;
                            vm.passwordError = _.isArray(errors.data.password) ? errors.data.password[0] : errors.data.password;
                        }
                    }
                }
            });
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Login")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errorsEmail
    }
  }, [_c('label', {
    staticClass: "col-md-4 control-label",
    attrs: {
      "for": "email"
    }
  }, [_vm._v("E-Mail Address")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.loginDetails.email),
      expression: "loginDetails.email"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "email",
      "type": "email",
      "name": "email",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.loginDetails.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.loginDetails.email = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.errorsEmail) ? _c('span', {
    staticClass: "help-block"
  }, [_c('strong', [_vm._v(_vm._s(_vm.emailError))])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errorsPassword
    }
  }, [_c('label', {
    staticClass: "col-md-4 control-label",
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.loginDetails.password),
      expression: "loginDetails.password"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "password",
      "type": "password",
      "name": "password",
      "required": ""
    },
    domProps: {
      "value": (_vm.loginDetails.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.loginDetails.password = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.errorsPassword) ? _c('span', {
    staticClass: "help-block"
  }, [_c('strong', [_vm._v(_vm._s(_vm.passwordError))])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-md-6 col-md-offset-4"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.loginDetails.remember),
      expression: "loginDetails.remember"
    }],
    attrs: {
      "type": "checkbox",
      "name": "remember"
    },
    domProps: {
      "checked": Array.isArray(_vm.loginDetails.remember) ? _vm._i(_vm.loginDetails.remember, null) > -1 : (_vm.loginDetails.remember)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.loginDetails.remember,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.loginDetails.remember = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.loginDetails.remember = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.loginDetails.remember = $$c
        }
      }
    }
  }), _vm._v(" Remember Me\n                                        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-4"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.loginPost($event)
      }
    }
  }, [_vm._v("\n                                    Login\n                                    ")]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.getUser($event)
      }
    }
  }, [_vm._v("Click")]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.logout($event)
      }
    }
  }, [_vm._v("logout")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-link",
    attrs: {
      "href": ""
    }
  }, [_vm._v("\n                                    Forgot Your Password?\n                                    ")])])])])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fc4e1b12", module.exports)
  }
}

/***/ })

});