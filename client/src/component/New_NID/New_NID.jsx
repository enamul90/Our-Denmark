'use client'
import React from 'react';
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import UploadFileBox from "@/component/New_NID/UploadFileBox";
import NidForm from "@/component/New_NID/Nid-Form";

const NewNid = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Upload file" value="1" />
                        <Tab label="manual upload" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <UploadFileBox />
                </TabPanel>
                <TabPanel value="2">
                    <NidForm />
                </TabPanel>
            </TabContext>
        </Box>
    );
};

export default NewNid;