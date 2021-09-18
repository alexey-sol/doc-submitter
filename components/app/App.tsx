import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import { appTheme } from "@/components/ui/themes";
import createEmotionCache from "@/utils/system/createEmotionCache";
import config from "@/utils/config";

const clientSideEmotionCache = createEmotionCache();

interface Props extends AppProps {
    emotionCache?: EmotionCache;
}

const App = (props: Props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>{config.appName}</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={appTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

App.defaultProps = {
    emotionCache: undefined,
};

export default App;
