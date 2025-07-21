export const skillsData = {
    programming: ["JavaScript", "TypeScript", "Python", "Java"],
    frameworks: ["React", "Node.js", "Express", "Next.js"],
    tools: ["Git", "Docker", "AWS", "MongoDB"],
    design: ["Figma", "Adobe XD", "Tailwind CSS", "GSAP"]
};

export const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        demoType: "video" as const,
        demoUrl: "https://via.placeholder.com/400x200/6366f1/white?text=Demo+Video"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application with interactive maps and forecasts",
        technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
        demoType: "gif" as const,
        demoUrl: "https://via.placeholder.com/400x200/8b5cf6/white?text=Demo+GIF"
    },
    {
        title: "Task Management App",
        description: "Collaborative task management tool with real-time updates",
        technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        demoType: "video" as const,
        demoUrl: "https://via.placeholder.com/400x200/a855f7/white?text=Demo+Video"
    }
];
