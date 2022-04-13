import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import axios from "../helpers/axios-instance";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const authContext = React.useContext(AuthContext);
  let navigate = useNavigate();

  React.useEffect(() => {
    if (authContext.isLoggedIn) navigate("/devices", { replace: true });
  }, [navigate, authContext.isLoggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);

    try {
      // const response = await axios.post("/login", data, {
      //   headers: {
      //     Accepts: "application/json",
      //     "Content-Type": "application/json",
      //   },
      // });
      // console.log(response);
      authContext.login("meldcx_token_123");
      navigate("/devices", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

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
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
