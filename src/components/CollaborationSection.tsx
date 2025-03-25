import Image from "next/image"

export default function CollaborationSection() {
  const companies = [
    {
      id: 1,
      name: "Goodkind",
      logo: "https://ext.same-assets.com/3669320772/1789226488.svg"
    },
    {
      id: 2,
      name: "Domain7",
      logo: "https://ext.same-assets.com/3669320772/543605606.svg"
    },
    {
      id: 3,
      name: "Chronicled",
      logo: "https://ext.same-assets.com/3669320772/1714070194.svg"
    },
    {
      id: 4,
      name: "Serpmetrics",
      logo: "https://ext.same-assets.com/3669320772/83542819.svg"
    }
  ]

  return (
    <div className="flex h-screen flex-col justify-center gap-16 px-[6%]">
      <h1 className="text-center text-xl font-bold text-font md:mx-[25%] md:text-3xl">
        I'm proud to have collaborated with some awesome companies:
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 md:grid-cols-4">
        {companies.map(company => (
          <div key={company.id} className="flex justify-center">
            <Image
              src={company.logo}
              alt={company.name}
              width={200}
              height={100}
              className="w-full max-w-[180px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
