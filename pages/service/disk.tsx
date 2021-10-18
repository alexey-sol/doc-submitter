import React from "react";
import type { NextPage } from "next";
import Layout from "@/features/service/layout";
import { ServiceProvider } from "@/features/service/context";

const DiskPage: NextPage = () => (
    <ServiceProvider>
        <Layout>
            Disk
        </Layout>
    </ServiceProvider>

);

export default DiskPage;
