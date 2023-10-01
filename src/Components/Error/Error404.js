function Error404() {
    return(
        <div className="flex flex-col justify-center items-center w-screen h-screen space-y-10 font-Righteous">
            <img className="w-[30rem]" src="/images/main/error/404.png" alt="Página Não Encontrada"></img>
            <h1 className="text-8xl">EITA! Erro 404</h1>
            <p className="text-4xl">Retorne para página INICIAL!</p>
            <button className="button--start"><a href="https://silvioneres.dev">RETORNAR</a></button>            
        </div>
        )
    }
    export default Error404;