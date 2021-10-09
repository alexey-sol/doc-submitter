import {
    DocFormat, Doc, MaterialSvgIcon, RawDoc, Status,
} from "./types";

export const StatusTranslation = {
    [Status.PENDING]: "Ожидает подписания",
    [Status.DONE]: "Подписан",
};

export const DocFormatIcons = {
    [DocFormat.DOC]: import("@mui/icons-material/Description"),
    [DocFormat.PDF]: import("@mui/icons-material/PictureAsPdf"),
};

export class DocFormatter {
    constructor(private rawDoc: RawDoc) {
        this.rawDoc = rawDoc;
    }

    private getStatusWithSigningDate(): string {
        const statusText = StatusTranslation[this.rawDoc.status];

        return (this.rawDoc.signingDate)
            ? `${statusText} ${this.rawDoc.signingDate}`
            : statusText;
    }

    private async getDocFormatIcon(): Promise<MaterialSvgIcon> {
        return (await DocFormatIcons[this.rawDoc.format]).default;
    }

    async getResult(): Promise<Doc> {
        const { format, status, ...rest } = this.rawDoc; // eslint-disable-line

        return {
            ...rest,
            format: DocFormat[format],
            formatIcon: await this.getDocFormatIcon(),
            statusWithSigningDate: this.getStatusWithSigningDate(),
        };
    }
}
