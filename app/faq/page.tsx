'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, Search, MessageCircle, Mail, Phone } from 'lucide-react';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Questions' },
    { id: 'trading', name: 'Trading' },
    { id: 'nfts', name: 'NFTs' },
    { id: 'security', name: 'Security' },
    { id: 'payments', name: 'Payments' },
    { id: 'apps', name: 'Mobile Apps' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'trading',
      question: 'How do I start trading meme coins on Woaties?',
      answer: 'To start trading, create an account, complete KYC verification, deposit funds using BTC, ETH, SOL, PayPal, or Stripe, then navigate to our meme coins section. You can trade directly through our integrated platforms like DeFiLlama and MEVX.'
    },
    {
      id: 2,
      category: 'trading',
      question: 'What are the trading fees on Woaties?',
      answer: 'Our trading fees are competitive: 0.1% for makers and 0.2% for takers. VIP members enjoy reduced fees starting from 0.05%. There are no deposit fees, and withdrawal fees vary by cryptocurrency.'
    },
    {
      id: 3,
      category: 'nfts',
      question: 'How can I buy NFTs through Woaties?',
      answer: 'Browse our NFT marketplace or connect to OpenSea and Rarible through our platform. You can purchase NFTs using ETH or other supported cryptocurrencies. All transactions are secured and verified on the blockchain.'
    },
    {
      id: 4,
      category: 'nfts',
      question: 'Can I create and sell my own NFTs?',
      answer: 'Yes! Woaties supports NFT creation and minting. Upload your digital art or music, set your price, and list it on our marketplace. We also provide tools for creating NFT collections with utility features.'
    },
    {
      id: 5,
      category: 'security',
      question: 'How secure is my account and funds?',
      answer: 'We use bank-level security including 2FA, cold storage for funds, SSL encryption, and regular security audits. Your private keys are never stored on our servers, and we maintain insurance coverage for digital assets.'
    },
    {
      id: 6,
      category: 'security',
      question: 'What should I do if I suspect unauthorized access?',
      answer: 'Immediately change your password, enable 2FA if not already active, and contact our security team at security@woaties.com. We monitor all accounts 24/7 for suspicious activity and will assist with account recovery.'
    },
    {
      id: 7,
      category: 'payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept Bitcoin (BTC), Ethereum (ETH), Solana (SOL), PayPal, and Stripe payments. You can also use major credit cards through our Stripe integration for purchasing merchandise and premium features.'
    },
    {
      id: 8,
      category: 'payments',
      question: 'How long do withdrawals take?',
      answer: 'Cryptocurrency withdrawals typically process within 10-30 minutes. Fiat withdrawals to bank accounts take 1-3 business days. Large withdrawals may require additional verification and can take up to 24 hours.'
    },
    {
      id: 9,
      category: 'apps',
      question: 'Are your mobile apps available for both iOS and Android?',
      answer: 'Yes, all our apps (Woaties Trader, NFT Collector, Crypto Games Hub) are available on both iOS App Store and Google Play Store. Woaties Wallet is coming soon to both platforms.'
    },
    {
      id: 10,
      category: 'apps',
      question: 'Do mobile apps have the same features as the website?',
      answer: 'Our mobile apps offer core functionality with some exclusive mobile features like push notifications, biometric login, and offline portfolio viewing. Some advanced trading features are currently web-only but coming to mobile soon.'
    },
    {
      id: 11,
      category: 'trading',
      question: 'Can I trade as a guest without creating an account?',
      answer: 'You can browse and view market data as a guest, but trading requires account creation for security and regulatory compliance. However, account creation is quick and only requires basic information.'
    },
    {
      id: 12,
      category: 'security',
      question: 'Do you store my personal information securely?',
      answer: 'Yes, all personal data is encrypted and stored in compliance with GDPR and other privacy regulations. We never share your information with third parties without consent and regularly audit our data security practices.'
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5ff757]/10 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions about trading, NFTs, security, and our platform features.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#5ff757] text-lg"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category) => (
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

      {/* FAQ List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-6 h-6 text-[#5ff757] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(faq.id) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No questions found matching your search.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search terms or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Need <span className="text-gradient">Help?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Our support team is available 24/7 to assist you with any questions or issues.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <MessageCircle className="w-12 h-12 text-[#5ff757] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help from our support team</p>
              <button className="btn-primary w-full">Start Chat</button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <Mail className="w-12 h-12 text-[#5ff757] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us a detailed message</p>
              <button className="btn-secondary w-full">Send Email</button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <Phone className="w-12 h-12 text-[#5ff757] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <button className="btn-secondary w-full">Call Now</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}