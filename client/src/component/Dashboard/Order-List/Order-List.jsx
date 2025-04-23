'use client'
import React from 'react';
import {Box, Card, CardContent, Grid, IconButton, keyframes, Typography} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Marquee from "react-fast-marquee";

const OrderList = () => {

    const orderList = [
        {id: 1, item: 30, title: "মোট ঝুলে থাকা অর্ডার"},
        {id: 2, item: 50, title: "মোট অর্ডার"},
        {id: 3, item: 60, title: "মোট ডেলিভারি"},
        {id: 4, item: 40, title: "মোট বায়োমেট্রিক অর্ডার"},
        {id: 5, item: 40, title: "মোট ডিলিট অর্ডার"},
        {id: 6, item: 30, title: "মোট না পাওয়া অর্ডার"},
        {id: 7, item: 50, title: "মোট ম্যাচ পাওয়া অর্ডার"},
        {id: 8, item: 60, title: "মোট মৃত অর্ডার"},
        {id: 9, item: 40, title: "মোট গ্রুপ যোগদান"},
    ]

    const handler = (id) => {
        if(id === 1){
            alert(id)
        }
        else if(id === 2){
            alert(id)
        }
        else if(id === 3){
            alert(id)
        }
        else if(id === 4){
            alert(id)
        }
        else if(id === 5){
            alert(id)
        }
        else if(id === 7){
            alert(id)
        }
        else if(id === 8){
            alert(id)
        }
        else{
            alert("9")
        }
    }

    return (
        <div>
            <Box>
                <Card sx={{marginBottom:5}}>
                    <CardContent sx={{ margin: 0, padding: '20px 30px !important' }}>
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
                                            <IconButton onClick={() => handler(order.id)}>
                                                <ArrowForwardIcon
                                                    sx={{
                                                        color: 'var(--sky-blue)',
                                                    }}
                                                />
                                            </IconButton>
                                        </Box>
                                        <Typography variant={"h6"}>
                                            {order.title}
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