import React from 'react';
import NewNID from "@/component/New_NID/NewNid";
import UploadFileBox from "@/component/New_NID/UploadFileBox";
import {Box} from "@mui/material";

const Page = () => {
    return (
        <Box>
            <NewNID>
                <UploadFileBox />
            </NewNID>
        </Box>
    );
};

export default Page;