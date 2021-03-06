export enum Status {
    PENDING,
    DONE
}

export enum FileType {
    FOLDER = "folder",
    DOC = "doc",
    PDF = "pdf",
    IMG = "img"
}

export interface RawFile {
    id: number;
    file_name: string;
    file_type: FileType;
    file_path: string;
    date?: string;
    status?: Status;
    signing_date?: string;
}

export interface File {
    id: number;
    name: string;
    type: FileType;
    path: string;
    date?: string;
    status: string;
    statusWithSigningDate?: string;
}
