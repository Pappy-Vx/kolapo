"use client";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const pagination = {
    clickable: true,
    renderBullet: function (_: number, className: string) {
      return `<span class="${className} custom-bullet"></span>`;
    },
  };

  const testimonials = [
    {
      id: 1,
      quote:
        "Working with Kolawole Kolapo is like having a Swiss Army knife for technical challenges  versatile, reliable, and always effective. I've collaborated with him on several projects, including my farm-to-door delivery website, publishing platform, and professional site. Each time, his technical expertise, strong work ethic, and problem-solving mindset have been invaluable to my business.",
      name: "Elizabeth Jikiemi",
      title: "CEO, Bamiraa Inc.",
    },
    {
      id: 2,
      quote:
        "I have had the pleasure of working closely with Kolapo for 4 plus years now and can confidently say that he is an exceptional professional. He possesses a unique blend of technical expertise and problem-solving abilities that consistently impresses me.",
      name: "Kolade David",
      title: "Creative Lead, EasySpend Inc.",
    },
    {
      id: 3,
      quote:
        "Kolawole Kolapo is a true gem in the tech world. His ability to tackle complex challenges with ease and creativity is truly impressive. I've had the pleasure of collaborating with him on multiple projects, and his contributions have always elevated the final product. He's not just a developer; he's a problem solver and a team player.",
      name: "Opule Caleb",
      title: "Senior Frontend Developer, YEHGS UK LTD",
    },
    {
      id: 4,
      quote:
        "Working with Kolawole Kolapo has been an absolute pleasure. His technical skills are top-notch, and his ability to communicate complex ideas clearly is a rare find. He consistently goes above and beyond to ensure project success, and his positive attitude makes collaboration enjoyable.",
      name: "Seyi Kayode",
      title: "Digital ,arketer, Jumia",
    },
  ];

  return (
    <div className="mx-[6%] py-32 text-center">
      <h1 className="text-2xl font-bold md:text-3xl md:font-semibold">
        Testimonials
      </h1>
      <h2 className="py-7 text-xl font-medium md:font-semibold">
        People I've worked with have said some nice things...
      </h2> 
      <div className="relative rounded-lg overflow-hidden mt-[5rem]">
        <Swiper
          pagination={pagination}
          spaceBetween={50}
          slidesPerView={1} // Ensure only one slide is shown at a time
          loop={true} // Enable looping through slides
          autoplay={{ delay: 4500, disableOnInteraction: false }} // Auto-slide every 3 seconds
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="w-full py-14 px-4">
                <p className="whitespace-normal py-12 text-xl font-normal md:mx-80 md:text-2xl">
                  "{testimonial.quote}"
                </p>
                <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                <h3 className="text-base font-normal">{testimonial.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
