import React from "react";
import { Container } from "@mui/material";
import DocsList from "./docs-list";
import DocsGrid from "./docs-grid";
import { View } from "../common/types";

interface Props {
    view?: View;
}

const DocsContainer = ({ view }: Props) => {
    const isListView = view === View.LIST;

    const renderList = () => <DocsList />;
    const renderGrid = () => <DocsGrid />;

    return (
        <Container disableGutters>
            {(isListView)
                ? renderList()
                : renderGrid()}
        </Container>
    );
};

DocsContainer.defaultProps = {
    view: View.LIST,
} as Partial<Props>;

export default DocsContainer;
