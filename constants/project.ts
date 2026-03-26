type Projects = {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    techs: string[];
    webURL: string;
    codeURL: string;
}

export const PROJECTS: Projects[] = [
    {
        id: "1",
        title: "Cartello",
        description: "Cartello is a clean and modern e-commerce website designed for easy product browsing and shopping. It features categorized products, sorting options, ratings, discounts, and a simple add-to-cart system, providing users with a smooth and organized online shopping experience.",
        imageSrc: "/Cartello.png",
        techs: ["React", "TailwindCSS"],
        webURL: "https://e-commerce-shop-3c.vercel.app/",
        codeURL: "https://github.com/Michael3682/E-Commerce--Shop"
    },
    {
        id: "2",
        title: "GraphicWeb",
        description: "Graphic Web is a modern portfolio website that showcases creative web and graphic design solutions. It highlights the team’s mission to transform brand ideas into visually stunning and user-focused digital experiences.",
        imageSrc: "/GraphicWeb.png",
        techs: ["HTML", "CSS", "Javascript", "GSAP"],
        webURL: "https://michael3682.github.io/Graphic-Web",
        codeURL: "https://github.com/Michael3682/Graphic-Web"
    },
    {
        id: "3",
        title: "RandomSpellAPI",
        description: "A fantasy-themed website inspired by the world of Harry Potter that lets users generate random magical spells. It features a cinematic wizarding backdrop and a simple interface displaying each spell’s name and description.",
        imageSrc: "/RandomSpellAPI.png",
        techs: ["HTML", "CSS", "Javascript"],
        webURL: "https://michael3682.github.io/RandomSpell-API/",
        codeURL: "https://github.com/Michael3682/RandomSpell-API"
    },
    {
        id: "4",
        title: "Notes",
        description: "A simple note-taking website that allows users to add, view, and manage notes with a title, description, and date. It features a clean form layout alongside a table for organizing and displaying saved notes.",
        imageSrc: "/Notes.png",
        techs: ["HTML", "CSS", "Javascript"],
        webURL: "https://michael3682.github.io/Notes/",
        codeURL: "https://github.com/Michael3682/Notes"
    },
    {
        id: "5",
        title: "BoxGame",
        description: "A simple interactive box game where players click a moving target to score points before time runs out. It features a minimal design with a score tracker and countdown timer for quick, engaging gameplay.",
        imageSrc: "/BoxGame.png",
        techs: ["HTML", "CSS", "Javascript"],
        webURL: "https://michael3682.github.io/BoxGame/",
        codeURL: "https://github.com/Michael3682/BoxGame"
    }
]