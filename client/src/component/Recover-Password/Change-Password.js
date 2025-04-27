'use client'
import React, { useState } from 'react';
import { Box, Button, Card, CardContent, FormControl, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Visibility, VisibilityOff } from '@mui/icons-material';

const ChangePassword = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <Box>
            {/* Marquee */}
            <Card sx={{ marginBottom: 5 }}>
                <CardContent sx={{ margin: 0, padding: '10px 30px !important' }}>
                    <Marquee speed={100}>
                        ⬅️⬅️সাপোর্ট এ ক্লিক করেন নতুন গ্রুপ লিংক দিয়েছি সবাই জয়েন দেন⬅️⬅️
                    </Marquee>
                </CardContent>
            </Card>

            {/* Profile Form */}
            <Paper sx={{
                padding: 4,
                boxShadow: 3,
                borderRadius: '8px',
            }}>
                {/* Title */}
                <Box>
                    <Typography variant={"h4"} fontWeight={600} marginBottom={3} color="primary">
                        Change Password
                    </Typography>
                </Box>
                <form>
                    {/* Old Password */}
                    <Box>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <Typography variant="body2" fontWeight={500} color="textSecondary">Old Password</Typography>
                            <TextField
                                sx={{
                                    width: "100%",
                                    borderRadius: 3,
                                    marginTop: 1
                                }}
                                placeholder={"Enter Old Password"}
                                type={showOldPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowOldPassword(!showOldPassword)}
                                                edge="end"
                                            >
                                                {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </FormControl>
                    </Box>

                    {/* New Password */}
                    <Box>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <Typography variant="body2" fontWeight={500} color="textSecondary">New Password</Typography>
                            <TextField
                                sx={{
                                    width: "100%",
                                    borderRadius: 3,
                                    marginTop: 1
                                }}
                                placeholder={"Enter New Password"}
                                type={showNewPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                edge="end"
                                            >
                                                {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </FormControl>
                    </Box>

                    {/* Confirm Password */}
                    <Box>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <Typography variant="body2" fontWeight={500} color="textSecondary">Confirm Password</Typography>
                            <TextField
                                sx={{
                                    width: "100%",
                                    borderRadius: 3,
                                    marginTop: 1
                                }}
                                placeholder={"Enter Confirm Password"}
                                type={showConfirmPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </FormControl>
                    </Box>

                    {/* Update Button */}
                    <Button sx={{
                        width: "100%",
                        backgroundColor: 'skyblue',
                        color: 'white',
                        padding: '14px',
                        borderRadius: '8px',
                        '&:hover': {
                            backgroundColor: 'deepskyblue',
                        }
                    }}>
                        Update Password
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default ChangePassword;
