const Projects = () => {
  const projects = [
    {
      title: "Scout Work",
      description:
        "Scout Work is a modern job matching platform that connects employers with skilled freelancers. It simplifies hiring, job seeking, and managing applications all in one place.",
      image: "/scout.PNG",
      link: "https://scout-work.vercel.app/",
      stacks: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Event Management Website",
      description:
        "A responsive event discovery site with interactive UI, custom media queries, horizontal scrolling, and Firebase integration. Built from scratch with no framework.",
      image: "/event.PNG",
      link: "https://eventwebsite-chi.vercel.app/",
      stacks: ["HTML5", "CSS", "JavaScript", "Firebase"],
    },
    {
      title: "Monthly Budgeting App (Spend Sense)",
      description:
        "Spend Sense is a personal budgeting tool that tracks income, expenses, and savings. Features include monthly planning, financial summaries, and account tracking.",
      image: "/spend.PNG",
      link: "https://spend-sense-six.vercel.app/",
      stacks: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    
  ];

  return (
    <section className="bg-[#440241] px-6 md:px-10 py-10" id="projects">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold w-[max-content] border-b-3 pb-2 mx-auto text-white mb-16 animate-fade-in-up">
          Projects
        </h1>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl p-5 bg-white/10 backdrop-blur-md border border-white/10 transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-pink-400 mb-2">{project.title}</h2>

              {/* Description */}
              <p className="text-white/80 text-sm mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((stack, i) => (
                  <span key={i} className="bg-pink-600/20 text-pink-300 text-xs px-3 py-1 rounded-full">
                    {stack}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
