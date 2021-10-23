import React from "react";

import {
    Box, Button, CardActions, IconButton,
} from "@mui/material";

import { MoreVert } from "@mui/icons-material";
import { File } from "@/files/common/types";
import { useDocsContext } from "@/features/service/docs/context";

type Props = Pick<File, "date" | "type">;

const DocsTileBody = (props: Props) => {
    const context = useDocsContext();

    return (
        <CardActions sx={{ display: "flex", justifyContent: "space-between", px: 1.5 }}>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, auto)", columnGap: 0.5 }}>
                <Button color="secondary" disableRipple size="small" sx={{ fontWeight: "bold" }}>
                    Подписать
                </Button>

                <Button color="secondary" disableRipple size="small" sx={{ fontWeight: "bold" }}>
                    Отказать
                </Button>
            </Box>

            <IconButton disableRipple onClick={context.openMenu} sx={{ padding: 0 }}>
                <MoreVert />
            </IconButton>
        </CardActions>
    );
};

export default DocsTileBody;
