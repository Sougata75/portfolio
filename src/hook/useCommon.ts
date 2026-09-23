import { create } from "zustand";

export interface NavState {
    navItems: string;
    language: string;
    setNavItem: (item:string) => void;
    languageChanger: (option: string) => void;
}

export const useNavigation = create<NavState>((set,get) => ({
    navItems:"home",
    language: "en",
    setNavItem: (item: string) => {
        set({navItems:item})
    },
    languageChanger: (option: string) => {
        set({language: option});
    },
}));