import React from "react";
import type { NextPage } from "next";
import Layout from "@/features/service/layout";
import { ServiceProvider } from "@/features/service/context";

const Service: NextPage = () => (
    <ServiceProvider>
        <Layout>
            Service
        </Layout>
    </ServiceProvider>
);

export default Service;
