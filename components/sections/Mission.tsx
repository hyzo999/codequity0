'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function Mission() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible in software development.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and shared knowledge.',
      icon: (
        <svg className="h-8 w-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
      icon: (
        <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            Our Mission & Values
          </h2>
          <p className="text-neutral-gray text-lg max-w-3xl mx-auto">
            We're on a mission to democratize software development and create a world where 
            every developer has the tools, community, and opportunities they need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card 
              key={index} 
              delay={index * 200}
              className={`transform transition-all duration-300 hover:scale-105 ${
                hoveredValue === index ? 'shadow-xl' : ''
              }`}
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    hoveredValue === index ? 'scale-110' : ''
                  }`}>
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-gray">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-neutral-dark mb-6">
              Building the Future of Development
            </h3>
            <div className="space-y-4 text-neutral-gray">
              <p>
                At CodeQuity, we believe that great software is built by great teams. 
                Our platform connects developers, fosters collaboration, and provides the 
                tools needed to bring innovative ideas to life.
              </p>
              <p>
                Whether you're a seasoned developer looking to mentor others, a newcomer 
                seeking guidance, or a company wanting to build amazing products, 
                we're here to support your journey.
              </p>
              <p>
                Join thousands of developers who are already building the future with CodeQuity.
              </p>
            </div>

            {/* Animated Underline for Key Phrase */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 group">
                <span className="relative inline-block">
                  Build What Deserves To Exist
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
                </span>
              </h4>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 border border-gray-200 shadow-soft">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Ready to Get Started?
                </h4>
                <p className="text-gray-600 mb-6">
                  Join our community and start building amazing things together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
                    Join Community
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}