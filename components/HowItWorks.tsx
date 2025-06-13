import { UserPlus, CreditCard, ShoppingCart, Truck } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Account',
      description: 'Sign up as a member or continue as a guest. Provide your details for secure transactions and customer support.',
      step: '01'
    },
    {
      icon: CreditCard,
      title: 'Choose Payment',
      description: 'Select from BTC, ETH, SOL, PayPal, or Stripe. Multiple payment options for your convenience.',
      step: '02'
    },
    {
      icon: ShoppingCart,
      title: 'Shop & Trade',
      description: 'Browse meme coins, NFTs, fashion items, and apps. Make purchases through our integrated platforms.',
      step: '03'
    },
    {
      icon: Truck,
      title: 'Receive & Enjoy',
      description: 'Get your digital assets instantly or physical products delivered. 24/7 customer support available.',
      step: '04'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How <span className="text-gradient">Woaties</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with crypto trading and NFT collecting has never been easier. 
            Follow these simple steps to join our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#5ff757] to-[#4ae642] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-[#5ff757] rounded-full flex items-center justify-center text-sm font-bold text-[#5ff757]">
                  {step.step}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-[#5ff757] transition-colors">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#5ff757] to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/get-started" className="btn-primary text-lg px-8 py-4">
            Get Started Today
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Join over 500,000 users already trading on Woaties
          </p>
        </div>
      </div>
    </section>
  );
}