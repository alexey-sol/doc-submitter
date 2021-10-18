import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";
import filesReducer from "@/files/redux/slice";
import usersReducer from "@/users/redux/slice";
import * as filesMiddlewares from "@/files/redux/middlewares";
import { Env } from "@/utils/wrappers/Env";

const env = new Env();

export const store = configureStore({
    reducer: {
        files: filesReducer,
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware()
            .concat(filesMiddlewares.normalizer);

        return (env.isProduction())
            ? middlewares
            : middlewares.concat(logger);
    },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
