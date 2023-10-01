import HandsAnimation from "../UI/HandsAnimation";

function Projects() {
  return (
    <div>
      <div className="px-40 max-xl:px-14 max-sm:px-4">
        <h1
          id="projects"
          className="font-Righteous  text-9xl text-black mt-28 max-lg:text-8xl max-md:text-7xl max-sm:text-7xl">
          projects <span className="text-azul">{"()"}</span>
        </h1>
      </div>
      <div className="h-full grid grid-cols-2 mt-20 py-5 px-40 font-Righteous max-xl:px-14 max-md:px-4 max-md:grid-cols-1 max-md:grid-rows-2 max-md:py-10">
        <div className="col-start-1 text-azul max-md:row-start-2">
          <h1 className="text-5xl text-gray-700 max-2xl:text-4xl max-lg:text-3xl">
            <span className="text-rosa">{"<h1>"}</span>GRUD - Painel de controle
            de alunos<span className="text-rosa">{"<h1>"}</span>
          </h1>
          <br></br>
          <p className="text-3xl max-2xl:text-2xl max-lg:text-xl">
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
          <a className="button--github" href="https://github.com/DatNeres" target="_blank" rel="noopener noreferrer"><span></span>GITHUB</a>
            <a
              className="button--start"
              href="./Components/grud-painel/index.html">
              <span></span>INICIAR
            </a>
          </div>
        </div>
        <div className="flex justify-end col-start-2 mr-[-11rem] mt-[-6rem] max-md:col-start-1 max-md:mr-[-2rem]">
          <HandsAnimation>
            <img
              className=" w-[32rem] max-lg:w-[28rem] max-lg:mt-[6rem] max-md:w-[28rem] max-sm:w-[20rem]"
              src="/images/projects/grud-painel/hands.png"
              alt="mão segurando celular"
            />
          </HandsAnimation>
        </div>
      </div>

      <div className="h-full grid grid-cols-2  py-20 px-40 font-Righteous max-xl:px-14 max-md:px-4 max-md:grid-cols-1 max-md:grid-rows-2 max-md:py-10">
        <div className="flex justify-start row-start-1 col-start-1 ml-[-11rem] mt-[-7rem] max-xl:ml-[-4rem] max-md:row-start-1 max-lg:mt-0 max-md:ml-[-2rem] max-md:mt-[-6rem] max-sm:mt-0 ">
          <HandsAnimation>
            <img
              className="h-[48rem] max-2xl:h-[40rem] max-lg:h-[30rem] max-md:h-[30rem]"
              src="/images/projects/chat-bot/hands.png"
              alt="mão segurando celular"
            />
          </HandsAnimation>
        </div>
        <div className="grid col-start-2 content-center text-azul max-md:col-start-1 max-md:row-start-2 max-md:mt-10">
          <h1 className="text-5xl text-gray-700 max-2xl:text-4xl max-lg:text-3xl">
            <span className="text-rosa">{"<h1>"}</span>CHAT-BOT: Elly é uma IA
            totalmente interativa.
            <span className="text-rosa">{"<h1>"}</span>
          </h1>
          <br></br>
          <p className="text-3xl max-2xl:text-2xl max-lg:text-xl">
            Baseado na OPEN IA.<br></br>
            Converse sobre tudo e optenha resposta de tudo, Elly é uma IA
            alimenta pelo chat-GPT 3.5 Turbo.
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
          <a className="button--github" href="https://github.com/DatNeres" target="_blank" rel="noopener noreferrer"><span></span>GITHUB</a>
            <a
              className="button--start"
              href="./Components/grud-painel/index.html"
              rel="noopener">
              <span></span>INICIAR
            </a>
          </div>
        </div>
      </div>

      <div className="h-full grid grid-cols-2 py-20 px-40 font-Righteous max-xl:px-14 max-md:px-4 max-md:grid-cols-1 max-md:grid-rows-2 max-md:py-0">
        <div className="col-start-1 text-azul max-md:row-start-2 max-md:mt-10 max-sm:mt-0">
          <h1 className="text-5xl text-gray-700 max-2xl:text-4xl max-lg:text-3xl">
            <span className="text-rosa">{"<h1>"}</span>RANDOMS FOOD -<br></br>
            Escolhe um tipo de comida para você de forma aleatória.
            <span className="text-rosa">{"<h1>"}</span>
          </h1>
          <br></br>
          <p className="text-3xl max-2xl:text-2xl max-lg:text-xl">
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
            <a className="button--github" href="https://github.com/DatNeres" target="_blank" rel="noopener noreferrer"><span></span>GITHUB</a>
            <a className="button--start" href="./Components/grud-painel/index.html" target="_blank" rel="noopener noreferrer"><span></span>INICIAR</a>
          </div>
        </div>
        <div className="flex justify-end col-start-2 mr-[-11rem] mt-[4rem] max-md:col-start-1 max-md:mr-[-2rem]">
          <HandsAnimation>
            <img
              className=" w-[40rem] max-2xl:w-[34rem] max-lg:w-[28rem] max-md:w-[28rem] max-sm:w-[24rem]"
              src="/images/projects/random-food/hands.png"
              alt="mão segurando celular"
            />
          </HandsAnimation>
        </div>
      </div>
    </div>
  );
}
export default Projects;
