"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) =>
      observerRef.current?.observe(el)
    );
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        :root {
          --bg: #0a0a0f; --bg2: #111118; --bg3: #16161f; --card: #13131a;
          --border: rgba(255,255,255,0.07); --border2: rgba(255,255,255,0.12);
          --accent: #4f8ef7; --accent2: #7c5cfc; --accent3: #00d4aa;
          --text: #f0f0f5; --muted: #8888a0; --muted2: #5a5a72;
          --font-head: 'Syne', sans-serif; --font-body: 'DM Sans', sans-serif;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: var(--bg); color: var(--text);
          font-family: var(--font-body); font-size: 16px;
          line-height: 1.7; overflow-x: hidden;
        }
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.2rem 4rem;
          background: rgba(10,10,15,0.85); backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: var(--font-head); font-size: 1.1rem; font-weight: 800;
          letter-spacing: -0.02em; color: var(--text); text-decoration: none;
        }
        .nav-logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a {
          font-size: 0.85rem; font-weight: 500; letter-spacing: 0.05em;
          text-transform: uppercase; color: var(--muted); text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--text); }
        .hero {
          min-height: 100vh; display: flex; flex-direction: column;
          justify-content: center; padding: 8rem 4rem 4rem; position: relative; overflow: hidden;
        }
        .hero-glow {
          position: absolute; width: 600px; height: 600px;
          border-radius: 50%; filter: blur(120px); pointer-events: none;
        }
        .glow-1 { background: rgba(79,142,247,0.12); top: -100px; right: -100px; }
        .glow-2 { background: rgba(124,92,252,0.08); bottom: 0; left: -200px; }
        .hero-label {
          font-size: 0.78rem; font-weight: 500; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 1.5rem;
          opacity: 0; animation: fadeUp 0.6s ease forwards 0.1s;
        }
        .hero-name {
          font-family: var(--font-head); font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 800; line-height: 0.95; letter-spacing: -0.03em;
          color: var(--text); margin-bottom: 1.5rem;
          opacity: 0; animation: fadeUp 0.6s ease forwards 0.2s;
        }
        .hero-name .line2 { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.25); }
        .hero-desc {
          font-size: 1.15rem; font-weight: 300; color: var(--muted);
          max-width: 540px; margin-bottom: 2.5rem;
          opacity: 0; animation: fadeUp 0.6s ease forwards 0.3s;
        }
        .hero-desc strong { color: var(--text); font-weight: 500; }
        .hero-cta {
          display: flex; gap: 1rem; flex-wrap: wrap;
          opacity: 0; animation: fadeUp 0.6s ease forwards 0.4s;
        }
        .btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.8rem 1.8rem; border-radius: 6px;
          font-family: var(--font-body); font-size: 0.9rem; font-weight: 500;
          text-decoration: none; transition: all 0.2s; cursor: pointer; border: none;
        }
        .btn-primary { background: var(--accent); color: #fff; }
        .btn-primary:hover { background: #6a9ff8; transform: translateY(-1px); }
        .btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border2); }
        .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }
        .hero-stats {
          display: flex; gap: 3rem; margin-top: 4rem;
          opacity: 0; animation: fadeUp 0.6s ease forwards 0.5s;
        }
        .stat-num { font-family: var(--font-head); font-size: 2rem; font-weight: 800; color: var(--text); line-height: 1; }
        .stat-num span { color: var(--accent); }
        .stat-label { font-size: 0.8rem; color: var(--muted); margin-top: 0.25rem; letter-spacing: 0.05em; }
        section { padding: 6rem 4rem; }
        .section-tag {
          font-size: 0.75rem; font-weight: 500; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem;
        }
        .section-title {
          font-family: var(--font-head); font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 3rem;
        }
        .section-title em { color: var(--muted2); font-style: normal; }
        .skills-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1px; background: var(--border);
          border: 1px solid var(--border); border-radius: 12px; overflow: hidden;
        }
        .skill-card { background: var(--card); padding: 1.75rem; transition: background 0.2s; }
        .skill-card:hover { background: var(--bg3); }
        .skill-card-icon { font-size: 1.5rem; margin-bottom: 0.75rem; }
        .skill-card-title {
          font-family: var(--font-head); font-size: 0.85rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.75rem;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .skill-tag {
          font-size: 0.8rem; padding: 0.25rem 0.65rem; border-radius: 4px;
          background: rgba(255,255,255,0.05); color: var(--text); border: 1px solid var(--border);
        }
        .skill-tag.hl { background: rgba(79,142,247,0.12); border-color: rgba(79,142,247,0.3); color: var(--accent); }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.5rem; }
        .project-card {
          background: var(--card); border: 1px solid var(--border); border-radius: 12px;
          padding: 2rem; display: flex; flex-direction: column;
          transition: border-color 0.2s, transform 0.2s; position: relative; overflow: hidden;
        }
        .project-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent2)); opacity: 0; transition: opacity 0.2s;
        }
        .project-card:hover { border-color: var(--border2); transform: translateY(-3px); }
        .project-card:hover::before { opacity: 1; }
        .project-card.featured { border-color: rgba(79,142,247,0.25); }
        .project-card.featured::before { opacity: 1; }
        .project-badge {
          display: inline-flex; font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 0.2rem 0.6rem; border-radius: 4px; margin-bottom: 1rem; width: fit-content;
        }
        .b-feat { background: rgba(79,142,247,0.15); color: var(--accent); border: 1px solid rgba(79,142,247,0.3); }
        .b-nlp  { background: rgba(124,92,252,0.15); color: #a78bfa; border: 1px solid rgba(124,92,252,0.3); }
        .b-cv   { background: rgba(0,212,170,0.12); color: var(--accent3); border: 1px solid rgba(0,212,170,0.25); }
        .b-ml   { background: rgba(251,146,60,0.12); color: #fb923c; border: 1px solid rgba(251,146,60,0.25); }
        .b-data { background: rgba(236,72,153,0.12); color: #f472b6; border: 1px solid rgba(236,72,153,0.25); }
        .project-title { font-family: var(--font-head); font-size: 1.15rem; font-weight: 700; margin-bottom: 0.6rem; color: var(--text); }
        .project-desc { font-size: 0.9rem; color: var(--muted); line-height: 1.6; flex: 1; margin-bottom: 1.25rem; }
        .project-metrics { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
        .metric {
          font-size: 0.8rem; font-weight: 500; color: var(--accent3);
          background: rgba(0,212,170,0.08); border: 1px solid rgba(0,212,170,0.15);
          padding: 0.2rem 0.6rem; border-radius: 4px;
        }
        .project-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem; }
        .tech-tag {
          font-size: 0.75rem; padding: 0.2rem 0.55rem; border-radius: 4px;
          background: rgba(255,255,255,0.04); color: var(--muted); border: 1px solid var(--border);
        }
        .project-link {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.85rem; font-weight: 500; color: var(--accent);
          text-decoration: none; transition: gap 0.2s;
        }
        .project-link:hover { gap: 0.65rem; }
        .exp-list { display: flex; flex-direction: column; }
        .exp-item { display: grid; grid-template-columns: 1fr 3fr; gap: 2rem; padding: 2rem 0; border-bottom: 1px solid var(--border); }
        .exp-item:last-child { border-bottom: none; }
        .exp-date { font-size: 0.82rem; color: var(--muted2); padding-top: 0.2rem; }
        .exp-role { font-family: var(--font-head); font-size: 1.05rem; font-weight: 700; color: var(--text); margin-bottom: 0.2rem; }
        .exp-org { font-size: 0.9rem; color: var(--accent); margin-bottom: 0.75rem; }
        .exp-desc { font-size: 0.9rem; color: var(--muted); line-height: 1.7; }
        .contact-inner { max-width: 600px; text-align: center; margin: 0 auto; }
        .contact-sub { color: var(--muted); margin-bottom: 2.5rem; font-size: 1rem; }
        .contact-links { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
        footer {
          padding: 2rem 4rem; border-top: 1px solid var(--border);
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.82rem; color: var(--muted2);
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        @media (max-width: 768px) {
          nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          .hero { padding: 7rem 1.5rem 3rem; }
          section { padding: 4rem 1.5rem; }
          .hero-stats { gap: 1.5rem; flex-wrap: wrap; }
          .exp-item { grid-template-columns: 1fr; gap: 0.5rem; }
          footer { flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      {/* Nav */}
      <nav>
        <a href="#" className="nav-logo">JP<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-glow glow-1"></div>
        <div className="hero-glow glow-2"></div>
        <p className="hero-label">B.Tech CSE (AI & Data Science) · JUIT · 2023–Present</p>
        <h1 className="hero-name">
          Jatin<br />
          <span className="line2">Patial</span>
        </h1>
        <p className="hero-desc">
          I build <strong>end-to-end ML systems</strong> — from custom CNNs and recommendation engines
          to NLP pipelines and computer vision apps. Focused on models that actually ship.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="https://github.com/jatin-patial" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub Profile →</a>
          <a href="/resume.pdf" target="_blank" className="btn btn-outline">Resume PDF</a>
        </div>
        <div className="hero-stats">
          <div><div className="stat-num">6<span>+</span></div><div className="stat-label">Live Projects</div></div>
          <div><div className="stat-num">92<span>%</span></div><div className="stat-label">CNN Accuracy</div></div>
          <div><div className="stat-num">7.5<span>+</span></div><div className="stat-label">CGPA</div></div>
          <div><div className="stat-num">SUO</div><div className="stat-label">NCC Rank</div></div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <p className="section-tag reveal">What I work with</p>
        <h2 className="section-title reveal">Technical <em>Skills</em></h2>
        <div className="skills-grid reveal">
          <div className="skill-card">
            <div className="skill-card-icon">🧠</div>
            <div className="skill-card-title">ML / Deep Learning</div>
            <div className="skill-tags">
              {["PyTorch","CNNs","Transfer Learning","scikit-learn","TensorFlow","Grad-CAM"].map((s,i) => (
                <span key={s} className={`skill-tag${i<3?" hl":""}`}>{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-icon">👁️</div>
            <div className="skill-card-title">Computer Vision</div>
            <div className="skill-tags">
              {["YOLO","OpenCV","Image Classification","Object Detection"].map((s,i) => (
                <span key={s} className={`skill-tag${i<2?" hl":""}`}>{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-icon">📊</div>
            <div className="skill-card-title">Data & Analytics</div>
            <div className="skill-tags">
              {["Pandas","NumPy","EDA","Matplotlib","Seaborn","SQL"].map((s,i) => (
                <span key={s} className={`skill-tag${i<2?" hl":""}`}>{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-icon">🚀</div>
            <div className="skill-card-title">Languages & Tools</div>
            <div className="skill-tags">
              {["Python","C++","SQL","Git","Streamlit","Jupyter"].map((s,i) => (
                <span key={s} className={`skill-tag${[0,3].includes(i)?" hl":""}`}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <p className="section-tag reveal">What I&apos;ve built</p>
        <h2 className="section-title reveal">Featured <em>Projects</em></h2>
        <div className="projects-grid">

          <div className="project-card featured reveal">
            <span className="project-badge b-feat">⭐ Featured</span>
            <div className="project-title">Image Classification CNN</div>
            <div className="project-desc">Built a VGG-style CNN from scratch and fine-tuned ResNet-18 with two-stage transfer learning on CIFAR-10. Implemented Grad-CAM from scratch for model explainability.</div>
            <div className="project-metrics">
              <span className="metric">92% test accuracy</span>
              <span className="metric">60K images</span>
              <span className="metric">Grad-CAM</span>
            </div>
            <div className="project-tech">
              {["PyTorch","ResNet-18","CIFAR-10","Transfer Learning"].map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <a href="https://github.com/jatin-patial/cnn-image-classification" target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
          </div>

          <div className="project-card reveal">
            <span className="project-badge b-cv">Computer Vision</span>
            <div className="project-title">Photo Finder AI</div>
            <div className="project-desc">Real-time object detection using YOLOv8 on a custom dataset. Optimised inference to 30+ FPS on CPU without GPU.</div>
            <div className="project-metrics">
              <span className="metric">87% mAP@0.5</span>
              <span className="metric">30+ FPS CPU</span>
            </div>
            <div className="project-tech">
              {["YOLOv8","OpenCV","Python"].map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <a href="https://github.com/jatin-patial" target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
          </div>

          <div className="project-card reveal">
            <span className="project-badge b-nlp">NLP</span>
            <div className="project-title">Resume Screening AI</div>
            <div className="project-desc">NLP pipeline to rank resumes against job descriptions using TF-IDF and cosine similarity. Deployed as a Streamlit web app.</div>
            <div className="project-metrics">
              <span className="metric">91% match accuracy</span>
              <span className="metric">500+ resumes</span>
            </div>
            <div className="project-tech">
              {["NLP","TF-IDF","Streamlit"].map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <a href="https://github.com/jatin-patial/resume-screening-ai" target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
          </div>

          <div className="project-card reveal">
            <span className="project-badge b-ml">Machine Learning</span>
            <div className="project-title">Movie Recommendation System</div>
            <div className="project-desc">Collaborative and content-based filtering on MovieLens (100K+ ratings) using SVD. Outperformed baseline by 18% on RMSE.</div>
            <div className="project-metrics">
              <span className="metric">RMSE: 0.91</span>
              <span className="metric">100K+ ratings</span>
            </div>
            <div className="project-tech">
              {["scikit-learn","SVD","Streamlit"].map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <a href="https://github.com/jatin-patial/movie-recommendation-system" target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
          </div>

          <div className="project-card reveal">
            <span className="project-badge b-ml">Machine Learning</span>
            <div className="project-title">House Price Prediction</div>
            <div className="project-desc">Random Forest regression with feature engineering on 15+ features. Deployed as a live Streamlit app for real-time predictions.</div>
            <div className="project-metrics">
              <span className="metric">R² = 0.89</span>
              <span className="metric">MAE –23%</span>
            </div>
            <div className="project-tech">
              {["Random Forest","Pandas","Streamlit"].map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <a href="https://github.com/jatin-patial/house_price_prediction" target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
          </div>

          <div className="project-card reveal">
            <span className="project-badge b-data">Data Analytics</span>
            <div className="project-title">Sales Data Dashboard</div>
            <div className="project-desc">Analysed 50K+ transaction records with advanced SQL. Built an interactive dashboard cutting manual reporting time by 40%.</div>
            <div className="project-metrics">
              <span className="metric">50K+ records</span>
              <span className="metric">–40% report time</span>
            </div>
            <div className="project-tech">
              {["SQL","Power BI","CTEs"].map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <a href="https://github.com/jatin-patial/sales-dashboard" target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <p className="section-tag reveal">Where I&apos;ve worked</p>
        <h2 className="section-title reveal">Experience <em>&amp; Leadership</em></h2>
        <div className="exp-list">
          <div className="exp-item reveal">
            <div className="exp-date">2025</div>
            <div>
              <div className="exp-role">Machine Learning Intern</div>
              <div className="exp-org">Launched Global</div>
              <div className="exp-desc">Built end-to-end ML models on real-world datasets. Improved model F1 score by 15% through systematic hyperparameter tuning using GridSearchCV across 3 algorithms.</div>
            </div>
          </div>
          <div className="exp-item reveal">
            <div className="exp-date">2023 – 2026</div>
            <div>
              <div className="exp-role">Senior Under Officer (SUO)</div>
              <div className="exp-org">National Cadet Corps — Highest Cadet Rank</div>
              <div className="exp-desc">Commanded a unit of 50+ cadets across national-level events, parades, and drills. Developed leadership, crisis management, and large-team coordination skills.</div>
            </div>
          </div>
          <div className="exp-item reveal">
            <div className="exp-date">2023 – Present</div>
            <div>
              <div className="exp-role">Class Representative &amp; Disciplinary Coordinator</div>
              <div className="exp-org">Jaypee University of Information Technology</div>
              <div className="exp-desc">Managed student-faculty communication for a 60-student cohort. Resolved academic and administrative issues and coordinated campus operations.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="contact-inner">
          <p className="section-tag reveal" style={{textAlign:"center"}}>Get in touch</p>
          <h2 className="section-title reveal" style={{textAlign:"center"}}>Open to <em>Opportunities</em></h2>
          <p className="contact-sub reveal">Looking for internships and full-time roles in ML engineering, data science, and AI. Let&apos;s build something together.</p>
          <div className="contact-links reveal">
            <a href="mailto:jatinpatial4433@gmail.com" className="btn btn-primary">Send Email</a>
            <a href="https://linkedin.com/in/jatin-patial-19132a365" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
            <a href="https://github.com/jatin-patial" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span>© 2025 Jatin Patial</span>
        <span>Built with Next.js · Hosted on Vercel</span>
      </footer>
    </>
  );
}
