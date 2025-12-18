import { JSX } from "react";

type PortfolioProject = {
    name: string;
    description: string;
    link: string;
    details: {
        title: string;
        body: JSX.Element;
        media: string;
    };
}


export const portfolioProjects: PortfolioProject[] = [
    {
        name: "Radix",
        description: "A cutting-edge Banking-as-a-Service (BaaS).",
        link: "radix",
        details: {
            title: "Radix",
            body: <>
                <p className="mb-5 text-green-100 max-w-4xl mx-auto">
                    Radix is a cutting-edge Banking-as-a-Service (BaaS) platform, ensuring a seamless, responsive, and secure user experience across web applications.
                </p>
            </>,
            media: "https://www.youtube.com/embed/mYMkp-S-wts?si=T7hF_XB6CUZ5FfRw"
        }
    },
    {
        name: "Weather App",
        description: "Simple and responsive weather application",
        link: "weather-app",
        details: {
            title: "weather-app",
            body: <>
                <p className="mb-5 text-green-100 max-w-4xl mx-auto">
                    A simple and responsive weather application that displays current weather conditions using real-time data. The app focuses on clarity, usability, and a clean user interface, allowing users to quickly view weather information for different locations.
                </p>
                <p className="mb-5 text-green-100 max-w-4xl mx-auto">
                    Built as a frontend practice project to demonstrate API integration, state management, and responsive UI design.
                </p>
            </>,
            media: "https://www.youtube.com/embed/abb5tFw-CwQ?si=pU1Pbb5QlCnNT4mu"
        }
    },
    // {
    //     name: "Portfolio Website",
    //     description: "My personal portfolio built with Next.js and Tailwind CSS.",
    //     link: "portfolio",
    //     details: {
    //         title: "My Portfolio",
    //         body: <></>,
    //         media: ""
    //     }
    // },
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