"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./search-bar.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SearchBar = _ref => {
  let {
    onInput,
    onChange,
    onKeyPressHandler = () => {},
    onIconClickHandler = () => {},
    Icon,
    searchTerm = "",
    displayIcon = true,
    delay = 0,
    debounceOnChange = false,
    className = "",
    styles = {}
  } = _ref;
  const [value, setValue] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    setValue(searchTerm);
  }, [searchTerm]);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function (event) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func(event.target.value, event), delay);
    };
  };

  const onInputHandler = event => {
    if (onInput) {
      debounceOnChange === true ? debounce(onInput, delay)(event) : onInput(event.target.value, event);
    }
  };

  const onChangeHandler = event => {
    setValue(event.target.value);

    if (onChange) {
      debounceOnChange === true ? debounce(onChange, delay)(event) : onChange(event.target.value, event);
    }
  };

  const classNames = "search ".concat(className);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames,
    style: styles
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "search-bar"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "search-input",
    type: "text",
    value: value,
    placeholder: "Enter search term",
    onInput: onInputHandler,
    onChange: onChangeHandler,
    onKeyPress: e => onKeyPressHandler(e.target.value, e)
  }), displayIcon && /*#__PURE__*/_react.default.createElement("span", {
    className: "search-icon",
    onClick: e => onIconClickHandler(value, e)
  }, Icon || /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-search",
    "aria-hidden": "true"
  }))));
};

var _default = SearchBar;
exports.default = _default;