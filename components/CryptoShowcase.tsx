'use client';

import { TrendingUp, TrendingDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function CryptoShowcase() {
  const memeCoins = [
    {
      name: 'WoatCoin',
      symbol: 'WOAT',
      price: '$2.45',
      change: '+15.67%',
      isPositive: true,
      marketCap: '$245M',
      volume: '$125M',
      description: 'Our flagship meme coin with strong community backing'
    },
    {
      name: 'GreenMeme',
      symbol: 'GMEME',
      price: '$1.56',
      change: '+8.43%',
      isPositive: true,
      marketCap: '$156M',
      volume: '$89M',
      description: 'Eco-friendly meme coin for sustainable crypto future'
    },
    {
      name: 'CryptoLaugh',
      symbol: 'LAUGH',
      price: '$0.89',
      change: '-2.15%',
      isPositive: false,
      marketCap: '$89M',
      volume: '$45M',
      description: 'The funniest coin in the crypto space'
    },
    {
      name: 'MoonShot',
      symbol: 'MOON',
      price: '$3.45',
      change: '+22.89%',
      isPositive: true,
      marketCap: '$345M',
      volume: '$234M',
      description: 'Aiming for the moon with community power'
    }
  ];

  const nftCollections = [
    {
      name: 'Woaties Genesis',
      floor: '0.5 ETH',
      volume: '125 ETH',
      items: '10,000',
      description: 'Exclusive genesis collection with utility benefits'
    },
    {
      name: 'Crypto Punks Meme',
      floor: '0.3 ETH',
      volume: '89 ETH',
      items: '5,000',
      description: 'Meme-inspired punk avatars for the community'
    },
    {
      name: 'Green Warriors',
      floor: '0.2 ETH',
      volume: '67 ETH',
      items: '7,500',
      description: 'Environmental warriors fighting for crypto sustainability'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Meme Coins Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Meme Coins</span>
            </h2>
            <p className="text-xl text-gray-600">
              Discover our curated selection of premium meme coins with real-time market data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memeCoins.map((coin, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{coin.name}</h3>
                    <p className="text-gray-500 text-sm">{coin.symbol}</p>
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm font-medium ${
                    coin.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {coin.isPositive ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{coin.change}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-2xl font-bold text-[#5ff757]">{coin.price}</div>
                  <div className="text-sm text-gray-600">
                    <div>Market Cap: {coin.marketCap}</div>
                    <div>Volume: {coin.volume}</div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{coin.description}</p>

                <Link href="/meme-coins" className="w-full btn-primary text-sm text-center block">
                  Trade Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* NFT Collections Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Premium <span className="text-gradient">NFT Collections</span>
            </h2>
            <p className="text-xl text-gray-600">
              Exclusive NFT collections with utility and community benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nftCollections.map((collection, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg card-hover border border-gray-100">
                <div className="aspect-square bg-gradient-to-br from-[#5ff757] to-[#4ae642] rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">{collection.name.charAt(0)}</div>
                </div>

                <h3 className="font-bold text-xl mb-2">{collection.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{collection.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <div className="text-gray-500">Floor Price</div>
                    <div className="font-semibold">{collection.floor}</div>
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
                    <div className="font-semibold">{Math.floor(parseInt(collection.items.replace(',', '')) * 0.7).toLocaleString()}</div>
                  </div>
                </div>

                <Link href="/nfts" className="w-full btn-secondary text-sm text-center block">
                  View Collection
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}