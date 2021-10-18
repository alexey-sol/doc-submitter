import React from "react";
import systemMessages from "@/utils/const/systemMessages";

interface Value {
    menuAnchorElem: HTMLElement | null;
    menuIsOpen: boolean;
    openMenu: (event: React.MouseEvent<HTMLElement>) => void;
    closeMenu: () => void;
}

export const DocsContext = React.createContext<Value>({
    menuAnchorElem: null,
    menuIsOpen: false,
    openMenu: () => {},
    closeMenu: () => {},
});

interface Props {
    children?: React.ReactNode;
}

export const DocsProvider = ({ children }: Props) => {
    const [menuAnchorElem, setMenuAnchorElem] = React.useState<HTMLElement | null>(null);
    const menuIsOpen = Boolean(menuAnchorElem);

    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorElem(event.currentTarget);
    };
    const closeMenu = () => setMenuAnchorElem(null);

    const value = {
        menuAnchorElem,
        menuIsOpen,
        openMenu,
        closeMenu,
    };

    return (
        <DocsContext.Provider value={value}>
            {children}
        </DocsContext.Provider>
    );
};

export const useDocsContext = (): Value | never => {
    const context = React.useContext(DocsContext);

    if (context === undefined) {
        throw new Error(systemMessages.USING_CONTEXT_OUTSIDE_PROVIDER);
    }

    return context;
};

DocsProvider.defaultProps = {
    children: null,
} as Partial<Props>;
