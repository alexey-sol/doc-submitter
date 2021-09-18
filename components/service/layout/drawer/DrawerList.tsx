import { List } from "@mui/material";
import React from "react";
import DrawerItem from "./DrawerItem";
import { menuItems } from "./menuItems";

const DrawerList = () => (
    <List sx={{ py: 1, paddingRight: 1 }}>
        {menuItems.map((item) => <DrawerItem key={item.text} {...item} />)}
    </List>
);

export default DrawerList;
