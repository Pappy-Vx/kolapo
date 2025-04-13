import ContactMe from "@/components/ContactMe"

export const metadata = {
    title: 'Contact • Kolawole Kolapo | Software Engineer & Co-Founder',
    description: 'Kolawole kolapo is a software engineer and co-founder based in Lagos, Nigeria. He specializes in building web applications and software solutions.',
    icons: {
      icon: [
        { url: "/kola.jpg", type: "image/jpg" }
      ]
    }
  }

export default function Contact() {
 return (
<>
<ContactMe />
</>
 )
}