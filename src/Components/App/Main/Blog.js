import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <div id="blog" className="px-40 max-xl:px-14 max-sm:px-4">
        <h1 className="font-Righteous text-9xl text-black mt-28 max-lg:text-8xl max-md:text-7xl max-sm:text-7xl">
          blog<span className="text-verde">{"[]"}</span>
        </h1>
      </div>
      <div className=" grid grid-cols-2 h-full grid-rows-1 space-y-12 pb-28 px-40 font-Righteous text-black max-xl:px-14 max-lg:pt-10 max-md:grid-cols-1 max-md:grid-rows-2 max-sm:px-4 ">
        <div className="flex flex-col col-start-1 row-start-1 w-3/4 justify-center items-start space-y-16 max-md:row-start-2 max-md:w-auto">
          <p className="text-azul text-3xl max-2xl:text-2xl max-lg:text-xl">
            O meu blog pessoal, é um pequeno espaço onde eu expresso minha
            opinião sobre algumas coisas que gosto relacionadas a este universo
            maravilhoso da tecnologia.
          </p>
          <button className="button--github self-end mr-6">
            <Link to="/Blog">ACESSAR</Link>
          </button>
        </div>
        <img
          className="col-start-2 row-start-1 w-[40rem] drop-shadow-2xl max-md:col-start-1 max-md:row-start-1 max-md:w-[28rem] max-md:self-start"
          src="/images/main/blog/blog.png"
          alt="background"
        />
      </div>
    </div>
  );
}
export default Blog;
