import React from "react";
import { Box } from "@mui/material";
import DocsToolbarSelect from "./DocsToolbarSelect";
import DocsToolbarButtons from "./DocsToolbarButtons";
import { View } from "../common/types";

interface Props {
    setView: (view: View) => void;
    view?: View;
}

const DocsToolbar = ({ setView, view }: Props) => (
    <Box
        sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, auto)",
            columnGap: 1,
            justifyContent: "flex-end",
            width: "fit-content",
            marginBottom: 4,
        }}
    >
        <DocsToolbarSelect />
        <DocsToolbarButtons setView={setView} view={view} />
    </Box>
);

DocsToolbar.defaultProps = {
    view: View.LIST,
} as Partial<Props>;

export default DocsToolbar;
