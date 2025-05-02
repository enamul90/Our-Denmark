'use client';
import React, { useRef, useState } from 'react';
import {
    Box,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
    Stack,
    InputLabel,
    FormControl, Button,
} from "@mui/material";

const AutoNid = () => {
    const inputSignature = useRef(null);
    const [signatureOption, setSignatureOption] = useState("1"); // default: Auto NID

    const handleSignatureChange = (event) => {
        setSignatureOption(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', py:10}}>
            <Paper sx={{ p: 4, borderRadius: 3, width: '100%', maxWidth: 500 }}>
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

                    Auto NID
                </Typography>

                <Stack spacing={3}>
                    <Box>
                        <InputLabel htmlFor="nid_number">NID Number</InputLabel>
                        <TextField
                            id="nid_number"
                            fullWidth
                            placeholder="Enter your NID number"
                            size="small"
                        />
                    </Box>

                    <Box>
                        <InputLabel htmlFor="dob">Date of Birth</InputLabel>
                        <TextField
                            id="dob"
                            type="input"
                            placeholder={"YYYY-MM-DD"}
                            fullWidth
                            size="small"
                        />
                    </Box>

                    <Box>
                        <InputLabel id="signature-select-label">Signature Option</InputLabel>
                        <FormControl fullWidth size="small">
                            <Select
                                labelId="signature-select-label"
                                value={signatureOption}
                                onChange={handleSignatureChange}
                                inputRef={inputSignature}
                            >
                                <MenuItem value="1">Auto NID Signature</MenuItem>
                                <MenuItem value="2">Manual Signature Upload</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    {signatureOption === "2" && (
                        <Box>
                            <InputLabel htmlFor="signature-upload">Upload Signature</InputLabel>
                            <TextField
                                id="signature-upload"
                                type="file"
                                fullWidth
                                size="small"
                                accept='image/*'
                            />
                        </Box>
                    )}
                    <Box>
                        <Typography variant={"body1"} color={"green"} fontSize={"large"} textAlign={"center"}>
                            Note: You will be charged 15 tk for Auto NID creation!
                        </Typography>
                        <Button className={"btn"} variant="contained"
                                sx={{
                                    mt: 2,
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    width: "100%",
                                }}>
                            Save & Download
                        </Button>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
};

export default AutoNid;
