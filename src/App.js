import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

function App() {
  return (
    <div className="App">
        <div className="columns">
            <LeftColumn />
            <RightColumn />
        </div>
    </div>
  );
}

export default App;
