import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { useState } from "react";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: green[600],
    "&:hover": {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: green[600],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

export default function Material() {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <GreenSwitch
              {...label}
              defaultChecked
              value={checked}
              checked={checked}
              onChange={() => {
                setChecked((prev) => !prev);
              }}
            />
          </AccordionDetails>
        </Accordion>
      </div>
      <Collapse in={checked} collapsedSize={100}>
        <div style={{ height: "400px", background: "orange" }}>
          <h1>hello world</h1>
        </div>
      </Collapse>
    </>
  );
}
