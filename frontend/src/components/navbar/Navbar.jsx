import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo"> m-ticket booking
            
            </span>
            <span className="button">Tickets</span>
            <span className="button">Destination</span>
            <span className="button">About us</span>
            <div className="navItems">
      
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar