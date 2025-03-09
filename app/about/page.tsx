import Image from "next/image"
import { Check } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">About PlanAndCraft</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
        <div>
          <p className="text-base md:text-lg mb-6">
            At PlanAndCraft, we are more than just engineers and architects—we are visionaries shaping the world one
            structure at a time. With years of experience in the civil engineering industry, our team has successfully
            designed and executed projects ranging from custom home designs to large-scale commercial developments.
          </p>
          <p className="text-base md:text-lg mb-4">
            Our commitment to precision, innovation, and sustainability has made us a trusted partner for clients across
            various industries. We pride ourselves on our ability to tackle complex projects and deliver exceptional
            results.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://res.cloudinary.com/dzym2qant/image/upload/v1738500232/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_zhhwe6.jpg"
            alt="About NowMee Constructions"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Expertise</h2>
          <div className="space-y-4">
            {[
              "Architectural Planning & Structural Design – Creating functional and aesthetic spaces tailored to client needs.",
              "2D & 3D Mapping Solutions – Precision-driven digital mapping for better project visualization.",
              "Structural Estimation & Cost Planning – Ensuring cost-effective solutions with accurate estimates.",
              "Construction Project Management – Seamless execution from blueprint to reality.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="space-y-4">
            {[
              "Expert-Led Designs – Our team includes industry experts, architects, and engineers dedicated to perfection.",
              "Innovative Approach – We leverage modern technology like BIM, GIS mapping, and advanced estimation tools.",
              "Client-Centric Solutions – We prioritize quality, budget, and timelines to deliver the best results.",
              "Sustainable & Smart Construction – Focusing on eco-friendly materials and energy-efficient designs.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <p className="text-lg md:text-xl font-semibold mb-4">
          We take pride in crafting durable, innovative, and future-ready structures that stand the test of time.
        </p>
        <p className="text-lg md:text-xl text-blue-600 font-bold">
          Let's build your dream project—professionally and efficiently!
        </p>
      </div>
    </div>
  )
}

