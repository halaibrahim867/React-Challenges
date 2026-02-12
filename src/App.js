import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#191b1f",
        direction: "rtl",
      }}
    >
      <ToDoList />
    </div>
  );
}

export default App;
