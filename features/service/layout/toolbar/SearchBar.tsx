import React from "react";
import { Box, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

// TODO: deal with font size
const SearchBar = ({ handleClick }) => {
    // const handleClick = (params) => {
    //     console.log("params", params);
    // };

    return (
        <Box
            onClick={handleClick}
            sx={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "0.2rem",
                cursor: "pointer",
            }}
        >
            <Search />
            <Typography sx={{ fontSize: "caption.fontSize", px: 0.5 }}>
                Поиск
            </Typography>
        </Box>
    );
};

export default SearchBar;
