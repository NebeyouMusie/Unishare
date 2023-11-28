import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='productName'>Unishare.</h1>
      <div className='aboutAndIcon'>
        <Link to="/about" className='aboutLink'>About</Link>
        <i className="userIcon fa-solid fa-circle-user"></i>
      </div>
    </div>
  )
}

export default Navbar