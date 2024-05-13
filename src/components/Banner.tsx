import { TypeAnimation } from "react-type-animation";

function Banner() {
  return (
    <>
      <section className="h-[90vh] w-full flex bg-banner bg-no-repeat bg-cover">
        <div className="w-1/2 h-full flex flex-col justify-center items-end">
          <div>
            <TypeAnimation
              sequence={["You're welcome", 1000, "Data Structure", 4000]}
              wrapper="h1"
              speed={50}
              className="text-4xl text-primary font-bold italic tracking-wider my-5"
              repeat={Infinity}
            />
            <p className="text-2xl text-white my-5 max-w-[55%] text-justify leading-9">
              Uma maneira simples e interativa de aprender estrutura de dados
            </p>
            <a href="#time-line">
              <button className=" w-[35%] h-[30%] bg-secondary text-2xl bt-clip-path">
                Começar jornada
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
