import React from "react";
import type { NextPage } from "next";
import Docs from "@/components/service/docs";
import Layout from "@/components/service/layout";
import { ServiceProvider } from "@/components/service/context";

const DocsPage: NextPage = () => (
    <ServiceProvider>
        <Layout>
            <Docs />
        </Layout>
    </ServiceProvider>

);

export default DocsPage;
