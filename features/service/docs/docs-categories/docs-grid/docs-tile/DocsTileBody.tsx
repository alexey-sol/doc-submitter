import React from "react";

import {
    Box, IconButton, Tooltip, Typography,
} from "@mui/material";

import { MoreVert } from "@mui/icons-material";
import { File } from "@/files/common/types";
import { noTextWrap } from "@/utils/styleProps";
import { useDocsContext } from "@/features/service/docs/context";
import { useFileTypeIcon } from "@/features/files/common/hooks";

type Props = Pick<File, "date" | "type">;

const DocsTileBody = (props: Props) => {
    const context = useDocsContext();
    const { TypeIcon } = useFileTypeIcon(props.type);

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
                {(TypeIcon) && (
                    <Tooltip arrow disableInteractive title={props.type}>
                        <TypeIcon />
                    </Tooltip>
                )}
            </Box>
            <Typography color="info.dark" sx={noTextWrap}>Date? {props.date}</Typography>
            <Box>
                <IconButton disableRipple onClick={context.openMenu} sx={{ padding: 0 }}>
                    <MoreVert />
                </IconButton>
            </Box>
        </Box>
    );
};

export default DocsTileBody;
