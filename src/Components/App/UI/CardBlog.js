function CardBlog(props) {
  return (
    <div className="py-10 max-lg:px-10">
      <div class="flex-col relative flex w-80 h-72 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:scale-105 cursor-pointer caret-slate-700 max-xl:w-[15rem]">
        <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg shadow-gray-600 max-xl:h-[7rem]">
          <img src={props.src} alt="Outros blogs que escrevi"></img>
        </div>
        <div class="p-6">
          <h2 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {props.title}
          </h2>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {props.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;
