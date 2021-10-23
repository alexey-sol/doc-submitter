import React from "react";
import { Card, Grid } from "@mui/material";
import { File } from "@/files/common/types";
import DocsTileHeader from "./DocsTileHeader";
import DocsTileBody from "./DocsTileBody";

type Props = File;

const DocsTile = (props: Props) => (
    <Grid item xs={12} md={6}>
        <Card>
            <DocsTileHeader {...props} />
            <DocsTileBody {...props} />
        </Card>
    </Grid>
);

export default DocsTile;
