# react-custom-search-field

**Package**: https://www.npmjs.com/package/custom-react-search-field

**Demo**: https://maheshudvag.github.io/react-custom-search-field/

## Props

| prop               | Type        | Description                                                                                                          |
| ------------------ | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| onInput            | function    | Callback function invoked when search text is updated.                                                               |
| debounceOnChange   | boolean     | flag to determine whether to use debounce function when search text is updated.                                      |
| delay              | number      | number of milliseconds to wait to call the callback function when search text is updated.                            |
| displayIcon        | boolean     | flag to determine whether to show the icon or not.                                                                   |
| onKeyPressHandler  | function    | Callback function called when a key is pressed. (e.g - can be used to call/redirect to a page on click of enter key) |
| onIconClickHandler | function    | Callback function called on click of the icon                                                                        |
| Icon               | HTMLElement | Element to be shown instead of the default search icon.                                                              |
| searchTerm         | String      | Default search term                                                                                                  |
| placeholder        | String      | Placeholder text                                                                                                     |

## Installation

```sh
npm i custom-react-search-field
```

## Usage

```sh
import SearchBar from "custom-react-search-field";

<SearchBar
 onInput={(value) => console.log("onInput", value)}
 debounceOnChange={debounceOnChange}
 delay={300}
 displayIcon={showIcon}
 onKeyPressHandler={(value) => console.log("onKeyPress", value)}
 onIconClickHandler={(value) => console.log("onIconClick", value)}
 Icon={<i className="fa fa-search" aria-hidden="true"></i>}
/>
```

## License

MIT Licensed. Copyright (c) 2022 R MAHESH UDVAG
