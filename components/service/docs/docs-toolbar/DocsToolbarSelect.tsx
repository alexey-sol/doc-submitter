import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { selectValues } from "../common/constants";

const DocsToolbarSelect = () => {
    const [owner, setOwner] = useState(selectValues.ANYBODY);
    const handleChange = ({ target }: SelectChangeEvent<string>) => setOwner(target.value);

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, auto)",
                columnGap: 1.5,
                alignItems: "center",
            }}
        >
            <InputLabel id="owner-select-label">Владелец</InputLabel>

            <FormControl sx={{ minWidth: 130 }} fullWidth>
                <Select
                    MenuProps={{
                        sx: {
                            "&& .Mui-selected": {
                                // backgroundColor: "#E3E7E9", // TODO
                            },
                        },
                    }}
                    color="info"
                    id="owner-select"
                    inputProps={{ "aria-label": "Without label" }}
                    labelId="owner-select-label"
                    onChange={handleChange}
                    sx={{
                        ".MuiSelect-select": {
                            padding: 1,
                        },
                    }}
                    value={owner}
                    variant="outlined"
                >
                    <MenuItem value={selectValues.ANYBODY}>Кто угодно</MenuItem>
                    <MenuItem value="whuh">Whuh?</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default DocsToolbarSelect;
