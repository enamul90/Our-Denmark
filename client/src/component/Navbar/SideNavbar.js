'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Typography } from "@mui/material";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';

const SideNavbar = () => {
    const pathname = usePathname();

    const Navigation = [
        { path: '/', title: "Order List", Icons: <SegmentOutlinedIcon /> },
        { path: '/order-details', title: "Order Details", Icons: <InsertDriveFileOutlinedIcon /> },
        { path: '/customers', title: "Customer", Icons: <GroupOutlinedIcon /> },
        { path: '/analytics', title: "Analytics", Icons: <TrendingUpOutlinedIcon /> },
        { path: '/reviews', title: "Reviews", Icons: <CreateOutlinedIcon /> },
        { path: '/beverage', title: "Tea & Coffee", Icons: <EmojiFoodBeverageOutlinedIcon /> }
    ];

    return (
        <Box px={2} py={3}>
            {/* Dashboard Title */}
            <Typography
                variant="h6"
                sx={{
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#0B5ED7",
                    fontWeight: 600,
                    fontSize: "1.2rem"
                }}
            >
                <SpaceDashboardIcon /> Dashboard
            </Typography>

            {/* Navigation Items */}
            <Box display="flex" flexDirection="column" gap={1}>
                {Navigation.map((item, index) => {
                    const isActive = pathname === item.path;

                    return (
                        <Link href={item.path} key={index}>
                            <Link href={item.path} key={index} passHref>
                                <Box
                                    component="a"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "20px",
                                        padding: "10px 16px",
                                        borderRadius: "12px",
                                        backgroundColor: isActive ? '#0B5ED7' : 'transparent',
                                        color: isActive ? '#fff' : '#0B5ED7',
                                        fontWeight: isActive ? 600 : 500,
                                        textDecoration: "none",
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#4290fa',
                                            color: '#fff',
                                            transition: 'all 0.5s ease',
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: "1.2rem" }}>
                                        {item.Icons}
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: "0.95rem",
                                            transition: 'color 0.3s ease',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Link>

                        </Link>
                    );
                })}
            </Box>
        </Box>
    );
};

export default SideNavbar;
