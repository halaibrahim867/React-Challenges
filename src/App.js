import "./App.css";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from "uuid";
import { createTheme, ThemeProvider } from "@mui/material";
import { TodosContext } from "./contexts/todosContext";
import { useState } from "react";
import MySnackBar from "./components/MySnackBar";
import { ToastContext } from "./contexts/ToastContext";

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
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function showHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }
  return (
    <ThemeProvider theme={theme}>
      <ToastContext.Provider value={{ showHideToast }}>
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
          <MySnackBar open={open} message={message} />
          <TodosContext.Provider value={{ todos, setTodos }}>
            <ToDoList />
          </TodosContext.Provider>
        </div>
      </ToastContext.Provider>
    </ThemeProvider>
  );
}

export default App;
