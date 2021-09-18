import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@mui/material/AppBar";
import AccountMenu from "./account-menu";
import ServiceDrawer from "./drawer";
import ServiceToolbar from "./toolbar";

const useStyles = makeStyles(() => ({
    page: {
        width: "100%", // TODO
    },
    root: {
        display: "flex",
        flexDirection: "column",
    },
}));

export interface Props {
    children?: React.ReactNode;
}

const ServiceLayout = ({ children }: Props) => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <AppBar
                color="primary"
                elevation={0}
                position="sticky"
            >
                <ServiceToolbar />
            </AppBar>

            <main className={classes.page}>
                {children}
            </main>

            <ServiceDrawer />
            <AccountMenu />
        </section>
    );
};

ServiceLayout.defaultProps = {
    children: null,
} as Partial<Props>;

export default ServiceLayout;
