import React from "react";
import type {AcademicCardProps} from "../misc/types.ts";

const AcademicCard: React.FC<AcademicCardProps> = ({ data }) => {
    return (
        <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"></div>

            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 hover:transform hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{data.title}</h3>
                    </div>
                </div>

                <div className="space-x-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="flex flex-row items-center justify-between">
                            <img
                                className="object-cover w-20 h-20 bg-white rounded-xl object-center me-2"
                                src={data.universityLogo}
                                alt="university logo"
                            />

                            <div className="flex-1 flex justify-center">
                                <p className="text-white/80 font-bold text-l text-center">{data.university}</p>
                            </div>
                        </div>

                        <h4 className="text-lg font-semibold text-violet-300 mt-2">{data.degree}</h4>
                        <div className="flex justify-between items-center mt-3">
                            <span className="text-white/60 text-sm">{data.year}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicCard;