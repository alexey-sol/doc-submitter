import React, { useState } from "react";
import { Container } from "@mui/material";
import DocsToolbar from "./docs-toolbar";
import DocsContainer from "./docs-container";
import { View } from "./common/types";
import DocsContextMenu from "@/features/service/docs/common/DocsContextMenu";

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
                p: 2,
            }}
        >
            <DocsToolbar setView={setView} view={view} />
            <DocsContainer view={view} />
            <DocsContextMenu />
        </Container>
    );
};

export default Docs;
