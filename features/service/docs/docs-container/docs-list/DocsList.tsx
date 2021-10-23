import React from "react";
import { Grid, List } from "@mui/material";
import DocsItem from "./DocsItem";
import { selectFiles } from "@/files/redux/slice";
import { useAppSelector } from "@/app/hooks";

const DocsList = () => {
    const docs = useAppSelector(selectFiles);

    const docElems = docs.map((doc) => (
        <DocsItem key={doc.id} {...doc} />
    ));

    return (
        <Grid container>
            <List sx={{ mx: "auto" }}>
                {docElems}
            </List>
        </Grid>
    );
};

export default DocsList;
