import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Code, Zap, CreditCard, Star, Users, Target } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const taglines = [
    "Code. Automate. Bill. Repeat.",
    "Smart software that just works.",
    "Web, AI, and billing done right."
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Custom Web Development",
      description: "Modern, responsive websites that convert visitors into customers"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "AI Automation",
      description: "Intelligent systems that work 24/7 to streamline your operations"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Billing & Invoicing",
      description: "Complete financial management solutions for modern businesses"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      quote: "Webzio transformed our entire workflow. The AI automation alone saved us 20 hours per week.",
      rating: 5
    },
    {
      name: "Mark Rodriguez",
      company: "Creative Agency",
      quote: "Their web development team delivered exactly what we needed, on time and on budget.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "Freelance Consultant",
      quote: "The billing software has made invoicing so much easier. I can focus on what I do best.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Innovating for{' '}
                  <span className="text-primary">people's pain points</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  We help businesses build custom websites, automate operations with AI,develop mobile apps,
                  streamline billing, and more. All with a focus on simplicity and effectiveness
                  and streamline billing — all with the elegance of modern tech.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <NavLink to="/contact">
                  <Button size="lg" className="shadow-elegant">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </NavLink>
                <NavLink to="/services">
                  <Button variant="outline" size="lg">
                    View Our Work
                  </Button>
                </NavLink>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p className="italic">{taglines[0]}</p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern tech solutions" 
                className="w-full rounded-lg shadow-elegant"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-hero rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything you need to scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startups to established businesses, we provide the tools and expertise 
              to help you grow faster and work smarter.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <NavLink to="/services">
              <Button variant="outline" size="lg">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What our clients say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of businesses that have already made the switch to smarter software solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <NavLink to="/contact">
                <Button size="lg" className="shadow-elegant">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </NavLink>
              <NavLink to="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
