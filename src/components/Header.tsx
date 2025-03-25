import Image from "next/image"

export default function Header() {
  return (
    <header className="flex min-h-[80vh] flex-col items-center justify-between gap-8 px-[6%] text-center">
      <h1 className="mt-20 text-3xl font-bold text-font md:text-5xl">
        Designer, Frontend Developer & Mentor
      </h1>
      <h2 className="text-xl font-normal text-font md:text-2xl">
        I design and code beautifully simple things, and I love what I do.
      </h2>
      <div className="relative w-11/12 md:w-3/5">
        <Image
          src="https://ext.same-assets.com/1375934874/2165931950.svg"
          alt="Devices illustration"
          width={800}
          height={600}
          className="w-full"
          priority
        />
      </div>
    </header>
  )
}
