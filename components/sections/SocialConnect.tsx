'use client';

import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

export default function SocialConnect() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [notificationCount, setNotificationCount] = useState(12);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const socialPlatforms = [
    {
      name: 'Twitter',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      followers: '25.4K'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-800',
      followers: '18.2K'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
      color: 'bg-gray-800',
      hoverColor: 'hover:bg-gray-900',
      followers: '32.1K'
    },
    {
      name: 'Discord',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
        </svg>
      ),
      color: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700',
      followers: '15.8K'
    }
  ];

  const communityStats = [
    { label: 'Active Members', value: '12.5K', color: 'text-primary' },
    { label: 'Daily Posts', value: '2.3K', color: 'text-secondary' },
    { label: 'Countries', value: '45+', color: 'text-accent' },
    { label: 'Languages', value: '12', color: 'text-primary' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            Connect With Our Community
          </h2>
          <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
            Join thousands of developers worldwide. Share knowledge, collaborate on projects, 
            and grow your network in our vibrant community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Media Section */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-dark mb-6">
              Follow Us
            </h3>
            
            {/* Animated Social Media Buttons */}
            <div className="space-y-4 mb-8">
              {socialPlatforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    hoveredSocial === platform.name ? 'shadow-lg' : 'shadow-sm'
                  }`}
                  onMouseEnter={() => setHoveredSocial(platform.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg text-white ${platform.color} ${platform.hoverColor} transition-colors duration-300`}>
                      {platform.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-dark">{platform.name}</h4>
                      <p className="text-sm text-neutral-gray">{platform.followers} followers</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
              ))}
            </div>

            {/* WhatsApp Join Button */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    {/* Notification Badge */}
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                      {notificationCount}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Join WhatsApp Group</h4>
                    <p className="text-sm text-neutral-gray">Get instant updates and connect directly</p>
                  </div>
                </div>
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Join Now
                </Button>
              </div>
            </div>
          </div>

          {/* Community Map & Stats */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-dark mb-6">
              Global Community
            </h3>

            {/* Interactive Community Map */}
            <div className="bg-neutral-light rounded-lg p-6 mb-8">
              <div className="relative h-48 bg-gradient-to-br from-primary-light to-secondary-light rounded-lg overflow-hidden">
                {/* Map Dots */}
                {isMounted && [...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-primary rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 90 + 5}%`,
                      top: `${Math.random() * 80 + 10}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
                
                {/* Connection Lines */}
                {isMounted && <svg className="absolute inset-0 w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <line
                      key={i}
                      x1={`${20 + Math.random() * 60}%`}
                      y1={`${20 + Math.random() * 60}%`}
                      x2={`${20 + Math.random() * 60}%`}
                      y2={`${20 + Math.random() * 60}%`}
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: `${Math.random() * 2}s` }}
                    />
                  ))}
                </svg>}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-neutral-dark">
                    <div className="text-2xl font-bold">45+ Countries</div>
                    <div className="text-sm">Connected Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-2 gap-4">
              {communityStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-gray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-light to-secondary-light rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-neutral-dark mb-4">
              Stay Updated
            </h3>
            <p className="text-neutral-gray mb-6 max-w-2xl mx-auto">
              Get the latest updates, community highlights, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 