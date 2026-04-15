export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-coffee-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Sedna Coffee</h3>
            <p className="text-coffee-200">
              Premium coffee crafted with passion for coffee enthusiasts worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-coffee-200 hover:text-white transition">Home</a></li>
              <li><a href="#menu" className="text-coffee-200 hover:text-white transition">Menu</a></li>
              <li><a href="#about" className="text-coffee-200 hover:text-white transition">About</a></li>
              <li><a href="#contact" className="text-coffee-200 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-200 hover:text-white transition text-2xl">f</a>
              <a href="#" className="text-coffee-200 hover:text-white transition text-2xl">𝕏</a>
              <a href="#" className="text-coffee-200 hover:text-white transition text-2xl">📷</a>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-700 pt-6 text-center text-coffee-300">
          <p>&copy; {currentYear} Sedna Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
