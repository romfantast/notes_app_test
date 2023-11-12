import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import notesOperations from "../../redux/notes/notes-operations";
import { useState } from "react";
import moment from "moment";
import { selectNotes } from "../../redux/notes/notes.selectors";
import { resetMaxNotes } from "../../redux/notes/notes-slice";

function Note({ note, cat, setOpenModal, setSelectedNote }) {
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteNote = () => {
    setIsDeleting(true);
    dispatch(notesOperations.deleteNote(note.id)).then(() => {
      setIsDeleting(false);
      console.log(1123);
      dispatch(notesOperations.filter({ cat })).then((res) => {
        if (res?.payload?.length < 10) {
          dispatch(resetMaxNotes());
        }
      });
    });
  };

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          opacity: isDeleting ? "0.7" : "1",
          filter: isDeleting ? "blur(2px)" : "none",
          pointerEvents: isDeleting ? "none" : "auto",
          userSelect: isDeleting ? "none" : "auto",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {note.title}
          </Typography>
          <Chip
            label={note.category}
            size="small"
            style={{ marginTop: "-2px", marginBottom: "10px" }}
          />
          <Typography variant="body2" color="text.secondary">
            {note.description}
          </Typography>
          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ marginTop: "5px", marginBottom: "10px" }}
          >
            {moment(note.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </Typography>
        </CardContent>

        <CardActions style={{ marginTop: "auto" }}>
          <Button
            size="small"
            onClick={() => {
              setSelectedNote(...notes.filter((item) => item.id === note.id));
              setOpenModal(true);
            }}
          >
            Edit
          </Button>
          <Button onClick={handleDeleteNote} size="small">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Note;
