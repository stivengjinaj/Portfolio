import {ProgrammingContext} from "./types.ts";

export const getColorClasses = (programmingContext: ProgrammingContext) => {
    const colorMap = {
        [ProgrammingContext.SOC]: {
            bg: "from-violet-400/20 to-violet-600/20",
            border: "border-violet-400/30",
            text: "text-violet-300",
            pill: "bg-violet-500/20 border-violet-400/30 text-violet-300"
        },
        [ProgrammingContext.AI]: {
            bg: "from-purple-400/20 to-purple-600/20",
            border: "border-purple-400/30",
            text: "text-purple-300",
            pill: "bg-purple-500/20 border-purple-400/30 text-purple-300"
        },
        [ProgrammingContext.WEB]: {
            bg: "from-blue-400/20 to-blue-600/20",
            border: "border-blue-400/30",
            text: "text-blue-300",
            pill: "bg-blue-500/20 border-blue-400/30 text-blue-300"
        },
        [ProgrammingContext.MOBILE]: {
            bg: "from-green-400/20 to-green-600/20",
            border: "border-green-400/30",
            text: "text-green-300",
            pill: "bg-green-500/20 border-green-400/30 text-green-300"
        }
    };
    return colorMap[programmingContext as keyof typeof colorMap];
};

export const languageTypeToString = (programmingContext: ProgrammingContext) => {
    if (programmingContext === ProgrammingContext.SOC){
        return "Low Level"
    }else if (programmingContext === ProgrammingContext.AI){
        return "AI and Data Analytics"
    }else if (programmingContext === ProgrammingContext.WEB){
        return "Web"
    }else if (programmingContext === ProgrammingContext.MOBILE){
        return "Mobile"
    }
}