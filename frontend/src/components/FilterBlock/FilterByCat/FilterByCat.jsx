import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import notesOperations from "../../../redux/notes/notes-operations";

export default function FilterByCat({ cat, setCat, filter }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCat(event.target.value);
    const obj = { cat: event.target.value, time: filter };
    console.log(obj);
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
        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={cat}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Sport"}>Sport</MenuItem>
          <MenuItem value={"Music"}>Music</MenuItem>
          <MenuItem value={"Hobby"}>Hobby</MenuItem>
          <MenuItem value={"Cooking"}>Cooking</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
