export type Language = "al" | "en" | "es" | "it";
export type TranslationKeys = keyof typeof import("./en").default;

export type TranslationContextType = {
    t: (key: TranslationKeys) => string;
    language: Language;
    setLanguage: (lang: Language, forceRefresh?: boolean) => void;
};
