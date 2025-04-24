import React from 'react';
import {
    Box, Button,
    FormControl,
    Grid,
    InputLabel,
    TextField, Typography
} from '@mui/material';

const NidForm = () => {
    return (
        <Box >
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
    );
};

export default NidForm;
