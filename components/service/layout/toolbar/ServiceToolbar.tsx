import {
    Avatar, IconButton, Toolbar,
} from "@mui/material";

import { Menu } from "@mui/icons-material";
import { useContext } from "react";
import ServiceTitle from "../common/ServiceTitle";
import { ServiceContext } from "@/components/service/context";

const ServiceToolbar = () => {
    const context = useContext(ServiceContext);

    const handleClickOnTitle = () => {
        context.redirectToServiceRoot();
    };

    // TODO refactor section styles
    return (
        <Toolbar>
            <section style={{ display: "flex", flexGrow: 1 }}>
                <IconButton
                    aria-label="открыть меню"
                    onClick={() => context.setDrawerIsOpen(true)}
                >
                    <Menu />
                </IconButton>

                <ServiceTitle
                    handleClick={handleClickOnTitle}
                    rootSx={{ mx: 3 }}
                />
            </section>

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
