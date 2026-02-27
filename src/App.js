import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"],
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h1>السلام عليكم</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
