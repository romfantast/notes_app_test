import { Button } from "@mui/material";
import AddNotesForm from "../../components/AddNotesForm/AddNotesForm";
import NotesContent from "../../components/NotesContent/NotesContent";
import { useState } from "react";
import { useDispatch } from "react-redux";
import notesOperations from "../../redux/notes/notes-operations";
import { resetMaxNotes } from "../../redux/notes/notes-slice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Notes() {
  const [isShowForm, setIsShowForm] = useState(true);
  const dispatch = useDispatch();
  const [cat, setCat] = useState("");
  const [time, setTime] = useState("");
  return (
    <>
      {isShowForm ? (
        <AddNotesForm setCategory={setCat} setTime={setTime} />
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            setIsShowForm(true);
            dispatch(notesOperations.getNotes()).then((res) => {
              if (res?.payload?.length < 10) {
                dispatch(resetMaxNotes());
              }
            });
            setCat("");
            setTime("");
          }}
        >
          <ArrowBackIcon style={{ marginRight: "8px" }} /> Back
        </Button>
      )}

      <NotesContent
        cat={cat}
        time={time}
        setCat={setCat}
        setTime={setTime}
        setIsShowForm={setIsShowForm}
      />
    </>
  );
}
