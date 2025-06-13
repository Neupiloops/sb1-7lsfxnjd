'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, TrendingDown, ExternalLink, BarChart3, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function MemeCoinsPage() {
  const [selectedCoin, setSelectedCoin] = useState(null);

  const memeCoins = [
    {
      id: 1,
      name: 'WoatCoin',
      symbol: 'WOAT',
      slug: 'woatcoin',
      price: '$2.45',
      change: '+15.67%',
      change24h: '+12.34%',
      isPositive: true,
      marketCap: '$245M',
      volume: '$125M',
      supply: '100,000,000',
      holders: '25,847',
      description: 'Our flagship meme coin with strong community backing and innovative tokenomics.',
      features: ['Community Governance', 'Staking Rewards', 'NFT Integration', 'DeFi Compatible'],
      chart: 'https://via.placeholder.com/400x200/5ff757/ffffff?text=WOAT+Chart'
    },
    {
      id: 2,
      name: 'GreenMeme',
      symbol: 'GMEME',
      slug: 'greenmeme',
      price: '$1.56',
      change: '+8.43%',
      change24h: '+5.21%',
      isPositive: true,
      marketCap: '$156M',
      volume: '$89M',
      supply: '100,000,000',
      holders: '18,392',
      description: 'Eco-friendly meme coin focused on sustainable crypto future and carbon neutrality.',
      features: ['Carbon Neutral', 'Green Mining', 'Eco Rewards', 'Sustainability Focus'],
      chart: 'https://via.placeholder.com/400x200/4ae642/ffffff?text=GMEME+Chart'
    },
    {
      id: 3,
      name: 'CryptoLaugh',
      symbol: 'LAUGH',
      slug: 'cryptolaugh',
      price: '$0.89',
      change: '-2.15%',
      change24h: '-1.87%',
      isPositive: false,
      marketCap: '$89M',
      volume: '$45M',
      supply: '100,000,000',
      holders: '12,567',
      description: 'The funniest coin in the crypto space with meme-powered utility and entertainment value.',
      features: ['Meme Rewards', 'Comedy NFTs', 'Social Features', 'Entertainment Platform'],
      chart: 'https://via.placeholder.com/400x200/ff6b6b/ffffff?text=LAUGH+Chart'
    },
    {
      id: 4,
      name: 'MoonShot',
      symbol: 'MOON',
      slug: 'moonshot',
      price: '$3.45',
      change: '+22.89%',
      change24h: '+18.76%',
      isPositive: true,
      marketCap: '$345M',
      volume: '$234M',
      supply: '100,000,000',
      holders: '31,245',
      description: 'High-potential meme coin aiming for astronomical gains with community-driven growth.',
      features: ['High Yield Potential', 'Community Driven', 'Deflationary Model', 'Burn Mechanism'],
      chart: 'https://via.placeholder.com/400x200/ffd93d/ffffff?text=MOON+Chart'
    }
  ];

  const tradingPlatforms = [
    { name: 'DeFiLlama', url: '#', logo: '🦙' },
    { name: 'MEVX', url: '#', logo: '⚡' },
    { name: 'Uniswap', url: '#', logo: '🦄' },
    { name: 'PancakeSwap', url: '#', logo: '🥞' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5ff757]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Premium <span className="text-gradient">Meme Coins</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our curated selection of high-potential meme coins with real-time market data, 
              advanced analytics, and seamless trading integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <BarChart3 className="w-12 h-12 text-[#5ff757] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Real-Time Data</h3>
              <p className="text-gray-600">Live market data and price tracking</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Shield className="w-12 h-12 text-[#5ff757] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Secure Trading</h3>
              <p className="text-gray-600">Bank-level security and encryption</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Zap className="w-12 h-12 text-[#5ff757] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Instant Execution</h3>
              <p className="text-gray-600">Lightning-fast trade execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coins Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {memeCoins.map((coin) => (
              <div key={coin.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-2xl">{coin.name}</h3>
                    <p className="text-gray-500 text-lg">{coin.symbol}</p>
                  </div>
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full text-lg font-medium ${
                    coin.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {coin.isPositive ? (
                      <TrendingUp className="w-5 h-5" />
                    ) : (
                      <TrendingDown className="w-5 h-5" />
                    )}
                    <span>{coin.change}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-[#5ff757] mb-2">{coin.price}</div>
                    <div className="text-sm text-gray-600">Current Price</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-2">{coin.change24h}</div>
                    <div className="text-sm text-gray-600">24h Change</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-2">{coin.marketCap}</div>
                    <div className="text-sm text-gray-600">Market Cap</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-2">{coin.volume}</div>
                    <div className="text-sm text-gray-600">24h Volume</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{coin.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {coin.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-[#5ff757]/10 text-[#5ff757] rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link href="/get-started" className="flex-1 btn-primary text-center">
                    Trade Now
                  </Link>
                  <Link href={`/meme-coins/${coin.slug}`} className="flex-1 btn-secondary text-center">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Integrated <span className="text-gradient">Trading Platforms</span>
            </h2>
            <p className="text-xl text-gray-600">
              Trade seamlessly across multiple DeFi platforms and exchanges
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {tradingPlatforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl text-center card-hover">
                <div className="text-4xl mb-4">{platform.logo}</div>
                <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
                <Link href="/get-started" className="btn-secondary w-full text-center block">
                  Trade Here
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}