import { div } from "framer-motion/client";
import Image from "next/image";

export default function SkillsSection() {
  return (
    <div className="items=center justify-center flex">
      <div className="relative top-[-9rem] mx-[6%] grid gap-[1px] overflow-hidden rounded-xl border border-lightGrey bg-lightGrey shadow-md md:grid-cols-3 w-full max-w-[80rem]">
        {/* Designer Card */}

        <div className="bg-white px-8 py-16 text-center ">
          <header className="flex flex-col items-center justify-center">
            <div className="overflow-hidden flex items-center justify-center mb-5 rounded-full bg-secondary h-16 w-16 p-4">
              <svg
                height="800px"
                width="800px"
                version="1.1"
                id="Capa1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490 490"
                xmlSpace="preserve"
              >
                <g fill="" />
                <g strokeLinecap="round" strokeLinejoin="round" />

                <g fill="">
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M245,314.021c-5.936,0-10.743,4.813-10.743,10.749s4.808,10.751,10.743,10.751c5.938,0,10.75-4.815,10.75-10.751 S250.938,314.021,245,314.021z"
                      fill=""
                    />{" "}
                    <path
                      d="M480,21.003H10c-5.523,0-10,4.477-10,10v327.456c0,5.522,4.477,10,10,10h174.711l-17.492,42.43h-32.88 c-5.522,0-10,4.478-10,10v38.108c0,5.523,4.478,10,10,10h221.323c5.522,0,10-4.477,10-10v-38.108c0-5.522-4.478-10-10-10h-32.879 l-17.493-42.43H480c5.522,0,10-4.478,10-10V31.003C490,25.479,485.522,21.003,480,21.003z M470,41.003v240.901H20V41.003H470z M345.662,448.997H144.339v-18.108h201.323V448.997z M301.149,410.889H188.852l17.492-42.43h77.312L301.149,410.889z M20,348.459 v-46.555h450v46.555H20z"
                      fill=""
                    />{" "}
                    <path
                      d="M323.206,161.089L323.206,161.089L323.206,161.089c0-5.522-4.478-10-10.001-9.999l-10.664,0.001 c-0.603-3.473-1.497-6.846-2.686-10.08l9.221-5.324c4.782-2.763,6.421-8.879,3.658-13.661c-2.763-4.782-8.877-6.423-13.66-3.659 l-9.248,5.342c-2.233-2.669-4.699-5.135-7.368-7.369l5.342-9.247c2.763-4.782,1.125-10.899-3.657-13.661 c-4.782-2.764-10.898-1.125-13.661,3.657l-5.325,9.22c-3.234-1.189-6.607-2.084-10.08-2.688V92.962c0-5.523-4.477-10-10-10 c-0.025,0-0.051,0.004-0.076,0.004s-0.051-0.004-0.076-0.004c-5.522,0-10,4.477-10,10v10.658c-3.473,0.604-6.846,1.498-10.08,2.688 l-5.325-9.22c-2.763-4.782-8.879-6.421-13.661-3.657c-4.782,2.762-6.42,8.879-3.657,13.661l5.342,9.247 c-2.669,2.234-5.135,4.7-7.368,7.369l-9.248-5.342c-4.783-2.764-10.897-1.123-13.66,3.659c-2.763,4.782-1.124,10.898,3.658,13.661 l9.221,5.324c-1.189,3.234-2.083,6.607-2.686,10.08l-10.664-0.001c-5.523-0.001-10.001,4.477-10.001,9.999l0,0l0,0l0,0l0,0 c0,5.523,4.478,10,10.001,10l10.664-0.001c0.602,3.472,1.497,6.845,2.686,10.079l-9.221,5.325 c-4.782,2.763-6.421,8.878-3.658,13.661c2.763,4.781,8.877,6.422,13.66,3.658l9.248-5.342c2.233,2.67,4.699,5.136,7.368,7.369 l-5.342,9.248c-2.763,4.782-1.125,10.898,3.657,13.66c4.782,2.764,10.898,1.125,13.661-3.656l5.325-9.221 c3.234,1.189,6.607,2.085,10.08,2.688v10.658c0,5.523,4.478,10,10,10c0.025,0,0.051-0.004,0.076-0.004s0.051,0.004,0.076,0.004 c5.523,0,10-4.477,10-10v-10.658c3.473-0.603,6.846-1.498,10.08-2.688l5.325,9.221c2.763,4.781,8.879,6.42,13.661,3.656 c4.782-2.762,6.42-8.878,3.657-13.66l-5.342-9.248c2.669-2.233,5.135-4.699,7.368-7.369l9.248,5.342 c4.783,2.764,10.898,1.123,13.66-3.658c2.763-4.783,1.124-10.898-3.658-13.661l-9.221-5.325c1.189-3.234,2.083-6.607,2.686-10.079 l10.664,0.001C318.728,171.089,323.206,166.612,323.206,161.089L323.206,161.089L323.206,161.089z M245.076,199.433 c-0.025,0-0.051-0.002-0.076-0.002s-0.051,0.002-0.076,0.002c-21.141,0-38.34-17.2-38.34-38.344 c0-21.143,17.199-38.344,38.34-38.344c0.025,0,0.051,0.002,0.076,0.002s0.051-0.002,0.076-0.002 c21.141,0,38.34,17.201,38.34,38.344C283.416,182.232,266.217,199.433,245.076,199.433z"
                      fill=""
                    />{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <h1 className="py-5 text-2xl font-semibold">Frontend Developer</h1>
            <p className="text-lg font-normal">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
          </header>
          <div className="py-12">
            <h2 className="text-lg font-medium text-primary">
              Languages I speak:
            </h2>
            <p className="text-lg font-normal">Next.js, React.js, Git, HTML</p>
          </div>
          <footer>
            <h2 className="text-lg font-medium text-primary">Dev Tools:</h2>
            <p className="whitespace-pre-line text-lg font-normal">
              BitBucket, Github, Vercel, Tailwind CSS, Figma.
            </p>
          </footer>
        </div>

        {/* Frontend Developer Card */}
        <div className="bg-white px-8 py-16 text-center">
          <header className="flex flex-col items-center justify-center">
            <div className="overflow-hidden flex items-center justify-center mb-5 rounded-full bg-secondary h-16 w-16 p-4">
              <svg
                fill="#0D0628"
                width="800px"
                height="800px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                stroke="#0D0628"
              >
                <g id="SVGRepoBgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepoTracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepoIconCarrier">
                  {" "}
                  <path d="M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 0 1-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z" />{" "}
                </g>
              </svg>
            </div>
            <h1 className="py-5 text-2xl font-semibold">Backend Developer</h1>
            <p className="text-lg font-normal">
              I enjoy designing scalable architectures, optimizing data flow,
              and crafting the logic that powers seamless digital experiences.
            </p>
          </header>
          <div className="py-12">
            <h2 className="text-lg font-medium text-primary">
              Server-side storyteller:
            </h2>
            <p className="text-lg font-normal">
              Python, Node.js, Express.js, API Doc
            </p>
          </div>
          <footer>
            <h2 className="text-lg font-medium text-primary">Dev Tools:</h2>
            <p className="whitespace-pre-line text-lg font-normal">
              Github, Bitbucket, Render, Postman, MongoDB, MySQL, Firebase,
              Docker.
            </p>
          </footer>
        </div>

        {/* Mentor Card */}
        <div className="bg-white px-8 py-16 text-center">
          <header className="flex flex-col items-center justify-center">
            <div className="overflow-hidden flex items-center justify-center mb-5 rounded-full bg-secondary h-16 w-16 p-4">
              <svg
                fill="#0D0628"
                height="800px"
                width="800px"
                version="1.1"
                id="Capa1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490 490"
                xmlSpace="preserve"
                stroke="#0D0628"
                strokeWidth="0.0049"
              >
                <g id="SVGRepoBgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepoTracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepoIconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M224.777,305.082H405.12c3.99,0,7.599-2.372,9.181-6.036l74.88-173.406c1.335-3.09,1.024-6.644-0.825-9.457 c-1.849-2.814-4.989-4.507-8.355-4.507H129.393l-20.676-63.188c-1.345-4.11-5.179-6.891-9.504-6.891H10c-5.523,0-10,4.478-10,10 c0,5.522,4.477,10,10,10h81.964l77.413,236.595c1.345,4.11,5.18,6.891,9.504,6.891h23.403l-28.482,54.688 c-3.65-0.958-7.48-1.473-11.428-1.473c-24.841,0-45.051,20.21-45.051,45.052c0,24.843,20.21,45.055,45.051,45.055 c21.402,0,39.356-15.011,43.916-35.055h176.654c4.561,20.044,22.511,35.055,43.912,35.055c24.845,0,45.058-20.212,45.058-45.055 c0-24.842-20.213-45.052-45.058-45.052c-21.4,0-39.352,15.009-43.912,35.052H206.29c-2.193-9.639-7.481-18.108-14.766-24.309 L224.356,306C224.514,305.698,224.653,305.391,224.777,305.082z M266.737,131.675h53.877l-28.801,66.698h-53.877L266.737,131.675z M216.152,198.374h-53.871l28.794-66.698h53.877L216.152,198.374z M313.599,198.374l28.801-66.698h53.873l-28.801,66.698H313.599z M358.835,218.374l-28.805,66.708h-53.873l28.805-66.708H358.835z M283.177,218.374l-28.805,66.708h-53.875l28.804-66.708H283.177z M398.546,285.082h-46.73l28.805-66.708h46.731L398.546,285.082z M435.987,198.374h-46.73l28.801-66.698h46.731L435.987,198.374z M169.292,131.675l-18.975,43.951l-14.381-43.951H169.292z M164.304,218.374h43.213l-24.584,56.934L164.304,218.374z M162.374,428.404c-13.813,0-25.051-11.239-25.051-25.055c0-13.813,11.237-25.052,25.051-25.052 c13.812,0,25.049,11.238,25.049,25.052C187.423,417.165,176.186,428.404,162.374,428.404z M426.856,378.297 c13.816,0,25.058,11.238,25.058,25.052c0,13.815-11.241,25.055-25.058,25.055c-13.81,0-25.045-11.239-25.045-25.055 C401.811,389.536,413.047,378.297,426.856,378.297z" />{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <h1 className="py-5 text-2xl font-semibold">e-Commerce</h1>
            <p className="text-lg font-normal">
              I bridge brands, customers, and seamless shopping experiences.
            </p>
          </header>
          <div className="py-12">
            <h2 className="text-lg font-medium text-primary">
              Building eCommerce Success:
            </h2>
            <p className="text-lg font-normal">
              Shopify, SEM, WooCommerce, SEO, Google Analytics.
            </p>
          </div>
          <footer>
            <h2 className="text-lg font-medium text-primary">eComm tools:</h2>
            <p className="whitespace-pre-line text-lg font-normal">
              WordPress, Shopify, Yoast SEO, Cart Abandonment, Elementor.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
