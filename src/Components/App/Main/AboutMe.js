function AboutMe() {
  return (
    <div className="h-full grid grid-cols-1 justify-items-start px-40 space-y-8 font-Righteous max-xl:px-14 max-sm:px-4">
      <div>
        <h1
          id="about-me"
          className="col-start-1 row-start-1 font-Righteous text-9xl text-black mt-20 max-lg:text-8xl max-md:text-7xl max-sm:text-6xl"
        >
          about me<span className="text-rosa">{"{}"}</span>
        </h1>
      </div>
      <div className="flex flex-row col-start-1 font-medium">
        <img
          className="col-start-1 row-start-2 w-32 rounded-full shadow-lg border-solid border-2 border-white"
          src="/images/main/profile/silvio.jpg"
          alt="Silvio"
        ></img>
        <div className="self-center ml-10">
          <h2 className="text-azul text-4xl">SILVIO NERES</h2>
          <h3 className=" text-2xl text-rosa">STUDENT</h3>
        </div>
      </div>
      <p className="col-start-1 text-2xl font-Poppins">
        Tenho 25 anos, estudante de Ciências da Computação, animado em explorar
        novas línguas frameworks e libs. Acredito que a tecnologia é um meio
        para melhorar a vida das pessoas.<br></br>
        <span className="text-azul">
          PESSOAS {"->"}TECNOLOGIA{"->"}PESSOAS
        </span>
        <br></br>
        Priorizo a ética e responsabilidade em minha jornada, buscando criar
        soluções criativas para problemas reais. O objetivo é usar a tecnologia
        para empoderar e melhorar o cotidiano das pessoas, contribuindo para um
        futuro melhor e mais inclusivo.
      </p>
      <div className="col-start-1">
        <h2 className="text-3xl text-azul">MY SKILLS</h2>
        <br></br>
        <div className="space-x-5 text-2xl underline decoration-verde cursor-pointer max-sm:text-xl max-sm:space-x-2">
          <span className="hover:underline decoration-azul">JAVASCRIPT</span>
          <span className="hover:underline decoration-rosa">REACT</span>
          <span className="hover:underline decoration-cinza">TAILWINDCSS</span>
        </div>
        <div className="space-x-5 text-2xl underline decoration-verde cursor-pointer max-sm:text-xl max-sm:space-x-2">
          <span className="hover:underline decoration-azul">CSS</span>
          <span className="hover:underline decoration-cinza">HTML</span>
          <span className="hover:underline decoration-azul">PHOTOSHOP</span>
          <span className="hover:underline decoration-rosa">FIGMA</span>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
