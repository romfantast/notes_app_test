import { Box, ButtonBase, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Greeting() {
  return (
    <Box>
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginBottom: "16px" }}
      >
        Hello, my name is Roman Shulga
      </Typography>
      <Typography variant="h5">
        From idea to next big thing, make it happen in NotifyMe
      </Typography>

      <Typography variant="h8">
        NotifyMe has rich, ready-to-use native capabilities for teams of every
        size to build out their vision with a creative, collaborative edge. That
        means supporting workflows in every corner of your business.
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <img
            src="	https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
            alt="cat"
            style={{
              width: "100%",
              maxWidth: "50%",
              borderRadius: "16px",
              marginTop: "16px",
            }}
          />
        </Grid>
        <Grid item>
          <ButtonBase>
            <NavLink
              to="/notes"
              style={{
                color: "#1976d2ed",
                textDecoration: "none",
                display: "inline-block",
                marginTop: "16px",
                padding: "16px 20px",
                border: "1px solid #1976d2ed",
              }}
            >
              Get Started
            </NavLink>
          </ButtonBase>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Greeting;
