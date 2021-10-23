import React from "react";
import { Box, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

interface Props {
    handleClick: () => void;
}

// TODO: deal with font size
const SearchBar = ({ handleClick }: Props) => {
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
