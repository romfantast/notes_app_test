import { Box, Grid, Typography } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import NotesList from "../NotesList/NotesList";
import FilterByCat from "../FilterBlock/FilterByCat/FilterByCat";
import FilterByDate from "../FilterBlock/FilterByDate/FilterByDate";

function NotesContent({ cat, setCat, time, setTime, setIsShowForm }) {
  return (
    <Box>
      <Grid container direction="row" alignItems="center">
        <TextSnippetIcon color="primary" fontSize="medium" />
        <Typography style={{ marginLeft: "8px" }} variant="h5">
          My Notes
        </Typography>
        <Grid
          style={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "row",
            gap: "16px",
          }}
          item
        >
          <FilterByCat
            cat={cat}
            setCat={setCat}
            time={time}
            setTime={setTime}
            setIsShowForm={setIsShowForm}
          />
          <FilterByDate cat={cat} time={time} setTime={setTime} />
        </Grid>
      </Grid>
      <NotesList cat={cat} />
    </Box>
  );
}

export default NotesContent;
