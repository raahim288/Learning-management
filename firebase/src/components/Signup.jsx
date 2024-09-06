import React, { useState } from 'react';
import { Box, Button, IconButton, InputAdornment, Paper, TextField, Typography, Grid } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Config/firebase';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userdata) => {
                console.log('userdata', userdata);
                navigate('/Login');
            })
            .catch((err) => {
                alert(`Error: ${err.message}`);
            });
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography sx={{ textAlign: 'center', marginBottom: 2 }}>
                <img src={logo} width={'50%'} alt="Logo" />
            </Typography>

            <Typography
                variant='h4'
                sx={{
                    textAlign: 'center',
                    opacity: 0.9,
                    textShadow: '2px 7px 8px black',
                    fontWeight: 'bold',
                    marginBottom: 4,
                }}
            >
                Welcome to Learning Management
            </Typography>

            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Paper
                        elevation={24}
                        sx={{
                            padding: 4,
                            background: 'black',
                            color: 'white',
                            borderRadius: 2
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
                                marginBottom: 4
                            }}
                        >
                            Create an Account
                        </Typography>

                        <TextField
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            placeholder="Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <DriveFileRenameOutlineIcon sx={{ color: 'white' }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
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
                                backgroundColor: 'black',
                            }}
                        />

                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            placeholder="Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon sx={{ color: 'white' }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
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
                                            {showPassword ? <VisibilityIcon sx={{ color: 'white' }} /> : <VisibilityOffIcon sx={{ color: 'white' }} />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            sx={{
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
                            Signup
                        </Button>

                        <Typography sx={{ marginTop: 2, textAlign: 'center' }}>
                            <a href="#" onClick={() => navigate('/Login')} style={{ color: 'white' }}>Already have an account?</a>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Signup;
