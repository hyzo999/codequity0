'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function Partners() {
  const [activeTab, setActiveTab] = useState('all');
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const partnerTypes = [
    { id: 'all', label: 'All Partners' },
    { id: 'tech', label: 'Tech Companies' },
    { id: 'startup', label: 'Startups' },
    { id: 'enterprise', label: 'Enterprise' }
  ];

  const partners = [
    {
      id: 1,
      name: 'TechCorp',
      type: 'tech',
      logo: 'TC',
      description: 'Leading technology solutions provider',
      backDescription: 'Specializing in AI and machine learning solutions for enterprise clients.',
      website: 'https://techcorp.com'
    },
    {
      id: 2,
      name: 'StartupHub',
      type: 'startup',
      logo: 'SH',
      description: 'Innovative startup accelerator',
      backDescription: 'Supporting early-stage startups with mentorship and funding opportunities.',
      website: 'https://startuphub.com'
    },
    {
      id: 3,
      name: 'Enterprise Solutions',
      type: 'enterprise',
      logo: 'ES',
      description: 'Enterprise software solutions',
      backDescription: 'Providing scalable enterprise software solutions for Fortune 500 companies.',
      website: 'https://enterprisesolutions.com'
    },
    {
      id: 4,
      name: 'InnovateLab',
      type: 'startup',
      logo: 'IL',
      description: 'Research and development lab',
      backDescription: 'Cutting-edge research in emerging technologies and product development.',
      website: 'https://innovatelab.com'
    },
    {
      id: 5,
      name: 'GlobalTech',
      type: 'tech',
      logo: 'GT',
      description: 'Global technology consulting',
      backDescription: 'International technology consulting with offices in 15+ countries.',
      website: 'https://globaltech.com'
    },
    {
      id: 6,
      name: 'MegaCorp',
      type: 'enterprise',
      logo: 'MC',
      description: 'Multinational corporation',
      backDescription: 'Diversified multinational with operations across multiple industries.',
      website: 'https://megacorp.com'
    }
  ];

  const filteredPartners = partners.filter(partner => 
    activeTab === 'all' || partner.type === activeTab
  );

  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
            We collaborate with industry leaders to create innovative solutions and drive technological advancement.
          </p>
        </div>

        {/* Tabbed Interface */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {partnerTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === type.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-neutral-gray hover:bg-primary-light hover:text-primary'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Logo Carousel */}
        <div className="mb-12 overflow-hidden">
          <div className="flex space-x-8 animate-scroll">
            {filteredPartners.map((partner, index) => (
              <div
                key={partner.id}
                className="flex-shrink-0 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-primary-light rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{partner.logo}</span>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-neutral-dark">{partner.name}</h3>
                  <p className="text-sm text-neutral-gray">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPartners.slice(0, 6).map((partner, index) => (
            <div
              key={partner.id}
              className="relative h-64 perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden">
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold text-primary">{partner.logo}</span>
                      </div>
                      <CardTitle className="text-lg">{partner.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-neutral-gray text-sm">{partner.description}</p>
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 bg-neutral-light text-neutral-gray text-xs rounded-full">
                          {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <Card className="h-full bg-primary text-white">
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg text-white">{partner.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-white/90 text-sm mb-4">{partner.backDescription}</p>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-white text-primary rounded-lg font-medium hover:bg-neutral-light transition-colors"
                      >
                        Visit Website
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-neutral-dark mb-4">
              Become a Partner
            </h3>
            <p className="text-neutral-gray mb-6 max-w-2xl mx-auto">
              Join our network of innovative partners and help shape the future of software development. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-hover transition-all duration-300 transform hover:scale-105">
                Partner With Us
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
} 