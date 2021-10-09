import React from "react";

import {
    Box, IconButton, Tooltip, Typography,
} from "@mui/material";

import { MoreVert } from "@mui/icons-material";
import { Doc } from "@/components/service/docs/common/types";
import { noTextWrap } from "@/utils/styleProps";

type Props = Pick<Doc, "date" | "format" | "formatIcon">;

const DocsTileBody = (props: Props) => {
    const DocFormatIcon = props.formatIcon;

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "30px 1fr 30px",
                columnGap: 1,
                marginTop: 2,
            }}
        >
            <Box>
                <Tooltip
                    disableInteractive
                    placement="bottom"
                    title={props.format}
                >
                    <DocFormatIcon />
                </Tooltip>
            </Box>
            <Typography color="info.dark" sx={noTextWrap}>{props.date}</Typography>
            <Box>
                <IconButton disableRipple sx={{ padding: 0 }}>
                    <MoreVert />
                </IconButton>
            </Box>
        </Box>
    );
};

export default DocsTileBody;
