function Header() {
    return (
    <header className="fixed z-10 w-full h-16 flex items-center justify-between px-20 backdrop-blur-sm max-md:px-10">
        <div className="my-10 flex flex-row space-x-2">
            <div className="bg-verde h-5 w-5 rounded-full"></div>
            <div className="bg-rosa h-5 w-5 rounded-full"></div>
            <div className="bg-azul h-5 w-5 rounded-full"></div>
        </div>
        <nav className=" space-x-12 text-rosa font-Righteous text-2xl max-lg:text-xl max-lg:space-x-6">
            <a className="max-sm:hidden" href="#about-me">
            about me
            </a>
            <a className="max-sm:hidden" href="#projects">
            projects
            </a>
            <a className="max-sm:hidden" href="#blog">
            blog
            </a>
            <a
            className="text-verde max-sm:text-2xl max-sm:text-white"
            href="#contact-me">
            contact me
            </a>
        </nav>
    </header>
    );
}
export default Header;
