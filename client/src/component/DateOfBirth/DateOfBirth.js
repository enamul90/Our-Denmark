'use client';

import React from 'react';
import {Box, Card, CardContent, Paper} from "@mui/material";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Marquee from "react-fast-marquee";

const DateOfBirth = ({ children }) => {
    const pathname = usePathname();

    return (
        <Box>
            <Card sx={{marginBottom:3}}>
                <CardContent sx={{ margin: 0, padding: '20px 30px !important' }}>
                    <Marquee speed={100}>
                        Date of Birth NADS ZSDA KADF AASDF E ASD
                    </Marquee>
                </CardContent>
            </Card>
            <Paper sx={{ py: 2, px: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 2, md: 5 },
                    }}
                >
                    <Link
                        href="/birth/birth-form"
                        style={{
                            color: pathname === '/birth/birth-form' ? 'var(--sky-blue)' : 'inherit',
                            fontWeight: pathname === '/birth/birth-form' ? 'bold' : 'normal',
                            textDecoration: 'none'
                        }}
                    >
                        Upload file
                    </Link>
                    <Link
                        href="/birth/upload-form"
                        style={{
                            color: pathname === '/birth/upload-form' ? 'var(--sky-blue)' : 'inherit',
                            fontWeight: pathname === '/birth/upload-form' ? 'bold' : 'normal',
                            textDecoration: 'none',
                            borderBottom: "ActiveBorder",
                        }}
                    >
                        Manual file Upload
                    </Link>
                </Box>
            </Paper>
            {children}
        </Box>
    );
};

export default DateOfBirth;
