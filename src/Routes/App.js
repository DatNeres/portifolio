import "../App.css";
import Header from "../Components/App/Main/Header";
import Introducion from "../Components/App/Main/Introducion";
import AboutMe from "../Components/App/Main/AboutMe";
import Projects from "../Components/App/Main/Projects";
import Blog from "./Blog";
import ContactMe from "../Components/App/Main/ContactMe";

function App() {
  return (
    <body>
      <Header />
      <main>
        <Introducion />
        <div className="shadow-2xl rounded-3xl text-gray-600 mx-12 -mt-20 bg-white overflow-x-clip max-md:-mt-40 max-sm:mx-2">
          <AboutMe />
          <Projects />
          <Blog />
        </div>
        <ContactMe />
      </main>
    </body>
  );
}

export default App;
