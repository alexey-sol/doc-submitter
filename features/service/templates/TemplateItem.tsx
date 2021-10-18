import React from "react";

import {
    Box, Card, CardMedia, Grid, Typography,
} from "@mui/material";

const WIDTH = 135;
const HEIGHT = 170;

const fontProps = { fontFamily: "Source Sans Pro", fontSize: 14 };

interface Props {
    image?: string;
    style?: string;
    title: string;
}

const TemplateItem = ({ image, style, title }: Props) => (
    <Grid item xs={6} sm={3} md={2}>
        <Card
            sx={{
                background: "primary",
                height: HEIGHT,
                maxWidth: WIDTH,
                minWidth: WIDTH,
            }}
        >
            {image && (
                <CardMedia
                    component="img"
                    height={HEIGHT}
                    image={image}
                    alt={title}
                />
            )}
        </Card>

        <Box mt={1} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={fontProps} variant="caption">
                {title}
            </Typography>

            {style && (
                <Typography sx={{ ...fontProps, fontWeight: 300 }} variant="caption">
                    {style}
                </Typography>
            )}
        </Box>
    </Grid>
);

TemplateItem.defaultProps = {
    image: "",
    style: "",
} as Partial<Props>;

export default TemplateItem;
