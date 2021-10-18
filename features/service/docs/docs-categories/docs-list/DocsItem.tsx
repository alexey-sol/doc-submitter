import React from "react";

import {
    IconButton, ListItem, ListItemText, Tooltip, Typography,
} from "@mui/material";

import { MoreVert } from "@mui/icons-material";
import { SxProps } from "@mui/system";
import { File } from "@/files/common/types";
import { noTextWrap } from "@/utils/styleProps";
import { useDocsContext } from "@/features/service/docs/context";
import { useFileTypeIcon } from "@/features/files/common/hooks";

const wrapTextStyle: SxProps = { wordWrap: "break-word" };

type Props = File;

const DocsItem = (props: Props) => {
    const context = useDocsContext();
    const { TypeIcon } = useFileTypeIcon(props.type);

    return (
        <ListItem
            disablePadding
            sx={{
                display: "grid",
                alignItems: "flex-start",
                gridTemplateColumns: "30px 400px 200px 150px 30px",
                gridTemplateRows: "auto",
                columnGap: 1,
                width: "fit-content",
            }}
        >
            <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
                {(TypeIcon) && (
                    <Tooltip arrow disableInteractive title={props.type}>
                        <TypeIcon />
                    </Tooltip>
                )}
            </ListItemText>

            <ListItemText sx={wrapTextStyle}>
                <Typography>{props.name}</Typography>
                <Typography color="info.dark" sx={noTextWrap}>
                    {props.statusWithSigningDate}
                </Typography>
            </ListItemText>

            <ListItemText primaryTypographyProps={{ color: "info.dark" }} sx={wrapTextStyle}>
                Owner?
            </ListItemText>

            <ListItemText primaryTypographyProps={{ color: "info.dark" }} sx={wrapTextStyle}>
                Date? {props.date}
            </ListItemText>

            <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
                <IconButton disableRipple onClick={context.openMenu} sx={{ padding: 0 }}>
                    <MoreVert />
                </IconButton>
            </ListItemText>
        </ListItem>
    );
};

export default DocsItem;
