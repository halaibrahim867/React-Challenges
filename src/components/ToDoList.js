import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import { useState } from "react";

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
export default function ToDoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [titleInput, setTitleInput] = useState("");
  const [alignment, setAlignment] = useState("web");

  function handleCheckClick(todoId) {
    const updatedTodos = todos.map((t) => {
      if (t.id === todoId) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
  }
  const todosjsx = todos.map((t) => {
    return <ToDo key={t.id} todo={t} handleCheck={handleCheckClick} />;
  });
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setTitleInput("");
  }
  return (
    <Container maxWidth="md">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h1" style={{ fontWeight: "bold" }}>
            مهامي
          </Typography>
          <Divider />

          {/* FILTER BUTTONS */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="المنجز">المنجز</ToggleButton>
            <ToggleButton value="غير المنجز">غير المنجز</ToggleButton>
            <ToggleButton value="الكل">الكل</ToggleButton>
          </ToggleButtonGroup>

          {/* ALL TODOS */}
          {todosjsx}

          {/* INPUT + ADD BUTTON */}

          <Grid container style={{ marginTop: "20px" }} spacing={2}>
            <Grid
              size={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="عنوان المهمه"
                variant="outlined"
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
              />
            </Grid>

            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                variant="contained"
                style={{ width: "100%", height: "100%" }}
                onClick={() => {
                  handleAddClick();
                }}
              >
                إضافه
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
