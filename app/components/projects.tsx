"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Sentiment Analysis",
      description: "A deep learning model that analyzes social media sentiment using LSTM networks and BERT transformers. Achieved 94% accuracy on Twitter dataset.",
      tech: ["Python", "TensorFlow", "BERT", "Flask", "React"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.jpg"
    },
    {
      title: "Predictive Healthcare Analytics",
      description: "Machine learning system for predicting patient readmission rates using ensemble methods and feature engineering techniques.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Plotly"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.jpg"
    },
    {
      title: "Computer Vision Object Detection",
      description: "Real-time object detection system using YOLO v8 for identifying and tracking multiple objects in video streams.",
      tech: ["Python", "OpenCV", "YOLOv8", "PyTorch", "Streamlit"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.jpg"
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering recommendation system for e-commerce platform using matrix factorization and deep learning approaches.",
      tech: ["Python", "TensorFlow", "Collaborative Filtering", "MongoDB", "FastAPI"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.jpg"
    },
    {
      title: "Natural Language Processing Chatbot",
      description: "Intelligent chatbot using transformer architecture for customer service automation with 90% satisfaction rate.",
      tech: ["Python", "Transformers", "Hugging Face", "FastAPI", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.jpg"
    },
    {
      title: "Time Series Forecasting",
      description: "Stock price prediction model using LSTM and attention mechanisms for financial market analysis and trend prediction.",
      tech: ["Python", "PyTorch", "LSTM", "Attention", "Streamlit"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.jpg"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent machine learning and data science projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-black border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-4xl text-white opacity-70">🤖</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-800 text-xs text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
