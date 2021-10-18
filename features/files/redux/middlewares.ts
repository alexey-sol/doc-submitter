import { Middleware } from "@reduxjs/toolkit";
import { RawFile } from "../common/types";
import { setFiles } from "./slice";
import { normalizeFiles } from "./utils";

export const normalizer: Middleware = ({ getState }) => (next) => (action) => {
    const updatedAction = { ...action };

    if (action.type === setFiles.type) {
        updatedAction.payload = normalizeFiles(action.payload as RawFile[]);
    }

    next(updatedAction);
};
