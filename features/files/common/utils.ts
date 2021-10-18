import {
    File, FileType, MaterialSvgIcon, RawFile, Status,
} from "@/files/common/types";

export const FileTypeIcons = {
    [FileType.FOLDER]: import("@mui/icons-material/Description"),
    [FileType.DOC]: import("@mui/icons-material/Description"),
    [FileType.PDF]: import("@mui/icons-material/PictureAsPdf"),
    [FileType.IMG]: import("@mui/icons-material/Description"),
};

export const StatusTranslation = {
    [Status.PENDING]: "Ожидает подписания",
    [Status.DONE]: "Подписан",
};

export class FileNormalizer {
    constructor(private rawFile: RawFile) {
        this.rawFile = rawFile;
    }

    static async getFileTypeIcon(type: FileType): Promise<MaterialSvgIcon> {
        return (await FileTypeIcons[type]).default;
    }

    private getStatusWithSigningDate(): string | undefined {
        if (!this.rawFile.status) {
            return;
        }

        const statusText = StatusTranslation[this.rawFile.status];

        return (this.rawFile.signing_date)
            ? `${statusText} ${this.rawFile.signing_date}`
            : statusText;
    }

    getResult(): File {
        return {
            id: this.rawFile.id,
            name: this.rawFile.file_name,
            type: this.rawFile.file_type,
            path: this.rawFile.file_path,
            date: this.rawFile.date,
            statusWithSigningDate: this.getStatusWithSigningDate(),
        };
    }
}
