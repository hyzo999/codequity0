'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '@/components/ui/scroll-animation';
import StaggeredAnimation from '@/components/ui/staggered-animation';
import { fadeIn, staggerContainer, textVariant } from '@/lib/motion';

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState('all');

  const partnershipTiers = [
    {
      name: 'Bronze Partner',
      description: 'Basic partnership with community access',
      price: 'Free',
      features: [
        'Community access',
        'Event participation',
        'Basic support',
        'Logo placement'
      ],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Silver Partner',
      description: 'Enhanced partnership with premium benefits',
      price: '$5,000/year',
      features: [
        'All Bronze features',
        'Priority support',
        'Event sponsorship',
        'Content collaboration',
        'Dedicated account manager'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Gold Partner',
      description: 'Premium partnership with exclusive benefits',
      price: '$15,000/year',
      features: [
        'All Silver features',
        'Exclusive events',
        'Custom integrations',
        'Joint marketing campaigns',
        'Strategic consulting',
        'VIP community access'
      ],
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      name: 'Platinum Partner',
      description: 'Strategic partnership with maximum benefits',
      price: 'Custom',
      features: [
        'All Gold features',
        'Custom solutions',
        'Executive networking',
        'Thought leadership',
        'Exclusive research access',
        'Strategic advisory'
      ],
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'TechCorp Integration Success',
      partner: 'TechCorp',
      category: 'Technology',
      description: 'How TechCorp leveraged our community to scale their developer team and accelerate product development.',
      results: [
        '50% faster hiring process',
        '200+ qualified candidates',
        '30% cost reduction',
        'Improved team diversity'
      ],
      expanded: false
    },
    {
      id: 2,
      title: 'InnovateLab Research Collaboration',
      partner: 'InnovateLab',
      category: 'Research',
      description: 'Collaborative research project that led to breakthrough innovations in AI and machine learning.',
      results: [
        '3 patent applications',
        '5 research papers published',
        '$2M in research funding',
        'International recognition'
      ],
      expanded: false
    },
    {
      id: 3,
      title: 'DevFlow Platform Launch',
      partner: 'DevFlow',
      category: 'Development',
      description: 'Successful launch of DevFlow\'s new developer platform with community-driven feedback and testing.',
      results: [
        '10,000+ beta users',
        '95% satisfaction rate',
        '50% faster development',
        'Market leadership position'
      ],
      expanded: false
    }
  ];

  const faqs = [
    {
      question: 'What are the different partnership tiers?',
      answer: 'We offer four partnership tiers: Bronze (free), Silver ($5,000/year), Gold ($15,000/year), and Platinum (custom pricing). Each tier provides different levels of access and benefits.'
    },
    {
      question: 'How long does the partnership application process take?',
      answer: 'The application process typically takes 2-4 weeks. We review applications thoroughly and may schedule follow-up meetings to discuss specific partnership opportunities.'
    },
    {
      question: 'What kind of support do partners receive?',
      answer: 'Partners receive dedicated support including account management, technical assistance, marketing support, and strategic consulting depending on their partnership tier.'
    },
    {
      question: 'Can we customize our partnership agreement?',
      answer: 'Yes, especially for Gold and Platinum partnerships. We work closely with partners to create custom solutions that meet their specific needs and objectives.'
    },
    {
      question: 'What are the benefits of partnering with CodeQuity?',
      answer: 'Partners gain access to our global developer community, collaborative project opportunities, technology knowledge sharing, market expansion support, and enhanced brand visibility.'
    }
  ];

  const currentPartners = [
    {
      name: 'TechCorp',
      logo: 'TC',
      description: 'Leading technology solutions provider with global reach.',
      category: 'Technology',
      year: '2022',
      tier: 'Gold'
    },
    {
      name: 'InnovateLab',
      logo: 'IL',
      description: 'Research and development partner focused on emerging technologies.',
      category: 'Research',
      year: '2021',
      tier: 'Platinum'
    },
    {
      name: 'DevFlow',
      logo: 'DF',
      description: 'Developer tools and platform solutions for modern teams.',
      category: 'Development',
      year: '2023',
      tier: 'Silver'
    },
    {
      name: 'CloudScale',
      logo: 'CS',
      description: 'Cloud infrastructure and scaling solutions for growing businesses.',
      category: 'Infrastructure',
      year: '2022',
      tier: 'Gold'
    },
    {
      name: 'DataViz',
      logo: 'DV',
      description: 'Data visualization and analytics platform for insights.',
      category: 'Analytics',
      year: '2023',
      tier: 'Silver'
    },
    {
      name: 'SecureNet',
      logo: 'SN',
      description: 'Cybersecurity and compliance solutions for enterprise clients.',
      category: 'Security',
      year: '2021',
      tier: 'Gold'
    }
  ];

  const filteredPartners = activeTab === 'all' 
    ? currentPartners 
    : currentPartners.filter(partner => partner.category.toLowerCase() === activeTab);

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Hero Section */}
      <ScrollAnimation className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="absolute inset-0 bg-neutral-light opacity-20"></div>
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.1, 0.2)}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            variants={textVariant(0.2)}
          >
            Our Partners
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            variants={textVariant(0.4)}
          >
            Collaborating with industry leaders to drive innovation and create value.
          </motion.p>
        </motion.div>
      </ScrollAnimation>

      {/* Partnership Tiers */}
      <ScrollAnimation className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4"
              variants={textVariant(0.2)}
            >
              Partnership Tiers
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Choose the partnership level that best fits your organization's goals and objectives.
            </motion.p>
          </motion.div>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
                      {tier.name.charAt(0)}
                    </div>
                    <CardTitle className="text-lg font-bold text-neutral-dark">
                      {tier.name}
                    </CardTitle>
                    <p className="text-neutral-gray text-sm">
                      {tier.description}
                    </p>
                    <div className="text-2xl font-bold text-primary">
                      {tier.price}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-neutral-gray">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-primary hover:bg-primary-hover text-white">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* Case Studies */}
      <ScrollAnimation className="py-16 md:py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4"
              variants={textVariant(0.2)}
            >
              Case Studies
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Discover how our partners have achieved remarkable results through collaboration.
            </motion.p>
          </motion.div>

          <StaggeredAnimation className="space-y-6">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={study.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mr-3">
                            {study.category}
                          </span>
                          <span className="text-sm text-neutral-gray">
                            {study.partner}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-dark mb-3">
                          {study.title}
                        </h3>
                        <p className="text-neutral-gray mb-4">
                          {study.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center">
                              <span className="text-primary mr-2">🎯</span>
                              <span className="text-sm text-neutral-gray">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" className="ml-4">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* Current Partners */}
      <ScrollAnimation className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4"
              variants={textVariant(0.2)}
            >
              Our Current Partners
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Meet the companies and organizations that trust us to deliver exceptional results.
            </motion.p>
          </motion.div>

          {/* Partner Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={fadeIn('up', 'tween', 0.6, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { key: 'all', label: 'All Partners' },
              { key: 'technology', label: 'Technology' },
              { key: 'research', label: 'Research' },
              { key: 'development', label: 'Development' },
              { key: 'infrastructure', label: 'Infrastructure' },
              { key: 'analytics', label: 'Analytics' },
              { key: 'security', label: 'Security' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveTab(filter.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === filter.key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-neutral-light text-neutral-gray hover:bg-neutral-border'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                        {partner.logo}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-dark">{partner.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {partner.category}
                          </span>
                          <span className="text-sm text-neutral-gray">Since {partner.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-neutral-gray mb-4">{partner.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                        {partner.tier} Partner
                      </span>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation className="py-16 md:py-24 bg-neutral-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4"
              variants={textVariant(0.2)}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Find answers to common questions about partnering with CodeQuity.
            </motion.p>
          </motion.div>

          <StaggeredAnimation className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-neutral-dark mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-gray">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* Partner Application Form */}
      <ScrollAnimation className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4"
              variants={textVariant(0.2)}
            >
              Become Our Partner
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Ready to join our ecosystem? Let's explore how we can work together to create value.
            </motion.p>
          </motion.div>

          <Card className="bg-white rounded-xl shadow-md border border-neutral-border">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-4">For Companies</h3>
                  <ul className="space-y-2 text-neutral-gray">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Access to developer talent pool
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Collaborative project opportunities
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Technology knowledge sharing
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Market expansion support
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-4">For Organizations</h3>
                  <ul className="space-y-2 text-neutral-gray">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Community engagement programs
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Educational initiatives
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Research collaborations
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Innovation partnerships
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary-hover text-white">
                  Contact Us
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollAnimation>
    </div>
  );
} 