/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Application_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);

 // Sample data

if (Fliplet.Env.get('development')) {
  window.__widgetData = {
    'com.fliplet.helper-configuration': {
      assetsUrl: 'https://d2fx5g1ro9ok5z.cloudfront.net/widgets/com.fliplet.helper-configuration/1.0.0/',
      data: {
        name: 'welcome',
        displayName: 'Welcome',
        supportUrl: 'https://developers.fliplet.com',
        configuration: {
          dependencies: ['tinymce'],
          fields: [{
            name: 'name',
            type: 'text',
            label: 'Your name',
            description: 'This is your name',
            required: true
          }, {
            name: 'bio',
            type: 'textarea',
            label: 'Bio',
            description: 'This is your bio',
            rows: 5,
            required: true
          }, {
            type: 'toggle',
            name: 'darkMode',
            label: 'Turn on Dark Mode',
            description: 'Enable Dark Mode',
            toggleLabel: 'Enable',
            "default": false,
            required: true
          }, {
            name: 'stocks',
            type: 'checkbox',
            label: 'Stocks',
            description: 'Stocks that you own',
            options: [{
              value: 'AAPL',
              label: 'Apple'
            }, {
              value: 'FB',
              label: 'Facebook'
            }, {
              value: 'GOOGL',
              label: 'Google'
            }],
            required: true
          }, {
            name: 'city',
            type: 'radio',
            label: 'City',
            description: 'Where do you live?',
            options: ['London', 'New York', 'Paris']
          }, {
            type: 'provider',
            name: 'files',
            label: 'Open file picker',
            "package": 'com.fliplet.file-picker',
            mode: 'full-screen',
            html: '<button class="btn btn-default" data-open-provider>Open</button> You selected {{ value.length }} files'
          }, {
            name: 'buttons',
            label: 'Buttons',
            type: 'list',
            addLabel: 'Add button',
            headingFieldName: 'title',
            emptyListPlaceholderHtml: '<p>Hello world</p>',
            fields: [{
              name: 'title',
              type: 'text',
              label: 'Button title',
              placeholder: 'Sample button'
            }, {
              type: 'provider',
              name: 'action',
              label: 'Choose an action to do when the button is pressed',
              "package": 'com.fliplet.link'
            }]
          }]
        },
        event: 'helper-instance-configure',
        id: 'com.fliplet.helper-configuration',
        "package": 'com.fliplet.helper-configuration',
        version: '1.0.0'
      }
    }
  };
}

(function () {
  var data = Fliplet.Widget.getData();

  var fields = _.get(data, 'configuration.fields', []);

  if (!fields.length) {
    Fliplet.Modal.alert({
      message: 'This helper has not defined a list of fields for the interface.'
    });
    return Fliplet.Widget.complete();
  }

  if (data.configuration && data.configuration.beforeReady) {
    var beforeReady = new Function(data.configuration.beforeReady)();

    if (beforeReady) {
      try {
        beforeReady.call(this, data.fields, data.configuration);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('The beforeReady function is invalid', e, data.configuration.beforeReady);
      }
    }
  }

  fields.forEach(function (field) {
    field.value = _.get(data.fields, field.name, field["default"]);

    if (field.type === 'list') {
      if (field.value && field.value.length) {
        field.value = field.value.map(function (item) {
          var list = JSON.parse(JSON.stringify(field.fields));
          list.forEach(function (listItem) {
            listItem.value = item[listItem.name];
          });
          return list;
        });
      }
    } // Normalize options


    if (Array.isArray(field.options)) {
      field.options = field.options.map(function (opt) {
        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(opt) === 'object') {
          return opt;
        }

        return {
          value: opt
        };
      });
    }

    if (['checkbox', 'list'].indexOf(field.type) !== -1 && !Array.isArray(field.value)) {
      field.value = [];
    }
  });
  Vue.filter('panelHeading', function (fields, name) {
    var field = _.find(fields, {
      name: name
    }) || _.first(fields);

    return field && (field.value || field.placeholder) || 'New field';
  });
  Vue.directive('sortable', {
    inserted: function inserted(el, binding) {
      if (Sortable) {
        new Sortable(el, binding.value || {});
      }
    }
  });
  new Vue({
    el: '#helper-configuration',
    render: function render(createElement) {
      return createElement(_Application_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  });
})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Application.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "interface" }, [
    _c(
      "form",
      {
        ref: "form",
        staticClass: "form-horizontal",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onSubmit($event)
          }
        }
      },
      [
        _c("header", [
          _c("p", [
            _vm._v(
              "\n        " + _vm._s(_vm.displayName || _vm.name) + "\n        "
            ),
            _vm.supportUrl
              ? _c(
                  "a",
                  {
                    staticClass: "help-icon",
                    attrs: { href: _vm.supportUrl, target: "_blank" }
                  },
                  [_c("i", { staticClass: "fa fa-question-circle-o" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _vm._l(_vm.configuration.fields, function(field) {
          return [
            _c(
              "field",
              _vm._b(
                { key: field.name, ref: "fieldInstances", refInFor: true },
                "field",
                field,
                false
              )
            )
          ]
        }),
        _vm._v(" "),
        _c("input", {
          ref: "submitButton",
          staticStyle: { display: "none" },
          attrs: { type: "submit" }
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _libs_lookups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);


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


Vue.component('Field', _components_Field__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return Fliplet.Widget.getData();
  },
  methods: {
    // Methods can be used when the Vue instance is passed as context for
    // the change and ready callback functions
    find: _libs_lookups__WEBPACK_IMPORTED_MODULE_3__["findAll"],
    findOne: _libs_lookups__WEBPACK_IMPORTED_MODULE_3__["findOne"],
    children: _libs_lookups__WEBPACK_IMPORTED_MODULE_3__["findChildren"],
    onSubmit: function onSubmit() {
      var _this = this;

      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var vm, beforeSave, beforeSaveFunction;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!window.currentProvider) {
                  _context.next = 3;
                  break;
                }

                window.currentProvider.forwardSaveRequest();
                return _context.abrupt("return");

              case 3:
                vm = _this;
                _context.next = 6;
                return Promise.all(_this.$refs.fieldInstances.map(function (field) {
                  if (field.show === false) {
                    delete vm.fields[field.name];
                    return;
                  }

                  return field.onSubmit();
                }));

              case 6:
                if (_this.configuration.beforeSave) {
                  beforeSaveFunction = new Function(_this.configuration.beforeSave)();

                  if (beforeSaveFunction) {
                    try {
                      beforeSave = beforeSaveFunction.call(_this, _this.fields, _this.configuration);
                    } catch (e) {
                      // eslint-disable-next-line no-console
                      console.warn('The beforeSave function has thrown an error', e, _this.configuration.beforeSave);
                      Fliplet.Modal.alert({
                        message: Fliplet.parseError(e)
                      });
                    }
                  }
                }

                if (!(beforeSave instanceof Promise)) {
                  beforeSave = Promise.resolve();
                }

                beforeSave.then(function () {
                  // Remove reactivity so objects are properly converted
                  // into data that can be transmitted
                  var data = JSON.parse(JSON.stringify(vm.fields));
                  Fliplet.Studio.emit('page-preview-send-event', {
                    type: 'helper-configuration-updated',
                    data: data
                  });

                  if (!Fliplet.Env.get('development')) {
                    Fliplet.Studio.emit('widget-save-complete');
                  } else {
                    // eslint-disable-next-line no-console
                    console.debug(data);
                  }
                })["catch"](function (err) {
                  // eslint-disable-next-line no-console
                  console.warn('Cannot save helper configuration', err);
                  Fliplet.Modal.alert({
                    title: 'Error saving configurations',
                    message: Fliplet.parseError(err)
                  });
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var vm = this;
    Fliplet.Widget.onSaveRequest(function () {
      $(vm.$refs.submitButton).click();
    });

    if (this.configuration.ready) {
      var ready = new Function(this.configuration.ready)();

      if (ready) {
        try {
          ready.call(this, this.fields, this.configuration);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.warn('The ready function is invalid', e, this.configuration.ready);
        }
      }
    }
  },
  created: function created() {
    Object(_libs_lookups__WEBPACK_IMPORTED_MODULE_3__["registerFields"])(this.configuration && this.configuration.fields);
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_3a2f7ffa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: typeof _vm.show === "undefined" || _vm.show,
          expression: "(typeof show === 'undefined' || show)"
        }
      ],
      staticClass: "form-group clearfix",
      attrs: { "data-field": _vm.name, "data-type": _vm.type }
    },
    [
      _vm.type === "hidden"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.value,
                expression: "value"
              }
            ],
            attrs: { type: "hidden" },
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.value = $event.target.value
              }
            }
          })
        : [
            _c("div", { staticClass: "col-sm-4 control-label" }, [
              _vm.label ? _c("label", [_vm._v(_vm._s(_vm.label))]) : _vm._e(),
              _vm._v(" "),
              _vm.description
                ? _c("p", {
                    staticClass: "help-block",
                    domProps: { innerHTML: _vm._s(_vm.description) }
                  })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-8" },
              [
                _vm.type === "list" && _vm.panelIsVisible
                  ? _c("div", { staticClass: "list-field" }, [
                      _c("div", { staticClass: "panel-group ui-sortable" }, [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "sortable",
                                rawName: "v-sortable",
                                value: {
                                  group: { name: "fields", pull: false },
                                  scrollSensitivity: 116,
                                  scrollSpeed: 10,
                                  onStart: _vm.onStart,
                                  onEnd: _vm.onEnd,
                                  onUpdate: _vm.onSort,
                                  handle: ".screen-reorder-handle"
                                },
                                expression:
                                  "{ group: { name: 'fields', pull: false }, scrollSensitivity: 116, scrollSpeed: 10, onStart: onStart, onEnd: onEnd, onUpdate: onSort, handle: '.screen-reorder-handle' }"
                              }
                            ]
                          },
                          _vm._l(_vm.value, function(fieldList, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                                staticClass: "panel panel-default"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "panel-heading ui-sortable-handle"
                                  },
                                  [
                                    _c(
                                      "h4",
                                      {
                                        staticClass: "panel-title",
                                        attrs: { "data-toggle": "collapse" }
                                      },
                                      [
                                        _vm._m(0, true),
                                        _vm._v(" "),
                                        _c("span", {
                                          staticClass:
                                            "fa fa-chevron-right chevron",
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.onToggleAccordion(
                                                $event
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "panel-title-text",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.onToggleAccordion(
                                                  $event
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("panelHeading")(
                                                  fieldList,
                                                  _vm.headingFieldName
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.onDeleteItem(index)
                                          }
                                        }
                                      },
                                      [
                                        _c("span", {
                                          staticClass: "icon-delete fa fa-trash"
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "panel-collapse collapse" },
                                  [
                                    _c("div", { staticClass: "panel-body" }, [
                                      _c("div", { staticClass: "form" }, [
                                        _c(
                                          "div",
                                          [
                                            _vm._l(fieldList, function(field) {
                                              return [
                                                _c(
                                                  "field",
                                                  _vm._b(
                                                    {
                                                      key: field.name,
                                                      ref: "fieldInstances",
                                                      refInFor: true,
                                                      attrs: { index: index }
                                                    },
                                                    "field",
                                                    field,
                                                    false
                                                  )
                                                )
                                              ]
                                            })
                                          ],
                                          2
                                        )
                                      ])
                                    ])
                                  ]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      !this.value || !this.value.length
                        ? _c("div", {
                            domProps: {
                              innerHTML: _vm._s(_vm.emptyListPlaceholderHtml)
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("p", [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-default",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.addItem($event)
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.addLabel || "Add"))]
                        ),
                        _vm._v(" "),
                        this.value && this.value.length
                          ? _c(
                              "a",
                              {
                                staticClass: "btn btn-link expand-items",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.onToggleAccordions($event)
                                  }
                                }
                              },
                              [_vm._v("Expand/Collapse All")]
                            )
                          : _vm._e()
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.type === "text"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.value,
                          expression: "value"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: _vm.placeholder,
                        required: _vm.requireValidation
                      },
                      domProps: { value: _vm.value },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.value = $event.target.value
                        }
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.type === "email"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.value,
                          expression: "value"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "email",
                        placeholder: _vm.placeholder,
                        required: _vm.requireValidation
                      },
                      domProps: { value: _vm.value },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.value = $event.target.value
                        }
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.type === "textarea"
                  ? _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.value,
                          expression: "value"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        placeholder: _vm.placeholder,
                        required: _vm.requireValidation,
                        rows: _vm.rows || 4
                      },
                      domProps: { value: _vm.value },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.value = $event.target.value
                        }
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.options && _vm.type === "radio"
                  ? _vm._l(_vm.options, function(option) {
                      return _c(
                        "div",
                        { key: option.value, staticClass: "radio radio-icon" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.value,
                                expression: "value"
                              }
                            ],
                            attrs: {
                              name: _vm.name,
                              id: _vm.name + "_" + option.value,
                              type: "radio",
                              required: _vm.requireValidation
                            },
                            domProps: {
                              value: option.value,
                              checked: _vm._q(_vm.value, option.value)
                            },
                            on: {
                              change: function($event) {
                                _vm.value = option.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            { attrs: { for: _vm.name + "_" + option.value } },
                            [
                              _vm._m(1, true),
                              _vm._v(
                                " " +
                                  _vm._s(option.label || option.value) +
                                  "\n          "
                              )
                            ]
                          )
                        ]
                      )
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.options && _vm.type === "checkbox"
                  ? _vm._l(_vm.options, function(option) {
                      return _c(
                        "div",
                        {
                          key: option.value,
                          staticClass: "checkbox checkbox-icon"
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.value,
                                expression: "value"
                              }
                            ],
                            attrs: {
                              name: _vm.name,
                              id: _vm.name + "_" + option.value,
                              type: "checkbox"
                            },
                            domProps: {
                              value: option.value,
                              checked: Array.isArray(_vm.value)
                                ? _vm._i(_vm.value, option.value) > -1
                                : _vm.value
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.value,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = option.value,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 && (_vm.value = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.value = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.value = $$c
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            { attrs: { for: _vm.name + "_" + option.value } },
                            [
                              _vm._m(2, true),
                              _vm._v(
                                " " +
                                  _vm._s(option.label || option.value) +
                                  "\n          "
                              )
                            ]
                          )
                        ]
                      )
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.type === "toggle"
                  ? [
                      _c("div", { staticClass: "checkbox checkbox-icon" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.value,
                              expression: "value"
                            }
                          ],
                          attrs: {
                            name: _vm.name,
                            id: _vm.name,
                            type: "checkbox",
                            value: "true",
                            required: _vm.requireValidation
                          },
                          domProps: {
                            checked: Array.isArray(_vm.value)
                              ? _vm._i(_vm.value, "true") > -1
                              : _vm.value
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.value,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = "true",
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 && (_vm.value = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.value = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.value = $$c
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: _vm.name } }, [
                          _vm._m(3),
                          _vm._v(" " + _vm._s(_vm.toggleLabel) + "\n          ")
                        ])
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                !_vm.isFullScreenProvider
                  ? [
                      _vm.html
                        ? _c("div", {
                            domProps: { innerHTML: _vm._s(_vm.html) }
                          })
                        : _vm._e()
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.type === "provider"
                  ? _c(
                      "div",
                      { staticClass: "provider" },
                      [
                        _vm.isFullScreenProvider
                          ? [
                              _c("div", {
                                domProps: {
                                  innerHTML: _vm._s(_vm.providerHtml)
                                }
                              })
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.warning
                  ? [
                      _c("br"),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "alert alert-warning",
                        domProps: { innerHTML: _vm._s(_vm.warning) }
                      })
                    ]
                  : _vm._e()
              ],
              2
            )
          ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "screen-reorder-handle" }, [
      _c("i", { staticClass: "fa fa-ellipsis-v" }),
      _c("i", { staticClass: "fa fa-ellipsis-v" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "check" }, [
      _c("i", { staticClass: "fa fa-circle" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "check" }, [
      _c("i", { staticClass: "fa fa-check" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "check" }, [
      _c("i", { staticClass: "fa fa-check" })
    ])
  }
]
render._withStripped = true



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_lookups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);



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
      eventsBound: false,
      providerPromise: undefined,
      panelIsVisible: true,
      isFullScreenProvider: this.type === 'provider' && this.mode === 'full-screen'
    };
  },
  props: ['type', 'name', 'label', 'html', 'value', 'ready', 'change', 'warning', 'placeholder', 'default', 'description', 'required', 'rows', 'options', 'toggleLabel', 'package', 'fields', 'addLabel', 'index', 'mode', 'show', 'headingFieldName', 'emptyListPlaceholderHtml'],
  computed: {
    providerHtml: function providerHtml() {
      return Handlebars.compile(this.html)(this);
    },
    requireValidation: function requireValidation() {
      return (typeof this.show === 'undefined' || this.show) && this.required;
    }
  },
  watch: {
    value: function value(newValue) {
      if (this.$parent.type === 'list') {
        _.find(this.$parent.value[this.index], {
          name: this.name
        }).value = newValue;
        this.$parent.onListValueChanged(this.name, newValue);
        return;
      }

      this.$parent.fields[this.name] = newValue;

      var field = _.find(this.$parent.configuration.fields, {
        name: this.name
      });

      field.value = newValue;

      if (this.change) {
        var change = new Function(this.change)();
        change.call(this, newValue);
      }
    }
  },
  methods: {
    // Methods can be used when the Vue instance is passed as context for
    // the change and ready callback functions
    find: _libs_lookups__WEBPACK_IMPORTED_MODULE_3__["findAll"],
    findOne: _libs_lookups__WEBPACK_IMPORTED_MODULE_3__["findOne"],
    children: _libs_lookups__WEBPACK_IMPORTED_MODULE_3__["findChildren"],
    val: function val(newValue) {
      if (typeof newValue !== 'undefined') {
        this.value = newValue;
        return;
      }

      return this.value;
    },
    onListValueChanged: function onListValueChanged(name) {
      if (name === this.headingFieldName) {
        this.$forceUpdate();
      }
    },
    onSubmit: function onSubmit() {
      var _this = this;

      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var newValue;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.$refs.fieldInstances) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return Promise.all(_this.$refs.fieldInstances.map(function (field) {
                  return field.onSubmit().then(function (result) {
                    _.find(_this.value[field.index], {
                      name: field.name
                    }).value = result;
                  });
                }));

              case 3:
                newValue = _this.value.map(function (fields) {
                  var obj = {};
                  fields.forEach(function (field) {
                    obj[field.name] = typeof field.value !== 'undefined' ? field.value : field["default"];
                  });
                  return obj;
                });
                _this.$parent.fields[_this.name] = newValue;

              case 5:
                if (_this.providerPromise) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", Promise.resolve(_this.value));

              case 7:
                _this.provider.forwardSaveRequest();

                return _context.abrupt("return", _this.providerPromise);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    collapseAccordions: function collapseAccordions($context) {
      $context.find('.panel-collapse').collapse('hide');
      $context.find('.fa-chevron-down').addClass('fa-chevron-right').removeClass('fa-chevron-down');
    },
    expandAccordions: function expandAccordions($context) {
      $context.find('.panel-collapse').collapse('show');
      $context.find('.fa-chevron-right').addClass('fa-chevron-down').removeClass('fa-chevron-right');
    },
    allAccordionsCollapsed: function allAccordionsCollapsed($context) {
      return !$context.find('.fa-chevron-down').length;
    },
    onToggleAccordion: function onToggleAccordion(event) {
      var $target = $(event.target).parent().find('.chevron');
      var isExpanded = $target.hasClass('fa-chevron-down');
      var $field = $(event.target).closest('.list-field'); // Close other items

      this.collapseAccordions($field);

      if (!isExpanded) {
        // Expand this item
        $target.closest('.panel').find('.panel-collapse').collapse('show');
        $target.addClass('fa-chevron-down').removeClass('fa-chevron-right');
      }
    },
    onToggleAccordions: function onToggleAccordions(event) {
      var $field = $(event.target).closest('.list-field');

      if (this.allAccordionsCollapsed($field)) {
        this.expandAccordions($field);
      } else {
        this.collapseAccordions($field);
      }
    },
    onDeleteItem: function onDeleteItem(index) {
      this.value.splice(index, 1);
    },
    addItem: function addItem() {
      if (!Array.isArray(this.value)) {
        this.value = [];
      }

      var item = JSON.parse(JSON.stringify(this.fields));
      this.value.push(item);
    },
    onStart: function onStart() {
      this.collapseAccordions();
      this.onSubmit();
    },
    onEnd: function onEnd() {
      Promise.all(this.$refs.fieldInstances.map(function (field) {
        field.initProvider();
      }));
    },
    onSort: function onSort(event) {
      var _this2 = this;

      // Briefly hide the sortable panel to fix this issue
      // https://github.com/sagalbot/vue-sortable/issues/27#issuecomment-350014812
      this.panelIsVisible = false;
      this.value.splice(event.newIndex, 0, this.value.splice(event.oldIndex, 1)[0]);
      this.$nextTick(function () {
        _this2.panelIsVisible = true;
      });
    },
    initProvider: function initProvider() {
      var _this3 = this;

      if (this.type !== 'provider') {
        return;
      }

      if (!this["package"]) {
        throw new Error('Package is required');
      }

      var $provider = $(this.$el).find('.provider');

      if (this.isFullScreenProvider) {
        if (this.eventsBound) {
          return;
        }

        $provider.find('[data-open-provider]').click(function (event) {
          event.preventDefault();

          _this3.openProvider();

          window.currentProvider = _this3.provider;
        });
        this.eventsBound = true;
        return;
      }

      this.openProvider($provider);
    },
    openProvider: function openProvider(target) {
      var _this4 = this;

      var value = this.value || {}; // File picker wants a slightly different input from the original output

      if (this["package"] === 'com.fliplet.file-picker' && Array.isArray(value)) {
        value = {
          selectFiles: value
        };
      }

      this.provider = Fliplet.Widget.open(this["package"], {
        selector: target ? target[0] : undefined,
        data: _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' // Normalize Vue objects into plain JSON objects
        ? JSON.parse(JSON.stringify(value)) : value
      });
      this.providerPromise = new Promise(function (resolve) {
        _this4.provider.then(function (result) {
          if (_.isObject(result.data) && !Array.isArray(result.data)) {
            _this4.value = _.omit(result.data, ['package', 'version']);
          } else {
            _this4.value = result.data;
          }

          if (_this4.isFullScreenProvider) {
            delete window.currentProvider;
            delete _this4.provider;
            _this4.providerPromise = undefined;

            _this4.initProvider();
          }

          resolve(_this4.value);
        });
      });
    }
  },
  mounted: function mounted() {
    this.initProvider();

    if (this.ready) {
      var ready = new Function(this.ready)();
      ready.call(this, this.$el, this.value);
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAll", function() { return findAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOne", function() { return findOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChildren", function() { return findChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFields", function() { return registerFields; });
var data = Fliplet.Widget.getData();

var helperInstances = _.get(data, 'helperInstances', []);

var instanceId = _.get(data, 'instanceId', '');

var fieldInstances = {};
/**
 * Returns a boolean indicating whether a nested helper instance matches a filter
 * @param {Helper} instance The helper instance
 * @param {Function} predicate The function invoked per iteration
 * @returns {Boolean} Whether the element matches
 */

function helperMatches(instance, predicate) {
  return instance.id !== instanceId && instance.isChildren && (predicate ? _.find([instance], predicate) : true);
}
/**
 * Prepares a predicate filter before it's sent to the various
 * find functions for helpers. This allows a given predicate shorthand
 * to be converted into the suitable filter.
 * @param {Function|String|Object} predicate A filter
 * @return {Function|Object} The prepared predicate
 */


function prepareFilter(predicate) {
  if (typeof predicate === 'string') {
    return {
      name: predicate
    };
  }

  return predicate;
}
/**
 * Finds all matching child helpers (through all levels)
 * @param {Function} predicate The function invoked per iteration
 * @returns {Array} The matched helpers
 */


function findAll(predicate) {
  predicate = prepareFilter(predicate);
  return _.filter(helperInstances, function (instance) {
    return helperMatches(instance, predicate);
  });
}
/**
 * Finds a matching child helper (through all levels)
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helper
 */

function findOne(predicate) {
  predicate = prepareFilter(predicate);
  return _.find(helperInstances, function (instance) {
    return helperMatches(instance, predicate);
  });
}
/**
 * Finds matching direct children helpers
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helper
 */

function findChildren(predicate) {
  predicate = prepareFilter(predicate);
  return _.filter(helperInstances, function (instance) {
    return instance.id !== instanceId && instance.parentId && instance.parentId === instanceId && (predicate ? _.find([instance], predicate) : true);
  });
}
function registerFields(fields) {
  if (!fields) {
    return;
  }

  fieldInstances = fields;
}
/**
 * Finds matching helper instances
 * @param {Function} predicate The function invoked per iteration
 * @returns {Array} The matched helpers
 */

Fliplet.Helper.find = function (predicate) {
  return _.filter(helperInstances, prepareFilter(predicate));
};
/**
 * Finds matching helper instances
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helpers
 */


Fliplet.Helper.findOne = function (predicate) {
  return _.find(helperInstances, prepareFilter(predicate));
};

Fliplet.Helper.field = function (name) {
  var field = _.find(fieldInstances, {
    name: name
  });

  if (!field) {
    return;
  }

  return {
    toggle: function toggle(show) {
      if (typeof field.show === 'undefined') {
        Vue.set(field, 'show', true);
      }

      if (typeof show === 'undefined') {
        field.show = !field.show;
        return;
      }

      field.show = !!show;
    },
    get: function get() {
      return field.value;
    },
    set: function set(value) {
      field.value = value;
    }
  };
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);