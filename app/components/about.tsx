"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                 Hi, I'm Shatakshi Palli, an aspiring Machine Learning Engineer passionate about 
                leveraging AI to solve real-world problems. I'm currently pursuing computer science 
                with a focus on machine learning and data science.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                              I thrive on challenging projects that blend technical expertise with creative 
                problem-solving, aiming to develop innovative ML solutions that create positive impact.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                 Beyond coding and model training, I explore emerging technologies, compete in 
                hackathons, and contribute to open-source projects.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-6xl text-white opacity-50">👩‍💻</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
