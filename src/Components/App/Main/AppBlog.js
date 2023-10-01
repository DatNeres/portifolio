import React, { createRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import CardBlog from "../UI/CardBlog";
import MinhaJornadaInicial from "../../TextBlogs/MinhaJornadaInicial";
import IAInimigoOuAmigo from "../../TextBlogs/IAInimigoOuAmigo";
import SitesQueUsoProgramar from "../../TextBlogs/SitesQueUsoProgramar";
import MeusProjetosPessoais from "../../TextBlogs/MeusProjetosPessoais";

function AppBlog() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [textNow, setTextNow] = useState(<MinhaJornadaInicial />);
  const changeTextOne = () => {
    setTextNow(<IAInimigoOuAmigo />);
    scrollToTop();
  };

  const changeTextTwo = () => {
    setTextNow(<SitesQueUsoProgramar />);
    scrollToTop();
  };

  const changeTextThree = () => {
    setTextNow(<MeusProjetosPessoais />);
    scrollToTop();
  };

  return (
    <div className="w-full h-full bg-slate-900">
      <header className="fixed z-10 w-full h-16 flex items-center justify-between px-20 backdrop-blur-sm max-sm:px-6">
        <div className="my-10 flex flex-row space-x-2">
          <div className="bg-verde h-5 w-5 rounded-full"></div>
          <div className="bg-rosa h-5 w-5 rounded-full"></div>
          <div className="bg-azul h-5 w-5 rounded-full"></div>
        </div>
        <nav className=" space-x-12 text-rosa font-Righteous text-2xl max-lg:text-xl max-lg:space-x-6">
          <a className="" href="#about-me">
            <Link to="/">⬅️ voltar para home</Link>
          </a>
        </nav>
      </header>
      <div className="flex justify-around py-40 max-lg:flex-col max-lg:py-28 max-lg:items-center">
        <div className=" flex flex-col w-[50rem] space-y-10 font-Poppins mr-10 max-xl:w-[40rem] max-lg:mr-0 max-md:w-[35rem] max-sm:w-[22rem]">
          {textNow}
        </div>
        <div className="flex flex-col mt-10 max-lg:flex-row max-lg:flex-wrap max-lg:justify-between max-lg:space-x-2 max-md:justify-center">
          <div onClick={changeTextOne}>
            <CardBlog
              title="IA - Amigo ou inimigo ?"
              subtitle="Como a IA alavancou meu progresso em mais de 8000."
              src="\images\blog\ia_amigo_inimigo.png"
            />
          </div>
          <div onClick={changeTextTwo}>
            <CardBlog
              title="Sites que uso para programar"
              subtitle="Ótimos sites que auxiliam e inspiram no desenvolimento web."
              src="\images\blog\sites_que_uso.png"
            />
          </div>
          <div onClick={changeTextThree}>
            <CardBlog
              title="Meus projetos pessoais"
              subtitle="Críterios e tecnologia escolhidas para meus projetos pessoais."
              src="\images\blog\criterios_tecnologias.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBlog;
