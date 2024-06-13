import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  const resumePdfUrl = "https://drive.google.com/file/d/19Vgovx-i250SbPXo2P_cVFs5ZVnHhLmE/view?usp=drive_link";
  const githubUrl = "https://github.com/sumit-nagrikar";
  const linkedinUrl = "https://www.linkedin.com/in/sumit-nagrikar/";
  const instagramUrl = "https://www.instagram.com/sumit_nagrikar/";

  const handleResumeClick = () => {
    window.open(resumePdfUrl, "_blank");
  };

  const handleGithubClick = () => {
    window.open(githubUrl, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(linkedinUrl, "_blank");
  };

  const handleInstagramClick = () => {
    window.open(instagramUrl, "_blank");
  };

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src="" alt="logo"/> */}
        <h1 className="mx-3 w-10 text-3xl text-white">SN</h1>
      </div>

      <div className="m-8 flex items-center gap-4 text-2xl">
        <button
          onClick={handleResumeClick}
          className="border border-neutral-500 ring-inset ring-2 ring-slate-400 p-2 text-sm
           transform transition-transform duration-300 hover:scale-110"
        >
          Resume
        </button>
        <FaLinkedinIn onClick={handleLinkedinClick} className="cursor-pointer
         transform transition-transform duration-300 hover:scale-110" />
        <FaGithub onClick={handleGithubClick} className="cursor-pointer transform transition-transform duration-300 hover:scale-110" />
        <FaInstagram onClick={handleInstagramClick} className="cursor-pointer transform transition-transform duration-300 hover:scale-110" />
      </div>
    </nav>
  );
};

export default NavBar;
