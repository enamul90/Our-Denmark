'use client'
import React, {useState} from 'react';
import {Box, Card, CardContent, FormControl, Grid, MenuItem, Select, TextField, Typography} from "@mui/material";
import Marquee from "react-fast-marquee";

const Surokkha = () => {
    const [gender, setGender] = useState("male");
    const [vaccine1,  setVaccine1] = useState("N/A");
    const [vaccine2,  setVaccine2] = useState("N/A");
    const [vaccine3,  setVaccine3] = useState("N/A");

    const [dose, setDose] = useState("1");



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
                        <FormControl fullWidth size={"small"}>
                            <label htmlFor="gender">Gender :</label>
                            <Select
                                value={gender}
                                onChange={(e)=>setGender(e.target.value)}
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </Select>
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
                        <FormControl fullWidth size={"small"}>
                            <label>Name of vaccine (Dose 1):</label>
                            <Select
                                value={vaccine1}
                                onChange={(e)=>setVaccine1(e.target.value)}
                            >
                                <MenuItem value="N/A">N/A</MenuItem>
                                <MenuItem value="Pfizer (Pfizer-BioNTech)">Pfizer (Pfizer-BioNTech)</MenuItem>
                                <MenuItem value="Vero Cell (Sinopharm)">Vero Cell (Sinopharm)</MenuItem>
                                <MenuItem value="COMIRNATY (Paediatrics)">COMIRNATY (Paediatrics)</MenuItem>
                                <MenuItem value="AstraZeneca (AstraZeneca)">AstraZeneca (AstraZeneca)</MenuItem>
                                <MenuItem value="Janssen (Johnson & Johnson)">Janssen (Johnson & Johnson)</MenuItem>
                                <MenuItem value="Moderna (Moderna)">Moderna (Moderna)</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
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
                        <FormControl fullWidth size={"small"}>
                            <label>Name of vaccine (Dose 2):</label>
                            <Select
                                value={vaccine2}
                                onChange={(e)=>setVaccine2(e.target.value)}
                            >
                                <MenuItem value="N/A">N/A</MenuItem>
                                <MenuItem value="Pfizer (Pfizer-BioNTech)">Pfizer (Pfizer-BioNTech)</MenuItem>
                                <MenuItem value="Vero Cell (Sinopharm)">Vero Cell (Sinopharm)</MenuItem>
                                <MenuItem value="COMIRNATY (Paediatrics)">COMIRNATY (Paediatrics)</MenuItem>
                                <MenuItem value="AstraZeneca (AstraZeneca)">AstraZeneca (AstraZeneca)</MenuItem>
                                <MenuItem value="Janssen (Johnson & Johnson)">Janssen (Johnson & Johnson)</MenuItem>
                                <MenuItem value="Moderna (Moderna)">Moderna (Moderna)</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
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
                       <FormControl fullWidth size={"small"}>
                           <label>Name of vaccine (Dose 3):</label>
                           <Select
                               value={vaccine3}
                               onChange={(e)=>setVaccine3(e.target.value)}
                           >
                               <MenuItem value="N/A">N/A</MenuItem>
                               <MenuItem value="Pfizer (Pfizer-BioNTech)">Pfizer (Pfizer-BioNTech)</MenuItem>
                               <MenuItem value="Vero Cell (Sinopharm)">Vero Cell (Sinopharm)</MenuItem>
                               <MenuItem value="COMIRNATY (Paediatrics)">COMIRNATY (Paediatrics)</MenuItem>
                               <MenuItem value="AstraZeneca (AstraZeneca)">AstraZeneca (AstraZeneca)</MenuItem>
                               <MenuItem value="Janssen (Johnson & Johnson)">Janssen (Johnson & Johnson)</MenuItem>
                               <MenuItem value="Moderna (Moderna)">Moderna (Moderna)</MenuItem>
                               <MenuItem value="Other">Other</MenuItem>
                           </Select>
                       </FormControl>
                   </Box>
                    {/*---- Vaccination Center: ----*/}
                    <Box>
                        <FormControl fullWidth size={"small"}>
                            <label>Vaccination Center:</label>
                            <Select
                                value={'1'}
                            >
                                <MenuItem value="1">Dhaka Medical College Hospital</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    {/*---- Total Dose Given: ----*/}
                   <Box>
                       <FormControl fullWidth size={"small"}>
                           <label>Total Dose Given:</label>
                           <Select
                               value={dose}
                               onChange={(e)=>setDose(e.target.value)}
                           >
                               <MenuItem value="1">Dose 1</MenuItem>
                               <MenuItem value="2">Dose 2</MenuItem>
                               <MenuItem value="3">Dose 3</MenuItem>
                           </Select>
                       </FormControl>
                   </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Surokkha;