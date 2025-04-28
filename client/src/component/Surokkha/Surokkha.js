import React from 'react';
import {Box, Card, CardContent, FormControl, Grid, TextField, Typography} from "@mui/material";
import Marquee from "react-fast-marquee";

const Surokkha = () => {
    return (
        <Box>
            <Card sx={{marginBottom:5}}>
                <CardContent sx={{ margin: 0, padding: '10px 30px !important' }}>
                    <Marquee speed={100}>
                        ⬅️⬅️সাপোর্ট এ ক্লিক করেন নতুন গ্রুপ লিংক দিয়েছি সবাই জয়েন দেন⬅️⬅️
                    </Marquee>
                </CardContent>
            </Card>
            <Grid container spacing={2} sx={{
                backgroundColor: "white",
                padding: {xs:2, md:4}
            }}>
                {/*---- left side ----*/}
                <Grid size={{xs: 12, md: 6}} className={"space-y-5"}>
                    <Box>
                        <Typography variant={"body2"} fontSize={"24px"}>
                            Beneficiary Information
                        </Typography>
                    </Box>
                    {/*---- Certificate No ----*/}
                    <Box>
                        <FormControl fullWidth>
                            <label htmlFor="">Certificate No:</label>
                            <TextField
                                sx={{
                                    backgroundColor: "#ddd",
                                }}
                                variant="outlined"
                                value={"BD348756937736"}
                            />
                        </FormControl>
                    </Box>
                    {/*---- Choose any  ----*/}
                    <Box sx={{
                        display: "flex",
                        textAlign: "center",
                        gap: 3
                    }}>
                        <Typography variant={"body1"}>
                            Choose any :
                        </Typography>
                        <Box sx={{display: "flex", textAlign: "center", gap:1}} >
                            <input
                                id={"nid"}
                                type="radio"
                                name="National"
                                value={"NID No"}
                            />
                            <label htmlFor="nid">NID No.</label>
                        </Box>
                        <Box sx={{display: "flex", textAlign: "center", gap:1}} >
                            <input
                                id={"birth"}
                                type="radio"
                                name="National"
                                value={"NID No"}
                            />
                            <label htmlFor="birth">Brith No.</label>
                        </Box>
                    </Box>
                    {/*---- name ----*/}
                   <Box>
                       <FormControl fullWidth>
                           <label htmlFor="name">Name</label>
                           <TextField
                               id="name"
                               placeholder={"Enter Your Name"}
                           />
                       </FormControl>
                   </Box>
                    {/*---- National ID: ----*/}
                   <Box>
                       <FormControl fullWidth>
                           <label htmlFor="NID">National ID:</label>
                           <TextField
                               id="NID"
                               placeholder={"N/A"}
                           />
                       </FormControl>
                   </Box>
                    {/*---- Passport No: ----*/}
                   <Box>
                       <FormControl fullWidth>
                           <label htmlFor="passport">Passport No:</label>
                           <TextField
                               id="passport"
                               placeholder={"N/A"}
                           />
                       </FormControl>
                   </Box>
                    {/*---- Date of Birth: ----*/}
                   <Box>
                       <FormControl fullWidth>
                           <label htmlFor="birthday">Date of Birth:</label>
                           <TextField
                               id="birthday"
                               placeholder={"25-09-2025"}
                           />
                       </FormControl>
                   </Box>
                    {/*---- Gender: ----*/}
                    <Box>
                        <FormControl fullWidth>
                            <label htmlFor="gender">Gender :</label>
                            <select
                                style={{
                                    border: "1px solid grey",
                                    padding: "15px 14px",
                                    borderRadius: "5px",
                                }}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </FormControl>
                    </Box>
                    {/*---- Nationality : ----*/}
                    <Box>
                        <FormControl fullWidth>
                            <label htmlFor="nationality">Nationality:</label>
                            <TextField
                                id="nationality"
                                placeholder={"Bangladeshi"}
                            />
                        </FormControl>
                    </Box>
                    {/*---- Vaccination By: ----*/}
                    <Box>
                        <FormControl fullWidth>
                            <label htmlFor="Vaccination">Vaccination By:</label>
                            <TextField
                                id="Vaccination"
                                value={"Directorate General of Health Services (DGHS)"}
                                placeholder={"Vaccination"}
                            />
                        </FormControl>
                    </Box>
                </Grid>

                {/*---- right side ----*/}
                <Grid size={{xs: 12, md: 6}} className={"space-y-5"}>
                    <Box>
                        <Typography variant={"body2"} fontSize={"24px"}>
                            Vaccination Details
                        </Typography>
                    </Box>
                    {/*---- Date of vaccination (Dose 1): ----*/}
                    <Box>
                        <FormControl fullWidth>
                            <label htmlFor="VacciDetails">Date of vaccination (Dose 1):</label>
                            <TextField
                                id="VacciDetails"
                                placeholder={"10-04-2024"}
                            />
                        </FormControl>
                    </Box>
                    {/*---- Name of vaccine (Dose 1): ----*/}
                    <Box>
                        <FormControl fullWidth>
                            <label>Name of vaccine (Dose 1):</label>
                            <select
                                style={{
                                    border: "1px solid grey",
                                    padding: "15px 14px",
                                    borderRadius: "5px",
                                }}
                            >
                                <option value="1">N/A</option>
                                <option value="2">Pfizer (Pfizer-BioNTech)</option>
                                <option value="3">Vero Cell (Sinopharm)</option>
                                <option value="4">COMIRNATY (Paediatrics)</option>
                                <option value="5">AstraZeneca (AstraZeneca)</option>
                                <option value="6">Janssen (Johnson & Johnson)</option>
                                <option value="7">Moderna (Moderna)</option>
                                <option value="8">Other</option>
                            </select>
                        </FormControl>
                    </Box>
                    {/*---- Date of vaccination (Dose 2): ----*/}
                    <Box>
                        <FormControl fullWidth>
                            <label>Date of vaccination (Dose 2):</label>
                            <TextField
                                placeholder={"10-04-2024"}
                            />
                        </FormControl>
                    </Box>
                    {/*---- Name of vaccine (Dose 2): ----*/}
                    <Box>
                        <FormControl fullWidth>
                            <label>Name of vaccine (Dose 2):</label>
                            <select
                                style={{
                                    border: "1px solid grey",
                                    padding: "15px 14px",
                                    borderRadius: "5px",
                                }}
                            >
                                <option value="1">N/A</option>
                                <option value="2">Pfizer (Pfizer-BioNTech)</option>
                                <option value="3">Vero Cell (Sinopharm)</option>
                                <option value="4">COMIRNATY (Paediatrics)</option>
                                <option value="5">AstraZeneca (AstraZeneca)</option>
                                <option value="6">Janssen (Johnson & Johnson)</option>
                                <option value="7">Moderna (Moderna)</option>
                                <option value="8">Other</option>
                            </select>
                        </FormControl>
                    </Box>
                    {/*---- Date of vaccination (Dose 3): ----*/}
                    <Box>
                        <FormControl fullWidth>
                            <label>Date of vaccination (Dose 3):</label>
                            <TextField
                                placeholder={"10-04-2024"}
                            />
                        </FormControl>
                    </Box>
                    {/*---- Name of vaccine (Dose 3): ----*/}
                   <Box>
                       <FormControl fullWidth>
                           <label>Name of vaccine (Dose 3):</label>
                           <select
                               style={{
                                   border: "1px solid grey",
                                   padding: "15px 14px",
                                   borderRadius: "5px",
                               }}
                           >
                               <option value="1">N/A</option>
                               <option value="2">Pfizer (Pfizer-BioNTech)</option>
                               <option value="3">Vero Cell (Sinopharm)</option>
                               <option value="4">COMIRNATY (Paediatrics)</option>
                               <option value="5">AstraZeneca (AstraZeneca)</option>
                               <option value="6">Janssen (Johnson & Johnson)</option>
                               <option value="7">Moderna (Moderna)</option>
                               <option value="8">Other</option>
                           </select>
                       </FormControl>
                   </Box>
                    {/*---- Vaccination Center: ----*/}
                    <Box>
                        <FormControl fullWidth>
                            <label>Vaccination Center:</label>
                            <select
                                style={{
                                    border: "1px solid grey",
                                    padding: "15px 14px",
                                    borderRadius: "5px",
                                }}
                            >
                                <option value="1">Dhaka Medical College Hospital</option>
                            </select>
                        </FormControl>
                    </Box>
                    {/*---- Total Dose Given: ----*/}
                   <Box>
                       <FormControl fullWidth>
                           <label>Total Dose Given:</label>
                           <select
                               style={{
                                   border: "1px solid grey",
                                   padding: "15px 14px",
                                   borderRadius: "5px",
                               }}
                           >
                               <option value="1">Dose 1</option>
                               <option value="2">Dose 2</option>
                               <option value="3">Dose 3</option>
                           </select>
                       </FormControl>
                   </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Surokkha;