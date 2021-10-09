import React from "react";
import type { NextPage } from "next";
import Layout from "@/components/service/layout";
import { ServiceProvider } from "@/components/service/context";

const DiskPage: NextPage = () => (
    <ServiceProvider>
        <Layout>
            Disk
        </Layout>
    </ServiceProvider>

);

export default DiskPage;
