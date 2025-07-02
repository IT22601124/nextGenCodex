import React from 'react'

function Projects() {
  // Recent Projects (now at the top)
  const recentProjects = [
    {
      id: 1,
      title: "Dinetha Astrological Website",
      description: "Astrological institute booking and appointment system",
      image: "/images/p1.png",
      techStack: ["React", "Tailwind CSS", "Firebase (backend integration)",],
      link: "https://dinethaastrological.com/",
    },
    {
      id: 2,
      title: "Tourism Website",
      description: "",
      image: "/images/p2.png",
      techStack: ["React", "Tailwind CSS"],
      link: "https://ceylon-bliss-j8h9.vercel.app/",
    },
  ];

  // Ongoing Projects (now below Recent Projects)
  const ongoingProjects = [
    {
      id: 1,
      title: "Learning Management System (LMS)",
      description: "",
      image: "/images/lms.png",
      techStack: ["React", "Node.js (Express.js)", "Firebase Realtime DB", "OAuth2 (Google/Facebook)", "Google Cloud Storage"],
    },
    {
      id: 2,
      title: "Island Magic (AI-powered Tourism Website)",
      description: "",
      image: "/images/sl.png",
      techStack: ["React", "Firebase", "Python"],
    },
  ];

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

      {/* Recent Projects Section (now at the top) */}
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
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-3">{project.title}</h3>
                  <p className="text-[#001F3F] mb-4 leading-relaxed">{project.description}</p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-[#001F3F]/10 text-[#001F3F] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block bg-white text-[#001F3F] border-2 border-[#001F3F] py-3 rounded-lg font-semibold hover:bg-[#001F3F] hover:text-white transition-all duration-300 text-center"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section (now below Recent Projects) */}
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
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-3">{project.title}</h3>
                  <p className="text-[#001F3F] mb-4 leading-relaxed">{project.description}</p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-[#001F3F]/10 text-[#001F3F] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* No button for ongoing projects */}
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
              className="px-8 py-4 bg-[#EAD8B1] text-black rounded-lg font-semibold hover:bg-[#EAD8B1]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
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