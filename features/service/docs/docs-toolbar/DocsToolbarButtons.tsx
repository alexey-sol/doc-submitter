import React from "react";
import { GridView, SortByAlpha, ViewListOutlined } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import { View } from "../common/types";
import { useAppDispatch } from "@/app/hooks";
import { sortFiles } from "@/files/redux/slice";

interface Props {
    setView: (view: View) => void;
    view?: View;
}

const DocsToolbarButtons = ({ setView, view }: Props) => {
    const dispatch = useAppDispatch();
    const isListView = view === View.LIST;

    const toggleView = () => (isListView)
        ? setView(View.GRID)
        : setView(View.LIST);

    const toggleViewTitle = `В виде ${(isListView) ? "сетки" : "списка"}`;
    const sortDocs = () => dispatch(sortFiles());

    return (
        <Box>
            <Tooltip arrow disableInteractive title={toggleViewTitle}>
                <IconButton disableRipple onClick={toggleView}>
                    {(isListView)
                        ? <GridView />
                        : <ViewListOutlined />}
                </IconButton>
            </Tooltip>

            <Tooltip arrow disableInteractive title="Сортировать по названию">
                <IconButton disableRipple onClick={sortDocs}>
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
