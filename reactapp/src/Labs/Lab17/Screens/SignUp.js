import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { userSignUp } from "../Firebase/FirebaseMethods";
import { useState } from "react";
import SMTextField from "../../../Components/SMTextField";
import SMButton from "../../../Components/SMButton";

export default function SignUp() {
    const [userData, setUserData] = useState({});


    const handleSubmit = () => {
        userSignUp("abc@gmail.com", "12345678");
    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <SMTextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <SMTextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                        />
                        <SMButton
                            label="Sign up"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        />
                        {/* <SMButton
                            label="Already have an account? Login"
                            variant="text"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={()=>{
                                <Link to="#" variant="body2"></Link>
                            }}
                        /> */}
                        <Grid container>
                            <Grid item>
                                <Link to="#" variant="body2">
                                    {"Already have an account? Login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}