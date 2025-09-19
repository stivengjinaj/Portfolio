import React, {useState} from "react";
import type {Contact} from "../misc/types.ts";
import { Copy } from "lucide-react";

const ContactCard: React.FC<{
    contact: Contact;
    index: number;
    language: string;
    onCopy: (text: string) => void;
    t: (key: string) => string;
}> = ({ contact, language, onCopy, t }) => {
    const [hoveredValue, setHoveredValue] = useState<string | null>(null);
    const IconComponent = contact.icon;

    const getLabel = () => {
        switch (language) {
            case "en": return contact.label_en;
            case "al": return contact.label_sq;
            case "it": return contact.label_it;
            case "es": return contact.label_es;
            default: return contact.label_en;
        }
    };

    const handleContactClick = (value: string, event: React.MouseEvent) => {
        event.preventDefault();
        onCopy(value);

        if (contact.type === 'email') {
            window.location.href = `mailto:${value}`;
        } else if (contact.type === 'phone') {
            window.location.href = `tel:${value}`;
        } else if (contact.type === 'linkedin') {
            window.open(value, '_blank');
        }
    };

    return (
        <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 hover:transform hover:scale-[1.02]">

                <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                        {getLabel()}
                    </h3>
                </div>

                <div className="space-y-3 min-h-[100px]">
                    {contact.value.map((value, valueIndex) => (
                        <div
                            key={valueIndex}
                            className="relative group/item cursor-pointer"
                            onMouseEnter={() => setHoveredValue(value)}
                            onMouseLeave={() => setHoveredValue(null)}
                            onClick={(e) => handleContactClick(value, e)}
                        >
                            <div className="flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-all duration-200 border border-transparent hover:border-white/20">
                                <span className="text-white/90 text-sm font-medium flex-1 truncate pr-2">
                                        {value}
                                </span>
                                <div
                                    className="flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                                    <Copy className="w-4 h-4 text-violet-400"/>
                                </div>
                            </div>

                            {hoveredValue === value && (
                                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                    {t('clickToCopy')}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactCard;