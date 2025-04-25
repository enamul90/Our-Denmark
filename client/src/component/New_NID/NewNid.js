'use client';

import React from 'react';
import { Box, Paper } from "@mui/material";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NewNid = ({ children }) => {
    const pathname = usePathname();

    return (
        <Box>
            <Paper sx={{ py: 2, px: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 2, md: 5 },
                    }}
                >
                    <Link
                        href="/new-nid/upload-file"
                        style={{
                            color: pathname === '/new-nid/upload-file' ? 'var(--sky-blue)' : 'inherit',
                            fontWeight: pathname === '/new-nid/upload-file' ? 'bold' : 'normal',
                            textDecoration: 'none'
                        }}
                    >
                        Upload file
                    </Link>
                    <Link
                        href="/new-nid/manual-upload"
                        style={{
                            color: pathname === '/new-nid/manual-upload' ? 'var(--sky-blue)' : 'inherit',
                            fontWeight: pathname === '/new-nid/manual-upload' ? 'bold' : 'normal',
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

export default NewNid;
