import { Container } from "@mui/material";
import React from "react";
import TemplateList from "./TemplateList";
import TemplatesHeader from "./TemplatesHeader";

// TODO do we need Templates at all?
const Templates = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <TemplatesHeader />
            <TemplateList />
        </Container>
    );
};

export default Templates;
