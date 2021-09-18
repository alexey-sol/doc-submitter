import Document, {
    Html, Head, Main, NextScript,
} from "next/document";

import React from "react";
import { ServerStyleSheets } from "@material-ui/styles";
import createEmotionCache from "@/utils/system/createEmotionCache";

class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async getInitialProps(ctx: any) { 
        const sheet = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;
        const cache = createEmotionCache();

        try {
            /* eslint-disable no-param-reassign, react/display-name */
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App: any) => (props: unknown) => sheet.collect(
                    <App emotionCache={cache} {...props} />,
                ),
            });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <React.Fragment>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </React.Fragment>
                ),
            };
        } finally {
            ctx.renderPage(sheet);
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" type="image/png" href="../static/favicon.ico" />
                    <style>{"body { margin: 0 }"}</style>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>

                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
