import { SxProps } from "@mui/system";

export const noTextWrap: SxProps = {
    overflowX: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
} as const;

export const lineClamp: SxProps = {
    display: "box-flex",
    textOverflow: "ellipsis",
    overflow: "hidden",
    wordBreak: "break-word",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
} as const;
