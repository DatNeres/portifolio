import { useState } from "react";

function ContactMe() {
  const [text, setText] = useState("silvio.mneres@gmail.com");
  const [logo, setLogo] = useState("/images/main/icons/icons8-mail.png");

  const textToCopy = () => {
    navigator.clipboard.writeText(text);
    setLogo("/images/main/icons/icons8-check.png");
    setTimeout(() => {
      setLogo("/images/main/icons/icons8-mail.png");
    }, 500);
  };
  return (
    <div className="flex flex-wrap flex-col items-center py-20 gap-10">
      <h1
        id="contact-me"
        className="text-7xl text-rosa font-Righteous max-lg:text-6xl max-md:text-5xl"
      >
        contact me
      </h1>
      <div className="flex">
        <img
          className="cursor-pointer hover:scale-105 w-24 max-lg:w-20 max-md:w-16"
          src={logo}
          alt="meu email"
          onClick={textToCopy}
        ></img>
        <a
          className="hover:scale-105 w-24 max-lg:w-20 max-md:w-16"
          href="https://www.linkedin.com/in/silvio-neres-0120ab243/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/main/icons/icons8-linkedin.png"
            alt="meu linkedin"
          ></img>
        </a>
        <a
          className="hover:scale-105 w-24 max-lg:w-20 max-md:w-16"
          href="https://github.com/DatNeres"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/main/icons/icons8-github.png"
            alt="meu github"
          ></img>
        </a>
      </div>
      <p className="text-black font-Poppins max-sm:text-sm">
        © Copyright 2023 Silvio Neres
      </p>
    </div>
  );
}
export default ContactMe;
