import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";
import { File } from "../common/types";

export interface FilesState {
    items: File[]
}

const initialState: FilesState = {
    items: [],
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
    },
});

export const { setFiles, resetFiles } = filesSlice.actions;

export const selectFiles = (state: RootState) => state.files.items;

export default filesSlice.reducer;
