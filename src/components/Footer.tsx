import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="max-h-[40rem] bg-primary py-8 text-center flex items-center justify-center">
      <div className="w-full max-w-[80rem]">
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
