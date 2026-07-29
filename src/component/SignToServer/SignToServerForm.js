'use client';

import React, {useRef} from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Stack,
    Paper, Card, CardContent, IconButton, Grid, FormControl
} from '@mui/material';
import { usePathname } from 'next/navigation';
import Marquee from "react-fast-marquee";
import {BsFileEarmarkPdf} from "react-icons/bs";

const ServerToServerForm = () => {
    const pathname = usePathname();
    const activeVersion = pathname.split('/').pop();

    const fileInputRef = useRef(null);

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


    return (
        <Box>
            <Paper>
                <Box sx={{paddingTop: 2}}>
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
               {/*----- form -----*/}
                <Box sx={{p:5 , my:5}} className={"space-y-5"}>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <label>নাম (বাংলা ) *</label>
                            <TextField
                                placeholder="সম্পূর্ণ নাম বাংলায়"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <label>নাম (ইংরেজী) *</label>
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
                            <label htmlFor="">ফরম নম্বর *</label>
                            <TextField
                                placeholder="ফরম নম্বর *"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">ভোটার নম্বর *</label>
                            <TextField
                                placeholder="ভোটার নম্বর *"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">ভোটার এলাকা *</label>
                            <TextField
                                placeholder="ভোটার এলাকা *"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">ধর্ম *</label>
                            <TextField
                                defaultValue="ধর্ম *"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">পিতার নাম *</label>
                            <TextField
                                placeholder="পিতার নাম *"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">মাতার নাম *</label>
                            <TextField
                                placeholder={"মাতার নাম *"}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">জন্মস্থান *</label>
                            <TextField
                                placeholder="জন্মস্থান *"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <label htmlFor="">জন্ম তারিখ *</label>
                            <TextField
                                placeholder={"জন্ম তারিখ *"}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Box>
                        <label htmlFor="">বর্তমান ঠিকানা *</label>
                        <TextField
                            placeholder="বাড়ি/হোল্ডিং: (Holding), গ্রাম/রোড: (গ্রাম, রোড), ডাকঘর: (Post Office - Postal Code), উপজেলা, সিটি কর্পোরেশন/পৌরসভা, জেলা"
                            fullWidth
                            multiline
                            rows={3}
                        />
                    </Box>
                    <Box>
                        <label htmlFor="">স্থায়ী ঠিকানা *</label>
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
                        <Typography variant={"body1"} color={"green"} className={"animate-bounce"}>
                            Note: You will be charged 5 tk for this Sine To Server Copy creation !
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

export default ServerToServerForm;
