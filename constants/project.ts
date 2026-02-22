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
        imageSrc: "Cartello.png",
        techs: ["React", "TailwindCSS"],
        webURL: "https://e-commerce-shop-3c.vercel.app/",
        codeURL: "https://github.com/Michael3682/E-Commerce--Shop"
    },
    {
        id: "2",
        title: "GraphicWeb",
        description: "Graphic Web is a modern portfolio website that showcases creative web and graphic design solutions. It highlights the team’s mission to transform brand ideas into visually stunning and user-focused digital experiences.",
        imageSrc: "GraphicWeb.png",
        techs: ["HTML", "CSS", "Javascript", "GSAP"],
        webURL: "https://michael3682.github.io/Graphic-Web",
        codeURL: "https://github.com/Michael3682/Graphic-Web"
    }
]