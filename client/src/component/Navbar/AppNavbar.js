'use client'
import React, { useState } from 'react';
import {
    Box,
    useMediaQuery,
    Drawer,
    Avatar,
    IconButton,
    Typography
} from "@mui/material";
import { FaBars } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import Link from 'next/link';
import { TbCurrencyTaka } from "react-icons/tb";
import Image from "next/image";
import logo from '../../../public/images/logo.png';
import SideNavbar from "@/component/Navbar/SideNavbar";

const HEADER_HEIGHT = 60;

const AppNavbar = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:768px)');

    const ToggleHandler = () => {
        setSidebarOpen(prev => !prev);
    };

    const renderSidebar = () => {
        if (isSmallScreen) {
            return (
                <Drawer
                    anchor="left"
                    open={sidebarOpen}
                    onClose={ToggleHandler}
                    ModalProps={{ keepMounted: true }}
                    PaperProps={{
                        sx: {
                            top: `${HEADER_HEIGHT}px`,
                            height: `calc(100% - ${HEADER_HEIGHT}px)`,
                            bgcolor: "var(--pure-white)",
                        }
                    }}
                >
                    <Box width={260} padding={2}>
                        <SideNavbar />
                    </Box>
                </Drawer>
            );
        }

        return (
            <Box
                width={sidebarOpen ? '100px' : '250px'}
                minWidth="100px"
                height={`calc(100vh - ${HEADER_HEIGHT}px)`}
                position="fixed"
                top={`${HEADER_HEIGHT}px`}
                left={0}
                borderRight="1px solid #ddd"
                padding={2}
                bgcolor="var(--pure-white)"
                sx={{
                    transition: 'width 0.4s ease',
                    overflowY: "auto"
                }}
            >
                <SideNavbar sidebarOpen={sidebarOpen} />
            </Box>
        );
    };

    return (
        <Box>
            {/* Fixed Top Navbar */}
            <Box
                position="fixed"
                top={0}
                left={0}
                right={0}
                zIndex={999999}
                bgcolor="var(--pure-white)"
                px={{ xs: 1, md: 4 }}
                height={`${HEADER_HEIGHT}px`}
                borderBottom="1px solid #ddd"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                {/* Left section */}
                <Box display="flex" alignItems="center" gap={{ xs: 0, md: 2 }}>
                    <IconButton onClick={ToggleHandler} sx={{ color: "var(--sky-blue)" }}>
                        <FaBars size={22} />
                    </IconButton>

                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} width={40} height={40} alt="logo" />
                        <Typography
                            variant="h6"
                            sx={{
                                color: "var(--sky-blue)",
                                fontWeight: "bold",
                                fontSize: { xs: "1rem", sm: "1.5rem" },
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            OUR-DENMARK
                        </Typography>
                    </Link>
                </Box>

                {/* Right section */}
                <Box display="flex" alignItems="center" gap={{ xs: 1, md: 3 }}>
                    <Link href="/">
                        <Box
                            display="flex"
                            alignItems="center"
                            color="var(--sky-blue)"
                            sx={{ fontWeight: 600 }}
                        >
                            250 <TbCurrencyTaka />
                        </Box>
                    </Link>

                    <IconButton>
                        <IoNotificationsOutline size={22} />
                    </IconButton>

                    <IconButton>
                        <Avatar sx={{ width: 32, height: 32 }} />
                    </IconButton>
                </Box>
            </Box>

            {/* Main layout */}
            <Box display="flex" marginTop={`${HEADER_HEIGHT}px`}>
                {renderSidebar()}
                <Box
                    flex={1}
                    px={3}
                    py={3}
                    marginLeft={isSmallScreen ? 0 : sidebarOpen ? '100px' : '250px'}
                    sx={{
                        transition: 'margin-left 0.4s ease',
                        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default AppNavbar;
