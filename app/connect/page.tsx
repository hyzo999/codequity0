'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '@/components/ui/scroll-animation';
import StaggeredAnimation from '@/components/ui/staggered-animation';
import { fadeIn, staggerContainer, textVariant } from '@/lib/motion';

export default function ConnectPage() {
  const connectionOptions = [
    {
      title: 'Join as Developer',
      description: 'Connect with other developers, share your projects, and grow your skills.',
      icon: '👨‍💻',
      features: ['Profile creation', 'Project showcase', 'Skill matching', 'Mentorship access'],
      color: 'from-primary to-secondary',
      stats: { users: '50K+', projects: '10K+', mentors: '2K+' }
    },
    {
      title: 'Join as Company',
      description: 'Find talented developers, post opportunities, and build your team.',
      icon: '🏢',
      features: ['Talent recruitment', 'Project posting', 'Company profile', 'Analytics dashboard'],
      color: 'from-secondary to-accent',
      stats: { companies: '500+', positions: '2K+', hires: '5K+' }
    },
    {
      title: 'Join as Partner',
      description: 'Collaborate on projects, share resources, and expand your network.',
      icon: '🤝',
      features: ['Partnership opportunities', 'Resource sharing', 'Joint projects', 'Network access'],
      color: 'from-accent to-primary',
      stats: { partners: '200+', projects: '500+', revenue: '$10M+' }
    }
  ];

  const platformFeatures = [
    {
      title: 'Smart Matching',
      description: 'Our AI-powered algorithm matches you with the right people and opportunities based on your skills, interests, and goals.',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Verified Profiles',
      description: 'All profiles are verified to ensure quality connections and build trust within our community.',
      icon: '✅',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Real-time Communication',
      description: 'Built-in messaging, video calls, and collaboration tools to keep you connected with your network.',
      icon: '💬',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Analytics & Insights',
      description: 'Track your connections, engagement, and growth with detailed analytics and insights.',
      icon: '📊',
      color: 'from-orange-500 to-red-500'
    }
  ];

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
            Connect With Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            variants={textVariant(0.4)}
          >
            Join our platform and start building connections with developers worldwide.
          </motion.p>
        </motion.div>
      </ScrollAnimation>

      {/* Connection Options */}
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
              How Would You Like to Connect?
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Choose the best way to join our community and start your journey.
            </motion.p>
          </motion.div>
          
          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {connectionOptions.map((option, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className={`bg-gradient-to-r ${option.color} p-6 text-white text-center`}>
                    <div className="text-4xl mb-4">{option.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-sm opacity-90">{option.description}</p>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-2 mb-6">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-neutral-gray">
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                      {Object.entries(option.stats).map(([key, value]) => (
                        <div key={key} className="bg-neutral-light rounded p-2">
                          <div className="text-sm font-bold text-neutral-dark">{value}</div>
                          <div className="text-xs text-neutral-gray capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* Platform Features */}
      <ScrollAnimation className="py-16 md:py-24 bg-neutral-light">
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
              Platform Features
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Discover what makes our platform the perfect place to connect and collaborate.
            </motion.p>
          </motion.div>
          
          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-dark">{feature.title}</h3>
                    </div>
                    <p className="text-neutral-gray">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6"
              variants={textVariant(0.2)}
            >
              Ready to Connect?
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray mb-8"
              variants={textVariant(0.4)}
            >
              Join thousands of developers and companies already connected on our platform.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white"
            variants={fadeIn('up', 'tween', 0.6, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Start Your Journey Today</h3>
            <p className="text-lg mb-6">
              Create your profile and discover amazing opportunities in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-neutral-light">
                Sign Up Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </ScrollAnimation>
    </div>
  );
} 