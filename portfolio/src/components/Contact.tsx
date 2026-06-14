import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { send } from "../_services/contact-service";
import { toast } from "react-toastify";

export function Contact() {
  const titleRef = useRef(null);
  const contactFormRef = useRef(null);
  const contactInformationRef = useRef(null);

  const [titleVisible, setTitleVisible] = useState(false);
  const [contactFormVisible, setContactFormVisible] = useState(false);
  const [contactInformationVisible, setContactInformationVisible] =
    useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleRef.current && entry.isIntersecting) {
            setTitleVisible(true);
          }
          if (entry.target === contactFormRef.current && entry.isIntersecting) {
            setContactFormVisible(true);
          }
          if (
            entry.target === contactInformationRef.current &&
            entry.isIntersecting
          ) {
            setContactInformationVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contactFormRef.current) observer.observe(contactFormRef.current);
    if (contactInformationRef.current)
      observer.observe(contactInformationRef.current);

    return () => observer.disconnect();
  }, []);

  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();

    console.log("Form data:", formData);

    setIsSending(true);

    send(formData)
      .then(() => toast.success("Message sent successfully."))
      .finally(() => {
        setIsSending(false);
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      });
  }

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gray-500 text-white flex flex-col items-center py-16 px-6"
    >
      <h2
        ref={titleRef}
        className={`text-4xl font-bold mb-12 transition-all duration-700 ${
          titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
        }`}
      >
        Contact
      </h2>

      <div
        ref={contactFormRef}
        className={`w-full max-w-6xl flex flex-col lg:flex-row gap-8 transition-all duration-700 ${
          contactFormVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="w-full" autoComplete="off">
            <div className="bg-white text-black rounded-2xl shadow-md p-6 flex flex-col gap-4">
              <div className="bg-blue-600 text-white text-center font-bold py-2 rounded-md text-lg">
                Send Email
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold">Your email</label>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Job Opportunity"
                  className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  minLength={5}
                  maxLength={100}
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold">Message</label>
                <textarea
                  rows={6}
                  placeholder="Your message..."
                  className="border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  minLength={10}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-blue-600 hover:bg-blue-500 transition text-white font-bold px-6 py-3 rounded-lg disabled:opacity-50"
                >
                  {isSending ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div
          ref={contactInformationRef}
          className={`w-full lg:w-1/2 transition-all duration-700 ${
            contactInformationVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="bg-white text-black rounded-2xl shadow-md p-6 h-full">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>

            <p className="mb-6 text-lg">
              You can contact me using the form or any of the methods below.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500 text-4xl" />
                <span className="text-blue-600 text-xl">
                  arkadiuszschabowski@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaLinkedin className="text-blue-500 text-4xl" />
                <a
                  href="https://linkedin.com/in/arkadiusz-schabowski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 text-xl"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub className="text-blue-500 text-4xl" />
                <a
                  href="https://github.com/ArkadiuszSchabowski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 text-xl"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
