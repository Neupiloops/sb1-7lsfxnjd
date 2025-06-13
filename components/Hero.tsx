'use client';

import { TrendingUp, Shield, Zap, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Explore the Future of{' '}
                <span className="text-gradient">Crypto</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your comprehensive all-in-one platform for meme coins, NFTs, Play-To-Earn gaming, 
                crypto fashion, and innovative mobile applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" className="btn-primary group text-center">
                Start Trading
              </Link>
              <Link href="/nfts" className="btn-secondary text-center">
                Explore NFTs
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-[#5ff757]">500K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#5ff757]">$2.5B+</div>
                <div className="text-sm text-gray-600">Trading Volume</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#5ff757]">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            <div className="grid gap-6">
              <Link href="/meme-coins" className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-gray-100 block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#5ff757]/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#5ff757]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Meme Coins Trading</h3>
                    <p className="text-gray-600">Access top meme coins with real-time data</p>
                  </div>
                </div>
              </Link>

              <Link href="/nfts" className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-gray-100 block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#5ff757]/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#5ff757]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Secure NFT Marketplace</h3>
                    <p className="text-gray-600">Buy, sell, and trade NFTs safely</p>
                  </div>
                </div>
              </Link>

              <Link href="/store" className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-gray-100 block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#5ff757]/10 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-[#5ff757]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Crypto Fashion Store</h3>
                    <p className="text-gray-600">Premium clothing, accessories & art</p>
                  </div>
                </div>
              </Link>

              <Link href="/apps" className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-gray-100 block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#5ff757]/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#5ff757]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mobile Apps</h3>
                    <p className="text-gray-600">Trade and manage on-the-go</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5ff757]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5ff757]/3 rounded-full blur-2xl animate-float"></div>
    </section>
  );
}