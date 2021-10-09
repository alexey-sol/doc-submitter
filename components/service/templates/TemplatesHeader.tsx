import { Box, Container, Typography } from "@mui/material";
import React from "react";

const TemplatesHeader = () => {
    const handleClickOnSettings = () => console.log("Click on settings");

    return (
        <Container
            disableGutters
            maxWidth="md"
            sx={{
                alignItems: "center",
                display: "flex",
                height: "4rem",
                justifyContent: "space-between",
                px: 1,
            }}
        >
            <Typography>
                Создать документ
            </Typography>

            <Box sx={{ display: "flex" }}>
                <Typography>
                    Галерея шаблонов
                </Typography>
            </Box>
        </Container>
    );
};

export default TemplatesHeader;
