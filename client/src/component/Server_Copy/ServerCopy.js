'use client';

import React from 'react';
import {
    Box,
    Typography,
    Select,
    MenuItem,
    Paper,
    FormControl,
    InputLabel
} from "@mui/material";
import { usePathname, useRouter } from 'next/navigation';

const ServerCopy = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();

    const serverOptions = [
        { label: "Server 1", path: "/server-copy/1" },
        { label: "Server 2", path: "/server-copy/2" },
        { label: "Server 3", path: "/server-copy/3" },
    ];

    // Find the currently selected server based on the pathname
    const currentServer = serverOptions.find(option => pathname === option.path)?.path || '';

    const handleChange = (event) => {
        router.push(event.target.value);
    };

    return (
        <Box>
            <Paper
                elevation={3}
                sx={{
                    p: 2,
                    borderRadius: 3,
                    mb: 4,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                }}
            >
                <Typography variant="h6" color="textSecondary" fontWeight="bold">
                    সার্ভার কপি অর্ডার
                </Typography>

                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <Select
                        value={currentServer}
                        onChange={handleChange}
                    >
                        {serverOptions.map((option) => (
                            <MenuItem key={option.path} value={option.path}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Paper>

            {children}
        </Box>
    );
};

export default ServerCopy;
