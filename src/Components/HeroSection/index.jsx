const HeroSection = () => {
  return (
    <section id="info" className="bg-[#440241] pt-28 pb-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-white">
        
        {/* Text Block */}
        <div className="flex-1 space-y-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            I'm <span className="text-pink-400">Lawrence A Benson</span>
          </h1>
          <h3 className="text-xl sm:text-2xl font-medium text-white/80">Fullstack Web Developer</h3>
          <p className="text-white/70 max-w-md">I build modern, user friendly and scalable web apps. I love turning ideas into interactive experiences.
          </p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md hover:shadow-lg cursor-pointer inline-block">View Resume</a>
        </div>

        {/* Image Block */}
        <div className="flex-1 flex justify-center animate-fade-in">
         <img src="/bensonn.jpg" alt="Lawrence Benson" className="w-[280px] sm:w-[350px] rounded-full shadow-lg transition-transform duration-500 hover:scale-x-[-1]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
