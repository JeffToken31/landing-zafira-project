'use client';

import Image from 'next/image';
import {SiGithub, SiLinkedin} from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-bg py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        {/* Project Info */}
        <div className="flex flex-col items-center gap-2 md:flex-1">
          <h3 className="font-bold text-lg mb-1">Zafira Landing Page</h3>
          <p className="text-text">Portfolio Project for Holberton School</p>
          <p className="text-sm mt-2">
            GitHub:{' '}
            <a
              href="https://github.com/JeffToken31/Portfolio-project-Zafira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Link
            </a>
          </p>
        </div>

        {/* Developers */}
        <div className="flex flex-col items-center gap-4 md:flex-1">
          <h3 className="font-bold text-lg mb-2">Developers</h3>
          <ul className="flex gap-4 justify-center">
            <li className="flex flex-col items-center gap-2">
              <span className="font-medium">Jeffrey Basset</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/JeffToken31"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub size={24} color="#181717" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jeffrey-basset/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin size={24} color="#0A66C2" />
                </a>
              </div>
            </li>
            <li className="flex flex-col items-center gap-2">
              <span className="font-medium">Ingrid Mornac</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Mornac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub size={24} color="#181717" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ingrid-mornac-a01816a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin size={24} color="#0A66C2" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* School Info */}
        <div className="flex flex-col items-center gap-2 md:flex-1">
          <h3 className="font-bold text-lg mb-2">Holberton School</h3>
          <a
            href="https://www.holbertonschool.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:underline"
          >
            <Image
              src="/logohbtn.svg"
              alt="Holberton Logo"
              width={72}
              height={72}
              className="object-contain"
            />
            <span className="text-sm text-gray-600">holbertonschool.fr</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Zafira — All rights reserved.
      </div>
    </footer>
  );
}
