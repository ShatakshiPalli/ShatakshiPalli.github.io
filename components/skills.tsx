"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Code, 
  Wrench, 
  Cloud, 
  Database,
  Cpu,
  Terminal,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 95 },
      { name: "OpenCV", level: 80 },
      { name: "Keras", level: 88 },
      { name: "NLTK", level: 82 }
    ]
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 85 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Java", level: 75 },
      { name: "Scala", level: 70 }
    ]
  },
  {
    title: "Data Engineering & Tools",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Apache Spark", level: 85 },
      { name: "Hadoop", level: 80 },
      { name: "Kafka", level: 78 },
      { name: "Airflow", level: 82 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 75 }
    ]
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Google Cloud", level: 85 },
      { name: "Azure", level: 80 },
      { name: "Databricks", level: 88 },
      { name: "Snowflake", level: 83 },
      { name: "BigQuery", level: 87 }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across machine learning, 
            data engineering, and cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  category, 
  index 
}: { 
  category: typeof skillCategories[0];
  index: number;
}) => {
  const Icon = category.icon;

  return (
    <div 
      className="opacity-0 animate-fade-in-up hover:scale-105 transition-all duration-500"
      style={{animationDelay: `${0.4 + index * 0.2}s`}}
    >
      <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group">
        <div className="mb-6">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {category.title}
          </h3>
        </div>

        <div className="space-y-6">
          {category.skills.map((skill, skillIndex) => (
            <SkillItem 
              key={skillIndex} 
              skill={skill} 
              delay={skillIndex * 0.1}
              color={category.color}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

const SkillItem = ({ 
  skill, 
  delay,
  color 
}: { 
  skill: { name: string; level: number }; 
  delay: number;
  color: string;
}) => {
  return (
    <div className="space-y-2 opacity-0 animate-fade-in-left" style={{animationDelay: `${delay + 0.8}s`}}>
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="relative">
        <Progress 
          value={skill.level} 
          className="h-2 bg-muted"
        />
        <div
          className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${color} animate-progress-fill transition-all duration-1000 ease-out`}
          style={{
            width: `${skill.level}%`,
            animationDelay: `${delay + 1}s`
          }}
        />
      </div>
    </div>
  );
};