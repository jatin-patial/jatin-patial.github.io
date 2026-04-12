"use client";

export default function About() {
  return (
    <section className="bg-transparent py-24 px-6">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">

        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 leading-relaxed">
          I am a B.Tech Computer Science student specializing in Artificial Intelligence and Data Science
          with a CGPA of <span className="text-white font-semibold">7.51</span>.
          I build Machine Learning systems, recommendation engines, and computer vision projects.
        </p>

      </div>
    </section>
  );
}