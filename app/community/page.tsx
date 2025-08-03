'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '@/components/ui/scroll-animation';
import StaggeredAnimation from '@/components/ui/staggered-animation';
import { fadeIn, staggerContainer, textVariant } from '@/lib/motion';

export default function CommunityPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'React Workshop',
      date: '2024-02-15',
      time: '10:00 AM',
      location: 'Online',
      type: 'workshop',
      attendees: 45,
      description: 'Learn advanced React patterns and best practices'
    },
    {
      id: 2,
      title: 'Hackathon 2024',
      date: '2024-02-20',
      time: '9:00 AM',
      location: 'Mumbai',
      type: 'hackathon',
      attendees: 120,
      description: '24-hour coding challenge with amazing prizes'
    },
    {
      id: 3,
      title: 'Tech Talk: AI in 2024',
      date: '2024-02-25',
      time: '7:00 PM',
      location: 'Online',
      type: 'talk',
      attendees: 89,
      description: 'Exploring the latest trends in artificial intelligence'
    },
    {
      id: 4,
      title: 'Code Review Session',
      date: '2024-03-01',
      time: '6:00 PM',
      location: 'Online',
      type: 'workshop',
      attendees: 32,
      description: 'Improve your code quality through peer reviews'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'JavaScript Fundamentals',
      date: '2024-01-20',
      type: 'workshop',
      attendees: 67,
      image: '/images/event-1.jpg'
    },
    {
      id: 6,
      title: 'Startup Pitch Night',
      date: '2024-01-15',
      type: 'pitch',
      attendees: 45,
      image: '/images/event-2.jpg'
    },
    {
      id: 7,
      title: 'Open Source Day',
      date: '2024-01-10',
      type: 'hackathon',
      attendees: 89,
      image: '/images/event-3.jpg'
    }
  ];

  const membershipBenefits = [
    {
      title: 'Exclusive Workshops',
      description: 'Access to premium workshops and training sessions',
      icon: '🎓',
      features: ['Live coding sessions', 'Expert mentorship', 'Certificate programs']
    },
    {
      title: 'Networking Events',
      description: 'Connect with industry professionals and peers',
      icon: '🤝',
      features: ['Monthly meetups', 'Virtual networking', 'Industry panels']
    },
    {
      title: 'Project Collaboration',
      description: 'Work on real-world projects with community members',
      icon: '💻',
      features: ['Open source projects', 'Team challenges', 'Portfolio building']
    },
    {
      title: 'Career Support',
      description: 'Get help with job opportunities and career growth',
      icon: '🚀',
      features: ['Job board access', 'Resume reviews', 'Interview prep']
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === activeFilter);

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
            Join Our Community
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            variants={textVariant(0.4)}
          >
            Connect with developers worldwide, share knowledge, and build amazing things together.
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            variants={textVariant(0.6)}
          >
            <Button className="bg-white text-primary hover:bg-neutral-light">
              Join Community
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </ScrollAnimation>

      {/* Upcoming Events Section */}
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
              Upcoming Events
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Discover exciting events and opportunities to learn, network, and grow.
            </motion.p>
          </motion.div>

          {/* Event Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={fadeIn('up', 'tween', 0.6, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { key: 'all', label: 'All Events' },
              { key: 'workshop', label: 'Workshops' },
              { key: 'hackathon', label: 'Hackathons' },
              { key: 'talk', label: 'Tech Talks' },
              { key: 'pitch', label: 'Pitch Events' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-neutral-light text-neutral-gray hover:bg-neutral-border'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'hackathon' ? 'bg-green-100 text-green-800' :
                        event.type === 'talk' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <span className="text-sm text-neutral-gray">
                        {event.attendees} attending
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold text-neutral-dark">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 text-sm text-neutral-gray mb-4">
                      <div className="flex items-center">
                        <span className="mr-2">📅</span>
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">🕒</span>
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📍</span>
                        {event.location}
                      </div>
                    </div>
                    <p className="text-neutral-gray text-sm mb-4">
                      {event.description}
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* Past Events Gallery */}
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
              Past Events Gallery
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Relive the amazing moments from our previous community events.
            </motion.p>
          </motion.div>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <div className="text-6xl text-white opacity-80">
                      {event.type === 'workshop' ? '🎓' : event.type === 'hackathon' ? '💻' : '🎤'}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-neutral-dark mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-gray mb-3">
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <span>{event.attendees} attendees</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* Membership Benefits */}
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
              Membership Benefits
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Unlock exclusive benefits and opportunities as a community member.
            </motion.p>
          </motion.div>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-bold text-neutral-dark mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-gray text-sm mb-4">
                      {benefit.description}
                    </p>
                    <ul className="text-xs text-neutral-gray space-y-1">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* Community Forum Preview */}
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
              Community Forum
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Join discussions, ask questions, and share your knowledge with the community.
            </motion.p>
          </motion.div>

          <Card className="bg-white rounded-xl shadow-md border border-neutral-border">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl mb-4">💬</div>
                  <h3 className="text-lg font-bold text-neutral-dark mb-2">Active Discussions</h3>
                  <p className="text-neutral-gray text-sm">Join ongoing conversations about the latest tech trends</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">❓</div>
                  <h3 className="text-lg font-bold text-neutral-dark mb-2">Q&A Forum</h3>
                  <p className="text-neutral-gray text-sm">Get answers to your technical questions from experts</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-lg font-bold text-neutral-dark mb-2">Knowledge Sharing</h3>
                  <p className="text-neutral-gray text-sm">Share your insights and learn from others</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-primary hover:bg-primary-hover text-white">
                  Access Forum
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollAnimation>
    </div>
  );
} 