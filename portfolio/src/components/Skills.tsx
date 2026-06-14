import { useRef, useState, useEffect } from "react";

const skills = [
  { name: "C#", icon: "devicon-csharp-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: ".NET", icon: "devicon-dotnetcore-plain colored" },
  { name: "Angular", icon: "devicon-angular-plain colored angular-color" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "MS SQL", icon: "devicon-microsoftsqlserver-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "RabbitMQ", icon: "devicon-rabbitmq-original colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Azure", icon: "devicon-azure-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain colored" },
];

export function Skills() {
  const titleRef = useRef(null);
  const skillRef = useRef(null);

  const [titleVisible, setTitleVisible] = useState(false);
  const [skillVisible, setSkillVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleRef.current && entry.isIntersecting) {
            setTitleVisible(true);
          }
          if (entry.target === skillRef.current && entry.isIntersecting) {
            setSkillVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (skillRef.current) observer.observe(skillRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="w-full min-h-[200px] bg-gray-400 flex flex-col items-center justify-center"
    >
      <h2
        ref={titleRef}
        className={`text-black py-16 text-4xl font-bold text-center transition-all duration-700 ${
          titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
        }`}
      >
        Technologies and Tools
      </h2>

      <div
        ref={skillRef}
        className={`flex flex-wrap justify-center w-full pb-12 px-[50px] md:px-[75px] lg:px-[150px] transition-all duration-[2000ms] ease-out ${
          skillVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 scale-95 blur-[1px]"
        }`}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center w-[170px] h-[170px] m-5 text-black font-bold text-lg hover:bg-white transition bg-slate-100 rounded-[25px]"
          >
            <div className="flex items-center justify-center h-3/5 text-[80px] pt-5">
              <i className={skill.icon}></i>
            </div>

            <div className="flex items-center justify-center h-2/5 text-[22px] font-bold pt-2">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
