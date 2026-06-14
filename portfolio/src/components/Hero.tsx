import profile from "../assets/profile.avif";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <>
      <section id="hero" className="flex flex-col md:flex-row h-screen w-full">
        <div className="flex justify-end w-full  h-full min-h-[220px] md:min-h-0 bg-silver md:w-[300px] md:min-w-[300px] lg:w-[400px]" />

        <div
          className="flex flex-col items-center justify-center h-full min-h-[400px] bg-gray-500 text-center md:w-[calc(100%-300px)] md:rounded-bl-[25px] lg:rounded-bl-[25px]"
        >
          <div className="pt-[100px] md:pt-[200px] text-[36px] md:text-[26px] lg:text-[34px] md:ml-[40px]">
            Full-Stack Developer
          </div>

          <div className="text-center text-[46px] md:text-[40px] lg:text-[56px] pt-[5px] md:pt-[20px] md:ml-[40px] md:mr-[20px] lg:px-[200px]">
            Arkadiusz Schabowski
          </div>

          <div className="flex justify-center items-center w-[430px] h-[500px] mb-[20px] gap-6">
            <a
              href="https://linkedin.com/in/arkadiusz-schabowski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-[120px] p-[15px] hover:text-[#2196f3]" />
            </a>
            <a
              href="https://github.com/ArkadiuszSchabowski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-[120px] p-[15px] hover:text-[#2196f3]" />
            </a>
          </div>
        </div>
      </section>
      <div
        className="
        absolute left-1/2 -translate-x-1/2
          w-[300px] h-[300px]
          bg-center bg-no-repeat bg-contain
          bg-black
          border-[10px] border-gray-500
          rounded-[25px]
          top-[70px]
          md:w-[250px]
          md:h-[250px]
          lg:w-[350px]
          lg:h-[350px]
          md:left-[150px]
          lg:left-[300px]
          md:top-[200px]
          lg:top-[200px]
        "
        style={{
          backgroundImage: `url(${profile})`,
        }}
      />
    </>
  );
}
