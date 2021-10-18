import { Container, Grid } from "@mui/material";
import React from "react";
import TemplateItem from "./TemplateItem";

const testTemplates = [
    { title: "Blank" },
    { image: "https://i.pinimg.com/originals/a7/cf/08/a7cf084882ddbb146dcb6477b5a51372.jpg", title: "Template 2", style: "Style 2" },
    { image: "https://www.teahub.io/photos/full/96-961439_minimal-wallpaper-hd-for-phone-016-minimal-wallpaper.jpg", title: "Template 3" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWgFm01VNFguP7Jx8BJnP886tKWOZUZGBDCLUXsm4on2XZTlCpq2PHS3jwfqB7ERNJEo&usqp=CAU", title: "Template 4" },
    { image: "https://i.pinimg.com/originals/a3/ae/b5/a3aeb5bc3ae525341f2f60685d31c10a.jpg", title: "Template 5", style: "Style 5" },
    { image: "https://www.mwallpapers.com/download-image/819182/1080x1920", title: "Template 6", style: "Style 6" },
    { image: "https://images.hdqwalls.com/download/abstract-blue-red-splash-thick-4k-dw-750x1334.jpg", title: "Template 7", style: "Style 7" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wP3e-ekejyxZDx7-yZTisPbS0ZwbobtJ8B4-_7ojPULDC4tgKyZkKQplEgRCwCp3xcQ&usqp=CAU", title: "Template 8", style: "Style 8" },
    { image: "https://i.pinimg.com/736x/ae/67/92/ae67924a6a9e50de41b32c326f988cde.jpg", title: "Template 9", style: "Style 9" },
];

const TemplateList = () => (
    <Container
        disableGutters
        maxWidth="md"
        sx={{
            display: "flex",
            justifyContent: "space-between",
            pb: 3,
            px: 1,
        }}
    >
        <Grid container spacing={2}>
            {testTemplates.map((template) => <TemplateItem key={template.title} {...template} />)}
        </Grid>
    </Container>
);

export default TemplateList;
