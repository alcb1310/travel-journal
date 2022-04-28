import "./css/style.css"

import Header from "./components/Header";
import Element from "./components/Element";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Element />
        <Element />
      </header>
    </div>
  );
}

export default App;
