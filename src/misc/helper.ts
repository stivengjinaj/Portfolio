import {ProgrammingContext, Section} from "./types.ts";

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
        },
        [ProgrammingContext.TOOLS]: {
            bg: "from-amber-400/20 to-amber-600/20",
            border: "border-amber-400/30",
            text: "text-amber-300",
            pill: "bg-amber-500/20 border-amber-400/30 text-amber-300"
        },
        [ProgrammingContext.PAYMENT_GATEWAYS]: {
            bg: "from-yellow-400/20 to-yellow-600/20",
            border: "border-yellow-400/30",
            text: "text-yellow-300",
            pill: "bg-yellow-500/20 border-yellow-400/30 text-yellow-300"
        },
        [ProgrammingContext.DATABASE]: {
            bg: "from-teal-400/20 to-teal-600/20",
            border: "border-teal-400/30",
            text: "text-teal-300",
            pill: "bg-teal-500/20 border-teal-400/30 text-teal-300"
        },
        [ProgrammingContext.DEPLOYMENT]: {
            bg: "from-rose-400/20 to-rose-600/20",
            border: "border-rose-400/30",
            text: "text-rose-300",
            pill: "bg-rose-500/20 border-rose-400/30 text-rose-300"
        }
    };
    return colorMap[programmingContext as keyof typeof colorMap];
};

export const contextToString = (programmingContext: ProgrammingContext) => {
    if (programmingContext === ProgrammingContext.SOC){
        return "lowLevel"
    }else if (programmingContext === ProgrammingContext.AI){
        return "aiTitle"
    }else if (programmingContext === ProgrammingContext.WEB){
        return "web"
    }else if (programmingContext === ProgrammingContext.MOBILE){
        return "mobile"
    }else if (programmingContext == ProgrammingContext.TOOLS) {
        return "tools"
    }else if (programmingContext === ProgrammingContext.PAYMENT_GATEWAYS){
        return "payment"
    }else if (programmingContext == ProgrammingContext.DATABASE) {
        return "databases"
    }else if (programmingContext === ProgrammingContext.DEPLOYMENT){
        return "deploy"
    }else {
        return "category"
    }
}

export const sectionToId = (section: Section): string => {
    switch (section) {
        case Section.ME: return "me"
        case Section.JOURNEY: return "journey"
        case Section.PROJECTS: return "projects"
        case Section.CONTACT: return "contact"
    }
}

export const handleGithubRedirect = (url: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    window.open(url, "_blank") || window.location.replace(url);
}
