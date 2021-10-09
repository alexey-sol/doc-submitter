import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export enum View {
    LIST,
    GRID
}

export enum DocFormat {
    PDF = "PDF",
    DOC = "DOC"
}

export enum Status {
    PENDING,
    DONE
}

export interface RawDoc {
    id: number;
    format: DocFormat;
    name: string;
    author: string;
    date: string;
    status: Status;
    signingDate?: string;
}

export type MaterialSvgIcon = OverridableComponent<SvgIconTypeMap<Record<string, unknown>, "svg">>;

export interface Doc extends Omit<RawDoc, "format" | "status"> {
    format: string;
    formatIcon: MaterialSvgIcon;
    statusWithSigningDate: string;
}
