import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";
import { File } from "../common/types";

const ASC = "ASC";
const DESC = "DESC";

const sortingStrategies = {
    [ASC]: (a: File, b: File) => a.name < b.name ? 1 : -1,
    [DESC]: (a: File, b: File) => a.name > b.name ? 1 : -1,
};

export interface FilesState {
    items: File[];
    sortingOrder?: typeof ASC | typeof DESC;
}

const initialState: FilesState = {
    items: [],
    sortingOrder: undefined,
};

const filesSlice = createSlice({
    name: "files",
    initialState,
    reducers: {
        setFiles: (state, action: PayloadAction<File[]>) => {
            state.items = action.payload;
        },
        resetFiles: (state) => {
            state.items = [];
        },
        sortFiles: (state) => {
            state.sortingOrder = (state.sortingOrder === DESC) ? ASC : DESC;
            state.items = state.items.sort(sortingStrategies[state.sortingOrder]);
        },
    },
});

export const { setFiles, resetFiles, sortFiles } = filesSlice.actions;

export const selectFiles = (state: RootState) => state.files.items;

export default filesSlice.reducer;
