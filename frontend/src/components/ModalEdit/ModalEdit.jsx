import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditNotesForm from "../EditNotesForm/EditNotesForm";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalEdit({ open, setOpen, note }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center">
            <ModeEditIcon color="primary" fontSize="medium" />
            <Typography style={{ marginLeft: "8px" }} variant="h5">
              Edit Note
            </Typography>
          </Grid>
          <EditNotesForm note={note} setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
}
