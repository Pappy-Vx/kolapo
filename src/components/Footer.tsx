import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary py-8 text-center">
      <h2 className="text-center text-lg font-normal text-white md:text-xl">
        Originally Developed By Matt Farley, <br />
        Re-Developed as a demo clone
      </h2>
      <div className="mt-6 flex justify-center">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="https://ext.same-assets.com/1375934874/630824737.png"
            alt="Matt Farley logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </footer>
  )
}
