import PageTransition from '../components/ui/page-transition';
import ScrollAnimation from '../components/ui/scroll-animation';
import StaggeredAnimation from '../components/ui/staggered-animation';
import NewsletterSignup from '../components/ui/newsletter-signup';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Mission from '../components/sections/Mission';
import Partners from '../components/sections/Partners';
import SocialConnect from '../components/sections/SocialConnect';
import EventTimeline from '../components/sections/EventTimeline';
import MemberSpotlight from '../components/sections/MemberSpotlight';
import TechStack from '../components/sections/TechStack';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        
        <ScrollAnimation>
          <Stats />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <Mission />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <EventTimeline />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <MemberSpotlight />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <TechStack />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <Partners />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <SocialConnect />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <NewsletterSignup />
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </PageTransition>
  );
}
