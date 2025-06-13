'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Award, Globe, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    { year: '2021', title: 'Company Founded', description: 'Woaties was established with a vision to democratize crypto trading' },
    { year: '2022', title: 'Platform Launch', description: 'Launched our comprehensive crypto trading and NFT marketplace' },
    { year: '2023', title: 'Mobile Apps', description: 'Released iOS and Android apps with 500K+ downloads' },
    { year: '2024', title: 'Global Expansion', description: 'Expanded to 50+ countries with multi-language support' }
  ];

  const values = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We build for our community, listening to feedback and evolving based on user needs.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology and creative solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality products and services in the crypto space.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making cryptocurrency accessible to everyone, regardless of technical expertise.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5ff757]/10 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Woaties</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to make cryptocurrency trading, NFT collecting, and blockchain technology 
            accessible to everyone through innovative, secure, and user-friendly platforms.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To democratize access to cryptocurrency markets and digital assets by providing 
                comprehensive, secure, and intuitive platforms that empower users to participate 
                in the digital economy with confidence.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the world's most trusted and comprehensive cryptocurrency ecosystem, 
                bridging the gap between traditional finance and the decentralized future.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#5ff757]/20 to-[#4ae642]/20 rounded-3xl p-8">
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Woaties Mission"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
                <value.icon className="w-16 h-16 text-[#5ff757] mx-auto mb-6" />
                <h3 className="font-bold text-xl mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-[#5ff757] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-gray-50 p-6 rounded-2xl">
                  <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Contact us anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#5ff757] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600">support@woaties.com</p>
                  <p className="text-gray-600">business@woaties.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#5ff757] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#5ff757] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-600">123 Crypto Street</p>
                  <p className="text-gray-600">San Francisco, CA 94105</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#5ff757] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-600">24/7 Customer Support</p>
                  <p className="text-gray-600">Office: Mon-Fri 9AM-6PM PST</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ff757]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ff757]"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ff757]"
                />
                
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ff757]"
                />
                
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ff757] resize-none"
                ></textarea>
                
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}