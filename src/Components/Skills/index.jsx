const Skills = () => {

const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];
  return (
    <section id="skills" className="bg-[#440241] py-10 px-6 md:px-10 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold border-b-3 border-white inline-block pb-1">Skills</h1>
        </div>

        {/* Skill Grid */}
        <div className="grid gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
          {skills.map((skill, i) => (
            <div key={i} className="group w-32 h-32 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center p-4 hover:scale-105 transition-transform duration-300 shadow-md">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:rotate-[12deg]"/>
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
