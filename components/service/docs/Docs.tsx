import React, { useState } from "react";
import { Container } from "@mui/material";
import DocsToolbar from "./docs-toolbar";
import DocsCategories from "./docs-categories";
import { View } from "./common/types";

const Docs = () => {
    const [view, setView] = useState(View.LIST);

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                width: 860,
            }}
        >
            <DocsToolbar setView={setView} view={view} />
            <DocsCategories view={view} />
        </Container>
    );
};

export default Docs;
