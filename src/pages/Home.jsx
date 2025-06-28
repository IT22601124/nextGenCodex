import React, { useState, useEffect } from "react";

// Data
const features = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions designed to meet your specific business needs and challenges.",
    icon: (
      <svg className="h-8 w-8 text-[#001F3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Web Application Development",
    description: "Modern, responsive, and scalable web applications built with cutting-edge technologies.",
    icon: (
      <svg className="h-8 w-8 text-[#001F3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: (
      <svg className="h-8 w-8 text-[#001F3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable, and cost-effective cloud infrastructure and migration services.",
    icon: (
      <svg className="h-8 w-8 text-[#001F3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Sahan Liyanage",
    role: "CEO, TechStart.lk",
    content: "Their team delivered our project ahead of schedule with exceptional quality. Truly impressed with their professionalism.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Amal Perera",
    role: "CEO, Tech Solutions",
    content: "The custom software they built transformed our operations. Highly recommend their services to any business.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Rusiru Madusanka",
    role: "Product Manager, InnovateCo",
    content: "From concept to deployment, their team was with us every step of the way. Outstanding results!",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "⏭️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind", icon: "🎨" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Flutter", icon: "📱" },
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🦄" },
  { name: "Flask", icon: "🍶" },
  { name: "Git", icon: "🔀" },
];

function HomePage() {
  const [count, setCount] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev + 1) % 100);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isHovering) {
      const testimonialTimer = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(testimonialTimer);
    }
  }, [isHovering]);

  return (
    <div className="bg-white text-[#001F3F] min-h-screen">
      {/* Floating Counter */}
      <div className="fixed bottom-6 right-6 z-50 bg-white rounded-full shadow-lg p-4 flex items-center border border-[#001F3F] hover:shadow-xl transition-all duration-300">
        <svg className="w-8 h-8 text-[#001F3F]" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="text-2xl font-bold ml-3 text-[#001F3F]">
          {count.toString().padStart(2, "0")}
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-[#001F3F] text-white">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="block text-white">Transforming Ideas</span>
            <span className="block text-white">Into Digital Reality</span>
          </h1>
          <p className="text-xl text-white/80 my-8 max-w-2xl mx-auto">
            We craft innovative software solutions that drive business growth and technological advancement with precision and passion.
          </p>
          <div className="flex justify-center gap-6 mt-10">
            <a
              href="/contact"
              className="px-10 py-4 rounded-lg font-semibold bg-white text-[#001F3F] hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
            <a
              href="/projects"
              className="px-10 py-4 rounded-lg font-semibold bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#001F3F] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Our Projects
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-[#001F3F] uppercase">Services</span>
            <h2 className="mt-4 text-4xl font-extrabold text-[#001F3F]">Everything You Need to Build Amazing Software</h2>
            <p className="mt-4 text-xl text-[#001F3F]/70 max-w-2xl mx-auto">
              Comprehensive software development services to help your business thrive in the digital age.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative bg-white rounded-xl border border-[#001F3F]/20 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute -top-6 left-6 flex items-center justify-center h-14 w-14 rounded-xl bg-white border border-[#001F3F]/30 shadow-lg">
                  {feature.icon}
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#001F3F] mb-3">{feature.title}</h3>
                  <p className="text-[#001F3F]/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-white/80 uppercase">Technologies</span>
            <h2 className="mt-4 text-4xl font-extrabold text-white">Our Technology Stack</h2>
            <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
              Modern technologies powering high-performance solutions
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center h-32 bg-white rounded-xl border border-white/20 font-bold text-[#001F3F] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl mb-2">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-[#001F3F] uppercase">Testimonials</span>
            <h2 className="mt-4 text-4xl font-extrabold text-[#001F3F]">What Our Clients Say</h2>
          </div>
          <div 
            className="bg-white rounded-xl border border-[#001F3F]/20 p-10 mx-auto shadow-lg"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#001F3F]/30">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-6">
                <h4 className="text-xl font-semibold text-[#001F3F]">{testimonials[activeTestimonial].name}</h4>
                <p className="text-[#001F3F]/70">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
            <blockquote className="mt-6 text-xl text-[#001F3F]/80 italic leading-relaxed">
              &ldquo;{testimonials[activeTestimonial].content}&rdquo;
            </blockquote>
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === idx ? "bg-[#001F3F] w-6" : "bg-[#001F3F]/30"}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-white/80 uppercase">Our Impact</span>
            <h2 className="mt-4 text-4xl font-extrabold text-white">Delivering Results That Matter</h2>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-xl border border-white/20 p-10 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-bold text-[#001F3F] mb-3">50+</div>
              <div className="text-xl font-medium text-[#001F3F]/70">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl border border-white/20 p-10 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-bold text-[#001F3F] mb-3">100%</div>
              <div className="text-xl font-medium text-[#001F3F]/70">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-xl border border-white/20 p-10 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-bold text-[#001F3F] mb-3">15+</div>
              <div className="text-xl font-medium text-[#001F3F]/70">Technologies</div>
            </div>
            <div className="bg-white rounded-xl border border-white/20 p-10 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-bold text-[#001F3F] mb-3">24/7</div>
              <div className="text-xl font-medium text-[#001F3F]/70">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#001F3F] leading-tight">
            <span className="block">Ready to Start Your Project?</span>
            <span className="block">Let's Build Something Amazing Together</span>
          </h2>
          <p className="text-xl text-[#001F3F]/70 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block px-14 py-5 bg-[#001F3F] text-white rounded-lg font-bold text-xl hover:bg-[#001F3F]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;