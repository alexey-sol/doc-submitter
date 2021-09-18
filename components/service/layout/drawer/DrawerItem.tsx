import {
    ListItem, ListItemIcon, ListItemText, Tooltip,
} from "@mui/material";

import React from "react";
import { MenuItem } from "./menuItems";

type Props = MenuItem;

const DrawerItem = (props: Props) => {
    const {
        icon, onClick, text, tooltip,
    } = props;

    const renderItem = () => (
        <ListItem
            button
            key={text}
            onClick={onClick}
            sx={{ px: 3, borderBottomRightRadius: 100, borderTopRightRadius: 100 }}
        >
            <ListItemIcon aria-label={text}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );

    const renderItemWithTooltip = () => (
        <Tooltip disableInteractive placement="bottom" title={tooltip ?? ""}>
            {renderItem()}
        </Tooltip>
    );

    return (tooltip)
        ? renderItemWithTooltip()
        : renderItem();
};

DrawerItem.defaultProps = {
    tooltip: "",
};

export default DrawerItem;
