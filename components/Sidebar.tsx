import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/profile.jpg"
        alt="User Avatar"
        width="128"
        height="128"
        layout="intrinsic"
        quality="100"
        className="mx-auto rounded-full"
      />
      <h3 className="my-4 text-2xl font-medium tracking-wider font-lobster">
        <span className="text-green">Shankha Shubhra </span>Das
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:hover:bg-green dark:hover:text-black hover:bg-green">
        Software Engineer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="resume.pdf"
        download="Shankha Shubhra Das.pdf"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* //Social Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://github.com/shankha007" target="_blank" rel="noreferrer" aria-label="Github">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/shankhad/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://twitter.com/ShankhaD" target="_blank" rel="noreferrer" aria-label="Twitter">
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Kolkata, India</span>
        </div>
        <p className="my-2">shankhasdas07@gmail.com</p>
        <p className="my-2">+91 9163178138</p>
      </div>
      {/* Email Button */}
      <button
        onClick={() => window.open("mailto:shankhasdas07@gmail.com")}
        className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      >
        Email Me!
      </button>
      <button
        onClick={changeTheme}
        className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
