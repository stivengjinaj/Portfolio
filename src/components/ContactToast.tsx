import { Check } from "lucide-react";
import React from "react";

const ContactToast: React.FC<{ message: string; isVisible: boolean }> = ({ message, isVisible }) => {
    return (
        <div className={`fixed top-40 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
            <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>{message}</span>
            </div>
        </div>
    );
};

export default ContactToast;