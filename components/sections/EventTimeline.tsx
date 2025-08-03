'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  type: 'workshop' | 'hackathon' | 'meetup' | 'conference';
  location: string;
  attendees?: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export default function EventTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "React Workshop Series",
      date: "2024-01-15",
      description: "Learn React fundamentals and advanced patterns with hands-on exercises.",
      type: "workshop",
      location: "Virtual",
      attendees: 150,
      status: "completed"
    },
    {
      id: 2,
      title: "AI/ML Hackathon",
      date: "2024-02-20",
      description: "Build innovative AI solutions in a 48-hour coding challenge.",
      type: "hackathon",
      location: "San Francisco",
      attendees: 200,
      status: "completed"
    },
    {
      id: 3,
      title: "Developer Meetup",
      date: "2024-03-10",
      description: "Network with fellow developers and share knowledge.",
      type: "meetup",
      location: "New York",
      attendees: 75,
      status: "ongoing"
    },
    {
      id: 4,
      title: "Tech Conference 2024",
      date: "2024-04-15",
      description: "Annual conference featuring industry leaders and cutting-edge talks.",
      type: "conference",
      location: "Austin",
      attendees: 500,
      status: "upcoming"
    }
  ];

  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'workshop':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.254 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'hackathon':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'meetup':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        );
      case 'conference':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
    }
  };

  const getStatusColor = (status: Event['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'ongoing':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-yellow-500';
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
            Community Events
          </h2>
          <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
            Join our vibrant community events and connect with developers worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-border"></div>
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-8"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 relative">
                    <div className="text-primary">
                      {getEventIcon(event.type)}
                    </div>
                    <div className={`absolute -top-1 -right-1 w-4 h-4 ${getStatusColor(event.status)} rounded-full`}></div>
                  </div>
                  <div className="ml-6 flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-neutral-light rounded-lg p-6 cursor-pointer"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-neutral-dark">
                          {event.title}
                        </h3>
                        <span className="text-sm text-neutral-gray">
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-neutral-gray text-sm mb-3">
                        {event.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral-gray">
                          📍 {event.location}
                        </span>
                        {event.attendees && (
                          <span className="text-sm text-neutral-gray">
                            👥 {event.attendees} attendees
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Event Details */}
          <div className="lg:pl-8">
            {selectedEvent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary-light to-secondary-light rounded-lg p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-neutral-dark">
                    {selectedEvent.title}
                  </h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(selectedEvent.status)}`}>
                    {selectedEvent.status}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Date & Time</h4>
                    <p className="text-neutral-gray">
                      {new Date(selectedEvent.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Location</h4>
                    <p className="text-neutral-gray">{selectedEvent.location}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Description</h4>
                    <p className="text-neutral-gray">{selectedEvent.description}</p>
                  </div>
                  
                  {selectedEvent.attendees && (
                    <div>
                      <h4 className="font-semibold text-neutral-dark mb-2">Attendees</h4>
                      <p className="text-neutral-gray">{selectedEvent.attendees} registered</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 flex gap-4">
                  <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors">
                    Register Now
                  </button>
                  <button className="border border-primary text-primary px-6 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-neutral-light rounded-lg p-8 text-center"
              >
                <div className="text-neutral-gray">
                  <svg className="w-16 h-16 mx-auto mb-4 text-neutral-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                    Select an Event
                  </h3>
                  <p className="text-neutral-gray">
                    Click on any event to view details and register.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 