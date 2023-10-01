import ScaleAnimation from "../UI/ScaleAnimation";

function Introducion() {
  return (
    <ScaleAnimation>
      <div className="h-full w-full grid grid-cols-2 grid-rows-2 items-center justify-items-center py-32 font-Righteous max-md:grid-cols-1 max-md:grid-rows-3">
        <div className="flex col-start-1 row-start-1 mb-20 max-md:row-start-2 max-md:mb-0 ">
          <div className="space-y-3">
            <h1 className="text-verde text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-7xl max-sm:text-6xl">
              developer{"()"}
            </h1>
            <p className="text-5xl max-xl:text-4xl  max-lg:text-3xl">
              front end{" "}
              <span className="font-Roboto underline decoration-blue">&&</span>{" "}
              back end;<br></br>{" "}
              <span className="underline decoration-verde">clean</span> and{" "}
              <span className="underline decoration-rosa">efficient</span>
              <br></br>codes is the goal.
            </p>
          </div>
        </div>
        <div className="col-start-1 row-start-2 max-md:row-start-3 max-md:items-start max-md:mb-32">
          <div className="space-y-3">
            <h1 className="text-rosa text-8xl max-xl:text-7xl  max-lg:text-6xl max-md:text-7xl max-md:mr-32 max-sm:text-6xl">
              ui/ux{"{}"}
            </h1>
            <p className="text-5xl max-xl:text-4xl  max-lg:text-3xl">
              user{" "}
              <span className="underline decoration-verde">experience</span> is
              our <br></br> cornerstone, and...<br></br>
              <span className="underline decoration-rosa">cool</span> design.
            </p>
          </div>
        </div>

        <div className="col-start-2 row-span-2 max-md:col-start-1 max-md:row-span-1">
          <img
            className="w-[32rem] rounded-full shadow-2xl border-solid border-4 border-white max-xl:w-[28rem]  max-lg:w-[24rem] max-md:w-[20rem]"
            src="/images/main/profile/silvio-cartoon.gif"
            alt="Silvio Cartoon"
          ></img>
        </div>
      </div>
    </ScaleAnimation>
  );
}
export default Introducion;
