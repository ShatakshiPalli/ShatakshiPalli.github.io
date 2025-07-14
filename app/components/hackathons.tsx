"use client"

import { motion } from "framer-motion"

export default function Hackathons() {
  const hackathons = [
    {
      title: "MLH Global Hack Week",
      date: "December 2024",
      position: "1st Place - AI Track",
      project: "Smart City Traffic Optimization",
      description: "Developed an AI-powered traffic management system using reinforcement learning to optimize traffic flow in urban areas, reducing congestion by 35%.",
      tech: ["Python", "Reinforcement Learning", "OpenAI Gym", "Flask"],
      award: "🏆 Winner"
    },
    {
      title: "Google Solution Challenge",
      date: "October 2024",
      position: "Top 10 Finalist",
      project: "EcoPredict - Climate Impact Analyzer",
      description: "Created a machine learning platform to predict environmental impact of business decisions using satellite data and weather patterns.",
      tech: ["TensorFlow", "Google Earth Engine", "React", "Firebase"],
      award: "🥇 Finalist"
    },
    {
      title: "Microsoft Imagine Cup",
      date: "August 2024",
      position: "2nd Place - Regional",
      project: "HealthAI Assistant",
      description: "Built an AI-powered healthcare assistant that helps diagnose skin conditions using computer vision and provides treatment recommendations.",
      tech: ["PyTorch", "Computer Vision", "Azure", "React Native"],
      award: "🥈 Runner-up"
    },
    {
      title: "Meta AI Hackathon",
      date: "June 2024",
      position: "3rd Place",
      project: "Social Media Misinformation Detector",
      description: "Developed a real-time fact-checking system using NLP and graph neural networks to identify and flag misinformation on social platforms.",
      tech: ["BERT", "Graph Neural Networks", "FastAPI", "React"],
      award: "🥉 Third Place"
    },
    {
      title: "OpenAI GPT-4 Challenge",
      date: "April 2024",
      position: "Top 50",
      project: "CodeMentor AI",
      description: "Created an intelligent code review and mentoring system that provides personalized feedback and learning recommendations for developers.",
      tech: ["GPT-4 API", "Python", "Git Integration", "Vue.js"],
      award: "🌟 Top 50"
    },
    {
      title: "IEEE Innovation Challenge",
      date: "February 2024",
      position: "1st Place - ML Category",
      project: "Smart Agriculture Monitor",
      description: "Developed IoT-based crop monitoring system with predictive analytics for optimal farming decisions using sensor data and weather forecasts.",
      tech: ["IoT", "Time Series Analysis", "LSTM", "React Dashboard"],
      award: "🏆 Category Winner"
    }
  ]

  return (
    <section id="hackathons" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Hackathons & Competitions</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey through various hackathons and competitive programming events
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.title}
                className="relative bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition-colors"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{hackathon.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{hackathon.date}</span>
                      <span className="text-yellow-400 font-medium">{hackathon.award}</span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {hackathon.position}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-blue-400 mb-2">{hackathon.project}</h4>
                  <p className="text-gray-300 leading-relaxed">{hackathon.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {hackathon.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-800 text-xs text-gray-300 rounded border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
