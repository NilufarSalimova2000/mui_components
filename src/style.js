import styled from "@emotion/styled";
import { theme } from "./config/mui-config";

export const Badge = styled.div`
    background-color: ${theme.palette.primary.main};
    color: #fff;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    padding: 3px 20px;
    display: inline;
`;

