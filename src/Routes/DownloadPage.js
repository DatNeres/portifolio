import Header from "../Components/App/Main/Header";
import "../App.css";
import { Link } from "react-router-dom";

function DownloadPage() {
  return (
    <div className="flex justify-center h-full bg-slate-900">
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
      <div className="shadow-2xl rounded-3xl text-gray-600 mx-20 my-20 p-40 bg-white overflow-hidden max-2xl:p-24 max-lg:p-8 max-lg:mx-4">
        <div className="flex justify-between items-center max-xl:flex-col">
          <div className="font-Righteous w-1/3 space-y-10 max-xl:w-full">
            <div className="flex flex-nowrap items-center max-xl:order-last">
              <h1 className="text-7xl text-azul max-2xl:text-6xl max-lg:text-5xl">
                ShieldRSA
              </h1>
              <img
                className="max-lg:w-16"
                src="/images/projects/ShieldRSA/icons8-shield.png"
                alt="logo Shield RSA"
              />
            </div>
            <h3 className="text-4xl max-lg:text-3xl">
              Gere suas próprias chaves privadas e públicas, e proteja suas
              mensagens com a tecnologia RSA.
            </h3>
          </div>
          <div>
            <img
              className="w-[36rem] drop-shadow-lg max-2xl:w-[40vw] max-xl:w-[40rem] max-xl:mt-40"
              src="/images/projects/ShieldRSA/shieldRSA.png"
              alt="mão segurando computador"
            />
          </div>
        </div>
        <div className="font-Poppins mt-40 space-y-12">
          <p className="w-2/4 text-lg max-xl:w-full">
            Com este programa em Python, você pode facilmente gerar chaves
            pública e privada usando a confiável tecnologia de criptografia RSA
            (Este programa usa biblioteca cryptography). Essas chaves permitem
            que você proteja suas mensagens de maneira eficaz, garantindo a
            privacidade e a segurança das suas comunicações. Com uma interface
            amigável e poderosa, a criptografia de mensagens se torna acessível
            a todos, garantindo que suas informações permaneçam confidenciais e
            protegidas
          </p>
          <div className="flex space-x-4 items-center">
            <img
              className="w-7"
              src="/images/projects/ShieldRSA/icons8-update.png"
              alt="mão segurando celular"
            />
            <p>
              <span className="font-bold">1.0</span> - Versão final do usuário
            </p>
          </div>
          <div className="space-x-8 max-md:space-x-0 max-md:flex max-md:flex-col max-md:items-center max-md:space-y-5">
            <a
              className="button--black"
              href="https://github.com/DatNeres/ShieldRSA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span> <button className="">GITHUB</button>
            </a>
            <a
              className="button--download"
              href="\Downloads\ShieldRSA.zip"
              download="ShieldRSA.zip"
              target="_blank"
              rel="noreferrer"
            >
              <span></span> <button>DOWNLOAD</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
