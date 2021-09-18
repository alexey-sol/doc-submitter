import React from "react";
import Header from "./Header";

export interface Props {
    children?: React.ReactNode;
}

const LandingLayout = ({ children }: Props) => (
    <React.Fragment>
        <Header />
        <main style={{ paddingTop: "10px" }}>{children}</main>
    </React.Fragment>
);

LandingLayout.defaultProps = {
    children: null,
} as Partial<Props>;

export default LandingLayout;
