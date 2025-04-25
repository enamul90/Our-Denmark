'use client';
import React from 'react';
import { Box, Button, MenuItem, Paper, Select, TextField, Typography, InputLabel, FormControl } from "@mui/material";

const AutoETin = () => {
    const [tinOption, setTinOption] = React.useState('');
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
                    <FormControl fullWidth>
                        <InputLabel id="tin-option-label">TIN Option</InputLabel>
                        <Select
                            labelId="tin-option-label"
                            id="tin_option"
                            value={tinOption}
                            label="TIN Option"
                            onChange={handleTinChange}
                        >
                            <MenuItem value="1">E-TIN with NID number</MenuItem>
                            <MenuItem value="2">TIN with TIN number</MenuItem>
                            <MenuItem value="3">TIN number with another TIN</MenuItem>
                            <MenuItem value="4">Mobile number with TIN</MenuItem>
                            <MenuItem value="5">Passport number with TIN</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box mt={3}>
                    <TextField
                        fullWidth
                        label="Enter old TIN Number"
                        variant="outlined"
                        placeholder="1234567890"
                    />
                </Box>

                <Box mt={4}>
                    <Typography variant="body2" color="green" mb={2}>
                        <strong>Note:</strong> You will be charged <strong>999 tk</strong> for Auto E-TIN creation!
                    </Typography>
                    <Button variant="contained"
                            sx={{
                                background: 'var(--sky-blue)',
                                color: '#fff',
                                fontWeight: 'bold',
                                borderRadius: '10px',
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
