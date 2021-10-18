import React from "react";
import { List } from "@mui/material";
import DocsItem from "./DocsItem";
import { selectFiles } from "@/files/redux/slice";
import { useAppSelector } from "@/app/hooks";

const DocsList = () => {
    const docs = useAppSelector(selectFiles);

    const docElems = docs.map((doc) => (
        <DocsItem key={doc.id} {...doc} />
    ));

    return (
        <List>
            {docElems}
        </List>
    );
};

export default DocsList;
