'use client';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons";

export default function AboutSection() {
  const team = [
    {
      name: "Ingrid Mornac",
      role: "Full Stack Developer",
      linkedin: "https://linkedin.com/in/ingrid-mornac",
      github: "https://github.com/mornac",
    },
    {
      name: "Jeffrey Basset",
      role: "Full Stack Developer",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      twitter: "#",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">About the project</h2>
        <p className="text-lg leading-relaxed mb-12">
          The Zafira Solidaire website was created following a request from her manager, Fariza S. <span className="font-semibold">rendre l’expérience de location plus fluide, plus humaine et plus personnalisée.</span><br />
          This project allowed us to explore REST APIs, secure authentication, and dynamic frontend design with React and Next.js.<br /><br />
          This is a portfolio project completed as part of the curriculum. 
          <a href="https://www.holbertonschool.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">
            Holberton School Toulouse
          </a>.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div key={index} className="p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm mb-4 text-zinc-500 dark:text-zinc-400">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin size={22} /></a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white"><FaGithub size={22} /></a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500"><FaTwitter size={22} /></a>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-base">
            📦 Code source disponible on {"https://github.com/JeffToken31/Portfolio-project-Zafira"}
            <a
              href="https://github.com/JeffToken31/Portfolio-project-Zafira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
