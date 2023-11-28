import { NavLink } from 'react-router-dom'
import './sidebar.css'
import unishareLogo from '/src/assets/Unishare-01 1.svg'

const Sidebar = () => {
  const currentDate = new Date();
  const currentyear = currentDate.getFullYear();

  const style = {
    color: "white",
    background: "#046E5D"
  }


  return (
    <div className='sidebar'>
      <div className='logoAndText'>
        <img src={unishareLogo} alt="Unishare Logo" className='unishareLogo'/>
        <p className='greeting'>Hello 👋,</p>
        <p className='userName'>Abebe Kebede</p>
      </div>
      <div className='navigationButtons'>
          <NavLink 
            to='/' 
            className='navigationBtn'
            style={({isActive}) => isActive ? style : null}
            >Dashboard</NavLink>
          <NavLink
            to='/received'
            className='navigationBtn'
          >Received</NavLink>
          <NavLink
            to='posts'
            className='navigationBtn'
          >Posts</NavLink>
      </div>
      <p className='copyrightText'>Copyright © {currentyear}</p>
    </div>
  )
}

export default Sidebar