"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Trophy, Users, ExternalLink, Github, MapPin, Timer } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hackathons = () => {
  const hackathons = [
    {
      id: 1,
      event: "Google AI Hackathon 2024",
      placement: "1st Place",
      placementType: "winner",
      projectTitle: "MedVision AI",
      description: "Developed an AI-powered medical imaging analysis system for early disease detection using computer vision and deep learning.",
      techStack: ["Python", "TensorFlow", "OpenCV", "FastAPI", "React", "Docker"],
      date: "March 2024",
      location: "Mountain View, CA",
      duration: "48 hours",
      teamSize: 4,
      prize: "$50,000",
      demoLink: "https://medvision-demo.com",
      codeLink: "https://github.com/shatakshi/medvision-ai",
      image: "🏥",
      bgColor: "from-blue-500/20 to-purple-600/20"
    },
    {
      id: 2,
      event: "Microsoft AI Challenge 2023",
      placement: "2nd Place",
      placementType: "runner-up",
      projectTitle: "EcoPredictor",
      description: "Built a sustainability analytics platform that predicts environmental impact using satellite data and machine learning algorithms.",
      techStack: ["Python", "PyTorch", "Azure ML", "Power BI", "Node.js", "MongoDB"],
      date: "October 2023",
      location: "Seattle, WA",
      duration: "72 hours",
      teamSize: 3,
      prize: "$25,000",
      demoLink: "https://ecopredictor.azurewebsites.net",
      codeLink: "https://github.com/shatakshi/eco-predictor",
      image: "🌍",
      bgColor: "from-green-500/20 to-blue-500/20"
    },
    {
      id: 3,
      event: "AWS ML Hackathon 2023",
      placement: "Best Innovation",
      placementType: "special",
      projectTitle: "SmartRecruit AI",
      description: "Created an intelligent recruitment platform using NLP and bias-free AI algorithms to match candidates with job opportunities.",
      techStack: ["Python", "AWS SageMaker", "Lambda", "DynamoDB", "React", "NLP"],
      date: "July 2023",
      location: "Austin, TX",
      duration: "48 hours",
      teamSize: 5,
      prize: "$15,000",
      demoLink: "https://smartrecruit.aws.com",
      codeLink: "https://github.com/shatakshi/smart-recruit",
      image: "👥",
      bgColor: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 4,
      event: "Nvidia GTC Hackathon 2023",
      placement: "3rd Place",
      placementType: "finalist",
      projectTitle: "QuantumStock Predictor",
      description: "Developed a GPU-accelerated stock market prediction system using LSTM networks and real-time data processing.",
      techStack: ["Python", "CUDA", "PyTorch", "Kafka", "Redis", "Streamlit"],
      date: "March 2023",
      location: "San Jose, CA",
      duration: "48 hours",
      teamSize: 2,
      prize: "$10,000",
      demoLink: "https://quantumstock.nvidia.com",
      codeLink: "https://github.com/shatakshi/quantum-stock",
      image: "📈",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 5,
      event: "HackMIT 2022",
      placement: "Finalist",
      placementType: "finalist",
      projectTitle: "NeuroLink Chat",
      description: "Built an accessible communication platform for patients with neurological conditions using eye-tracking and ML prediction.",
      techStack: ["Python", "OpenAI GPT", "WebRTC", "TensorFlow", "JavaScript", "WebGL"],
      date: "September 2022",
      location: "Cambridge, MA",
      duration: "48 hours",
      teamSize: 4,
      prize: "$5,000",
      demoLink: "https://neurolink-chat.mit.edu",
      codeLink: "https://github.com/shatakshi/neurolink-chat",
      image: "🧠",
      bgColor: "from-indigo-500/20 to-blue-500/20"
    },
    {
      id: 6,
      event: "Meta AR/VR Hackathon 2022",
      placement: "Best Technical Implementation",
      placementType: "special",
      projectTitle: "VRTherapy Space",
      description: "Created an immersive VR therapy platform for mental health treatment using spatial computing and biometric feedback.",
      techStack: ["Unity", "C#", "Python", "Meta SDK", "WebXR", "Node.js"],
      date: "June 2022",
      location: "Menlo Park, CA",
      duration: "72 hours",
      teamSize: 3,
      prize: "$20,000",
      demoLink: "https://vrtherapy.meta.com",
      codeLink: "https://github.com/shatakshi/vr-therapy",
      image: "🥽",
      bgColor: "from-cyan-500/20 to-teal-500/20"
    },
    {
      id: 7,
      event: "Stanford TreeHacks 2022",
      placement: "People's Choice Award",
      placementType: "special",
      projectTitle: "ClimateGuard AI",
      description: "Developed a climate change monitoring system using satellite imagery and ML to predict natural disasters.",
      techStack: ["Python", "Satellite API", "TensorFlow", "Docker", "React", "PostgreSQL"],
      date: "February 2022",
      location: "Stanford, CA",
      duration: "48 hours",
      teamSize: 4,
      prize: "$8,000",
      demoLink: "https://climateguard.stanford.edu",
      codeLink: "https://github.com/shatakshi/climate-guard",
      image: "🌡️",
      bgColor: "from-yellow-500/20 to-orange-500/20"
    },
    {
      id: 8,
      event: "IBM Call for Code 2021",
      placement: "Global Finalist",
      placementType: "finalist",
      projectTitle: "DisasterResp AI",
      description: "Built an AI-powered disaster response coordination platform that optimizes resource allocation during emergencies.",
      techStack: ["Python", "IBM Watson", "Kubernetes", "React Native", "IBM Cloud", "AI"],
      date: "October 2021",
      location: "Virtual",
      duration: "6 months",
      teamSize: 5,
      prize: "$15,000",
      demoLink: "https://disaster-resp.callforcode.org",
      codeLink: "https://github.com/shatakshi/disaster-resp-ai",
      image: "🚨",
      bgColor: "from-red-500/20 to-orange-500/20"
    }
  ];

  const getPlacementColor = (type: string) => {
    switch (type) {
      case 'winner': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'runner-up': return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
      case 'finalist': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'special': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-green-500/20 text-green-300 border-green-500/30';
    }
  };

  const getPlacementIcon = (type: string) => {
    switch (type) {
      case 'winner': return '🏆';
      case 'runner-up': return '🥈';
      case 'finalist': return '🏅';
      case 'special': return '⭐';
      default: return '🎖️';
    }
  };

  return (
    <section id="hackathons" className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Hackathons & Competitions
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovation through competitive programming and collaborative development in hackathons worldwide
          </p>
        </div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <div
              key={hackathon.id}
              className="opacity-0 animate-fade-in-up"
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${hackathon.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl mb-2">{hackathon.image}</div>
                    <Badge className={`${getPlacementColor(hackathon.placementType)} font-medium`}>
                      {getPlacementIcon(hackathon.placementType)} {hackathon.placement}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {hackathon.projectTitle}
                  </CardTitle>
                  
                  <CardDescription className="text-lg font-medium text-primary/80">
                    {hackathon.event}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {hackathon.description}
                  </p>

                  {/* Event Details */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{hackathon.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{hackathon.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Timer className="w-4 h-4" />
                      <span>{hackathon.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{hackathon.teamSize} members</span>
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="mb-6">
                    <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                      Prize: {hackathon.prize}
                    </Badge>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.techStack.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-secondary/50 hover:bg-secondary transition-colors duration-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      asChild 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a href={hackathon.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="border-border/50 hover:border-primary/50 hover:bg-primary/5"
                    >
                      <a href={hackathon.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center opacity-0 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Hackathons</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">$168K</div>
              <div className="text-sm text-muted-foreground">Total Prizes Won</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">28+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Top 3 Finishes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};