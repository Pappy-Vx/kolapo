import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="bg-primary py-8 text-center">
      <h2 className="text-center text-lg font-normal text-white md:text-xl">
        &copy; {currentYear} Kolawole Kolapo
      </h2>
      <div className="mt-6 flex justify-center">
        <Link href="/" aria-label="Go to homepage">
          <Image src="/kola.jpg" alt="kola logo" width={40} height={40} />
        </Link>
      </div>
    </footer>
  );
}
