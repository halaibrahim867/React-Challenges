import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import { useTodosDispatch } from "../contexts/todosContext";
import { useToast } from "../contexts/ToastContext";

export default function ToDo({ todo, showDelete, showUpdate }) {
  const dispatch = useTodosDispatch();
  const { showHideToast } = useToast();
  //   EVENTS

  function handleUpdateClick() {
    showUpdate(todo);
  }
  function handleDeleteClick() {
    showDelete(todo);
  }

  function handleCheckClick() {
    dispatch({ type: "toggledCompleted", payload: todo });
    showHideToast("تم التعديل بنجاح");
  }

  function handleSubmit() {}
  return (
    <>
      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "white",
          marginTop: 5,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  textAlign: "right",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ textAlign: "right" }}>
                {todo.details}
              </Typography>
            </Grid>
            {/* ACTIONS BUTTON */}
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <IconButton
                onClick={() => {
                  handleCheckClick();
                }}
                className="iconButton"
                aria-label="check"
                style={{
                  color: todo.isCompleted ? "white" : "#8bc34a",
                  background: todo.isCompleted ? "#8bc34a" : "white",
                  border: "solid  #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>

              {/* UPDATE BUTTON */}
              <IconButton
                onClick={handleUpdateClick}
                className="iconButton"
                aria-label="check"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid  #1769aa 3px",
                }}
              >
                <EditOutlinedIcon />
              </IconButton>

              {/* DELETE BUTTON */}
              <IconButton
                className="iconButton"
                aria-label="check"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                }}
                onClick={handleDeleteClick}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
