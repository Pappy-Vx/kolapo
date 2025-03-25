import Image from "next/image"

export default function SkillsSection() {
  return (
    <div className="relative top-[-9rem] mx-[6%] grid gap-[1px] overflow-hidden rounded-xl border border-lightGrey bg-lightGrey shadow-md md:grid-cols-3">
      {/* Designer Card */}
      <div className="bg-white px-8 py-16 text-center">
        <header>
          <div className="flex justify-center mb-5">
            <Image
              src="https://ext.same-assets.com/1375934874/2484914677.png"
              alt="Designer"
              width={56}
              height={56}
            />
          </div>
          <h1 className="py-5 text-2xl font-semibold">Designer</h1>
          <p className="text-lg font-normal">
            I value simple content structure, clean design patterns, and thoughtful interactions.
          </p>
        </header>
        <div className="py-12">
          <h2 className="text-lg font-medium text-primary">Things I enjoy designing:</h2>
          <p className="text-lg font-normal">UX, UI, Web, Apps, Logos</p>
        </div>
        <footer>
          <h2 className="text-lg font-medium text-primary">Design Tools:</h2>
          <p className="whitespace-pre-line text-lg font-normal">
            Affinity Designer
            Figma
            Font Awesome
            Pen & Paper
            Sketch
            Webflow
          </p>
        </footer>
      </div>

      {/* Frontend Developer Card */}
      <div className="bg-white px-8 py-16 text-center">
        <header>
          <div className="flex justify-center mb-5">
            <Image
              src="https://ext.same-assets.com/1375934874/1167319095.png"
              alt="Frontend Developer"
              width={56}
              height={56}
            />
          </div>
          <h1 className="py-5 text-2xl font-semibold">Frontend Developer</h1>
          <p className="text-lg font-normal">
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </p>
        </header>
        <div className="py-12">
          <h2 className="text-lg font-medium text-primary">Languages I speak:</h2>
          <p className="text-lg font-normal">HTML, Pug, Slim, CSS, Sass, Git</p>
        </div>
        <footer>
          <h2 className="text-lg font-medium text-primary">Dev Tools:</h2>
          <p className="whitespace-pre-line text-lg font-normal">
            Atom
            Bitbucket
            Bootstrap
            Bulma
            Codekit
            Github
            Surge
            Terminal
            Vercel
          </p>
        </footer>
      </div>

      {/* Mentor Card */}
      <div className="bg-white px-8 py-16 text-center">
        <header>
          <div className="flex justify-center mb-5">
            <Image
              src="https://ext.same-assets.com/1375934874/3520926507.png"
              alt="Mentor"
              width={56}
              height={56}
            />
          </div>
          <h1 className="py-5 text-2xl font-semibold">Mentor</h1>
          <p className="text-lg font-normal">
            I genuinely care about people, and love helping fellow designers work on their craft.
          </p>
        </header>
        <div className="py-12">
          <h2 className="text-lg font-medium text-primary">Experiences I draw from:</h2>
          <p className="text-lg font-normal">UX/UI, Product design, Freelancing</p>
        </div>
        <footer>
          <h2 className="text-lg font-medium text-primary">Mentor Stats:</h2>
          <p className="whitespace-pre-line text-lg font-normal">
            7 years experience
            26 short courses
            65 bootcamps
            200+ students
            2,350+ mentor sessions
            60+ group critiques
            16,500+ comments
          </p>
        </footer>
      </div>
    </div>
  )
}
