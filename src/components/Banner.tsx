import { TypeAnimation } from "react-type-animation";
import { Navigaton } from "./NavigationList";
import { label } from "three/examples/jsm/nodes/Nodes.js";

function Banner() {
  return (
    <>
      <section className="h-[90vh] w-full flex ">
        <div className="w-1/2 h-full flex flex-col justify-center items-end">
          <div>
            <TypeAnimation
              sequence={["You're welcome", 1000, "Data Structure", 4000]}
              wrapper="h1"
              speed={50}
              className="text-4xl text-primary font-bold italic tracking-wider my-5"
              repeat={Infinity}
            />
            <p className="text-2xl text-black my-5 max-w-[55%] text-justify leading-9">
              Uma maneira simples e interativa de aprender estrutura de dados
            </p>
            <a href="#time-line">
              <button className=" w-[35%] h-[20%] bg-primary text-2xl bt-clip-path">
                Começar jornada
              </button>
            </a>
            <Navigaton
              elements={[
                { label: "Ponteiros", href: "as" },
                { label: "Listas", href: "as" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
