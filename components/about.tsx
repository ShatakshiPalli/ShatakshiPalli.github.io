"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, TrendingUp, Users, Award, Calendar, MapPin } from "lucide-react";

export const About = () => {
  const stats = [
    { label: "Years Experience", value: "5+", icon: Calendar },
    { label: "ML Projects", value: "50+", icon: Brain },
    { label: "Team Collaborations", value: "20+", icon: Users },
    { label: "Performance Improvement", value: "35%", icon: TrendingUp }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior ML Engineer",
      company: "Tech Innovations Inc.",
      description: "Leading ML model deployment and optimization initiatives",
      location: "San Francisco, CA"
    },
    {
      year: "2022",
      title: "ML Engineer",
      company: "DataFlow Solutions",
      description: "Developed predictive analytics systems for enterprise clients",
      location: "Seattle, WA"
    },
    {
      year: "2021",
      title: "Data Scientist",
      company: "AI Research Lab",
      description: "Research and development of novel ML algorithms",
      location: "Boston, MA"
    },
    {
      year: "2019",
      title: "M.S. Computer Science",
      company: "Stanford University",
      description: "Specialized in Machine Learning and Artificial Intelligence",
      location: "Stanford, CA"
    }
  ];

  const skills = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLOps", 
    "AWS", "Docker", "Kubernetes", "SQL", "MongoDB"
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate ML Engineer with expertise in building scalable machine learning systems 
            that drive real-world impact. I transform complex data into intelligent solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
              <Card key={stat.label} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - About & Skills */}
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <Brain className="h-6 w-6 text-blue-400" />
                    My Journey
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    I discovered my passion for machine learning during my computer science studies at Stanford. 
                    What started as curiosity about neural networks evolved into a career dedicated to pushing 
                    the boundaries of AI technology.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Today, I specialize in end-to-end ML pipeline development, from research and prototyping 
                    to production deployment. I believe in creating ML solutions that are not just accurate, 
                    but also scalable, maintainable, and ethically responsible.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <Code className="h-6 w-6 text-green-400" />
                    Technical Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary" 
                        className="bg-slate-700 text-slate-200 hover:bg-slate-600 transition-all duration-300 hover:scale-105 cursor-default"
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Notable Achievement</h3>
                      <p className="text-slate-300">
                        Developed a fraud detection system that reduced false positives by 45% 
                        while maintaining 99.8% accuracy, saving the company $2M annually.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-purple-400" />
                  Professional Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div
                      key={item.year}
                      className="relative pl-8 pb-6 last:pb-0 opacity-0 animate-fade-in-left"
                      style={{animationDelay: `${1 + index * 0.2}s`}}
                    >
                      {/* Timeline line */}
                      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-400 to-purple-400"></div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1.5 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-0.5 hover:scale-150 transition-transform duration-300"></div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="border-blue-400 text-blue-400">
                            {item.year}
                          </Badge>
                          <div className="flex items-center gap-1 text-slate-400 text-sm">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-white">
                          {item.title}
                        </h4>
                        
                        <p className="text-blue-400 font-medium">
                          {item.company}
                        </p>
                        
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 opacity-0 animate-fade-in-up" style={{animationDelay: '1.8s'}}>
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                I&apos;m always excited to collaborate on challenging ML projects and explore 
                innovative solutions. Feel free to reach out to discuss opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};