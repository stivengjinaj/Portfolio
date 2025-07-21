import { useState, useRef } from "react";

interface ProjectData {
    title: string;
    description: string;
    technologies: string[];
    demoType: 'video' | 'gif';
    demoUrl: string;
}

interface ProjectCardProps {
    data: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayToggle = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Card */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:transform hover:scale-[1.02]">

                {/* Demo Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                    {data.demoType === 'video' ? (
                        <div className="relative">
                            <video
                                ref={videoRef}
                                className="w-full h-48 object-cover"
                                poster={data.demoUrl}
                                loop
                                muted
                                playsInline
                            >
                                <source src={data.demoUrl} type="video/mp4" />
                            </video>

                            {/* Play/Pause Overlay */}
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer transition-opacity duration-200"
                                onClick={handlePlayToggle}
                            >
                                <div className={`w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-200 ${isHovered ? 'scale-110 bg-white/30' : ''}`}>
                                    {isPlaying ? '⏸️' : '▶️'}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="relative">
                            <img
                                src={data.demoUrl}
                                alt={`${data.title} demo`}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 bg-purple-500/80 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-white text-xs font-medium">
                                GIF Demo
                            </div>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">{data.title}</h4>
                            <p className="text-white/80 text-sm leading-relaxed">{data.description}</p>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-violet-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-4 flex-shrink-0">
                            🚀
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                        <h5 className="text-white/90 font-medium text-sm">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                            {data.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-violet-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-medium hover:scale-110 hover:from-blue-500/30 hover:to-violet-500/30 transition-all duration-200 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6 pt-4 border-t border-white/10">
                        <button className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm hover:shadow-lg hover:shadow-violet-500/25">
                            Live Demo
                        </button>
                        <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm">
                            View Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;