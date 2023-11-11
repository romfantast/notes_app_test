import { Suspense } from "react";
import TopSideBar from "../TopSideBar/TopSideBar";
import { Outlet } from "react-router";
import { Box, CircularProgress, Container } from "@mui/material";

function Layout() {
  return (
    <Box>
      <Container style={{ marginBottom: "100px" }}>
        <TopSideBar />
        <Suspense
          fallback={
            <CircularProgress
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100dvw",
              }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  );
}

export default Layout;
