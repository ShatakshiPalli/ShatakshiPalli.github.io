"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Real-time Object Detection System",
    description: "Advanced computer vision system using YOLOv8 for real-time object detection and tracking in surveillance videos. Achieved 94% accuracy with optimized inference pipeline.",
    techStack: ["Python", "PyTorch", "OpenCV", "Docker", "FastAPI"],
    liveDemo: "https://demo.shatakshi.com/object-detection",
    github: "https://github.com/shatakshi/object-detection",
    category: "Computer Vision",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Sentiment Analysis Platform",
    description: "NLP platform analyzing customer feedback across multiple channels. Processes 10K+ reviews daily with BERT-based models and real-time sentiment scoring.",
    techStack: ["TensorFlow", "BERT", "React", "MongoDB", "GCP"],
    liveDemo: "https://sentiment.shatakshi.com",
    github: "https://github.com/shatakshi/sentiment-analysis",
    category: "NLP",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    description: "ML pipeline predicting customer churn with 89% accuracy using ensemble methods. Integrated with CRM systems for proactive retention strategies.",
    techStack: ["Scikit-learn", "XGBoost", "Pandas", "Flask", "AWS"],
    liveDemo: "https://churn.shatakshi.com",
    github: "https://github.com/shatakshi/churn-prediction",
    category: "Predictive Analytics",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    title: "Neural Style Transfer API",
    description: "Deep learning API for artistic style transfer using CNN architectures. Processes images in real-time with custom style models and optimization techniques.",
    techStack: ["PyTorch", "FastAPI", "Redis", "Kubernetes", "NVIDIA GPU"],
    liveDemo: "https://style.shatakshi.com",
    github: "https://github.com/shatakshi/neural-style-transfer",
    category: "Deep Learning",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 5,
    title: "MLOps Pipeline Automation",
    description: "End-to-end MLOps platform with automated training, validation, and deployment. Features A/B testing, model monitoring, and rollback capabilities.",
    techStack: ["MLflow", "Airflow", "Docker", "Terraform", "Prometheus"],
    liveDemo: "https://mlops.shatakshi.com",
    github: "https://github.com/shatakshi/mlops-pipeline",
    category: "MLOps",
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: 6,
    title: "Data Pipeline Orchestrator",
    description: "Scalable data processing pipeline handling 1TB+ daily data ingestion. Features real-time streaming, batch processing, and automated data quality checks.",
    techStack: ["Apache Kafka", "Spark", "Airflow", "PostgreSQL", "Grafana"],
    liveDemo: "https://pipeline.shatakshi.com",
    github: "https://github.com/shatakshi/data-pipeline",
    category: "Data Engineering",
    gradient: "from-teal-500/20 to-cyan-500/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing innovative machine learning solutions that drive real-world impact through cutting-edge technology and thoughtful engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group opacity-0 animate-fade-in-up hover:-translate-y-2 transition-all duration-500"
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              <Card className={`h-full bg-gradient-to-br ${project.gradient} border-border/50 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pb-6">
                  <CardDescription className="text-sm leading-relaxed mb-4 text-muted-foreground">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs px-2 py-1 bg-background/50 hover:bg-primary/10 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex gap-3 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 group/btn hover:bg-primary/90 transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 opacity-0 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <Button
            size="lg"
            variant="outline"
            className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/ShatakshiPalli" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};