import React from 'react'

function Projects() {
  const ongoingProjects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      description: "Modernizing a legacy e-commerce platform with React, Node.js, and AWS. Implementing advanced search, payment integration, and mobile-first responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      status: "In Progress",
      progress: 75,
      technologies: ["React", "Node.js", "AWS", "MongoDB"]
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management solution for clinics and hospitals. Features include patient records, appointment scheduling, billing, and reporting modules.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      status: "In Progress",
      progress: 60,
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    }
  ]

  const recentProjects = [
    {
      id: 3,
      title: "Financial Analytics Dashboard",
      description: "Real-time financial analytics dashboard for investment firms. Provides advanced charting, portfolio tracking, and predictive analytics capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      status: "Completed",
      completionDate: "December 2023",
      technologies: ["React", "TypeScript", "D3.js", "Firebase"]
    },
    {
      id: 4,
      title: "Mobile Learning App",
      description: "Cross-platform mobile application for online learning. Features include video streaming, interactive quizzes, progress tracking, and offline content access.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      status: "Completed",
      completionDate: "November 2023",
      technologies: ["Flutter", "Firebase", "Node.js", "AWS"]
    }
  ]

  return (
    <div className="min-h-screen bg-white text-[#001F3F]">
      {/* Hero Section */}
      <section className="bg-white text-[#001F3F] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 text-[#001F3F]">Our Projects</h1>
          <p className="text-xl text-[#001F3F] max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions that drive business transformation and user engagement.
          </p>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001F3F] mb-6">Ongoing Projects</h2>
            <div className="w-24 h-1 bg-[#001F3F] mx-auto"></div>
            <p className="text-[#001F3F] mt-6 max-w-2xl mx-auto">
              Currently working on cutting-edge solutions that push the boundaries of technology and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ongoingProjects.map((project) => (
              <div key={project.id} className="bg-white border border-[#001F3F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#001F3F] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-3">{project.title}</h3>
                  <p className="text-[#001F3F] mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-[#001F3F] mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-[#001F3F]/10 rounded-full h-2">
                      <div 
                        className="bg-[#001F3F] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-[#001F3F]/10 text-[#001F3F] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-[#001F3F] text-white py-3 rounded-lg font-semibold hover:bg-[#001F3F]/90 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001F3F] mb-6">Recent Projects</h2>
            <div className="w-24 h-1 bg-[#001F3F] mx-auto"></div>
            <p className="text-[#001F3F] mt-6 max-w-2xl mx-auto">
              Successfully delivered projects that have made a significant impact on our clients' businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentProjects.map((project) => (
              <div key={project.id} className="bg-white border border-[#001F3F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#001F3F] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-3">{project.title}</h3>
                  <p className="text-[#001F3F] mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Completion Date */}
                  <div className="mb-4">
                    <span className="text-[#001F3F] text-sm">Completed: {project.completionDate}</span>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-[#001F3F]/10 text-[#001F3F] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-white text-[#001F3F] border-2 border-[#001F3F] py-3 rounded-lg font-semibold hover:bg-[#001F3F] hover:text-white transition-all duration-300">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Ready to Start Your Project?</h2>
          <p className="text-[#001F3F] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-[#001F3F] text-white rounded-lg font-semibold hover:bg-[#001F3F]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start a Project
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-white text-[#001F3F] border-2 border-[#001F3F] rounded-lg font-semibold hover:bg-[#001F3F] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects 