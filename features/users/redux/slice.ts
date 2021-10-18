import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";
import * as actions from "./actions";

export interface UsersState {
    currentUser: User, // TODO move it to auth
    error?: Error,
    users: User[]
}

const initialState: UsersState = {
    currentUser: undefined,
    error: undefined,
    users: [],
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actions.fetchOneUser.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        });
    },
});

export default usersSlice.reducer;
