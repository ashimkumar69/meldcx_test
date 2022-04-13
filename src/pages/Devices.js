import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function Devices() {
  const authContext = React.useContext(AuthContext);
  let navigate = useNavigate();

  const [activeDevices, setActiveDevices] = React.useState(2);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDevices(getRndInteger(0, 10));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  React.useEffect(() => {
    if (!authContext.isLoggedIn) navigate("/", { replace: true });
  }, [navigate, authContext.isLoggedIn]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: "50%",
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
  );
}
