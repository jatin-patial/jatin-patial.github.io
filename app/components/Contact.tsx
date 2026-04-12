"use client";

export default function Contact() {
  return (
    <section className="bg-transparent py-24 px-6 text-center">

      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-400 mb-6">
        Open to internships and opportunities 🚀
      </p>

      <div className="flex justify-center gap-6">
        <a 
  href="mailto:jatinpatial4433@gmail.com"
  className="hover:text-blue-400"
>
  Email
</a>
        <a 
  href="https://www.linkedin.com/in/jatin-patial-19132a365/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-400"
>
  LinkedIn
</a>
        <a href="https://github.com/jatin-patial">GitHub</a>
      </div>

    </section>
  );
}