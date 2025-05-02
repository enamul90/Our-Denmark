'use client';
import React from 'react';
import { Box, Button, MenuItem, Paper, Select, TextField, Typography, InputLabel, FormControl } from "@mui/material";
import {black} from "next/dist/lib/picocolors";

const AutoETin = () => {
    const [tinOption, setTinOption] = React.useState("nid");
    const handleTinChange = (event) => {
        setTinOption(event.target.value);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" py={10} >
            <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 500 }}>
                <Typography
                    variant="h4"
                    fontWeight={"bold"}
                    gutterBottom
                    sx={{
                        textAlign:"center",
                        background:'linear-gradient(to right, purple, red)',
                        WebkitBackgroundClip:'text',
                        WebkitTextFillColor:'transparent'
                    }}
                >

                    Official Auto E-TIN
                </Typography>

                <Box mt={3}>
                    <FormControl fullWidth size={"small"}>
                        <label id="tin-option-label">TIN Option</label>
                        <Select
                            id="tin-option-label"
                            value={tinOption}
                            onChange={handleTinChange}
                            color={"dark"}
                        >
                            <MenuItem value="nid">এন,আই,ডি নম্বর দিয়ে টিন</MenuItem>
                            <MenuItem value="tin">টিন নম্বর দিয়ে টিন</MenuItem>
                            <MenuItem value="oldtin">অল্ড টিন নম্বর দিয়ে টিন</MenuItem>
                            <MenuItem value="number">মোবাইল নম্বর দিয়ে টিন</MenuItem>
                            <MenuItem value="passport">পাসপোর্ট নম্বর দিয়ে টিন</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box mt={3}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="1234567890"
                    />
                </Box>

                <Box mt={4}>
                    <Typography variant="body1" color="green" fontSize={"large"} mb={2} textAlign={"center"}>
                        <strong>Note:</strong> You will be charged <strong>999 tk</strong> for Auto E-TIN creation!
                    </Typography>
                    <Button className={"btn"} variant="contained"
                            sx={{
                                color: '#fff',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                width: "100%",
                            }}>
                        Save & Download
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default AutoETin;
