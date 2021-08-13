import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

import { fadeInUp, routeAnimation, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectData } from "../data";
import { Category } from "../type";

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectData);
      setActive(category);
      return;
    }
    const filteredProjects = projectData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filteredProjects);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial="intial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
    >
      <Head>
        <title>Web Developer | Projects</title>
      </Head>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.id}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard showDetail={showDetail} project={project} setShowDetail={setShowDetail} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
