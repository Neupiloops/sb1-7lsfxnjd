'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Smartphone, Download, Star, Shield, Zap, Users } from 'lucide-react';

export default function AppsPage() {
  const apps = [
    {
      id: 1,
      name: 'Woaties Trader',
      category: 'Trading',
      description: 'Professional crypto trading app with real-time market data, advanced charting, and portfolio management.',
      features: [
        'Real-time price tracking',
        'Advanced trading tools',
        'Portfolio analytics',
        'Price alerts & notifications',
        'Multi-exchange support',
        'Secure wallet integration'
      ],
      platforms: ['iOS', 'Android'],
      rating: 4.8,
      downloads: '500K+',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      screenshots: [
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=200',
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200',
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200'
      ],
      comingSoon: false
    },
    {
      id: 2,
      name: 'NFT Collector',
      category: 'NFT Marketplace',
      description: 'Discover, buy, and manage your NFT collection with our intuitive mobile marketplace app.',
      features: [
        'Browse NFT collections',
        'Instant buying & selling',
        'Collection management',
        'Price history tracking',
        'Social features',
        'Augmented reality preview'
      ],
      platforms: ['iOS', 'Android'],
      rating: 4.7,
      downloads: '250K+',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=400',
      screenshots: [
        'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=200',
        'https://images.pexels.com/photos/7567526/pexels-photo-7567526.jpeg?auto=compress&cs=tinysrgb&w=200',
        'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=200'
      ],
      comingSoon: false
    },
    {
      id: 3,
      name: 'Crypto Games Hub',
      category: 'Gaming',
      description: 'Play-to-earn gaming platform with multiple blockchain games, tournaments, and rewards.',
      features: [
        'Multiple P2E games',
        'Tournament system',
        'Leaderboards',
        'Crypto rewards',
        'Social gaming features',
        'Achievement system'
      ],
      platforms: ['iOS', 'Android'],
      rating: 4.6,
      downloads: '150K+',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      screenshots: [
        'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=200',
        'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=200',
        'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=200'
      ],
      comingSoon: false
    },
    {
      id: 4,
      name: 'Woaties Wallet',
      category: 'Wallet & Security',
      description: 'Secure multi-chain wallet with DeFi integration, staking, and advanced security features.',
      features: [
        'Multi-chain support',
        'DeFi integration',
        'Staking rewards',
        'Hardware wallet support',
        'Biometric security',
        'Transaction history'
      ],
      platforms: ['iOS', 'Android'],
      rating: 4.9,
      downloads: '100K+',
      image: 'https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&w=400',
      screenshots: [
        'https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&w=200',
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200',
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=200'
      ],
      comingSoon: true
    }
  ];

  const appStats = [
    { label: 'Total Downloads', value: '1M+', icon: Download },
    { label: 'Average Rating', value: '4.8', icon: Star },
    { label: 'Active Users', value: '500K+', icon: Users },
    { label: 'Security Score', value: '99.9%', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5ff757]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Woaties <span className="text-gradient">Mobile Apps</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your crypto experience mobile with our suite of professional-grade applications 
              for iOS and Android devices.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {appStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <stat.icon className="w-12 h-12 text-[#5ff757] mx-auto mb-4" />
                <div className="text-2xl font-bold text-[#5ff757] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {apps.map((app, index) => (
              <div key={app.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* App Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#5ff757]/10 text-[#5ff757] rounded-full text-sm font-medium mb-2">
                      {app.category}
                    </span>
                    {app.comingSoon && (
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-2 ml-2">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">{app.name}</h2>
                  <p className="text-xl text-gray-600 mb-6">{app.description}</p>

                  <div className="flex items-center mb-6">
                    <div className="flex items-center mr-6">
                      <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold">{app.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="w-5 h-5 text-gray-400 mr-1" />
                      <span className="text-gray-600">{app.downloads} downloads</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {app.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-[#5ff757] rounded-full mr-3"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {app.platforms.map((platform) => (
                      <button 
                        key={platform}
                        className={`btn-primary ${app.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={app.comingSoon}
                      >
                        <Smartphone className="w-5 h-5 mr-2" />
                        {app.comingSoon ? `${platform} Soon` : `Download for ${platform}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* App Screenshots */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#5ff757]/20 to-[#4ae642]/20 rounded-3xl p-8">
                      <img 
                        src={app.image} 
                        alt={app.name}
                        className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                      />
                    </div>
                    
                    <div className="flex justify-center mt-6 space-x-4">
                      {app.screenshots.map((screenshot, screenshotIndex) => (
                        <img 
                          key={screenshotIndex}
                          src={screenshot} 
                          alt={`${app.name} screenshot ${screenshotIndex + 1}`}
                          className="w-16 h-16 rounded-lg object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose <span className="text-gradient">Woaties Apps</span>
            </h2>
            <p className="text-xl text-gray-600">
              Built with cutting-edge technology and user-centric design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-16 h-16 text-[#5ff757] mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Bank-Level Security</h3>
              <p className="text-gray-600">
                Advanced encryption, biometric authentication, and multi-layer security protocols 
                protect your assets and data.
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 text-[#5ff757] mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized performance with real-time data synchronization and instant 
                transaction processing.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-[#5ff757] mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Community Driven</h3>
              <p className="text-gray-600">
                Built based on community feedback with regular updates and new features 
                requested by our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}