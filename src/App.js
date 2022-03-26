import SearchBar from "./lib/components/SearchBar.jsx";

function App() {
  return (
    <div className="App">
      <SearchBar
        onInput={(value, event) => console.log(value)}
        debounceOnChange={true}
        delay={300}
        displayIcon={true}
        onIconClickHandler={(value) => console.log("hello", value)}
        Icon={<i className="fa fa-search" aria-hidden="true"></i>}
      />
    </div>
  );
}

export default App;
