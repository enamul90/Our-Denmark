'use client'
import React, {useRef} from 'react';
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
            <Card sx={{marginBottom:5}}>
                <CardContent sx={{ margin: 0, padding: '10px 30px !important' }}>
                    <Marquee speed={100}>
                        🛍️ অর্ডার ড্যাশবোর্ড — নতুন অর্ডার এসেছে! 🛒 অর্ডার ড্যাশবোর্ড — নতুন অর্ডার এসেছে! 🛒
                    </Marquee>
                </CardContent>
            </Card>
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
                <Box sx={{p:5 , my:5}}>
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
                            <TextField
                                label="নাম (বাংলা) *"
                                placeholder="সম্পূর্ণ নাম বাংলায়"
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <TextField
                                label="নাম (ইংরেজি) *"
                                placeholder="সম্পূর্ণ নাম ইংরেজিতে"
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <TextField
                                label="এনআইডি নম্বর *"
                                placeholder="এনআইডি নম্বর"
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <TextField
                                label="পিন নম্বর *"
                                placeholder="পিন নম্বর"
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <TextField
                                label="পিতার নাম *"
                                placeholder="পিতার নাম বাংলায়"
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <TextField
                                label="মাতার নাম *"
                                placeholder="মাতার নাম বাংলায়"
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <TextField
                                label="জন্মস্থান *"
                                placeholder="জন্মস্থান (অবস্থান)"
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <TextField
                                label="জন্ম তারিখ *"
                                type="date"
                                defaultValue="1987-03-20"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:6}}>
                            <TextField
                                label="রক্তের গ্রুপ"
                                placeholder="B+"
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid size={{xs:12 , md:6}}>
                            <TextField
                                label="প্রদানের তারিখ *"
                                type="date"
                                defaultValue="2025-04-24"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Box>
                        <TextField
                            label="ঠিকানা *"
                            placeholder="বাড়ি/হোল্ডিং: (Holding), গ্রাম/রোড: (গ্রাম, রোড), ডাকঘর: (Post Office - Postal Code), উপজেলা, সিটি কর্পোরেশন/পৌরসভা, জেলা"
                            fullWidth
                            multiline
                            rows={3}
                            margin="normal"
                        />
                    </Box>
                    <Box sx={{
                        textAlign:'center',
                        marginTop: 5,
                    }}>
                        <Typography variant={"body1"} color={"green"} className={"animate-bounce"}>
                            Note: You will be charged 4 tk for this NID creation !
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                mt: 2,
                                background: 'var(--sky-blue)',
                                color: '#fff',
                                fontWeight: 'bold',
                                borderRadius: '12px',
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
