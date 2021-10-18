import React from "react";
import type { NextPage } from "next";
import Layout from "@/features/service/layout";
import { ServiceProvider } from "@/features/service/context";

const DocsOnSigningPage: NextPage = () => (
    <ServiceProvider>
        <Layout>
            DocsOnSigning
        </Layout>
    </ServiceProvider>

);

export default DocsOnSigningPage;
