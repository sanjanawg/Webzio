import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Code, Zap, CreditCard } from 'lucide-react';
import { features } from 'process';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Custom Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies. From landing pages to complex web applications.",
      features: ["React & Next.js", "Mobile-first design", "SEO optimized", "Lightning fast"]
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "AI Automation",
      description: "Streamline your business operations with intelligent automation solutions that save time and reduce errors.",
      features: ["Workflow automation", "AI-powered insights", "Custom integrations", "24/7 operation"]
    },
    {
      icon: <CreditCard className="w-12 h-12 text-primary" />,
      title: "Billing & Invoicing",
      description: "Complete billing solutions that handle everything from invoicing to payment processing and reporting.",
      features: ["Automated invoicing", "Payment processing", "Financial reporting", "Client management"]
    },
    {
      icon: <CreditCard className="w-12 h-12 text-primary" />,
      title: "IoT Solutions",
      description: "Connect your devices and gather data with our IoT solutions, enabling smarter decision-making and automation.",
      features: ["Device integration", "Real-time monitoring", "Data analytics", "Custom dashboards"]
    },
    {
      icon: <CreditCard className="w-12 h-12 text-primary" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications that engage users and enhance your brand's reach.",
      features : ["iOS & Android", "User-friendly interfaces", "Performance optimization", "App store deployment"]
      
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <NavLink to="/contact">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </NavLink>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help transform your business
          </p>
          <NavLink to="/contact">
            <Button size="lg" className="shadow-elegant">
              Schedule a Consultation
            </Button>
          </NavLink>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;