import { useState } from "react";
import SearchBar from "./lib/components/SearchBar";
import "./app.css";

function App() {
  const [showIcon, setShowIcon] = useState(true);
  const [debounceOnChange, setDebounceOnChange] = useState(true);

  return (
    <div className="App">
      <h2>Custom React Search Field</h2>
      <SearchBar
        onInput={(value) => console.log("onInput", value)}
        debounceOnChange={debounceOnChange}
        delay={300}
        displayIcon={showIcon}
        onKeyPressHandler={(value) => console.log("onKeyPress", value)}
        onIconClickHandler={(value) => console.log("onIconClick", value)}
        Icon={<i className="fa fa-search" aria-hidden="true"></i>}
      />
      <button
        className="button-style"
        onClick={() => setShowIcon((prev) => !prev)}
      >
        Show/Hide icon
      </button>
      <button
        className="button-style"
        onClick={() => setDebounceOnChange((prev) => !prev)}
      >
        Debounce true/false
      </button>
    </div>
  );
}

export default App;
