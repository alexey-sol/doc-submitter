import React from "react";
import { Box, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

// TODO: deal with font size
const SearchBar = () => (
    <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "0.2rem" }}>
        <Search />
        <Typography sx={{ cursor: "default", fontSize: "caption.fontSize", px: 0.5 }}>
            Поиск
        </Typography>
    </Box>
);

export default SearchBar;
