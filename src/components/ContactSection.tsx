import Link from "next/link"

export default function ContactSection() {
  return (
    <div id="contact" className="mx-[6%] border-b border-lightGrey pb-36 text-center">
      <h1 className="text-xl font-bold text-font md:text-2xl md:font-semibold">
        Interested in collaborating with me?
      </h1>
      <h2 className="pt-7 pb-16 text-xl font-medium text-font">
        I'm always open to discussing product design work or partnership opportunities.
      </h2>
      <Link href="mailto:hello@mattfarley.ca" className="btn-primary mx-auto">
        <span>Start a conversation</span>
      </Link>
    </div>
  )
}
