import HeroSection from "./components/HeroSection"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Welcome to PlanAndCraft</h2>
            <p className="text-lg text-gray-600 mb-6">
              Where innovation meets precision in civil engineering and architecture. We specialize in architectural
              design, 2D & 3D mapping, structural estimation, and construction planning, delivering high-quality
              solutions that bring your vision to life.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With a strong focus on efficiency, sustainability, and modern technology, we help shape the future of
              infrastructure with cutting-edge expertise.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're looking for residential, commercial, or industrial projects, our team of skilled
              professionals ensures every project is executed with excellence, integrity, and technical precision.
            </p>
            <p className="text-xl font-semibold text-blue-600">Let's build something remarkable together!</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Architectural Design", icon: "🏗️" },
              { title: "3D Mapping", icon: "🗺️" },
              { title: "Structural Estimation", icon: "📊" },
              { title: "Construction Management", icon: "👷" },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">Professional {service.title.toLowerCase()} services for your projects.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-16 bg-light-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              "https://res.cloudinary.com/dzym2qant/image/upload/v1738483175/pro1_dmd0mz.jpg",
              "https://res.cloudinary.com/dzym2qant/image/upload/v1738483175/pro2_bxjyjq.webp",
              "https://res.cloudinary.com/dzym2qant/image/upload/v1738483175/pro3_enqrme.jpg",
            ].map((imgSrc, project) => (
              <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <Image
                  src={imgSrc || "/placeholder.svg"}
                  alt={`Project ${project + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project + 1}</h3>
                  <p className="text-gray-600 mb-4">A brief description of the project and its key features.</p>
                  <Button variant="outline" asChild className="w-full justify-center">
                    <Link href={`#`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 text-white" style={{ backgroundColor: "rgb(87, 96, 116)" }}>

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and project estimate. Let our experts help bring your vision to
            life.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-gray-100 transition-colors text-sm md:text-base font-semibold" >
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

