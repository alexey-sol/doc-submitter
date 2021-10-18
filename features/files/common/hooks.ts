import { useState, useEffect } from "react";
import { FileType, MaterialSvgIcon } from "@/files/common/types";
import { FileNormalizer } from "@/files/common/utils";

export const useFileTypeIcon = (type: FileType) => {
    const [TypeIcon, setTypeIcon] = useState<MaterialSvgIcon | null>(null);

    useEffect(() => {
        const initTypeIcon = async () => {
            const icon = await FileNormalizer.getFileTypeIcon(type);
            setTypeIcon(icon);
        };

        initTypeIcon();
    }, [type]);

    return { TypeIcon };
};
