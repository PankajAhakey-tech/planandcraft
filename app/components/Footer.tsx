import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PlanAndCraft</h3>
            <p className="text-sm">Expert civil engineering solutions for modern construction challenges.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#architectural-design" className="hover:text-blue-400">
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link href="/services#3d-mapping" className="hover:text-blue-400">
                  3D Mapping
                </Link>
              </li>
              <li>
                <Link href="/services#structural-estimation" className="hover:text-blue-400">
                  Structural Estimation
                </Link>
              </li>
              <li>
                <Link href="/services#construction-management" className="hover:text-blue-400">
                  Construction Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">Vinoba Nagar, Bhaggudhana, Betul,MP,India</p>
            <p className="text-sm mb-2">Phone: +91 9479464694</p>
            <p className="text-sm mb-2">Email: info@civiltech.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          © {new Date().getFullYear()} PlanAndCraft. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

