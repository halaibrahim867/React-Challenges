import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { TodosContext } from "../contexts/todosContext";
import { useContext } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ToDo({ todo, handleCheck }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const { todos, setTodos } = useContext(TodosContext);

  //   EVENTS

  function handleDeleteClick() {
    setShowDeleteDialog(true);
  }
  function handleClose() {
    setShowDeleteDialog(false);
  }

  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((t) => {
      if (t.id === todo.id) {
        return false;
      } else {
        return true;
      }

      return t.id != todo.id;
    });
    setTodos(updatedTodos);
  }
  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
  }
  return (
    <>
      {/* DELETE MODAL  */}
      <Dialog
        style={{ direction: "rtl" }}
        onClose={handleClose}
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل انت متأكد كم رغبتك في حذف المهمه؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكنك التراجع عن الحذف بعد إتمامه
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>إغلاق</Button>
          <Button autoFocus onClick={handleDeleteConfirm}>
            نعم، قم بالحذف
          </Button>
        </DialogActions>
      </Dialog>
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
              <Typography variant="h5" gutterBottom sx={{ textAlign: "right" }}>
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

              <IconButton
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
