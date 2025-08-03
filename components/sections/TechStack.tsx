'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface TechCategory {
  id: string;
  name: string;
  color: string;
  technologies: Technology[];
}

interface Technology {
  id: string;
  name: string;
  icon: string;
  popularity: number;
  description: string;
  category: string;
}

export default function TechStack() {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const techCategories: TechCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend',
      color: 'from-blue-500 to-blue-600',
      technologies: [
        {
          id: 'react',
          name: 'React',
          icon: '⚛️',
          popularity: 95,
          description: 'A JavaScript library for building user interfaces',
          category: 'frontend'
        },
        {
          id: 'vue',
          name: 'Vue.js',
          icon: '🟢',
          popularity: 85,
          description: 'The Progressive JavaScript Framework',
          category: 'frontend'
        },
        {
          id: 'angular',
          name: 'Angular',
          icon: '🔴',
          popularity: 75,
          description: 'Platform for building mobile and desktop web applications',
          category: 'frontend'
        }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      color: 'from-green-500 to-green-600',
      technologies: [
        {
          id: 'nodejs',
          name: 'Node.js',
          icon: '🟢',
          popularity: 90,
          description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
          category: 'backend'
        },
        {
          id: 'python',
          name: 'Python',
          icon: '🐍',
          popularity: 88,
          description: 'High-level programming language for general-purpose programming',
          category: 'backend'
        },
        {
          id: 'java',
          name: 'Java',
          icon: '☕',
          popularity: 82,
          description: 'Object-oriented programming language',
          category: 'backend'
        }
      ]
    },
    {
      id: 'database',
      name: 'Database',
      color: 'from-purple-500 to-purple-600',
      technologies: [
        {
          id: 'postgresql',
          name: 'PostgreSQL',
          icon: '🐘',
          popularity: 85,
          description: 'Advanced open source relational database',
          category: 'database'
        },
        {
          id: 'mongodb',
          name: 'MongoDB',
          icon: '🍃',
          popularity: 80,
          description: 'Document-oriented NoSQL database',
          category: 'database'
        },
        {
          id: 'redis',
          name: 'Redis',
          icon: '🔴',
          popularity: 75,
          description: 'In-memory data structure store',
          category: 'database'
        }
      ]
    },
    {
      id: 'devops',
      name: 'DevOps',
      color: 'from-orange-500 to-orange-600',
      technologies: [
        {
          id: 'docker',
          name: 'Docker',
          icon: '🐳',
          popularity: 92,
          description: 'Containerization platform for developing and shipping applications',
          category: 'devops'
        },
        {
          id: 'kubernetes',
          name: 'Kubernetes',
          icon: '⚓',
          popularity: 88,
          description: 'Container orchestration platform',
          category: 'devops'
        },
        {
          id: 'aws',
          name: 'AWS',
          icon: '☁️',
          popularity: 95,
          description: 'Cloud computing platform',
          category: 'devops'
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            Technology Stack
          </h2>
          <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
            Explore the technologies that power our community and projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tech Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {techCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredCategory(category.id)}
                onHoverEnd={() => setHoveredCategory(null)}
                className={`bg-gradient-to-r ${category.color} rounded-lg p-6 text-white cursor-pointer transition-all duration-300 ${
                  hoveredCategory === category.id ? 'shadow-xl' : 'shadow-lg'
                }`}
              >
                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.technologies.map((tech) => (
                    <motion.div
                      key={tech.id}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTech(tech)}
                      className="bg-white/20 rounded-lg p-4 text-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <div className="text-2xl mb-2">{tech.icon}</div>
                      <div className="text-sm font-medium">{tech.name}</div>
                      <div className="text-xs opacity-75">{tech.popularity}%</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Details */}
          <div className="lg:pl-8">
            {selectedTech ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary-light to-secondary-light rounded-lg p-8 h-full"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{selectedTech.icon}</div>
                  <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                    {selectedTech.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="w-32 bg-neutral-light rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedTech.popularity}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-neutral-gray">
                      {selectedTech.popularity}%
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Description</h4>
                    <p className="text-neutral-gray leading-relaxed">
                      {selectedTech.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Category</h4>
                    <span className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full">
                      {techCategories.find(cat => cat.id === selectedTech.category)?.name}
                    </span>
                  </div>

                  <div className="pt-4">
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors mr-3">
                      Learn More
                    </button>
                    <button className="border border-primary text-primary px-6 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
                      View Projects
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-neutral-light rounded-lg p-8 h-full flex items-center justify-center"
              >
                <div className="text-center text-neutral-gray">
                  <svg className="w-16 h-16 mx-auto mb-4 text-neutral-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                    Select a Technology
                  </h3>
                  <p className="text-neutral-gray">
                    Click on any technology to view details and learn more.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-neutral-gray">Technologies</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
            <div className="text-sm text-neutral-gray">Projects Built</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-accent mb-2">95%</div>
            <div className="text-sm text-neutral-gray">Success Rate</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-neutral-gray">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 