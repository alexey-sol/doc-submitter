import React, { useEffect } from "react";
import type { GetStaticProps } from "next";
import Docs from "@/features/service/docs";
import Layout from "@/features/service/layout";
import { DocsProvider } from "@/features/service/docs/context";
import { ServiceProvider } from "@/features/service/context";
import { fetchFiles } from "@/features/files/common/api";
import { File } from "@/files/common/types";
import { setFiles } from "@/files/redux/slice";
import { useAppDispatch } from "@/app/hooks";

interface Props {
    docs?: File[];
}

const DocsPage = ({ docs }: Props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (docs) {
            dispatch(setFiles(docs));
        }
    }, [dispatch, docs]);

    return (
        <ServiceProvider>
            <Layout>
                <DocsProvider>
                    <Docs />
                </DocsProvider>
            </Layout>
        </ServiceProvider>
    );
};

DocsPage.defaultProps = {
    docs: [],
};

export const getStaticProps: GetStaticProps = async () => {
    const docs = await fetchFiles();

    return {
        props: {
            docs,
        },
    };
};

export default DocsPage;
