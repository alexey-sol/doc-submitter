import React from "react";
import type { NextPage } from "next";
import Layout from "@/components/service/layout";
import { ServiceProvider } from "@/components/service/context";

const Service: NextPage = () => (
    <ServiceProvider>
        <Layout>
            Service
        </Layout>
    </ServiceProvider>
);

export default Service;
