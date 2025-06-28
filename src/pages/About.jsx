import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-white text-[#001F3F]">
      {/* Hero Section */}
      <section className="bg-[#001F3F] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
              <p className="text-[#001F3F]/70 leading-relaxed mb-6">
                Founded in 2020, Nextgen CodeX emerged from a shared vision to bridge the gap between innovative ideas and digital reality. 
                Our journey began with a small team of passionate developers who believed that technology should be accessible, 
                powerful, and transformative for businesses of all sizes.
              </p>
              <p className="text-[#001F3F]/70 leading-relaxed mb-6">
                Today, we've grown into a dynamic team of over 25 professionals, each bringing unique expertise in software development, 
                UI/UX design, cloud architecture, and digital strategy. We've successfully delivered more than 50 projects across 
                various industries, from startups to enterprise-level organizations.
              </p>
              <p className="text-[#001F3F]/70 leading-relaxed">
                Our commitment to excellence, attention to detail, and customer-centric approach has earned us the trust of clients 
                worldwide, making us their preferred technology partner for digital transformation initiatives.
              </p>
            </div>
            <div className="bg-[#001F3F]/5 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#001F3F] mb-2">25+</div>
                  <div className="text-[#001F3F]/70">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#001F3F] mb-2">50+</div>
                  <div className="text-[#001F3F]/70">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#001F3F] mb-2">15+</div>
                  <div className="text-[#001F3F]/70">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#001F3F] mb-2">100%</div>
                  <div className="text-[#001F3F]/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-[#001F3F] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">Empowering Innovation</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Our mission is to empower businesses and individuals through innovative technology solutions that drive growth, 
                efficiency, and competitive advantage. We believe that every organization, regardless of size, deserves access 
                to world-class digital tools and expertise.
              </p>
              <p className="text-white/80 leading-relaxed">
                We strive to be more than just a technology provider – we aim to be a strategic partner in your digital journey, 
                helping you navigate the complexities of modern technology while delivering solutions that exceed expectations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Values</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#001F3F] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Innovation First</h4>
                    <p className="text-white/80">We constantly explore new technologies and methodologies to deliver cutting-edge solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#001F3F] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Quality Excellence</h4>
                    <p className="text-white/80">Every line of code, every design element, and every solution meets our high standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#001F3F] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Client Partnership</h4>
                    <p className="text-white/80">We build long-term relationships based on trust, transparency, and mutual success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Ready to Work With Us?</h2>
          <p className="text-[#001F3F]/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-[#001F3F] text-white rounded-lg font-semibold hover:bg-[#001F3F]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
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
