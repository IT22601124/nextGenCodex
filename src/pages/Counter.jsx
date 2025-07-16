import { useState } from 'react'
import { Link } from 'react-router-dom'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white text-[#001F3F] p-8">
      {/* Hero Section */}
      <section className="bg-white text-[#001F3F] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 text-[#001F3F]">Counter Page</h1>
          <p className="text-xl text-[#001F3F] max-w-2xl mx-auto">
            Simple interactive counter to demonstrate React state management.
          </p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#001F3F] mb-8">Counter Page</h1>
        <div className="text-center mb-8">
          <p className="text-2xl font-semibold text-[#001F3F] mb-6">Count: {count}</p>
          <div className="space-x-4">
            <button 
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-[#EAD8B1] text-black rounded-lg font-medium hover:bg-[#EAD8B1]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Increment
            </button>
            <button 
              onClick={() => setCount(count - 1)}
              className="px-6 py-3 bg-white text-[#001F3F] border-2 border-[#001F3F] rounded-lg font-medium hover:bg-[#001F3F] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Decrement
            </button>
          </div>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="text-[#001F3F] hover:text-[#001F3F]/70 transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-[#001F3F] hover:text-[#001F3F]/70 transition-colors duration-300">About</Link>
          <Link to="/contact" className="text-[#001F3F] hover:text-[#001F3F]/70 transition-colors duration-300">Contact</Link>
          <Link to="/projects" className="text-[#001F3F] hover:text-[#001F3F]/70 transition-colors duration-300">Projects</Link>
        </nav>
      </div>
    </div>
  )
}

export default Counter
