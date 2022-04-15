import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { deepOrange, grey } from "@mui/material/colors";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import DeviceCircle from "../components/DeviceCircles";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function Devices() {
  console.log("Devices");
  const authContext = React.useContext(AuthContext);

  const [activeDevices, setActiveDevices] = React.useState(2);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDevices(getRndInteger(0, 10));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <React.Fragment>
      {!authContext.isLoggedIn && <Navigate to="/" replace={true} />}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: deepOrange["A200"],
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              position: "relative",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DeviceCircle activeDevices={activeDevices} />
            <Typography
              component="h1"
              variant="h2"
              sx={{
                color: grey["50"],
              }}
            >
              {activeDevices}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: grey["50"],
                lineHeight: 1,
              }}
            >
              DEVICES
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: grey["50"],
                lineHeight: 1,
              }}
            >
              ONLINE
            </Typography>
          </Box>
          <Paper
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: deepOrange["900"],
              py: 2,
            }}
            elevation={0}
            variant="outlined"
            square
          >
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                type="button"
                variant="contained"
                sx={{
                  color: grey["900"],
                  backgroundColor: grey["50"],
                  "&:hover": {
                    backgroundColor: grey["50"],
                  },
                }}
                disableElevation
              >
                Notify
              </Button>
              <Button
                type="button"
                variant="contained"
                onClick={() => {
                  authContext.logout();
                }}
                sx={{
                  backgroundColor: grey["900"],
                  "&:hover": {
                    backgroundColor: grey["900"],
                  },
                }}
                disableElevation
              >
                Logout Out
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </React.Fragment>
  );
}
