"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Coffee, Award, BarChart3, DollarSign, Mail, MessageSquare, Star, Users, Leaf, Flame, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="BrewCraft Coffee"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Yo yo"
          description="Experience the perfect blend of quality, taste, and atmosphere in our cozy coffee shop. From artisan espresso to specialty lattes."
          tag="Premium Coffee"
          tagIcon={Coffee}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          buttons={[
            {
              text: "Order Now",
              href: "contact"
            },
            {
              text: "View Menu",
              href: "product"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "We're passionate coffee artisans dedicated to bringing you the finest coffee experience.",
            "Every bean is carefully selected, expertly roasted, and crafted with love to create the perfect cup."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Why Choose Our Coffee"
          description="Discover what makes our coffee shop special and why customers keep coming back"
          tag="Quality"
          tagIcon={Star}
          features={[
            {
              title: "Expert Baristas",
              description: "Our skilled baristas are trained in the art of coffee making, ensuring every cup is perfect",
              icon: Users
            },
            {
              title: "Premium Beans",
              description: "We source only the finest coffee beans from sustainable farms around the world",
              icon: Leaf
            },
            {
              title: "Fresh Roasted",
              description: "All our coffee is roasted in-house daily to guarantee maximum freshness and flavor",
              icon: Flame
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Our Coffee Menu"
          description="Choose from our selection of handcrafted coffee beverages"
          tag="Menu"
          tagIcon={Coffee}
          products={[
            {
              id: "1",
              name: "Classic Espresso",
              price: "$3.50",
              imageSrc: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Caffe Latte",
              price: "$4.50",
              imageSrc: "https://images.pexels.com/photos/23057984/pexels-photo-23057984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Cappuccino",
              price: "$4.25",
              imageSrc: "https://images.pexels.com/photos/3310817/pexels-photo-3310817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Coffee Packages"
          description="Perfect options for coffee lovers and businesses"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "1",
              badge: "Popular",
              badgeIcon: Coffee,
              price: "$19.99",
              subtitle: "Perfect for daily coffee lovers",
              features: [
                "5 premium coffee drinks",
                "Free wifi access",
                "Loyalty points",
                "Mobile app ordering"
              ]
            },
            {
              id: "2",
              badge: "Best Value",
              badgeIcon: Star,
              price: "$34.99",
              subtitle: "Great for coffee enthusiasts",
              features: [
                "10 premium coffee drinks",
                "Priority seating",
                "Free pastry with each drink",
                "Barista coffee tutorials"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Impact"
          description="Numbers that show our commitment to quality coffee"
          tag="Stats"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              value: "5,000+",
              description: "Happy Customers Served"
            },
            {
              id: "2",
              value: "99%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "3",
              value: "50+",
              description: "Coffee Varieties Available"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The passionate people behind your perfect cup of coffee"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Head Barista",
              description: "Coffee enthusiast with 8 years of experience in crafting the perfect espresso and latte art.",
              imageSrc: "https://images.pexels.com/photos/3928260/pexels-photo-3928260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/sarahcoffee"
                }
              ]
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Owner & Roaster",
              description: "Founded BrewCraft Coffee with a vision to bring premium coffee experiences to our community.",
              imageSrc: "https://images.pexels.com/photos/34164498/pexels-photo-34164498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Twitter,
                  url: "https://twitter.com/mikecoffee"
                }
              ]
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Coffee Specialist",
              description: "Passionate about coffee education and helping customers discover their perfect brew.",
              imageSrc: "https://images.pexels.com/photos/34400304/pexels-photo-34400304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/emilyrodriguez"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from our valued coffee lovers"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "John Smith",
              role: "Regular Customer",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6864505/pexels-photo-6864505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Maria Garcia",
              role: "Coffee Enthusiast",
              company: "Freelancer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "David Wilson",
              role: "Business Owner",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5264954/pexels-photo-5264954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Lisa Thompson",
              role: "Student",
              company: "University",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted Coffee Experience"
          description="Join the community of coffee lovers who trust our quality"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/16218527/pexels-photo-16218527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/31705170/pexels-photo-31705170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our coffee shop"
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We're open Monday to Friday from 6:30 AM to 8:00 PM, and weekends from 7:00 AM to 9:00 PM."
            },
            {
              id: "2",
              title: "Do you offer dairy-free alternatives?",
              content: "Yes! We offer almond milk, oat milk, soy milk, and coconut milk as alternatives to regular dairy."
            },
            {
              id: "3",
              title: "Can I order coffee beans to take home?",
              content: "Absolutely! We sell our freshly roasted coffee beans in various sizes. You can also subscribe for monthly deliveries."
            },
            {
              id: "4",
              title: "Do you provide catering services?",
              content: "Yes, we offer catering services for events, meetings, and special occasions. Contact us for custom packages."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          tagIcon={Mail}
          title="Visit Us Today"
          description="Come experience the perfect cup of coffee in our cozy atmosphere. We'd love to serve you!"
          imageSrc="https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="Subscribe to our newsletter for special offers and coffee updates."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Coffee",
                  href: "product"
                },
                {
                  label: "Pastries",
                  href: "product"
                },
                {
                  label: "Specialty Drinks",
                  href: "product"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Team",
                  href: "team"
                },
                {
                  label: "Locations",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Catering",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 BrewCraft Coffee"
        />
      </div>
    </ThemeProvider>
  );
}