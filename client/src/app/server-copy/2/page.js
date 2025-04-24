'use client';

import React from 'react';
import ServerCopyForm from "@/component/Server_Copy/Server-Copy-Form";
import ServerCopy from "@/component/Server_Copy/ServerCopy";

const Page = () => {
    return (
        <div>
            <ServerCopy>
                <ServerCopyForm />
            </ServerCopy>
        </div>
    );
};

export default Page;
