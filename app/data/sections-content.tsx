import { portfolioProjects } from "./portfolio-projects";

export

  const sectionsContent = {
    home: {
      title: "Alli Ibrahim A.",
      subtitle: "Frontend Developer",
      content:
        "I build clean, responsive, and modern web applications using Angular, React, Next.js, Tailwind CSS and Wordpress.",
    },
    about: {
      title: "About Me",
      content:
        <>
          <p className="text-green-100">Passionate frontend developer with experience in building interactive and user-friendly websites. I love turning designs into fully functional web applications.</p>
          <hr className="my-5 border-green-100 max-w-20 mx-auto" />
          <p className="text-green-100">Software Engineer | Fintech | Expertise in Angular, React js, Next.js, Express.js & Modern Web Technologies | Building Responsive, Scalable Web Applications | Transforming Ideas into Seamless Digital Experiences</p>
        </>
    },
    skills: {
      title: "Skills",
      content: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Redux Toolkit", "NGRx", "JavaScript", "Wordpress"],
    },
    projects: {
      title: "Projects",
      content: [
        ...portfolioProjects
      ],
    },

    contact: {
      title: "Contact Me",
      content: {
        email: "iballi2017@gmail.com",
        linkedin: "https://www.linkedin.com/in/abayomi-alli-6bb347b3/",
        phone: ["+234 802 4399 166", "+234 706 559 711"],
      },
    },
  };
