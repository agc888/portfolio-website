import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Brain, Microscope, Dna, FlaskRound as Flask } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,62,255,0.1),rgba(0,0,0,0))]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-purple-400 mb-4 font-mono">Bioinformatics & AI Pathology</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
            Andrew Causer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Pioneering the intersection of spatial omics, AI pathology, and biomedical science to revolutionize disease understanding and treatment.
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com" className="hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-900/20">
              <Dna className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Spatial Omics</h3>
              <p className="text-gray-400">Leveraging cutting-edge spatial technologies to map and analyze cellular interactions in disease contexts.</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-900/20">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Pathology</h3>
              <p className="text-gray-400">Developing AI solutions for digital pathology to enhance disease diagnosis and prognosis.</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-900/20">
              <Microscope className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clinical Pathology</h3>
              <p className="text-gray-400">Extensive experience in pathology laboratories and clinical diagnostics.</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-900/20">
              <Flask className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Biomedical Science</h3>
              <p className="text-gray-400">Strong foundation in biomedical principles and research methodologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Research & Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Spatial Transcriptomics Analysis Platform",
                description: "Developed a comprehensive platform for analyzing spatial transcriptomics data, enabling researchers to visualize and interpret complex cellular interactions.",
                image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=60"
              },
              {
                title: "AI-Powered Pathology Diagnosis",
                description: "Implemented deep learning models for automated tissue analysis and cancer detection, improving diagnostic accuracy and efficiency.",
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60"
              },
              {
                title: "Biomarker Discovery Pipeline",
                description: "Created a computational pipeline for identifying novel biomarkers in spatial omics data, leading to potential therapeutic targets.",
                image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop&q=60"
              },
              {
                title: "Clinical Data Integration System",
                description: "Designed and implemented a system to integrate clinical data with spatial omics findings, enabling better patient stratification.",
                image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=60"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-900/20">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
                    >
                      <Github size={16} />
                      Repository
                    </a>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
                    >
                      <ExternalLink size={16} />
                      Publication
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Academic Background</h2>
          <div className="prose prose-invert mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With a Master's in Bioinformatics and a Bachelor's in Biomedical Science, I bridge the gap between biological understanding and computational innovation. My experience spans both traditional pathology laboratories and cutting-edge AI companies, where I've specialized in spatial omics technologies and digital pathology.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My research focuses on leveraging advanced computational methods to uncover disease mechanisms through spatial omics analysis, while also developing AI-powered tools for pathology diagnostics. This unique combination of skills allows me to contribute to both the theoretical understanding of diseases and the practical implementation of diagnostic solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Research Collaboration</h2>
          <p className="text-lg text-gray-300 mb-8">
            Interested in collaborating on research projects or discussing potential applications of spatial omics and AI in pathology?
          </p>
          <a 
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-purple-900/20">
        <p>© {new Date().getFullYear()} Andrew Causer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;