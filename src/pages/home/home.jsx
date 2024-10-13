import React from "react";
import { Banner } from "../../components/banner";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../../config/mui-config";
import { ProductCard } from "../../components/card/product-card";
import { products } from "../../data/product-data";

const CustomLink = styled(Link)`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    display: block;
    color: ${theme.palette.primary.main};
    &:hover {
        color: ${theme.palette.primary[600]};
    }
`

export const Home = () => {
    return (
        <>
            <Banner />
            <Box py={"100px"}>
                <Container maxWidth="xs">
                    <Stack direction={"row"} gap={"32px"} alignItems={"end"} mb={"29px"}>
                        <Typography variant="h2">Новинки</Typography>
                        <CustomLink>Все новинки</CustomLink>
                        
                    </Stack>
                    <Grid2 container spacing={"40px"}>
                            {products.map((item) => {
                                return <Grid2 key={item.id} size={3}>
                                    <ProductCard {...item} />
                                </Grid2>
                        })}
                        </Grid2>
                </Container>
            </Box>
            <Box pb={"100px"}>
                <Container maxWidth="xs">
                    <Stack direction={"row"} gap={"32px"} alignItems={"end"} mb={"29px"}>
                        <Typography variant="h2">Скидки</Typography>
                        <CustomLink>Все новинки</CustomLink>
                        
                    </Stack>
                    <Grid2 container spacing={"40px"}>
                            {products.map((item) => {
                                return <Grid2 key={item.id} size={3}>
                                    <ProductCard {...item} />
                                </Grid2>
                        })}
                        </Grid2>
                </Container>
            </Box>
        </>
    )
}