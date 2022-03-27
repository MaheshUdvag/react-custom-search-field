"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./search-bar.css");

require("font-awesome/css/font-awesome.min.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SearchBar = _ref => {
  let {
    onInput = () => {},
    onKeyPressHandler = () => {},
    onIconClickHandler = () => {},
    Icon,
    searchTerm = "",
    displayIcon = true,
    placeholder = "Enter search term",
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
    let timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func(event.target.value, event);
      }, delay);
    };
  };

  const onInputHandler = event => {
    setValue(event.target.value);
    debounceOnChange ? inputWithDebounce(event) : onInput(event.target.value, event);
  };

  const classNames = "search ".concat(className);
  const inputWithDebounce = (0, _react.useCallback)(debounce(onInput, delay), []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames,
    style: styles
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "search-bar"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "search-input",
    type: "text",
    value: value,
    placeholder: placeholder,
    onInput: onInputHandler,
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