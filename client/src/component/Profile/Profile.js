import React from 'react';
import { Box, Button, Card, CardContent, FormControl, Paper, TextField, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const Profile = () => {
    return (
        <Box>
            {/* Marquee */}
            <Card sx={{marginBottom:5}}>
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
                <form className={"space-y-5"}>
                    {/* Title */}
                    <Box>
                        <Typography variant={"h4"} fontWeight={600} color="primary">
                            Profile
                        </Typography>
                    </Box>

                    {/* User Name */}
                    <Box>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <Typography variant="body2" fontWeight={500} color="textSecondary">User Name</Typography>
                            <TextField
                                sx={{
                                    width: "100%",
                                    borderRadius: 3,
                                    marginTop: 1
                                }}
                                value={"Developer Boss"}
                            />
                        </FormControl>
                    </Box>

                    {/* User Email */}
                    <Box>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <Typography variant="body2" fontWeight={500} color="textSecondary">User Mail</Typography>
                            <TextField
                                sx={{
                                    width: "100%",
                                    borderRadius: 3,
                                    marginTop: 1
                                }}
                                value={"n@n.com"}
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
                        Update Profile
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Profile;
