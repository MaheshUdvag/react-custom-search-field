import React, { useEffect } from "react";
import { useState } from "react";
import "./search-bar.css";
import "font-awesome/css/font-awesome.min.css";
import { useCallback } from "react";

const SearchBar = ({
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
  styles = {},
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
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

  const onInputHandler = (event) => {
    setValue(event.target.value);
    debounceOnChange
      ? inputWithDebounce(event)
      : onInput(event.target.value, event);
  };

  const classNames = `search ${className}`;

  const inputWithDebounce = useCallback(debounce(onInput, delay), []);

  return (
    <div className={classNames} style={styles}>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          value={value}
          placeholder={placeholder}
          onInput={onInputHandler}
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
