import {
    Avatar, Divider, ListItemIcon, Menu, MenuItem,
} from "@mui/material";

import { Logout, Settings } from "@mui/icons-material";
import { useServiceContext } from "@/features/service/context";

const AccountMenu = () => {
    const context = useServiceContext();
    const anchorElem = context.accountMenuAnchor;
    const open = Boolean(anchorElem);

    return (
        <Menu
            anchorEl={anchorElem}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            elevation={4}
            open={open}
            onClick={() => context.setAccountMenuAnchor(null)}
            onClose={() => context.setAccountMenuAnchor(null)}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            PaperProps={{
                sx: {
                    overflow: "visible",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                },
            }}
        >
            <MenuItem>
                <Avatar />
                {" "}
                My account
            </MenuItem>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );
};

export default AccountMenu;
