'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingCart, Heart, Star, Filter, Search } from 'lucide-react';

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Woaties Crypto Hoodie',
      category: 'clothing',
      price: '$49.99',
      originalPrice: '$69.99',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 124,
      description: 'Premium quality hoodie with embroidered Woaties logo',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Green', 'White'],
      onSale: true
    },
    {
      id: 2,
      name: 'Crypto Bull Canvas Print',
      category: 'wall-art',
      price: '$79.99',
      originalPrice: null,
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 89,
      description: 'High-quality canvas print featuring crypto bull market artwork',
      sizes: ['12x16', '16x20', '20x24', '24x36'],
      colors: ['Original'],
      onSale: false
    },
    {
      id: 3,
      name: 'Blockchain Beats Album',
      category: 'music',
      price: '$12.99',
      originalPrice: '$19.99',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 256,
      description: 'Exclusive crypto-themed music album with 12 original tracks',
      sizes: ['Digital Download'],
      colors: ['N/A'],
      onSale: true
    },
    {
      id: 4,
      name: 'Crypto Trader Cap',
      category: 'accessories',
      price: '$24.99',
      originalPrice: null,
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 78,
      description: 'Adjustable cap with premium embroidered crypto designs',
      sizes: ['One Size'],
      colors: ['Black', 'Green', 'Navy'],
      onSale: false
    },
    {
      id: 5,
      name: 'Moon Mission T-Shirt',
      category: 'clothing',
      price: '$29.99',
      originalPrice: '$39.99',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 167,
      description: 'Soft cotton t-shirt with "To The Moon" crypto design',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'White', 'Green'],
      onSale: true
    },
    {
      id: 6,
      name: 'Digital Dreams Poster',
      category: 'wall-art',
      price: '$19.99',
      originalPrice: null,
      image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5,
      reviews: 45,
      description: 'Futuristic digital art poster perfect for any crypto enthusiast',
      sizes: ['11x17', '18x24', '24x36'],
      colors: ['Original'],
      onSale: false
    },
    {
      id: 7,
      name: 'Crypto Wallet Keychain',
      category: 'accessories',
      price: '$14.99',
      originalPrice: '$19.99',
      image: 'https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.4,
      reviews: 92,
      description: 'Premium metal keychain shaped like a hardware wallet',
      sizes: ['Standard'],
      colors: ['Silver', 'Gold', 'Black'],
      onSale: true
    },
    {
      id: 8,
      name: 'DeFi Beats Playlist',
      category: 'music',
      price: '$9.99',
      originalPrice: null,
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 134,
      description: 'Curated playlist of electronic music inspired by DeFi culture',
      sizes: ['Digital Download'],
      colors: ['N/A'],
      onSale: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'wall-art', name: 'Wall Art' },
    { id: 'music', name: 'Music' }
  ];

  const partners = [
    { name: 'Printify', logo: '🖨️', description: 'Print-on-demand clothing and accessories' },
    { name: 'Redbubble', logo: '🎨', description: 'Unique designs and artwork' },
    { name: 'SoundCloud', logo: '🎵', description: 'Exclusive music and audio content' },
    { name: 'Spotify', logo: '🎧', description: 'Curated crypto-themed playlists' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5ff757]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Crypto <span className="text-gradient">Fashion Store</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Express your crypto passion with our premium collection of clothing, accessories, 
              wall art, and exclusive music content.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ff757]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#5ff757] text-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.onSale && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      SALE
                    </span>
                  )}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xl font-bold text-[#5ff757]">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => addToCart(product)}
                      className="flex-1 btn-primary text-sm"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                    <button className="flex-1 btn-secondary text-sm">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Powered by <span className="text-gradient">Trusted Partners</span>
            </h2>
            <p className="text-xl text-gray-600">
              We work with industry-leading platforms to bring you the best products
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl text-center card-hover">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}