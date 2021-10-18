import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_ONE_USER } from "./types";
import * as api from "../common/api";

export const fetchOneUser = createAsyncThunk(
    FETCH_ONE_USER,
    async (id: string) => {
        const response = await api.fetchOneUser(id);
        return response;
    },
);
