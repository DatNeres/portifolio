import { createRef, useState } from "react";

function MinhaJornadaInicial() {
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
        Minha Jornada em Busca da Excelência Profissional na Tecnologia.
      </h1>
      <h2 className="text-3xl max-sm:text-xl">
        Como tento me destacar e evoluir na minha área, considerando a alta
        concorrência e a busca constante por excelência em um campo repleto de
        talentos e novidades?
      </h2>
      <div className="flex flex-row self-end justify-self-center space-x-2 h-20 mr-10">
        <img
          className="w-10 h-10 rounded-full  border-2 border-white"
          src="/images/main/profile/silvio.jpg"
        ></img>
        <h3 className="text-md text-rosa mt-2">Silvio Neres - 29/09/2023</h3>
      </div>
      <div className="h-60 overflow-y-hidden" ref={pRef}>
        <p className="text-xl">
          Independentemente da profissão, um profissional é, antes de tudo, uma
          pessoa. Quero enfatizar que, apesar de o quão competente você seja em
          sua área de atuação, seu trabalho será feito por pessoas, ao redor de
          pessoas e para pessoas. Isso ressalta a importância das{" "}
          <spam className="underline decoration-verde">
            habilidades interpessoais
          </spam>
          , que são tão cruciais quanto suas habilidades técnicas. Mantendo isso
          em mente, meu progresso profissional começa com a maneira como me
          relaciono com as pessoas. Comunicação, empatia, colaboração, resolução
          de problemas e gestão de conflitos são igualmente fundamentais em
          relação às minhas habilidades técnicas com a programação. Tive a sorte
          de perceber isso cedo, graças a oportunidades de trabalho e interações
          com colegas, o que me permitiu compreender que cada indivíduo possui
          sua própria história e que o mundo é muito mais “redondo” que minha
          própria bolha. <br></br>
          <br></br>
          Depois de compreender a importância das habilidades sociais, me
          deparei com um mundo de infinitas possibilidades e evolução quase que
          constantes. Para alguém na área de tecnologia, há tantos caminhos
          possíveis que a pergunta "Você já sabe em qual área específica deseja
          entrar?" pode gerar uma ansiedade desnecessária. Para alguns, a
          resposta pode ter surgido antes mesmo de entrar na faculdade ou no
          primeiro contato com uma linguagem de programação já para outros ainda
          não. Como é sobre mim, essa resposta veio consideravelmente cedo.
          Embora o desenvolvimento web e mobile é algo que me fascina e dedico
          meu tempo livre. Estou ciente de que existem outras possibilidades. A
          questão central deste parágrafo é como lidar com a
          <spam className="underline decoration-azul"> ansiedade</spam> por algo
          que ainda está no horizonte e depende do tempo e das oportunidades
          para serem evoluídas.<br></br>
          <br></br>
          Quanto ao desenvolvimento web, meu maravilhoso portfólio reflete esta
          descoberta (com “maravilhoso” quero dizer: por ser o resultado da luta
          contra o medo de não ser capaz ou da procrastinação. E não, por ter as
          melhores linhas de códigos, afinal, não possuir o temível ego que
          atinge alguns programadores é uma das minhas principais metas). Depois
          desse pequeno parênteses, um dos aspectos que enriqueceu minha
          trajetória é a busca diária por informações relevantes. Manter feeds
          de redes sociais voltados para tecnologia é uma das maneiras mais
          eficazes de se manter atualizado com informações importantes e
          tutoriais. Além disso, acompanhar profissionais renomados na área tem
          sido um recurso valioso para minha aprendizagem. Existem excelentes
          desenvolvedores dispostos a{" "}
          <spam className="underline decoration-verde">
            compartilhar seu conhecimento e experiência de forma gratuita.
          </spam>
          <br></br>
          <br></br>
          De modo geral, reconheço que tudo faz parte do processo, e os caminhos
          podem ser desafiadores. A ansiedade por etapas que ainda não estão
          claras nem sempre é produtiva. O estudo e as boas práticas são uma
          constante, e influências positivas desempenham um papel crucial em meu
          crescimento (expresso minha gratidão a profissionais como Eduardo
          Torres, uma inspiração para mim na área DEV). Manter a humildade é
          essencial, pois sempre haverá alguém mais experiente e aceitar
          críticas é fundamental para a
          <spam className="underline decoration-azul"> evolução.</spam> Olhando
          para o futuro, almejo ser um profissional capacitado e confiante em
          minha área de atuação, capaz de orientar novos desenvolvedores, assim
          como fui orientado por muitos.
        </p>
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

export default MinhaJornadaInicial;
