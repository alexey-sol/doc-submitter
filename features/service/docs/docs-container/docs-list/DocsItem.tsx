import React from "react";

import {
    IconButton, ListItem, ListItemText, Typography,
} from "@mui/material";

import { MoreVert } from "@mui/icons-material";
import { SxProps } from "@mui/system";
import { File } from "@/files/common/types";
import { lineClamp, noTextWrap } from "@/utils/styleProps";
import { useDocsContext } from "@/features/service/docs/context";

const wrapTextStyle: SxProps = { wordWrap: "break-word" };

type Props = File;

const DocsItem = (props: Props) => {
    const context = useDocsContext();

    return (
        <ListItem
            disablePadding
            sx={{
                display: "grid",
                alignItems: "flex-start",
                gridTemplateColumns: {
                    sm: "0.75fr 0.1fr 0.1fr 0.05fr",
                    xs: "0.5fr 0.25fr 0.2fr 0.05fr",
                },
                gridTemplateRows: "auto",
                columnGap: 1,

            }}
        >
            <ListItemText sx={wrapTextStyle}>
                <Typography sx={lineClamp}>
                    {props.name}
                </Typography>

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
