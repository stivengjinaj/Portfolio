import React, {useRef} from "react";
import type {Project} from "../misc/types.ts";
import {handleGithubRedirect} from "../misc/helper.ts";

interface ProjectCardProps {
    data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:transform hover:scale-[1.02] h-full flex flex-col">

                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex-shrink-0">
                    {data.video ? (
                        <div className="relative">
                            <video
                                ref={videoRef}
                                className="w-full h-60 object-contain"
                                src={data.video}
                                loop
                                muted
                                autoPlay
                            >
                                <source src={data.video} type="video/mp4" />
                            </video>
                        </div>
                    ) : (
                        <div className="relative">
                            <img
                                src={data.image}
                                alt={`${data.projectTitle} demo`}
                                className="w-full h-60 object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">{data.projectTitle}</h4>
                            <p className="text-white/80 text-sm leading-relaxed">{data.projectDescription}</p>
                        </div>
                    </div>

                    <div className="space-y-3 flex-1">
                        <h5 className="text-white/90 font-medium text-sm">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                            {data.usedTechnologies.map((tech, index) => (
                                <img
                                    key={`${tech.name}-${index}`}
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 object-cover"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 mt-6 pt-4 border-t border-white/10 flex-shrink-0">
                        <button
                            onClick={() => handleGithubRedirect(data.githubRepo)}
                            className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm"
                        >
                            View Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;