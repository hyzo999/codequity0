'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Member {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  skills: string[];
  contributions: number;
  joinedDate: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export default function MemberSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const members: Member[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Full Stack Developer",
      company: "TechCorp",
      avatar: "SC",
      bio: "Passionate about React, Node.js, and building scalable applications. Loves mentoring junior developers and contributing to open source projects.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
      contributions: 45,
      joinedDate: "2023-01-15",
      socialLinks: {
        github: "https://github.com/sarahchen",
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "https://twitter.com/sarahchen"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "DevOps Engineer",
      company: "CloudScale",
      avatar: "MR",
      bio: "Expert in cloud infrastructure and CI/CD pipelines. Enjoys automating everything and sharing knowledge with the community.",
      skills: ["Kubernetes", "Docker", "AWS", "Terraform", "Jenkins"],
      contributions: 32,
      joinedDate: "2023-03-20",
      socialLinks: {
        github: "https://github.com/marcusrodriguez",
        linkedin: "https://linkedin.com/in/marcusrodriguez"
      }
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Frontend Developer",
      company: "DesignHub",
      avatar: "EW",
      bio: "Creative developer focused on user experience and accessibility. Specializes in modern CSS and JavaScript frameworks.",
      skills: ["Vue.js", "CSS3", "JavaScript", "Accessibility", "UI/UX"],
      contributions: 28,
      joinedDate: "2023-02-10",
      socialLinks: {
        github: "https://github.com/emilywatson",
        twitter: "https://twitter.com/emilywatson"
      }
    },
    {
      id: 4,
      name: "David Kim",
      role: "Backend Developer",
      company: "DataFlow",
      avatar: "DK",
      bio: "Backend specialist with expertise in Python, Django, and database design. Enjoys solving complex problems and optimizing performance.",
      skills: ["Python", "Django", "PostgreSQL", "Redis", "GraphQL"],
      contributions: 38,
      joinedDate: "2023-01-05",
      socialLinks: {
        github: "https://github.com/davidkim",
        linkedin: "https://linkedin.com/in/davidkim"
      }
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection > 0) {
        return prevIndex === members.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? members.length - 1 : prevIndex - 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentMember = members[currentIndex];

  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            Member Spotlight
          </h2>
          <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
            Meet our amazing community members who are making a difference in the tech world.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Avatar and Basic Info */}
                  <div className="text-center md:text-left">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto md:mx-0 mb-6"
                    >
                      {currentMember.avatar}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                        {currentMember.name}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {currentMember.role}
                      </p>
                      <p className="text-neutral-gray text-sm mb-4">
                        {currentMember.company}
                      </p>
                      
                      <div className="flex justify-center md:justify-start space-x-3 mb-6">
                        {currentMember.socialLinks.github && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={currentMember.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-gray hover:text-primary transition-colors"
                          >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-3.176 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                            </svg>
                          </motion.a>
                        )}
                        {currentMember.socialLinks.linkedin && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={currentMember.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-gray hover:text-primary transition-colors"
                          >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </motion.a>
                        )}
                        {currentMember.socialLinks.twitter && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={currentMember.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-gray hover:text-primary transition-colors"
                          >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Bio and Skills */}
                  <div className="md:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold text-neutral-dark mb-3">About</h4>
                      <p className="text-neutral-gray mb-6 leading-relaxed">
                        {currentMember.bio}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-neutral-dark mb-3">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentMember.skills.map((skill, index) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-neutral-light rounded-lg p-4">
                          <div className="text-2xl font-bold text-primary">{currentMember.contributions}</div>
                          <div className="text-sm text-neutral-gray">Contributions</div>
                        </div>
                        <div className="bg-neutral-light rounded-lg p-4">
                          <div className="text-2xl font-bold text-secondary">
                            {Math.floor((Date.now() - new Date(currentMember.joinedDate).getTime()) / (1000 * 60 * 60 * 24))}
                          </div>
                          <div className="text-sm text-neutral-gray">Days Active</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {members.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-neutral-border'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-neutral-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-neutral-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
} 