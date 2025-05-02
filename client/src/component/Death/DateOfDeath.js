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

const DateOfDeath = () => {
    const [birthRegNo, setBirthRegNo] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('male');
    const [deathCause, setDeathCause] = useState('1');

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
                        <Typography variant="body1" fontSize={"24px"} fontWeight="bold" mb={3} textAlign={"center"}>
                            Enter Birth Info
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <FormControl fullWidth size={"small"}>
                                <label htmlFor="">Birth Reg No</label>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value={birthRegNo}
                                    onChange={(e) => setBirthRegNo(e.target.value)}
                                    placeholder="Enter Birth Registration Number"
                                />
                            </FormControl>
                            <FormControl fullWidth size={"small"} sx={{marginTop:3}}>
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
                            <Grid size={{xs:12 }}>
                                <FormControl fullWidth >
                                    <label>Birth Registration Number</label>
                                    <TextField type="text" placeholder={"200056854855XXXXXXX"}/>
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
                                    <label>Date of Death</label>
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
                                    <label>মৃত্যুস্থান(বাংলা)</label>
                                    <TextField type="text" placeholder={"মৃত্যুস্থান লিখুন"}/>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Place of Death(English)</label>
                                    <TextField type="text" placeholder={"Enter your Place of Death"}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth size={"small"} >
                                    <label>মৃত্যুর কারণ (বাংলা)</label>
                                    <Select
                                        value={deathCause}
                                        onChange={(e)=>setDeathCause(e.target.value)}
                                    >
                                        <MenuItem value={"1"}>Select Bangla</MenuItem>
                                        <MenuItem value="">ক্রনিক লিভার রোগ</MenuItem>
                                        <MenuItem value="">উচ্চ জায়গা হতে পড়ে গিয়ে মৃত্যু</MenuItem>
                                        <MenuItem value="">কার্ডিওজেনিক শক</MenuItem>
                                        <MenuItem value="">ব্রট ডেড</MenuItem>
                                        <MenuItem value="">আনএটেনডেন্ট ডেথ</MenuItem>
                                        <MenuItem value="">এ্যাসপিরেশন নিউমোনিয়া</MenuItem>
                                        <MenuItem value="">সড়ক দূর্ঘটনা জনিত কারন</MenuItem>
                                        <MenuItem value="">এআরডিএস</MenuItem>
                                        <MenuItem value="">এমআই</MenuItem>
                                        <MenuItem value="">সেপটিসেমিয়া</MenuItem>
                                        <MenuItem value="">সিওপিডি</MenuItem>
                                        <MenuItem value="">ডায়াবেটিস</MenuItem>
                                        <MenuItem value="">উচ্চ রক্তচাপ</MenuItem>
                                        <MenuItem value="">হৃদক্রিয়া বন্ধ হয়ে</MenuItem>
                                        <MenuItem value="">আত্মহত্যা</MenuItem>
                                        <MenuItem value="">সিকেডি - কিডনি জনিত রোগ</MenuItem>
                                        <MenuItem value="">হেমারেজিক ডেঙ্গু</MenuItem>
                                        <MenuItem value="">পানিতে ডুবে</MenuItem>
                                        <MenuItem value="">ইলেক্ট্রোলাইট ইমব্যালেন্স</MenuItem>
                                        <MenuItem value="">হত্যা</MenuItem>
                                        <MenuItem value="">কোভিড ১৯</MenuItem>
                                        <MenuItem value="">প্রাকৃতিক দুর্যোগ</MenuItem>
                                        <MenuItem value="">সর্পদংশন</MenuItem>
                                        <MenuItem value="">
                                            মোডসের সাথে অ্যাকুট স্টেমি (ডায়াট্রোলটাইমিয়া) ট্রান্সমিনিটিস সহ আর্ডস সহ, এমএইচডি, ডিএম, এইচএন, এইচ / ও এনএসটিএমআইয়ের এসএসআরডি।
                                        </MenuItem>
                                        <MenuItem value="">আগুনে পুড়ে মৃত্যু</MenuItem>
                                        <MenuItem value="">শারীরিক অসুস্থতা</MenuItem>
                                        <MenuItem value="">বৈদ্যুতিক শক</MenuItem>
                                        <MenuItem value="">মাতৃমৃত্যু</MenuItem>
                                        <MenuItem value="">পোস্ট সিএবিজি কার্ডিয়াক আরসিএসটি</MenuItem>
                                        <MenuItem value="">উদরাময়</MenuItem>
                                        <MenuItem value="">স্বাভাবিক অবস্থায় মৃত্যুবরন</MenuItem>
                                        <MenuItem value="">ক্যান্সারে আক্রান্ত হয়ে মৃত্যুবরণ</MenuItem>
                                        <MenuItem value="">ট্রেন দুর্ঘটনা</MenuItem>
                                        <MenuItem value="">প্যারালাইসিস</MenuItem>
                                        <MenuItem value="">স্ট্রোক</MenuItem>
                                        <MenuItem value="">ফুসফুসের সংক্রমণ</MenuItem>
                                        <MenuItem value="">Other (Add manually)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth size={"small"} >
                                    <label>Cause of Death (English)</label>
                                    <Select
                                        value={deathCause}
                                        onChange={(e) => setDeathCause(e.target.value)}
                                    >
                                        <MenuItem value={"1"}>Select English</MenuItem>
                                        <MenuItem value="">Chronic Liver Disease</MenuItem>
                                        <MenuItem value="">Death due to Fall from Height</MenuItem>
                                        <MenuItem value="">Cardiogenic Shock</MenuItem>
                                        <MenuItem value="">Brutal Death</MenuItem>
                                        <MenuItem value="">Unattended Death</MenuItem>
                                        <MenuItem value="">Aspiration Pneumonia</MenuItem>
                                        <MenuItem value="">Death due to Road Accident</MenuItem>
                                        <MenuItem value="">ARDS</MenuItem>
                                        <MenuItem value="">Myocardial Infarction (MI)</MenuItem>
                                        <MenuItem value="">Septicemia</MenuItem>
                                        <MenuItem value="">COPD</MenuItem>
                                        <MenuItem value="">Diabetes</MenuItem>
                                        <MenuItem value="">High Blood Pressure</MenuItem>
                                        <MenuItem value="">Cardiac Arrest</MenuItem>
                                        <MenuItem value="">Suicide</MenuItem>
                                        <MenuItem value="">CKD - Chronic Kidney Disease</MenuItem>
                                        <MenuItem value="">Hemorrhagic Dengue</MenuItem>
                                        <MenuItem value="">Drowning</MenuItem>
                                        <MenuItem value="">Electrolyte Imbalance</MenuItem>
                                        <MenuItem value="">Murder</MenuItem>
                                        <MenuItem value="">COVID-19</MenuItem>
                                        <MenuItem value="">Natural Disaster</MenuItem>
                                        <MenuItem value="">Snake Bite</MenuItem>
                                        <MenuItem value="">
                                            Death due to Acute STEMI (Diaterotemia) with Transaminitis, ARDS, MHD, DM, HTN, or NSTEMI-associated SSRD.
                                        </MenuItem>
                                        <MenuItem value="">Death due to Fire Burn</MenuItem>
                                        <MenuItem value="">Physical Illness</MenuItem>
                                        <MenuItem value="">Electric Shock</MenuItem>
                                        <MenuItem value="">Maternal Mortality</MenuItem>
                                        <MenuItem value="">Post-CABG Cardiac Arrest</MenuItem>
                                        <MenuItem value="">Gastroenteritis</MenuItem>
                                        <MenuItem value="">Death in Normal Condition</MenuItem>
                                        <MenuItem value="">Death due to Cancer</MenuItem>
                                        <MenuItem value="">Train Accident</MenuItem>
                                        <MenuItem value="">Paralysis</MenuItem>
                                        <MenuItem value="">Stroke</MenuItem>
                                        <MenuItem value="">Lung Infection</MenuItem>
                                        <MenuItem value="">Other (Add manually)</MenuItem>
                                    </Select>
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
                            Note: You will be charged 30 tk for this birth creation !
                        </Typography>
                        <Button className={"btn"}  variant="contained" sx={{
                            width: {xs:'100%', md:'auto'},
                            marginY: 2,
                        }}>
                            Save & Download
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
};

export default DateOfDeath;
