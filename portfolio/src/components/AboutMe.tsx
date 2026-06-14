import { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/aboutme.png";

export function AboutMe() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleRef.current && entry.isIntersecting) {
            setTitleVisible(true);
          }
          if (entry.target === textRef.current && entry.isIntersecting) {
            setTextVisible(true);
          }
          if (entry.target === imgRef.current && entry.isIntersecting) {
            setImgVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-me" className="bg-silver text-black px-6 md:px-16 lg:px-48 py-[70px]">
      <h2
        ref={titleRef}
        className={`text-4xl font-bold text-center transition-all duration-700 ${
          titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
        }`}
      >
        About Me
      </h2>

      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <div
          ref={textRef}
          className={`md:w-1/2 text-[18px] leading-relaxed transition-all duration-700 ${
            textVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          Full-Stack Developer focused on creating scalable web applications
          using .NET and Angular. My stack includes C#, Java, databases like MS
          SQL, and tools like Docker. I write clean code, design efficient APIs,
          and explore the world of AI by developing autonomous AI agents. I also
          spend my time actively co-developing an open-source project for a
          foundation, which helps me grow as a team player and engineer.
        </div>

        <div
          ref={imgRef}
          className={`md:w-1/2 aspect-[4/3] bg-cover bg-center rounded-xl transition-all duration-700 ${
            imgVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
          style={{ backgroundImage: `url(${aboutImg})` }}
        />
      </div>
    </section>
  );
}
