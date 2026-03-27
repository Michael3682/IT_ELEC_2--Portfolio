type Techs = {
    category: string;
    items: string[];
}

type Experiences = {
    title: string;
    location: string;
    date: string;
}

export const TECHS: Techs[] = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "Typescript", "Tailwind CSS", "Javascript", "HTML5", "CSS3", "ShadCN", "Vite"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "PHP", "Laravel"],
    },
    {
        category: "Authentication & Security",
        items: ["OAuth", "JWT", "NextAuth"],
    },
    {
        category: "Database",
        items: ["MySQL", "PostgreSQL"],
    },
    {
        category: "Cloud & Hosting",
        items: ["Vercel", "Firebase"],
    },
    {
        category: "CMS & No-Code",
        items: ["WordPress"],
    },
    {
        category: "Developer Tools",
        items: ["Git", "VS Code", "Figma", "GitHub"],
    }
]


export const EXPERIENCES: Experiences[] = [
    {
        title: "Wrote my first line of code",
        location: "Cordova Public College",
        date: "2023",
    },
    {
        title: "Project-Based / Academic Experience",
        location: "Cordova Public College",
        date: "2025 - Present",
    }
]