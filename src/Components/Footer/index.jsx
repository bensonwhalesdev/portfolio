const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#440241] via-[#5a0258] to-[#440241] text-white py-8 mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <hr className="border-white/20" />

        <p className="text-sm tracking-wide text-white/80">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Lawrence A Benson</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
