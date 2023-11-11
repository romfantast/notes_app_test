import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import notesOperations from "../../redux/notes/notes-operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoadingEdit } from "../../redux/notes/notes.selectors";

function EditNotesForm({ note, setOpen }) {
  const [cat, setCat] = useState(() => note?.category);
  const isLoadingEdit = useSelector(selectIsLoadingEdit);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setCat(event.target.value);
  };

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newNote = { ...data, category: cat, id: note.id };
    dispatch(notesOperations.editNote(newNote)).then(() => {
      resetField("title");
      resetField("description");
      setOpen(false);
    });
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container direction="column" spacing={2}>
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          name="title"
          defaultValue={note?.title || ""}
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 2,
              message: "Minimum 2 symbols",
            },
            maxLength: {
              value: 50,
              message: "Maximum 50 symbols",
            },
          })}
          error={Boolean(errors.title)}
          helperText={errors?.title?.message}
        />
        <TextField
          style={{ marginTop: "16px" }}
          id="standard-multiline-static"
          label="Take a note..."
          multiline
          rows={4}
          variant="standard"
          placeholder="I have to do..."
          name="description"
          defaultValue={note?.description || ""}
          {...register("description", {
            required: "description is required",
            minLength: {
              value: 2,
              message: "Minimum 2 symbols",
            },
            maxLength: {
              value: 100,
              message: "Maximum 100 symbols",
            },
          })}
          error={Boolean(errors.description)}
          helperText={errors?.description?.message}
        />
        <FormControl fullWidth style={{ marginTop: "16px" }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cat}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value={"Sport"}>Sport</MenuItem>
            <MenuItem value={"Music"}>Music</MenuItem>
            <MenuItem value={"Hobby"}>Hobby</MenuItem>
            <MenuItem value={"Cooking"}>Cooking</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          style={{ marginTop: "16px" }}
          variant="contained"
          endIcon={<SaveAsIcon />}
          disabled={isLoadingEdit}
        >
          {isLoadingEdit ? "Editing note..." : "Save"}
        </Button>
      </Grid>
    </Box>
  );
}

export default EditNotesForm;
