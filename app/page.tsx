"use client";

import { motion } from "framer-motion";
import About from "./components/about";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">

        {/* Glow Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-3xl -z-10"></div>

        {/* HERO */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Jatin Patial
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-300 max-w-xl"
        >
          B.Tech CSE (AI & DS) • CGPA: <span className="text-white font-semibold">7.51</span><br />
          Building AI systems that solve real-world problems 🚀
        </motion.p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a href="https://github.com/jatin-patial" target="_blank"
            className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white hover:text-black">
            GitHub
          </a>

          <a href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105">
            Projects
          </a>

          <a href="/resume.pdf" target="_blank"
            className="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black">
            Resume
          </a>
        </div>
      </main>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}