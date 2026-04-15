export default function Hero() {
  return (
    <section 
      id="home"
      className="relative overflow-hidden py-32 px-4"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(139, 69, 19, 0.95) 0%, rgba(61, 28, 8, 0.95) 100%),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="50" r="3" fill="rgba(255,255,255,0.05)"/></svg>')`
      }}
    >
      {/* Decorative Coffee Cup SVG */}
      <div className="absolute top-10 right-10 opacity-10 text-9xl">☕</div>
      <div className="absolute bottom-20 left-5 opacity-10 text-8xl">🌾</div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <span className="inline-block px-4 py-2 bg-white bg-opacity-20 text-white rounded-full text-sm font-semibold border border-white border-opacity-30">
            ✨ Premium Coffee Experience
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-100">
            Sedna Coffee
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 text-coffee-100 font-light max-w-3xl mx-auto">
          Experience the finest premium coffee crafted with passion and perfection. 
          <br />
          <span className="text-amber-200">Every sip tells a story of quality and dedication.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <button className="bg-white text-coffee-700 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition duration-300 transform hover:scale-105 shadow-lg">
            ☕ Explore Menu
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-coffee-700 transition duration-300 transform hover:scale-105">
            📍 Reserve a Table
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-white border-opacity-20">
          <div>
            <div className="text-3xl font-bold text-amber-200">50+</div>
            <p className="text-coffee-100 text-sm mt-2">Premium Blends</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-200">10k+</div>
            <p className="text-coffee-100 text-sm mt-2">Happy Customers</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-200">15+</div>
            <p className="text-coffee-100 text-sm mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
