import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Layout from "@/components/service/layout";
import { ServiceProvider } from "@/components/service/context";

const Service: NextPage = () => (
    <ServiceProvider>
        <Layout>
            <Box sx={{ bgcolor: "primary.dark", py: 5, textAlign: "center" }}>
                <Typography>
                    Templates
                </Typography>
            </Box>
        </Layout>
    </ServiceProvider>
);

export default Service;
