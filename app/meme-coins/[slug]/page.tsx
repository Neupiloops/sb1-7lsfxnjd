'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, TrendingDown, ExternalLink, BarChart3, Users, DollarSign, Activity, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CoinDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const coinData = {
    'woatcoin': {
      name: 'WoatCoin',
      symbol: 'WOAT',
      price: '$2.45',
      change: '+15.67%',
      change24h: '+12.34%',
      isPositive: true,
      marketCap: '$245M',
      volume: '$125M',
      supply: '100,000,000',
      holders: '25,847',
      description: 'WoatCoin is our flagship meme coin designed with strong community backing and innovative tokenomics. Built on a sustainable blockchain infrastructure, WOAT offers holders governance rights, staking rewards, and exclusive access to platform features.',
      features: ['Community Governance', 'Staking Rewards', 'NFT Integration', 'DeFi Compatible'],
      technicalData: {
        allTimeHigh: '$3.89',
        allTimeLow: '$0.12',
        circulatingSupply: '75,000,000',
        totalSupply: '100,000,000',
        maxSupply: '100,000,000',
        rank: '#156'
      },
      priceHistory: [
        { time: '1H', change: '+2.34%', positive: true },
        { time: '24H', change: '+15.67%', positive: true },
        { time: '7D', change: '+45.23%', positive: true },
        { time: '30D', change: '+123.45%', positive: true },
        { time: '1Y', change: '+1,234.56%', positive: true }
      ]
    },
    'greenmeme': {
      name: 'GreenMeme',
      symbol: 'GMEME',
      price: '$1.56',
      change: '+8.43%',
      change24h: '+5.21%',
      isPositive: true,
      marketCap: '$156M',
      volume: '$89M',
      supply: '100,000,000',
      holders: '18,392',
      description: 'GreenMeme is the eco-friendly meme coin focused on sustainable crypto future and carbon neutrality. Every transaction contributes to environmental projects and green initiatives.',
      features: ['Carbon Neutral', 'Green Mining', 'Eco Rewards', 'Sustainability Focus'],
      technicalData: {
        allTimeHigh: '$2.89',
        allTimeLow: '$0.08',
        circulatingSupply: '80,000,000',
        totalSupply: '100,000,000',
        maxSupply: '100,000,000',
        rank: '#234'
      },
      priceHistory: [
        { time: '1H', change: '+1.23%', positive: true },
        { time: '24H', change: '+8.43%', positive: true },
        { time: '7D', change: '+23.45%', positive: true },
        { time: '30D', change: '+67.89%', positive: true },
        { time: '1Y', change: '+890.12%', positive: true }
      ]
    },
    'cryptolaugh': {
      name: 'CryptoLaugh',
      symbol: 'LAUGH',
      price: '$0.89',
      change: '-2.15%',
      change24h: '-1.87%',
      isPositive: false,
      marketCap: '$89M',
      volume: '$45M',
      supply: '100,000,000',
      holders: '12,567',
      description: 'CryptoLaugh is the funniest coin in the crypto space with meme-powered utility and entertainment value. Built for the community that loves humor and crypto.',
      features: ['Meme Rewards', 'Comedy NFTs', 'Social Features', 'Entertainment Platform'],
      technicalData: {
        allTimeHigh: '$1.89',
        allTimeLow: '$0.05',
        circulatingSupply: '90,000,000',
        totalSupply: '100,000,000',
        maxSupply: '100,000,000',
        rank: '#345'
      },
      priceHistory: [
        { time: '1H', change: '-0.45%', positive: false },
        { time: '24H', change: '-2.15%', positive: false },
        { time: '7D', change: '+12.34%', positive: true },
        { time: '30D', change: '+34.56%', positive: true },
        { time: '1Y', change: '+567.89%', positive: true }
      ]
    },
    'moonshot': {
      name: 'MoonShot',
      symbol: 'MOON',
      price: '$3.45',
      change: '+22.89%',
      change24h: '+18.76%',
      isPositive: true,
      marketCap: '$345M',
      volume: '$234M',
      supply: '100,000,000',
      holders: '31,245',
      description: 'MoonShot is the high-potential meme coin aiming for astronomical gains with community-driven growth. Built with deflationary tokenomics and burn mechanisms.',
      features: ['High Yield Potential', 'Community Driven', 'Deflationary Model', 'Burn Mechanism'],
      technicalData: {
        allTimeHigh: '$4.89',
        allTimeLow: '$0.15',
        circulatingSupply: '70,000,000',
        totalSupply: '100,000,000',
        maxSupply: '100,000,000',
        rank: '#89'
      },
      priceHistory: [
        { time: '1H', change: '+3.45%', positive: true },
        { time: '24H', change: '+22.89%', positive: true },
        { time: '7D', change: '+56.78%', positive: true },
        { time: '30D', change: '+145.67%', positive: true },
        { time: '1Y', change: '+2,234.56%', positive: true }
      ]
    }
  };

  const coin = coinData[slug as keyof typeof coinData];

  if (!coin) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Coin Not Found</h1>
          <Link href="/meme-coins" className="btn-primary">
            Back to Meme Coins
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#5ff757]/10 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/meme-coins" className="inline-flex items-center text-[#5ff757] hover:text-[#4ae642] mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Meme Coins
          </Link>
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">{coin.name}</h1>
              <p className="text-xl text-gray-600">{coin.symbol}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-[#5ff757] mb-2">{coin.price}</div>
              <div className={`flex items-center justify-end space-x-2 px-4 py-2 rounded-full text-lg font-medium ${
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
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Price Chart Placeholder */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Price Chart</h2>
                <div className="bg-gradient-to-r from-[#5ff757]/20 to-[#4ae642]/20 h-64 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-[#5ff757] mx-auto mb-4" />
                    <p className="text-gray-600">Interactive price chart coming soon</p>
                  </div>
                </div>
              </div>

              {/* Price Performance */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Price Performance</h2>
                <div className="grid grid-cols-5 gap-4">
                  {coin.priceHistory.map((period, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm text-gray-500 mb-2">{period.time}</div>
                      <div className={`font-semibold ${period.positive ? 'text-green-600' : 'text-red-600'}`}>
                        {period.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* About */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">About {coin.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{coin.description}</p>
                
                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {coin.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#5ff757] rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Actions */}
            <div className="space-y-6">
              {/* Market Stats */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg mb-4">Market Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Market Cap</span>
                    <span className="font-semibold">{coin.marketCap}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">24h Volume</span>
                    <span className="font-semibold">{coin.volume}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Holders</span>
                    <span className="font-semibold">{coin.holders}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rank</span>
                    <span className="font-semibold">{coin.technicalData.rank}</span>
                  </div>
                </div>
              </div>

              {/* Technical Data */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg mb-4">Technical Data</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">All-Time High</span>
                    <span className="font-semibold">{coin.technicalData.allTimeHigh}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">All-Time Low</span>
                    <span className="font-semibold">{coin.technicalData.allTimeLow}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Circulating Supply</span>
                    <span className="font-semibold">{coin.technicalData.circulatingSupply}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Supply</span>
                    <span className="font-semibold">{coin.technicalData.totalSupply}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Supply</span>
                    <span className="font-semibold">{coin.technicalData.maxSupply}</span>
                  </div>
                </div>
              </div>

              {/* Trading Actions */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg mb-4">Trade {coin.symbol}</h3>
                <div className="space-y-3">
                  <button className="w-full btn-primary">
                    Buy {coin.symbol}
                  </button>
                  <button className="w-full btn-secondary">
                    Sell {coin.symbol}
                  </button>
                  <Link href="/get-started" className="w-full btn-secondary text-center block">
                    Create Account
                  </Link>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <DollarSign className="w-8 h-8 text-[#5ff757] mx-auto mb-2" />
                  <div className="font-bold text-lg">{coin.marketCap}</div>
                  <div className="text-sm text-gray-600">Market Cap</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <Users className="w-8 h-8 text-[#5ff757] mx-auto mb-2" />
                  <div className="font-bold text-lg">{coin.holders}</div>
                  <div className="text-sm text-gray-600">Holders</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <Activity className="w-8 h-8 text-[#5ff757] mx-auto mb-2" />
                  <div className="font-bold text-lg">{coin.volume}</div>
                  <div className="text-sm text-gray-600">24h Volume</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <BarChart3 className="w-8 h-8 text-[#5ff757] mx-auto mb-2" />
                  <div className="font-bold text-lg">{coin.technicalData.rank}</div>
                  <div className="text-sm text-gray-600">Rank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}