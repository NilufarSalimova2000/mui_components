import React from 'react';
import styled from '@emotion/styled';
import { Box, IconButton, Rating, Stack, Typography } from '@mui/material';
import { HeartIcon } from "../../assets/icons/heart-icon";
import { theme } from '../../config/mui-config';

const CardWrapper = styled.div`
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    position: relative;
`

const NewCardBadge = styled.p`
  background-color: ${theme.palette.primary.main};
  color: #fff;
  padding: 3px 20px;
  position: absolute;
  top: 0px;
  left: 0;
`;

const InstallmentPrice = styled.div`
    font-weight: 400;
    font-size: 14px;
    /* line-height: 100%; */
    color: #fff;
    background: #618c78;
    width: 69px;
    text-align: center;
    padding: 2px 0;
`

 export const ProductCard = ({id, img, title, size, location, raiting, price, installment, new:newProduct}) => {
  return (
    <CardWrapper>
      <Stack mb={"20px"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}><div>{newProduct && <NewCardBadge>Новинка</NewCardBadge>}</div>
      <IconButton><HeartIcon /></IconButton></Stack>
      <Box mb={"20px"} textAlign={"center"}>
        <img src={img} alt="imag" />
      </Box>
      <Typography fontWeight={500} mb={"8px"} variant='body1'>{title}</Typography>
      <Typography mb={"8px"} variant='body2'>Размер: {size}</Typography>
      <Typography mb={"8px"} variant='body2'>Производитель: {location}</Typography>
      <Stack mb={"16px"} direction={"row"} alignItems={"center"} gap={"8px"}>
        <Rating value={raiting} precision={0.5} readOnly />
        <Typography variant='h3'>0 отзывов</Typography>
      </Stack>
      <Stack direction={"row"} gap={"15px"}>
        <Stack>
            <Typography mb={"8px"} variant='h3'>Цена</Typography>
            <Typography variant='body1'>{price} </Typography>
        </Stack>
        <Stack>
        <Typography mb={"8px"} variant='h3'>В рассрочку</Typography>
        <Stack direction={"row"} gap={"4px"}>
           <InstallmentPrice>{installment.price}</InstallmentPrice>
           <Typography variant='h3'>х {installment.month} мес</Typography>
        </Stack>
        </Stack>
      </Stack>
    </CardWrapper>
  )
}

