import sportReserve from "../assets/sport_reserve.png";
import planYourTrip from "../assets/plan_your_trip.png";
import { FaBook, FaPlayCircle } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

export function Projects() {
  const titleRef = useRef(null);
  const sportRef = useRef(null);
  const tripRef = useRef(null);

  const [titleVisible, setTitleVisible] = useState(false);
  const [sportVisible, setSportVisible] = useState(false);
  const [tripVisible, setTripVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleRef.current && entry.isIntersecting) {
            setTitleVisible(true);
          }
          if (entry.target === sportRef.current && entry.isIntersecting) {
            setSportVisible(true);
          }
          if (entry.target === tripRef.current && entry.isIntersecting) {
            setTripVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (sportRef.current) observer.observe(sportRef.current);
    if (tripRef.current) observer.observe(tripRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col items-center bg-gray-500 px-6 md:px-20 lg:px-48 py-[70px]"
    >
      <h2
        ref={titleRef}
        className={`text-4xl text-white font-bold text-center transition-all duration-700 ${
          titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
        }`}
      >
        
        Projects</h2>
      <div ref={sportRef} className={`w-full bg-white rounded-lg mt-12 p-6 text-black transition-all duration-700 ${
          sportVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[40%] min-h-[200px]">
            <img
              src={sportReserve}
              alt="Sport Reserve"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:w-[60%] px-0 md:px-6 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">Sport Reserve</h3>

            <p className="text-lg">
              A sports event management platform that enables users to discover
              races, register for events, and manage their sports calendar.
              Built with a microservices architecture, it features role-based
              access control, asynchronous email processing, centralized API
              routing, and optimized data storage tailored to different business
              requirements.
            </p>

            <div className="flex flex-wrap gap-2 my-4">
              {[
                ".NET / C#",
                "RabbitMQ",
                "MSSQL",
                "MongoDB",
                "REST API",
                "Docker",
                "Angular",
                "Angular Material",
                "ngx-bootstrap",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 px-3 py-1 rounded-full font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/ArkadiuszSchabowski/SportReserve"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBook className="text-5xl hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div ref={tripRef} className={`w-full bg-white rounded-lg mt-12 p-6 text-black transition-all duration-700 ${
          tripVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[40%] min-h-[200px]">
            <img
              src={planYourTrip}
              alt="Plan Your Trip"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:w-[60%] px-0 md:px-6 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">Plan Your Trip</h3>

            <p className="text-lg">
              An AI-powered travel planning platform that generates personalized
              day-by-day itineraries based on user preferences, destinations,
              and travel details. The system integrates external flight data
              sources and intelligent recommendation logic to create optimized
              travel plans tailored to each trip.
            </p>

            <div className="flex flex-wrap gap-2 my-4">
              {[
                "Java",
                "Spring Boot",
                "Gemini AI",
                "REST API",
                "Angular",
                "Angular Material",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 px-3 py-1 rounded-full font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex">
              <a
                href="https://github.com/ArkadiuszSchabowski/TripAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBook className="text-5xl hover:text-blue-500 transition-colors" />
              </a>

              <a
                className="pl-[20px]"
                href="https://plan-your-trip-ai.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPlayCircle className="text-5xl hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
