import { File, RawFile } from "../common/types";
import { FileNormalizer } from "../common/utils";

export const normalizeOneFile = (rawFile: RawFile): File => {
    const docFormatter = new FileNormalizer(rawFile);
    return docFormatter.getResult();
};

export const normalizeFiles = (rawFiles: RawFile[]): File[] => rawFiles.map(normalizeOneFile);
