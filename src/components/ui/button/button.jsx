import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../../../config/mui-config";
import { Link } from "react-router-dom";

export const CustomButton = styled(Button)`
background-color: ${theme.palette.secondary.main};
font-weight: 700;
font-size: 18px;
line-height: 140%;
color: #fff;
padding: 13px 38px;
border-radius: 10px;
`

export const CustomLInkButton = styled(Link)`
  color: ${theme.palette.primary.main};
  text-decoration: underline;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  &:hover {
    color: ${theme.palette.primary[900]};
  }
  
`;