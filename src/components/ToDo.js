import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
export default function ToDo() {
  return (
    <>
      <Card
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
                المهمه الاولي
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
                aria-label="check"
                style={{
                  color: "#8bc34a",
                  background: "white",
                  border: "solid  #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                aria-label="check"
                style={{
                  color: "#8bc34a",
                  background: "white",
                  border: "solid  #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                aria-label="check"
                style={{
                  color: "#8bc34a",
                  background: "white",
                  border: "solid  #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
