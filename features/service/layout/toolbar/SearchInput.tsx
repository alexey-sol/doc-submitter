import React, { KeyboardEvent, useEffect, useRef } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";

interface Props {
    handleBlur: () => void;
}

const SearchInput = ({ handleBlur }: Props) => {
    const containerRef = useRef<HTMLElement>();

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            const pressedEscape = event.key === "Escape";
            if (pressedEscape) handleBlur();
        };

        const container = containerRef.current;

        container?.addEventListener("blur", handleBlur, true);
        // window.addEventListener("keydown", handleKeydown);

        return () => {
            container?.removeEventListener("blur", handleBlur, true);
            // window.removeEventListener("keydown", handleKeydown);
        };
    }, [handleBlur]);

    return (
        <Stack ref={containerRef} spacing={2} sx={{ backgroundColor: "primary.main", width: 860 }}>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={top100Films.map((option) => option.title)}
                // open // open until elem is clicked
                renderInput={(params) => (
                    <TextField {...params} label="freeSolo" inputRef={(input) => input?.focus()} />
                )}
            />
        </Stack>
    );
};

const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
];

export default SearchInput;
