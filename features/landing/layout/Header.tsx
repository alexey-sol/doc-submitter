import { AppBar, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => (
    <AppBar elevation={1} position="static">
        <Tabs aria-label="tabs">
            <Link href="/pricing"><Tab label="Услуги и стоимость" /></Link>
            <Link href="/about"><Tab label="О компании" /></Link>
            <Link href="/service/docs"><Tab label="Service" /></Link>
        </Tabs>
    </AppBar>
);

export default Header;
