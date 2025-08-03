'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ScrollAnimation from '@/components/ui/scroll-animation';
import StaggeredAnimation from '@/components/ui/staggered-animation';
import { fadeIn, staggerContainer, textVariant } from '@/lib/motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const officeLocations = [
    {
      name: 'Mumbai Office',
      address: '123 Innovation Drive, Tech City, Mumbai 400001',
      phone: '+91 22 1234 5678',
      email: 'mumbai@codequity.com',
      hours: 'Mon-Fri: 9AM-6PM IST',
      coordinates: { lat: 19.0760, lng: 72.8777 }
    },
    {
      name: 'Bangalore Office',
      address: '456 Startup Street, Electronic City, Bangalore 560100',
      phone: '+91 80 1234 5678',
      email: 'bangalore@codequity.com',
      hours: 'Mon-Fri: 9AM-6PM IST',
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    {
      name: 'Delhi Office',
      address: '789 Tech Park, Cyber City, Delhi 110001',
      phone: '+91 11 1234 5678',
      email: 'delhi@codequity.com',
      hours: 'Mon-Fri: 9AM-6PM IST',
      coordinates: { lat: 28.7041, lng: 77.1025 }
    }
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/codequity',
      icon: '🐦',
      followers: '15.2K'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/codequity',
      icon: '💼',
      followers: '8.5K'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/codequity',
      icon: '💻',
      followers: '12.3K'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/codequity',
      icon: '🎮',
      followers: '25.1K'
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
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            variants={textVariant(0.4)}
          >
            Have questions? Want to collaborate? We'd love to hear from you.
          </motion.p>
        </motion.div>
      </ScrollAnimation>

      {/* Interactive Contact Form */}
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
              Send Us a Message
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Fill out the form below and we'll get back to you as soon as possible.
            </motion.p>
          </motion.div>
          
          <Card className="bg-white rounded-xl shadow-md border border-neutral-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-dark mb-2">
                      First Name
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-dark mb-2">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    className="bg-primary hover:bg-primary-hover text-white px-8 py-3"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </ScrollAnimation>

      {/* Office Locations with Map Integration */}
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
              Office Locations
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Visit us at any of our offices across India.
            </motion.p>
          </motion.div>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                        📍
                      </div>
                      <h3 className="text-lg font-bold text-neutral-dark mb-2">
                        {office.name}
                      </h3>
                    </div>
                    
                    <div className="space-y-3 text-sm text-neutral-gray">
                      <div className="flex items-start">
                        <span className="mr-2">📍</span>
                        <p>{office.address}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📞</span>
                        <p>{office.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">✉️</span>
                        <p>{office.email}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">🕒</span>
                        <p>{office.hours}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button variant="outline" className="w-full">
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* Contact Information Cards */}
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
              Other Ways to Reach Us
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Prefer to contact us directly? Here are our contact details.
            </motion.p>
          </motion.div>
          
          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                    ✉️
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">Email</h3>
                  <p className="text-neutral-gray">info@codequity.com</p>
                  <p className="text-neutral-gray">support@codequity.com</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                    📞
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">Phone</h3>
                  <p className="text-neutral-gray">+91 22 1234 5678</p>
                  <p className="text-neutral-gray">Mon-Fri: 9AM-6PM IST</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                    📍
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">Address</h3>
                  <p className="text-neutral-gray">123 Innovation Drive</p>
                  <p className="text-neutral-gray">Tech City, Mumbai 400001</p>
                </CardContent>
              </Card>
            </motion.div>
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>

      {/* Social Media Links */}
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
              Connect With Us
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-gray max-w-2xl mx-auto"
              variants={textVariant(0.4)}
            >
              Follow us on social media for the latest updates and community highlights.
            </motion.p>
          </motion.div>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {socialLinks.map((social, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-md border border-neutral-border hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{social.icon}</div>
                    <h3 className="text-lg font-bold text-neutral-dark mb-2">
                      {social.name}
                    </h3>
                    <p className="text-neutral-gray text-sm mb-4">
                      {social.followers} followers
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      Follow Us
                    </Button>
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