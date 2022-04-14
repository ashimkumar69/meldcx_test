import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function Devices() {
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
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {activeDevices} Device Online
          </Typography>
          <Box component="div" sx={{ mt: 8 }}>
            <Stack spacing={2} direction="row">
              <Button type="button" variant="contained">
                Notify
              </Button>
              <Button
                type="button"
                variant="contained"
                onClick={() => {
                  authContext.logout();
                }}
              >
                Logout Out
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
