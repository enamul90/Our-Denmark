'use client'
import React, {useEffect, useRef, useState} from 'react';
import {
    Box, Button, Card, CardContent,
    FormControl,
    Grid, IconButton,
    InputLabel, Paper,
    TextField, Typography
} from '@mui/material';
import {BsFileEarmarkPdf} from "react-icons/bs";
import Marquee from "react-fast-marquee";

const NidForm = () => {
    const fileInputRef = useRef(null);
    const [date, setDate] = useState('');

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('Selected file:', file);
            // You can add upload logic here
        }
    };






    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDate(today);
    }, []);


    return (
        <Box>
            <Card sx={{marginBottom:5}}>
                <CardContent sx={{ margin: 0, padding: '10px 30px !important' }}>
                    <Marquee speed={100}>
                        🛍️ অর্ডার ড্যাশবোর্ড — নতুন অর্ডার এসেছে! 🛒 অর্ডার ড্যাশবোর্ড — নতুন অর্ডার এসেছে! 🛒
                    </Marquee>
                </CardContent>
            </Card>
            <Paper>
                <Box sx={{paddingTop: 2, paddingX: {xs:2, md:0} }}>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <Box
                        onClick={handleClick}
                        sx={{
                            border: '2px solid #1976d2',
                            borderRadius: '8px',
                            p: 4,
                            textAlign: 'center',
                            maxWidth: {xs:400, md:700},
                            margin: '0 auto',
                            mt: 8,
                            cursor: 'pointer',
                            ':hover': { backgroundColor: '#f5f5f5' },
                        }}
                    >
                        <IconButton disableRipple>
                            <BsFileEarmarkPdf style={{ fontSize: 48, color: '#1976d2' }} />
                        </IconButton>

                        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', color: '#1976d2' }}>
                            সাইন কপি আপলোড করুন
                        </Typography>
                        <Typography sx={{ color: '#1976d2' }}>
                            অথবা
                        </Typography>
                        <Typography sx={{ mt: 1, fontWeight: '500', color: '#1976d2' }}>
                            পিডিএফ ফাইল নির্বাচিত করতে ক্লিক করুন
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{p:{xs:2, md:5} , my:5}} className={"space-y-5"}>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <FormControl fullWidth >
                                <label>এনআইডি ছবি</label>
                                <TextField type="file" />
                            </FormControl>
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <FormControl fullWidth >
                                <label>স্বাক্ষর</label>
                                <TextField type="file" />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">নাম (বাংলা) *</label>
                            <TextField
                                placeholder="সম্পূর্ণ নাম বাংলায়"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">নাম (ইংরেজি) *</label>
                            <TextField
                                placeholder="সম্পূর্ণ নাম ইংরেজিতে"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">এনআইডি নম্বর *</label>
                            <TextField
                                placeholder="এনআইডি নম্বর"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">পিন নম্বর *</label>
                            <TextField
                                placeholder="পিন নম্বর"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">পিতার নাম *</label>
                            <TextField
                                placeholder="পিতার নাম বাংলায়"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">মাতার নাম *</label>
                            <TextField
                                placeholder="মাতার নাম বাংলায়"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">জন্মস্থান *</label>
                            <TextField
                                placeholder="জন্মস্থান (অবস্থান)"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">জন্ম তারিখ *</label>
                            <TextField
                                placeholder="1987-03-20"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">রক্তের গ্রুপ</label>
                            <TextField
                                placeholder="B+"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">প্রদানের তারিখ *</label>
                            <TextField
                                type="input"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Box>
                        <label htmlFor="">ঠিকানা *</label>
                        <TextField
                            placeholder="বাড়ি/হোল্ডিং: (Holding), গ্রাম/রোড: (গ্রাম, রোড), ডাকঘর: (Post Office - Postal Code), উপজেলা, সিটি কর্পোরেশন/পৌরসভা, জেলা"
                            fullWidth
                            multiline
                            rows={3}
                        />
                    </Box>
                    <Box sx={{
                        textAlign:'center',
                        marginTop: 5,
                    }}>
                        <Typography variant={"body1"} fontSize={"large"} color={"green"} >
                            Note: You will be charged 4 tk for this NID creation !
                        </Typography>
                        <Button
                            className={"btn"}
                            variant="contained"
                            sx={{
                                mt: 2,
                                color: '#fff',
                                fontWeight: 'bold',
                                textTransform: 'none',
                            }}>
                            Save & Download
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default NidForm;
