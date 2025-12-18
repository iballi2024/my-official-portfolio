import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Socials() {
  const socials = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/abayomi-alli-6bb347b3/", name: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/iballi2024", name: "GitHub" },
    { icon: <FaTwitter />, url: "https://x.com/ib_mybigmouth", name: "Twitter" },
  ];

  return (
    <div className="flex justify-center gap-6 mt-8">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 text-2xl hover:text-green-500 hover:scale-110 transition-all duration-300"
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
