export default function App() {
  return (
    <div>
      <Navbar>
        <NavLinks />
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span>🔵</span>
      <h2>shine</h2>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="nav-link">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Bookings</a>
        </li>
      </ul>
    </div>
  );
}
