'use client'
import React from 'react';
import {Box, Card, CardContent, Grid, IconButton, keyframes, Typography} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Marquee from "react-fast-marquee";

const OrderList = () => {

    const orderList = [
        {id: 1, item: 30,},
        {id: 1, item: 50,},
        {id: 1, item: 60,},
        {id: 1, item: 40,},
        {id: 1, item: 40,},
        {id: 1, item: 30,},
        {id: 1, item: 50,},
        {id: 1, item: 60,},
        {id: 1, item: 40,},
        {id: 1, item: 40,},
        {id: 1, item: 40,},
        {id: 1, item: 30,},
        {id: 1, item: 50,},
        {id: 1, item: 60,},
        {id: 1, item: 40,},
        {id: 1, item: 40,},
        {id: 1, item: 30,},
    ]


    return (
        <div>
            <Box>
                <Card sx={{marginBottom:5}}>
                    <CardContent>
                        <Marquee speed={100}>
                            🛍️ অর্ডার ড্যাশবোর্ড — নতুন অর্ডার এসেছে! 🛒 অর্ডার ড্যাশবোর্ড — নতুন অর্ডার এসেছে! 🛒
                        </Marquee>
                    </CardContent>

                </Card>
                <Grid  container spacing={2}>
                    {
                        orderList.map((order, index) => (
                            <Grid
                                size={{xs:12, sm:6, md:6, lg:4}}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        borderLeft: `5px solid var(--sky-blue)`,
                                        borderRadius: 2,
                                        boxShadow: 3,
                                        transition: 'transform 0.2s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                        },
                                    }}
                                >
                                    <CardContent>
                                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                                            <Typography variant={"h4"}>
                                                {order.item}
                                            </Typography>
                                            <IconButton>
                                                <ArrowForwardIcon
                                                    sx={{
                                                        color: 'var(--sky-blue)',
                                                    }}
                                                />
                                            </IconButton>
                                        </Box>
                                        <Typography variant={"h6"}>
                                            Total Pending Order
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default OrderList;