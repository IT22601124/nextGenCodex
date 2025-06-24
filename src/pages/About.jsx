import { Link } from 'react-router-dom'

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Page</h1>
      <p>This is the about page with some information about our application.</p>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
        <Link to="/counter">Counter</Link>
      </nav>
    </div>
  )
}

export default About
