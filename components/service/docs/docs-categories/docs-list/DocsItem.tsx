import React from "react";

import {
    IconButton, ListItem, ListItemText, Tooltip, Typography,
} from "@mui/material";

import { MoreVert } from "@mui/icons-material";
import { SxProps } from "@mui/system";
import { Doc } from "@/components/service/docs/common/types";
import { noTextWrap } from "@/utils/styleProps";

const wrapTextStyle: SxProps = { wordWrap: "break-word" };

type Props = Doc;

const DocsItem = (props: Props) => {
    const DocFormatIcon = props.formatIcon;

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
                <Tooltip disableInteractive title={props.format}>
                    <DocFormatIcon />
                </Tooltip>
            </ListItemText>

            <ListItemText sx={wrapTextStyle}>
                <Typography>{props.name}</Typography>
                <Typography color="info.dark" sx={noTextWrap}>
                    {props.statusWithSigningDate}
                </Typography>
            </ListItemText>

            <ListItemText primaryTypographyProps={{ color: "info.dark" }} sx={wrapTextStyle}>
                {props.author}
            </ListItemText>

            <ListItemText primaryTypographyProps={{ color: "info.dark" }} sx={wrapTextStyle}>
                {props.date}
            </ListItemText>

            <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
                <IconButton disableRipple sx={{ padding: 0 }}>
                    <MoreVert />
                </IconButton>
            </ListItemText>
        </ListItem>
    );
};

export default DocsItem;
