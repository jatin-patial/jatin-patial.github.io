"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">

        <motion.div whileHover={{ scale: 1.05 }} className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Resume Screening AI</h3>
          <p className="text-gray-400 mt-2">
            NLP-based system to match resumes with job descriptions.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Movie Recommender</h3>
          <p className="text-gray-400 mt-2">
            ML-based recommendation system using similarity matrix.
          </p>
        </motion.div>

      </div>
    </section>
  );
}