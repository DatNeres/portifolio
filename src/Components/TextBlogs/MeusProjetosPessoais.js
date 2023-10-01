import { createRef, useState } from "react";

function MeusProjetosPessoais() {
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
        Um pouco sobre os batidores dos meus projetos pessoais.
      </h1>
      <h2 className="text-3xl max-sm:text-xl">
        Críterios, tecnologias, sufocos e frustações como é aprender fazendo
        projetos na prática.
      </h2>
      <div className="flex flex-row self-end justify-self-center space-x-2 h-20 mr-10">
        <img
          className="w-10 h-10 rounded-full  border-2 border-white"
          src="/images/main/profile/silvio.jpg"
        ></img>
        <h3 className="text-md text-rosa mt-2">Silvio Neres - 23/10/2023</h3>
      </div>
      <div className="h-60 overflow-y-hidden" ref={pRef}>
        <p className="text-xl">
          Meu primeiro contato com o desenvolvimento web ocorreu no início de
          2017, quando comecei a trabalhar com HTML e CSS. Naquela época, os
          sites tinham um visual quadrado e a responsividade deixava a desejar.
          Parecia que eu tinha viajado no tempo, criando páginas com uma
          estética antiquada e desconexa. No entanto, mesmo em 2017, meu
          primeiro passo no mundo do desenvolvimento web era algo fascinante.
          <br></br>
          <br></br>
          Por razões da vida, não pude continuar meus estudos naquele ano, mas
          deixarei esse assunto de lado por enquanto.<br></br>
          <br></br>
          Agora, em 2023, estou de volta com uma energia renovada e mais
          preparado do que nunca. Estabeleci a meta de concluir e lançar um
          portfólio até o final deste ano. O que você está explorando agora é o
          resultado de muita dedicação e da superação de obstáculos. Meu
          objetivo é usá-lo como um espelho da minha identidade e do meu
          trabalho, marcando o início da minha carreira profissional.<br></br>
          <br></br>
          No desenvolvimento web, existem inúmeras maneiras de construir um
          projeto. As tecnologias que escolhi para minha jornada são HTML, CSS,
          Tailwind CSS, React e JavaScript. Meu objetivo é me tornar um
          desenvolvedor full stack, e planejo incorporar o Node.js e TypeScript.{" "}
          <br></br>
          <br></br>
          PAINEL DE ALUNO, foi meu primeiro projeto, ele foi construído usando
          CSS e JAVASCRIPT PURO, foi também o que me trouxe segurança em
          desenvolver qualquer coisa nessa linguagem, mesmo que embora não
          conheça absolutamente tudo, sou capaz de aprender uma nova feature com
          mais facilidade. No início não está tão por dentro de funções anônimas
          e arrow function, então meu projeto estava cheio de funções com nomes
          (tava até sem criativamente em alguns momentos) Mas pude voltar e
          corrigi-las depois de um tempo, também tive uma certa resistência em
          entender que precisava garantir uma boa lógica tendo em mente que o js
          vai ler de cima para baixo e que não vai acessar uma variável se ela
          for exclusiva de outra função. Houve muitas outras circunstâncias mas
          não irei tão afundo, mas o JS permitiu entender como a lógica é
          fundamental e me mostrou que sou capaz de aprender qualquer nova
          linguagem (pude sentir isso durante as aulas de python na faculdade,
          pegava tudo rápido e mais fácil)<br></br>
          <br></br>
          RANDOMSFOOD, foi o projeto mais complicado e divertido para mim, eu
          gostei muito da parte visual e como tudo é vivo e animado, mas tive
          uma barreira enorme em compreender o React de fato, de como fazer as
          coisas se conectarem se cada componente tem sua própria realidade,
          precisei compreender e evoluir o conceito de Props e Context API este
          eu tive certa dificuldade, mas gostei muita de usar useState,
          useEffect e como os componentes são renderizados. CHAT-ELLY, é na
          verdade algo simples de ser fazer, basicamente um design maneiro e um
          chat alimentado pela API do chat-gbt, a questão é que por ter uma
          animação em boa qualidade, fez com que o projeto pesasse um pouco, mas
          como o foco dele não é uso diário foi algo que não me preocupei tanto.
          <br></br>
          <br></br>
          Cada projeto me ajudou muito a melhorar minhas noções de programação,
          por a mão na massa é realmente a melhor forma de desenvolver suas
          habilidades. Algo importante é ter em mente que você deve entender
          como a linguagem funciona de modo geral e suas particulares, mas que é
          muito custoso saber exatamente o que cada função faz, eu mesmo me
          deparo com coisas que nunca imaginei que a linguagem tinha, mas que ao
          ir ler a documento era capaz de compreender tranquilamente.
        </p>
      </div>
      {isVisible && (
        <div className="relative flex flex-col backdrop-blur-sm w-[50rem] h-[6rem] -top-24 -left-2 max-xl:w-[40rem] max-sm:w-[20rem]">
          <button className="button--start self-center" onClick={readmore}>
            Continuar ⬇
          </button>
        </div>
      )}
    </>
  );
}

export default MeusProjetosPessoais;
