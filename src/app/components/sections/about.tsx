'use client';
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

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
    <section id="about" className="py-20 text-zinc-800 dark:text-zinc-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">About the project</h2>
        <p className="text-lg leading-relaxed semibold mb-12">
          The Zafira Solidaire website was created following a request from her manager, Fariza S. 
          <span className="text-lg leading-relaxed mb-12"><br /><br />
          We wanted to create a clear, accessible, and supportive digital tool—an online space where the association can share its activities, recruit new members, and showcase its partners.
          This project is part of a learning and engagement process: we are combining our technical skills with our desire to contribute to a real cause.
          Developed within the framework of the Holberton School program, Zafira Solidaire illustrates how technology can serve solidarity and strengthen social bonds.This project allowed us to explore REST APIs, secure authentication, and dynamic frontend design with React and Next.js.<br /><br />
          This is a portfolio project completed as part of the curriculum.</span><br />
          <a href="https://www.holbertonschool.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">
            Holberton School Toulouse
          </a>.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Our mission</h3>
        <p className="text-lg leading-relaxed mb-12">
          Our mission was to design and develop a website that effectively represents the values and activities of Zafira Solidaire. 
          We aimed to create an intuitive user experience, ensuring that visitors can easily access information about the association's initiatives, volunteer opportunities, and partnerships. 
          By leveraging modern web technologies, we strived to build a platform that is not only visually appealing but also functional and responsive across all devices.</p>
          
        <h3 className="text-2xl font-semibold mb-8">Meet the Team</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div key={index} className="p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm mb-4 text-zinc-500 dark:text-zinc-400">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedinIn size={22} /></a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white"><FaGithub size={22} /></a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500"><FaTwitter size={22} /></a>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-base">
            📦 Source code available on {"https://github.com/JeffToken31/Portfolio-project-Zafira"}
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
};
