import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Correct LeetCode icon
import logo from "../assets/pp.webp";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          {/* <img src={logo} className="mx-2" width={80} height={33} alt="Logo" /> */}
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex-1/2 m-8 flex items-center justify-center gap-4 text-4xl">
        <a
          href="https://www.linkedin.com/in/pruthvirajpowar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/PruthvirajPowar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://leetcode.com/u/PruthvirajPowar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <SiLeetcode />
        </a>

        <a
          href="https://www.instagram.com/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
