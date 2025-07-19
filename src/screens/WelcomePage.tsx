import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function WelcomePage() {
    const [showContinue, setShowContinue] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContinue(true);
        }, 11000);

        return () => clearTimeout(timer);
    }, []);

    const handleContinue = () => {
        console.log("Starting the journey...");
    };

    return (
        <>
            <div className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-50">
                <button className="px-6 py-2 sm:px-8 sm:py-2 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Skip
                </button>
            </div>
            <div className="gradient-background relative min-h-screen w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center m-0 p-0">
                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(40)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white/10 animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${Math.random() * 6 + 2}px`,
                                height: `${Math.random() * 6 + 2}px`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${Math.random() * 3 + 2}s`
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                        <TypeAnimation
                            sequence={[
                                "Welcome to my portfolio.",
                                1500,
                                "I am Stiven.",
                                1500,
                                "Let's discover",
                                1000,
                                "Let's discover me."
                            ]}
                            wrapper="h1"
                            speed={20}
                            deletionSpeed={20}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 leading-tight"
                            repeat={0}
                        />
                    </div>

                    <div className={`transition-all duration-1000 ${showContinue ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <button
                            onClick={handleContinue}
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            <span className="relative z-10">Let's begin</span>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>

                <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
            `}</style>
            </div>
        </>
    );
}

export default WelcomePage;