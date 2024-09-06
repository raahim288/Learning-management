import React, { useState } from 'react';
import { Button, IconButton, InputAdornment, Paper, TextField, Typography, Grid, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './Config/firebase';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userdata) => {
                console.log('userdata', userdata);
                navigate('Student/studentRegistration');
            })
            .catch((err) => {
                alert(`Error: ${err.message}`);
            });
    };

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                navigate('/login/Student/studentRegistration');
            })
            .catch((error) => {
                console.log(`Google login error: ${error.message}`);
            });
    };

    const handleForgotPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert(`Password reset email sent to ${email}`);
            })
            .catch((error) => {
                alert(`Error: ${error.message}`);
            });
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box sx={{marginLeft:'3rem', width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: 2 }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <Paper
                        elevation={24}
                        sx={{
                            height:'75%',
                            padding: 7, // Adjust padding to match Signup
                            background: 'black',
                            color: 'white',
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', // Center items horizontally
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: 'center',
                                opacity: 0.9,
                                textShadow: '2px 7px 8px gray',
                                fontWeight: 'bold',
                                color: 'white',
                                marginBottom: 4,
                            }}
                        >
                            Login Your Account
                        </Typography>
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon sx={{ color: 'white' }} />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Email"
                            sx={{
                                width: '100%', // Full width of the container
                                maxWidth: '400px', // Optional: Set a max-width to limit the size
                                marginBottom: 2,
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'white',
                                },
                                backgroundColor: 'black',
                            }}
                        />
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <HttpsIcon sx={{ color: 'white' }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleShowPassword}>
                                            {showPassword ? <VisibilityOffIcon sx={{ color: 'white', cursor: 'pointer' }} /> : <VisibilityIcon sx={{ color: 'white', cursor: 'pointer' }} />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            sx={{
                                width: '100%', // Full width of the container
                                maxWidth: '400px', // Optional: Set a max-width to limit the size
                                marginBottom: 2,
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'white',
                                },
                                backgroundColor: 'black',
                            }}
                        />
                        <Button
                            onClick={handleSubmit}
                            fullWidth
                            sx={{
                                marginTop: 2,
                                backgroundColor: 'black',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'darkgray',
                                },
                            }}
                            variant="contained"
                        >
                            <LoginIcon /> <span style={{ paddingLeft: 8 }}> Login </span>
                        </Button>
                        <Button
                            onClick={handleGoogleLogin}
                            fullWidth
                            sx={{
                                marginTop: 1,
                                backgroundColor: 'black',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'darkgray',
                                },
                            }}
                            variant="contained"
                        >
                            <GoogleIcon /> <span style={{ paddingLeft: 8 }}> Login with Google</span>
                        </Button>
                        <Typography sx={{ textAlign: 'center', marginTop: 2 }}>
                            <a href="#" onClick={handleForgotPassword} style={{ color: 'white' }}>Forgot password</a>
                        </Typography>
                        <Typography sx={{ textAlign: 'center', marginTop: 2 }}>
                            <a href="#" onClick={() => navigate('/')} style={{ color: 'white', fontSize: '1.3rem' }}>Create an Account</a>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;
