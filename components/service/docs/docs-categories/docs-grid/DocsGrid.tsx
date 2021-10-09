import React from "react";
import { Grid } from "@mui/material";
import { Doc } from "@/components/service/docs/common/types";
import DocsTile from "./docs-tile";

interface Props {
    docs?: Doc[];
}

const DocsGrid = ({ docs }: Props) => {
    const docElems = docs!.map((doc) => (
        <DocsTile key={doc.id} {...doc} />
    ));

    return (
        <Grid container spacing={4}>
            {docElems}
        </Grid>
    );
};

DocsGrid.defaultProps = {
    docs: [],
} as Partial<Props>;

export default DocsGrid;
