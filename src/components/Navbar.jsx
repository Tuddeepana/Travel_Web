import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a href="#activities">Activities</a></li>
        <li><a href="#services">Services</a></li>
        <li><button className="contact-btn">Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
