import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Search } from "./components/search";
import { HeaderButton } from "./components/header-button";
import { theme } from "../../config/mui-config";
import { links } from "./header-data";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <Container maxWidth="xs">
                <Stack py={"31px"} direction={"row"} gap={"61px"} alignItems={"center"}>
                    <Search />
                    <HeaderButton />
                </Stack>
            </Container>
            <Box bgcolor={theme.palette.grey.main} py={"30px"}>
                <Container maxWidth="xs">
                    <Stack  direction={"row"} justifyContent={"space-between"}>
                        {links.map((link) => (
                            <Link style={{textDecoration:"none"}} to={link.path} key={link.id}>
                                <Typography variant="body1">{link.name}</Typography>
                            </Link>
                        ))}
                    </Stack>
                </Container>
            </Box>


        </>
    )
}