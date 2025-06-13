'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, Mail, Phone, MapPin, CreditCard, Shield, CheckCircle } from 'lucide-react';

export default function GetStartedPage() {
  const [accountType, setAccountType] = useState('member');
  const [paymentMethod, setPaymentMethod] = useState('');

  const paymentMethods = [
    { id: 'btc', name: 'Bitcoin (BTC)', icon: '₿', description: 'Pay with Bitcoin' },
    { id: 'eth', name: 'Ethereum (ETH)', icon: 'Ξ', description: 'Pay with Ethereum' },
    { id: 'sol', name: 'Solana (SOL)', icon: '◎', description: 'Pay with Solana' },
    { id: 'paypal', name: 'PayPal', icon: '💳', description: 'Pay with PayPal' },
    { id: 'stripe', name: 'Credit Card', icon: '💳', description: 'Pay with Stripe' }
  ];

  const benefits = [
    { title: 'Real-time Trading', description: 'Access live market data and instant trading' },
    { title: 'Secure Wallet', description: 'Bank-level security for your digital assets' },
    { title: 'Premium Support', description: '24/7 customer support and assistance' },
    { title: 'Exclusive Access', description: 'Early access to new coins and NFT drops' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5ff757]/10 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get Started with <span className="text-gradient">Woaties</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users already trading crypto and collecting NFTs on our platform.
            Create your account in minutes and start your crypto journey today.
          </p>
        </div>
      </section>

      {/* Account Type Selection */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Choose Your Account Type</h2>
            <p className="text-gray-600">Select how you'd like to use our platform</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div 
              className={`p-8 rounded-2xl border-2 cursor-pointer transition-all ${
                accountType === 'member' 
                  ? 'border-[#5ff757] bg-[#5ff757]/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setAccountType('member')}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#5ff757] rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Member Account</h3>
                  <p className="text-gray-600">Full access with exclusive benefits</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#5ff757] mr-2" />
                  Lower trading fees
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#5ff757] mr-2" />
                  Priority customer support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#5ff757] mr-2" />
                  Early access to new features
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#5ff757] mr-2" />
                  Exclusive NFT drops
                </li>
              </ul>
            </div>

            <div 
              className={`p-8 rounded-2xl border-2 cursor-pointer transition-all ${
                accountType === 'guest' 
                  ? 'border-[#5ff757] bg-[#5ff757]/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setAccountType('guest')}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Guest Account</h3>
                  <p className="text-gray-600">Quick access with basic features</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                  Standard trading fees
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                  Basic customer support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                  Access to all trading features
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                  Upgrade anytime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Personal Information</h2>
            <p className="text-gray-600 text-center mb-8">
              We need your details for secure transactions and customer support
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ff757]"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ff757]"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ff757]"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ff757]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Address *
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ff757] resize-none"
                  placeholder="Enter your full address"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <CreditCard className="w-6 h-6 inline mr-2" />
              Choose Payment Method
            </h2>
            <p className="text-gray-600">Select your preferred payment option</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all text-center ${
                  paymentMethod === method.id
                    ? 'border-[#5ff757] bg-[#5ff757]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setPaymentMethod(method.id)}
              >
                <div className="text-3xl mb-2">{method.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{method.name}</h3>
                <p className="text-xs text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Woaties?</h2>
            <p className="text-gray-600">Join our community and enjoy these exclusive benefits</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-[#5ff757] mr-3" />
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-primary text-lg px-12 py-4 mb-4">
              Create Account
            </button>
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our Terms & Conditions and Privacy Policy
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}