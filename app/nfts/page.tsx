'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink, Heart, Eye, Music, Palette, Image as ImageIcon, Video } from 'lucide-react';

export default function NFTsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const nftCollections = [
    {
      id: 1,
      name: 'Woaties Genesis',
      category: 'art',
      floor: '0.5 ETH',
      volume: '125 ETH',
      items: '10,000',
      owners: '7,000',
      description: 'Exclusive genesis collection with utility benefits and community governance rights.',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      trending: true
    },
    {
      id: 2,
      name: 'Crypto Beats',
      category: 'music',
      floor: '0.3 ETH',
      volume: '89 ETH',
      items: '5,000',
      owners: '3,500',
      description: 'Revolutionary music NFTs featuring exclusive tracks from top crypto artists.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      trending: false
    },
    {
      id: 3,
      name: 'Digital Landscapes',
      category: 'art',
      floor: '0.2 ETH',
      volume: '67 ETH',
      items: '7,500',
      owners: '5,250',
      description: 'Stunning digital art collection featuring futuristic landscapes and environments.',
      image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      trending: true
    },
    {
      id: 4,
      name: 'Meme Legends',
      category: 'meme',
      floor: '0.15 ETH',
      volume: '45 ETH',
      items: '3,000',
      owners: '2,100',
      description: 'Iconic meme collection celebrating internet culture and crypto community.',
      image: 'https://images.pexels.com/photos/7567526/pexels-photo-7567526.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: false,
      trending: true
    },
    {
      id: 5,
      name: 'Crypto Symphonies',
      category: 'music',
      floor: '0.4 ETH',
      volume: '78 ETH',
      items: '2,500',
      owners: '1,750',
      description: 'Classical music meets blockchain technology in this premium audio NFT collection.',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      trending: false
    },
    {
      id: 6,
      name: 'Abstract Visions',
      category: 'art',
      floor: '0.25 ETH',
      volume: '56 ETH',
      items: '4,000',
      owners: '2,800',
      description: 'Contemporary abstract art collection by emerging digital artists.',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      trending: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All NFTs', icon: ImageIcon },
    { id: 'art', name: 'Digital Art', icon: Palette },
    { id: 'music', name: 'NFT Music', icon: Music },
    { id: 'meme', name: 'Meme NFTs', icon: Video }
  ];

  const marketplaces = [
    { name: 'OpenSea', logo: '🌊', url: '#' },
    { name: 'Rarible', logo: '🎨', url: '#' },
    { name: 'SuperRare', logo: '💎', url: '#' },
    { name: 'Foundation', logo: '🏛️', url: '#' }
  ];

  const filteredCollections = activeCategory === 'all' 
    ? nftCollections 
    : nftCollections.filter(collection => collection.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5ff757]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Premium <span className="text-gradient">NFT Collections</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover, collect, and trade unique digital assets including digital art and NFT music 
              from top creators and emerging artists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Palette className="w-12 h-12 text-[#5ff757] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Digital Art</h3>
              <p className="text-gray-600">Exclusive artwork from renowned digital artists</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Music className="w-12 h-12 text-[#5ff757] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">NFT Music</h3>
              <p className="text-gray-600">Revolutionary music NFTs and audio experiences</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Eye className="w-12 h-12 text-[#5ff757] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Curated Collections</h3>
              <p className="text-gray-600">Hand-picked collections with verified authenticity</p>
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
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#5ff757] text-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NFT Collections Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((collection) => (
              <div key={collection.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="relative">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {collection.verified && (
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        ✓ Verified
                      </span>
                    )}
                    {collection.trending && (
                      <span className="bg-[#5ff757] text-black px-2 py-1 rounded-full text-xs font-medium">
                        🔥 Trending
                      </span>
                    )}
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{collection.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{collection.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="text-gray-500">Floor Price</div>
                      <div className="font-semibold text-[#5ff757]">{collection.floor}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Volume</div>
                      <div className="font-semibold">{collection.volume}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Items</div>
                      <div className="font-semibold">{collection.items}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Owners</div>
                      <div className="font-semibold">{collection.owners}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 btn-primary text-sm">
                      View Collection
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                    <button className="flex-1 btn-secondary text-sm">
                      Quick Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Integrated <span className="text-gradient">NFT Marketplaces</span>
            </h2>
            <p className="text-xl text-gray-600">
              Access multiple NFT marketplaces from one unified platform
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {marketplaces.map((marketplace, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center card-hover">
                <div className="text-5xl mb-4">{marketplace.logo}</div>
                <h3 className="font-bold text-lg mb-4">{marketplace.name}</h3>
                <button className="btn-secondary w-full">
                  Browse NFTs
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}