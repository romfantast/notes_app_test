import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <Box>
      <img
        src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/svg/400004.svg"
        alt={404}
      />
      <Typography variant="h3" gutterBottom>
        Error 404
      </Typography>
      <Typography variant="body2">
        Page not found! Looks like the URL went on a vacation without leaving a
        forwarding address. Let's hope it's enjoying some sunny beaches and will
        be back soon!
      </Typography>

      <NavLink
        to="/"
        style={{
          color: "#1976d2ed",
          textDecoration: "none",
          display: "inline-block",
          marginTop: "16px",
          padding: "8px",
          border: "1px solid #1976d2ed",
        }}
      >
        Return to the homepage
      </NavLink>
    </Box>
  );
}

export default NotFound;
