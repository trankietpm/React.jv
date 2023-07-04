import "./styles.css";
import Header from "./Components/header/Header";
import Project from "./Components/Project/Project";
import Center from "./Components/Center/Center";
import Final from "./Components/Final/Final";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="grid-container">
        <div className="row">
          <div className="column">
            <Project />
          </div>
          <div className="column">
            <Center />
          </div>
          <div className="column">
            <Final />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
