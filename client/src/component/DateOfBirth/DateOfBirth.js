'use client';

import React, {useState} from 'react';
import {Box, Button, Card, CardContent, Paper, TextField, Typography} from "@mui/material";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Marquee from "react-fast-marquee";

const DateOfBirth = () => {
    const [birthRegNo, setBirthRegNo] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Birth Reg No:', birthRegNo);
        console.log('Date of Birth:', dateOfBirth);
        // Your logic to fetch data here
    };

    return (
        <Box>
            <Card sx={{marginBottom:3}}>
                <CardContent sx={{ margin: 0, padding: '10px 30px !important' }}>
                    <Marquee speed={100}>
                        Date of Birth NADS ZSDA KADF AASDF E ASD
                    </Marquee>
                </CardContent>
            </Card>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                paddingY={5}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        maxWidth: 500,
                        borderRadius: 2,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" mb={3}>
                        Enter Birth Info
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Birth Reg No"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={birthRegNo}
                            onChange={(e) => setBirthRegNo(e.target.value)}
                            placeholder="Enter Birth Registration Number"
                        />

                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            placeholder="YYYY-MM-DD"
                            type="date"
                            label="Date of Birth"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                marginTop: 3,
                                background: 'var(--sky-blue)',
                                color: '#fff',
                                fontWeight: 'bold',
                                paddingX: 4,
                                paddingY: 1,
                                borderRadius: 2,
                                width: {xs:"100%", md:'auto'},
                            }}
                        >
                            Get Data
                        </Button>
                    </form>
                </Paper>
            </Box>
        </Box>
    );
};

export default DateOfBirth;
