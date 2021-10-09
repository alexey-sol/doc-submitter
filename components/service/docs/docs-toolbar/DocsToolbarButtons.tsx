import React from "react";
import { GridView, SortByAlpha, ViewListOutlined } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import { View } from "../common/types";

interface Props {
    setView: (view: View) => void;
    view?: View;
}

const DocsToolbarButtons = ({ setView, view }: Props) => {
    const isListView = view === View.LIST;

    const toggleView = () => (isListView)
        ? setView(View.GRID)
        : setView(View.LIST);

    const toggleViewTitle = `Переключить вид: ${(isListView) ? "плитка" : "таблица"}`;

    return (
        <Box>
            <Tooltip disableInteractive title={toggleViewTitle}>
                <IconButton disableRipple onClick={toggleView}>
                    {(isListView)
                        ? <GridView />
                        : <ViewListOutlined />}
                </IconButton>
            </Tooltip>

            <Tooltip disableInteractive title="Отсортировать по названию документа">
                <IconButton disableRipple>
                    <SortByAlpha />
                </IconButton>
            </Tooltip>
        </Box>
    );
};

DocsToolbarButtons.defaultProps = {
    view: View.LIST,
} as Partial<Props>;

export default DocsToolbarButtons;
