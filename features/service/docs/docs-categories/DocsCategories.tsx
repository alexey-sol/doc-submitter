import React from "react";
import { Box, Container, Typography } from "@mui/material";
import DocsList from "./docs-list";
import DocsGrid from "./docs-grid";
import { View } from "../common/types";

interface Props {
    view?: View;
}

const DocsCategories = ({ view }: Props) => {
    const categories = ["За неделю", "За месяц"];
    const isListView = view === View.LIST;

    const renderList = () => categories.map((category) => (
        <Box
            key={category}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "fit-content",
                mx: "auto",
                "&:not(:first-of-type)": { marginTop: 4 },
            }}
        >
            <Typography sx={{ width: "100%", fontWeight: 600 }}>{category}</Typography>
            <DocsList />
        </Box>
    ));

    const renderGrid = () => <DocsGrid />;

    return (
        <Container disableGutters>
            {(isListView)
                ? renderList()
                : renderGrid()}
        </Container>
    );
};

DocsCategories.defaultProps = {
    view: View.LIST,
} as Partial<Props>;

export default DocsCategories;
