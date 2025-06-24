import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <nav>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
        <Link to="/counter">Counter</Link>
      </nav>
    </div>
  )
}

export default Home
