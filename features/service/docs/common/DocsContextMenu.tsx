import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SxProps } from "@mui/system";
import { useDocsContext } from "@/features/service/docs/context";

const menuItemStyle: SxProps = {
    px: 3,
    ":hover": {
        backgroundColor: "info.main",
    },
};

const DocsContextMenu = () => {
    const context = useDocsContext();

    return (
        <Menu
            MenuListProps={{ "aria-labelledby": "basic-button" }}
            anchorEl={context.menuAnchorElem}
            color="secondary"
            elevation={0}
            id="basic-menu"
            onClose={context.closeMenu}
            open={context.menuIsOpen}
            sx={{
                "& .MuiPaper-root": {
                    backgroundColor: "info.dark",
                    borderRadius: 0,
                    color: "primary.main",
                },
            }}
        >
            <MenuItem disableRipple sx={menuItemStyle} onClick={context.closeMenu}>
                Открыть
            </MenuItem>

            <MenuItem disableRipple sx={menuItemStyle} onClick={context.closeMenu}>
                Удалить
            </MenuItem>

            <MenuItem disableRipple sx={menuItemStyle} onClick={context.closeMenu}>
                Подписать
            </MenuItem>

            <MenuItem disableRipple sx={menuItemStyle} onClick={context.closeMenu}>
                Отказать
            </MenuItem>

            <MenuItem disableRipple sx={menuItemStyle} onClick={context.closeMenu}>
                Отправить на подпись
            </MenuItem>
        </Menu>
    );
};

export default DocsContextMenu;
