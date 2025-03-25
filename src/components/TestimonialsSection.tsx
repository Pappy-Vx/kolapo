"use client"

import { useState, useEffect } from "react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Matt's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.",
      name: "Alvin Engler",
      title: "CEO, West Third Enterprises, Inc."
    },
    {
      id: 2,
      quote: "Matt was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer you can trust with a project from start to finish.",
      name: "Pascal Tremblay",
      title: "Creative Lead, Good Kind"
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="mx-[6%] py-32 text-center">
      <h1 className="text-2xl font-bold md:text-3xl md:font-semibold">Testimonials</h1>
      <h2 className="py-7 text-xl font-medium md:font-semibold">
        People I've worked with have said some nice things...
      </h2>

      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="transition-transform duration-700 ease-linear"
          style={{
            transform: `translateX(-${currentTestimonial * 100}%)`,
            display: "flex"
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full inline-block py-14 px-4"
            >
              <p className="whitespace-normal py-12 text-xl font-normal md:mx-80 md:text-2xl">
                "{testimonial.quote}"
              </p>
              <h2 className="text-xl font-semibold">{testimonial.name}</h2>
              <h3 className="text-base font-normal">{testimonial.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentTestimonial ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setCurrentTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
