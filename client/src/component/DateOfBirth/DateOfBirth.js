'use client';

import React, {useState} from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    Grid, InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography
} from "@mui/material";
import Marquee from "react-fast-marquee";

const DateOfBirth = () => {
    const [birthRegNo, setBirthRegNo] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('male');

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
            <Paper>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    paddingTop={5}
                    paddingBottom={2}
                    paddingX={{xs:2, md:0}}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            padding: {xs:2, md:4},
                            maxWidth: 500,
                            borderRadius: 2,
                        }}
                    >
                        <Typography variant="body1" fontSize={"1.5rem"} mb={3} textAlign={"center"}>
                            Enter Birth Info
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <FormControl fullWidth size={"small"} sx={{marginBottom:2}}>
                                <label htmlFor="">Birth Reg No</label>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value={birthRegNo}
                                    onChange={(e) => setBirthRegNo(e.target.value)}
                                    placeholder="Enter Birth Registration Number"
                                />
                            </FormControl>
                            <FormControl fullWidth size={"small"} >
                                <label htmlFor="">Date of Birth</label>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                    placeholder="YYYY-MM-DD"
                                />
                            </FormControl>

                            <Box textAlign={"center"}>
                                <Button
                                    className={"btn"}
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        marginTop: 3,
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
                            </Box>
                        </form>
                    </Paper>
                </Box>
                <Box>
                    <Typography variant={"body1"} textAlign={"center"} fontSize={"24px"}>
                        OR
                    </Typography>
                    <Paper sx={{
                        marginY: 2,
                        width: '100%',
                        paddingY: 2,
                        backgroundColor: 'var(--sky-blue)',
                        color: 'var(--pure-white)',
                        textAlign: 'center',
                    }}>
                        সঠিক তথ্য সাবমিট করুন পিডিএপ ডাউনলোড করার জন্য
                    </Paper>
                </Box>

                <form className={"space-y-5 px-5"}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Address 1</label>
                                    <TextField type="text" placeholder={"Address 1"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Address 2</label>
                                    <TextField type="text" placeholder={"Address 2"}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Date fo Registration</label>
                                    <TextField type="text" placeholder={"06/10/2023"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Date of Issuance</label>
                                    <TextField type="text" placeholder={"06/10/2023"}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Birth Registration Number</label>
                                    <TextField type="text" placeholder={"200056854855XXXXXXX"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>QR Code</label>
                                    <TextField type="text" placeholder={"XQRIH"}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Date of Birth</label>
                                    <TextField type="text" placeholder={"06/10/2023"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth size={"small"}>
                                    <label>Gender</label>
                                    <Select
                                        value={gender}
                                        onChange={(e)=>setGender(e.target.value)}
                                    >
                                        <MenuItem value="male">Male</MenuItem>
                                        <MenuItem value="female">Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>নাম(বাংলা)</label>
                                    <TextField type="text" placeholder={"নাম লিখুন"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Name(English)</label>
                                    <TextField type="text" placeholder={"Enter your name"}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>পিতা নাম(বাংলা)</label>
                                    <TextField type="text" placeholder={"পিতা নাম লিখুন"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Father Name(English)</label>
                                    <TextField type="text" placeholder={"Enter your father name"}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>মাতার নাম(বাংলা)</label>
                                    <TextField type="text" placeholder={"মাতার নাম লিখুন"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Mother Name(English)</label>
                                    <TextField type="text" placeholder={"Enter your Mother name"}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>জন্মস্থান(বাংলা)</label>
                                    <TextField type="text" placeholder={"জন্মস্থান লিখুন"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Place of Birth(English)</label>
                                    <TextField type="text" placeholder={"Enter your Place of Birth"}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>স্থায়ী ঠিকানা(বাংলা)</label>
                                    <TextField type="text" placeholder={"স্থায়ী ঠিকানা লিখুন"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Permanent(English)</label>
                                    <TextField type="text" placeholder={"Enter your permanent location"}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>পিতার জাতীয়তা(বাংলা)</label>
                                    <TextField type="text" placeholder={"পিতার জাতীয়তা লিখুন"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Father Nationality(English)</label>
                                    <TextField type="text" placeholder={"Enter your Father Nationality"}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>মাতার জাতীয়তা(বাংলা)</label>
                                    <TextField type="text" placeholder={"মাতার জাতীয়তা লিখুন"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Mother Nationality(English)</label>
                                    <TextField type="text" placeholder={"Enter your Mother Nationality"}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{
                        textAlign: 'center',
                        paddingBottom: 5
                    }}>
                        <Typography variant={"body1"} fontSize={"large"} color={"green"} >
                            Note: You will be charged 10 tk for this birth creation !
                        </Typography>
                        <Button
                            className={"btn"}
                            variant="contained" sx={{
                            width: {xs:'100%', md:'auto'},
                            marginY: 2,
                            paddingY:2,
                            paddingX: 5,
                        }}>
                            Save & Download
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
};

export default DateOfBirth;
