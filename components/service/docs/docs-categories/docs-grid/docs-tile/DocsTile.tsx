import React from "react";
import { Grid, Paper } from "@mui/material";
import { Doc } from "@/components/service/docs/common/types";
import DocsTileHeader from "./DocsTileHeader";
import DocsTileBody from "./DocsTileBody";

type Props = Doc;

const DocsTile = (props: Props) => (
    <Grid item>
        <Paper
            elevation={0}
            square
            variant="outlined"
            sx={{
                display: "flex",
                flexDirection: "column",
                width: 230,
                p: 2,
            }}
        >
            <DocsTileHeader {...props} />
            <DocsTileBody {...props} />
        </Paper>
    </Grid>
);

export default DocsTile;
