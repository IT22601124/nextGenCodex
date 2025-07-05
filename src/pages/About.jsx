import React from 'react'

function About() {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Gangul Ranaweera",
      title: "CEO & Founder",
      image: "/images/gangul.jpg"
    },
    {
      id: 2,
      name: "Tharindu Herath",
      title: "Co-Founder",
      image: "/images/michael.jpg"
    },
    {
      id: 3,
      name: "Sadeepa Nimsara",
      title: "Co-Founder",
      image: "/images/emily.jpg"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Head of Marketing",
      image: "/images/david.jpg"
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Lead Developer",
      image: "/images/lisa.jpg"
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Project Manager",
      image: "/images/james.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#001F3F]">
      {/* Hero Section */}
      <section className="bg-white text-[#001F3F] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 text-[#001F3F]">About Us</h1>
          <p className="text-xl text-[#001F3F] max-w-2xl mx-auto">
            We are a passionate team of developers, designers, and innovators dedicated to creating exceptional digital solutions.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001F3F] mb-6">Who We Are</h2>
            <div className="w-24 h-1 bg-[#001F3F] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#001F3F] mb-4">Our Story</h3>
              <p className="text-[#001F3F] leading-relaxed mb-6">
                Founded in 2020, Nextgen CodeX emerged from a shared vision to bridge the gap between innovative ideas and digital reality. 
                Our journey began with a small team of passionate developers who believed that technology should be accessible, 
                powerful, and transformative for businesses of all sizes.
              </p>
              <p className="text-[#001F3F] leading-relaxed mb-6">
                Today, we've grown into a dynamic team of over 25 professionals, each bringing unique expertise in software development, 
                UI/UX design, cloud architecture, and digital strategy. We've successfully delivered more than 50 projects across 
                various industries, from startups to enterprise-level organizations.
              </p>
              <p className="text-[#001F3F] leading-relaxed">
                Our commitment to excellence, attention to detail, and customer-centric approach has earned us the trust of clients 
                worldwide, making us their preferred technology partner for digital transformation initiatives.
              </p>
            </div>
            <div className="bg-white border border-[#001F3F] p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#001F3F] mb-2">25+</div>
                  <div className="text-[#001F3F]">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#001F3F] mb-2">50+</div>
                  <div className="text-[#001F3F]">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#001F3F] mb-2">15+</div>
                  <div className="text-[#001F3F]">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#001F3F] mb-2">100%</div>
                  <div className="text-[#001F3F]">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001F3F] mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-[#001F3F] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white border border-[#001F3F] p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-[#001F3F] mb-4">Empowering Innovation</h3>
              <p className="text-[#001F3F] leading-relaxed mb-6">
                Our mission is to empower businesses and individuals through innovative technology solutions that drive growth, 
                efficiency, and competitive advantage. We believe that every organization, regardless of size, deserves access 
                to world-class digital tools and expertise.
              </p>
              <p className="text-[#001F3F] leading-relaxed">
                We strive to be more than just a technology provider – we aim to be a strategic partner in your digital journey, 
                helping you navigate the complexities of modern technology while delivering solutions that exceed expectations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#001F3F] mb-4">Our Values</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#001F3F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001F3F] mb-2">Innovation First</h4>
                    <p className="text-[#001F3F]">We constantly explore new technologies and methodologies to deliver cutting-edge solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#001F3F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001F3F] mb-2">Quality Excellence</h4>
                    <p className="text-[#001F3F]">Every line of code, every design element, and every solution meets our high standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#001F3F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001F3F] mb-2">Client Partnership</h4>
                    <p className="text-[#001F3F]">We build long-term relationships based on trust, transparency, and mutual success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001F3F] mb-6">Meet Our Team</h2>
            <div className="w-24 h-1 bg-[#001F3F] mx-auto mb-6"></div>
            <p className="text-lg text-[#001F3F]/80 max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in technology, design, and business strategy to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Profile Image */}
                <div className="h-64 bg-gradient-to-br from-[#001F3F] to-[#EAD8B1] flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.title}`}
                    className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white hidden">
                    <svg className="w-16 h-16 text-[#001F3F]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#001F3F] mb-2">{member.name}</h3>
                  <p className="text-[#EAD8B1] font-semibold mb-6">{member.title}</p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-3 mt-6">
                    <a href="#" className="w-8 h-8 bg-[#001F3F]/10 rounded-full flex items-center justify-center hover:bg-[#001F3F] hover:text-white transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-[#001F3F]/10 rounded-full flex items-center justify-center hover:bg-[#001F3F] hover:text-white transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-[#001F3F]/10 rounded-full flex items-center justify-center hover:bg-[#001F3F] hover:text-white transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Ready to Work With Us?</h2>
          <p className="text-[#001F3F] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="px-8 py-4 font-semibold rounded-lg bg-brand-gradient text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundImage: 'linear-gradient(90deg, #2D6FFF 0%, #A933FF 100%)' }}
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="px-8 py-4 bg-white text-[#001F3F] border-2 border-[#001F3F] rounded-lg font-semibold hover:bg-[#001F3F] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
