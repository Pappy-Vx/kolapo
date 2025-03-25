import Link from "next/link"
import Image from "next/image"

export default function RecentWorkSection() {
  // Project data
  const projects = [
    {
      id: 1,
      title: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
      image: "https://ext.same-assets.com/3669320772/357205201.png",
      alt: "WF Design Build"
    },
    {
      id: 2,
      title: "Accounting and tax services characterized by quality, reliability and trust.",
      image: "https://ext.same-assets.com/3669320772/3800605393.png",
      alt: "Coupal"
    },
    {
      id: 3,
      title: "Blockchain pioneers bringing transparency, trust, and security to supply.",
      image: "https://ext.same-assets.com/3669320772/1568695583.png",
      alt: "Chronicled"
    },
    {
      id: 4,
      title: "Business savvy tech experts helping forward thinking companies get things done.",
      image: "https://ext.same-assets.com/3669320772/3047193721.png",
      alt: "Burkettandco"
    },
    {
      id: 5,
      title: "Vancouver's tower crane rental service and support leader since 1974.",
      image: "https://ext.same-assets.com/3669320772/3417307927.png",
      alt: "GLC Solutions"
    },
    {
      id: 6,
      title: "Results-oriented, responsive and flexible full service civil engineering firm.",
      image: "https://ext.same-assets.com/3669320772/2536143222.png",
      alt: "Wedler Engineering"
    }
  ]

  return (
    <div className="border-b border-lightGrey px-[6%] pb-40 text-center">
      <h1 className="text-2xl font-bold text-font md:text-3xl">My Recent Work</h1>
      <h2 className="pt-6 text-xl font-semibold text-font">
        Here are a few past design projects I've worked on. Want to see more?
        <Link href="#contact" className="text-blue-500 hover:text-blue-700"> Email me</Link>.
      </h2>

      <div className="grid gap-6 py-20 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <Image
              src={project.image}
              alt={project.alt}
              width={400}
              height={300}
              className="rounded-xl w-full h-auto"
            />
            <div className="project-card-overlay">
              <h1 className="px-[10%] pb-6 text-center text-xl font-normal text-white">
                {project.title}
              </h1>
              <Link href="#" className="mx-auto flex items-center rounded-full border-2 border-primary hover:bg-primary px-5 py-2 text-lg font-medium hover:text-white text-white">
                <span>Visit Website</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Link href="#" className="btn-primary mx-auto">
        <span> See more on Dribbble</span>
      </Link>
    </div>
  )
}
