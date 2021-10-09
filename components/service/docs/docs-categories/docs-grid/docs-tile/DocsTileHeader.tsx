import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { Doc } from "@/components/service/docs/common/types";
import { noTextWrap } from "@/utils/styleProps";

type Props = Pick<Doc, "name" | "statusWithSigningDate">;

const DocsTileHeader = (props: Props) => (
    <Box>
        <Tooltip disableInteractive title={props.name}>
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
