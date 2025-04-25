'use client'
import React, { useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { BsFileEarmarkPdf } from 'react-icons/bs';

const UploadFileBox = () => {
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
                    maxWidth: 500,
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
    );
};

export default UploadFileBox;
