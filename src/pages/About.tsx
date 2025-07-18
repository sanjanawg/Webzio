import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Precision",
      description: "Every line of code, every automation, every invoice matters. We deliver solutions that work perfectly."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Partnership",
      description: "We're not just service providers – we're your technology partners, invested in your success."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We stay ahead of the curve, bringing you the latest technologies and best practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Webzio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a modern tech startup on a mission to simplify business operations through smart software solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
              We met back in engineering college — two curious minds solving problems, hacking together projects, and picking up freelance gigs for startups, friends, and the occasional chaiwala with an idea.

What started as casual work soon turned into serious projects. We found ourselves designing websites, automating workflows, and building end-to-end solutions for people across industries. But it wasn’t until a client asked us, “So… what’s your business card say?” that we realized we needed a name, a brand, and a bigger vision.

That’s how Webzio was born — a blend of what we do and who we are.

Sanjana brings the magic of intuitive web development and smart IoT solutions to life.

Deekshith dives deep into AI and workflow automation, and builds scalable apps that get things done.

Today, Webzio is a nimble, high-energy tech studio helping businesses grow smarter, faster, and sharper with great design, real automation, and code that works.


              </p>
              
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To empower businesses with smart software that automates the mundane, 
              amplifies the important, and delivers results that matter.
            </p>
            <div className="border-l-4 border-primary pl-4">
              <p className="text-primary font-semibold">
                "Smart software that just works."
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Meet Founders Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <img src="/images/sanjana.jpeg" alt="Sanjana" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground">Sanjana</h3>
              <p className="text-muted-foreground">Web Development & IoT Specialist</p>
              <p className="mt-2">Sanjana is passionate about creating intuitive web experiences and smart IoT solutions that connect devices and people.</p>
            </div>
            <div className="text-center">
              <img src="/images/deekshith.jpeg" alt="Deekshith" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground">Deekshith</h3>
              <p className="text-muted-foreground">AI & Automation Expert</p>
              <p className="mt-2">Deekshith loves diving into AI, building scalable apps, and automating workflows to make businesses run smoother.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build something amazing for your business
          </p>
          <NavLink to="/contact">
            <Button size="lg" className="shadow-elegant">
              Get In Touch
            </Button>
          </NavLink>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;