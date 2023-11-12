import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import notesOperations from "../../redux/notes/notes-operations";
import {
  selectIsLoadingAdd,
  selectIsMaxNotes,
  selectNotes,
} from "../../redux/notes/notes.selectors";
import { useForm } from "react-hook-form";
import { useState } from "react";

function AddNotesForm({ setCategory, setTime }) {
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);
  const isMaxNotes = useSelector(selectIsMaxNotes);
  const [cat, setCat] = useState("");
  const [isCatError, setIsCatError] = useState(false);

  const handleChange = (event) => {
    setCat(event.target.value);
    setIsCatError(false);
  };
  const isLoadingAdd = useSelector(selectIsLoadingAdd);
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!cat) {
      setIsCatError(true);
      return;
    }
    const note = { ...data, category: cat, createdAt: new Date() };
    dispatch(notesOperations.addNote(note)).then(() => {
      resetField("title");
      resetField("description");
      setCategory("");
      setCat("");
      setTime("");
      dispatch(notesOperations.getNotes());
    });
  };

  return (
    <Container
      style={{
        position: "relative",
        marginBottom: "50px",
      }}
    >
      {(notes?.length >= 10 || isMaxNotes) && (
        <Typography
          variant="h4"
          style={{
            filter: "none",
            position: "absolute",
            top: "40%",
            width: "100%",
          }}
        >
          It's a maximum of your notes{" "}
          <span style={{ color: "#f44336" }}>(10)</span>, please delete a note
          to create the new one
        </Typography>
      )}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "60%" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        style={{
          filter: notes?.length >= 10 || isMaxNotes ? "blur(2px)" : "none",
          position: "relative",
          pointerEvents: notes?.length >= 10 || isMaxNotes ? "none" : "auto",
          userSelect: notes?.length >= 10 || isMaxNotes ? "none" : "auto",
        }}
      >
        <Typography variant="h5">Add a Note</Typography>
        <Grid container direction="column" spacing={2}>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            name="title"
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
          <FormControl
            fullWidth
            style={{ marginTop: "16px" }}
            error={isCatError ? true : false}
          >
            {isCatError ? (
              <InputLabel id="demo-simple-select-error-label">
                Category
              </InputLabel>
            ) : (
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
            )}

            <Select
              labelId={
                isCatError
                  ? "demo-simple-select-error-label"
                  : "demo-simple-select-label"
              }
              id={
                isCatError ? "demo-simple-select-error" : "demo-simple-select"
              }
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
            endIcon={<SendIcon />}
            disabled={isLoadingAdd}
          >
            {isLoadingAdd ? "Adding note..." : "Submit"}
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}

export default AddNotesForm;
