import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import DocsList from "./docs-list";
import DocsGrid from "./docs-grid";

import {
    Doc, DocFormat, RawDoc, Status, View,
} from "../common/types";
import { DocFormatter } from "../common/utils";

const rawDocs: RawDoc[] = [
    {
        id: 1,
        format: DocFormat.DOC,
        name: "Договор-ГПХ с Ивановым много текста много текста много текста много текста много текста много текста.pdf",
        author: "Тихонов Вячеслав много текста много текста много текста много текста много текста много текста ",
        date: "24 декабря 2021 г.",
        status: Status.PENDING,
    },
    {
        id: 2,
        format: DocFormat.PDF,
        name: "Договор-ГПХ с Ивановым.pdf",
        author: "Ершова Янина",
        date: "24 сентября 2021 г.",
        signingDate: "66 сентября 2021 г.",
        status: Status.DONE,
    },
    {
        id: 3,
        format: DocFormat.PDF,
        name: "Договор-ГПХ с Джо.pdf",
        author: "Ершова Янина",
        date: "24 сентября сентября 2021 г.",
        status: Status.PENDING,
    },
    {
        id: 4,
        format: DocFormat.DOC,
        name: "ДоговорДоговорДоговорДоговорДоговорДоговорДоговорДоговорДоговорДоговорДоговор.pdf",
        author: "Ершова Янина",
        date: "24сентябрясентября2021г.",
        status: Status.PENDING,
    },
];

interface Props {
    view?: View;
}

const DocsCategories = ({ view }: Props) => {
    const [docs, setDocs] = useState<Doc[]>([]);
    const categories = ["За неделю", "За месяц"];
    const isListView = view === View.LIST;

    useEffect(() => {
        const formatDocs = async () => {
            const promises = rawDocs.map((rawDoc) => {
                const docFormatter = new DocFormatter(rawDoc);
                return docFormatter.getResult();
            });

            const formattedDocs = await Promise.all(promises);
            setDocs(formattedDocs);
        };

        formatDocs();
    }, [rawDocs]);

    const renderList = () => categories.map((category) => (
        <Box
            key={category}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "fit-content",
                mx: "auto",
                "&:not(:first-of-type)": { marginTop: 4 },
            }}
        >
            <Typography sx={{ width: "100%", fontWeight: 600 }}>{category}</Typography>
            <DocsList docs={docs} />
        </Box>
    ));

    const renderGrid = () => <DocsGrid docs={docs} />;

    return (
        <Container disableGutters>
            {(isListView)
                ? renderList()
                : renderGrid()}
        </Container>
    );
};

DocsCategories.defaultProps = {
    view: View.LIST,
} as Partial<Props>;

export default DocsCategories;
