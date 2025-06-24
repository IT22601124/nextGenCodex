import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Page</h1>
      <p>Get in touch with us!</p>
      <form style={{ marginTop: '20px' }}>
        <div>
          <label>Name:</label>
          <input type="text" style={{ marginLeft: '10px', padding: '5px' }} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Email:</label>
          <input type="email" style={{ marginLeft: '10px', padding: '5px' }} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Message:</label>
          <textarea style={{ marginLeft: '10px', padding: '5px' }} />
        </div>
        <button type="submit" style={{ marginTop: '10px', padding: '10px' }}>Send</button>
      </form>
      <nav style={{ marginTop: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/counter">Counter</Link>
      </nav>
    </div>
  )
}

export default Contact
