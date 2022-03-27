import React, { useEffect } from "react";
import { useState } from "react";
import "./search-bar.css";
import "font-awesome/css/font-awesome.min.css";

const SearchBar = ({
  onInput,
  onChange,
  onKeyPressHandler = () => {},
  onIconClickHandler = () => {},
  Icon,
  searchTerm = "",
  displayIcon = true,
  placeholder = "Enter search term",
  delay = 0,
  debounceOnChange = false,
  className = "",
  styles = {},
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(searchTerm);
  }, [searchTerm]);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function (event) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func(event.target.value, event), delay);
    };
  };

  const onInputHandler = (event) => {
    if (onInput) {
      debounceOnChange === true
        ? debounce(onInput, delay)(event)
        : onInput(event.target.value, event);
    }
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    if (onChange) {
      debounceOnChange === true
        ? debounce(onChange, delay)(event)
        : onChange(event.target.value, event);
    }
  };

  const classNames = `search ${className}`;

  return (
    <div className={classNames} style={styles}>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          value={value}
          placeholder={placeholder}
          onInput={onInputHandler}
          onChange={onChangeHandler}
          onKeyPress={(e) => onKeyPressHandler(e.target.value, e)}
        ></input>
        {displayIcon && (
          <span
            className="search-icon"
            onClick={(e) => onIconClickHandler(value, e)}
          >
            {Icon || <i className="fa fa-search" aria-hidden="true"></i>}
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
