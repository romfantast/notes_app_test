import { Box, ButtonBase, Divider, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <Box>
      <Typography variant="h5">
        Welcome to the NotifyMe Family! I am glad that you are reading this
        email. I will be happy to help you grow your business. As a thank you
        for joining us, I would like to give you a gift.
      </Typography>
      <Divider
        style={{
          margin: "16px 0px",
        }}
      />
      <Typography variant="subtitle2">
        The best way to ensure that your greetings sound natural and confident
        is to practice them aloud, preferably with a fluent speaker to give you
        pointers. No-one to practice with? Find your perfect tutor.
      </Typography>
      <div>
        <ButtonBase>
          <NavLink
            to="/notes"
            style={{
              color: "#1976d2ed",
              textDecoration: "none",
              display: "inline-block",
              marginTop: "16px",
              padding: "20px 50px",
              border: "1px solid #1976d2ed",
            }}
          >
            Get Started
          </NavLink>
        </ButtonBase>
      </div>

      <img
        src="https://img.freepik.com/free-photo/beautiful-cat-portrait-close-up_23-2149152060.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699660800&semt=ais"
        alt="cat"
        style={{
          width: "100%",
          maxWidth: "50%",
          borderRadius: "16px",
          marginTop: "16px",
        }}
      />
    </Box>
  );
}

export default About;
