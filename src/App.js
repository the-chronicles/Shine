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
    <ul className="nav-menu">
      <li className="nav-item">
        <a href="#" className="nav-link">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          Service
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          Bookings
        </a>
      </li>
    </ul>
  );
}
