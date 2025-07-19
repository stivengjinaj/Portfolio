import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { TranslationContextType } from "./languages/language";
import al from "./languages/al";
import en from "./languages/en";
import es from "./languages/es";
import it from "./languages/it";

const translations = { al, en, es, it } as const;

type Translations = typeof translations;
type Language = keyof Translations;
type TranslationKeys = keyof typeof en;

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const storedLang = localStorage.getItem("lang") as Language | null;
        if (storedLang && storedLang in translations) {
            setLanguageState(storedLang);
        }
    }, []);

    const setLanguage = (lang: Language, forceRefresh: boolean = false) => {
        setLanguageState(lang);
        localStorage.setItem("lang", lang);
        if (forceRefresh) {
            setTimeout(() => window.location.reload(), 50);
        }
    };

    const t = (key: TranslationKeys): string => {
        return translations[language][key];
    };

    return (
        <TranslationContext.Provider value={{ t, language, setLanguage } as TranslationContextType}>
            {children}
        </TranslationContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) throw new Error("useTranslation must be used within TranslationProvider");
    return context;
};
