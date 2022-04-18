import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { grey } from "@mui/material/colors";

//import axios from "../helpers/axios-instance";
import { AuthContext } from "../context/auth-context";
import { useNavigate, Navigate } from "react-router-dom";

const loginInitialState = { email: null, password: null };

function loginReducer(state, { type, payload }) {
  switch (type) {
    case "LOGIN_ERROR":
      return {
        email: payload?.email ?? null,
        password: payload?.password ?? null,
      };
    default:
      throw new Error("Login Error");
  }
}

export default function Login() {
  // console.log("Login");
  const authContext = React.useContext(AuthContext);
  let navigate = useNavigate();
  const [loginState, loginDispatch] = React.useReducer(
    loginReducer,
    loginInitialState
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      // const response = await axios.post("/login", data, {
      //   headers: {
      //     Accepts: "application/json",
      //     "Content-Type": "application/json",
      //   },
      // });
      // console.log(response);

      if (!data.get("email") || !data.get("password")) throw "Login failed";
      authContext.login("meldcx_token_123");
      navigate("/devices", { replace: true });
    } catch (error) {
      // console.error(error);
      loginDispatch({
        type: "LOGIN_ERROR",
        payload: {
          email: "Email field required",
          password: "Password field required",
        },
      });
    }
  };

  return (
    <React.Fragment>
      {authContext.isLoggedIn && <Navigate to="/devices" replace={true} />}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: grey["900"],
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                width: "100%",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h3">
                    Login
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                      mt: 1,
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      placeholder="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      error={loginState.email ? true : false}
                      helperText={loginState.email}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      placeholder="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <NewReleasesIcon />
                          </InputAdornment>
                        ),
                      }}
                      error={loginState.password ? true : false}
                      helperText={loginState.password}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, px: 4, py: 1 }}
                    >
                      Log In
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
