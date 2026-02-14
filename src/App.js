import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDoList";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
});

function App() {
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
        <ToDoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
