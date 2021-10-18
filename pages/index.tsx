import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@/features/landing/layout";
import config from "@/utils/config";

const Index: NextPage = () => (
    <Layout>
        <Head>
            <title>{config.appName}</title>
            <meta name="description" content="Hello there" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Typography>{`Hello ${config.appName}`}</Typography>
    </Layout>
);

export default Index;
