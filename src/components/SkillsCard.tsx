import React from "react";

interface SkillsData {
    programming: string[];
    frameworks: string[];
    tools: string[];
    design: string[];
}

interface SkillsCardProps {
    data: SkillsData;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ data }) => {
    const skillCategories = [
        { title: "Programming", skills: data.programming, color: "violet"},
        { title: "Frameworks", skills: data.frameworks, color: "purple"},
        { title: "Tools", skills: data.tools, color: "blue"},
        { title: "Design", skills: data.design, color: "pink"}
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            violet: {
                bg: "from-violet-400/20 to-violet-600/20",
                border: "border-violet-400/30",
                text: "text-violet-300",
                pill: "bg-violet-500/20 border-violet-400/30 text-violet-300"
            },
            purple: {
                bg: "from-purple-400/20 to-purple-600/20",
                border: "border-purple-400/30",
                text: "text-purple-300",
                pill: "bg-purple-500/20 border-purple-400/30 text-purple-300"
            },
            blue: {
                bg: "from-blue-400/20 to-blue-600/20",
                border: "border-blue-400/30",
                text: "text-blue-300",
                pill: "bg-blue-500/20 border-blue-400/30 text-blue-300"
            },
            pink: {
                bg: "from-pink-400/20 to-pink-600/20",
                border: "border-pink-400/30",
                text: "text-pink-300",
                pill: "bg-pink-500/20 border-pink-400/30 text-pink-300"
            }
        };
        return colorMap[color as keyof typeof colorMap];
    };

    return (
        <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Technical Skills</h3>
                        <p className="text-purple-300 text-sm">Technologies & Expertise</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skillCategories.map((category, index) => {
                        const colors = getColorClasses(category.color);
                        return (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${colors.bg} rounded-xl p-4 border ${colors.border} hover:scale-105 transition-transform duration-200`}
                            >
                                <div className="flex items-center mb-3">
                                    <h5 className={`font-semibold ${colors.text}`}>{category.title}</h5>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className={`px-3 py-1 ${colors.pill} border rounded-full text-xs font-medium hover:scale-110 transition-transform duration-200 cursor-default`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;