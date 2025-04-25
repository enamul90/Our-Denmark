import React from 'react';
import NewNid from "@/component/New_NID/NewNid";
import NidForm from "@/component/New_NID/Nid-Form";
import {Box} from "@mui/material";

const Page = () => {
    return (
        <Box>
            <NewNid>
                <NidForm />
            </NewNid>
        </Box>
    );
};

export default Page;