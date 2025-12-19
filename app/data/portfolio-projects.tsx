import { JSX } from "react";

type PortfolioProject = {
    name: string;
    description: string;
    link: string;
    details: {
        title: string;
        body: JSX.Element;
        tools: string[],
        media: {
            type: "image" | "youtube" | "direct-link";
            link: string;
        };
        url: string;
    };
}


export const portfolioProjects: PortfolioProject[] = [
    {
        name: "TEP Centre | WordPress Website",
        description: "WordPress-powered website developed for TEP Centre, delivering a clean, responsive, and easy-to-manage web presence.",

        link: "tepcenter",
        details: {
            title: "TEP Centre | WordPress Website",
            body: <>
                <p className="mb-5 text-green-100 max-w-4xl mx-auto">Developed a WordPress website for TEP Centre with responsive design, optimized performance, structured content management, and maintainable theming.te developed for TEP Centre, delivering a clean, responsive, and easy-to-manage web presence.</p>
            </>,
            tools: ["wordpress", "css", "javascript", "jquery"],
            media: {
                type: "image",
                link: ""
            },
            url: "https://tepcentre.com/"
        }
    },
    {
        name: "Radix - Portal",
        description: "A cutting-edge Banking-as-a-Service (BaaS).",
        link: "radix",
        details: {
            title: "Radix - Portal",
            body: <>
                <p className="mb-5 text-green-100 max-w-4xl mx-auto">
                    Radix is a cutting-edge Banking-as-a-Service (BaaS) platform, ensuring a seamless, responsive, and secure user experience across web applications.
                </p>
            </>,
            tools: ['next.js', 'mantine', 'chartjs', 'reduxjs', 'flowbite', 'tailwindcss', 'sass'],
            media: {
                type: "image",
                // link: "./public/images/radix-proj.gif"
                link: "radix-proj"
            },
            url: "https://staging.baas-portal.mysourcebank.com/"
        }
    },
    {
        name: "Weather App - SPA",
        description: "Simple and responsive weather application",
        link: "weather-app",
        details: {
            title: "Weather App - SPA",
            body: <>
                <p className="mb-5 text-green-100 max-w-4xl mx-auto">
                    A simple and responsive weather application that displays current weather conditions using real-time data. The app focuses on clarity, usability, and a clean user interface, allowing users to quickly view weather information for different locations.
                </p>
                <p className="mb-5 text-green-100 max-w-4xl mx-auto">
                    Built as a frontend practice project to demonstrate API integration, state management, and responsive UI design.
                </p>
            </>,
            tools: ['typescript', 'react', 'tailwindcss', 'sass'],
            media: {
                type: "youtube",
                link: "https://www.youtube.com/embed/abb5tFw-CwQ?si=pU1Pbb5QlCnNT4mu"
            },
            url: ""
        }
    },
    {
        name: "Studios Mainland | WordPress-Powered Website",
        description: "Studios Mainland – Professional Video Production, Photography & Event Coverage in Lagos",

        link: "studiosmainland",
        details: {
            title: "Studios Mainland | WordPress-Powered Website",
            body: <>
                <p className="mb-5 text-green-100 max-w-4xl mx-auto">Studios Mainland is my creative portfolio, showcasing visual media projects and a custom website built with WordPress for flexibility, performance, and easy content management.
                </p>
            </>,
            tools: ["wordpress", "css", "javascript", "jquery"],
            media: {
                type: "image",
                link: ""
            },
            url: "https://www.studiosmainland.com/"
        }
    },
    {
        name: "Moonshot Consulting Group – Strategic Solutions & WordPress Website",
        description: "Moonshot Consulting Group showcases consulting and innovation projects on a WordPress-built website, combining clean design with easy content management.",

        link: "moonshot",
        details: {
            title: "Moonshot Consulting Group",
            body: <>
                <p className="mb-5 text-green-100 max-w-4xl mx-auto">
                    Moonshot Consulting Group delivers innovative consulting and strategic solutions, presented through a WordPress-built website designed for clarity, flexibility, and easy content management. The site highlights key projects, services, and insights, providing a professional online presence that reflects expertise and innovation.
                </p>
            </>,
            tools: ["wordpress", "css", "javascript", "jquery"],
            media: {
                type: "image",
                link: ""
            },
            url: "https://www.moonshotconsultinggroup.com/"
        }
    },
    // {
    //     name: "E-commerce App",
    //     description: "A React + Redux online store with payment integration.",
    //     link: "ecommerce-app",
    //     details: {
    //         title: "E-commerce",
    //         body: <></>,
    //         media: ""
    //     }
    // },
    // {
    //     name: "Task Manager",
    //     description: "A simple task management app built with TypeScript and React.",
    //     link: "task-manager",
    //     details: {
    //         title: "Task Manager",
    //         body: <></>,
    //         media: ""
    //     }
    // },
]