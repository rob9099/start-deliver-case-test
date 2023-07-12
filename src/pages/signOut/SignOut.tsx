import './signout.css';
import { NavLink } from "react-router-dom";



const SignOut = () => {
  return (
    <div className='signout-container'>
      <div className='card'>
        <div className='circle'></div>
        <div className='content'>
          <h2>Signed Out</h2>
          <p>Startdeliver, The Purpose-built Platform for Customer Success</p>
          <NavLink to="/" className="nav-links">Back Home</NavLink>
        </div>
        <img
          src="https://avatars3.githubusercontent.com/u/37439169?s=200&v=4"
          alt="Startdeliver logo"
        />
      </div>
    </div>
  )
}
export default SignOut