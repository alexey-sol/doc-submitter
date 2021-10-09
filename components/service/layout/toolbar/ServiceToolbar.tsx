import {
    Avatar, Box, IconButton, styled, Tab, Tabs, Toolbar,
} from "@mui/material";

import Link from "next/link";
import { Menu } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import ServiceTitle from "../common/ServiceTitle";
import { ServiceContext } from "@/components/service/context";
import SearchBar from "./SearchBar";

const tabs = [
    { href: "/service/docs", label: "Документы" },
    { href: "/service/docs-on-signing", label: "На подписи" },
    { href: "/service/disk", label: "Диск" },
];

type TabsOnChange = (event: React.SyntheticEvent, value: number) => void;

// TODO: deal with font size
const ServiceToolbar = () => {
    const router = useRouter();
    const activeTabIndex = tabs.findIndex(({ href }) => router.pathname === href);

    const [activeTab, setActiveTab] = useState(activeTabIndex);
    const context = useContext(ServiceContext);

    const handleClickOnTitle = () => context.redirectToServiceRoot();
    const handleClickOnTab: TabsOnChange = (event, newActiveTab) => setActiveTab(newActiveTab);

    type RenderTabArgs = {
        disabled?: boolean;
        href: string;
        label: string
    };

    const CustomTab = styled((props: RenderTabArgs) => (
        <Link href={props.href}>
            <Tab disableRipple {...props} />
        </Link>
    ))(({ theme }) => ({
        fontSize: theme.typography.caption.fontSize,
        minWidth: 0,
        paddingBottom: "1rem",
        textTransform: "none",
        "&.Mui-selected": {
            borderBottomWidth: "0.4rem",
            borderColor: theme.palette.secondary.main,
            borderStyle: "solid",
            color: theme.palette.secondary.main,
            paddingBottom: "0.6rem",
        },
    }));

    return (
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", px: 1 }}>
            <Box sx={{ display: "flex" }}>
                <IconButton
                    aria-label="открыть меню"
                    onClick={() => context.setDrawerIsOpen(true)}
                    sx={{ mx: 0.5, p: 1.5 }}
                >
                    <Menu />
                </IconButton>

                <ServiceTitle
                    handleClick={handleClickOnTitle}
                    rootSx={{ mx: 0.5 }}
                />
            </Box>

            <Box
                sx={{
                    display: "grid", gridColumnGap: "1rem", gridTemplateColumns: "repeat(2, auto)",
                }}
            >
                <Tabs
                    aria-label="панель навигации"
                    onChange={handleClickOnTab}
                    value={activeTab}
                >
                    {tabs.map(({ href, label }) => (
                        <CustomTab href={href} key={href} label={label} />
                    ))}
                </Tabs>

                <SearchBar />
            </Box>

            <IconButton
                aria-label="показать инфо об учетной записи"
                disableRipple
                onClick={({ currentTarget }) => context.setAccountMenuAnchor(currentTarget)}
            >
                <Avatar />
            </IconButton>
        </Toolbar>
    );
};

export default ServiceToolbar;
