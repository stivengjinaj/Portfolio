import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../TranslationContext';
import {ChevronDown, ChevronUp} from "lucide-react";

interface LanguageOption {
    code: string;
    name: string;
}

const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages: LanguageOption[] = [
        { code: 'al', name: 'Albanian' },
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'it', name: 'Italiano' },
    ];

    const currentLanguageName = languages.find(lang => lang.code === language)?.name || 'English';

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelectLanguage = (code: string) => {
        setLanguage(code as never, true);
        setIsOpen(false);
    };

    return (
        <div
            ref={dropdownRef}
            className="fixed bottom-4 right-4 z-50 font-inter"
        >
            <div className="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        className="inline-flex justify-center items-center w-full rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        id="language-menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <ChevronDown /> : <ChevronUp />}
                        <span className="mx-1">{currentLanguageName}</span>
                    </button>
                </div>

                {isOpen && (
                    <div
                        className="origin-bottom-right absolute right-0 bottom-full mb-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="language-menu-button"
                    >
                        <div className="py-1" role="none">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleSelectLanguage(lang.code)}
                                    className={`${
                                        lang.code === language
                                            ? 'bg-blue-100 text-blue-900'
                                            : 'text-gray-700'
                                    } block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}
                                    role="menuitem"
                                >
                                    {lang.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSelector;
