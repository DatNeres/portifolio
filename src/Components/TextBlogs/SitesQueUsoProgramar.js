import { createRef, useState } from "react";

function SitesQueUsoProgramar() {
  const pRef = createRef();
  const [isVisible, setIsVisible] = useState(true);
  const readmore = () => {
    pRef.current.classList.remove("h-60");
    pRef.current.classList.add("h-auto");
    setIsVisible(false);
  };
  return (
    <>
      <h1 className="text-7xl text-verde break-words max-sm:text-5xl">
        Sites que uso na programa web.
      </h1>
      <h2 className="text-3xl max-sm:text-xl">
        Esta lista contém alguns sites relevantes para iniciantes como eu, e que
        irão ajudar muito no desenvolimento web principamente a parte de design.
      </h2>
      <div className="flex flex-row self-end justify-self-center space-x-2 h-20 mr-10">
        <img
          className="w-10 h-10 rounded-full  border-2 border-white"
          src="/images/main/profile/silvio.jpeg"
        ></img>
        <h3 className="text-md text-rosa mt-2">Silvio Neres - 05/09/2023</h3>
      </div>
      <div className="h-60 overflow-y-hidden space-y-16" ref={pRef}>
        <div className="space-y-8">
          <a
            href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-3xl text-rosa">
              Um guia completo sobre flexbox
            </h3>
            <img
              className="mt-20 rounded-xl"
              src="\images\blog\flex_box.png"
              alt="Tutorial sobre flex-box"
            ></img>
          </a>
          <p>
            Este guia completo explica tudo sobre o flexbox, focando em todas as
            diferentes propriedades possíveis para o elemento pai (o flex
            container) e os elementos filhos (os flex items). Também inclui
            histórico, demonstrações, padrões e um gráfico de suporte do
            navegador.
          </p>
        </div>
        <div className="space-y-8">
          <a
            href="https://fonts.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-3xl text-rosa">Google Fonts</h3>
            <img
              className="mt-20 rounded-xl"
              src="\images\blog\google_fonts.png"
              alt="Tutorial sobre flex-box"
            ></img>
          </a>
          <p>Uma gama de fontes fornecidas gratuitamente pelo Google.</p>
        </div>
        <div className="space-y-8">
          <a
            href="https://webgradients.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-3xl text-rosa">WebGradients</h3>
            <img
              className="mt-20 rounded-xl"
              src="\images\blog\webgradients.png"
              alt="Tutorial sobre flex-box"
            ></img>
          </a>
          <p>
            uma coleção gratuita de 180 gradientes lineares que você pode usar
            como pano de fundo de conteúdo em qualquer parte do seu site.
          </p>
        </div>
        <div className="space-y-8">
          <a
            href="https://storyset.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-3xl text-rosa">Storyset</h3>
            <img
              className="mt-20 rounded-xl"
              src="\images\blog\storyset.png"
              alt="Tutorial sobre flex-box"
            ></img>
          </a>
          <p>
            Impressionantes ilustrações personalizáveis ​​gratuitas para o seu
            próximo projeto Personalize, anime e baixe nossas ilustrações para
            criar landing pages, aplicativos ou apresentações incríveis!
          </p>
        </div>
        <div className="space-y-8">
          <a
            href="https://colorhunt.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-3xl text-rosa">Color Hunt</h3>
            <img
              className="mt-20 rounded-xl"
              src="\images\blog\color_hunt.png"
              alt="Tutorial sobre flex-box"
            ></img>
          </a>
          <p>
            Paletas de cores para designers e artistas Descubra as mais novas
            paletas escolhidas a dedo do Color Hunt
          </p>
        </div>
        <div className="space-y-8">
          <a
            href="https://icons8.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-3xl text-rosa">Icons8</h3>
            <img
              className="mt-20 rounded-xl"
              src="\images\blog\icons8.png"
              alt="Tutorial sobre flex-box"
            ></img>
          </a>
          <p>
            São centenas de milhares de icones animados e estáticos, e você pode
            usar de forma gratuita desde que atribua os devidos créditos
          </p>
        </div>
        <div className="space-y-8">
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-3xl text-rosa">Dribbble</h3>
            <img
              className="mt-20 rounded-xl"
              src="\images\blog\dribbble.png"
              alt="Tutorial sobre flex-box"
            ></img>
          </a>
          <p>
            Centenas de trabalhos voltados pro UI/UX que irão te inspirar na
            hora de desenvolver seus próprios trabalhos.
          </p>
        </div>
        <div className="space-y-8">
          <a
            href="https://devsdash.com/tools/css-button-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-3xl text-rosa">DevsDash</h3>
            <img
              className="mt-20 rounded-xl"
              src="\images\blog\devsdash.png"
              alt="Tutorial sobre flex-box"
            ></img>
          </a>
          <p>
            Gerador de botões CSS, prático e rápido, também usei nos projetos.
          </p>
        </div>
        <div className="space-y-8">
          <a
            href="https://getcssscan.com/css-box-shadow-examples"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-3xl text-rosa">Get Css Scan</h3>
            <img
              className="mt-20 rounded-xl"
              src="\images\blog\css_scan.png"
              alt="Tutorial sobre flex-box"
            ></img>
          </a>
          <p>São 93 exemplos que você pode copiar de sombras no css.</p>
        </div>
        <div className="space-y-8">
          <a href="https://3dbay.io" target="_blank" rel="noopener noreferrer">
            <h3 className="text-3xl text-rosa">3D Bay</h3>
            <img
              className="mt-20 rounded-xl"
              src="\images\blog\3dbay.png"
              alt="Tutorial sobre flex-box"
            ></img>
          </a>
          <p>
            Este site foi uma das melhores descobertas, e usei por todo meu
            projeto, sendo totalmente gratuito
          </p>
        </div>
      </div>
      {isVisible && (
        <div className="relative flex flex-col backdrop-blur-sm w-[50rem] h-[6rem] -top-24 -left-2 max-xl:w-[40rem] max-sm:w-[22rem]">
          <button className="button--blue self-center" onClick={readmore}>
            Continuar ⬇
          </button>
        </div>
      )}
    </>
  );
}

export default SitesQueUsoProgramar;
