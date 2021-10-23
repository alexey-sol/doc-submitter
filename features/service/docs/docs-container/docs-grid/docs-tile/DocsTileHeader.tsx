import React from "react";
import { Box, CardContent, Typography } from "@mui/material";
import { File } from "@/files/common/types";
import { lineClamp, noTextWrap } from "@/utils/styleProps";

type Props = Pick<File, "date" | "name" | "status">;

const DocsTileHeader = (props: Props) => (
    <CardContent
        sx={{
            display: "flex",
            alignItems: "center",
            height: 100,
        }}
    >
        <Box
            sx={{
                display: "grid",
                gridTemplateRows: "repeat(3, auto)",
                rowGap: 0.5,
            }}
        >
            <Typography color="info.dark" sx={noTextWrap} variant="body2">
                {props.status}
            </Typography>

            <Typography sx={lineClamp}>{props.name}</Typography>

            <Typography color="info.dark" sx={noTextWrap} variant="body2">
                Date?
                {" "}
                {props.date}
            </Typography>
        </Box>
    </CardContent>
);

export default DocsTileHeader;
