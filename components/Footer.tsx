import Image from 'next/image';
import { Facebook, Twitter, MessageCircle, Youtube, Music, Send, MessageSquare } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'X (Twitter)', icon: Twitter, href: '#' },
    { name: 'Discord', icon: MessageCircle, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'TikTok', icon: Music, href: '#' },
    { name: 'Telegram', icon: Send, href: '#' },
    { name: 'Reddit', icon: MessageSquare, href: '#' }
  ];

  const footerLinks = {
    Platform: [
      { name: 'Meme Coins', href: '/meme-coins' },
      { name: 'NFT Marketplace', href: '/nfts' },
      { name: 'Crypto Fashion', href: '/store' },
      { name: 'Mobile Apps', href: '/apps' }
    ],
    Trading: [
      { name: 'DeFiLlama Integration', href: '#' },
      { name: 'MEVX Platform', href: '#' },
      { name: 'OpenSea NFTs', href: '#' },
      { name: 'Rarible Market', href: '#' }
    ],
    Support: [
      { name: 'Help Center', href: '/faq' },
      { name: 'Contact Us', href: '/about#contact' },
      { name: 'Community', href: '#' },
      { name: 'API Documentation', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Compliance', href: '/compliance' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/genesgit-png.png"
                alt="Woaties Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-gradient">Woaties</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your comprehensive all-in-one platform for cryptocurrency trading, NFT collecting, 
              crypto fashion, and innovative blockchain applications. Join the future of digital finance.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Connect With Us</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-[#5ff757] rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-black" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4 text-[#5ff757]">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#5ff757] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
              <p className="text-gray-300">
                Get the latest news about new coins, NFT drops, and platform updates.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#5ff757] text-white"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Woaties. All rights reserved. | Cryptocurrency trading involves risk.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🔒 SSL Secured</span>
              <span>⚡ 99.9% Uptime</span>
              <span>🛡️ Insured Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}