import React from "react";
import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/material";
import AccountMenu from "./account-menu";
import ServiceDrawer from "./drawer";
import ServiceToolbar from "./toolbar";

export interface Props {
    children?: React.ReactNode;
}

const ServiceLayout = ({ children }: Props) => (
    <Container disableGutters maxWidth={false} sx={{ mx: "auto", minWidth: 260 }}>
        <AppBar
            color="primary"
            elevation={0}
            position="sticky"
        >
            <ServiceToolbar />
        </AppBar>

        <Container disableGutters>
            {children}
        </Container>

        <ServiceDrawer />
        <AccountMenu />
    </Container>
);

ServiceLayout.defaultProps = {
    children: null,
} as Partial<Props>;

export default ServiceLayout;
