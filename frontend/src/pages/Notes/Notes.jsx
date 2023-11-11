import AddNotesForm from "../../components/AddNotesForm/AddNotesForm";
import NotesContent from "../../components/NotesContent/NotesContent";
import { useState } from "react";

export default function Notes() {
  const [cat, setCat] = useState("");
  const [time, setTime] = useState("");
  return (
    <>
      <AddNotesForm setCategory={setCat} setTime={setTime} />
      <NotesContent cat={cat} time={time} setCat={setCat} setTime={setTime} />
    </>
  );
}
