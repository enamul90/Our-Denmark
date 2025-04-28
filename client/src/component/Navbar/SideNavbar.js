'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Typography, Tooltip } from "@mui/material";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { FaRegWindowMinimize } from "react-icons/fa";
import {
    BsCreditCard2Front,
    BsDatabaseFillDown,
    BsFileEarmarkMedical,
    BsPatchQuestionFill,
    BsShieldLockFill,
    BsBank2
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoPower } from "react-icons/io5";
import { RiListUnordered } from "react-icons/ri";
import { AiOutlineDashboard } from "react-icons/ai";

const SideNavbar = ({ sidebarOpen }) => {
    const pathname = usePathname();

    const Navigation = [
        { path: '/', title: "Order Dashboard", Icons: <AiOutlineDashboard /> },
        { path: '/new-nid', title: "new nid", Icons: <BsCreditCard2Front /> },
        {
            path: '/server-copy/1',
            title: "server copy (Unofficial)",
            Icons: <BsDatabaseFillDown />,
            matchPrefix: '/server-copy',
        },
        { path: '/auto-nid', title: "auto nid", Icons: <BsCreditCard2Front /> },
        { path: '/auto-etin', title: "auto e-tin", Icons: <BsFileEarmarkMedical /> },
        { path: '/birth', title: "Date of Birth", Icons: <BsFileEarmarkMedical />},
        { path: '/death', title: "Death of Date", Icons: <BsFileEarmarkMedical /> },
        {
            path: '/surokkha',
            title: "security clone",
            Icons: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v1.402c0 .511.677.693.933.25l.7-1.214a1 1 0 0 1 1.733 1l-.701 1.214c-.256.443.24.939.683.683l1.214-.701a1 1 0 0 1 1 1.732l-1.214.701c-.443.256-.262.933.25.933H15a1 1 0 1 1 0 2h-1.402c-.512 0-.693.677-.25.933l1.214.701a1 1 0 1 1-1 1.732l-1.214-.7c-.443-.257-.939.24-.683.682l.701 1.214a1 1 0 1 1-1.732 1l-.701-1.214c-.256.443-.933-.262-.933-.25V15a1 1 0 1 1-2 0v-1.402c0-.512-.677-.693-.933-.25l-.701 1.214a1 1 0 0 1-1.732-1l.7-1.214c.257-.443-.24-.939-.682-.683l-1.214.701a1 1 0 1 1-1-1.732l1.214-.701c.443-.256.939-.24.683-.683l-.701-1.214a1 1 0 0 1 1.732-1l.701 1.214c.256.443.933.261.933-.25V1a1 1 0 0 1 1-1m2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-3a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
                </svg>
            )
        },
        { path: '/sign-to-server-copy/1', title: "sign to server copy", Icons: <BsDatabaseFillDown /> , matchPrefix: '/sign-to-server-copy',},
        { path: '/9', title: "File list", Icons: <RiListUnordered /> },
        { path: '/surokkha-list', title: "security list", Icons: <RiListUnordered /> },
        { path: '/11', title: "recharge", Icons: <BsBank2 /> },
    ];

    const Settings = [
        { path: '/profile', title: "profile", Icons: <CgProfile /> },
        { path: '/change-password', title: "recover password", Icons: <BsShieldLockFill /> },
        { path: 'https://chat.whatsapp.com/GDOQGshXYL53v6eEk9zjPi', title: "support", external: true , Icons: <BsPatchQuestionFill /> },
        { path: '/16', title: "logout", Icons: <IoPower /> },
    ];

    return (
        <Box py={3}>
            <Box display="flex" alignItems="center" gap={1} mb={4} px={2} justifyContent={sidebarOpen ? 'center' : 'flex-start'}>
                <SpaceDashboardIcon sx={{ color: 'var(--sky-blue)' }} />
                {!sidebarOpen && (
                    <Typography variant="h6" sx={{ color: 'var(--sky-blue)', fontWeight: 600, fontSize: "1.2rem" }}>
                        Dashboard
                    </Typography>
                )}
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
                {Navigation.map((item, index) => {
                    const isActive = item.matchPrefix ? pathname.startsWith(item.matchPrefix) : pathname === item.path;

                    return (
                        <React.Fragment key={index}>
                            <Link href={item.path} target={item.external && "_blank"}>
                                <Tooltip title={sidebarOpen ? item.title : ''} placement="right">
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: sidebarOpen ? 0 : "10px",
                                            justifyContent: sidebarOpen ? "center" : "flex-start",
                                            padding: "10px 16px",
                                            borderRadius: "12px",
                                            backgroundColor: isActive ? 'var(--sky-blue)' : 'transparent',
                                            color: isActive ? 'var(--pure-white)' : 'var(--grey-medium)',
                                            fontWeight: isActive ? 700 : 500,
                                            cursor: "pointer",
                                            textDecoration: "none",
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: isActive ? 'var(--sky-blue)' : 'var(--sky-light)',
                                                color: !isActive && 'var(--grey-medium)',
                                            }
                                        }}
                                    >
                                        <Box sx={{ fontSize: "1.4rem", display: 'flex', alignItems: 'center' }}>
                                            {item.Icons}
                                        </Box>
                                        {!sidebarOpen && (
                                            <Typography sx={{ fontSize: "0.9rem", fontWeight: isActive ? 700 : 500 }}>
                                                {item.title}
                                            </Typography>
                                        )}
                                    </Box>
                                </Tooltip>
                            </Link>
                        </React.Fragment>
                    );
                })}
            </Box>

            <Typography variant="body1" component="p" sx={{ paddingY: 2, color: "var(--grey-medium)", paddingX: 2 }}>
                {sidebarOpen ? <FaRegWindowMinimize /> : "Setting"}
            </Typography>

            <Box display="flex" flexDirection="column" gap={1}>
                {Settings.map((item, index) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link href={item.path} key={index} target={item.external && "_blank"} >
                            <Tooltip title={sidebarOpen ? item.title : ''} placement="right">
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: sidebarOpen ? 0 : "10px",
                                        justifyContent: sidebarOpen ? "center" : "flex-start",
                                        padding: "10px 16px",
                                        borderRadius: "12px",
                                        backgroundColor: isActive ? 'var(--sky-blue)' : 'transparent',
                                        color: isActive ? 'var(--pure-white)' : 'var(--grey-medium)',
                                        fontWeight: isActive ? 700 : 500,
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: isActive ? 'var(--sky-blue)' : 'var(--sky-light)',
                                            color: !isActive && 'var(--grey-medium)',
                                        }
                                    }}
                                >
                                    <Box sx={{ fontSize: "1.4rem", display: 'flex', alignItems: 'center' }}>
                                        {item.Icons}
                                    </Box>
                                    {!sidebarOpen && (
                                        <Typography sx={{ fontSize: "0.9rem", fontWeight: isActive ? 700 : 500 }}>
                                            {item.title}
                                        </Typography>
                                    )}
                                </Box>
                            </Tooltip>
                        </Link>
                    );
                })}
            </Box>
        </Box>
    );
};

export default SideNavbar;
