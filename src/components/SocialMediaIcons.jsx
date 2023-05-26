const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500 max-w-[35px] max-h-[45px]"
          href="https://www.linkedin.com/in/shawn-r-smith/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>

        <a
        className="hover:opacity-50 transition duration-500 max-w-[35px] max-h-[45px]"
        href="https://github.com/Shawn-Smith24"
        target="_blank"
        rel="noreferrer"
         >
          <img alt="github-link" src="../assets/github.png"/>
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;