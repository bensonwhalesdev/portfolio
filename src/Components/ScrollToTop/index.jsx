import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className={`fixed bottom-6 right-6 z-50 p-3 rounded-lg bg-[#440241] text-white shadow-lg transition-opacity duration-300 cursor-pointer ${ isVisible ? "opacity-100" : "opacity-0 pointer-events-none" } bg-pink-600`} aria-label="Scroll to top"><ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
