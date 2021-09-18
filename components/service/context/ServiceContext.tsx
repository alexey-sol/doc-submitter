import { useRouter } from "next/router";
import React, { useState } from "react";
import systemMessages from "@/utils/const/systemMessages";

interface Value {
    accountMenuAnchor: HTMLElement | null;
    drawerIsOpen: boolean;
    redirectToServiceRoot: () => void;
    setAccountMenuAnchor: (elem: HTMLElement | null) => void;
    setDrawerIsOpen: (open: boolean) => void;
}

export const ServiceContext = React.createContext<Value>({
    accountMenuAnchor: null,
    drawerIsOpen: false,
    redirectToServiceRoot: () => {},
    setAccountMenuAnchor: () => {},
    setDrawerIsOpen: () => {},
});

interface Props {
    children?: React.ReactNode;
}

export const ServiceProvider = ({ children }: Props) => {
    const [accountMenuAnchor, setAccountMenuAnchor] = useState<HTMLElement | null>(null);
    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

    const router = useRouter();
    const redirectToServiceRoot = () => router.push("/service");

    const value = {
        accountMenuAnchor,
        drawerIsOpen,
        redirectToServiceRoot,
        setAccountMenuAnchor,
        setDrawerIsOpen,
    };

    return (
        <ServiceContext.Provider value={value}>
            {children}
        </ServiceContext.Provider>
    );
};

export const useServiceContext = (): Value | never => {
    const context = React.useContext(ServiceContext);

    if (context === undefined) {
        throw new Error(systemMessages.USING_CONTEXT_OUTSIDE_PROVIDER);
    }

    return context;
};

ServiceProvider.defaultProps = {
    children: null,
} as Partial<Props>;
