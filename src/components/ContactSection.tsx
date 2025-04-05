import Link from "next/link";

export default function ContactSection() {
  return (
    <div
      id="contact"
      className="mx-[6%] border-b border-lightGrey pb-36 text-center flex items-center justify-center relative md:mt-10 mt-[35rem] "
    >
      <div className="w-full max-w-[80rem]">
        <h1 className="text-xl font-bold text-font md:text-2xl md:font-semibold ">
          Interested in collaborating with me?
        </h1>
        <h2 className="pt-7 pb-16 text-xl font-medium text-font">
          I'm always open to discussing product design work or partnership
          opportunities.
        </h2>
        <Link href="" className="btn-primary mx-auto text-primary btnarrw w-full md:w-[15rem] flex items-center justify-center">
          <span>Start a conversation</span>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <rect width="24" height="24" fill="" />
            <path
              d="M6 12H18M18 12L13 7M18 12L13 17"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
