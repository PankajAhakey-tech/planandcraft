import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const ServiceCard = ({ title, icon, description, features, ctaText }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="relative h-48 mb-6">
        <Image
          src="/placeholder.svg"
          alt={`${title} illustration`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="font-semibold text-blue-600 mb-4">{ctaText}</p>
      <Button asChild>
        <Link href="/contact">Get Started</Link>
      </Button>
    </div>
  </div>
)

export default function Services() {
  const services = [
    {
      title: "Architectural Design",
      icon: "🏗",
      description:
        "Every great building starts with a great design! Our expert architects create modern, functional, and aesthetic designs that bring your vision to life.",
      features: [
        "Well-planned & Space-efficient – Smart designs that make the best use of available space.",
        "Visually Appealing – A balance of beauty and functionality.",
        "Vastu & Regulation Compliant – Designed as per building laws and Vastu preferences (if required).",
        "Sustainable & Eco-Friendly – Using energy-efficient concepts to save costs in the long run.",
      ],
      ctaText: "Let us design a space that suits your lifestyle and business needs!",
    },
    {
      title: "3D Mapping",
      icon: "🗺",
      description:
        "Imagine seeing your project before it's built! With advanced 3D mapping, we create highly detailed 3D models of your buildings, landscapes, and construction sites.",
      features: [
        "Better Visualization – See your project in 3D before construction starts.",
        "Accurate Planning – Helps in measuring and analyzing site conditions.",
        "Error Detection – Identify and fix issues before the construction phase.",
        "Virtual Tours – Walk through your project using 3D technology.",
      ],
      ctaText: "Get a realistic view of your dream project with our professional 3D mapping services!",
    },
    {
      title: "Structural Estimation",
      icon: "📊",
      description:
        "Worried about construction costs? Our structural estimation services give you a detailed cost breakdown so you can plan your budget efficiently.",
      features: [
        "Material Cost Estimation – Know how much cement, steel, bricks, and other materials you need.",
        "Labor & Machinery Cost Analysis – Calculate workforce and equipment costs in advance.",
        "Time & Resource Planning – Avoid delays and unexpected expenses.",
        "BOQ (Bill of Quantities) Preparation – A professional document with a full project cost summary.",
      ],
      ctaText: "Save money, time, and resources by getting a precise estimation before construction begins!",
    },
    {
      title: "Construction Management",
      icon: "👷",
      description:
        "Building a structure is not just about materials; it's about proper planning, execution, and supervision. Our construction management services ensure your project runs smoothly, on time, and within budget.",
      features: [
        "Project Planning & Scheduling – Step-by-step execution to avoid delays.",
        "Quality Control & Safety Measures – Ensuring strong, durable, and safe buildings.",
        "Contractor & Vendor Management – Coordinating with labor and suppliers for hassle-free work.",
        "On-Site Supervision – Regular monitoring to prevent errors and maintain quality.",
      ],
      ctaText: "Leave the stress to us! We handle everything from start to finish, ensuring a successful project.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Services</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
        At PlanAndCraft, we offer expert civil engineering and architectural services to help you plan, design, and
        build strong, beautiful, and cost-effective structures. Whether you're working on a home, office, commercial
        building, or large-scale infrastructure, our team ensures quality, efficiency, and innovation in every project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Experienced & Certified Professionals – Skilled architects, engineers, and project managers.",
            "Affordable & Transparent Pricing – No hidden costs, only honest estimations.",
            "Fast & Reliable Services – We respect your time and deliver within deadlines.",
            "All-in-One Solutions – From design to execution, we manage everything.",
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Contact us today! Let's bring your dream project to life with expert planning and execution! 🚀
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contact Us Now</Link>
        </Button>
      </div>
    </div>
  )
}

