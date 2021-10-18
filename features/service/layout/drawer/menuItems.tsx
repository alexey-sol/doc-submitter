import {
    Assignment, CardMembership, Dns, Email, Grading, HelpCenter, InsertDriveFile, Person,
} from "@mui/icons-material";

import React, { ReactElement } from "react";

export interface MenuItem {
    icon: ReactElement;
    onClick: () => void;
    text: string;
    tooltip?: string;
}

export const menuItems: MenuItem[] = [
    {
        text: "Документы",
        icon: <InsertDriveFile />,
        onClick: () => console.log("Clicked on Документы"),
        tooltip: "Недавние, подписанные, ожидают подписания",
    },
    {
        text: "Мой диск",
        icon: <Dns />,
        onClick: () => console.log("Clicked on Мой диск"),
    },
    {
        text: "Профиль",
        icon: <Person />,
        onClick: () => console.log("Clicked on Профиль"),
    },
    {
        text: "Сертификаты",
        icon: <CardMembership />,
        onClick: () => console.log("Clicked on Сертификаты"),
    },
    {
        text: "Подписки",
        icon: <Email />,
        onClick: () => console.log("Clicked on Подписки"),
    },
    {
        text: "Справка",
        icon: <HelpCenter />,
        onClick: () => console.log("Clicked on Справка"),
    },
    {
        text: "Политика конфиденциальности",
        icon: <Assignment />,
        onClick: () => console.log("Clicked on Политика конфиденциальности"),
    },
    {
        text: "Условия использования",
        icon: <Grading />,
        onClick: () => console.log("Clicked on Условия использования"),
    },
];

export default menuItems;
