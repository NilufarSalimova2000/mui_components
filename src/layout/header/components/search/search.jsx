import React from "react";
import { IconButton,  Stack, Typography } from "@mui/material";
import logo from "../../../../assets/logo.svg";
import { LogoLink } from "./style";
import { LocationIcon } from "../../../../assets/icons/location-icon";
import { SearchInput } from "../../../../components/search-input";

export const Search = () => {
    return <Stack flexGrow={1} direction={"row"} gap={"60px"}>
        <LogoLink to={"/"}>
            <img src={logo} alt="logo" />
        </LogoLink>
        <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
            <IconButton>
                <LocationIcon/>
            </IconButton>
            <Typography variant="body1">Алматы</Typography>
        </Stack>
        <SearchInput />
    </Stack>
}