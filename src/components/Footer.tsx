import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="max-h-[40rem] bg-primary py-8 text-center flex items-center justify-center">
      <div className="w-full max-w-[80rem] flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-4 mb-4">
          <Link
            href="https://github.com/Pappy-Vx"
            className="bg-primary rounded-full h-10 w-10 flex items-center justify-center"
          >
            <FaGithub className="text-secondary text-xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kolapo-kolawole-21495b1b3//"
            className="bg-primary rounded-full h-10 w-10 flex items-center justify-center"
          >
            <FaLinkedin className="text-secondary text-xl" />
          </Link>
        </div>
        <h2 className="text-center text-lg font-normal text-white md:text-xl">
          &copy; {currentYear} Kolawole Kolapo
        </h2>
        <div className="mt-6 flex justify-center">
          <Link href="/" aria-label="Go to homepage">
            <Image src="/kola.jpg" alt="kola logo" width={40} height={40} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
