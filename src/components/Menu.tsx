'use client'

import { useState } from 'react'

export default function Menu() {
  const [cart, setCart] = useState<{ name: string; price: string }[]>([])

  const menuItems = {
    coffee: [
      { name: 'Espresso', description: 'Classic Italian-style espresso shot, bold and concentrated', price: '$3.50', rating: 4.8, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop', category: 'Coffee' },
      { name: 'Cappuccino', description: 'Silky smooth cappuccino with premium steamed milk and foam', price: '$4.50', rating: 4.9, image: 'https://images.unsplash.com/photo-1541877944-fe21dfe8aa36?w=400&h=400&fit=crop', category: 'Coffee' },
      { name: 'Latte', description: 'Rich and creamy latte, perfectly balanced with espresso', price: '$4.75', rating: 5.0, image: 'https://images.unsplash.com/photo-1505252585461-04db1267ae5b?w=400&h=400&fit=crop', category: 'Coffee' },
      { name: 'Americano', description: 'Strong, bold American-style coffee with hot water', price: '$3.75', rating: 4.7, image: 'https://images.unsplash.com/photo-1527701878885-c0a40eec8464?w=400&h=400&fit=crop', category: 'Coffee' },
      { name: 'Macchiato', description: 'Espresso marked with steamed milk foam', price: '$4.25', rating: 4.8, image: 'https://images.unsplash.com/photo-1570968915860-54d5c301995f?w=400&h=400&fit=crop', category: 'Coffee' },
      { name: 'Flat White', description: 'Velvety microfoam blended with double espresso', price: '$5.00', rating: 5.0, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop', category: 'Coffee' },
      { name: 'Mocha', description: 'Espresso with steamed milk and rich chocolate', price: '$5.25', rating: 4.9, image: 'https://images.unsplash.com/photo-1578432284048-a20db7f7e6dc?w=400&h=400&fit=crop', category: 'Coffee' },
      { name: 'Cortado', description: 'Equal parts espresso and steamed milk', price: '$4.00', rating: 4.7, image: 'https://images.unsplash.com/photo-1442512671620-e2b4a30189f3?w=400&h=400&fit=crop', category: 'Coffee' },
    ],
    tea: [
      { name: 'Green Tea', description: 'Refreshing organic green tea with fresh aroma', price: '$3.50', rating: 4.6, image: 'https://images.unsplash.com/photo-1597318861130-b20b1cce1f0f?w=400&h=400&fit=crop', category: 'Tea' },
      { name: 'Earl Grey', description: 'Classic black tea with bergamot essence', price: '$3.75', rating: 4.7, image: 'https://images.unsplash.com/photo-1582820562833-91e374d7b4c7?w=400&h=400&fit=crop', category: 'Tea' },
      { name: 'Chai Latte', description: 'Spiced chai tea with creamy steamed milk', price: '$4.50', rating: 4.9, image: 'https://images.unsplash.com/photo-1563208533-1bd39d9a6ec8?w=400&h=400&fit=crop', category: 'Tea' },
      { name: 'Matcha Latte', description: 'Vibrant matcha green tea with premium milk', price: '$5.00', rating: 4.8, image: 'https://images.unsplash.com/photo-1546521521-08ce6e52949a?w=400&h=400&fit=crop', category: 'Tea' },
    ],
    pastries: [
      { name: 'Croissant', description: 'Buttery, flaky French croissant, freshly baked', price: '$4.00', rating: 4.9, image: 'https://images.unsplash.com/photo-1585518419759-148b109aad9f?w=400&h=400&fit=crop', category: 'Pastry' },
      { name: 'Chocolate Croissant', description: 'Rich chocolate croissant with premium chocolate bars', price: '$4.50', rating: 5.0, image: 'https://images.unsplash.com/photo-1509365338328-0b76038e4c7d?w=400&h=400&fit=crop', category: 'Pastry' },
      { name: 'Blueberry Muffin', description: 'Moist homemade muffin with fresh blueberries', price: '$3.75', rating: 4.8, image: 'https://images.unsplash.com/photo-1607920591413-41ec4347f0d4?w=400&h=400&fit=crop', category: 'Pastry' },
      { name: 'Cinnamon Roll', description: 'Soft, sweet cinnamon roll with cream cheese frosting', price: '$4.25', rating: 4.9, image: 'https://images.unsplash.com/photo-1611689342806-0863700ce1d8?w=400&h=400&fit=crop', category: 'Pastry' },
    ]
  }

  const allItems = [...menuItems.coffee, ...menuItems.tea, ...menuItems.pastries]

  const addToCart = (item: { name: string; price: string }) => {
    setCart([...cart, item])
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        <span className="text-yellow-400">★</span>
        <span className="text-sm text-coffee-600">{rating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <section id="menu" className="py-20 px-4 bg-gradient-to-b from-coffee-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-center mb-12">Our Premium Menu</h2>
        
        {/* Menu by Category */}
        <div className="space-y-16">
          {/* Coffee Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-3xl font-serif font-bold text-coffee-900">☕ Coffee Classics</h3>
              <span className="px-3 py-1 bg-coffee-600 text-white rounded-full text-sm font-semibold">8 Items</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.coffee.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-coffee-100 hover:border-coffee-300"
                >
                  {/* Image */}
                  <div className="relative h-40 bg-gradient-to-br from-coffee-100 to-coffee-200 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23D4A574" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="%238B4513"%3E☕%3C/text%3E%3C/svg%3E'
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    {/* Category Badge */}
                    <div className="inline-block mb-2">
                      <span className="text-xs font-semibold px-2 py-1 bg-coffee-100 text-coffee-700 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Name */}
                    <h4 className="text-lg font-serif font-bold text-coffee-900 mb-1">
                      {item.name}
                    </h4>

                    {/* Rating */}
                    <div className="mb-3">
                      {renderStars(item.rating)}
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-coffee-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Price and Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-coffee-100">
                      <span className="text-xl font-bold text-coffee-600">
                        {item.price}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-coffee-600 text-white px-3 py-2 rounded-lg hover:bg-coffee-700 transition text-sm font-semibold"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tea Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-3xl font-serif font-bold text-coffee-900">🍵 Premium Teas</h3>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold">4 Items</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.tea.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-green-100 hover:border-green-300"
                >
                  <div className="relative h-40 bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23D1FAE5" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="%23059669"%3E🍵%3C/text%3E%3C/svg%3E'
                      }}
                    />
                  </div>
                  
                  <div className="p-5">
                    <div className="inline-block mb-2">
                      <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-serif font-bold text-coffee-900 mb-1">
                      {item.name}
                    </h4>

                    <div className="mb-3">
                      {renderStars(item.rating)}
                    </div>
                    
                    <p className="text-sm text-coffee-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-green-100">
                      <span className="text-xl font-bold text-green-600">
                        {item.price}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition text-sm font-semibold"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pastries Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-3xl font-serif font-bold text-coffee-900">🥐 Fresh Pastries</h3>
              <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-sm font-semibold">4 Items</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.pastries.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-yellow-100 hover:border-yellow-300"
                >
                  <div className="relative h-40 bg-gradient-to-br from-yellow-100 to-yellow-200 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23FEF3C7" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="%23D97706"%3E🥐%3C/text%3E%3C/svg%3E'
                      }}
                    />
                  </div>
                  
                  <div className="p-5">
                    <div className="inline-block mb-2">
                      <span className="text-xs font-semibold px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-serif font-bold text-coffee-900 mb-1">
                      {item.name}
                    </h4>

                    <div className="mb-3">
                      {renderStars(item.rating)}
                    </div>
                    
                    <p className="text-sm text-coffee-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-yellow-100">
                      <span className="text-xl font-bold text-yellow-600">
                        {item.price}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-yellow-600 text-white px-3 py-2 rounded-lg hover:bg-yellow-700 transition text-sm font-semibold"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="mt-12 bg-coffee-50 p-6 rounded-lg text-center">
            <p className="text-lg font-semibold text-coffee-900">
              🛒 Items in cart: <span className="text-coffee-600">{cart.length}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
