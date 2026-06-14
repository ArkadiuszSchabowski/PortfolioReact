export function Navbar() {
  return (
    <section>
      <div id="navbar " className="fixed
        w-[400px]
        h-[50px]
        left-1/2
        -translate-x-1/2
        flex
        justify-center
        items-center
        text-white
        bg-black
        rounded-md
        mt-[10px]
        z-[999]
        md:w-[550px]
        "
        >
        <a className="text-white font-bold px-[15px] py-[5px] no-underline text-[18px] hidden hover:text-[#1976d2] md:block md:text-[22px]" mat-menu-item href="#hero">
          Hero
        </a>
        <a className="flex text-white font-bold px-[15px] py-[5px] no-underline text-[18px] hover:text-[#1976d2] md:text-[22px]" href="#about-me">
          About Me
        </a>
        <a className="text-white font-bold px-[15px] py-[5px] no-underline text-[18px] hover:text-[#1976d2] md:text-[22px]" href="#projects">
          Projects
        </a>
        <a className="text-white font-bold px-[15px] py-[5px] no-underline text-[18px] hover:text-[#1976d2] md:text-[22px]" href="#skills">
          Skills
        </a>
        <a className="text-white font-bold px-[15px] py-[5px] no-underline text-[18px] hover:text-[#1976d2] md:text-[22px]" href="#contact">
          Contact
        </a>
      </div>
    </section>
  );
}
