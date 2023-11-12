import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import notesOperations from "../../../redux/notes/notes-operations";
import { selectNotes } from "../../../redux/notes/notes.selectors";
import { resetMaxNotes, setMaxNotes } from "../../../redux/notes/notes-slice";

export default function FilterByCat({
  cat,
  setCat,
  time,
  setTime,
  setIsShowForm,
}) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);

  const handleChange = (event) => {
    let obj = {};
    if (event.target.value === "") {
      setIsShowForm(true);
      setTime("");
      obj.time = "";
    } else {
      setIsShowForm(false);
      obj.time = time;
    }

    setCat(event.target.value);
    obj.cat = event.target.value;

    if (notes?.length >= 10) {
      dispatch(setMaxNotes());
    }
    dispatch(notesOperations.filter(obj)).then((res) => {
      if (res?.meta?.arg?.cat === "" && res?.payload?.length < 10) {
        dispatch(resetMaxNotes());
      }
    });
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
