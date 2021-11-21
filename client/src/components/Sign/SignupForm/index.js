import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, Form } from "react-bootstrap";
import Auth from "../../../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../../utils/mutations";

const display = {
  width: {
    width: "100%",
  },
  main: {
    margin: "auto",
  },
  pointer: {
    color: "blue",
    cursor: "pointer",
  },
};

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <span>Global Trade</span> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignupForm(props) {
  const { setCurrentText } = props;
  const [userFormData, setUserFormData] = useState({    
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: {
          email: userFormData.email,
          password: userFormData.password,
          firstName: userFormData.firstName,
          lastName: userFormData.lastName,
        },
      });
      Auth.login(data.addUser.token);
      console.log("data", data);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      firstName: "",
      lastName:"",
      email: "",
      password: "",
    });
    console.log({
      userFormData,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          style={display.main}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            // sx={{ mt: 3 }}
            // style={display.width}
          >
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              sorry...that username is already taken
            </Alert>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} htmlFor="firstName">
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleInputChange}
                  value={userFormData.firstName}
                />
              </Grid>

              <Grid item xs={6} htmlFor="lastName">
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  onChange={handleInputChange}
                  value={userFormData.lastName}
                  autoFocus
                />
              </Grid>
              <Form.Control.Feedback type="invalid">
                {error && <div>Username is required!</div>}
              </Form.Control.Feedback>
              <Grid item xs={12} htmlFor="email">
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                  value={userFormData.email}
                />
              </Grid>
              <Form.Control.Feedback type="invalid">
                {error && <div>Email is required!</div>}
              </Form.Control.Feedback>
              <Grid item xs={12} htmlFor="password">
                <TextField
                  type="password"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  // autoComplete="new-password"
                  onChange={handleInputChange}
                  value={userFormData.password}
                />
              </Grid>
              <Form.Control.Feedback type="invalid">
                {error && <div>Password is required!</div>}
              </Form.Control.Feedback>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={
                !(
                  userFormData.firstName &&
                  userFormData.lastName &&
                  userFormData.email &&
                  userFormData.password
                )
              }
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item style={display.main}>
                <Typography
                  variant="body2"
                  onClick={() => setCurrentText("Sign In")}
                  style={display.pointer}
                >
                  Already have an account? Sign in
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
