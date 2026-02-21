import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from "uuid";
import { createTheme, ThemeProvider } from "@mui/material";
import { TodosContext, todosContext } from "./contexts/todosContext";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },

  palette: {
    primary: {
      main: "#004d40",
    },
  },
});
const initialTodos = [
  {
    id: uuidv4(),
    title: "قراءه كتاب",
    details: "قراءه اول شابتر",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "2 قراءه كتاب",
    details: "قراءه ثاني شابتر",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "3 قراءه كتاب",
    details: "قراءه ثالث شابتر",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <ThemeProvider theme={theme}>
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
        <TodosContext.Provider value={{ todos, setTodos }}>
          <ToDoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
