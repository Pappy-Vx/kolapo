export default function StartupProjectsSection() {
  const startupProjects = [
    {
      id: 1,
      title: "A powerful, easy-to-configure form backend for designers and developers.",
      badge: "usebasin.com",
      status: "active"
    },
    {
      id: 2,
      title: "Short, focused design and growth collabs for startup tech founders.",
      badge: "shipable.io",
      status: "active"
    },
    {
      id: 3,
      title: "Intelligent API solution for automatic spam protection without the manual work.",
      badge: "in development",
      status: "development"
    },
    {
      id: 4,
      title: "A people-friendly content publishing platform that integrates with any tech stack.",
      badge: "in development",
      status: "development"
    },
    {
      id: 5,
      title: "Next level plug and play chassis systems for custom DIY lightsaber builds.",
      badge: "in development",
      status: "development"
    },
    {
      id: 6,
      title: "Simple feedback and engagement tools that help teams ship winning products.",
      badge: "in development",
      status: "development"
    },
    {
      id: 7,
      title: "Human-crafted logos and brand assets for startups and indie hacker projects.",
      badge: "in development",
      status: "development"
    },
    {
      id: 8,
      title: "A space and member management solution for coworking communities.",
      badge: "in development",
      status: "development"
    },
    {
      id: 9,
      title: "A collaborative tool for creating simple, effective user personas.",
      badge: "in development",
      status: "development"
    }
  ]

  return (
    <>
      <div className="flex flex-col justify-center gap-7 bg-primary px-[6%] pt-36 pb-64 text-center md:px-80">
        <h1 className="text-2xl font-bold text-white md:text-3xl">My Startup Projects</h1>
        <p className="text-xl font-medium text-white">
          I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.
        </p>
      </div>

      <div className="relative top-[-8rem] grid gap-6 px-[6%] md:grid-cols-2 lg:grid-cols-3">
        {startupProjects.map(project => (
          <div key={project.id} className="startup-card">
            <h2 className="py-8 text-base font-medium">{project.title}</h2>
            <div className={project.status === 'active' ? 'badge-blue' : 'badge-gray'}>
              <span>{project.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
