'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '@/lib/motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '@/components/ui/scroll-animation';
import StaggeredAnimation from '@/components/ui/staggered-animation';

export default function AboutPage() {
  const teamMembers = [
    { 
      name: 'Sarah Johnson', 
      role: 'CEO & Founder', 
      bio: 'Former senior developer at major tech companies with 10+ years of experience.',
      avatar: 'SJ',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
      name: 'Michael Chen', 
      role: 'CTO', 
      bio: 'Full-stack developer and open source contributor with expertise in scalable systems.',
      avatar: 'MC',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
      name: 'Emily Rodriguez', 
      role: 'Head of Community', 
      bio: 'Community builder and developer advocate passionate about inclusive tech.',
      avatar: 'ER',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
      name: 'David Kim', 
      role: 'Lead Developer', 
      bio: 'Frontend specialist and UI/UX expert with a focus on user experience.',
      avatar: 'DK',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
      name: 'Lisa Wang', 
      role: 'Product Manager', 
      bio: 'Product strategist with experience in developer tools and platforms.',
      avatar: 'LW',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
      name: 'Alex Thompson', 
      role: 'DevOps Engineer', 
      bio: 'Infrastructure specialist ensuring our platform runs smoothly and securely.',
      avatar: 'AT',
      social: { linkedin: '#', twitter: '#', github: '#' }
    }
  ];

  const values = [
    { 
      title: 'Inclusivity and Diversity', 
      description: 'Creating spaces where everyone belongs and contributes',
      icon: '🤝'
    },
    { 
      title: 'Innovation and Creativity', 
      description: 'Pushing boundaries and exploring new possibilities',
      icon: '💡'
    },
    { 
      title: 'Collaboration and Community', 
      description: 'Growing together through shared knowledge and support',
      icon: '🌱'
    },
    { 
      title: 'Continuous Learning', 
      description: 'Always evolving, always improving',
      icon: '📚'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Senior Developer',
      company: 'TechCorp',
      content: 'CodeQuity has transformed how I approach development. The community support is incredible.',
      avatar: 'PS'
    },
    {
      name: 'Rahul Patel',
      role: 'Startup Founder',
      company: 'InnovateLab',
      content: 'The networking opportunities and mentorship I found here helped launch my startup.',
      avatar: 'RP'
    },
    {
      name: 'Anjali Desai',
      role: 'UI/UX Designer',
      company: 'DesignHub',
      content: 'Being part of this community has opened so many doors for my career growth.',
      avatar: 'AD'
    }
  ];

  const timeline = [
    { year: '2020', title: 'Foundation', description: 'CodeQuity was founded with a vision to create inclusive tech communities', icon: '🚀' },
    { year: '2021', title: 'First National Event', description: 'Hosted our flagship hackathon with 500+ participants', icon: '🏆' },
    { year: '2022', title: 'Community Expansion', description: 'Reached 24+ Indian states and 9+ countries', icon: '🌍' },
    { year: '2023', title: 'Industry Partnerships', description: 'Formed strategic alliances with leading tech companies', icon: '🤝' },
    { year: '2024', title: 'Educational Initiatives', description: 'Launched programs bridging academia and industry', icon: '🎓' },
    { year: '2025', title: 'Global Recognition', description: 'Recognized as India\'s fastest growing tech community', icon: '⭐' }
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
            About CodeQuity
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            variants={textVariant(0.4)}
          >
            Empowering developers and building communities through innovative technology solutions.
          </motion.p>
        </motion.div>
      </ScrollAnimation>

      {/* Mission Section */}
      <ScrollAnimation className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                Our Story
              </h2>
              <p className="text-lg text-neutral-gray mb-6">
                Founded in 2020, CodeQuity emerged from a simple belief: that technology 
                should be accessible to everyone. What started as a small group of passionate 
                developers has grown into a global community of innovators, creators, and problem-solvers.
              </p>
              <p className="text-lg text-neutral-gray mb-8">
                We've built our platform on the principles of inclusivity, collaboration, and 
                continuous learning. Every day, we work to break down barriers and create 
                opportunities for developers of all skill levels to connect, learn, and grow together.
              </p>
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('left', 'tween', 0.4, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 mt-1 text-2xl">
                      {value.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">{value.title}</h4>
                      <p className="text-white/80 mt-1">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Team Section */}
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
              Meet Our Team
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              The passionate individuals behind CodeQuity who are dedicated to building 
              the future of developer communities.
            </motion.p>
          </motion.div>
          
          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-border hover:shadow-xl transition-all duration-300 h-full group">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {member.avatar}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-dark mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-neutral-gray text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="text-neutral-gray hover:text-primary transition-colors duration-200"
                        >
                          <span className="sr-only">{platform}</span>
                          <div className="w-6 h-6 bg-neutral-gray rounded-full"></div>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* Timeline Section */}
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
              Our Journey
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Key milestones in our mission to build India's largest tech community
            </motion.p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 'tween', 0.3, 0.6)}
                >
                  <div className="w-1/2 px-8">
                    <Card className="p-6 shadow-md border border-neutral-border hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{milestone.icon}</span>
                        <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-dark mb-2">{milestone.title}</h3>
                      <p className="text-neutral-gray">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg z-10"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Testimonials Section */}
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
              What Our Community Says
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Hear from the amazing developers who make our community special
            </motion.p>
          </motion.div>
          
          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-dark">{testimonial.name}</h4>
                        <p className="text-sm text-neutral-gray">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-neutral-gray italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>
    </div>
  );
} 