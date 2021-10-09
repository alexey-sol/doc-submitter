import React from "react";
import type { NextPage } from "next";
import Layout from "@/components/service/layout";
import { ServiceProvider } from "@/components/service/context";

const DocsOnSigningPage: NextPage = () => (
    <ServiceProvider>
        <Layout>
            DocsOnSigning
        </Layout>
    </ServiceProvider>

);

export default DocsOnSigningPage;
