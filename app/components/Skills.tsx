"use client";

export default function Skills() {
  const skills = [
    "Python", "C++", "SQL",
    "Machine Learning", "Deep Learning",
    "Computer Vision", "YOLO",
    "Pandas", "NumPy", "Scikit-learn",
    "Streamlit", "Git", "GitHub"
  ];

  return (
    <section className="bg-transparent py-24 px-6">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">

        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white hover:text-black">
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}