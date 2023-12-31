import HandsAnimation from "../UI/HandsAnimation";
import { Link } from "react-router-dom";
function Projects() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div>
      <div className="px-40 max-xl:px-14 max-sm:px-4">
        <h1
          id="projects"
          className="font-Righteous text-9xl text-black mt-28 max-lg:text-8xl max-md:text-7xl max-sm:text-6xl"
        >
          projects <span className="text-azul">{"()"}</span>
        </h1>
      </div>
      <div className="h-full grid grid-cols-2 mt-40 py-5 px-40 font-Righteous max-xl:px-14 max-md:px-4 max-md:grid-cols-1 max-md:grid-rows-2 max-md:py-10 max-md:mt-0">
        <div className="col-start-1 max-md:row-start-2">
          <h1 className="text-5xl text-gray-700 max-2xl:text-4xl max-lg:text-3xl">
            <span className="text-rosa">{"<h1>"}</span>GRUD - Painel de controle
            de alunos<span className="text-rosa">{"<h1>"}</span>
          </h1>
          <br></br>
          <p className="font-Poppins font-semibold text-3xl text-azul max-2xl:text-2xl max-lg:text-xl max-sm:text-gray-700">
            Create, Read, Update e Delete.<br></br>
            Um sistema, para gerir de forma perfomática e eficaz os dados dos
            seus alunos. Mantenha o controle das suas turmas na palma da sua
            mão.
          </p>
          <div className="space-x-5 mt-5 text-md text-gray-600 underline decoration-azul max-lg:space-x-2">
            <span className="hover:underline decoration-cinza">JAVASCRIPT</span>
            <span className="hover:underline decoration-azul">CSS</span>
            <span className="hover:underline decoration-cinza">HTML</span>
            <span className="hover:underline decoration-azul">PHOTOSHOP</span>
          </div>
          <div className="space-x-4 mt-10">
            <a
              className="button--black"
              href="https://github.com/DatNeres/GRUD-HyperCursos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>GITHUB
            </a>
            <a
              className="button--blue"
              href="https://silvioneres.dev/painel-do-aluno"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>INICIAR
            </a>
          </div>
        </div>
        <div className="flex justify-end col-start-2 mr-[-11rem] mt-[-2rem] max-md:col-start-1 max-md:mr-[-2rem]">
          <HandsAnimation animationType="rightToLeft">
            <img
              className=" w-[32rem] max-lg:w-[28rem] max-lg:mt-[6rem] max-md:w-[28rem] max-sm:w-[20rem]"
              src="/images/projects/grud-painel/hands.png"
              alt="mão segurando celular"
            />
          </HandsAnimation>
        </div>
      </div>

      <div className="h-full grid grid-cols-2 py-20 px-40 font-Righteous max-xl:px-14 max-md:px-4 max-md:grid-cols-1 max-md:grid-rows-2 max-md:py-0">
        <div className="col-start-2 max-md:col-start-1 max-md:row-start-2 max-md:mt-10 max-sm:-mt-14">
          <h1 className="text-5xl text-gray-700 max-2xl:text-4xl max-lg:text-3xl">
            <span className="text-rosa">{"<h1>"}</span>RANDOMS FOOD -<br></br>
            Escolhe um tipo de comida para você de forma aleatória.
            <span className="text-rosa">{"<h1>"}</span>
          </h1>
          <br></br>
          <p className="font-Poppins font-semibold text-3xl text-azul max-2xl:text-2xl max-lg:text-xl max-sm:text-gray-700">
            Na dúvida vai de Random Food.<br></br>
            Uma forma fácil e divertida de eliminar aquela dúvida do dia: O que
            a gente vai pedir hoje?. O app escolhe um prato para você baseado
            nas suas escolhas.
          </p>
          <div className="mt-5 text-md text-gray-600">
            <div className="space-x-5 underline decoration-azul max-lg:space-x-2">
              <span className="hover:underline decoration-cinza">
                {" "}
                JAVASCRIPT
              </span>
              <span className="hover:underline decoration-cinza">REACT</span>
              <span className="hover:underline decoration-cinza">
                TAILWINDCSS
              </span>
            </div>
            <div className="space-x-5 underline decoration-rosa max-lg:space-x-2">
              <span className="hover:underline decoration-azul">CSS</span>
              <span className="hover:underline decoration-cinza">HTML</span>
              <span className="hover:underline decoration-azul">PHOTOSHOP</span>
            </div>
          </div>
          <div className="space-x-4 mt-10">
            <a
              className="button--black"
              href="https://github.com/DatNeres/randoms-food"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>GITHUB
            </a>
            <a
              className="button--blue"
              href="https://silvioneres.dev/randoms-food/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>INICIAR
            </a>
          </div>
        </div>
        <div className="flex justify-start col-start-1 row-start-1 ml-[-11rem] mt-[2rem] max-xl:ml-[-4rem] max-md:row-start-1 max-lg:mt-0 max-md:ml-[-2rem] max-md:mt-[-6rem] max-sm:mt-4">
          <HandsAnimation animationType="leftToRight">
            <img
              className="w-[40rem] max-2xl:w-[34rem] max-lg:w-[28rem] max-md:w-[28rem] max-sm:w-[28rem]"
              src="/images/projects/random-food/hands.png"
              alt="mão segurando celular"
            />
          </HandsAnimation>
        </div>
      </div>
      <div className="h-full grid grid-cols-2 py-20 px-40 font-Righteous max-xl:px-14 max-md:px-4 max-md:grid-cols-1 max-md:grid-rows-2 max-md:py-10">
        <div className="grid col-start-1 content-center max-md:row-start-2 max-md:mt-10">
          <h1 className="text-5xl text-gray-700 max-2xl:text-4xl max-lg:text-3xl">
            <span className="text-rosa">{"<h1>"}</span>ShieldRSA - Criptografia
            de mensagens de texto.
            <span className="text-rosa">{"<h1>"}</span>
          </h1>
          <br></br>
          <p className="font-Poppins font-semibold text-3xl text-azul max-2xl:text-2xl max-lg:text-xl max-sm:text-gray-700">
            Gere suas próprias chaves privadas e públicas, e proteja suas
            mensagens com a tecnologia RSA.
          </p>
          <div className="mt-5 text-md text-gray-600">
            <div className="space-x-5 underline decoration-azul max-lg:space-x-2">
              <span className="hover:underline decoration-cinza">Python</span>
              <span className="hover:underline decoration-cinza">Tkinter</span>
            </div>
          </div>
          <div className="space-x-4 mt-10">
            <a
              className="button--black"
              href="https://github.com/DatNeres/ShieldRSA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span> <button>GITHUB</button>
            </a>
            <button className="button--blue" onClick={scrollToTop}>
              <span></span>
              <Link to="/ShieldRSA">INICIAR</Link>
            </button>
          </div>
        </div>
        <div className="flex justify-end col-start-2 mr-[-13rem] mt-[2rem] max-xl:mr-[-6rem] max-md:col-start-1 max-md:row-start-1 max-lg:mt-0 max-md:mr-[-2rem] max-md:mt-0">
          <HandsAnimation animationType="rightToLeft">
            <img
              className="h-[44rem] max-2xl:h-[32rem] max-xl:h-[28rem] max-lg:h-[20rem] max-md:h-[22rem]"
              src="/images/projects/ShieldRSA/hands.png"
              alt="mão segurando celular"
            />
          </HandsAnimation>
        </div>
      </div>
    </div>
  );
}
export default Projects;
