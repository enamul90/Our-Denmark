'use client';

import React from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Stack,
    Paper
} from '@mui/material';
import { usePathname } from 'next/navigation';

const ServerCopyForm = () => {
    const pathname = usePathname();
    const activeVersion = pathname.split('/').pop();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f2f2f2',
            }}
        >
            <Paper
                elevation={10}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    minHeight: 400,
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        mb: 3,
                        background: 'linear-gradient(to right, purple, red)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Server Copy Version {activeVersion}
                </Typography>

                <Stack spacing={2}>
                    <Box>
                        <Typography variant="subtitle1" textAlign={"left"} fontWeight="bold">
                            NID Number
                        </Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            placeholder="Enter NID Number"
                            size="small"
                        />
                    </Box>

                    <Box>
                        <Typography variant="subtitle1" textAlign={"left"} fontWeight="bold" >
                            Date of Birth
                        </Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            placeholder="YYYY-MM-DD"
                            size="small"
                        />
                    </Box>

                    <Typography variant="body1" fontSize={"large"} sx={{ color: 'green', mt: 1 ,}}>
                        Note: You will be charged 5 tk for this Server Copy V{activeVersion} creation!
                    </Typography>

                    <Button
                        className={"btn"}
                        variant="contained"
                        sx={{
                            mt: 2,
                            color: '#fff',
                            fontWeight: 'bold',
                            textTransform: 'none',
                        }}
                    >
                        Save & Download
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
};

export default ServerCopyForm;
