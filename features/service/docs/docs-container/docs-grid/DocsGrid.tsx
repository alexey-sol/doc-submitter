import React from "react";
import { Grid } from "@mui/material";
import DocsTile from "./docs-tile";
import { selectFiles } from "@/features/files/redux/slice";
import { useAppSelector } from "@/app/hooks";

const DocsGrid = () => {
    const docs = useAppSelector(selectFiles);

    const docElems = docs.map((doc) => (
        <DocsTile key={doc.id} {...doc} />
    ));

    return (
        <Grid container spacing={4}>
            {docElems}
        </Grid>
    );
};

export default DocsGrid;
