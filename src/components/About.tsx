export default function About() {
  const features = [
    { icon: '🌾', title: 'Ethically Sourced', description: 'We partner with fair-trade coffee farmers worldwide' },
    { icon: '👨‍🍳', title: 'Expert Baristas', description: 'Our skilled team crafts every cup with precision and care' },
    { icon: '🏆', title: 'Award Winning', description: 'Recognized for excellence in quality and service' },
    { icon: '🌍', title: 'Sustainable', description: 'Committed to eco-friendly practices and reducing waste' },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-coffee-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">Why Choose Sedna</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-coffee-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-coffee-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-serif font-bold text-coffee-900 mb-4">
            Our Story
          </h3>
          <p className="text-coffee-700 text-lg leading-relaxed mb-4">
            Sedna Coffee was founded with a simple mission: to bring the world&apos;s finest coffee to our community. 
            We believe that great coffee is more than just a beverage&mdash;it&apos;s an experience, a moment of connection, 
            and a celebration of craftsmanship.
          </p>
          <p className="text-coffee-700 text-lg leading-relaxed">
            Every bean is carefully selected and roasted to perfection by our expert team. We work directly with 
            sustainable coffee farms to ensure quality while supporting ethical practices. At Sedna, we&apos;re not just 
            serving coffee; we&apos;re serving passion in every cup.
          </p>
        </div>
      </div>
    </section>
  )
}
