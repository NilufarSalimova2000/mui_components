import { Box, Container, Stack, Typography } from "@mui/material";
import imag1 from "../../assets/banner1.png";
import imag2 from "../../assets/banner2.png";
import React from "react";
import { theme } from "../../config/mui-config";
import { SecondaryButton } from "../secondary-button";

export const Banner = () => {
    return (
        <Box bgcolor={theme.palette.primary.main} py={"97px"}>
            <Container maxWidth={"xs"}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box>
                        <Typography mb={"32px"} variant="h1">Новая коллекция ковров Venetta</Typography>
                        <SecondaryButton>Смотреть все</SecondaryButton>
                    </Box>
                    <Stack direction={"row"} gap={"40px"}>
                        <Box maxWidth={"303px"}>
                            <img src={imag1} alt="imag" />
                        </Box>
                        <Box maxWidth={"303px"}>
                            <img src={imag2} alt="imag" />
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>

    )
}