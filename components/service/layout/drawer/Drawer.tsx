import { Divider, Drawer as MuiDrawer } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ServiceTitle from "../common/ServiceTitle";
import { useServiceContext } from "@/components/service/context";
import ServiceDrawerList from "./DrawerList";

const drawerWidth = 280;

const useStyles = makeStyles(() => ({
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

const Drawer = () => {
    const context = useServiceContext();
    const classes = useStyles();

    const handleClickOnTitle = () => {
        context.setDrawerIsOpen(false);
        context.redirectToServiceRoot();
    };

    return (
        <MuiDrawer
            anchor="left"
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
            elevation={6}
            onClose={() => context.setDrawerIsOpen(false)}
            open={context.drawerIsOpen}
            role="menu"
            variant="temporary"
            BackdropProps={{
                sx: { background: "transparent" },
            }}
        >
            <ServiceTitle
                handleClick={handleClickOnTitle}
                rootSx={{ alignSelf: "flex-start", mx: 3, my: 2.5 }}
            />
            <Divider component="section" />
            <ServiceDrawerList />
        </MuiDrawer>
    );
};

export default Drawer;
