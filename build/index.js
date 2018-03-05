module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomInput = function (_Component) {
  _inherits(CustomInput, _Component);

  function CustomInput(props) {
    _classCallCheck(this, CustomInput);

    var _this = _possibleConstructorReturn(this, (CustomInput.__proto__ || Object.getPrototypeOf(CustomInput)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(CustomInput, [{
    key: "onChange",
    value: function onChange(event) {
      var field = event.target;
      var value = field.value;
      if (field.type === "checkbox" || field.type === "radio") {
        value = field.id;
      }
      this.props.onChange({ 'type': field.type, 'name': field.name }, value);
    }
  }, {
    key: "render",
    value: function render() {
      var labelText = this.props.label;
      return _react2.default.createElement(
        "div",
        { className: "form-inputs" },
        _react2.default.createElement(
          "label",
          { className: "label-section", htmlFor: this.props.id },
          labelText
        ),
        _react2.default.createElement("input", _extends({}, this.props, {
          onChange: this.onChange //TODO: if this is radio or select you must handle parent onChange

        }))
      );
    }
  }]);

  return CustomInput;
}(_react.Component);

exports.default = CustomInput;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CustomInput = __webpack_require__(1);

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _CustomTextarea = __webpack_require__(3);

var _CustomTextarea2 = _interopRequireDefault(_CustomTextarea);

var _CustomRadio = __webpack_require__(4);

var _CustomRadio2 = _interopRequireDefault(_CustomRadio);

var _CustomCheckbox = __webpack_require__(5);

var _CustomCheckbox2 = _interopRequireDefault(_CustomCheckbox);

var _CustomSelect = __webpack_require__(6);

var _CustomSelect2 = _interopRequireDefault(_CustomSelect);

var _CustomPassword = __webpack_require__(7);

var _CustomPassword2 = _interopRequireDefault(_CustomPassword);

var _CustomButton = __webpack_require__(8);

var _CustomButton2 = _interopRequireDefault(_CustomButton);

var _CustomTagsContainer = __webpack_require__(9);

var _CustomTagsContainer2 = _interopRequireDefault(_CustomTagsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomReactForm = function (_Component) {
  _inherits(CustomReactForm, _Component);

  function CustomReactForm(props) {
    _classCallCheck(this, CustomReactForm);

    var _this = _possibleConstructorReturn(this, (CustomReactForm.__proto__ || Object.getPrototypeOf(CustomReactForm)).call(this, props));

    _this.handleFieldChange = _this.handleFieldChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    var childrenObj = {};
    _this.props.fields.forEach(function (el, i) {
      var obj = _extends({}, el, { key: el.name });
      childrenObj[el.name] = obj;
    });
    _this.state = {
      isValid: false,
      isComplete: false,
      fields: childrenObj
    };
    return _this;
  }

  _createClass(CustomReactForm, [{
    key: 'updateFileds',
    value: function updateFileds(fields, fieldModified, fieldValue) {
      var fieldName = fieldModified.name;
      switch (fieldModified.type) {
        case "tags":
        case "checkbox":
          fields[fieldName].value.forEach(function (value) {
            if (value.name === fieldValue || value.id === fieldValue) {
              value.selected = !value.selected;
            }
          });
          return fields;
        case "radio":
        case "select":
          fields[fieldName].value.forEach(function (value) {
            if (value.id === fieldValue) value.selected = true;else if (value.selected) {
              delete value.selected;
            }
          });
          return fields;
        default:
          fields[fieldName].value = fieldValue;
          return fields;
      }
    }
  }, {
    key: 'handleFieldChange',
    value: function handleFieldChange(field, value) {
      var updatedFields = this.updateFileds(this.state.fields, field, value);
      this.setState({ fields: updatedFields });
    }
  }, {
    key: 'render',
    value: function render() {
      var childNodes = [];
      var fields = this.state.fields;

      var childButtons = [];
      var buttons = this.props.buttons;
      for (var id in buttons) {
        if (buttons.hasOwnProperty(id)) {
          var el = buttons[id];
          childButtons.push(_react2.default.createElement(_CustomButton2.default, el));
        }
      }
      for (var key in fields) {
        if (fields.hasOwnProperty(key)) {
          var _el = fields[key];
          _el.id = key;
          switch (_el.type) {
            case "text":
              childNodes.push(_react2.default.createElement(_CustomInput2.default, _extends({}, _el, { onChange: this.handleFieldChange })));
              break;
            case "password":
              childNodes.push(_react2.default.createElement(_CustomPassword2.default, _extends({}, _el, { onChange: this.handleFieldChange })));
              break;
            case "textarea":
              childNodes.push(_react2.default.createElement(_CustomTextarea2.default, _extends({}, _el, { onChange: this.handleFieldChange })));
              break;
            case "radio":
              childNodes.push(_react2.default.createElement(_CustomRadio2.default, _extends({}, _el, { onChange: this.handleFieldChange })));
              break;
            case "checkbox":
              childNodes.push(_react2.default.createElement(_CustomCheckbox2.default, _extends({}, _el, { onChange: this.handleFieldChange })));
              break;
            case "select":
              childNodes.push(_react2.default.createElement(_CustomSelect2.default, _extends({}, _el, { onChange: this.handleFieldChange })));
              break;
            case "tags":
              childNodes.push(_react2.default.createElement(_CustomTagsContainer2.default, _extends({}, _el, { onChange: this.handleFieldChange })));
              break;
            default:
              childNodes.push(_react2.default.createElement(_CustomInput2.default, _extends({}, _el, { onChange: this.handleFieldChange })));
          }
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'form-container' },
        _react2.default.createElement(
          'form',
          { onSubmit: this.onSubmit },
          _react2.default.createElement(
            'h2',
            { className: 'form-title' },
            ' ',
            this.props.title
          ),
          ' ',
          childNodes,
          ' ',
          childButtons,
          _react2.default.createElement(
            'button',
            { className: 'submit-button' },
            ' Submit '
          )
        )
      );
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      this.props.onSubmit(this.state.fields);
    }
  }]);

  return CustomReactForm;
}(_react.Component);

exports.default = CustomReactForm;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomTextarea = function (_Component) {
  _inherits(CustomTextarea, _Component);

  function CustomTextarea() {
    _classCallCheck(this, CustomTextarea);

    return _possibleConstructorReturn(this, (CustomTextarea.__proto__ || Object.getPrototypeOf(CustomTextarea)).apply(this, arguments));
  }

  _createClass(CustomTextarea, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "form-group" },
        _react2.default.createElement(
          "label",
          { htmlFor: this.props.id },
          this.props.label
        ),
        _react2.default.createElement("textarea", { name: this.props.name, rows: "4", id: "comment", type: this.props.type, placeholder: this.props.placeholder })
      );
    }
  }]);

  return CustomTextarea;
}(_react.Component);

exports.default = CustomTextarea;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CustomInput = __webpack_require__(1);

var _CustomInput2 = _interopRequireDefault(_CustomInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomRadio = function (_Component) {
  _inherits(CustomRadio, _Component);

  function CustomRadio() {
    _classCallCheck(this, CustomRadio);

    return _possibleConstructorReturn(this, (CustomRadio.__proto__ || Object.getPrototypeOf(CustomRadio)).apply(this, arguments));
  }

  _createClass(CustomRadio, [{
    key: 'render',
    value: function render() {
      var valueNodes = [];
      var value = this.props.value;

      for (var i = 0; i < value.length; i++) {

        var el = value[i];

        var obj = _extends({}, el, { key: i,
          type: this.props.type,
          name: this.props.name,
          value: this.props.value
        });

        var node = _react2.default.createElement(_CustomInput2.default, _extends({ onChange: this.props.onChange }, obj));
        valueNodes.push(node);
      }

      return _react2.default.createElement(
        'div',
        { className: 'form-group', id: 'radio-buttons' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            this.props.label
          )
        ),
        valueNodes
      );
    }
  }]);

  return CustomRadio;
}(_react.Component);

exports.default = CustomRadio;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CustomInput = __webpack_require__(1);

var _CustomInput2 = _interopRequireDefault(_CustomInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomCheckbox = function (_Component) {
  _inherits(CustomCheckbox, _Component);

  function CustomCheckbox() {
    _classCallCheck(this, CustomCheckbox);

    return _possibleConstructorReturn(this, (CustomCheckbox.__proto__ || Object.getPrototypeOf(CustomCheckbox)).apply(this, arguments));
  }

  _createClass(CustomCheckbox, [{
    key: 'render',
    value: function render() {
      var valueNodes = [];
      var value = this.props.value;

      for (var i = 0; i < value.length; i++) {

        var el = value[i];

        var obj = _extends({}, el, { key: i, checked: el.selected,
          type: this.props.type,
          name: this.props.name,
          value: this.props.value
        });

        var node = _react2.default.createElement(_CustomInput2.default, _extends({ onChange: this.props.onChange }, obj));
        valueNodes.push(node);
      }

      return _react2.default.createElement(
        'div',
        { className: 'form-group', id: 'checkbox' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            this.props.label
          )
        ),
        valueNodes
      );
    }
  }]);

  return CustomCheckbox;
}(_react.Component);

exports.default = CustomCheckbox;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomSelect = function (_Component) {
  _inherits(CustomSelect, _Component);

  function CustomSelect(props) {
    _classCallCheck(this, CustomSelect);

    var _this = _possibleConstructorReturn(this, (CustomSelect.__proto__ || Object.getPrototypeOf(CustomSelect)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(CustomSelect, [{
    key: 'onChange',
    value: function onChange(event) {
      var field = event.target;
      this.props.onChange({ 'type': field.localName, 'name': field.name }, field.value);
    }
  }, {
    key: 'render',
    value: function render() {

      var labelText = this.props.type === "select" ? this.props.label : this.props.name;

      var selectNodes = [];
      var value = this.props.value;

      for (var i = 0; i < value.length; i++) {

        var obj = {
          value: value[i].name, key: i
        };

        var node = _react2.default.createElement(
          'option',
          { key: obj.key, value: obj.value },
          obj.value
        );
        selectNodes.push(node);
      }

      return _react2.default.createElement(
        'div',
        { className: 'form-group' },
        _react2.default.createElement(
          'label',
          null,
          labelText
        ),
        _react2.default.createElement(
          'select',
          { name: this.props.name, onChange: this.onChange },
          selectNodes
        )
      );
    }
  }]);

  return CustomSelect;
}(_react.Component);

exports.default = CustomSelect;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomPassword = function (_Component) {
  _inherits(CustomPassword, _Component);

  function CustomPassword() {
    _classCallCheck(this, CustomPassword);

    return _possibleConstructorReturn(this, (CustomPassword.__proto__ || Object.getPrototypeOf(CustomPassword)).apply(this, arguments));
  }

  _createClass(CustomPassword, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "form-inputs" },
        _react2.default.createElement(
          "label",
          { htmlFor: this.props.id },
          this.props.label
        ),
        _react2.default.createElement("input", { type: this.props.type, placeholder: this.props.placeholder })
      );
    }
  }]);

  return CustomPassword;
}(_react.Component);

exports.default = CustomPassword;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomButton = function (_Component) {
  _inherits(CustomButton, _Component);

  function CustomButton() {
    _classCallCheck(this, CustomButton);

    return _possibleConstructorReturn(this, (CustomButton.__proto__ || Object.getPrototypeOf(CustomButton)).apply(this, arguments));
  }

  _createClass(CustomButton, [{
    key: 'render',
    value: function render() {
      var disabledAttribute = this.props.disabled ? 'disabled' : '';
      return _react2.default.createElement(
        'button',
        _extends({}, this.props, { disabled: disabledAttribute }),
        this.props.id
      );
    }
  }]);

  return CustomButton;
}(_react.Component);

exports.default = CustomButton;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CustomTag = __webpack_require__(10);

var _CustomTag2 = _interopRequireDefault(_CustomTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomTagsContainer = function (_Component) {
  _inherits(CustomTagsContainer, _Component);

  function CustomTagsContainer() {
    _classCallCheck(this, CustomTagsContainer);

    return _possibleConstructorReturn(this, (CustomTagsContainer.__proto__ || Object.getPrototypeOf(CustomTagsContainer)).apply(this, arguments));
  }

  _createClass(CustomTagsContainer, [{
    key: "render",
    value: function render() {
      var tagNodes = [];
      var values = this.props.value;
      for (var i = 0; i < values.length; i++) {
        var node = _react2.default.createElement(_CustomTag2.default, { onChange: this.props.onChange, key: i, tagId: this.props.id, value: values[i] });
        tagNodes.push(node);
      }

      return _react2.default.createElement(
        "div",
        { className: "form-group" },
        tagNodes
      );
    }
  }]);

  return CustomTagsContainer;
}(_react.Component);

exports.default = CustomTagsContainer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomTag = function (_Component) {
  _inherits(CustomTag, _Component);

  function CustomTag(props) {
    _classCallCheck(this, CustomTag);

    var _this = _possibleConstructorReturn(this, (CustomTag.__proto__ || Object.getPrototypeOf(CustomTag)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(CustomTag, [{
    key: 'handleChange',
    value: function handleChange() {
      this.props.onChange({ 'type': 'tags', 'name': this.props.tagId }, this.props.value.name);
    }
  }, {
    key: 'render',
    value: function render() {
      var tag = this.props.value;
      var isSelected = this.props.value.selected;

      return _react2.default.createElement(
        'span',
        { className: "tag-element no-select" + (isSelected ? ' selected-tag' : ''),
          onClick: this.handleChange },
        tag.name
      );
    }
  }]);

  return CustomTag;
}(_react.Component);

exports.default = CustomTag;

/***/ })
/******/ ]);