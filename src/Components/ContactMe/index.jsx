import { Github, Linkedin, Twitter } from "lucide-react";

const ContactMe = () => {
  return (
    <section id="contact" className="bg-[#440241] py-20 px-6 md:px-10 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-extrabold border-b-2 border-white pb-2 inline-block mb-10 animate-fade-in-up">Contact Me </h1>

        {/* Form */}
        <form action="https://formspree.io/f/xdkwkjea" method="POST" className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl space-y-6 animate-fade-in-up">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white/80">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/80">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500" required />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white/80">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500" required/>
          </div>

          {/* Submit Button */}
          <button type="submit" className="mt-4 bg-pink-500 hover:bg-pink-600 transition-colors text-white font-semibold px-6 py-3 rounded-lg shadow-md">Send Message</button>
        </form>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-10 animate-fade-in-up">
          <a href="https://x.com/bensonwhales" target="_blank" rel="noopener noreferrer"
            className="hover:text-pink-400 transition"> <Twitter className="w-10 h-10" /> </a>
          <a href="https://github.com/bensonwhalesdev" target="_blank" rel="noopener noreferrer"
            className="hover:text-pink-400 transition"> <Github className="w-10 h-10" /> </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
            className="hover:text-pink-400 transition"> <Linkedin className="w-10 h-10" /> </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
