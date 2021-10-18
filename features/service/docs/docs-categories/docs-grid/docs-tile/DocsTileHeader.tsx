import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { File } from "@/files/common/types";
import { noTextWrap } from "@/utils/styleProps";

type Props = Pick<File, "name" | "statusWithSigningDate">;

const DocsTileHeader = (props: Props) => (
    <Box>
        <Tooltip arrow disableInteractive title={props.name}>
            <Typography sx={noTextWrap}>{props.name}</Typography>
        </Tooltip>

        <Typography
            color="info.dark"
            sx={noTextWrap}
        >
            {props.statusWithSigningDate}
        </Typography>
    </Box>
);

export default DocsTileHeader;
