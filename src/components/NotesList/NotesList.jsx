import { Container, Grid, Typography } from "@mui/material";
import Note from "../Note/Note";
import SkeletonPlaceholder from "../Skeleton/Skeleton";
import notesOperations from "../../redux/notes/notes-operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectNotes,
} from "../../redux/notes/notes.selectors";
import { useEffect, useState } from "react";
import ModalEdit from "../ModalEdit/ModalEdit";
import { resetMaxNotes } from "../../redux/notes/notes-slice";

function NotesList({ cat }) {
  const [open, setOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const notes = useSelector(selectNotes);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notesOperations.getNotes()).then((res) => {
      if (res?.payload?.length < 10) {
        dispatch(resetMaxNotes());
      }
    });
  }, [dispatch]);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {isLoading && <SkeletonPlaceholder />}
        {notes?.length === 0 && (
          <Container>
            <Typography style={{ paddingTop: "16px", textAlign: "center" }}>
              There are no notes...
            </Typography>
          </Container>
        )}
        {notes &&
          notes?.length !== 0 &&
          [...notes].map((note) => (
            <Note
              key={note.id}
              cat={cat}
              note={note}
              setOpenModal={setOpen}
              setSelectedNote={setSelectedNote}
            />
          ))}
      </Grid>
      <ModalEdit open={open} setOpen={setOpen} note={selectedNote} />
    </>
  );
}

export default NotesList;
