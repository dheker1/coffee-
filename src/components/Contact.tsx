'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-coffee-900 mb-2">
                Visit Us
              </h3>
              <p className="text-coffee-700 text-lg">
                123 Coffee Street<br />
                Downtown District<br />
                Your City, ST 12345
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-semibold text-coffee-900 mb-2">
                Hours
              </h3>
              <p className="text-coffee-700 text-lg">
                Monday - Friday: 7:00 AM - 8:00 PM<br />
                Saturday: 8:00 AM - 9:00 PM<br />
                Sunday: 8:00 AM - 7:00 PM
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-semibold text-coffee-900 mb-2">
                Contact
              </h3>
              <p className="text-coffee-700 text-lg">
                Phone: (555) 123-4567<br />
                Email: hello@sednacoffee.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-coffee-50 p-8 rounded-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-coffee-900 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:border-coffee-600"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-coffee-900 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:border-coffee-600"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-coffee-900 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:border-coffee-600"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-primary hover:bg-coffee-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
