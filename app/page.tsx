"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react"; import Socials from "./shared/components/Socials";
import Navbar from "./shared/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { sectionsContent } from "./data/sections-content";
import { sections } from "./data/sections";
import { variants } from "./data/variants";
import Home from "./pages/Home";
import Image from "next/image";
import { portfolioProjects } from "./data/portfolio-projects";
import { FaChevronLeft } from "react-icons/fa6";

const App: NextPage = () => {
  const [activeSection, setActiveSection] = useState<typeof sections[number]>("home");
  const [prevIndex, setPrevIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [projectId, setProjectId] = useState<string | null>(null);
  const [currentPortfolioProject, setCurrentPortfolioProject] = useState<any>(null);

  const handleSectionChange = (section: typeof sections[number]) => {
    const newIndex = sections.indexOf(section);
    setSlideDirection(newIndex > prevIndex ? "right" : "left");
    setPrevIndex(newIndex);
    setActiveSection(section);
  };


  const handleSetCurrentProject = (link: string) => {
    if (link) {
      const x = portfolioProjects.find((x) => {
        console.log("x");
        if (x.link === link) {
          console.log(x)
          return x;
        }
      })

      setCurrentPortfolioProject(x)

    }
  }

  useEffect(() => {
    console.log(currentPortfolioProject)
  }, [currentPortfolioProject])

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={handleSectionChange} />
      <main className="pt-24 flex flex-col items-center justify-center px-4 min-h-screen bg-black text-green-400 font-mono">
        {/* Home */}
        <AnimatePresence mode="wait" initial={false}>
          {activeSection === "home" && (
            <Home slideDirection={slideDirection} variants={variants} />
          )}

          {/* About */}
          {activeSection === "about" && (
            <motion.section
              key="about"
              custom={slideDirection}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="py-20 w-full max-w-4xl text-center"
            >
              <div className="max-w-4xl text-center">
                <h2 className="text-3xl font-semibold mb-4 text-green-500">{sectionsContent.about.title}</h2>
                {/* <p className="text-green-100">{sectionsContent.about.content}</p> */}
                {sectionsContent.about.content}
              </div>
            </motion.section>
          )}

          {/* Repeat the same for skills, projects, contact */}

          {/* Skills */}
          {activeSection === "skills" && (
            <motion.section
              key="skills"
              custom={slideDirection}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center py-20"
            >
              <div className="max-w-4xl text-center">
                <h2 className="text-3xl font-semibold mb-4 text-green-500">{sectionsContent.skills.title}</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {sectionsContent.skills.content.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-green-900 text-green-400 rounded-full cursor-pointer
                             transform hover:-translate-y-1 hover:scale-105 hover:bg-green-700 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Projects */}
          {activeSection === "projects" && (
            <motion.section
              key="projects"
              custom={slideDirection}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center py-20"
            >
              <div className="max-w-4xl text-center">
                <h2 className="text-3xl font-semibold mb-8 text-green-500">{sectionsContent.projects.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {sectionsContent.projects.content.map((project) => (
                    <div
                      key={project.name}
                      className="p-6 border border-green-700 rounded-lg hover:scale-105 transform transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold mb-2 text-green-400">{project.name}</h3>
                      <p className="text-green-100 mb-4">{project.description}</p>
                      {/* <Link
                        href={`/projects/${project.link}`}
                        className="text-green-400 hover:text-green-500 underline"
                      >
                        View Project
                      </Link> */}
                      <button
                        // href={`/projects/${project.link}`}
                        onClick={() => {
                          setActiveSection("project-details");
                          setProjectId(project.link as string)
                          handleSetCurrentProject(project.link as string)
                        }}
                        className="cursor-pointer text-green-400 hover:text-green-500 underline"
                      >
                        View Project
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}


          {
            activeSection === "project-details" && (
              <motion.section
                key="projects"
                custom={slideDirection}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center w-full"
              >
                <button onClick={() => {
                  setActiveSection("projects");
                  setProjectId(null)
                  setCurrentPortfolioProject(null)

                }} className="cursor-pointer px-2 text-left flex items-center gap-2 font-semibold mb-4"><FaChevronLeft />Back</button>

                <h1 className="text-2xl font-extrabold capitalize mb-4">{currentPortfolioProject?.details?.title}</h1>
                {currentPortfolioProject?.details?.body}


                <div className="px-2 lg:px-40">

                  {/* <div></div> */}
                  {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Ps5oSHctoe8?si=_p_GQZQ_ni329Wqx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe> */}
                  <div className="video-container">
                    {
                      currentPortfolioProject?.details?.media && <iframe
                        width="1280"
                        height="620"
                        src={currentPortfolioProject?.details?.media}
                        title={currentPortfolioProject?.details?.title}
                        frameBorder={0}
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      // className="w-full lg:w-5xl lg:min-h-80 mx-auto"
                      />
                    }
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Ps5oSHctoe8?si=MQD0-m1Q0Sja9yz8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}


                  </div>
                </div>

              </motion.section>
            )
          }


          {/* Contact */}
          {activeSection === "contact" && (
            <motion.section
              key="contact"
              custom={slideDirection}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center py-20"
            >
              <h2 className="text-3xl font-semibold mb-4 text-green-500">{sectionsContent.contact.title}</h2>
              <p className="mb-4">
                Email:{" "}
                <a href={`mailto:${sectionsContent.contact.content.email}`} className="text-green-400 hover:text-green-500">
                  {sectionsContent.contact.content.email}
                </a>
              </p>
              <p className="mb-4 flex gap-4">
                LinkedIn:{" "}
                <a
                  href={sectionsContent.contact.content.linkedin}
                  target="_blank"
                  className="text-green-400 hover:text-green-500 text-nowrap text-ellipsis max-w-65.5! overflow-hidden block"
                >
                  {sectionsContent.contact.content.linkedin}
                </a>
              </p>
              <p className="mb-4">
                Phone:{" "}
                <a
                  href={`tel:${sectionsContent.contact.content.phone[0]}`}
                  target="_blank"
                  className="text-green-400 hover:text-green-500"
                >
                  {sectionsContent.contact.content.phone[0]}
                </a> | <a
                  href={`tel:${sectionsContent.contact.content.phone[1]}`}
                  target="_blank"
                  className="text-green-400 hover:text-green-500"
                >
                  {sectionsContent.contact.content.phone[1]}
                </a>
              </p>

              <a
                href={`mailto:${sectionsContent.contact.content.email}`}
                className="mt-4 inline-block bg-green-900 text-green-400 px-6 py-3 rounded-full
                         hover:bg-green-700 hover:text-green-200 hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
              <Socials />
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
