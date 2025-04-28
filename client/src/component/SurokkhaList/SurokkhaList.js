'use client'

import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Box,
} from '@mui/material';

const data = [
    { id: 1, type: 'Surokkha', name: 'RUHUL AMIN RAFI', createdDate: '2025-04-04', number: 'N/A' },
    { id: 2, type: 'Surokkha', name: 'MD NAHID', createdDate: '2025-04-02', number: '6910667572' },
    { id: 3, type: 'Surokkha', name: 'MD RONY MIAH', createdDate: '2025-03-25', number: '8704690265' },
    { id: 4, type: 'Surokkha', name: 'MD RONY MIA', createdDate: '2025-03-25', number: '8704690265' },
    { id: 5, type: 'Surokkha', name: 'MD JALIL MIAH', createdDate: '2025-03-23', number: '2407960232' },
    { id: 6, type: 'Surokkha', name: 'Nahid Hasan', createdDate: '2024-10-10', number: 'N/A' },
    { id: 7, type: 'Surokkha', name: 'asdsdsa', createdDate: '2024-10-10', number: 'N/A' },
    { id: 8, type: 'Surokkha', name: 'asdsdsa', createdDate: '2024-10-10', number: 'N/A' },
    { id: 9, type: 'Surokkha', name: 'sadasd', createdDate: '2024-10-10', number: 'N/A' },
    { id: 10, type: 'Surokkha', name: 'Shamim vaii', createdDate: '2024-08-10', number: 'N/A' },
    { id: 11, type: 'Surokkha', name: 'Shamim vaii', createdDate: '2024-08-10', number: 'N/A' },
    { id: 12, type: 'Surokkha', name: 'Shamim vaii', createdDate: '2024-08-10', number: 'N/A' },
];

const SurokkhaList = () => {
    const [sortOrder, setSortOrder] = useState('Newest First');
    const [entriesPerPage, setEntriesPerPage] = useState(10);

    const sortedData = [...data].sort((a, b) => {
        const dateA = new Date(a.createdDate).getTime();
        const dateB = new Date(b.createdDate).getTime();
        return sortOrder === 'Newest First' ? dateB - dateA : dateA - dateB;
    });

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleEntriesChange = (event) => {
        setEntriesPerPage(Number(event.target.value));
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', p: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Show entries</InputLabel>
                    <Select
                        value={entriesPerPage}
                        label="Show entries"
                        onChange={handleEntriesChange}
                    >
                        {[10, 20, 50, 100].map((num) => (
                            <MenuItem key={num} value={num}>
                                {num}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Sort by</InputLabel>
                    <Select
                        value={sortOrder}
                        label="Sort by"
                        onChange={handleSortChange}
                    >
                        <MenuItem value="Newest First">Newest First</MenuItem>
                        <MenuItem value="Oldest First">Oldest First</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <TableContainer sx={{ whiteSpace: 'nowrap' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Created Date</TableCell>
                            <TableCell>Number</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {sortedData.slice(0, entriesPerPage).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.createdDate}</TableCell>
                                <TableCell>{row.number}</TableCell>
                                <TableCell>
                                    <Button variant="contained" size="small">
                                        Download
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default SurokkhaList;
