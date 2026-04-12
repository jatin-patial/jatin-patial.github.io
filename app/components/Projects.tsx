"use client";

const projects = [
  {
    title: "Resume Screening AI",
    desc: "NLP system to match resumes with job roles.",
    github: "https://github.com/jatin-patial",
    image: "/images/resume.png",
  },
  {
    title: "Movie Recommender",
    desc: "ML-based recommendation system.",
    github: "https://github.com/jatin-patial",
    image: "/images/movie.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-transparent py-24 px-6">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((p, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:scale-105">

              <img src={p.image} className="rounded mb-3 h-40 w-full object-cover" />

              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>

              <a href={p.github} target="_blank"
                className="inline-block mt-3 text-blue-400">
                GitHub →
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}