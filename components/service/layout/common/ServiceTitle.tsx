import { ButtonBase, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";
import config from "@/utils/config";

interface Props {
    handleClick?: () => void;
    rootSx?: SxProps;
}

const ServiceLogo = ({ handleClick, rootSx }: Props) => (
    <ButtonBase
        disabled={!handleClick}
        disableRipple
        onClick={handleClick}
        sx={rootSx}
    >
        <Typography variant="h5">
            {config.appName}
        </Typography>
    </ButtonBase>
);

ServiceLogo.defaultProps = {
    handleClick: undefined,
    rootSx: undefined,
} as Partial<Props>;

export default ServiceLogo;
