import { createRef, useState } from "react";

function IAInimigoOuAmigo() {
  const pRef = createRef();
  const [isVisible, setIsVisible] = useState(true);
  const readmore = () => {
    pRef.current.classList.remove("h-60");
    pRef.current.classList.add("h-auto");
    setIsVisible(false);
  };
  return (
    <>
      <h1 className="text-7xl text-verde max-sm:text-5xl">
        A Inteligência Artificial: Amiga ou Inimiga?
      </h1>
      <h2 className="text-3xl max-sm:text-xl">
        Como a IA alavancou meu progresso de estudo e trouxe mais igualdade no
        ensino.
      </h2>
      <div className="flex flex-row self-end justify-self-center space-x-2 h-20 mr-10">
        <img
          className="w-10 h-10 rounded-full  border-2 border-white"
          src="/images/main/profile/silvio.jpg"
        ></img>
        <h3 className="text-md text-rosa mt-2">Silvio Neres - 13/05/2023</h3>
      </div>
      <div className="flex flex-col h-60 overflow-y-clip" ref={pRef}>
        <p className="text-xl">
          É comum que as novidades sejam inicialmente vistas com desconfiança.
          Com a introdução rápida e acelerada da inteligência artificial (IA),
          muitos alarmistas previram o fim de várias profissões, incluindo a
          programação. Alguns influenciadores da área, como Lucas Montano,
          mostraram em seus canais que é possível gerar um aplicativo
          inteiramente construído por meio do Chat-GPT. O poder de processamento
          e automação de máquinas sempre superará a capacidade humana. Durante
          todas as revoluções industriais, testemunhamos o desaparecimento de
          empregos, mas também o surgimento de novas demandas. Não há muito a
          ser feito quando se trata de evolução tecnológica. Para alguns, isso
          causa preocupação: "O que farei se a IA tomar meu emprego?" Para
          outros, a pergunta é: "Como posso usar isso a meu favor? Quais novas
          demandas serão geradas?" <br></br>
          <br></br>
          Acredito que as IAs trouxeram uma democracia diferente, com
          aplicativos e ferramentas que permitem a qualquer um obter resultados
          satisfatórios gratuitamente em pesquisas, criação de imagens, vídeos,
          música, texto, entre outros. Vivemos atualmente uma era de consumo
          excessivo de conteúdo digital, e as IAs surgiram para atender a essa
          demanda.
          <br></br>
          <br></br>
          Falando por experiência própria, no início dos meus estudos em
          desenvolvimento web, eu frequentemente ficava preso em uma linha de
          código. Os tutoriais gratuitos ensinavam a aplicar aquilo em um
          contexto específico, mas e se eu quisesse aplicá-lo de forma
          diferente? Isso muitas vezes resultava em horas perdidas assistindo a
          vídeos, lendo blogs e participando de fóruns que exigiam autorização
          para liberar minhas dúvidas. Quando comecei a usar a IA para me
          explicar o que estava fazendo de errado e me permitir fazer quantas
          perguntas forem necessárias para entender, minha evolução foi
          significativamente mais rápida. Iniciantes frequentemente passam por
          isso, onde um simples erro de digitação, como uma vírgula no lugar de
          um ponto, pode quebrar todo o código. <br></br>
          <br></br>
          Por fim, fazer uso consciente da IA, evitando simplesmente copiar e
          colar, e, em vez disso, usá-la para obter explicações em vez de
          códigos prontos, foi uma ótima maneira de aprimorar meu aprendizado em
          programação. Não há nada que possamos fazer para deter a evolução
          tecnológica, e essa geralmente traz maravilhas consigo. Trabalhe com
          ela, ou para ela, ou talvez precise juntar seus paus e pedras e
          preparar-se para o combate.
        </p>
        <img
          className="mt-20"
          src="\images\blog\homem_vs_maquina.png"
          alt="Homem lutando contra uma máquina com paus e pedras"
        ></img>
        <h3 className="self-end mt-2">
          Imagem gerada pelo DALL-E, IA gerador de imagens da OpenAI.
        </h3>
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

export default IAInimigoOuAmigo;
