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
    const [gender, setGender] = useState('');

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
                                <FormControl fullWidth >
                                    <label>Gender</label>
                                    <select
                                        style={{
                                            border: "1px solid grey",
                                            padding: "15px 14px",
                                            borderRadius: "5px",
                                        }}
                                        value={gender}
                                        onChange={(e)=>setGender(e.target.value)}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
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
                                <FormControl fullWidth >
                                    <label>মৃত্যুর কারণ (বাংলা)</label>
                                    <select
                                        style={{
                                            border: "1px solid grey",
                                            padding: "15px 14px",
                                            borderRadius: "5px",
                                        }}
                                        value={gender}
                                        onChange={(e)=>setGender(e.target.value)}
                                    >
                                        <option>Select Bangla</option>
                                        <option value="">ক্রনিক লিভার রোগ</option>
                                        <option value="">উচ্চ জায়গা হতে পড়ে গিয়ে মৃত্যু</option>
                                        <option value="">কার্ডিওজেনিক শক</option>
                                        <option value="">ব্রট ডেড</option>
                                        <option value="">আনএটেনডেন্ট ডেথ</option>
                                        <option value="">এ্যাসপিরেশন নিউমোনিয়া</option>
                                        <option value="">সড়ক দূর্ঘটনা জনিত কারন</option>
                                        <option value="">এআরডিএস</option>
                                        <option value="">এমআই</option>
                                        <option value="">সেপটিসেমিয়া</option>
                                        <option value="">সিওপিডি</option>
                                        <option value="">ডায়াবেটিস</option>
                                        <option value="">উচ্চ রক্তচাপ</option>
                                        <option value="">হৃদক্রিয়া বন্ধ হয়ে</option>
                                        <option value="">আত্মহত্যা</option>
                                        <option value="">সিকেডি - কিডনি জনিত রোগ</option>
                                        <option value="">হেমারেজিক ডেঙ্গু</option>
                                        <option value="">পানিতে ডুবে</option>
                                        <option value="">ইলেক্ট্রোলাইট ইমব্যালেন্স</option>
                                        <option value="">হত্যা</option>
                                        <option value="">কোভিড ১৯</option>
                                        <option value="">প্রাকৃতিক দুর্যোগ</option>
                                        <option value="">সর্পদংশন</option>
                                        <option value="">
                                            মোডসের সাথে অ্যাকুট স্টেমি (ডায়াট্রোলটাইমিয়া) ট্রান্সমিনিটিস সহ আর্ডস সহ, এমএইচডি, ডিএম, এইচএন, এইচ / ও এনএসটিএমআইয়ের এসএসআরডি।
                                        </option>
                                        <option value="">আগুনে পুড়ে মৃত্যু</option>
                                        <option value="">শারীরিক অসুস্থতা</option>
                                        <option value="">বৈদ্যুতিক শক</option>
                                        <option value="">মাতৃমৃত্যু</option>
                                        <option value="">পোস্ট সিএবিজি কার্ডিয়াক আরসিএসটি</option>
                                        <option value="">উদরাময়</option>
                                        <option value="">স্বাভাবিক অবস্থায় মৃত্যুবরন</option>
                                        <option value="">ক্যান্সারে আক্রান্ত হয়ে মৃত্যুবরণ</option>
                                        <option value="">ট্রেন দুর্ঘটনা</option>
                                        <option value="">প্যারালাইসিস</option>
                                        <option value="">স্ট্রোক</option>
                                        <option value="">ফুসফুসের সংক্রমণ</option>
                                        <option value="">Other (Add manually)</option>
                                    </select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12 , md:6}}>
                                <FormControl fullWidth >
                                    <label>Cause of Death (English)</label>
                                    <select
                                        style={{
                                            border: "1px solid grey",
                                            padding: "15px 14px",
                                            borderRadius: "5px",
                                        }}
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option>Select English</option>
                                        <option value="">Chronic Liver Disease</option>
                                        <option value="">Death due to Fall from Height</option>
                                        <option value="">Cardiogenic Shock</option>
                                        <option value="">Brutal Death</option>
                                        <option value="">Unattended Death</option>
                                        <option value="">Aspiration Pneumonia</option>
                                        <option value="">Death due to Road Accident</option>
                                        <option value="">ARDS</option>
                                        <option value="">Myocardial Infarction (MI)</option>
                                        <option value="">Septicemia</option>
                                        <option value="">COPD</option>
                                        <option value="">Diabetes</option>
                                        <option value="">High Blood Pressure</option>
                                        <option value="">Cardiac Arrest</option>
                                        <option value="">Suicide</option>
                                        <option value="">CKD - Chronic Kidney Disease</option>
                                        <option value="">Hemorrhagic Dengue</option>
                                        <option value="">Drowning</option>
                                        <option value="">Electrolyte Imbalance</option>
                                        <option value="">Murder</option>
                                        <option value="">COVID-19</option>
                                        <option value="">Natural Disaster</option>
                                        <option value="">Snake Bite</option>
                                        <option value="">
                                            Death due to Acute STEMI (Diaterotemia) with Transaminitis, ARDS, MHD, DM, HTN, or NSTEMI-associated SSRD.
                                        </option>
                                        <option value="">Death due to Fire Burn</option>
                                        <option value="">Physical Illness</option>
                                        <option value="">Electric Shock</option>
                                        <option value="">Maternal Mortality</option>
                                        <option value="">Post-CABG Cardiac Arrest</option>
                                        <option value="">Gastroenteritis</option>
                                        <option value="">Death in Normal Condition</option>
                                        <option value="">Death due to Cancer</option>
                                        <option value="">Train Accident</option>
                                        <option value="">Paralysis</option>
                                        <option value="">Stroke</option>
                                        <option value="">Lung Infection</option>
                                        <option value="">Other (Add manually)</option>
                                    </select>
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
                        <Typography variant={"body1"} color={"green"} >
                            Note: You will be charged 30 tk for this birth creation !
                        </Typography>
                        <Button  variant="contained" sx={{
                            backgroundColor: 'var(--sky-blue)',
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

export default DateOfDeath;
