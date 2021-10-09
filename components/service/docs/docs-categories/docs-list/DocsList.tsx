import React from "react";
import { List } from "@mui/material";
import { Doc } from "@/components/service/docs/common/types";
import DocsItem from "./DocsItem";

interface Props {
    docs?: Doc[];
}

const DocsList = ({ docs }: Props) => {
    const docElems = docs!.map((doc) => (
        <DocsItem key={doc.id} {...doc} />
    ));

    return (
        <List>
            {docElems}
        </List>
    );
};

DocsList.defaultProps = {
    docs: [],
} as Partial<Props>;

export default DocsList;
