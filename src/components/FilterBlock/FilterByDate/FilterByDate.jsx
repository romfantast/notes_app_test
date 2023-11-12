import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import notesOperations from "../../../redux/notes/notes-operations";

export default function FilterByCat({ cat, time, setTime }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTime(event.target.value);
    const obj = { cat, time: event.target.value };
    dispatch(notesOperations.filter(obj));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-controlled-open-select-label">Date</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={time}
          label="Date"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"desc"}>new</MenuItem>
          <MenuItem value={"asc"}>old</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
