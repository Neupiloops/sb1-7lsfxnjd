import { Coins, Image as ImageIcon, ShoppingBag, Smartphone, Gamepad2, Palette } from 'lucide-react';
import Link from 'next/link';

export default function Features() {
  const features = [
    {
      icon: Coins,
      title: 'Meme Coins Trading',
      description: 'Access 4 premium meme coins with real-time market data, advanced analytics, and seamless trading through integrated DeFi platforms.',
      link: '/meme-coins'
    },
    {
      icon: ImageIcon,
      title: 'NFT Marketplace',
      description: 'Discover, buy, and sell unique NFTs across multiple blockchains. Connected to OpenSea, Rarible, and other major marketplaces.',
      link: '/nfts'
    },
    {
      icon: ShoppingBag,
      title: 'Crypto Fashion Store',
      description: 'Premium clothing, accessories, wall art, and music. All items available through our integrated partners like Printify and Redbubble.',
      link: '/store'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native iOS and Android applications for trading on-the-go, portfolio management, and exclusive mobile features.',
      link: '/apps'
    },
    {
      icon: Gamepad2,
      title: 'Play-To-Earn',
      description: 'Engage in blockchain games, earn through airdrops, mining opportunities, and exclusive gaming rewards.',
      link: '/store'
    },
    {
      icon: Palette,
      title: 'DeFi Integration',
      description: 'Complete DeFi ecosystem with swaps, wallets, staking, and yield farming opportunities for maximum returns.',
      link: '/meme-coins'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need in <span className="text-gradient">One Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From trading meme coins to collecting NFTs, from crypto fashion to mobile apps - 
            we've built the ultimate cryptocurrency ecosystem.
          </p>
        </div>

        <div className="crypto-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#5ff757] to-[#4ae642] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#5ff757] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <Link
                href={feature.link}
                className="inline-flex items-center text-[#5ff757] font-semibold hover:text-[#4ae642] transition-colors"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}