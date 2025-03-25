import Link from "next/link"

export default function CTASection() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-10 bg-primary pt-32 md:pt-0">
      <div className="absolute top-[-4rem] mx-[6%] flex w-full max-w-[1200px] flex-col items-center justify-between gap-7 rounded-xl bg-font py-14 shadow-md md:flex-row md:px-20">
        <h1 className="white text-3xl font-bold text-white">Start a project</h1>
        <p className="w-11/12 text-center text-base font-medium text-white md:w-[35%] md:text-lg">
          Interested in working together? We should queue up a time to chat. I'll buy the coffee.
        </p>
        <Link href="#contact" className="btn-white">
          Let's do this
        </Link>
      </div>
    </div>
  )
}
