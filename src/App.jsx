import React from "react";
import ReactDOM from "react-dom";
import TitleBar from "./components/TitleBar/title-bar.component";
import logo from "./logo.svg";
import "./App.css";

import Collection from "./components/Collection/collection.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <Collection />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
