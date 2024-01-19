import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed z-10 bottom-10 right-10">
      <button
        type="button"
        name="scroll to top"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-[#96969692] hover:bg-[#d8b44f] hover:text-[#f2eaeac9] inline-flex items-center rounded-full p-3 text-[#dab961] shadow-sm  focus:outline-none ",
        )}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
